(ns tic-tac-toe.game-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :refer :all]
            [tic-tac-toe.menu :refer :all]
            [tic-tac-toe.move :refer :all]
            [tic-tac-toe.util :refer [new-game]]))

(def main-menu {:state :main-menu})
(def x3-board (new-game))
(def x4-board (new-game (repeat 16 nil)))

(describe "game controller"
  (describe "board builder"
    (it "builds 3x3 board"
      (should= x3-board (build-board {:size :3x3})))

    (it "builds 4x4 board"
      (should= x4-board (build-board {:size :4x4}))))

  (describe "game builder"
    (it "initializes 3x3 pvp game"
      (should= x3-board (build-game {:mode :pvp :size :3x3})))

    (it "initializes 4x4 pvp game"
      (should= x4-board (build-game {:mode :pvp :size :4x4})))

    (it "initializes 3x3 pvc game"
      (should= x3-board (build-game {:mode :pvc :size :3x3})))

    (it "initializes 4x4 pvc game"
      (should= x4-board (build-game {:mode :pvc :size :4x4})))

    (it "initializes 3x3 cvp game"
      (should= (new-game \X (repeat 8 nil)) (build-game {:mode :cvp :size :3x3})))

    (it "initializes 4x4 cvp game"
      (should= (new-game \X (repeat 15 nil)) (build-game {:mode :cvp :size :4x4})))

    (it "initializes 3x3 cvc game"
      (should= (new-game \X (repeat 8 nil)) (build-game {:mode :cvc :size :3x3})))

    (it "initializes 4x4 cvc game"
      (should= (new-game \X (repeat 15 nil)) (build-game {:mode :cvc :size :4x4}))))

  (describe "progression logic"
    (it "progresses a pvp game"
      (should= (new-game \X (repeat 8 nil))
        (progress-game {:state (new-game) :mode :pvp} 0))

      (should= (new-game \X (repeat 15 nil))
        (progress-game {:state (new-game (repeat 16 nil)) :mode :pvp} 0)))

    (it "progresses hard pvc game"
      (should= (next-move :hard (new-game nil \X (repeat 7 nil)))
        (progress-game {:state (new-game) :mode :pvc :difficulty :hard} 1)))

    (it "progresses med pvc game"
      (should= (next-move :med (new-game nil \X (repeat 7 nil)))
        (progress-game {:state (new-game) :mode :pvc :difficulty :med} 1)))

    (it "progresses easy pvc game"
      (should= (next-move :easy (new-game nil \X (repeat 7 nil)))
        (progress-game {:state (new-game) :mode :pvc :difficulty :easy} 1)))

    (it "progresses hard cvp game"
      (should= (next-move :hard (new-game \X \O (repeat 7 nil)))
        (progress-game {:state (new-game \X (repeat 8 nil)) :mode :cvp :difficulty :hard} 1)))

    (it "progresses med cvp game"
      (should= (next-move :med (new-game \X \O (repeat 7 nil)))
        (progress-game {:state (new-game \X (repeat 8 nil)) :mode :cvp :difficulty :med} 1)))

    (it "progresses easy cvp game"
      (should= (next-move :easy (new-game \X \O (repeat 7 nil)))
        (progress-game {:state (new-game \X (repeat 8 nil)) :mode :cvp :difficulty :easy} 1)))

    #_(it "progresses hard cvc game"
      (let [state {:state :new-game :mode :cvc :size :3x3 :difficulty :hard}
            game (next-state state)
            calls (atom 0)]
        (with-redefs [next-move (fn [difficulty board]
                                  (swap! calls inc)
                                  (next-move difficulty board))]
          (progress-game game)
          (should= 8 calls))))))