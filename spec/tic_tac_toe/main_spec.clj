(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.main :refer :all]))

(describe "main loop"
  (describe "input reader"
    (it "parses number inputs to integers"
      (should= 1 (parse-input "1")))

    (it "parses alphabetic input as nil"
      (should-be-nil (parse-input "a")))

    (it "parses nil input as nil"
      (should-be-nil (parse-input nil)))))
