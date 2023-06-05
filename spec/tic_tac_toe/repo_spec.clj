(ns tic-tac-toe.repo-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.repo :refer :all]
            [tic-tac-toe.menu :refer :all]
            [tic-tac-toe.util :refer :all]
            [tic-tac-toe.move :refer [game-over?]])
  (:import (clojure.lang ExceptionInfo)))

(def test-file "test-store.txt")

(defn play-pvp-game []
  (-> {:state (new-game) :mode :pvp}
    (next-state 0)
    (next-state 1)
    (next-state 2)
    (next-state 3)
    (next-state 4)
    (next-state 5)
    (next-state 6)))

(describe "tic tac toe data repository"
  (describe "db config"
    (it "verifies config filename"
      (should= "db-config.json" config-file))

    (it "verifies existence of config file"
      (slurp config-file)
      (should-not-throw (slurp config-file)))

    (with-stubs)
    (it "throws exception if config file is not valid json"
      (with-redefs [slurp (stub :mock-slurp {:return "{\"not\": \"proper json}"})]
        (should-throw ExceptionInfo (str config-file " must be valid JSON!") (get-db-config))))

    (it "contains connection fields"
      (let [config (get-db-config)]
        (should-contain :destination config)
        (should-contain :dbtype config)
        (should-contain :dbname config)))

    (it "specifies persistence destination parameter"
      (let [config  (get-db-config)
            options ["sqlite" "edn" "memory"]]
        (should-contain (:destination config) options)

        (if (= "edn" (:destination config))
          (should-contain :edn-file config))))

    (it "specifies sql connection parameters"
      (let [config (get-db-config)]
        (should= "sqlite" (config :dbtype))
        (should= "db/tic-tac-toe.db" (config :dbname)))))

  (describe "memory store"
    (before (swap! memory-store {:moves {}}))

    #_(it "stores move when made"
      (let [next-state (next-state {:state (new-game) :mode :pvp} 1)]
        (should-contain (fmt-state next-state) (get (:moves @memory-store) (.getTime start-time)))))

    (it "stores game over state"
      (let [next-state (next-state {:state (new-game) :mode :pvp} 1)]
        (should-contain :over? (fmt-state next-state))))

    (it "stores time of move"
      (let [next-state (next-state {:state (new-game) :mode :pvp} 1)]
        (should-contain :created_on (fmt-state next-state)))))

  (describe "file store"
    (with-stubs)
    (before (swap! memory-store {:moves {}}))
    (before (spit test-file (str)))

    #_(it "writes memory store to file"
      (with-redefs [get-db-config (stub :mock-db-config {:return {:destination "edn"
                                                                  :edn-file test-file}})]
        (let [state {:state (new-game) :mode :pvp}]
          (save-state! state)
          (should-contain (str (fmt-state state)) (slurp "test-store.txt")))))

    #_(it "retrieves open games"
      (with-redefs [get-db-config (stub :mock-db-config {:return {:destination "edn"
                                                                  :edn-file test-file}})]
        (-> {:state (new-game) :mode :pvp}
          (next-state 0)
          (next-state 1)
          (next-state 2))
        (let [last-move (last (get (:moves @memory-store) start-time))]
          (should= last-move (get-open-game)))))

    (it "marks previous moves as game over when finshed"
      (play-pvp-game)
      (let [moves (get (:moves @memory-store) (.getTime start-time))]
        (should (every? :over? moves))))

    (it "fetches finished games"
      (with-redefs [get-db-config (stub :mock-db-config {:return {:destination "edn"
                                                                  :edn-file test-file}})]
        (play-pvp-game)
        (let [moves (:moves @memory-store)]
          (should= moves (get-finished-games)))))))