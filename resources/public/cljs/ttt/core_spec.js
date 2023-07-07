// Compiled by ClojureScript 1.10.764 {}
goog.provide('ttt.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('reagent.core');
goog.require('ttt.components');
goog.require('ttt.util');
ttt.core_spec.contains_like_QMARK_ = (function ttt$core_spec$contains_like_QMARK_(coll,target){
return clojure.set.subset_QMARK_.call(null,clojure.set(target),clojure.set(coll));
});
ttt.core_spec.get_by_type = (function ttt$core_spec$get_by_type(coll,target){
var tags = cljs.core.filter.call(null,cljs.core.sequential_QMARK_,coll);
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__5452_SHARP_){
return cljs.core._EQ_.call(null,target,cljs.core.first.call(null,p1__5452_SHARP_));
}),tags),(function (){var iter__4529__auto__ = (function ttt$core_spec$get_by_type_$_iter__5453(s__5454){
return (new cljs.core.LazySeq(null,(function (){
var s__5454__$1 = s__5454;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__5454__$1);
if(temp__5804__auto__){
var s__5454__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5454__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5454__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5456 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5455 = (0);
while(true){
if((i__5455 < size__4528__auto__)){
var tag = cljs.core._nth.call(null,c__4527__auto__,i__5455);
cljs.core.chunk_append.call(null,b__5456,ttt.core_spec.get_by_type.call(null,tag,target));

var G__5457 = (i__5455 + (1));
i__5455 = G__5457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5456),ttt$core_spec$get_by_type_$_iter__5453.call(null,cljs.core.chunk_rest.call(null,s__5454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5456),null);
}
} else {
var tag = cljs.core.first.call(null,s__5454__$2);
return cljs.core.cons.call(null,ttt.core_spec.get_by_type.call(null,tag,target),ttt$core_spec$get_by_type_$_iter__5453.call(null,cljs.core.rest.call(null,s__5454__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,tags);
})());
});
var description__4989__auto___5464 = speclj.components.new_description.call(null,"state changer",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5458_5465 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5459_5466 = description__4989__auto___5464;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5459_5466);

try{var seq__5460_5467 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updates game state",((function (_STAR_parent_description_STAR__orig_val__5458_5465,_STAR_parent_description_STAR__temp_val__5459_5466,description__4989__auto___5464){
return (function (){
ttt.components.update_state_BANG_.call(null,null,new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"some-val","some-val",-997293714));

var expected__5122__auto__ = new cljs.core.Keyword(null,"some-val","some-val",-997293714);
var actual__5123__auto__ = new cljs.core.Keyword(null,"some-key","some-key",-1462369503).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5458_5465,_STAR_parent_description_STAR__temp_val__5459_5466,description__4989__auto___5464))
,false)],null)));
var chunk__5461_5468 = null;
var count__5462_5469 = (0);
var i__5463_5470 = (0);
while(true){
if((i__5463_5470 < count__5462_5469)){
var component__4990__auto___5471 = cljs.core._nth.call(null,chunk__5461_5468,i__5463_5470);
speclj.components.install.call(null,component__4990__auto___5471,description__4989__auto___5464);


var G__5472 = seq__5460_5467;
var G__5473 = chunk__5461_5468;
var G__5474 = count__5462_5469;
var G__5475 = (i__5463_5470 + (1));
seq__5460_5467 = G__5472;
chunk__5461_5468 = G__5473;
count__5462_5469 = G__5474;
i__5463_5470 = G__5475;
continue;
} else {
var temp__5804__auto___5476 = cljs.core.seq.call(null,seq__5460_5467);
if(temp__5804__auto___5476){
var seq__5460_5477__$1 = temp__5804__auto___5476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5460_5477__$1)){
var c__4556__auto___5478 = cljs.core.chunk_first.call(null,seq__5460_5477__$1);
var G__5479 = cljs.core.chunk_rest.call(null,seq__5460_5477__$1);
var G__5480 = c__4556__auto___5478;
var G__5481 = cljs.core.count.call(null,c__4556__auto___5478);
var G__5482 = (0);
seq__5460_5467 = G__5479;
chunk__5461_5468 = G__5480;
count__5462_5469 = G__5481;
i__5463_5470 = G__5482;
continue;
} else {
var component__4990__auto___5483 = cljs.core.first.call(null,seq__5460_5477__$1);
speclj.components.install.call(null,component__4990__auto___5483,description__4989__auto___5464);


var G__5484 = cljs.core.next.call(null,seq__5460_5477__$1);
var G__5485 = null;
var G__5486 = (0);
var G__5487 = (0);
seq__5460_5467 = G__5484;
chunk__5461_5468 = G__5485;
count__5462_5469 = G__5486;
i__5463_5470 = G__5487;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5458_5465);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4989__auto___5464);
}

var description__4989__auto___5494 = speclj.components.new_description.call(null,"radio menu component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5488_5495 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5489_5496 = description__4989__auto___5494;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5489_5496);

try{var seq__5490_5497 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"labels section",((function (_STAR_parent_description_STAR__orig_val__5488_5495,_STAR_parent_description_STAR__temp_val__5489_5496,description__4989__auto___5494){
return (function (){
var menu = ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),cljs.core.PersistentVector.EMPTY);
var expected__5173__auto___5501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__5174__auto___5502 = menu;
if((actual__5174__auto___5502 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5501 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5501)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5501 === 'string') && (typeof actual__5174__auto___5502 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5502.indexOf(expected__5173__auto___5501))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5501 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5501)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5502 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5502))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5501)) && (typeof actual__5174__auto___5502 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5501,actual__5174__auto___5502))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5502 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5502)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5501 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5501))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5502)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5502,expected__5173__auto___5501)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5501 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5501)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5502 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5502))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5502)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5501,p1__5172__5175__auto__);
}),actual__5174__auto___5502))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5501 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5501)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5502 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5502))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5501 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5501)));
var type_b__5104__auto__ = (((actual__5174__auto___5502 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5502)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
var actual__5174__auto__ = menu;
if((actual__5174__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto__ === 'string') && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto__.indexOf(expected__5173__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto__)) && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto__,actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__)),speclj.platform.endl,"to match: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto__,expected__5173__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto__,p1__5172__5175__auto__);
}),actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto__)));
var type_b__5104__auto__ = (((actual__5174__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__5488_5495,_STAR_parent_description_STAR__temp_val__5489_5496,description__4989__auto___5494))
,false),speclj.components.new_characteristic.call(null,"sets value and name for option",((function (_STAR_parent_description_STAR__orig_val__5488_5495,_STAR_parent_description_STAR__temp_val__5489_5496,description__4989__auto___5494){
return (function (){
var menu = ttt.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt1","opt1",-577916500)], null));
var expected__5173__auto___5503 = new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816);
var actual__5174__auto___5504 = menu;
if((actual__5174__auto___5504 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5503 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5503)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5503 === 'string') && (typeof actual__5174__auto___5504 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5504.indexOf(expected__5173__auto___5503))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5503 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5503)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5504 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5504))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5503)) && (typeof actual__5174__auto___5504 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5503,actual__5174__auto___5504))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5504 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5504)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5503 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5503))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5504)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5504,expected__5173__auto___5503)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5503 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5503)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5504 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5504))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5504)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5503,p1__5172__5175__auto__);
}),actual__5174__auto___5504))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5503 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5503)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5504 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5504))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5503 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5503)));
var type_b__5104__auto__ = (((actual__5174__auto___5504 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5504)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5505 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__5174__auto___5506 = menu;
if((actual__5174__auto___5506 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5505 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5505)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5505 === 'string') && (typeof actual__5174__auto___5506 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5506.indexOf(expected__5173__auto___5505))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5505 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5505)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5506 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5506))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5505)) && (typeof actual__5174__auto___5506 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5505,actual__5174__auto___5506))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5506 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5506)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5505 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5505))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5506)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5506,expected__5173__auto___5505)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5505 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5505)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5506 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5506))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5506)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5505,p1__5172__5175__auto__);
}),actual__5174__auto___5506))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5505 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5505)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5506 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5506))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5505 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5505)));
var type_b__5104__auto__ = (((actual__5174__auto___5506 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5506)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto___5507 = "opt1";
var actual__5174__auto___5508 = cljs.core.last.call(null,menu);
if((actual__5174__auto___5508 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5507 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5507)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto___5507 === 'string') && (typeof actual__5174__auto___5508 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto___5508.indexOf(expected__5173__auto___5507))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5507 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5507)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5508 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5508))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto___5507)) && (typeof actual__5174__auto___5508 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto___5507,actual__5174__auto___5508))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto___5508 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5508)),speclj.platform.endl,"to match: ",(((expected__5173__auto___5507 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5507))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto___5508)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto___5508,expected__5173__auto___5507)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5507 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5507)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto___5508 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5508))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto___5508)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto___5507,p1__5172__5175__auto__);
}),actual__5174__auto___5508))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto___5507 == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto___5507)),speclj.platform.endl,"to be in: ",(((actual__5174__auto___5508 == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto___5508))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto___5507 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto___5507)));
var type_b__5104__auto__ = (((actual__5174__auto___5508 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto___5508)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__5173__auto__ = new cljs.core.Keyword(null,"input","input",556931961);
var actual__5174__auto__ = cljs.core.first.call(null,cljs.core.last.call(null,menu));
if((actual__5174__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto__ === 'string') && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto__.indexOf(expected__5173__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto__)) && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto__,actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__)),speclj.platform.endl,"to match: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto__,expected__5173__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto__,p1__5172__5175__auto__);
}),actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto__)));
var type_b__5104__auto__ = (((actual__5174__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__5488_5495,_STAR_parent_description_STAR__temp_val__5489_5496,description__4989__auto___5494))
,false)],null)));
var chunk__5491_5498 = null;
var count__5492_5499 = (0);
var i__5493_5500 = (0);
while(true){
if((i__5493_5500 < count__5492_5499)){
var component__4990__auto___5509 = cljs.core._nth.call(null,chunk__5491_5498,i__5493_5500);
speclj.components.install.call(null,component__4990__auto___5509,description__4989__auto___5494);


var G__5510 = seq__5490_5497;
var G__5511 = chunk__5491_5498;
var G__5512 = count__5492_5499;
var G__5513 = (i__5493_5500 + (1));
seq__5490_5497 = G__5510;
chunk__5491_5498 = G__5511;
count__5492_5499 = G__5512;
i__5493_5500 = G__5513;
continue;
} else {
var temp__5804__auto___5514 = cljs.core.seq.call(null,seq__5490_5497);
if(temp__5804__auto___5514){
var seq__5490_5515__$1 = temp__5804__auto___5514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5490_5515__$1)){
var c__4556__auto___5516 = cljs.core.chunk_first.call(null,seq__5490_5515__$1);
var G__5517 = cljs.core.chunk_rest.call(null,seq__5490_5515__$1);
var G__5518 = c__4556__auto___5516;
var G__5519 = cljs.core.count.call(null,c__4556__auto___5516);
var G__5520 = (0);
seq__5490_5497 = G__5517;
chunk__5491_5498 = G__5518;
count__5492_5499 = G__5519;
i__5493_5500 = G__5520;
continue;
} else {
var component__4990__auto___5521 = cljs.core.first.call(null,seq__5490_5515__$1);
speclj.components.install.call(null,component__4990__auto___5521,description__4989__auto___5494);


var G__5522 = cljs.core.next.call(null,seq__5490_5515__$1);
var G__5523 = null;
var G__5524 = (0);
var G__5525 = (0);
seq__5490_5497 = G__5522;
chunk__5491_5498 = G__5523;
count__5492_5499 = G__5524;
i__5493_5500 = G__5525;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5488_5495);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4989__auto___5494);
}

var description__4989__auto___5576 = speclj.components.new_description.call(null,"options-bar component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5526_5577 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5527_5578 = description__4989__auto___5576;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5527_5578);

try{var seq__5528_5579 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4989__auto____$1 = speclj.components.new_description.call(null,"difficulty section",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5554_5583 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5555_5584 = description__4989__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5555_5584);

try{var seq__5556_5585 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__5554_5583,_STAR_parent_description_STAR__temp_val__5555_5584,description__4989__auto____$1,_STAR_parent_description_STAR__orig_val__5526_5577,_STAR_parent_description_STAR__temp_val__5527_5578,description__4989__auto___5576){
return (function (it__5350__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__5568 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__5569 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__5569);

try{return it__5350__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__5568);
}});})(_STAR_parent_description_STAR__orig_val__5554_5583,_STAR_parent_description_STAR__temp_val__5555_5584,description__4989__auto____$1,_STAR_parent_description_STAR__orig_val__5526_5577,_STAR_parent_description_STAR__temp_val__5527_5578,description__4989__auto___5576))
),speclj.components.new_characteristic.call(null,"creates radio menu for game modes",((function (_STAR_parent_description_STAR__orig_val__5554_5583,_STAR_parent_description_STAR__temp_val__5555_5584,description__4989__auto____$1,_STAR_parent_description_STAR__orig_val__5526_5577,_STAR_parent_description_STAR__temp_val__5527_5578,description__4989__auto___5576){
return (function (){
var radio_menu_orig_val__5570 = ttt.components.radio_menu;
var radio_menu_temp_val__5571 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"game mode menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__5571);

try{var expected__5173__auto__ = "game mode menu";
var actual__5174__auto__ = ttt.components.options_bar.call(null);
if((actual__5174__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto__ === 'string') && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto__.indexOf(expected__5173__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto__)) && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto__,actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__)),speclj.platform.endl,"to match: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto__,expected__5173__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto__,p1__5172__5175__auto__);
}),actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto__)));
var type_b__5104__auto__ = (((actual__5174__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__5570);
}});})(_STAR_parent_description_STAR__orig_val__5554_5583,_STAR_parent_description_STAR__temp_val__5555_5584,description__4989__auto____$1,_STAR_parent_description_STAR__orig_val__5526_5577,_STAR_parent_description_STAR__temp_val__5527_5578,description__4989__auto___5576))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for difficulty",((function (_STAR_parent_description_STAR__orig_val__5554_5583,_STAR_parent_description_STAR__temp_val__5555_5584,description__4989__auto____$1,_STAR_parent_description_STAR__orig_val__5526_5577,_STAR_parent_description_STAR__temp_val__5527_5578,description__4989__auto___5576){
return (function (){
var radio_menu_orig_val__5572 = ttt.components.radio_menu;
var radio_menu_temp_val__5573 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"difficulty menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__5573);

try{var expected__5173__auto__ = "difficulty menu";
var actual__5174__auto__ = ttt.components.options_bar.call(null);
if((actual__5174__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto__ === 'string') && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto__.indexOf(expected__5173__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto__)) && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto__,actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__)),speclj.platform.endl,"to match: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto__,expected__5173__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto__,p1__5172__5175__auto__);
}),actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto__)));
var type_b__5104__auto__ = (((actual__5174__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__5572);
}});})(_STAR_parent_description_STAR__orig_val__5554_5583,_STAR_parent_description_STAR__temp_val__5555_5584,description__4989__auto____$1,_STAR_parent_description_STAR__orig_val__5526_5577,_STAR_parent_description_STAR__temp_val__5527_5578,description__4989__auto___5576))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for game size",((function (_STAR_parent_description_STAR__orig_val__5554_5583,_STAR_parent_description_STAR__temp_val__5555_5584,description__4989__auto____$1,_STAR_parent_description_STAR__orig_val__5526_5577,_STAR_parent_description_STAR__temp_val__5527_5578,description__4989__auto___5576){
return (function (){
var radio_menu_orig_val__5574 = ttt.components.radio_menu;
var radio_menu_temp_val__5575 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"size menu"], null));
(ttt.components.radio_menu = radio_menu_temp_val__5575);

try{var expected__5173__auto__ = "size menu";
var actual__5174__auto__ = ttt.components.options_bar.call(null);
if((actual__5174__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__5173__auto__ === 'string') && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__5174__auto__.indexOf(expected__5173__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5173__auto__)) && (typeof actual__5174__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5173__auto__,actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__)),speclj.platform.endl,"to match: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5174__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__5174__auto__,expected__5173__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5174__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5172__5175__auto__){
return cljs.core._EQ_.call(null,expected__5173__auto__,p1__5172__5175__auto__);
}),actual__5174__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5173__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5173__auto__)),speclj.platform.endl,"to be in: ",(((actual__5174__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5174__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5173__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5173__auto__)));
var type_b__5104__auto__ = (((actual__5174__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5174__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(ttt.components.radio_menu = radio_menu_orig_val__5574);
}});})(_STAR_parent_description_STAR__orig_val__5554_5583,_STAR_parent_description_STAR__temp_val__5555_5584,description__4989__auto____$1,_STAR_parent_description_STAR__orig_val__5526_5577,_STAR_parent_description_STAR__temp_val__5527_5578,description__4989__auto___5576))
,false)],null)));
var chunk__5557_5586 = null;
var count__5558_5587 = (0);
var i__5559_5588 = (0);
while(true){
if((i__5559_5588 < count__5558_5587)){
var component__4990__auto___5589 = cljs.core._nth.call(null,chunk__5557_5586,i__5559_5588);
speclj.components.install.call(null,component__4990__auto___5589,description__4989__auto____$1);


var G__5590 = seq__5556_5585;
var G__5591 = chunk__5557_5586;
var G__5592 = count__5558_5587;
var G__5593 = (i__5559_5588 + (1));
seq__5556_5585 = G__5590;
chunk__5557_5586 = G__5591;
count__5558_5587 = G__5592;
i__5559_5588 = G__5593;
continue;
} else {
var temp__5804__auto___5594 = cljs.core.seq.call(null,seq__5556_5585);
if(temp__5804__auto___5594){
var seq__5556_5595__$1 = temp__5804__auto___5594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5556_5595__$1)){
var c__4556__auto___5596 = cljs.core.chunk_first.call(null,seq__5556_5595__$1);
var G__5597 = cljs.core.chunk_rest.call(null,seq__5556_5595__$1);
var G__5598 = c__4556__auto___5596;
var G__5599 = cljs.core.count.call(null,c__4556__auto___5596);
var G__5600 = (0);
seq__5556_5585 = G__5597;
chunk__5557_5586 = G__5598;
count__5558_5587 = G__5599;
i__5559_5588 = G__5600;
continue;
} else {
var component__4990__auto___5601 = cljs.core.first.call(null,seq__5556_5595__$1);
speclj.components.install.call(null,component__4990__auto___5601,description__4989__auto____$1);


var G__5602 = cljs.core.next.call(null,seq__5556_5595__$1);
var G__5603 = null;
var G__5604 = (0);
var G__5605 = (0);
seq__5556_5585 = G__5602;
chunk__5557_5586 = G__5603;
count__5558_5587 = G__5604;
i__5559_5588 = G__5605;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5554_5583);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4989__auto____$1);
}

return description__4989__auto____$1;
})()],null)));
var chunk__5529_5580 = null;
var count__5530_5581 = (0);
var i__5531_5582 = (0);
while(true){
if((i__5531_5582 < count__5530_5581)){
var component__4990__auto___5606 = cljs.core._nth.call(null,chunk__5529_5580,i__5531_5582);
speclj.components.install.call(null,component__4990__auto___5606,description__4989__auto___5576);


var G__5607 = seq__5528_5579;
var G__5608 = chunk__5529_5580;
var G__5609 = count__5530_5581;
var G__5610 = (i__5531_5582 + (1));
seq__5528_5579 = G__5607;
chunk__5529_5580 = G__5608;
count__5530_5581 = G__5609;
i__5531_5582 = G__5610;
continue;
} else {
var temp__5804__auto___5611 = cljs.core.seq.call(null,seq__5528_5579);
if(temp__5804__auto___5611){
var seq__5528_5612__$1 = temp__5804__auto___5611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5528_5612__$1)){
var c__4556__auto___5613 = cljs.core.chunk_first.call(null,seq__5528_5612__$1);
var G__5614 = cljs.core.chunk_rest.call(null,seq__5528_5612__$1);
var G__5615 = c__4556__auto___5613;
var G__5616 = cljs.core.count.call(null,c__4556__auto___5613);
var G__5617 = (0);
seq__5528_5579 = G__5614;
chunk__5529_5580 = G__5615;
count__5530_5581 = G__5616;
i__5531_5582 = G__5617;
continue;
} else {
var component__4990__auto___5618 = cljs.core.first.call(null,seq__5528_5612__$1);
speclj.components.install.call(null,component__4990__auto___5618,description__4989__auto___5576);


var G__5619 = cljs.core.next.call(null,seq__5528_5612__$1);
var G__5620 = null;
var G__5621 = (0);
var G__5622 = (0);
seq__5528_5579 = G__5619;
chunk__5529_5580 = G__5620;
count__5530_5581 = G__5621;
i__5531_5582 = G__5622;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5526_5577);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4989__auto___5576);
}

var description__4989__auto___5631 = speclj.components.new_description.call(null,"game board component",false,"ttt.core-spec");
var _STAR_parent_description_STAR__orig_val__5625_5632 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5626_5633 = description__4989__auto___5631;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5626_5633);

try{var seq__5627_5634 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"indexes each position on board",((function (_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631){
return (function (){
var expected__5122__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(3),new cljs.core.Keyword(null,"val","val",128701612),null], null)], null);
var actual__5123__auto__ = ttt.components.idx_board.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null], null));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631))
,false),speclj.components.new_characteristic.call(null,"creates buttons with appropriate id for index",((function (_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.util.new_game.call(null));

var buttons = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__5122__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__5123__auto__ = cljs.core.map.call(null,(function (p1__5623_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__5623_SHARP_));
}),buttons);
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631))
,false),speclj.components.new_characteristic.call(null,"progresses game state",((function (_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),ttt.util.new_game.call(null));

ttt.components.progress_game.call(null,(0));

var expected__5122__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",null,null,null,null,null,null,null,null], null);
var actual__5123__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.components.state));
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631))
,false),speclj.components.new_characteristic.call(null,"sets on-click event for button click",((function (_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631){
return (function (){
var buttons = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__5182__auto__ = null;
var actual__5183__auto__ = cljs.core.map.call(null,(function (p1__5624_SHARP_){
return new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__5624_SHARP_));
}),buttons);
if((actual__5183__auto__ == null)){
return null;
} else {
if(((typeof expected__5182__auto__ === 'string') && (typeof actual__5183__auto__ === 'string'))){
if((!(cljs.core._EQ_.call(null,(-1),actual__5183__auto__.indexOf(expected__5182__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5182__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5182__auto__)),speclj.platform.endl,"not to be in: ",(((actual__5183__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5183__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__5182__auto__)) && (typeof actual__5183__auto__ === 'string'))){
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__5182__auto__,actual__5183__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__5183__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5183__auto__)),speclj.platform.endl,"not to match: ",(((expected__5182__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5182__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__5183__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__5183__auto__,expected__5182__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5182__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5182__auto__)),speclj.platform.endl,"not to be a key in: ",(((actual__5183__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5183__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__5183__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5181__5184__auto__){
return cljs.core._EQ_.call(null,expected__5182__auto__,p1__5181__5184__auto__);
}),actual__5183__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5182__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5182__auto__)),speclj.platform.endl,"not to be in: ",(((actual__5183__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5183__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__5103__auto__ = (((expected__5182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__5182__auto__)));
var type_b__5104__auto__ = (((actual__5183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__5183__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__5103__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__5104__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631))
,false),speclj.components.new_characteristic.call(null,"displays game over message when appropriate",((function (_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631){
return (function (){
var headers_5638 = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__5122__auto___5639 = cljs.core.PersistentVector.EMPTY;
var actual__5123__auto___5640 = headers_5638;
if(cljs.core._EQ_.call(null,expected__5122__auto___5639,actual__5123__auto___5640)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto___5639 == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto___5639)),speclj.platform.endl,"     got: ",(((actual__5123__auto___5640 == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto___5640))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,ttt.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",null,"X","O",null,"X",null,null], null));

var headers = ttt.core_spec.get_by_type.call(null,ttt.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__5122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Game over!"], null)], null);
var actual__5123__auto__ = headers;
if(cljs.core._EQ_.call(null,expected__5122__auto__,actual__5123__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5122__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5122__auto__)),speclj.platform.endl,"     got: ",(((actual__5123__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5123__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5625_5632,_STAR_parent_description_STAR__temp_val__5626_5633,description__4989__auto___5631))
,false)],null)));
var chunk__5628_5635 = null;
var count__5629_5636 = (0);
var i__5630_5637 = (0);
while(true){
if((i__5630_5637 < count__5629_5636)){
var component__4990__auto___5641 = cljs.core._nth.call(null,chunk__5628_5635,i__5630_5637);
speclj.components.install.call(null,component__4990__auto___5641,description__4989__auto___5631);


var G__5642 = seq__5627_5634;
var G__5643 = chunk__5628_5635;
var G__5644 = count__5629_5636;
var G__5645 = (i__5630_5637 + (1));
seq__5627_5634 = G__5642;
chunk__5628_5635 = G__5643;
count__5629_5636 = G__5644;
i__5630_5637 = G__5645;
continue;
} else {
var temp__5804__auto___5646 = cljs.core.seq.call(null,seq__5627_5634);
if(temp__5804__auto___5646){
var seq__5627_5647__$1 = temp__5804__auto___5646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5627_5647__$1)){
var c__4556__auto___5648 = cljs.core.chunk_first.call(null,seq__5627_5647__$1);
var G__5649 = cljs.core.chunk_rest.call(null,seq__5627_5647__$1);
var G__5650 = c__4556__auto___5648;
var G__5651 = cljs.core.count.call(null,c__4556__auto___5648);
var G__5652 = (0);
seq__5627_5634 = G__5649;
chunk__5628_5635 = G__5650;
count__5629_5636 = G__5651;
i__5630_5637 = G__5652;
continue;
} else {
var component__4990__auto___5653 = cljs.core.first.call(null,seq__5627_5647__$1);
speclj.components.install.call(null,component__4990__auto___5653,description__4989__auto___5631);


var G__5654 = cljs.core.next.call(null,seq__5627_5647__$1);
var G__5655 = null;
var G__5656 = (0);
var G__5657 = (0);
seq__5627_5634 = G__5654;
chunk__5628_5635 = G__5655;
count__5629_5636 = G__5656;
i__5630_5637 = G__5657;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5625_5632);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4989__auto___5631);
}


//# sourceMappingURL=core_spec.js.map
