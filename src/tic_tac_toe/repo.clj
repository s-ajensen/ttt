(ns tic-tac-toe.repo
  (:require [clojure.data.json :as json]
            [tic-tac-toe.util :refer :all]
            [tic-tac-toe.move :refer [game-over?]])
  (:import (java.io EOFException)
           (java.util Date)))

(def config-file "db-config.json")
(def memory-store (atom {:moves {}}))

(defn get-db-config []
  (try
    (json/read-str (slurp config-file) :key-fn keyword)
    (catch EOFException e
      (throw (ex-info (str config-file " must be valid JSON!") {} e)))))

(defn fmt-state [state]
  (-> (assoc state :over? (game-over? (:state state)))
    (assoc :start_time (.getTime start-time))
    (assoc :created_on (.getTime (Date.)))))

(defn save-state! [state]
  (let [cur-moves (get (:moves @memory-store) (.getTime start-time))
        config (get-db-config)
        over? (game-over? (:state state))
        new-moves (map #(assoc % :over? over?) (conj cur-moves (fmt-state state)))]
    (swap! memory-store assoc-in [:moves (.getTime start-time)] new-moves)
    (cond
      (= "edn" (:destination config)) (spit (:edn-file config) @memory-store))))

(defn deserialize [file]
  (try
    (-> (slurp file)
      (read-string))
    (catch EOFException _ nil)))

(defn newest-open-game [store]
  (->> (:moves store)
    (map val)
    flatten
    (filter #(not (:over? %)))
    (sort-by :created_on)
    (last)))

(defn get-open-game []
  (let [config (get-db-config)]
    (cond
      (= "memory" (:destination config)) (newest-open-game @memory-store)
      (= "edn" (:destination config)) (newest-open-game (deserialize (:edn-file config))))))

(defn finished? [game]
  (some? (filter :over? (val game))))

(defn finished-games [store]
  (->> (:moves store)
    (filter finished?)
    (into (sorted-map))))

(defn get-finished-games []
  (let [config (get-db-config)]
    (cond
      (= "memory" (:destination config)) (finished-games @memory-store)
      (= "edn" (:destination config)) (finished-games (deserialize (:edn-file config))))))