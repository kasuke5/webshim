!function(a){window.jQuery&&(a(jQuery),a=jQuery.noop),"function"==typeof define&&define.amd&&define.amd.jQuery&&define("polyfiller",["jquery"],a)}(function(a){"use strict";{var b,c="dom-support",d=a(document.scripts||"script"),e=a.event.special,f=a([]),g=window.Modernizr,h=window.asyncWebshims,i=g.addTest,j=window.Object;window.html5||{}}g.advancedObjectProperties=g.objectAccessor=g.ES5=!!("create"in j&&"seal"in j),!g.ES5||"toJSON"in Date.prototype||(g.ES5=!1);var k={version:"1.11.6",cfg:{waitReady:!0,loadStyles:!0,disableShivMethods:!0,wspopover:{appendTo:"auto",hideOnBlur:!0},ajax:{cache:!0,crossDomain:!0},basePath:function(){var b,c=d.filter('[src*="polyfiller.js"]');return c=c[0]||c.end()[c.end().length-1],b=("hrefNormalized"in a.support&&!a.support.hrefNormalized?c.getAttribute("src",4):c.src).split("?")[0],b=b.slice(0,b.lastIndexOf("/")+1)+"shims/"}()},bugs:{},modules:{},features:{},featureList:[],setOptions:function(b,c){"string"==typeof b&&void 0!==c?l[b]=a.isPlainObject(c)?a.extend(!0,l[b]||{},c):c:"object"==typeof b&&a.extend(!0,l,b)},addPolyfill:function(b,c){c=c||{};var d=c.f||b;m[d]||(m[d]=[],k.featureList.push(d),l[d]={}),!m[d].failedM&&c.nM&&a.each(c.nM.split(" "),function(a,b){return b in g?void 0:(m[d].failedM=b,!1)}),m[d].failedM&&(c.test=!0),m[d].push(b),c.options=a.extend(l[d],c.options),t(b,c),c.methodNames&&a.each(c.methodNames,function(a,b){k.addMethodName(b)})},polyfill:function(){return function(a){a||(a=k.featureList),"string"==typeof a&&(a=a.split(" "));return k._polyfill(a)}}(),_polyfill:function(c){var d=[];b(),-1==a.inArray("forms",c)&&-1!==a.inArray("forms-ext",c)&&c.push("forms"),l.waitReady&&(a.readyWait++,o(c,function(){a.ready(!0)})),a.each(c,function(a,b){return m[b]?(b!==m[b][0]&&o(m[b],function(){n(b,!0)}),d=d.concat(m[b]),void 0):(n(b,!0),void 0)}),l.loadStyles&&r.loadCSS("styles/shim.css"),s(d)},reTest:function(){var b,c=function(c,d){var f,g=q[d],h=d+"Ready";!g||g.loaded||(g.test&&a.isFunction(g.test)?g.test([]):g.test)||(e[h]&&delete e[h],f=m[g.f],b.push(d))};return function(d){"string"==typeof d&&(d=d.split(" ")),b=[],a.each(d,c),s(b)}}(),isReady:function(b,c){if(b+="Ready",c){if(e[b]&&e[b].add)return!0;e[b]=a.extend(e[b]||{},{add:function(a){a.handler.call(this,b)}}),a(document).triggerHandler(b)}return!(!e[b]||!e[b].add)||!1},ready:function(b,c){var d=arguments[2];if("string"==typeof b&&(b=b.split(" ")),d||(b=a.map(a.grep(b,function(a){return!n(a)}),function(a){return a+"Ready"})),!b.length)return c(a,k,window,document),void 0;var e=b.shift(),f=function(){o(b,c,!0)};a(document).one(e,f)},capturingEvents:function(b,c){document.addEventListener&&("string"==typeof b&&(b=[b]),a.each(b,function(b,d){var f=function(b){return b=a.event.fix(b),c&&k.capturingEventPrevented&&k.capturingEventPrevented(b),a.event.dispatch.call(this,b)};e[d]=e[d]||{},e[d].setup||e[d].teardown||a.extend(e[d],{setup:function(){this.addEventListener(d,f,!0)},teardown:function(){this.removeEventListener(d,f,!0)}})}))},register:function(b,c){var d=q[b];if(!d)return k.error("can't find module: "+b),void 0;if(d.noAutoCallback){var e=function(){c(a,k,window,document,void 0,d.options),n(b,!0)};d.d&&d.d.length?o(d.d,e):e()}},c:{},loader:{addModule:function(b,c){q[b]=c,c.name=c.name||b,c.c||(c.c=[]),a.each(c.c,function(a,c){k.c[c]||(k.c[c]=[]),k.c[c].push(b)})},loadList:function(){var b=[],c=function(c,d){"string"==typeof d&&(d=[d]),a.merge(b,d),r.loadScript(c,!1,d)},d=function(c,d){if(n(c)||-1!=a.inArray(c,b))return!0;{var e,f=q[c];l[f.f||c]||{}}return f?(e=f.test&&a.isFunction(f.test)?f.test(d):f.test,e?(n(c,!0),!0):!1):!0},e=function(b,c){if(b.d&&b.d.length){var e=function(b,e){d(e,c)||-1!=a.inArray(e,c)||c.push(e)};a.each(b.d,function(b,c){q[c]?e(b,c):m[c]&&(a.each(m[c],e),o(m[c],function(){n(c,!0)}))}),b.noAutoCallback||(b.noAutoCallback=!0)}};return function(f){var g,h,i,j,m=[],n=function(d,e){return j=e,a.each(k.c[e],function(c,d){return-1==a.inArray(d,m)||-1!=a.inArray(d,b)?(j=!1,!1):void 0}),j?(c("combos/"+j,k.c[j]),!1):void 0};for(h=0;h<f.length;h++)g=q[f[h]],g&&!d(g.name,f)&&(g.css&&l.loadStyles&&r.loadCSS(g.css),g.loadInit&&g.loadInit(),g.loaded=!0,e(g,f),m.push(g.name));for(h=0,i=m.length;i>h;h++)j=!1,g=m[h],-1==a.inArray(g,b)&&("noCombo"!=l.debug&&a.each(q[g].c,n),j||c(q[g].src||g,g))}}(),makePath:function(a){return-1!=a.indexOf("//")||0===a.indexOf("/")?a:(-1==a.indexOf(".")&&(a+=".js"),l.addCacheBuster&&(a+=l.addCacheBuster),l.basePath+a)},loadCSS:function(){var b,c={};return function(d){d=this.makePath(d),c[d]||(b=b||a("link, style")[0]||a("script")[0],c[d]=1,a('<link rel="stylesheet" />').insertBefore(b).attr({href:d}))}}(),loadScript:function(){var b={};return function(c,d,e){if(c=r.makePath(c),!b[c]){var f=function(){d&&d(),e&&("string"==typeof e&&(e=e.split(" ")),a.each(e,function(a,b){q[b]&&(q[b].afterLoad&&q[b].afterLoad(),n(q[b].noAutoCallback?b+"FileLoaded":b,!0))}))};b[c]=1,window.require&&window.define&&window.define.amd?require([c],f):window.sssl?sssl(c,f):window.yepnope?yepnope.injectJs(c,f):a.ajax(a.extend({},l.ajax,{url:c,success:f,dataType:"script"}))}}}()}};a.webshims=k;var l=k.cfg,m=k.features,n=k.isReady,o=k.ready,p=k.addPolyfill,q=k.modules,r=k.loader,s=r.loadList,t=r.addModule,u=k.bugs,v=[],w={warn:1,error:1};return k.addMethodName=function(b){b=b.split(":");var c=b[1];1==b.length?(c=b[0],b=b[0]):b=b[0],a.fn[b]=function(){return this.callProp(c,arguments)}},a.fn.callProp=function(b,c){var d;return c||(c=[]),this.each(function(){var e=a.prop(this,b);if(e&&e.apply){if(d=e.apply(this,c),void 0!==d)return!1}else k.warn(b+" is not a method of "+this)}),void 0!==d?d:this},k.activeLang=function(){var a=navigator.browserLanguage||navigator.language||"";return o("webshimLocalization",function(){k.activeLang(a)}),function(b){if(b)if("string"==typeof b)a=b;else if("object"==typeof b){var c=arguments,d=this;o("webshimLocalization",function(){k.activeLang.apply(d,c)})}return a}}(),k.errorLog=[],a.each(["log","error","warn","info"],function(a,b){k[b]=function(a){(w[b]&&l.debug!==!1||l.debug)&&(k.errorLog.push(a),window.console&&console.log&&console[console[b]?b:"log"](a))}}),function(){a.isDOMReady=a.isReady;var c=function(){a.isDOMReady=!0,n("DOM",!0),setTimeout(function(){n("WINDOWLOAD",!0)},9999)};b=function(){if(!b.run){if(a.mobile&&(a.mobile.textinput||a.mobile.rangeslider||a.mobile.button)&&(l.readyEvt||(l.readyEvt="pageinit"),l.waitReady=!1),!a.isDOMReady&&l.waitReady){var d=a.ready;a.ready=function(b){return b!==!0&&document.body&&(c(),a.ready=d),d.apply(this,arguments)},a.ready.promise=d.promise}l.readyEvt?a(document).one(l.readyEvt,c):a(c)}b.run=!0},setTimeout(function(){a(c)},4),a(window).on("load",function(){c(),setTimeout(function(){n("WINDOWLOAD",!0)},9)});var d=[],e=function(){1==this.nodeType&&k.triggerDomUpdate(this)};a.extend(k,{addReady:function(a){var b=function(b,c){k.ready("DOM",function(){a(b,c)})};d.push(b),b(document,f)},triggerDomUpdate:function(b){if(!b||!b.nodeType)return b&&b.jquery&&b.each(function(){k.triggerDomUpdate(this)}),void 0;var c=b.nodeType;if(1==c||9==c){var e=b!==document?a(b):f;a.each(d,function(a,c){c(b,e)})}}}),a.fn.htmlPolyfill=function(b){var c=a.fn.html.call(this,b);return c===this&&a.isDOMReady&&this.each(e),c},a.fn.jProp=function(){return this.pushStack(a(a.fn.prop.apply(this,arguments)||[]))},a.each(["after","before","append","prepend","replaceWith"],function(b,c){a.fn[c+"Polyfill"]=function(b){return b=a(b),a.fn[c].call(this,b),a.isDOMReady&&b.each(e),this}}),a.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(b,c){a.fn[c.replace(/[A-Z]/,function(a){return"Polyfill"+a})]=function(){return a.fn[c].apply(this,arguments),a.isDOMReady&&k.triggerDomUpdate(this),this}}),a.fn.updatePolyfill=function(){return a.isDOMReady&&k.triggerDomUpdate(this),this},a.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(b,c){a.fn[c]=function(){return this.pushStack(this)}})}(),function(){var b="defineProperty",c=j.prototype.hasOwnProperty,d=["configurable","enumerable","writable"],e=function(a){for(var b=0;3>b;b++)void 0!==a[d[b]]||"writable"===d[b]&&void 0===a.value||(a[d[b]]=!0)},f=function(a){if(a)for(var b in a)c.call(a,b)&&e(a[b])};j.create&&(k.objectCreate=function(b,c,d){f(c);var e=j.create(b,c);return d&&(e.options=a.extend(!0,{},e.options||{},d),d=e.options),e._create&&a.isFunction(e._create)&&e._create(d),e}),j[b]&&(k[b]=function(a,c,d){return e(d),j[b](a,c,d)}),j.defineProperties&&(k.defineProperties=function(a,b){return f(b),j.defineProperties(a,b)}),k.getOwnPropertyDescriptor=j.getOwnPropertyDescriptor,k.getPrototypeOf=j.getPrototypeOf}(),t("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,19,25,23,27]}),q.swfmini.test(),t("sizzle",{test:a.expr.filters}),t("$ajax",{test:a.ajax}),p("es5",{test:!(!g.ES5||!Function.prototype.bind),c:[18,19,25,20]}),p("dom-extend",{f:c,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,30,3,8,4,9,10,25,19,20,26,31]}),p("geolocation",{test:g.geolocation,options:{destroyWrite:!0},d:["json-storage"],c:[21],nM:"geolocation"}),function(){p("canvas",{src:"excanvas",test:g.canvas,options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var a=this.options.type;!a||-1===a.indexOf("flash")||q.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(this.src="flash"==a?"FlashCanvas/flashcanvas":"FlashCanvasPro/flashcanvas")},methodNames:["getContext"],d:[c],nM:"canvas"})}(),function(){var b,d,e,f="form-shim-extend",h=g.input,j=g.inputtypes,m="formvalidation",n="form-number-date-api",o=!1,r=!1,s=function(){var c,d,e;return s.run||(e=a("<fieldset />")[0],i(m,!(!h.required||!h.pattern)),i("fieldsetdisabled","disabled"in e),i("fieldsetelements","elements"in e),j&&j.range&&!window.opera&&(c=a('<input type="range" style="-webkit-appearance: slider-horizontal; -moz-appearance: range;" />').appendTo("html"),d=c.css("appearance"),c.remove(),i("csstrackrange",null==d||"range"==d),i("cssrangeinput","slider-horizontal"==d||"range"==d),i("styleableinputrange",g.csstrackrange||g.cssrangeinput)),g[m]&&(r=!(g.fieldsetdisabled&&g.fieldsetelements&&"value"in document.createElement("progress")&&"value"in document.createElement("output")),u.bustedValidity=o=window.opera||r||!h.list),b=g[m]&&!o?"form-native-extend":f),s.run=!0,!1};h&&j&&s(),document.createElement("datalist"),k.validationMessages=k.validityMessages={langSrc:"i18n/formcfg-",availableLangs:["ar","ch-ZN","cs","el","es","fr","he","hi","hu","it","ja","lt","nl","pl","pt","pt-BR","pt-PT","ru","sv"]},k.formcfg=a.extend({},k.validationMessages),k.inputTypes={},p("form-core",{f:"forms",d:["es5"],test:s,options:{placeholderType:"value",messagePopover:{},list:{popover:{constrainWidth:!0}},iVal:{handleBubble:!0,sel:".ws-instantvalidation",recheckDelay:400}},methodNames:["setCustomValidity","checkValidity","setSelectionRange"],c:[16,7,2,8,1,15,30,3,31],nM:"input"}),d=l.forms,p("form-native-extend",{f:"forms",test:function(b){return!g[m]||o||-1==a.inArray(n,b||[])||q[n].test()},d:["form-core",c,"form-message"],c:[6,5]}),p(f,{f:"forms",test:function(){return g[m]&&!o},d:["form-core",c,"sizzle"],c:[16,15,24]}),p(f+"2",{f:"forms",test:function(){return g[m]&&!r},d:[f],c:[24]}),p("form-message",{f:"forms",test:function(a){return!(d.customMessages||!g[m]||o||!q[b].test(a))},d:[c],c:[16,7,15,30,3,8,4]}),e={noAutoCallback:!0,options:d},t("form-validation",a.extend({d:["form-message","form-core"]},e)),t("form-validators",a.extend({},e)),p(n,{f:"forms-ext",options:{types:"datetime-local month date time range number"},test:function(){var b=!0,c=this.options;return c._types||(c._types=c.types.split(" ")),s(),a.each(c._types,function(a,c){return c in j&&!j[c]?(b=!1,!1):void 0}),b},methodNames:["stepUp","stepDown"],d:["forms",c],c:[6,5,18,17],nM:"input inputtypes"}),t("range-ui",{options:{},noAutoCallback:!0,test:function(){return!!a.fn.rangeUI},d:["es5"],c:[6,5,9,10,18,17,11]}),p("form-number-date-ui",{f:"forms-ext",test:function(){var a=this.options;return s(),r&&!a.replaceUI&&/Android/i.test(navigator.userAgent)&&(a.replaceUI=!0),!a.replaceUI&&q[n].test()},d:["forms",c,n,"range-ui"],css:"styles/forms-ext.css",options:{widgets:{calculateWidth:!0,monthNames:"monthNamesShort",monthNamesHead:"monthNames"}},c:[6,5,9,10,18,17,11]}),p("form-datalist",{f:"forms",test:function(){return s(),h.list&&!d.fD},d:["form-core",c],c:[16,7,6,2,9,15,30,31]})}(),p("filereader",{test:"FileReader"in window,d:["swfmini",c],c:[25,26,27]}),"details"in g||i("details",function(){return"open"in document.createElement("details")}),p("details",{test:g.details,d:[c],options:{text:"Details"},c:[21,22]}),function(){k.mediaelement={},p("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{preferFlash:!1,vars:{},params:{},attrs:{},changeSWF:a.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,19,25,20,23],nM:"audio video texttrackapi"}),p("mediaelement-jaris",{f:"mediaelement",d:["mediaelement-core","swfmini",c],test:function(){if(!g.audio||!g.video||k.mediaelement.loadSwf)return!1;var a=this.options;return a.preferFlash&&!q.swfmini.test()&&(a.preferFlash=!1),!(a.preferFlash&&swfmini.hasFlashPlayerVersion("9.0.115"))},c:[21,19,25,20]}),u.track=!g.texttrackapi,p("track",{options:{positionDisplay:!0,override:u.track},test:function(){return!this.options.override&&!u.track},d:["mediaelement",c],methodNames:["addTextTrack"],c:[21,12,13,22],nM:"texttrackapi"}),t("track-ui",{d:["track",c]})}(),p("feature-dummy",{test:!0,loaded:!0,c:v}),k.$=a,k.M=g,window.webshims=k,d.filter("[data-polyfill-cfg]").each(function(){try{k.setOptions(a(this).data("polyfillCfg"))}catch(b){k.warn("error parsing polyfill cfg: "+b)}}).end().filter("[data-polyfill]").each(function(){k.polyfill(a.trim(a(this).data("polyfill")||""))}),h&&(h.cfg&&k.setOptions(h.cfg),h.lang&&k.activeLang(h.lang),"polyfill"in h&&k.polyfill(h.polyfill)),k});