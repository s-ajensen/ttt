(ns ttt.ui
  (:require [ttt.menu :refer :all]
            [ttt.util :refer :all]
            [ttt.game :refer :all]
            [ttt.repo :refer :all]
            [quil.core :as q])
  (:import (clojure.lang ExceptionInfo)))

(def height 500)
(def width 500)
(def cell-size 100)

(defn get-size []
  [height width])

(defn setup[]
  (q/frame-rate 15)
  (let [open-game (get-open-game)]
    (if (some? open-game)
      {:state :main-menu-cont}
      {:state :main-menu})))

(defn draw-button [text center dims]
  (let [[x y] center [width height] dims]
    (q/rect-mode :center)
    (q/fill 255)
    (q/rect x y width height)
    (q/fill 0)
    (q/text-align :center :center)
    (q/text text x y)))

(defn btn-x [btn] (first (:pos btn)))
(defn btn-y [btn] (last (:pos btn)))
(defn btn-w [btn] (first (:size btn)))
(defn btn-h [btn] (last (:size btn)))

(defn get-selected [buttons]
  (if (q/mouse-pressed?)
    (let [x (q/mouse-x) y (q/mouse-y)]
      (-> (filter #(and
                 (< (- (btn-x %) (btn-w %)) x (+ (btn-x %) (btn-w %)))
                 (< (- (btn-y %) (btn-h %)) y (+ (btn-y %) (btn-h %)))) buttons)
        first))))

(def menu-size [150 25])

(def game-selectors [:cont-game :replay-menu :new-game])

(defn state-type [state]
  (let [type (:state state)]
    (cond
      (contains? menus type) :menu
      (some #(= type %) game-selectors) type
      :else :game)))

(defmulti get-buttons state-type)

(defmethod get-buttons :menu [state]
  (let [opts (:opts (get menus (:state state)))]
    (for [n (range (count opts))]
      (assoc (get opts n) :pos [(/ width 2) (* 35 (inc n))] :size menu-size))))

(defmethod get-buttons :game [state]
  (let [board-size (length (:state state))
        unit (/ width board-size)]
    (for [x (range board-size) y (range board-size)]
      (let [label (get (:state state) (+ (* board-size x) y))]
        (assoc {}
          :label (if (nil? label) (str) label)
          :pos [(- (* unit (inc x)) (/ unit 2)) (- (* unit (inc y)) (/ unit 2))]
          :size [cell-size cell-size])))))

(defn draw-menu [menu]
  (doseq [opt (get-buttons menu)]
    (draw-button (:label opt) (:pos opt) (:size opt))))

(defn draw-board [board]
  (doseq [tile (get-buttons board)]
    (draw-button (str (:label tile)) (:pos tile) (:size tile))))

(defmulti update-state state-type)

(defmethod update-state :new-game [state]
  (assoc state :state (build-game state)))

(defmethod update-state :cont-game [state]
  (let [open-game (get-open-game)]
    (.setTime start-time (:start_time open-game))
    open-game))

(defmethod update-state :game [state]
  (let [buttons   (get-buttons state)
        selected  (get-selected buttons)
        idx       (.indexOf buttons selected)]
    (if (some? selected)
      (try
        (let [new-state (assoc state :state (progress-game state idx))]
          #_(save-state! new-state)
          new-state)
        (catch ExceptionInfo _ state))
      state)))

(defmethod update-state :menu [state]
  (let [buttons   (get-buttons state)
        selected  (get-selected buttons)
        idx       (.indexOf buttons selected)]
    (if (some? selected)
      (next-state state (inc idx))
      state)))

(defmulti draw state-type)

(defmethod draw :cont-game [state] (q/clear))
(defmethod draw :new-game [state] (q/clear))

(defmethod draw :game [state]
  (q/clear)
  (draw-board state))

(defmethod draw :menu [state]
  (q/clear)
  (draw-menu state))