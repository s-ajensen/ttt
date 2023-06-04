(ns tic-tac-toe.game
  (:require [tic-tac-toe.move :refer :all]
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

(defmulti progress-game :mode)

(defmethod progress-game :pvp [state selection]
  (let [board (:state state)]
    (move selection (cur-token board) board)))

(defn progress-ai [state selection]
  (let [board (:state state)]
    (->> (move selection (cur-token board) board)
      (next-move (:difficulty state)))))

(defmethod progress-game :pvc [state selection]
  (progress-ai state selection))

(defmethod progress-game :cvp [state selection]
  (progress-ai state selection))

