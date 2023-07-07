(ns ttt.core
  (:require [goog.dom :as gdom]
            [reagent.core :as reagent]
            [reagent.dom :as rdom]
            [ttt.components :as components]))

(defn ^:export main []
  (rdom/render [components/main] (js/document.getElementById "app")))

(main)