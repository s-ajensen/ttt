(ns tic-tac-toe.game
  (:require [tic-tac-toe.menu :refer :all]
            [tic-tac-toe.move :refer [move]]
            [tic-tac-toe.util :refer [new-game]]))

(defn build-board [state]
  (get {:3x3 (new-game)
        :4x4 (new-game (repeat 16 nil))}
    (:size state)))

(defn build-game [state]
  (let [board (build-board state)
        mode  (:mode state)]
    (if (or (= :cvp mode) (= :cvc mode))
      (move 0 \X board)
      board)))

(defn parse-input [in]
  (try (Integer/parseInt in)
    (catch NumberFormatException _ nil)))

(defn game-loop [state]
  (render state)
  (flush)
  (let [input (read-line)]
    (if (not= "q" input)
      (game-loop (next-state state (parse-input input))))))