(defproject tic-tac-toe "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main ttt.main
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/data.json "2.4.0"]
                 [org.clojure/java.jdbc "0.7.12"]
                 [org.xerial/sqlite-jdbc "3.42.0.0"]
                 [quil "3.1.0"]
                 [speclj "3.4.3"]]
  :aot [ttt.export]
  :profiles {:dev {:dependencies [[speclj "3.4.3"]]}}
  :plugins [[speclj "3.4.3"]]
  :test-paths ["spec"]
  :java-cmd "/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home/bin/java")
