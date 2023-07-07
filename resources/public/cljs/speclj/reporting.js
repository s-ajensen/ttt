// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__4317_SHARP_){
return p1__4317_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_4318 = (function (reporter,message){
var x__4428__auto__ = (((reporter == null))?null:reporter);
var m__4429__auto__ = (speclj.reporting.report_message[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,reporter,message);
} else {
var m__4426__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_4318.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_4319 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_4319.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_4320 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_4320.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_4321 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_4321.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_4322 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_4322.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_4323 = (function (this$,results){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,results);
} else {
var m__4426__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_4323.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_4324 = (function (this$,exception){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,exception);
} else {
var m__4426__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_4324.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__4325 = cljs.core.seq.call(null,reporters);
var chunk__4326 = null;
var count__4327 = (0);
var i__4328 = (0);
while(true){
if((i__4328 < count__4327)){
var reporter = cljs.core._nth.call(null,chunk__4326,i__4328);
speclj.reporting.report_pass.call(null,reporter,result);


var G__4329 = seq__4325;
var G__4330 = chunk__4326;
var G__4331 = count__4327;
var G__4332 = (i__4328 + (1));
seq__4325 = G__4329;
chunk__4326 = G__4330;
count__4327 = G__4331;
i__4328 = G__4332;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4325);
if(temp__5753__auto__){
var seq__4325__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4325__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4325__$1);
var G__4333 = cljs.core.chunk_rest.call(null,seq__4325__$1);
var G__4334 = c__4556__auto__;
var G__4335 = cljs.core.count.call(null,c__4556__auto__);
var G__4336 = (0);
seq__4325 = G__4333;
chunk__4326 = G__4334;
count__4327 = G__4335;
i__4328 = G__4336;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4325__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__4337 = cljs.core.next.call(null,seq__4325__$1);
var G__4338 = null;
var G__4339 = (0);
var G__4340 = (0);
seq__4325 = G__4337;
chunk__4326 = G__4338;
count__4327 = G__4339;
i__4328 = G__4340;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__4341 = cljs.core.seq.call(null,reporters);
var chunk__4342 = null;
var count__4343 = (0);
var i__4344 = (0);
while(true){
if((i__4344 < count__4343)){
var reporter = cljs.core._nth.call(null,chunk__4342,i__4344);
speclj.reporting.report_fail.call(null,reporter,result);


var G__4345 = seq__4341;
var G__4346 = chunk__4342;
var G__4347 = count__4343;
var G__4348 = (i__4344 + (1));
seq__4341 = G__4345;
chunk__4342 = G__4346;
count__4343 = G__4347;
i__4344 = G__4348;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4341);
if(temp__5753__auto__){
var seq__4341__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4341__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4341__$1);
var G__4349 = cljs.core.chunk_rest.call(null,seq__4341__$1);
var G__4350 = c__4556__auto__;
var G__4351 = cljs.core.count.call(null,c__4556__auto__);
var G__4352 = (0);
seq__4341 = G__4349;
chunk__4342 = G__4350;
count__4343 = G__4351;
i__4344 = G__4352;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4341__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__4353 = cljs.core.next.call(null,seq__4341__$1);
var G__4354 = null;
var G__4355 = (0);
var G__4356 = (0);
seq__4341 = G__4353;
chunk__4342 = G__4354;
count__4343 = G__4355;
i__4344 = G__4356;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__4357 = cljs.core.seq.call(null,reporters);
var chunk__4358 = null;
var count__4359 = (0);
var i__4360 = (0);
while(true){
if((i__4360 < count__4359)){
var reporter = cljs.core._nth.call(null,chunk__4358,i__4360);
speclj.reporting.report_pending.call(null,reporter,result);


var G__4361 = seq__4357;
var G__4362 = chunk__4358;
var G__4363 = count__4359;
var G__4364 = (i__4360 + (1));
seq__4357 = G__4361;
chunk__4358 = G__4362;
count__4359 = G__4363;
i__4360 = G__4364;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4357);
if(temp__5753__auto__){
var seq__4357__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4357__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4357__$1);
var G__4365 = cljs.core.chunk_rest.call(null,seq__4357__$1);
var G__4366 = c__4556__auto__;
var G__4367 = cljs.core.count.call(null,c__4556__auto__);
var G__4368 = (0);
seq__4357 = G__4365;
chunk__4358 = G__4366;
count__4359 = G__4367;
i__4360 = G__4368;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4357__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__4369 = cljs.core.next.call(null,seq__4357__$1);
var G__4370 = null;
var G__4371 = (0);
var G__4372 = (0);
seq__4357 = G__4369;
chunk__4358 = G__4370;
count__4359 = G__4371;
i__4360 = G__4372;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__4373 = cljs.core.seq.call(null,reporters);
var chunk__4374 = null;
var count__4375 = (0);
var i__4376 = (0);
while(true){
if((i__4376 < count__4375)){
var reporter = cljs.core._nth.call(null,chunk__4374,i__4376);
speclj.reporting.report_error.call(null,reporter,result);


var G__4377 = seq__4373;
var G__4378 = chunk__4374;
var G__4379 = count__4375;
var G__4380 = (i__4376 + (1));
seq__4373 = G__4377;
chunk__4374 = G__4378;
count__4375 = G__4379;
i__4376 = G__4380;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4373);
if(temp__5753__auto__){
var seq__4373__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4373__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4373__$1);
var G__4381 = cljs.core.chunk_rest.call(null,seq__4373__$1);
var G__4382 = c__4556__auto__;
var G__4383 = cljs.core.count.call(null,c__4556__auto__);
var G__4384 = (0);
seq__4373 = G__4381;
chunk__4374 = G__4382;
count__4375 = G__4383;
i__4376 = G__4384;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4373__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__4385 = cljs.core.next.call(null,seq__4373__$1);
var G__4386 = null;
var G__4387 = (0);
var G__4388 = (0);
seq__4373 = G__4385;
chunk__4374 = G__4386;
count__4375 = G__4387;
i__4376 = G__4388;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_4389 = speclj.platform.stack_trace.call(null,exception);
var elides_4390 = (0);
while(true){
if(cljs.core.seq.call(null,levels_4389)){
var level_4391 = cljs.core.first.call(null,levels_4389);
if(speclj.platform.elide_level_QMARK_.call(null,level_4391)){
var G__4392 = cljs.core.rest.call(null,levels_4389);
var G__4393 = (elides_4390 + (1));
levels_4389 = G__4392;
elides_4390 = G__4393;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_4390);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_4391));

var G__4394 = cljs.core.rest.call(null,levels_4389);
var G__4395 = (0);
levels_4389 = G__4394;
elides_4390 = G__4395;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_4390);
}
break;
}

var temp__5751__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5751__auto__)){
var cause = temp__5751__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__4396_4400 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__4397_4401 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__4398_4402 = true;
var _STAR_print_fn_STAR__temp_val__4399_4403 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__4398_4402);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__4399_4403);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__4397_4401);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__4396_4400);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___4407 = arguments.length;
var i__4737__auto___4408 = (0);
while(true){
if((i__4737__auto___4408 < len__4736__auto___4407)){
args__4742__auto__.push((arguments[i__4737__auto___4408]));

var G__4409 = (i__4737__auto___4408 + (1));
i__4737__auto___4408 = G__4409;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__4404_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4404_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq4405){
var G__4406 = cljs.core.first.call(null,seq4405);
var seq4405__$1 = cljs.core.next.call(null,seq4405);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4406,seq4405__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___4412 = arguments.length;
var i__4737__auto___4413 = (0);
while(true){
if((i__4737__auto___4413 < len__4736__auto___4412)){
args__4742__auto__.push((arguments[i__4737__auto___4413]));

var G__4414 = (i__4737__auto___4413 + (1));
i__4737__auto___4413 = G__4414;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq4410){
var G__4411 = cljs.core.first.call(null,seq4410);
var seq4410__$1 = cljs.core.next.call(null,seq4410);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4411,seq4410__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__4415 = cljs.core.seq.call(null,reporters);
var chunk__4416 = null;
var count__4417 = (0);
var i__4418 = (0);
while(true){
if((i__4418 < count__4417)){
var reporter = cljs.core._nth.call(null,chunk__4416,i__4418);
speclj.reporting.report_description.call(null,reporter,description);


var G__4419 = seq__4415;
var G__4420 = chunk__4416;
var G__4421 = count__4417;
var G__4422 = (i__4418 + (1));
seq__4415 = G__4419;
chunk__4416 = G__4420;
count__4417 = G__4421;
i__4418 = G__4422;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4415);
if(temp__5753__auto__){
var seq__4415__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4415__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4415__$1);
var G__4423 = cljs.core.chunk_rest.call(null,seq__4415__$1);
var G__4424 = c__4556__auto__;
var G__4425 = cljs.core.count.call(null,c__4556__auto__);
var G__4426 = (0);
seq__4415 = G__4423;
chunk__4416 = G__4424;
count__4417 = G__4425;
i__4418 = G__4426;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4415__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__4427 = cljs.core.next.call(null,seq__4415__$1);
var G__4428 = null;
var G__4429 = (0);
var G__4430 = (0);
seq__4415 = G__4427;
chunk__4416 = G__4428;
count__4417 = G__4429;
i__4418 = G__4430;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__4431 = cljs.core.seq.call(null,reporters);
var chunk__4432 = null;
var count__4433 = (0);
var i__4434 = (0);
while(true){
if((i__4434 < count__4433)){
var reporter = cljs.core._nth.call(null,chunk__4432,i__4434);
speclj.reporting.report_runs.call(null,reporter,results);


var G__4435 = seq__4431;
var G__4436 = chunk__4432;
var G__4437 = count__4433;
var G__4438 = (i__4434 + (1));
seq__4431 = G__4435;
chunk__4432 = G__4436;
count__4433 = G__4437;
i__4434 = G__4438;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4431);
if(temp__5753__auto__){
var seq__4431__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4431__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4431__$1);
var G__4439 = cljs.core.chunk_rest.call(null,seq__4431__$1);
var G__4440 = c__4556__auto__;
var G__4441 = cljs.core.count.call(null,c__4556__auto__);
var G__4442 = (0);
seq__4431 = G__4439;
chunk__4432 = G__4440;
count__4433 = G__4441;
i__4434 = G__4442;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4431__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__4443 = cljs.core.next.call(null,seq__4431__$1);
var G__4444 = null;
var G__4445 = (0);
var G__4446 = (0);
seq__4431 = G__4443;
chunk__4432 = G__4444;
count__4433 = G__4445;
i__4434 = G__4446;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__4447 = cljs.core.seq.call(null,reporters);
var chunk__4448 = null;
var count__4449 = (0);
var i__4450 = (0);
while(true){
if((i__4450 < count__4449)){
var reporter = cljs.core._nth.call(null,chunk__4448,i__4450);
speclj.reporting.report_message.call(null,reporter,message);


var G__4451 = seq__4447;
var G__4452 = chunk__4448;
var G__4453 = count__4449;
var G__4454 = (i__4450 + (1));
seq__4447 = G__4451;
chunk__4448 = G__4452;
count__4449 = G__4453;
i__4450 = G__4454;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4447);
if(temp__5753__auto__){
var seq__4447__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4447__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4447__$1);
var G__4455 = cljs.core.chunk_rest.call(null,seq__4447__$1);
var G__4456 = c__4556__auto__;
var G__4457 = cljs.core.count.call(null,c__4556__auto__);
var G__4458 = (0);
seq__4447 = G__4455;
chunk__4448 = G__4456;
count__4449 = G__4457;
i__4450 = G__4458;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4447__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__4459 = cljs.core.next.call(null,seq__4447__$1);
var G__4460 = null;
var G__4461 = (0);
var G__4462 = (0);
seq__4447 = G__4459;
chunk__4448 = G__4460;
count__4449 = G__4461;
i__4450 = G__4462;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__4463 = cljs.core.seq.call(null,reporters);
var chunk__4464 = null;
var count__4465 = (0);
var i__4466 = (0);
while(true){
if((i__4466 < count__4465)){
var reporter = cljs.core._nth.call(null,chunk__4464,i__4466);
speclj.reporting.report_error.call(null,reporter,exception);


var G__4467 = seq__4463;
var G__4468 = chunk__4464;
var G__4469 = count__4465;
var G__4470 = (i__4466 + (1));
seq__4463 = G__4467;
chunk__4464 = G__4468;
count__4465 = G__4469;
i__4466 = G__4470;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4463);
if(temp__5753__auto__){
var seq__4463__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4463__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4463__$1);
var G__4471 = cljs.core.chunk_rest.call(null,seq__4463__$1);
var G__4472 = c__4556__auto__;
var G__4473 = cljs.core.count.call(null,c__4556__auto__);
var G__4474 = (0);
seq__4463 = G__4471;
chunk__4464 = G__4472;
count__4465 = G__4473;
i__4466 = G__4474;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4463__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__4475 = cljs.core.next.call(null,seq__4463__$1);
var G__4476 = null;
var G__4477 = (0);
var G__4478 = (0);
seq__4463 = G__4475;
chunk__4464 = G__4476;
count__4465 = G__4477;
i__4466 = G__4478;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
