# tic-tac-toe

## Tic Tac Toe game which compiles to Clj and Cljs targets

### Clj targets
**Run Specs:**
`clj -M:test:spec`

**Run Cli Program:**
`clj -M:start`

**Run GUI Program:**
`clj -M:start-gui`

### Cljs targets
**Compile & Run Specs**
`clj -m:cljs`

This will produce a file `resources/public/cljs/app.js` which contains the compiled ClojureScript.

To host the ClojureScript app, simply serve the public directory using your [http server of choice](https://github.com/s-ajensen/http-server).