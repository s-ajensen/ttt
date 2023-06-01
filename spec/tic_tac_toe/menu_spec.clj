(ns tic-tac-toe.menu-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.menu :refer :all]))

(describe "console interface"
  (describe "main menu"
    (it "displays new and replay game options"
      (should= "1) New Game\n2) Replay Game\n"
        (with-out-str (render {:state :main-menu}))))

    (it "selects new game"
      (should= :mode-menu (:state (next-state {:state :main-menu} "1"))))

    (it "selects replay game"
      (should= :replay-menu (:state (next-state {:state :main-menu} "2"))))

    (it "displays menu again with bad input"
      (should= :main-menu (:state (next-state {:state :main-menu} nil)))))

  (describe "mode menu"
    (it "displays game modes"
      (should= "1) Player v. Player\n2) Player v. Computer\n3) Computer v. Computer\n"
        (with-out-str (render {:state :mode-menu}))))

    (it "selects pvp game"
      (should= :pvp-menu (:state (next-state {:state :mode-menu} "1"))))

    (it "selects pvc game"
      (should= :difficulty-menu (:state (next-state {:state :mode-menu} "2"))))

    (it "selects cvc game"
      (should= :difficulty-menu (:state (next-state {:state :mode-menu} "3"))))

    (it "displays menu again with bad input"
      (should= :mode-menu (:state (next-state {:state :mode-menu} nil)))))

  (describe "difficulty menu"
    (it "displays difficulty options"
      (should= "1) Hard (unbeatable)\n2) Medium\n3) Easy\n"
        (with-out-str (render {:state :difficulty-menu}))))

    (it "selects hard difficulty"
      (should= :hard-menu (:state (next-state {:state :difficulty-menu} "1"))))

    (it "selects medium difficulty"
      (should= :med-menu (:state (next-state {:state :difficulty-menu} "2"))))

    (it "selects easy difficulty"
      (should= :easy-menu (:state (next-state {:state :difficulty-menu} "3"))))

    (it "displays menu again with bad input"
      (should= :difficulty-menu (:state (next-state {:state :difficulty-menu} nil)))))

  ; TODO reduce duplication in game menu tests
  (describe "pvp menu"
    (it "displays size options"
      (should= "1) 3x3\n2) 4x4\n"
        (with-out-str (render {:state :pvp-menu}))))

    (it "selects 3x3 game"
      (should= :3x3-game (:state (next-state {:state :pvp-menu} "1"))))

    (it "selects 4x4 game"
      (should= :4x4-game (:state (next-state {:state :pvp-menu} "2"))))

    (it "displays menu again with bad input"
      (should= :pvp-menu (:state (next-state {:state :pvp-menu} nil)))))

  (describe "hard difficulty menu"
    (it "displays size options"
      (should= "1) 3x3\n2) 4x4\n"
        (with-out-str (render {:state :hard-menu}))))

    (it "selects 3x3 game"
      (should= :3x3-game (:state (next-state {:state :hard-menu} "1"))))

    (it "selects 4x4 game"
      (should= :4x4-game (:state (next-state {:state :hard-menu} "2"))))

    (it "displays menu again with bad input"
      (should= :hard-menu (:state (next-state {:state :hard-menu} nil)))))

  (describe "medium difficulty menu"
    (it "displays size options"
      (should= "1) 3x3\n2) 4x4\n"
        (with-out-str (render {:state :med-menu}))))

    (it "selects 3x3 game"
      (should= :3x3-game (:state (next-state {:state :med-menu} "1"))))

    (it "selects 4x4 game"
      (should= :4x4-game (:state (next-state {:state :med-menu} "2"))))

    (it "displays menu again with bad input"
      (should= :med-menu (:state (next-state {:state :med-menu} nil))))

    (it "records chosen pvp mode"
      (should= :pvp (:mode (next-state {:state :pvp-menu} "1")))))

  (describe "easy difficulty menu"
    (it "displays size options"
      (should= "1) 3x3\n2) 4x4\n"
        (with-out-str (render {:state :easy-menu}))))

    (it "selects 3x3 game"
      (should= :3x3-game (:state (next-state {:state :easy-menu} "1"))))

    (it "selects 4x4 game"
      (should= :4x4-game (:state (next-state {:state :easy-menu} "2"))))

    (it "displays menu again with bad input"
      (should= :easy-menu (:state (next-state {:state :easy-menu} nil))))))