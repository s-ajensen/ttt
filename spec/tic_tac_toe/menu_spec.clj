(ns tic-tac-toe.menu-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.menu :refer :all]))

(describe "console interface"
  (describe "main menu"
    (it "displays new and replay game options"
      (should= "1) New Game\n2) Replay Game\n"
        (with-out-str (render {:state :main-menu}))))

    (it "selects new game"
      (should= :mode-menu (:state (next-state {:state :main-menu} 1))))

    (it "selects replay game"
      (should= :replay-menu (:state (next-state {:state :main-menu} 2))))

    (it "displays menu again with bad input"
      (should= :main-menu (:state (next-state {:state :main-menu} nil)))))

  (describe "mode menu"
    (it "displays game modes"
      (should= "1) Player v. Player\n2) Player v. Computer\n3) Computer v. Player\n4) Computer v. Computer\n"
        (with-out-str (render {:state :mode-menu}))))

    (it "selects pvp game"
      (let [pvp (next-state {:state :mode-menu} 1)]
        (should= :pvp-menu (:state pvp))
        (should= :pvp (:mode pvp))))

    (it "selects pvc game"
      (let [pvc (next-state {:state :mode-menu} 2)]
        (should= :pvc-menu (:state pvc))
        (should= :pvc (:mode pvc))))

    (it "selects cvp game"
      (let [cvp (next-state {:state :mode-menu} 3)]
        (should= :cvp-menu (:state cvp))
        (should= :cvp (:mode cvp))))

    (it "selects cvc game"
      (let [cvc (next-state {:state :mode-menu} 4)]
        (should= :cvc-menu (:state cvc))
        (should= :cvc (:mode cvc))))

    (it "displays menu again with bad input"
      (let [redo (next-state {:state :mode-menu} nil)]
        (should= :mode-menu (:state redo))
        (should-be-nil (:mode redo)))))

  (describe "pvp menu"
    (it "displays size options"
      (should= "1) 3x3\n2) 4x4\n"
        (with-out-str (render {:state :pvp-menu}))))

    (it "selects 3x3 option"
      (let [x3 (next-state {:state :pvp-menu} 1)]
        (should= :pvp-game (:state x3))
        (should= :3x3 (:size x3))))

    (it "selects 4x4 option"
      (let [x4 (next-state {:state :pvp-menu} 2)]
        (should= :pvp-game (:state x4))
        (should= :4x4 (:size x4))))))