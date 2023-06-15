(ns tic-tac-toe.ui_spec
  (:require [quil.core :as q]
            [speclj.core :refer :all]
            [tic-tac-toe.util :refer :all]
            [tic-tac-toe.ui :refer :all]))

(describe "gui"
  (with-stubs)
  (redefs-around [q/rect (stub :mock-rect)
                  q/rect-mode (stub :mock-rect-mode)
                  q/text (stub :mock-text)
                  q/text-align (stub :mock-text-align)
                  q/fill (stub :mock-fill)])

  (describe "setup"
    (it "sets height and width of the window"
      (should= [height width] (get-size))))

  (describe "buttons"
    (it "draws a button"
      (draw-button "text" [10 10] [50 20])
      (should-have-invoked :mock-rect-mode {:with [:center]})
      (should-have-invoked :mock-fill {:with [255]})
      (should-have-invoked :mock-rect {:with [10 10 50 20]})
      (should-have-invoked :mock-fill {:with [0]})
      (should-have-invoked :mock-text-align {:with [:center :center]})
      (should-have-invoked :mock-text {:with ["text" 10 10]}))

    (it "registers a button has been pressed"
      (with-redefs [q/mouse-pressed? (stub :mock-mouse-pressed {:return true})
                    q/mouse-x (stub :mock-mouse-x {:return 43})
                    q/mouse-y (stub :mock-mouse-y {:return 43})]
        (let [button {:link :link1 :pos [40 40] :size [10 10]}]
          (should= button (get-selected [button])))))

    (it "does not register when a button has not been pressed"
      (with-redefs [q/mouse-pressed? (stub :mock-mouse-pressed {:return true})
                    q/mouse-x (stub :mock-mouse-x {:return 43})
                    q/mouse-y (stub :mock-mouse-y {:return 43})]
        (should-be-nil (get-selected [{:link :link1 :pos [32 40] :size [10 10]}
                                      {:link :link2 :pos [40 32] :size [10 10]}])))))

  (describe "menus"
    (redefs-around [draw-button (stub :mock-draw-button)])

    (it "draws button for each menu item"
      (draw-menu {:state :main-menu})
      (should-have-invoked :mock-draw-button {:times 2})
      (should-have-invoked :mock-draw-button {:with ["New Game" [250 35] menu-size]}))

    (it "gets button for each menu item"
      (let [buttons [{:link :mode-menu   :label "New Game" :pos [250 35] :size menu-size}
                     {:link :replay-menu :label "Replay Game" :pos [250 70] :size menu-size}]]
        (should= buttons (get-buttons {:state :main-menu})))))

  (describe "state control"
    (it "returns state if mouse is not pressed"
      (with-redefs [q/mouse-pressed? (stub :mock-mouse-pressed {:return false})]
        (should= {:state :main-menu} (update-state {:state :main-menu}))))

    (it "transfers state if button is selected"
      (let [buttons (get-buttons {:state :main-menu})]
        (with-redefs [get-selected (stub :mock-get-selected {:return (first buttons)})]
          (should= (:link (first buttons)) (:state (update-state {:state :main-menu}))))))

    (describe "dispatcher"
      (it "correctly identifies menu"
        (should= :menu (state-type {:state :main-menu})))

      (it "correctly identifies game selection menus"
        (should= :cont-game (state-type {:state :cont-game}))
        (should= :replay-menu (state-type {:state :replay-menu}))
        (should= :new-game (state-type {:state :new-game})))

      (it "correctly dispatches to game state"
        (should= :game (state-type {:state (new-game)})))))

  (describe "board"
    (it "gets button for each tile in 3x3 game"
      (let [buttons (get-buttons {:state (new-game) :mode :pvp})]
        (should= 9 (count buttons))
        (doseq [btn buttons]
          (should= "" (:label btn)))))

    (it "draws a 3x3 board"
      (with-redefs [draw-button (stub :mock-draw-btn)]
        (let [state {:state (new-game \X (repeat 8 nil)) :mode :pvp}]
          (draw-board state)
          (should-have-invoked :mock-draw-btn {:times 9})
          (doseq [btn (get-buttons state)]
            (should-have-invoked :mock-draw-btn {:with [(str (:label btn)) (:pos btn) (:size btn)]})))))

    (it "plays a move"
      (let [state {:state (new-game) :mode :pvp :size :3x3}
            buttons (get-buttons state)]
        (with-redefs [get-selected (stub :mock-get-selected {:return (first buttons)})]
          (should= (new-game \X (repeat 8 nil)) (:state (update-state state))))))))