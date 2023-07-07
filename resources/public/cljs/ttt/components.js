// Compiled by ClojureScript 1.10.764 {}
goog.provide('ttt.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ttt.move');
goog.require('ttt.util');
goog.require('ttt.game');
if((typeof ttt !== 'undefined') && (typeof ttt.components !== 'undefined') && (typeof ttt.components.state !== 'undefined')){
} else {
ttt.components.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),ttt.util.new_game.call(null),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pvp","pvp",-374773148),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null));
}
ttt.components.update_state_BANG_ = (function ttt$components$update_state_BANG_(_,key,val){
return cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,key,val);
});
ttt.components.difficulties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"hard","hard",2068420191)], null);
ttt.components.modes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pvp","pvp",-374773148),new cljs.core.Keyword(null,"pvc","pvc",1171128787),new cljs.core.Keyword(null,"cvp","cvp",-2114845014)], null);
ttt.components.sizes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"4x4","4x4",121507723)], null);
ttt.components.check = (function ttt$components$check(attrs,opt){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([opt]),cljs.core.vals.call(null,cljs.core.deref.call(null,ttt.components.state))))){
return cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),"checked");
} else {
return attrs;
}
});
ttt.components.radio_menu = (function ttt$components$radio_menu(id,opts){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4529__auto__ = (function ttt$components$radio_menu_$_iter__4825(s__4826){
return (new cljs.core.LazySeq(null,(function (){
var s__4826__$1 = s__4826;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__4826__$1);
if(temp__5804__auto__){
var s__4826__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4826__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__4826__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__4828 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__4827 = (0);
while(true){
if((i__4827 < size__4528__auto__)){
var opt = cljs.core._nth.call(null,c__4527__auto__,i__4827);
cljs.core.chunk_append.call(null,b__4828,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),ttt.components.check.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"value","value",305978217),opt,new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__4827,opt,c__4527__auto__,size__4528__auto__,b__4828,s__4826__$2,temp__5804__auto__){
return (function (p1__4824_SHARP_){
return ttt.components.update_state_BANG_.call(null,p1__4824_SHARP_,id,opt);
});})(i__4827,opt,c__4527__auto__,size__4528__auto__,b__4828,s__4826__$2,temp__5804__auto__))
], null),opt)], null),cljs.core.name.call(null,opt)], null));

var G__4829 = (i__4827 + (1));
i__4827 = G__4829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4828),ttt$components$radio_menu_$_iter__4825.call(null,cljs.core.chunk_rest.call(null,s__4826__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4828),null);
}
} else {
var opt = cljs.core.first.call(null,s__4826__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),ttt.components.check.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"value","value",305978217),opt,new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (opt,s__4826__$2,temp__5804__auto__){
return (function (p1__4824_SHARP_){
return ttt.components.update_state_BANG_.call(null,p1__4824_SHARP_,id,opt);
});})(opt,s__4826__$2,temp__5804__auto__))
], null),opt)], null),cljs.core.name.call(null,opt)], null),ttt$components$radio_menu_$_iter__4825.call(null,cljs.core.rest.call(null,s__4826__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,opts);
})())], null);
});
ttt.components.new_game = (function ttt$components$new_game(){
return ttt.components.update_state_BANG_.call(null,null,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.game.build_game.call(null,cljs.core.deref.call(null,ttt.components.state)));
});
ttt.components.options_bar = (function ttt$components$options_bar(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"options","options",99638489)], null),ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),ttt.components.difficulties),ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"mode","mode",654403691),ttt.components.modes),ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"size","size",1098693007),ttt.components.sizes),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ttt.components.new_game.call(null);
})], null),"New Game"], null)], null);
});
ttt.components.progress_game = (function ttt$components$progress_game(selection){
return ttt.components.update_state_BANG_.call(null,null,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.game.progress_game.call(null,cljs.core.deref.call(null,ttt.components.state),selection));
});
ttt.components.board_cell = (function ttt$components$board_cell(cell){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ttt.components.progress_game.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cell));
})], null),(((new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cell) == null))?"-":new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cell))], null);
});
ttt.components.board_row = (function ttt$components$board_row(cells){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function ttt$components$board_row_$_iter__4830(s__4831){
return (new cljs.core.LazySeq(null,(function (){
var s__4831__$1 = s__4831;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__4831__$1);
if(temp__5804__auto__){
var s__4831__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4831__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__4831__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__4833 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__4832 = (0);
while(true){
if((i__4832 < size__4528__auto__)){
var cell = cljs.core._nth.call(null,c__4527__auto__,i__4832);
cljs.core.chunk_append.call(null,b__4833,ttt.components.board_cell.call(null,cell));

var G__4834 = (i__4832 + (1));
i__4832 = G__4834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4833),ttt$components$board_row_$_iter__4830.call(null,cljs.core.chunk_rest.call(null,s__4831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4833),null);
}
} else {
var cell = cljs.core.first.call(null,s__4831__$2);
return cljs.core.cons.call(null,ttt.components.board_cell.call(null,cell),ttt$components$board_row_$_iter__4830.call(null,cljs.core.rest.call(null,s__4831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cells);
})()], null);
});
ttt.components.idx_board = (function ttt$components$idx_board(board){
return cljs.core.map_indexed.call(null,(function (idx,val){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"val","val",128701612),val], null);
}),board);
});
ttt.components.game_board = (function ttt$components$game_board(){
var board = ttt.components.idx_board.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state)));
var rows = cljs.core.partition.call(null,ttt.util.length.call(null,board),board);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var iter__4529__auto__ = (function ttt$components$game_board_$_iter__4835(s__4836){
return (new cljs.core.LazySeq(null,(function (){
var s__4836__$1 = s__4836;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__4836__$1);
if(temp__5804__auto__){
var s__4836__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4836__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__4836__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__4838 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__4837 = (0);
while(true){
if((i__4837 < size__4528__auto__)){
var row = cljs.core._nth.call(null,c__4527__auto__,i__4837);
cljs.core.chunk_append.call(null,b__4838,ttt.components.board_row.call(null,row));

var G__4839 = (i__4837 + (1));
i__4837 = G__4839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4838),ttt$components$game_board_$_iter__4835.call(null,cljs.core.chunk_rest.call(null,s__4836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4838),null);
}
} else {
var row = cljs.core.first.call(null,s__4836__$2);
return cljs.core.cons.call(null,ttt.components.board_row.call(null,row),ttt$components$game_board_$_iter__4835.call(null,cljs.core.rest.call(null,s__4836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,rows);
})()], null),(cljs.core.truth_(ttt.move.game_over_QMARK_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Game over!"], null):null)], null);
});
ttt.components.main = (function ttt$components$main(){
cljs.core.println.call(null,cljs.core.deref.call(null,ttt.components.state));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"container","container",-1736937707)], null),ttt.components.options_bar.call(null),ttt.components.game_board.call(null)], null);
});

//# sourceMappingURL=components.js.map
