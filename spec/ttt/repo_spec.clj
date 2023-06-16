(ns ttt.repo-spec
  (:require [clojure.java.jdbc :as jdbc]
            [clojure.set :as set]
            [clojure.java.jdbc :as j]
            [speclj.core :refer :all]
            [ttt.repo :refer :all]
            [ttt.menu :refer :all]
            [ttt.util :refer :all]
            [ttt.move :refer :all])
  (:import (clojure.lang ExceptionInfo)))

(def test-file "test-store.edn")

(defn save-and-return [state]
  (save-state! state)
  state)

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
      (should= "db-config.edn" config-file))

    (it "verifies existence of config file"
      (slurp config-file)
      (should-not-throw (slurp config-file)))

    (with-stubs)

    (it "contains connection fields"
      (let [config (get-db-config)]
        (should-contain :destination config)))

    (it "specifies persistence destination parameter"
      (let [config  (get-db-config)
            options [:sqlite :edn :memory]]
        (should-contain (:destination config) options))))

  (describe "memory store"
    (with-stubs)
    (before (swap! memory-store {:moves {}}))

    (redefs-around
      [get-db-config (stub :mock-db-config {:return {:destination :memory}})])

    (it "formats game state for serialization"
      (let [state     {:state (new-game)}
            formatted (fmt-state state)]
        (should-contain :start_time formatted)
        (should-contain :created_on formatted)))

    (it "saves a move to memory store"
      (let [state {:state (new-game)}]
        (save-state! state)
        (should (some #(= (new-game) (:state %)) (get-cur-session-moves)))))

    (it "saves multiple moves to the memory store"
      (let [state1 {:state (new-game)}
            state2 {:state (move 0 \X (new-game))}]
        (save-state! state1)
        (save-state! state2)
        (should (some #(= (:state state1) (:state %)) (get-cur-session-moves)))
        (should (some #(= (:state state2) (:state %)) (get-cur-session-moves)))))

    (it "stores game over state"
      (let [next-state (next-state {:state (new-game) :mode :pvp} 1)]
        (should-contain :over? (fmt-state next-state))))

    (it "stores time of move"
      (let [next-state (next-state {:state (new-game) :mode :pvp} 1)]
        (should-contain :created_on (fmt-state next-state))))

    (it "marks finished game moves as over"
      (play-pvp-game)
      (should (every? :over? (get-cur-session-moves))))

    (it "gets the most recent open game"
      (let [state {:state (new-game)}]
        (save-state! state)
        (should (set/subset? (set state) (set (get-open-game))))))

    (it "gets finished games"
      (play-pvp-game)
      (should= (:moves @memory-store) (get-finished-games))))

  (describe "file store"
    (with-stubs)
    (before (swap! memory-store {:moves {}}))
    (before (spit test-file (str)))

    (redefs-around [get-db-config (stub :mock-db-config {:return {:destination :edn
                                                                  :edn-file test-file}})])

    (it "writes memory store to file"
      (let [state {:state (new-game) :mode :pvp}]
        (save-state! state)
        (let [deserialized-moves (map set (flatten (vals (:moves (read-string (slurp test-file))))))]
          (should (some #(clojure.set/subset? (set state) %) deserialized-moves)))))

    (it "appends multiple moves to edn file"
      (let [state1 {:state (new-game)}
            state2 {:state (move 0 \X (new-game))}]
        (save-state! state1)
        (save-state! state2)
        (let [deserialized-moves (map set (flatten (vals (:moves (read-string (slurp test-file))))))]
          (should (some #(clojure.set/subset? (set state1) %) deserialized-moves))
          (should (some #(clojure.set/subset? (set state2) %) deserialized-moves)))))

    (it "appends moves to a file with moves already present"
      (let [state1 {:state (new-game)}
            state2 {:state (move 0 \X (new-game))}]
        (save-state! state1)
        (swap! memory-store {:moves {}})
        (save-state! state2)
        (let [deserialized-moves (map set (flatten (vals (:moves (read-string (slurp test-file))))))]
          (should (some #(clojure.set/subset? (set state1) %) deserialized-moves))
          (should (some #(clojure.set/subset? (set state2) %) deserialized-moves)))))

    (it "gets the most recent open game"
      (let [state {:state (new-game)}]
        (save-state! state)
        (should (set/subset? (set state) (set (get-open-game)))))))

  (describe "sql data source"
    (before (j/db-do-commands (get-db-config) false
              (j/drop-table-ddl :moves)))
    (with-stubs)
    (redefs-around [get-db-config (stub :mock-db-config {:return {:destination :sqlite
                                                                  :dbtype "sqlite"
                                                                  :dbname "db/tic-tac-toe-spec.db"}})])

    (describe "setup"
      (it "creates moves table if nonexistent"
        (setup!)
        (j/with-db-metadata [md (get-db-config)]
          (let [meta (j/metadata-result (.getTables md nil nil nil (into-array ["TABLE"])))]
            (println meta)
            (should (some #(= "moves" (:table_name %)) meta))))))))