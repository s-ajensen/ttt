(ns tic-tac-toe.main
  (:require [tic-tac-toe.menu :refer :all]
            [tic-tac-toe.repo :refer :all]
            [tic-tac-toe.ui :as v]
            [quil.core :as q]
            [quil.middleware :as m]))

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

(declare ttt)

(defn -main
  [& args]
  (if args
    (q/defsketch ttt
      :size (v/get-size)
      :setup v/setup
      :update v/update-state
      :draw v/draw
      :middleware [m/fun-mode])
    (game-loop (start-menu))))
