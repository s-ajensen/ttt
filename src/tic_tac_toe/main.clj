(ns tic-tac-toe.main
  (:require [tic-tac-toe.menu :refer :all]))

(defn parse-input [in]
  (try (Integer/parseInt in)
    (catch NumberFormatException _ nil)))

(defn game-loop [state]
  (println state)
  (render state)
  (flush)
  (if (nil? (:state state))
    (println "Game Over!")
    (let [input (read-line)]
      (if (not= "q" input)
        (game-loop (next-state state (parse-input input)))))))

(defn -main
  [& args]
  (game-loop {:state :main-menu}))
