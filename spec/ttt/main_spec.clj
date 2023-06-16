(ns ttt.main-spec
  (:require [speclj.core :refer :all]
            [ttt.main :refer :all]
            [ttt.util :refer :all]
            [ttt.repo :refer :all]))

(describe "main loop"
  (with-stubs)

  (describe "input reader"
    (it "parses number inputs to integers"
      (should= 1 (parse-input "1")))

    (it "parses alphabetic input as nil"
      (should-be-nil (parse-input "a")))

    (it "parses nil input as nil"
      (should-be-nil (parse-input nil))))

  (describe "main menu selector"
    (before (swap! memory-store {:moves {}}))
    (it "selects normal main menu with no open games"
      (with-redefs [get-db-config (stub :mock-db-config {:return {:destination :memory}})]
        (should= {:state :main-menu} (start-menu))))

    (with-stubs)
    #_(it "selects continue menu with an open game "
      (with-redefs [get-db-config (stub :mock-db-config {:return {:destination "memory"}})]
        (save-state! {:state (new-game) :mode :pvp :over? false})
        (should= {:state :main-menu-cont} (start-menu))))))