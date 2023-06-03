(ns tic-tac-toe.game-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :refer :all]
            [tic-tac-toe.menu :refer :all]
            [tic-tac-toe.util :refer [new-game]]))

(def main-menu {:state :main-menu})
(def x3-board (new-game))
(def x4-board (new-game (repeat 16 nil)))

(describe "game controller"
  (describe "input reader"
    (it "parses number inputs to integers"
      (should= 1 (parse-input "1")))

    (it "parses alphabetic input as nil"
      (should-be-nil (parse-input "a")))

    (it "parses nil input as nil"
      (should-be-nil (parse-input nil))))

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
      (should= (new-game \X (repeat 15 nil)) (build-game {:mode :cvc :size :4x4})))))