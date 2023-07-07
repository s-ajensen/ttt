// Compiled by ClojureScript 1.10.764 {}
goog.provide('ttt.game');
goog.require('cljs.core');
goog.require('ttt.move');
goog.require('ttt.util');
ttt.game.build_board = (function ttt$game$build_board(state){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"3x3","3x3",570362544),ttt.util.new_game.call(null),new cljs.core.Keyword(null,"4x4","4x4",121507723),ttt.util.new_game.call(null,cljs.core.repeat.call(null,(16),null))], null),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(state));
});
ttt.game.build_game = (function ttt$game$build_game(state){
var board = ttt.game.build_board.call(null,state);
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cvp","cvp",-2114845014),mode)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cvc","cvc",1488701754),mode)))){
return ttt.move.move.call(null,(0),"X",board);
} else {
return board;
}
});
if((typeof ttt !== 'undefined') && (typeof ttt.game !== 'undefined') && (typeof ttt.game.progress_game !== 'undefined')){
} else {
ttt.game.progress_game = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt.game","progress-game"),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,ttt.game.progress_game,new cljs.core.Keyword(null,"pvp","pvp",-374773148),(function (state,selection){
var board = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(state);
return ttt.move.move.call(null,selection,ttt.move.cur_token.call(null,board),board);
}));
ttt.game.progress_ai = (function ttt$game$progress_ai(state,selection){
var board = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(state);
return ttt.move.next_move.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(state),ttt.move.move.call(null,selection,ttt.move.cur_token.call(null,board),board));
});
cljs.core._add_method.call(null,ttt.game.progress_game,new cljs.core.Keyword(null,"pvc","pvc",1171128787),(function (state,selection){
return ttt.game.progress_ai.call(null,state,selection);
}));
cljs.core._add_method.call(null,ttt.game.progress_game,new cljs.core.Keyword(null,"cvp","cvp",-2114845014),(function (state,selection){
return ttt.game.progress_ai.call(null,state,selection);
}));

//# sourceMappingURL=game.js.map
