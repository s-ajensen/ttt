// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('sample_project.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('sample_project.move');
goog.require('sample_project.util');
goog.require('sample_project.game');
if((typeof sample_project !== 'undefined') && (typeof sample_project.components !== 'undefined') && (typeof sample_project.components.state !== 'undefined')){
} else {
sample_project.components.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state,sample_project.util.new_game.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$difficulty,cljs.core.cst$kw$hard,cljs.core.cst$kw$mode,cljs.core.cst$kw$pvp,cljs.core.cst$kw$size,cljs.core.cst$kw$3x3], null));
}
sample_project.components.update_state_BANG_ = (function sample_project$components$update_state_BANG_(_,key,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sample_project.components.state,cljs.core.assoc,key,val);
});
sample_project.components.difficulties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$easy,cljs.core.cst$kw$medium,cljs.core.cst$kw$hard], null);
sample_project.components.modes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pvp,cljs.core.cst$kw$pvc,cljs.core.cst$kw$cvp], null);
sample_project.components.sizes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$3x3,cljs.core.cst$kw$4x4], null);
sample_project.components.check = (function sample_project$components$check(attrs,opt){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([opt]),cljs.core.vals(cljs.core.deref(sample_project.components.state))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$checked,"checked");
} else {
return attrs;
}
});
sample_project.components.radio_menu = (function sample_project$components$radio_menu(id,opts){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function sample_project$components$radio_menu_$_iter__6380(s__6381){
return (new cljs.core.LazySeq(null,(function (){
var s__6381__$1 = s__6381;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__6381__$1);
if(temp__5753__auto__){
var s__6381__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6381__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__6381__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__6383 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__6382 = (0);
while(true){
if((i__6382 < size__4528__auto__)){
var opt = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__6382);
cljs.core.chunk_append(b__6383,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,sample_project.components.check(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$value,opt,cljs.core.cst$kw$name,id,cljs.core.cst$kw$on_DASH_change,((function (i__6382,opt,c__4527__auto__,size__4528__auto__,b__6383,s__6381__$2,temp__5753__auto__){
return (function (p1__6379_SHARP_){
return sample_project.components.update_state_BANG_(p1__6379_SHARP_,id,opt);
});})(i__6382,opt,c__4527__auto__,size__4528__auto__,b__6383,s__6381__$2,temp__5753__auto__))
], null),opt)], null),cljs.core.name(opt)], null));

var G__6384 = (i__6382 + (1));
i__6382 = G__6384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6383),sample_project$components$radio_menu_$_iter__6380(cljs.core.chunk_rest(s__6381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6383),null);
}
} else {
var opt = cljs.core.first(s__6381__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,sample_project.components.check(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$value,opt,cljs.core.cst$kw$name,id,cljs.core.cst$kw$on_DASH_change,((function (opt,s__6381__$2,temp__5753__auto__){
return (function (p1__6379_SHARP_){
return sample_project.components.update_state_BANG_(p1__6379_SHARP_,id,opt);
});})(opt,s__6381__$2,temp__5753__auto__))
], null),opt)], null),cljs.core.name(opt)], null),sample_project$components$radio_menu_$_iter__6380(cljs.core.rest(s__6381__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(opts);
})())], null);
});
sample_project.components.new_game = (function sample_project$components$new_game(){
return sample_project.components.update_state_BANG_(null,cljs.core.cst$kw$state,sample_project.game.build_game(cljs.core.deref(sample_project.components.state)));
});
sample_project.components.options_bar = (function sample_project$components$options_bar(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$options], null),sample_project.components.radio_menu(cljs.core.cst$kw$difficulty,sample_project.components.difficulties),sample_project.components.radio_menu(cljs.core.cst$kw$mode,sample_project.components.modes),sample_project.components.radio_menu(cljs.core.cst$kw$size,sample_project.components.sizes),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return sample_project.components.new_game();
})], null),"New Game"], null)], null);
});
sample_project.components.progress_game = (function sample_project$components$progress_game(selection){
return sample_project.components.update_state_BANG_(null,cljs.core.cst$kw$state,(function (){var G__6385 = cljs.core.deref(sample_project.components.state);
var G__6386 = selection;
return (sample_project.game.progress_game.cljs$core$IFn$_invoke$arity$2 ? sample_project.game.progress_game.cljs$core$IFn$_invoke$arity$2(G__6385,G__6386) : sample_project.game.progress_game.call(null,G__6385,G__6386));
})());
});
sample_project.components.board_cell = (function sample_project$components$board_cell(cell){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(cell),cljs.core.cst$kw$on_DASH_click,(function (){
return sample_project.components.progress_game(cljs.core.cst$kw$idx.cljs$core$IFn$_invoke$arity$1(cell));
})], null),(((cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(cell) == null))?"-":cljs.core.cst$kw$val.cljs$core$IFn$_invoke$arity$1(cell))], null);
});
sample_project.components.board_row = (function sample_project$components$board_row(cells){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(function (){var iter__4529__auto__ = (function sample_project$components$board_row_$_iter__6387(s__6388){
return (new cljs.core.LazySeq(null,(function (){
var s__6388__$1 = s__6388;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__6388__$1);
if(temp__5753__auto__){
var s__6388__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6388__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__6388__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__6390 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__6389 = (0);
while(true){
if((i__6389 < size__4528__auto__)){
var cell = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__6389);
cljs.core.chunk_append(b__6390,sample_project.components.board_cell(cell));

var G__6391 = (i__6389 + (1));
i__6389 = G__6391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6390),sample_project$components$board_row_$_iter__6387(cljs.core.chunk_rest(s__6388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6390),null);
}
} else {
var cell = cljs.core.first(s__6388__$2);
return cljs.core.cons(sample_project.components.board_cell(cell),sample_project$components$board_row_$_iter__6387(cljs.core.rest(s__6388__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cells);
})()], null);
});
sample_project.components.idx_board = (function sample_project$components$idx_board(board){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,val){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$idx,idx,cljs.core.cst$kw$val,val], null);
}),board);
});
sample_project.components.game_board = (function sample_project$components$game_board(){
var board = sample_project.components.idx_board(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sample_project.components.state)));
var rows = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(sample_project.util.length(board),board);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,(function (){var iter__4529__auto__ = (function sample_project$components$game_board_$_iter__6392(s__6393){
return (new cljs.core.LazySeq(null,(function (){
var s__6393__$1 = s__6393;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__6393__$1);
if(temp__5753__auto__){
var s__6393__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6393__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__6393__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__6395 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__6394 = (0);
while(true){
if((i__6394 < size__4528__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__6394);
cljs.core.chunk_append(b__6395,sample_project.components.board_row(row));

var G__6396 = (i__6394 + (1));
i__6394 = G__6396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6395),sample_project$components$game_board_$_iter__6392(cljs.core.chunk_rest(s__6393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6395),null);
}
} else {
var row = cljs.core.first(s__6393__$2);
return cljs.core.cons(sample_project.components.board_row(row),sample_project$components$game_board_$_iter__6392(cljs.core.rest(s__6393__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(rows);
})()], null),(cljs.core.truth_(sample_project.move.game_over_QMARK_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sample_project.components.state))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Game over!"], null):null)], null);
});
sample_project.components.main = (function sample_project$components$main(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(sample_project.components.state)], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$container], null),sample_project.components.options_bar(),sample_project.components.game_board()], null);
});
