(ns tic-tac-toe.menu)

(defmulti render :state)

(defmethod render :main-menu [state]
  (println "1) New Game\n2) Replay Game"))

(defmethod render :mode-menu [state]
  (println "1) Player v. Player\n2) Player v. Computer\n3) Computer v. Computer"))

(defmulti next-state :state)

(defmethod next-state :main-menu [state selection]
  (get {1 {:state :mode-menu}
        2 {:state :replay-menu}}
    selection state))

(defmethod next-state :mode-menu [state selection]
  (get {1 {:state :pvp-menu}
        2 {:state :pvc-menu}
        3 {:state :cvc-menu}}
    selection state))