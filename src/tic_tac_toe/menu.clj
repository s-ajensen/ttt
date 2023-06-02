(ns tic-tac-toe.menu)

(def menus
  {:main-menu {:opts [{:link :mode-menu   :label "New Game"}
                      {:link :replay-menu :label "Replay Game"}]}
   :mode-menu {:opts [{:link :pvp-menu    :label "Player v. Player"}
                      {:link :pvc-menu    :label "Player v. Computer"}
                      {:link :cvp-menu    :label "Computer v. Player"}
                      {:link :cvc-menu    :label "Computer v. Computer"}]}})

(defn inc-idx [coll]
  (->> (for [idx (range (count coll))] {(inc idx) (get coll idx)})
    (into (sorted-map))))

(defn opts-idx [cur-menu]
  (let [cur-state (:state cur-menu)
        opts      (:opts (cur-state menus))]
    (inc-idx opts)))

(defn get-opt [cur-menu selection]
  (let [def-link  {:link (:state cur-menu)}]
    (get (opts-idx cur-menu) selection def-link)))

(defn render [cur-menu]
  (doseq [opt (opts-idx cur-menu)]
    (println (str (key opt) ") " (:label (val opt))))))

(defn next-state [state selection]
  {:state (:link (get-opt state selection))})