(ns tic-tac-toe.menu)

(defmulti render :state)

(defmethod render :main-menu [state]
  (println "1) New Game\n2) Replay Game"))

(defmethod render :mode-menu [state]
  (println "1) Player v. Player\n2) Player v. Computer\n3) Computer v. Computer"))

(defn select-opt [options selection default-state]
  (let [opt-map (->> (map #(hash-map :state %) options)
                  (map-indexed (fn [idx opt] {(inc idx) opt}))
                  (into (sorted-map)))]
    (get opt-map selection default-state)))

(def menus
  {:main-menu [:mode-menu :replay-menu]
   :mode-menu [:pvp-menu :pvc-menu :cvc-menu]})

(defn next-state [cur-state selection]
  (select-opt ((:state cur-state) menus) selection cur-state))