// Compiled by ClojureScript 1.10.764 {}
goog.provide('sample_project.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('reagent.core');
goog.require('sample_project.components');
goog.require('sample_project.util');
sample_project.core_spec.contains_like_QMARK_ = (function sample_project$core_spec$contains_like_QMARK_(coll,target){
return clojure.set.subset_QMARK_.call(null,clojure.set(target),clojure.set(coll));
});
sample_project.core_spec.get_by_type = (function sample_project$core_spec$get_by_type(coll,target){
var tags = cljs.core.filter.call(null,cljs.core.sequential_QMARK_,coll);
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__8475_SHARP_){
return cljs.core._EQ_.call(null,target,cljs.core.first.call(null,p1__8475_SHARP_));
}),tags),(function (){var iter__4529__auto__ = (function sample_project$core_spec$get_by_type_$_iter__8476(s__8477){
return (new cljs.core.LazySeq(null,(function (){
var s__8477__$1 = s__8477;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__8477__$1);
if(temp__5753__auto__){
var s__8477__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8477__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__8477__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__8479 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__8478 = (0);
while(true){
if((i__8478 < size__4528__auto__)){
var tag = cljs.core._nth.call(null,c__4527__auto__,i__8478);
cljs.core.chunk_append.call(null,b__8479,sample_project.core_spec.get_by_type.call(null,tag,target));

var G__8480 = (i__8478 + (1));
i__8478 = G__8480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8479),sample_project$core_spec$get_by_type_$_iter__8476.call(null,cljs.core.chunk_rest.call(null,s__8477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8479),null);
}
} else {
var tag = cljs.core.first.call(null,s__8477__$2);
return cljs.core.cons.call(null,sample_project.core_spec.get_by_type.call(null,tag,target),sample_project$core_spec$get_by_type_$_iter__8476.call(null,cljs.core.rest.call(null,s__8477__$2)));
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
var description__8012__auto___8487 = speclj.components.new_description.call(null,"state changer",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__8481_8488 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8482_8489 = description__8012__auto___8487;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8482_8489);

try{var seq__8483_8490 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"updates game state",((function (_STAR_parent_description_STAR__orig_val__8481_8488,_STAR_parent_description_STAR__temp_val__8482_8489,description__8012__auto___8487){
return (function (){
sample_project.components.update_state_BANG_.call(null,null,new cljs.core.Keyword(null,"some-key","some-key",-1462369503),new cljs.core.Keyword(null,"some-val","some-val",-997293714));

var expected__8145__auto__ = new cljs.core.Keyword(null,"some-val","some-val",-997293714);
var actual__8146__auto__ = new cljs.core.Keyword(null,"some-key","some-key",-1462369503).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sample_project.components.state));
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8481_8488,_STAR_parent_description_STAR__temp_val__8482_8489,description__8012__auto___8487))
,false)],null)));
var chunk__8484_8491 = null;
var count__8485_8492 = (0);
var i__8486_8493 = (0);
while(true){
if((i__8486_8493 < count__8485_8492)){
var component__8013__auto___8494 = cljs.core._nth.call(null,chunk__8484_8491,i__8486_8493);
speclj.components.install.call(null,component__8013__auto___8494,description__8012__auto___8487);


var G__8495 = seq__8483_8490;
var G__8496 = chunk__8484_8491;
var G__8497 = count__8485_8492;
var G__8498 = (i__8486_8493 + (1));
seq__8483_8490 = G__8495;
chunk__8484_8491 = G__8496;
count__8485_8492 = G__8497;
i__8486_8493 = G__8498;
continue;
} else {
var temp__5753__auto___8499 = cljs.core.seq.call(null,seq__8483_8490);
if(temp__5753__auto___8499){
var seq__8483_8500__$1 = temp__5753__auto___8499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8483_8500__$1)){
var c__4556__auto___8501 = cljs.core.chunk_first.call(null,seq__8483_8500__$1);
var G__8502 = cljs.core.chunk_rest.call(null,seq__8483_8500__$1);
var G__8503 = c__4556__auto___8501;
var G__8504 = cljs.core.count.call(null,c__4556__auto___8501);
var G__8505 = (0);
seq__8483_8490 = G__8502;
chunk__8484_8491 = G__8503;
count__8485_8492 = G__8504;
i__8486_8493 = G__8505;
continue;
} else {
var component__8013__auto___8506 = cljs.core.first.call(null,seq__8483_8500__$1);
speclj.components.install.call(null,component__8013__auto___8506,description__8012__auto___8487);


var G__8507 = cljs.core.next.call(null,seq__8483_8500__$1);
var G__8508 = null;
var G__8509 = (0);
var G__8510 = (0);
seq__8483_8490 = G__8507;
chunk__8484_8491 = G__8508;
count__8485_8492 = G__8509;
i__8486_8493 = G__8510;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8481_8488);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto___8487);
}

var description__8012__auto___8517 = speclj.components.new_description.call(null,"radio menu component",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__8511_8518 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8512_8519 = description__8012__auto___8517;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8512_8519);

try{var seq__8513_8520 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"labels section",((function (_STAR_parent_description_STAR__orig_val__8511_8518,_STAR_parent_description_STAR__temp_val__8512_8519,description__8012__auto___8517){
return (function (){
var menu = sample_project.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),cljs.core.PersistentVector.EMPTY);
var expected__8196__auto___8524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__8197__auto___8525 = menu;
if((actual__8197__auto___8525 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8524 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8524)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto___8524 === 'string') && (typeof actual__8197__auto___8525 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto___8525.indexOf(expected__8196__auto___8524))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8524 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8524)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___8525 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8525))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto___8524)) && (typeof actual__8197__auto___8525 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto___8524,actual__8197__auto___8525))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto___8525 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8525)),speclj.platform.endl,"to match: ",(((expected__8196__auto___8524 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8524))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto___8525)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto___8525,expected__8196__auto___8524)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8524 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8524)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto___8525 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8525))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto___8525)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto___8524,p1__8195__8198__auto__);
}),actual__8197__auto___8525))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8524 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8524)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___8525 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8525))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto___8524 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto___8524)));
var type_b__8127__auto__ = (((actual__8197__auto___8525 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto___8525)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
var actual__8197__auto__ = menu;
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__8511_8518,_STAR_parent_description_STAR__temp_val__8512_8519,description__8012__auto___8517))
,false),speclj.components.new_characteristic.call(null,"sets value and name for option",((function (_STAR_parent_description_STAR__orig_val__8511_8518,_STAR_parent_description_STAR__temp_val__8512_8519,description__8012__auto___8517){
return (function (){
var menu = sample_project.components.radio_menu.call(null,new cljs.core.Keyword(null,"set-id","set-id",675256473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt1","opt1",-577916500)], null));
var expected__8196__auto___8526 = new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816);
var actual__8197__auto___8527 = menu;
if((actual__8197__auto___8527 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8526 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8526)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto___8526 === 'string') && (typeof actual__8197__auto___8527 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto___8527.indexOf(expected__8196__auto___8526))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8526 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8526)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___8527 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8527))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto___8526)) && (typeof actual__8197__auto___8527 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto___8526,actual__8197__auto___8527))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto___8527 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8527)),speclj.platform.endl,"to match: ",(((expected__8196__auto___8526 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8526))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto___8527)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto___8527,expected__8196__auto___8526)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8526 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8526)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto___8527 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8527))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto___8527)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto___8526,p1__8195__8198__auto__);
}),actual__8197__auto___8527))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8526 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8526)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___8527 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8527))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto___8526 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto___8526)));
var type_b__8127__auto__ = (((actual__8197__auto___8527 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto___8527)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8196__auto___8528 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"set-id","set-id",675256473)], null);
var actual__8197__auto___8529 = menu;
if((actual__8197__auto___8529 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8528 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8528)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto___8528 === 'string') && (typeof actual__8197__auto___8529 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto___8529.indexOf(expected__8196__auto___8528))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8528 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8528)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___8529 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8529))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto___8528)) && (typeof actual__8197__auto___8529 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto___8528,actual__8197__auto___8529))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto___8529 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8529)),speclj.platform.endl,"to match: ",(((expected__8196__auto___8528 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8528))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto___8529)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto___8529,expected__8196__auto___8528)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8528 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8528)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto___8529 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8529))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto___8529)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto___8528,p1__8195__8198__auto__);
}),actual__8197__auto___8529))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8528 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8528)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___8529 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8529))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto___8528 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto___8528)));
var type_b__8127__auto__ = (((actual__8197__auto___8529 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto___8529)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8196__auto___8530 = "opt1";
var actual__8197__auto___8531 = cljs.core.last.call(null,menu);
if((actual__8197__auto___8531 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8530 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8530)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto___8530 === 'string') && (typeof actual__8197__auto___8531 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto___8531.indexOf(expected__8196__auto___8530))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8530 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8530)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___8531 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8531))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto___8530)) && (typeof actual__8197__auto___8531 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto___8530,actual__8197__auto___8531))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto___8531 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8531)),speclj.platform.endl,"to match: ",(((expected__8196__auto___8530 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8530))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto___8531)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto___8531,expected__8196__auto___8530)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8530 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8530)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto___8531 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8531))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto___8531)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto___8530,p1__8195__8198__auto__);
}),actual__8197__auto___8531))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto___8530 == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto___8530)),speclj.platform.endl,"to be in: ",(((actual__8197__auto___8531 == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto___8531))," (using =)"].join('')));
} else {
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto___8530 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto___8530)));
var type_b__8127__auto__ = (((actual__8197__auto___8531 == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto___8531)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}

var expected__8196__auto__ = new cljs.core.Keyword(null,"input","input",556931961);
var actual__8197__auto__ = cljs.core.first.call(null,cljs.core.last.call(null,menu));
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__8511_8518,_STAR_parent_description_STAR__temp_val__8512_8519,description__8012__auto___8517))
,false)],null)));
var chunk__8514_8521 = null;
var count__8515_8522 = (0);
var i__8516_8523 = (0);
while(true){
if((i__8516_8523 < count__8515_8522)){
var component__8013__auto___8532 = cljs.core._nth.call(null,chunk__8514_8521,i__8516_8523);
speclj.components.install.call(null,component__8013__auto___8532,description__8012__auto___8517);


var G__8533 = seq__8513_8520;
var G__8534 = chunk__8514_8521;
var G__8535 = count__8515_8522;
var G__8536 = (i__8516_8523 + (1));
seq__8513_8520 = G__8533;
chunk__8514_8521 = G__8534;
count__8515_8522 = G__8535;
i__8516_8523 = G__8536;
continue;
} else {
var temp__5753__auto___8537 = cljs.core.seq.call(null,seq__8513_8520);
if(temp__5753__auto___8537){
var seq__8513_8538__$1 = temp__5753__auto___8537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8513_8538__$1)){
var c__4556__auto___8539 = cljs.core.chunk_first.call(null,seq__8513_8538__$1);
var G__8540 = cljs.core.chunk_rest.call(null,seq__8513_8538__$1);
var G__8541 = c__4556__auto___8539;
var G__8542 = cljs.core.count.call(null,c__4556__auto___8539);
var G__8543 = (0);
seq__8513_8520 = G__8540;
chunk__8514_8521 = G__8541;
count__8515_8522 = G__8542;
i__8516_8523 = G__8543;
continue;
} else {
var component__8013__auto___8544 = cljs.core.first.call(null,seq__8513_8538__$1);
speclj.components.install.call(null,component__8013__auto___8544,description__8012__auto___8517);


var G__8545 = cljs.core.next.call(null,seq__8513_8538__$1);
var G__8546 = null;
var G__8547 = (0);
var G__8548 = (0);
seq__8513_8520 = G__8545;
chunk__8514_8521 = G__8546;
count__8515_8522 = G__8547;
i__8516_8523 = G__8548;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8511_8518);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto___8517);
}

var description__8012__auto___8599 = speclj.components.new_description.call(null,"options-bar component",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__8549_8600 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8550_8601 = description__8012__auto___8599;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8550_8601);

try{var seq__8551_8602 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8012__auto____$1 = speclj.components.new_description.call(null,"difficulty section",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__8577_8606 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8578_8607 = description__8012__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8578_8607);

try{var seq__8579_8608 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__8577_8606,_STAR_parent_description_STAR__temp_val__8578_8607,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__8549_8600,_STAR_parent_description_STAR__temp_val__8550_8601,description__8012__auto___8599){
return (function (it__8373__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__8591 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__8592 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__8592);

try{return it__8373__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__8591);
}});})(_STAR_parent_description_STAR__orig_val__8577_8606,_STAR_parent_description_STAR__temp_val__8578_8607,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__8549_8600,_STAR_parent_description_STAR__temp_val__8550_8601,description__8012__auto___8599))
),speclj.components.new_characteristic.call(null,"creates radio menu for game modes",((function (_STAR_parent_description_STAR__orig_val__8577_8606,_STAR_parent_description_STAR__temp_val__8578_8607,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__8549_8600,_STAR_parent_description_STAR__temp_val__8550_8601,description__8012__auto___8599){
return (function (){
var radio_menu_orig_val__8593 = sample_project.components.radio_menu;
var radio_menu_temp_val__8594 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"game mode menu"], null));
(sample_project.components.radio_menu = radio_menu_temp_val__8594);

try{var expected__8196__auto__ = "game mode menu";
var actual__8197__auto__ = sample_project.components.options_bar.call(null);
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(sample_project.components.radio_menu = radio_menu_orig_val__8593);
}});})(_STAR_parent_description_STAR__orig_val__8577_8606,_STAR_parent_description_STAR__temp_val__8578_8607,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__8549_8600,_STAR_parent_description_STAR__temp_val__8550_8601,description__8012__auto___8599))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for difficulty",((function (_STAR_parent_description_STAR__orig_val__8577_8606,_STAR_parent_description_STAR__temp_val__8578_8607,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__8549_8600,_STAR_parent_description_STAR__temp_val__8550_8601,description__8012__auto___8599){
return (function (){
var radio_menu_orig_val__8595 = sample_project.components.radio_menu;
var radio_menu_temp_val__8596 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"difficulty menu"], null));
(sample_project.components.radio_menu = radio_menu_temp_val__8596);

try{var expected__8196__auto__ = "difficulty menu";
var actual__8197__auto__ = sample_project.components.options_bar.call(null);
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(sample_project.components.radio_menu = radio_menu_orig_val__8595);
}});})(_STAR_parent_description_STAR__orig_val__8577_8606,_STAR_parent_description_STAR__temp_val__8578_8607,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__8549_8600,_STAR_parent_description_STAR__temp_val__8550_8601,description__8012__auto___8599))
,false),speclj.components.new_characteristic.call(null,"creates radio menu for game size",((function (_STAR_parent_description_STAR__orig_val__8577_8606,_STAR_parent_description_STAR__temp_val__8578_8607,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__8549_8600,_STAR_parent_description_STAR__temp_val__8550_8601,description__8012__auto___8599){
return (function (){
var radio_menu_orig_val__8597 = sample_project.components.radio_menu;
var radio_menu_temp_val__8598 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"mock-radio-menu","mock-radio-menu",-601059130),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"size menu"], null));
(sample_project.components.radio_menu = radio_menu_temp_val__8598);

try{var expected__8196__auto__ = "size menu";
var actual__8197__auto__ = sample_project.components.options_bar.call(null);
if((actual__8197__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8196__auto__ === 'string') && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8197__auto__.indexOf(expected__8196__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8196__auto__)) && (typeof actual__8197__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8196__auto__,actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__)),speclj.platform.endl,"to match: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8197__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8197__auto__,expected__8196__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8197__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8195__8198__auto__){
return cljs.core._EQ_.call(null,expected__8196__auto__,p1__8195__8198__auto__);
}),actual__8197__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8196__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8196__auto__)),speclj.platform.endl,"to be in: ",(((actual__8197__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8197__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8196__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8196__auto__)));
var type_b__8127__auto__ = (((actual__8197__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8197__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
}finally {(sample_project.components.radio_menu = radio_menu_orig_val__8597);
}});})(_STAR_parent_description_STAR__orig_val__8577_8606,_STAR_parent_description_STAR__temp_val__8578_8607,description__8012__auto____$1,_STAR_parent_description_STAR__orig_val__8549_8600,_STAR_parent_description_STAR__temp_val__8550_8601,description__8012__auto___8599))
,false)],null)));
var chunk__8580_8609 = null;
var count__8581_8610 = (0);
var i__8582_8611 = (0);
while(true){
if((i__8582_8611 < count__8581_8610)){
var component__8013__auto___8612 = cljs.core._nth.call(null,chunk__8580_8609,i__8582_8611);
speclj.components.install.call(null,component__8013__auto___8612,description__8012__auto____$1);


var G__8613 = seq__8579_8608;
var G__8614 = chunk__8580_8609;
var G__8615 = count__8581_8610;
var G__8616 = (i__8582_8611 + (1));
seq__8579_8608 = G__8613;
chunk__8580_8609 = G__8614;
count__8581_8610 = G__8615;
i__8582_8611 = G__8616;
continue;
} else {
var temp__5753__auto___8617 = cljs.core.seq.call(null,seq__8579_8608);
if(temp__5753__auto___8617){
var seq__8579_8618__$1 = temp__5753__auto___8617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8579_8618__$1)){
var c__4556__auto___8619 = cljs.core.chunk_first.call(null,seq__8579_8618__$1);
var G__8620 = cljs.core.chunk_rest.call(null,seq__8579_8618__$1);
var G__8621 = c__4556__auto___8619;
var G__8622 = cljs.core.count.call(null,c__4556__auto___8619);
var G__8623 = (0);
seq__8579_8608 = G__8620;
chunk__8580_8609 = G__8621;
count__8581_8610 = G__8622;
i__8582_8611 = G__8623;
continue;
} else {
var component__8013__auto___8624 = cljs.core.first.call(null,seq__8579_8618__$1);
speclj.components.install.call(null,component__8013__auto___8624,description__8012__auto____$1);


var G__8625 = cljs.core.next.call(null,seq__8579_8618__$1);
var G__8626 = null;
var G__8627 = (0);
var G__8628 = (0);
seq__8579_8608 = G__8625;
chunk__8580_8609 = G__8626;
count__8581_8610 = G__8627;
i__8582_8611 = G__8628;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8577_8606);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto____$1);
}

return description__8012__auto____$1;
})()],null)));
var chunk__8552_8603 = null;
var count__8553_8604 = (0);
var i__8554_8605 = (0);
while(true){
if((i__8554_8605 < count__8553_8604)){
var component__8013__auto___8629 = cljs.core._nth.call(null,chunk__8552_8603,i__8554_8605);
speclj.components.install.call(null,component__8013__auto___8629,description__8012__auto___8599);


var G__8630 = seq__8551_8602;
var G__8631 = chunk__8552_8603;
var G__8632 = count__8553_8604;
var G__8633 = (i__8554_8605 + (1));
seq__8551_8602 = G__8630;
chunk__8552_8603 = G__8631;
count__8553_8604 = G__8632;
i__8554_8605 = G__8633;
continue;
} else {
var temp__5753__auto___8634 = cljs.core.seq.call(null,seq__8551_8602);
if(temp__5753__auto___8634){
var seq__8551_8635__$1 = temp__5753__auto___8634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8551_8635__$1)){
var c__4556__auto___8636 = cljs.core.chunk_first.call(null,seq__8551_8635__$1);
var G__8637 = cljs.core.chunk_rest.call(null,seq__8551_8635__$1);
var G__8638 = c__4556__auto___8636;
var G__8639 = cljs.core.count.call(null,c__4556__auto___8636);
var G__8640 = (0);
seq__8551_8602 = G__8637;
chunk__8552_8603 = G__8638;
count__8553_8604 = G__8639;
i__8554_8605 = G__8640;
continue;
} else {
var component__8013__auto___8641 = cljs.core.first.call(null,seq__8551_8635__$1);
speclj.components.install.call(null,component__8013__auto___8641,description__8012__auto___8599);


var G__8642 = cljs.core.next.call(null,seq__8551_8635__$1);
var G__8643 = null;
var G__8644 = (0);
var G__8645 = (0);
seq__8551_8602 = G__8642;
chunk__8552_8603 = G__8643;
count__8553_8604 = G__8644;
i__8554_8605 = G__8645;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8549_8600);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto___8599);
}

var description__8012__auto___8654 = speclj.components.new_description.call(null,"game board component",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__8648_8655 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8649_8656 = description__8012__auto___8654;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8649_8656);

try{var seq__8650_8657 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"indexes each position on board",((function (_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654){
return (function (){
var expected__8145__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"val","val",128701612),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),(3),new cljs.core.Keyword(null,"val","val",128701612),null], null)], null);
var actual__8146__auto__ = sample_project.components.idx_board.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null], null));
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654))
,false),speclj.components.new_characteristic.call(null,"creates buttons with appropriate id for index",((function (_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654){
return (function (){
cljs.core.swap_BANG_.call(null,sample_project.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),sample_project.util.new_game.call(null));

var buttons = sample_project.core_spec.get_by_type.call(null,sample_project.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__8145__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__8146__auto__ = cljs.core.map.call(null,(function (p1__8646_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8646_SHARP_));
}),buttons);
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654))
,false),speclj.components.new_characteristic.call(null,"progresses game state",((function (_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654){
return (function (){
cljs.core.swap_BANG_.call(null,sample_project.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),sample_project.util.new_game.call(null));

sample_project.components.progress_game.call(null,(0));

var expected__8145__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",null,null,null,null,null,null,null,null], null);
var actual__8146__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sample_project.components.state));
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654))
,false),speclj.components.new_characteristic.call(null,"sets on-click event for button click",((function (_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654){
return (function (){
var buttons = sample_project.core_spec.get_by_type.call(null,sample_project.components.game_board.call(null),new cljs.core.Keyword(null,"button","button",1456579943));
var expected__8205__auto__ = null;
var actual__8206__auto__ = cljs.core.map.call(null,(function (p1__8647_SHARP_){
return new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__8647_SHARP_));
}),buttons);
if((actual__8206__auto__ == null)){
return null;
} else {
if(((typeof expected__8205__auto__ === 'string') && (typeof actual__8206__auto__ === 'string'))){
if((!(cljs.core._EQ_.call(null,(-1),actual__8206__auto__.indexOf(expected__8205__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8205__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8205__auto__)),speclj.platform.endl,"not to be in: ",(((actual__8206__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8206__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8205__auto__)) && (typeof actual__8206__auto__ === 'string'))){
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8205__auto__,actual__8206__auto__))))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8206__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8206__auto__)),speclj.platform.endl,"not to match: ",(((expected__8205__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8205__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8206__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8206__auto__,expected__8205__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8205__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8205__auto__)),speclj.platform.endl,"not to be a key in: ",(((actual__8206__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8206__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8206__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8204__8207__auto__){
return cljs.core._EQ_.call(null,expected__8205__auto__,p1__8204__8207__auto__);
}),actual__8206__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8205__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8205__auto__)),speclj.platform.endl,"not to be in: ",(((actual__8206__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8206__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error((function (){var type_a__8126__auto__ = (((expected__8205__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8205__auto__)));
var type_b__8127__auto__ = (((actual__8206__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8206__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8126__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8127__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654))
,false),speclj.components.new_characteristic.call(null,"displays game over message when appropriate",((function (_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654){
return (function (){
var headers_8661 = sample_project.core_spec.get_by_type.call(null,sample_project.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__8145__auto___8662 = cljs.core.PersistentVector.EMPTY;
var actual__8146__auto___8663 = headers_8661;
if(cljs.core._EQ_.call(null,expected__8145__auto___8662,actual__8146__auto___8663)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto___8662 == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto___8662)),speclj.platform.endl,"     got: ",(((actual__8146__auto___8663 == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto___8663))," (using =)"].join('')));
}

cljs.core.swap_BANG_.call(null,sample_project.components.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",null,"X","O",null,"X",null,null], null));

var headers = sample_project.core_spec.get_by_type.call(null,sample_project.components.game_board.call(null),new cljs.core.Keyword(null,"h2","h2",-372662728));
var expected__8145__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Game over!"], null)], null);
var actual__8146__auto__ = headers;
if(cljs.core._EQ_.call(null,expected__8145__auto__,actual__8146__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8145__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8145__auto__)),speclj.platform.endl,"     got: ",(((actual__8146__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8146__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8648_8655,_STAR_parent_description_STAR__temp_val__8649_8656,description__8012__auto___8654))
,false)],null)));
var chunk__8651_8658 = null;
var count__8652_8659 = (0);
var i__8653_8660 = (0);
while(true){
if((i__8653_8660 < count__8652_8659)){
var component__8013__auto___8664 = cljs.core._nth.call(null,chunk__8651_8658,i__8653_8660);
speclj.components.install.call(null,component__8013__auto___8664,description__8012__auto___8654);


var G__8665 = seq__8650_8657;
var G__8666 = chunk__8651_8658;
var G__8667 = count__8652_8659;
var G__8668 = (i__8653_8660 + (1));
seq__8650_8657 = G__8665;
chunk__8651_8658 = G__8666;
count__8652_8659 = G__8667;
i__8653_8660 = G__8668;
continue;
} else {
var temp__5753__auto___8669 = cljs.core.seq.call(null,seq__8650_8657);
if(temp__5753__auto___8669){
var seq__8650_8670__$1 = temp__5753__auto___8669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8650_8670__$1)){
var c__4556__auto___8671 = cljs.core.chunk_first.call(null,seq__8650_8670__$1);
var G__8672 = cljs.core.chunk_rest.call(null,seq__8650_8670__$1);
var G__8673 = c__4556__auto___8671;
var G__8674 = cljs.core.count.call(null,c__4556__auto___8671);
var G__8675 = (0);
seq__8650_8657 = G__8672;
chunk__8651_8658 = G__8673;
count__8652_8659 = G__8674;
i__8653_8660 = G__8675;
continue;
} else {
var component__8013__auto___8676 = cljs.core.first.call(null,seq__8650_8670__$1);
speclj.components.install.call(null,component__8013__auto___8676,description__8012__auto___8654);


var G__8677 = cljs.core.next.call(null,seq__8650_8670__$1);
var G__8678 = null;
var G__8679 = (0);
var G__8680 = (0);
seq__8650_8657 = G__8677;
chunk__8651_8658 = G__8678;
count__8652_8659 = G__8679;
i__8653_8660 = G__8680;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8648_8655);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8012__auto___8654);
}


//# sourceMappingURL=core_spec.js.map
