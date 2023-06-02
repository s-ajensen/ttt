(ns tic-tac-toe.menu)

(defmulti render :state)

(defn fmt-opt [idx option] (str (inc idx) ") " option \newline))

(defn fmt-opts [options]
  (->> (map-indexed fmt-opt options)
    (apply str)))

(defmethod render :main-menu [state]
  (print (fmt-opts ["New Game" "Replay Game"])))

(defmethod render :mode-menu [state]
  (print (fmt-opts ["Player v. Player" "Player v. Computer" "Computer v. Computer"])))

(defmethod render :pvp-menu [state]
  (print (fmt-opts ["3x3" "4x4"])))

(defn select-opt [options selection default-state]
  (let [opt-map (->> (map #(hash-map :state %) options)
                  (map-indexed (fn [idx opt] {(inc idx) opt}))
                  (into (sorted-map)))]
    (get opt-map selection default-state)))

(def menus
  {:main-menu [:mode-menu :replay-menu]
   :mode-menu [:pvp-menu :pvc-menu :cvc-menu]
   :pvp-menu  [:3x3-game :4x4-game]})

(defn next-state [cur-state selection]
  (select-opt ((:state cur-state) menus) selection cur-state))