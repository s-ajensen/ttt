(ns ttt.move
  (:require [ttt.util :as util]))

(defn move
  ([n t board]
   (if (nil? (nth board n))
     (assoc board n t)
     (throw (ex-info
              (str "tile " n "is already occupied!")
              {:data (str board)})))))

(defn cur-token [board]
  (let [x (count (filter #(= \X %) board))
        y (count (filter #(= \O %) board))]
    (if (= x y) \X \O)))

(defn next-token [board]
  (if (= (cur-token board) \X) \O \X))

(defn open-moves [board]
  (->> board
    (map-indexed vector)
    (filter #(= (second %) nil))
    (map first)))

(defn reverse-diag [board]
  (flatten (reverse (partition (util/length board) board))))

(defn winnable-lines [board]
  (let [length (util/length board)]
    (let [rows (partition length board)
          cols (map #(take-nth length %) (take length (iterate rest board)))
          diag (list (take-nth (inc length) board) (take-nth (inc length) (reverse-diag board)))]
      (concat rows cols diag))))

(defn win? [board]
  (->> (winnable-lines board)
    (map #(partition-by identity %))
    (filter #(= 1 (count %)))
    (map #(flatten %))
    (some #(not (every? nil? %)))))

(defn tie? [board]
  (and (not (win? board)) (empty? (filter nil? board))))

(defn game-over? [board]
  (or (win? board) (tie? board)))

(defn winner [board]
  (cond
    (tie? board) :tie
    (not (win? board)) nil
    :else (next-token board)))

(defn possible-moves [board]
  (->> (open-moves board)
    (map #(move % (cur-token board) board))))

(defn eval-pos [board depth maximizing?]
  (cond
    (win? board) (* (if maximizing? 1 -1) (+ depth 10))
    (tie? board) 0))

(defn minimax [board depth maximizing?]
  (cond
    (game-over? board)  (eval-pos board depth maximizing?)
    (zero? depth)       0
    maximizing?         (apply min (map #(minimax % (dec depth) false) (possible-moves board)))
    :else               (apply max (map #(minimax % (dec depth) true) (possible-moves board)))))

(def full-depth 10)
(def performant-depth 4)
(defn get-depth [board]
  (if (= 3 (util/length board)) full-depth performant-depth))

(defmulti next-move
  (fn [difficulty board] difficulty))

(defmethod next-move :default [_ board]
  (apply max-key #(minimax % (get-depth board) true) (possible-moves board)))

(defmethod next-move :easy [_ board]
  (apply min-key #(minimax % (get-depth board) true) (possible-moves board)))

(defmethod next-move :med [_ board]
  (apply max-key #(minimax % 2 true) (possible-moves board)))