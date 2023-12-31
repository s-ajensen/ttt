// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sample_project.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
sample_project.util.start_time = Date.now();
sample_project.util.new_game = (function sample_project$util$new_game(var_args){
var G__6348 = arguments.length;
switch (G__6348) {
case 0:
return sample_project.util.new_game.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___6350 = arguments.length;
var i__4737__auto___6351 = (0);
while(true){
if((i__4737__auto___6351 < len__4736__auto___6350)){
args_arr__4757__auto__.push((arguments[i__4737__auto___6351]));

var G__6352 = (i__4737__auto___6351 + (1));
i__4737__auto___6351 = G__6352;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((0)),(0),null));
return sample_project.util.new_game.cljs$core$IFn$_invoke$arity$variadic(argseq__4758__auto__);

}
});

(sample_project.util.new_game.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),null));
}));

(sample_project.util.new_game.cljs$core$IFn$_invoke$arity$variadic = (function (moves){
return cljs.core.vec(cljs.core.flatten(moves));
}));

/** @this {Function} */
(sample_project.util.new_game.cljs$lang$applyTo = (function (seq6347){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6347));
}));

(sample_project.util.new_game.cljs$lang$maxFixedArity = (0));

sample_project.util.length = (function sample_project$util$length(board){
return (Math.sqrt(cljs.core.count(board)) | (0));
});
sample_project.util.as_string = (function sample_project$util$as_string(board){
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6353_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [null,"-"], null),p1__6353_SHARP_));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(sample_project.util.length(board),board))),"\n"].join('');
});
sample_project.util.as_board = (function sample_project$util$as_board(string){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6356_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",p1__6356_SHARP_)){
return null;
} else {
return p1__6356_SHARP_;
}
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6355_SHARP_){
return ((1) < cljs.core.count(p1__6355_SHARP_));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__6354_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",p1__6354_SHARP_);
}),cljs.core.seq(string))))));
});
sample_project.util.as_map = (function sample_project$util$as_map(string){
return (sample_project.util.read_string.cljs$core$IFn$_invoke$arity$1 ? sample_project.util.read_string.cljs$core$IFn$_invoke$arity$1(string) : sample_project.util.read_string.call(null,string));
});
