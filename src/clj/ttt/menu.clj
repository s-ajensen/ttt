(ns ttt.menu
  (:require [ttt.util :refer :all]
            [ttt.move :refer [game-over?]]
            [ttt.game :refer [build-game progress-game]]
            [ttt.repo :refer :all])
  (:import (clojure.lang ExceptionInfo)
           (java.util Date)))

(def main-opts
  {:opts [{:link :mode-menu   :label "New Game"}
          {:link :replay-menu :label "Replay Game"}]})

(def main-cont-opts
  {:opts [{:link :cont-game   :label "Continue"}
          {:link :mode-menu   :label "New Game"}
          {:link :replay-menu :label "Replay Game"}]})

(def difficulty-opts
  {:opts [{:link :hard-menu   :label "Hard (Unbeatable)"        :attribs {:difficulty :hard}}
          {:link :med-menu    :label "Medium"                   :attribs {:difficulty :med}}
          {:link :easy-menu   :label "Easy"                     :attribs {:difficulty :easy}}]})

(def size-opts
  {:opts [{:link :new-game    :label "3x3"                      :attribs {:size :3x3}}
          {:link :new-game    :label "4x4"                      :attribs {:size :4x4}}]})

(def mode-opts
  {:opts [{:link :pvp-menu    :label "Player v. Player"         :attribs {:mode :pvp}}
          {:link :pvc-menu    :label "Player v. Computer"       :attribs {:mode :pvc}}
          {:link :cvp-menu    :label "Computer v. Player"       :attribs {:mode :cvp}}
          {:link :cvc-menu    :label "Computer v. Computer"     :attribs {:mode :cvc}}]})

(defn fmt-replay [start-time moves]
  (let [date (Date.)
        mode (name (:mode (first moves)))]
    (.setTime date start-time)
    (str mode " - " date)))

(defn create-link [label]
  (assoc {} :link :cont-game :label label))

(defn pnt [x]
  (println x)
  x)

(defn fmt-replays []
  (let [replays (get-finished-games)]
    (->> (map #(fmt-replay (key %) (val %)) replays)
      (map create-link)
      vec)))

(def menus
  {:main-menu main-opts
   :main-menu-cont main-cont-opts
   :mode-menu mode-opts
   :pvp-menu  size-opts
   :pvc-menu  difficulty-opts
   :cvp-menu  difficulty-opts
   :cvc-menu  difficulty-opts
   :hard-menu size-opts
   :med-menu  size-opts
   :easy-menu size-opts
   :replay-menu {:opts (fmt-replays)}})

(defn inc-idx [coll]
  (->> (for [idx (range (count coll))] {(inc idx) (get coll idx)})
    (into (sorted-map))))

(defn opts-idx [cur-menu]
  (let [cur-state (:state cur-menu)
        opts (:opts (cur-state menus))]
    (inc-idx opts)))

(defn get-opt [cur-menu selection]
  (let [def-link  {:link (:state cur-menu)}]
    (get (opts-idx cur-menu) selection def-link)))

(defn start-menu []
  (let [open-game (get-open-game)]
    (if (some? open-game)
      {:state :main-menu-cont}
      {:state :main-menu})))

(defmulti render (fn [state]
                   (cond
                     (contains? menus (:state state)) :menu
                     (= :cont-game (:state state)) :cont-game
                     :else :game)))

(defmethod render :menu [cur-menu]
  (doseq [opt (opts-idx cur-menu)]
    (println (str (key opt) ") " (:label (val opt))))))

(defmethod render :cont-game [cur-menu])

(defmethod render :replay-menu [cur-menu])

(defmethod render :game [cur-state]
  (if (not= :new-game (:state cur-state))
    (print (as-string (:state cur-state)))))

(def game-selectors [:cont-game :replay-menu :new-game])

(defn state-type [state]
  (let [type (:state state)]
    (cond
      (contains? menus type) :menu
      (some #(= type %) game-selectors) type
      :else :game)))

(defmulti next-state (fn [state selection]
                       (cond
                         (contains? menus (:state state)) :menu
                         (= :new-game (:state state))     :new-game
                         (= :cont-game (:state state))    :cont-game
                         :else                            :game)))

(defmethod next-state :menu [state selection]
  (let [opt (get-opt state selection)]
    (->> (assoc state :state (:link opt))
      (merge (:attribs opt)))))

(defmethod next-state :new-game [state selection]
  (assoc state :state (build-game state)))

(defmethod next-state :cont-game [state selection]
  (let [open-game (get-open-game)]
    (.setTime start-time (:start_time open-game))
    open-game))

(defmethod next-state :game [state selection]
  (if (game-over? (:state state))
    state
    (try
      (let [new-state (assoc state :state (progress-game state selection))]
        (save-state! new-state)
        new-state)
      (catch ExceptionInfo _ state))))