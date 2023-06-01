(ns tic-tac-toe.menu)

(def size-opts [{:name :3x3-game     :label "3x3"}
                {:name :4x4-game     :label "4x4"}])

(def menus
  {:main-menu       [{:name :mode-menu        :label "New Game"}
                     {:name :replay-menu      :label "Replay Game"}]
   :mode-menu       [{:name :pvp-menu         :label "Player v. Player"}
                     {:name :difficulty-menu  :label "Player v. Computer"}
                     {:name :difficulty-menu  :label "Computer v. Computer"}]
   :difficulty-menu [{:name :hard-menu        :label "Hard (unbeatable)"}
                     {:name :med-menu         :label "Medium"}
                     {:name :easy-menu        :label "Easy"}]
   :pvp-menu        size-opts
   :hard-menu       size-opts
   :med-menu        size-opts
   :easy-menu       size-opts})

(defn fmt-label [idx option] (str (inc idx) ") " option \newline))

(defn fmt-labels [options]
  (->> (map-indexed fmt-label options)
    (apply str)))

(defn select-opt [options selection default-state]
  (let [opt-map (->> (map #(hash-map :state %) options)
                  (map-indexed (fn [idx opt] {(str (inc idx)) opt}))
                  (into (sorted-map)))]
    (get opt-map selection default-state)))

(defn select-of [state key]
  (map key ((:state state) menus)))

(defn render [cur-state]
  (print (fmt-labels (select-of cur-state :label))))

(defn next-state [cur-state selection]
  (select-opt (select-of cur-state :name) selection cur-state))

(defn menu-loop []
  (loop [state {:state :main-menu}]
    (render state)
    (flush)
    (let [input (read-line)]
      (recur (next-state state input)))))