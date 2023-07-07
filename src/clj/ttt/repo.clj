(ns ttt.repo
  (:require [clojure.java.jdbc :as j]
            [ttt.util :refer :all]
            [ttt.move :refer [game-over?]])
  (:import (java.io EOFException)
           (java.util Date)))

(def config-file "db-config.edn")
(def memory-store (atom {:moves {}}))

(defn get-db-config []
  (read-string (slurp config-file)))

(defmulti save-state! (fn [state] (:destination (get-db-config))))
(defmulti get-open-game (fn [& args] (:destination (get-db-config))))
(defmulti get-finished-games (fn [& args] (:destination (get-db-config))))

(defn fmt-state [state]
  (-> (assoc state :over? (game-over? (:state state)))
    (assoc :start_time (.getTime start-time))
    (assoc :created_on (.getTime (Date.)))))

(defn get-cur-session-moves []
  (get (:moves @memory-store) (.getTime start-time) []))

(defn read-edn-file []
  (read-string {:eof {:moves {}}} (slurp (:edn-file (get-db-config)))))

(defn save-to-memory! [state]
  (let [over? (game-over? (:state state))
        cur-moves (map #(assoc % :over? over?) (get-cur-session-moves))
        new-moves (conj cur-moves (fmt-state state))]
    (swap! memory-store assoc-in [:moves (.getTime start-time)] new-moves)))

(defmethod save-state! :memory [state]
  (save-to-memory! state))

(defmethod save-state! :edn [state]
  (swap! memory-store assoc :moves (:moves (read-edn-file)))
  (save-to-memory! state)
  (spit (:edn-file (get-db-config)) @memory-store))

(defmethod save-state! :sqlite [state]
  (j/insert! (get-db-config) :moves {:state (str (:state state))
                                     :mode (name (:mode state))
                                     :over (game-over? (:state state))
                                     :size (name (:size state))
                                     :start_time start-time
                                     :created_on (.getTime (Date.))})
  (if (game-over? (:state state))
    (j/update! (get-db-config) :moves {:over 1} ["start_time = ?" start-time])))

(defn newest-open-game [store]
  (->> (:moves store)
    (map val)
    flatten
    (filter #(not (:over? %)))
    (sort-by :created_on)
    (last)))

(defmethod get-open-game :memory [& args]
  (newest-open-game @memory-store))

(defmethod get-open-game :edn [& args]
  (newest-open-game (read-edn-file)))

(defn deserialize-state [query-res]
  {:state (read-string (:state query-res))
   :mode (keyword (:mode query-res))
   :size (keyword (:size query-res))
   :over? (if (= 1 (:over query-res)) true false)
   :start_time (:start_time query-res)
   :created_on (:created_on query-res)})

(defmethod get-open-game :sqlite [& args]
  (-> (j/query (get-db-config) ["SELECT * FROM moves WHERE over = 0 ORDER BY created_on DESC"])
    first
    deserialize-state))

(defn finished? [game]
  (some? (filter :over? (val game))))

(defn finished-games [store]
  (->> (:moves store)
    (filter finished?)
    (into (sorted-map))))

(defmethod get-finished-games :memory [& args]
  (finished-games @memory-store))

(defmethod get-finished-games :edn [& args]
  (finished-games (read-edn-file)))

(defmethod get-finished-games :sqlite [& args]
  (->> (j/query (get-db-config) ["SELECT * FROM moves WHERE over = 1 ORDER BY created_on DESC"])
    (group-by :start_time)))

(defn setup! []
  (j/db-do-commands (get-db-config) false
    (j/create-table-ddl :moves
      [[:id         :integer :primary :key "AUTOINCREMENT"]
       [:state      :text]
       [:mode       :text]
       [:over       :int]
       [:size       :text]
       [:start_time :int]
       [:created_on :int]])))