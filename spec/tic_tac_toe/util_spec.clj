(ns tic-tac-toe.util-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.util :refer :all]))

(describe "tic tac toe utility functions"
  (it "generates an empty game"
    (should= [nil nil nil nil nil nil nil nil nil] (new-game)))

  (it "generates a new game from moves"
    (should= [\X nil nil nil nil nil nil nil nil] (new-game \X (repeat 8 nil)))
    (should= [\X \O   nil nil
              nil nil nil nil
              nil nil nil nil
              nil nil nil nil]
      (new-game \X \O (repeat 14 nil))))

  (it "calculates the length of the board"
    (should= 3 (length (new-game)))
    (should= 4 (length (new-game (repeat 16 nil)))))

  (describe "string to board"
    (it "parses an empty, 3x3 game"
      (should= (new-game) (as-board "---\n---\n---\n")))

    (it "parses a populated 3x3 game"
      (should= (new-game \X (repeat 8 nil)) (as-board "X--\n---\n---\n")))

    (it "parses a populated 4x4 game"
      (should= (new-game \X (repeat 15 nil)) (as-board "X---\n----\n----\n----\n")))))