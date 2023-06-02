(ns tic-tac-toe.menu)

(defmulti render :state)

(defmethod render :main-menu [state]
  (println "1) New Game\n2) Replay Game"))

(defmethod render :mode-menu [state]
  (println "1) Player v. Player\n2) Player v. Computer\n3) Computer v. Player\n4) Computer v. Computer"))

(defmulti next-state :state)

(def menus
  {:main-menu {:opts [:mode-menu :replay-menu]}
   :mode-menu {:opts [:pvp-menu :pvc-menu :cvp-menu :cvc-menu]}})

(defn inc-idx [coll]
  (->> (for [idx (range (count coll))] {(inc idx) (get coll idx)})
    (into (sorted-map))))

(defn get-opt [cur-menu selection]
  (let [cur-state (:state cur-menu)
        opts      (:opts (cur-state menus))
        opts-idx  (inc-idx opts)]
    (get opts-idx selection (:state cur-menu))))

(defmethod next-state :main-menu [state selection]
  {:state (get-opt state selection)})

(defmethod next-state :mode-menu [state selection]
  {:state (get-opt state selection)})