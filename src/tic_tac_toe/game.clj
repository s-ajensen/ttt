(ns tic-tac-toe.game
  (:require [tic-tac-toe.menu :refer :all]
            [tic-tac-toe.move :refer [move]]
            [tic-tac-toe.util :refer [new-game]]))

(defn build-board [state]
  (get {:3x3 (new-game)
        :4x4 (new-game (repeat 16 nil))}
    (:size state)))

(defmulti build-game :mode)

(defmethod build-game :pvp [state]
  (build-board state))

(defmethod build-game :pvc [state]
  (build-board state))

(defmethod build-game :cvp [state]
  (->> (build-board state)
    (move 0 \X)))

(defmethod build-game :cvc [state]
  (->> (build-board state)
    (move 0 \X)))

(defn parse-input [in]
  (try (Integer/parseInt in)
    (catch NumberFormatException _ nil)))

(defn game-loop [state]
  (render state)
  (flush)
  (let [input (read-line)]
    (if (not= "q" input)
      (game-loop (next-state state (parse-input input))))))