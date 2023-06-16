(ns ttt.export
  (:gen-class
    :name ttt.main
    :methods [#^{:static true} [nextState [java.lang.String int] clojure.lang.APersistentMap]
              #^{:static true} [render [clojure.lang.APersistentMap] java.lang.String]
              #^{:static true} [asStr [clojure.lang.APersistentMap] java.lang.String]
              #^{:static true} [isGame [clojure.lang.APersistentMap] boolean]
              #^{:static true} [getBoard [clojure.lang.APersistentMap] java.lang.String]
              #^{:static true} [isOver [clojure.lang.APersistentMap] boolean]
              #^{:static true} [getStartMenu [] clojure.lang.APersistentMap]])
  (:require [clojure.string :as s]
            [ttt.menu :refer :all]
            [ttt.move :refer :all]
            [ttt.main :refer [start-menu]]))

(defn -nextState [string selection]
  (next-state (read-string (str string)) selection))

(defn -render [state]
  (with-out-str (render state)))

(defn -asStr [state]
  (str state))

(defn -isGame [state]
  (try
    (not (s/includes? (name (:state state)) "menu"))
    (catch Exception e true)))

(defn -getBoard [state]
  (str (:state state)))

(defn -isOver [state]
  (game-over? (:state state)))

(defn -getStartMenu []
  (start-menu))