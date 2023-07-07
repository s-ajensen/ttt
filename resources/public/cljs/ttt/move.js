// Compiled by ClojureScript 1.10.764 {}
goog.provide('ttt.move');
goog.require('cljs.core');
goog.require('ttt.util');
ttt.move.move = (function ttt$move$move(n,t,board){
if((cljs.core.nth.call(null,board,n) == null)){
return cljs.core.assoc.call(null,board,n,t);
} else {
throw cljs.core.ex_info.call(null,["tile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"is already occupied!"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(board)], null));
}
});
ttt.move.cur_token = (function ttt$move$cur_token(board){
var x = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__4046_SHARP_){
return cljs.core._EQ_.call(null,"X",p1__4046_SHARP_);
}),board));
var y = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__4047_SHARP_){
return cljs.core._EQ_.call(null,"O",p1__4047_SHARP_);
}),board));
if(cljs.core._EQ_.call(null,x,y)){
return "X";
} else {
return "O";
}
});
ttt.move.next_token = (function ttt$move$next_token(board){
if(cljs.core._EQ_.call(null,ttt.move.cur_token.call(null,board),"X")){
return "O";
} else {
return "X";
}
});
ttt.move.open_moves = (function ttt$move$open_moves(board){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__4048_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__4048_SHARP_),null);
}),cljs.core.map_indexed.call(null,cljs.core.vector,board)));
});
ttt.move.reverse_diag = (function ttt$move$reverse_diag(board){
return cljs.core.flatten.call(null,cljs.core.reverse.call(null,cljs.core.partition.call(null,ttt.util.length.call(null,board),board)));
});
ttt.move.winnable_lines = (function ttt$move$winnable_lines(board){
var length = ttt.util.length.call(null,board);
var rows = cljs.core.partition.call(null,length,board);
var cols = cljs.core.map.call(null,(function (p1__4049_SHARP_){
return cljs.core.take_nth.call(null,length,p1__4049_SHARP_);
}),cljs.core.take.call(null,length,cljs.core.iterate.call(null,cljs.core.rest,board)));
var diag = (new cljs.core.List(null,cljs.core.take_nth.call(null,(length + (1)),board),(new cljs.core.List(null,cljs.core.take_nth.call(null,(length + (1)),ttt.move.reverse_diag.call(null,board)),null,(1),null)),(2),null));
return cljs.core.concat.call(null,rows,cols,diag);
});
ttt.move.win_QMARK_ = (function ttt$move$win_QMARK_(board){
return cljs.core.some.call(null,(function (p1__4053_SHARP_){
return (!(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,p1__4053_SHARP_)));
}),cljs.core.map.call(null,(function (p1__4052_SHARP_){
return cljs.core.flatten.call(null,p1__4052_SHARP_);
}),cljs.core.filter.call(null,(function (p1__4051_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,p1__4051_SHARP_));
}),cljs.core.map.call(null,(function (p1__4050_SHARP_){
return cljs.core.partition_by.call(null,cljs.core.identity,p1__4050_SHARP_);
}),ttt.move.winnable_lines.call(null,board)))));
});
ttt.move.tie_QMARK_ = (function ttt$move$tie_QMARK_(board){
return ((cljs.core.not.call(null,ttt.move.win_QMARK_.call(null,board))) && (cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.nil_QMARK_,board))));
});
ttt.move.game_over_QMARK_ = (function ttt$move$game_over_QMARK_(board){
var or__4126__auto__ = ttt.move.win_QMARK_.call(null,board);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.nil_QMARK_,board));
}
});
ttt.move.winner = (function ttt$move$winner(board){
if(ttt.move.tie_QMARK_.call(null,board)){
return new cljs.core.Keyword(null,"tie","tie",-487201694);
} else {
if(cljs.core.not.call(null,ttt.move.win_QMARK_.call(null,board))){
return null;
} else {
return ttt.move.next_token.call(null,board);

}
}
});
ttt.move.prioritize = (function ttt$move$prioritize(board,depth){
if(cljs.core.truth_(ttt.move.win_QMARK_.call(null,board))){
return ((10) - depth);
} else {
if(ttt.move.tie_QMARK_.call(null,board)){
return (0);
} else {
if(cljs.core._EQ_.call(null,(2),depth)){
return (0);
} else {
var best = ttt.move.best_move.call(null,board);
return ((-1) * ttt.move.prioritize.call(null,ttt.move.move.call(null,best,ttt.move.cur_token.call(null,board),board),(depth + (1))));

}
}
}
});
ttt.move.prioritize = cljs.core.memoize.call(null,ttt.move.prioritize);
ttt.move.max_move = (function ttt$move$max_move(moves){
return cljs.core.first.call(null,cljs.core.first.call(null,moves));
});
ttt.move.possible_moves = (function ttt$move$possible_moves(board){
return cljs.core.map.call(null,(function (p1__4054_SHARP_){
return ttt.move.move.call(null,p1__4054_SHARP_,ttt.move.cur_token.call(null,board),board);
}),ttt.move.open_moves.call(null,board));
});
ttt.move.sort_moves = (function ttt$move$sort_moves(board){
return cljs.core.sort_by.call(null,cljs.core.second,cljs.core._GT_,cljs.core.zipmap.call(null,ttt.move.open_moves.call(null,board),cljs.core.map.call(null,(function (p1__4055_SHARP_){
return ttt.move.prioritize.call(null,p1__4055_SHARP_,(0));
}),ttt.move.possible_moves.call(null,board))));
});
ttt.move.best_move = (function ttt$move$best_move(board){
return ttt.move.max_move.call(null,ttt.move.sort_moves.call(null,board));
});
if((typeof ttt !== 'undefined') && (typeof ttt.move !== 'undefined') && (typeof ttt.move.next_move !== 'undefined')){
} else {
ttt.move.next_move = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt.move","next-move"),(function (difficulty,board){
return difficulty;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,ttt.move.next_move,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,board){
return ttt.move.move.call(null,ttt.move.best_move.call(null,board),ttt.move.cur_token.call(null,board),board);
}));
cljs.core._add_method.call(null,ttt.move.next_move,new cljs.core.Keyword(null,"easy","easy",315769928),(function (_,board){
var chosen_move = cljs.core.first.call(null,cljs.core.last.call(null,ttt.move.sort_moves.call(null,board)));
return ttt.move.move.call(null,chosen_move,ttt.move.cur_token.call(null,board),board);
}));
cljs.core._add_method.call(null,ttt.move.next_move,new cljs.core.Keyword(null,"med","med",-1154404524),(function (_,board){
var chosen_move = cljs.core.first.call(null,cljs.core.second.call(null,cljs.core.cycle.call(null,ttt.move.sort_moves.call(null,board))));
return ttt.move.move.call(null,chosen_move,ttt.move.cur_token.call(null,board),board);
}));

//# sourceMappingURL=move.js.map
