(ns ttt.menu-spec
  (:require [speclj.core :refer :all]
            [ttt.util :refer :all]
            [ttt.menu :refer :all]
            [ttt.game :refer :all]
            [ttt.repo :refer :all]
            [ttt.move :refer :all]))

(def finished-game
  {1685961342592
   '({:state [\X \O \X \O \X \O \X nil nil], :mode :pvp, :over? true, :start_time 1685961342592, :created_on 1685962997751}
     {:state [\X \O \X \O \X \O nil nil nil], :mode :pvp, :over? true, :start_time 1685961342592, :created_on 1685962997751}
     {:state [\X \O \X \O \X nil nil nil nil], :mode :pvp, :over? true, :start_time 1685961342592, :created_on 1685962997751}
     {:state [\X \O \X \O nil nil nil nil nil], :mode :pvp, :over? true, :start_time 1685961342592, :created_on 1685962997751}
     {:state [\X \O \X nil nil nil nil nil nil], :mode :pvp, :over? true, :start_time 1685961342592, :created_on 1685962997750}
     {:state [\X \O nil nil nil nil nil nil nil], :mode :pvp, :over? true, :start_time 1685961342592, :created_on 1685962997750}
     {:state [\X nil nil nil nil nil nil nil nil], :mode :pvp, :over? true, :start_time 1685961342592, :created_on 1685962997750})})

(describe "console interface"
  (with-stubs)
  (before (swap! memory-store {:moves {}}))
  (redefs-around
    [get-db-config (stub :mock-db-config {:return {:destination :memory}})])

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

  (describe "main menu w/ continue option"
    (it "displays continue option with other main menu links"
      (should= "1) Continue\n2) New Game\n3) Replay Game\n"
        (with-out-str (render {:state :main-menu-cont})))))

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
        (should= :new-game (:state x3))
        (should= :3x3 (:size x3))))

    (it "selects 4x4 option"
      (let [x4 (next-state {:state :pvp-menu} 2)]
        (should= :new-game (:state x4))
        (should= :4x4 (:size x4)))))

  (describe "hard menu"
    (it "displays size options"
      (should= "1) 3x3\n2) 4x4\n"
        (with-out-str (render {:state :hard-menu}))))

    (it "selects 3x3 option"
      (let [x3 (next-state {:state :hard-menu} 1)]
        (should= :new-game (:state x3))
        (should= :3x3 (:size x3))))

    (it "selects 4x4 option"
      (let [x4 (next-state {:state :hard-menu} 2)]
        (should= :new-game (:state x4))
        (should= :4x4 (:size x4)))))

  (describe "med menu"
    (it "displays size options"
      (should= "1) 3x3\n2) 4x4\n"
        (with-out-str (render {:state :med-menu}))))

    (it "selects 3x3 option"
      (let [x3 (next-state {:state :med-menu} 1)]
        (should= :new-game (:state x3))
        (should= :3x3 (:size x3))))

    (it "selects 4x4 option"
      (let [x4 (next-state {:state :med-menu} 2)]
        (should= :new-game (:state x4))
        (should= :4x4 (:size x4)))))

  (describe "easy menu"
    (it "displays size options"
      (should= "1) 3x3\n2) 4x4\n"
        (with-out-str (render {:state :easy-menu}))))

    (it "selects 3x3 option"
      (let [x3 (next-state {:state :easy-menu} 1)]
        (should= :new-game (:state x3))
        (should= :3x3 (:size x3))))

    (it "selects 4x4 option"
      (let [x4 (next-state {:state :easy-menu} 2)]
        (should= :new-game (:state x4))
        (should= :4x4 (:size x4)))))

  (describe "pvc menu"
    (it "displays difficulty options"
      (should= "1) Hard (Unbeatable)\n2) Medium\n3) Easy\n"
        (with-out-str (render {:state :pvc-menu}))))

    (it "selects hard game"
      (let [hard (next-state {:state :pvc-menu} 1)]
        (should= :hard-menu (:state hard))
        (should= :hard (:difficulty hard))))

    (it "selects medium game"
      (let [med (next-state {:state :pvc-menu} 2)]
        (should= :med-menu (:state med))
        (should= :med (:difficulty med))))

    (it "selects easy game"
      (let [easy (next-state {:state :pvc-menu} 3)]
        (should= :easy-menu (:state easy))
        (should= :easy (:difficulty easy)))))

  (describe "cvp menu"
    (it "displays difficulty options"
      (should= "1) Hard (Unbeatable)\n2) Medium\n3) Easy\n"
        (with-out-str (render {:state :cvp-menu}))))

    (it "selects hard game"
      (let [hard (next-state {:state :cvp-menu} 1)]
        (should= :hard-menu (:state hard))
        (should= :hard (:difficulty hard))))

    (it "selects medium game"
      (let [med (next-state {:state :cvp-menu} 2)]
        (should= :med-menu (:state med))
        (should= :med (:difficulty med))))

    (it "selects easy game"
      (let [easy (next-state {:state :cvp-menu} 3)]
        (should= :easy-menu (:state easy))
        (should= :easy (:difficulty easy)))))

  (describe "cvc menu"
    (it "displays difficulty options"
      (should= "1) Hard (Unbeatable)\n2) Medium\n3) Easy\n"
        (with-out-str (render {:state :cvc-menu}))))

    (it "selects hard game"
      (let [hard (next-state {:state :cvc-menu} 1)]
        (should= :hard-menu (:state hard))
        (should= :hard (:difficulty hard))))

    (it "selects medium game"
      (let [med (next-state {:state :cvc-menu} 2)]
        (should= :med-menu (:state med))
        (should= :med (:difficulty med))))

    (it "selects easy game"
      (let [easy (next-state {:state :cvc-menu} 3)]
        (should= :easy-menu (:state easy))
        (should= :easy (:difficulty easy)))))

  (describe "new game menu"
    (it "builds new 3x3 game"
      (should= (new-game)
        (:state (next-state {:state :new-game :mode :pvp :size :3x3} 1))))

    (it "builds new 4x4 game"
      (should= (new-game (repeat 16 nil))
        (:state (next-state {:state :new-game :mode :pvp :size :4x4} 2)))))

  (describe "continue game menu"
    (before (swap! memory-store {:moves {}}))

    (it "transfers control to game in progress"
      (let [in-progress {:state (new-game) :mode :pvp :over? false}]
        (save-state! in-progress)
        (should= (first (val (first (:moves @memory-store)))) (next-state {:state :cont-game} nil))))

    (it "sets time to start time of game in progress"
      (let [in-progress {:state (new-game) :mode :pvp :over? false}]
        (save-state! in-progress)
        (should= (.getTime start-time) (:start_time (first (val (first (:moves @memory-store)))))))))

  (describe "replay game menu"
    (with-stubs)

    (it "formats finished games"
      (with-redefs [get-db-config (stub :mock-db-config {:return {:destination :memory}})]
        (swap! memory-store assoc :moves finished-game)
        #_(should= "(1) pvp - Mon Jun 05 06:35:42 EDT 2023)\n" (with-out-str (render {:state :replay-menu}))))))

  (describe "game view"
    (it "displays current game state"
      (should= (as-string (new-game)) (with-out-str (render {:state (new-game)}))))

    (it "transfers control to next game state"
      (let [game {:state (new-game) :mode :pvp :size :3x3}]
        (should= (assoc game :state (progress-game game 0))
          (next-state game 0))))

    (it "displays game state again if space is occupied"
      (let [game {:state (new-game \X (repeat 8 nil)) :mode :pvp :size :3x3}]
        (should= game (next-state game 0))))

    (it "does not progress game which is over"
      (let [game {:state [\X \X \X \O \O nil nil nil nil] :mode :pvp :size :3x3}]
        (should= game (next-state game 2)))))

  (describe "state changer"
    (it "saves new state of game"
      (let [game {:state (new-game) :mode :pvp :size :3x3}
            expected (move 0 \X (new-game))]
        (next-state game 0)
        (should (some #(= expected (:state %)) (get-cur-session-moves)))))))