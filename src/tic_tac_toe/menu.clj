(ns tic-tac-toe.menu)

(def main-opts
  {:opts [{:link :mode-menu   :label "New Game"}
          {:link :replay-menu :label "Replay Game"}]})

(def difficulty-opts
  {:opts [{:link :hard-menu   :label "Hard (Unbeatable)"        :attribs {:difficulty :hard}}
          {:link :med-menu    :label "Medium"                   :attribs {:difficulty :med}}
          {:link :easy-menu   :label "Easy"                     :attribs {:difficulty :easy}}]})

(def size-opts
  {:opts [{:link :new-game    :label "3x3"                      :attribs {:size :3x3}}
          {:link :new-game    :label "4x4"                      :attribs {:size :4x4}}]})

(def mode-opts
  {:opts [{:link :pvp-menu    :label "Player v. Player"         :attribs {:mode :pvp}}
          {:link :pvc-menu    :label "Player v. Computer"       :attribs {:mode :pvc}}
          {:link :cvp-menu    :label "Computer v. Player"       :attribs {:mode :cvp}}
          {:link :cvc-menu    :label "Computer v. Computer"     :attribs {:mode :cvc}}]})

(def menus
  {:main-menu main-opts
   :mode-menu mode-opts
   :pvp-menu  size-opts
   :pvc-menu  difficulty-opts
   :cvp-menu  difficulty-opts
   :cvc-menu  difficulty-opts
   :hard-menu size-opts
   :med-menu  size-opts
   :easy-menu size-opts})

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
  (let [opt (get-opt state selection)]
    (->> (assoc state :state (:link opt))
      (merge (:attribs opt)))))