// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_.call(null,component)) || (speclj.components.is_characteristic_QMARK_.call(null,component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref.call(null,component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.deref.call(null,component.has_focus_QMARK_);
} else {
return false;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__4126__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5753__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__5862 = parent;
component = G__5862;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__4126__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.not.call(null,speclj.running.focus_mode_QMARK_.call(null,component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.concat.call(null,cljs.core.deref.call(null,component.characteristics),cljs.core.deref.call(null,component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_.call(null,component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_BANG_,cljs.core.deref.call(null,component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_children_BANG_,cljs.core.deref.call(null,component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5753__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__5863 = parent;
component = G__5863;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__5864 = cljs.core.seq.call(null,descriptions);
var chunk__5865 = null;
var count__5866 = (0);
var i__5867 = (0);
while(true){
if((i__5867 < count__5866)){
var component = cljs.core._nth.call(null,chunk__5865,i__5867);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__5868 = seq__5864;
var G__5869 = chunk__5865;
var G__5870 = count__5866;
var G__5871 = (i__5867 + (1));
seq__5864 = G__5868;
chunk__5865 = G__5869;
count__5866 = G__5870;
i__5867 = G__5871;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__5864);
if(temp__5753__auto__){
var seq__5864__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5864__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5864__$1);
var G__5872 = cljs.core.chunk_rest.call(null,seq__5864__$1);
var G__5873 = c__4556__auto__;
var G__5874 = cljs.core.count.call(null,c__4556__auto__);
var G__5875 = (0);
seq__5864 = G__5872;
chunk__5865 = G__5873;
count__5866 = G__5874;
i__5867 = G__5875;
continue;
} else {
var component = cljs.core.first.call(null,seq__5864__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__5876 = cljs.core.next.call(null,seq__5864__$1);
var G__5877 = null;
var G__5878 = (0);
var G__5879 = (0);
seq__5864 = G__5876;
chunk__5865 = G__5877;
count__5866 = G__5878;
i__5867 = G__5879;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__5880 = cljs.core.seq.call(null,characteristics);
var chunk__5882 = null;
var count__5883 = (0);
var i__5884 = (0);
while(true){
if((i__5884 < count__5883)){
var characteristic = cljs.core._nth.call(null,chunk__5882,i__5884);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__5886 = seq__5880;
var G__5887 = chunk__5882;
var G__5888 = count__5883;
var G__5889 = (i__5884 + (1));
seq__5880 = G__5886;
chunk__5882 = G__5887;
count__5883 = G__5888;
i__5884 = G__5889;
continue;
} else {
var G__5890 = seq__5880;
var G__5891 = chunk__5882;
var G__5892 = count__5883;
var G__5893 = (i__5884 + (1));
seq__5880 = G__5890;
chunk__5882 = G__5891;
count__5883 = G__5892;
i__5884 = G__5893;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__5880);
if(temp__5753__auto__){
var seq__5880__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5880__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5880__$1);
var G__5894 = cljs.core.chunk_rest.call(null,seq__5880__$1);
var G__5895 = c__4556__auto__;
var G__5896 = cljs.core.count.call(null,c__4556__auto__);
var G__5897 = (0);
seq__5880 = G__5894;
chunk__5882 = G__5895;
count__5883 = G__5896;
i__5884 = G__5897;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__5880__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__5898 = cljs.core.next.call(null,seq__5880__$1);
var G__5899 = null;
var G__5900 = (0);
var G__5901 = (0);
seq__5880 = G__5898;
chunk__5882 = G__5899;
count__5883 = G__5900;
i__5884 = G__5901;
continue;
} else {
var G__5902 = cljs.core.next.call(null,seq__5880__$1);
var G__5903 = null;
var G__5904 = (0);
var G__5905 = (0);
seq__5880 = G__5902;
chunk__5882 = G__5903;
count__5883 = G__5904;
i__5884 = G__5905;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq.call(null,cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__5906_5910 = cljs.core.seq.call(null,descriptions);
var chunk__5907_5911 = null;
var count__5908_5912 = (0);
var i__5909_5913 = (0);
while(true){
if((i__5909_5913 < count__5908_5912)){
var description_5914 = cljs.core._nth.call(null,chunk__5907_5911,i__5909_5913);
speclj.running.scan_for_focus_BANG_.call(null,description_5914);


var G__5915 = seq__5906_5910;
var G__5916 = chunk__5907_5911;
var G__5917 = count__5908_5912;
var G__5918 = (i__5909_5913 + (1));
seq__5906_5910 = G__5915;
chunk__5907_5911 = G__5916;
count__5908_5912 = G__5917;
i__5909_5913 = G__5918;
continue;
} else {
var temp__5753__auto___5919 = cljs.core.seq.call(null,seq__5906_5910);
if(temp__5753__auto___5919){
var seq__5906_5920__$1 = temp__5753__auto___5919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5906_5920__$1)){
var c__4556__auto___5921 = cljs.core.chunk_first.call(null,seq__5906_5920__$1);
var G__5922 = cljs.core.chunk_rest.call(null,seq__5906_5920__$1);
var G__5923 = c__4556__auto___5921;
var G__5924 = cljs.core.count.call(null,c__4556__auto___5921);
var G__5925 = (0);
seq__5906_5910 = G__5922;
chunk__5907_5911 = G__5923;
count__5908_5912 = G__5924;
i__5909_5913 = G__5925;
continue;
} else {
var description_5926 = cljs.core.first.call(null,seq__5906_5920__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_5926);


var G__5927 = cljs.core.next.call(null,seq__5906_5920__$1);
var G__5928 = null;
var G__5929 = (0);
var G__5930 = (0);
seq__5906_5910 = G__5927;
chunk__5907_5911 = G__5928;
count__5908_5912 = G__5929;
i__5909_5913 = G__5930;
continue;
}
} else {
}
}
break;
}

var or__4126__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,speclj.running.focus_mode_QMARK_,descriptions));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__5931 = cljs.core.seq.call(null,components);
var chunk__5932 = null;
var count__5933 = (0);
var i__5934 = (0);
while(true){
if((i__5934 < count__5933)){
var component = cljs.core._nth.call(null,chunk__5932,i__5934);
component.body.call(null);


var G__5935 = seq__5931;
var G__5936 = chunk__5932;
var G__5937 = count__5933;
var G__5938 = (i__5934 + (1));
seq__5931 = G__5935;
chunk__5932 = G__5936;
count__5933 = G__5937;
i__5934 = G__5938;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__5931);
if(temp__5753__auto__){
var seq__5931__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5931__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5931__$1);
var G__5939 = cljs.core.chunk_rest.call(null,seq__5931__$1);
var G__5940 = c__4556__auto__;
var G__5941 = cljs.core.count.call(null,c__4556__auto__);
var G__5942 = (0);
seq__5931 = G__5939;
chunk__5932 = G__5940;
count__5933 = G__5941;
i__5934 = G__5942;
continue;
} else {
var component = cljs.core.first.call(null,seq__5931__$1);
component.body.call(null);


var G__5943 = cljs.core.next.call(null,seq__5931__$1);
var G__5944 = null;
var G__5945 = (0);
var G__5946 = (0);
seq__5931 = G__5943;
chunk__5932 = G__5944;
count__5933 = G__5945;
i__5934 = G__5946;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__5947 = cljs.core.seq.call(null,withs);
var chunk__5948 = null;
var count__5949 = (0);
var i__5950 = (0);
while(true){
if((i__5950 < count__5949)){
var with$ = cljs.core._nth.call(null,chunk__5948,i__5950);
speclj.components.reset_with.call(null,with$);


var G__5951 = seq__5947;
var G__5952 = chunk__5948;
var G__5953 = count__5949;
var G__5954 = (i__5950 + (1));
seq__5947 = G__5951;
chunk__5948 = G__5952;
count__5949 = G__5953;
i__5950 = G__5954;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__5947);
if(temp__5753__auto__){
var seq__5947__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5947__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5947__$1);
var G__5955 = cljs.core.chunk_rest.call(null,seq__5947__$1);
var G__5956 = c__4556__auto__;
var G__5957 = cljs.core.count.call(null,c__4556__auto__);
var G__5958 = (0);
seq__5947 = G__5955;
chunk__5948 = G__5956;
count__5949 = G__5957;
i__5950 = G__5958;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__5947__$1);
speclj.components.reset_with.call(null,with$);


var G__5959 = cljs.core.next.call(null,seq__5947__$1);
var G__5960 = null;
var G__5961 = (0);
var G__5962 = (0);
seq__5947 = G__5959;
chunk__5948 = G__5960;
count__5949 = G__5961;
i__5950 = G__5962;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__5963 = cljs.core.deref.call(null,description__$1.parent);
var G__5964 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__5963;
components = G__5964;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__5965_SHARP_){
return cljs.core.deref.call(null,p1__5965_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__5966_SHARP_){
return cljs.core.deref.call(null,p1__5966_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__5967_SHARP_){
return cljs.core.deref.call(null,p1__5967_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__5968_SHARP_){
return p1__5968_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__5969_SHARP_){
return cljs.core.deref.call(null,p1__5969_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e5970){var e = e5970;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__5971(s__5972){
return (new cljs.core.LazySeq(null,(function (){
var s__5972__$1 = s__5972;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__5972__$1);
if(temp__5753__auto__){
var s__5972__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5972__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5972__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5974 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5973 = (0);
while(true){
if((i__5973 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__5973);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__5974,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__5975 = (i__5973 + (1));
i__5973 = G__5975;
continue;
} else {
var G__5976 = (i__5973 + (1));
i__5973 = G__5976;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5974),speclj$running$do_characteristics_$_iter__5971.call(null,cljs.core.chunk_rest.call(null,s__5972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5974),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__5972__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__5971.call(null,cljs.core.rest.call(null,s__5972__$2)));
} else {
var G__5977 = cljs.core.rest.call(null,s__5972__$2);
s__5972__$1 = G__5977;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,children)){
var G__5978 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__5979 = cljs.core.rest.call(null,children);
results__$1 = G__5978;
children = G__5979;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__5982_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__5982_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__5983_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__5983_SHARP_.unique_name)].join('');
}),withs);
var seq__5984_6016 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__5985_6017 = null;
var count__5986_6018 = (0);
var i__5987_6019 = (0);
while(true){
if((i__5987_6019 < count__5986_6018)){
var vec__5994_6020 = cljs.core._nth.call(null,chunk__5985_6017,i__5987_6019);
var n_6021 = cljs.core.nth.call(null,vec__5994_6020,(0),null);
var un_6022 = cljs.core.nth.call(null,vec__5994_6020,(1),null);
var code_6023 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6021)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6022),";"].join('');
eval(code_6023);


var G__6024 = seq__5984_6016;
var G__6025 = chunk__5985_6017;
var G__6026 = count__5986_6018;
var G__6027 = (i__5987_6019 + (1));
seq__5984_6016 = G__6024;
chunk__5985_6017 = G__6025;
count__5986_6018 = G__6026;
i__5987_6019 = G__6027;
continue;
} else {
var temp__5753__auto___6028 = cljs.core.seq.call(null,seq__5984_6016);
if(temp__5753__auto___6028){
var seq__5984_6029__$1 = temp__5753__auto___6028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5984_6029__$1)){
var c__4556__auto___6030 = cljs.core.chunk_first.call(null,seq__5984_6029__$1);
var G__6031 = cljs.core.chunk_rest.call(null,seq__5984_6029__$1);
var G__6032 = c__4556__auto___6030;
var G__6033 = cljs.core.count.call(null,c__4556__auto___6030);
var G__6034 = (0);
seq__5984_6016 = G__6031;
chunk__5985_6017 = G__6032;
count__5986_6018 = G__6033;
i__5987_6019 = G__6034;
continue;
} else {
var vec__5997_6035 = cljs.core.first.call(null,seq__5984_6029__$1);
var n_6036 = cljs.core.nth.call(null,vec__5997_6035,(0),null);
var un_6037 = cljs.core.nth.call(null,vec__5997_6035,(1),null);
var code_6038 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6036)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6037),";"].join('');
eval(code_6038);


var G__6039 = cljs.core.next.call(null,seq__5984_6029__$1);
var G__6040 = null;
var G__6041 = (0);
var G__6042 = (0);
seq__5984_6016 = G__6039;
chunk__5985_6017 = G__6040;
count__5986_6018 = G__6041;
i__5987_6019 = G__6042;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__6000_6043 = cljs.core.seq.call(null,var_names);
var chunk__6001_6044 = null;
var count__6002_6045 = (0);
var i__6003_6046 = (0);
while(true){
if((i__6003_6046 < count__6002_6045)){
var vec__6010_6047 = cljs.core._nth.call(null,chunk__6001_6044,i__6003_6046);
var n_6048 = cljs.core.nth.call(null,vec__6010_6047,(0),null);
var code_6049 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6048)," = null;"].join('');
eval(code_6049);


var G__6050 = seq__6000_6043;
var G__6051 = chunk__6001_6044;
var G__6052 = count__6002_6045;
var G__6053 = (i__6003_6046 + (1));
seq__6000_6043 = G__6050;
chunk__6001_6044 = G__6051;
count__6002_6045 = G__6052;
i__6003_6046 = G__6053;
continue;
} else {
var temp__5753__auto___6054 = cljs.core.seq.call(null,seq__6000_6043);
if(temp__5753__auto___6054){
var seq__6000_6055__$1 = temp__5753__auto___6054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6000_6055__$1)){
var c__4556__auto___6056 = cljs.core.chunk_first.call(null,seq__6000_6055__$1);
var G__6057 = cljs.core.chunk_rest.call(null,seq__6000_6055__$1);
var G__6058 = c__4556__auto___6056;
var G__6059 = cljs.core.count.call(null,c__4556__auto___6056);
var G__6060 = (0);
seq__6000_6043 = G__6057;
chunk__6001_6044 = G__6058;
count__6002_6045 = G__6059;
i__6003_6046 = G__6060;
continue;
} else {
var vec__6013_6061 = cljs.core.first.call(null,seq__6000_6055__$1);
var n_6062 = cljs.core.nth.call(null,vec__6013_6061,(0),null);
var code_6063 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6062)," = null;"].join('');
eval(code_6063);


var G__6064 = cljs.core.next.call(null,seq__6000_6055__$1);
var G__6065 = null;
var G__6066 = (0);
var G__6067 = (0);
seq__6000_6043 = G__6064;
chunk__6001_6044 = G__6065;
count__6002_6045 = G__6066;
i__6003_6046 = G__6067;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__6068_SHARP_){
return p1__6068_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,description))){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_6069 = (function (this$,directories,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_directories[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,directories,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_directories["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_6069.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_6070 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.submit_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.running.submit_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_6070.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_6071 = (function (this$,description,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_6071.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_6072 = (function (this$,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_and_report[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_6072.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
