(ns tic-tac-toe.menu-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.menu :refer :all]))

(describe "console interface"
  (describe "main menu"
    (it "displays new and replay game options"
      (should= "1) New Game\n2) Replay Game\n"
        (with-out-str (render {:state :main-menu}))))

    (it "selects new game"
      (should= {:state :mode-menu} (next-state {:state :main-menu} 1)))

    (it "selects replay game"
      (should= {:state :replay-menu} (next-state {:state :main-menu} 2)))

    (it "displays menu again with bad input"
      (should= {:state :main-menu} (next-state {:state :main-menu} nil))))

  (describe "mode menu"
    (it "displays game modes"
      (should= "1) Player v. Player\n2) Player v. Computer\n3) Computer v. Computer\n"
        (with-out-str (render {:state :mode-menu}))))

    (it "selects pvp game"
      (should= {:state :pvp-menu} (next-state {:state :mode-menu} 1)))

    (it "selects pvc game"
      (should= {:state :pvc-menu} (next-state {:state :mode-menu} 2)))

    (it "selects cvc game"
      (should= {:state :cvc-menu} (next-state {:state :mode-menu} 3)))

    (it "displays menu again with bad input"
      (should= {:state :mode-menu} (next-state {:state :mode-menu} nil)))))