(ns tic-tac-toe.main
  (:require [tic-tac-toe.menu :refer :all]
            [tic-tac-toe.repo :refer :all]))

(defn parse-input [in]
  (try (Integer/parseInt in)
    (catch NumberFormatException _ nil)))

(defn game-loop [state]
  (render state)
  (flush)
  (if (nil? (:state state))
    (println "Game Over!")
    (let [input (read-line)]
      (if (not= "q" input)
        (game-loop (next-state state (parse-input input)))))))

(defn start-menu []
  (let [open-game (get-open-game)]
    (if (some? open-game)
      {:state :main-menu-cont}
      {:state :main-menu})))

(defn -main
  [& args]
  (game-loop (start-menu)))
