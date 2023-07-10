(ns ttt.game
  (:require [ttt.move :as m]
            [ttt.util :as util]))

(defn build-board [state]
  (get {:3x3 (util/new-game)
        :4x4 (util/new-game (repeat 16 nil))}
    (:size state)))

(defn build-game [state]
  (let [board (build-board state)
        mode  (:mode state)]
    (if (or (= :cvp mode) (= :cvc mode))
      (m/move 0 \X board)
      board)))

(defmulti progress-game :mode)

(defmethod progress-game :pvp [state selection]
  (let [board (:state state)]
    (m/move selection (m/cur-token board) board)))

(defn progress-ai [state selection]
  (let [board (:state state)]
    (let [new-board (m/move selection (m/cur-token board) board)]
      (if (not (m/game-over? new-board))
        (m/next-move (:difficulty state) new-board)
        new-board))))

(defmethod progress-game :pvc [state selection]
  (progress-ai state selection))

(defmethod progress-game :cvp [state selection]
  (progress-ai state selection))

(defmethod progress-game :cvc [state selection]
  (loop [board (:state state)]
    (if (m/game-over? board)
      board
      (recur (m/next-move (:difficulty state) board)))))