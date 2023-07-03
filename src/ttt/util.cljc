(ns ttt.util
  (:import (java.util Date)))

(def start-time
  #?(:clj (Date.)
     :cljs (.now js/Date)))

(defn new-game
  ([] (vec (repeat 9 nil)))
  ([& moves] (vec (flatten moves))))

(defn length [board] (int (Math/sqrt (count board))))

(defn as-string [board]
  (str
    (->> (partition (length board) board)
      (map #(apply str (replace {nil "-"} %)))
      (clojure.string/join "\n"))
    "\n"))

(defn as-board [string]
  (->> (seq string)
    (partition-by #(= \newline %))
    (filter #(< 1 (count %)))
    (reduce concat)
    (map #(if (= \- %) nil %))
    (vec)))

(defn as-map [string]
  (read-string string))