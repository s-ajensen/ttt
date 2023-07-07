// Compiled by ClojureScript 1.10.764 {}
goog.provide('ttt.util');
goog.require('cljs.core');
ttt.util.start_time = Date.now();
ttt.util.new_game = (function ttt$util$new_game(var_args){
var G__4035 = arguments.length;
switch (G__4035) {
case 0:
return ttt.util.new_game.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___4037 = arguments.length;
var i__4737__auto___4038 = (0);
while(true){
if((i__4737__auto___4038 < len__4736__auto___4037)){
args_arr__4757__auto__.push((arguments[i__4737__auto___4038]));

var G__4039 = (i__4737__auto___4038 + (1));
i__4737__auto___4038 = G__4039;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((0)),(0),null));
return ttt.util.new_game.cljs$core$IFn$_invoke$arity$variadic(argseq__4758__auto__);

}
});

(ttt.util.new_game.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,(9),null));
}));

(ttt.util.new_game.cljs$core$IFn$_invoke$arity$variadic = (function (moves){
return cljs.core.vec.call(null,cljs.core.flatten.call(null,moves));
}));

/** @this {Function} */
(ttt.util.new_game.cljs$lang$applyTo = (function (seq4034){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4034));
}));

(ttt.util.new_game.cljs$lang$maxFixedArity = (0));

ttt.util.length = (function ttt$util$length(board){
return (Math.sqrt(cljs.core.count.call(null,board)) | (0));
});
ttt.util.as_string = (function ttt$util$as_string(board){
return [clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__4040_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [null,"-"], null),p1__4040_SHARP_));
}),cljs.core.partition.call(null,ttt.util.length.call(null,board),board))),"\n"].join('');
});
ttt.util.as_board = (function ttt$util$as_board(string){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__4043_SHARP_){
if(cljs.core._EQ_.call(null,"-",p1__4043_SHARP_)){
return null;
} else {
return p1__4043_SHARP_;
}
}),cljs.core.reduce.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__4042_SHARP_){
return ((1) < cljs.core.count.call(null,p1__4042_SHARP_));
}),cljs.core.partition_by.call(null,(function (p1__4041_SHARP_){
return cljs.core._EQ_.call(null,"\n",p1__4041_SHARP_);
}),cljs.core.seq.call(null,string))))));
});
ttt.util.as_map = (function ttt$util$as_map(string){
return ttt.util.read_string.call(null,string);
});

//# sourceMappingURL=util.js.map
