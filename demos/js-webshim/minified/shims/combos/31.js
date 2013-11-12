webshims.register("dom-extend",function(e,t,n,i,a){"use strict";var r=!("hrefNormalized"in e.support)||e.support.hrefNormalized,o=!("getSetAttribute"in e.support)||e.support.getSetAttribute,s=Object.prototype.hasOwnProperty;if(t.assumeARIA=o||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10+. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),"debug"in t&&t.error('Use webshims.setOptions("debug", true||false||"noCombo"); to debug flag'),!t.cfg.no$Switch){var l=function(){if(!n.jQuery||n.$&&n.jQuery!=n.$||n.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),n.$&&(n.$=t.$),n.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};l(),setTimeout(l,90),t.ready("DOM",l),e(l),t.ready("WINDOWLOAD",l)}var u=t.modules,c=/\s*,\s*/,d={},p={},f={},h={},m={},v={},g=e.fn.val,y=function(t,n,i,a,r){return r?g.call(e(t)):g.call(e(t),i)};e.widget||function(){var t=e.cleanData;e.cleanData=function(n){if(!e.widget)for(var i,a=0;null!=(i=n[a]);a++)try{e(i).triggerHandler("remove")}catch(r){}t(n)}}(),e.fn.val=function(t){var n=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return n&&1===n.nodeType?e.prop(n,"value",t,"val",!0):g.call(this);if(e.isArray(t))return g.apply(this,arguments);var i=e.isFunction(t);return this.each(function(r){if(n=this,1===n.nodeType)if(i){var o=t.call(n,r,e.prop(n,"value",a,"val",!0));null==o&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,n,a,r){return r||(r=i),e(r)[a?"onTrigger":"on"](t,n),this.on("remove",function(i){i.originalEvent||e(r).off(t,n)}),this};var b="_webshimsLib"+Math.round(1e3*Math.random()),w=function(t,n,i){if(t=t.jquery?t[0]:t,!t)return i||{};var r=e.data(t,b);return i!==a&&(r||(r=e.data(t,b,{})),n&&(r[n]=i)),n?r&&r[n]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var n=[];return this.each(function(){var i=w(this,"shadowData"),a=i&&i[t.prop]||this;-1==e.inArray(a,n)&&n.push(a)}),this.pushStack(n)}}),t.cfg.extendNative||t.cfg.noTriggerOverride||function(t){e.event.trigger=function(n,i,a,r){if(!f[n]||r||!a||1!==a.nodeType)return t.apply(this,arguments);var o,l,u,c=a[n],d=e.prop(a,n),p=d&&c!=d;return p&&(u="__ws"+n,l=n in a&&s.call(a,n),a[n]=d,a[u]=c),o=t.apply(this,arguments),p&&(l?a[n]=c:delete a[n],delete a[u]),o}}(e.event.trigger),["removeAttr","prop","attr"].forEach(function(n){d[n]=e[n],e[n]=function(t,i,r,o,s){var l="val"==o,u=l?y:d[n];if(!t||!p[i]||1!==t.nodeType||!l&&o&&"attr"==n&&e.attrFn[i])return u(t,i,r,o,s);var c,f,m,g=(t.nodeName||"").toLowerCase(),b=h[g],w="attr"!=n||r!==!1&&null!==r?n:"removeAttr";if(b||(b=h["*"]),b&&(b=b[i]),b&&(c=b[w]),c){if("value"==i&&(f=c.isVal,c.isVal=l),"removeAttr"===w)return c.value.call(t);if(r===a)return c.get?c.get.call(t):c.value;c.set&&("attr"==n&&r===!0&&(r=i),m=c.set.call(t,r)),"value"==i&&(c.isVal=f)}else m=u(t,i,r,o,s);if((r!==a||"removeAttr"===w)&&v[g]&&v[g][i]){var T;T="removeAttr"==w?!1:"prop"==w?!!r:!0,v[g][i].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==n)||"attr"==e.only&&"prop"!=n)&&e.call(t,r,T,l?"val":w,n)})}return m},m[n]=function(e,i,r){h[e]||(h[e]={}),h[e][i]||(h[e][i]={});var o=h[e][i][n],s=function(e,t,a){var o;return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==n&&"value"==i?function(e){var t=this;return r.isVal?y(t,i,e,!1,0===arguments.length):d[n](t,i,e)}:"prop"==n&&"value"==e&&r.value.apply?(o="__ws"+i,f[i]=!0,function(){var e=this[o]||d[n](this,i);return e&&e.apply&&(e=e.apply(this,arguments)),e}):function(e){return d[n](this,i,e)}};h[e][i][n]=r,r.value===a&&(r.set||(r.set=r.writeable?s("set",r,o):t.cfg.useStrict&&"prop"==i?function(){throw i+" is readonly on "+e}:function(){t.info(i+" is readonly on "+e)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=s(e,o))})}});var T=function(){var e=t.getPrototypeOf(i.createElement("foobar")),n=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(a,r,o){var l,u;if(!(n&&(l=i.createElement(a))&&(u=t.getPrototypeOf(l))&&e!==u)||l[r]&&s.call(l,r))o._supvalue=function(){var e=w(this,"propValue");return e&&e[r]&&e[r].apply?e[r].apply(this,arguments):e&&e[r]},E.extendValue(a,r,o.value);else{var c=l[r];o._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[r]=o.value}o.value._supvalue=o._supvalue}}(),E=function(){var n={};t.addReady(function(i,r){var o={},s=function(t){o[t]||(o[t]=e(i.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(n,function(e,n){return s(e),n&&n.forEach?(n.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+n),a)}),o=null});var r,o=e([]),s=function(t,a){n[t]?n[t].push(a):n[t]=[a],e.isDOMReady&&(r||e(i.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(i.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,n){s(t,function(){var t=e.attr(this,n);null!=t&&e.attr(this,n,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,n,i){s(t,function(){e(this).each(function(){var e=w(this,"propValue",{});e[n]=this[n],this[n]=i})})}}}(),x=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var i=n.prop("id");return i||(t++,i="ID-"+t,n.eq(0).prop("id",i)),i}}(),implement:function(e,n){var i=w(e,"implemented")||w(e,"implemented",{});return i[n]?(t.warn(n+" already implemented for element #"+e.id),!1):(i[n]=!0,!0)},extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:x,data:w,moveToFirstEvent:function(t,n,i){var a,r=(e._data(t,"events")||{})[n];r&&r.length>1&&(a=r.pop(),i||(i="bind"),"bind"==i&&r.delegateCount?r.splice(r.delegateCount,0,a):r.unshift(a)),t=null},addShadowDom:function(){var a,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(n).width(),l=e(n).width();if(l==r&&a==o)return;r=l,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(i).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=i.body,a=i.documentElement;s[t]=function(){return Math.max(n["scroll"+e],a["scroll"+e],n["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&i.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(i).on("updatelayout",this.handler),e(n).on("resize",this.handler),function(){var t,n=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),n.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start(),null==e.support.boxSizing&&e(function(){e.support.boxSizing&&s.handler({type:"boxsizing"})})})},function(n,i,a){if(n&&i){a=a||{},n.jquery&&(n=n[0]),i.jquery&&(i=i[0]);var r=e.data(n,b)||e.data(n,b,{}),o=e.data(i,b)||e.data(i,b,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,b)||e.data(a.shadowFocusElement,b,s)):a.shadowFocusElement=i,e(n).on("remove",function(t){t.originalEvent||setTimeout(function(){e(i).remove()},4)}),r.hasShadow=i,s.nativeElement=o.nativeElement=n,s.shadowData=o.shadowData=r.shadowData={nativeElement:n,shadowElement:i,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){w(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=a.data),a=null}t.docObserve()}}(),propTypes:{standard:function(e){x(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){x(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=i.createElement("a");return t.style.display="none",function(n,i){x(n),n.prop||(n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n,a=this.getAttribute(i);if(null==a)return"";if(t.setAttribute("href",a+""),!r){try{e(t).insertAfter(this),n=t.getAttribute("href",4)}catch(o){n=t.getAttribute("href",4)}e(t).detach()}return n||t.href}})}}(),enumarated:function(e){x(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(n,i){"string"==typeof i&&(i=i.split(c)),i.forEach(function(i){t.defineNodeNamesProperty(n,i,{prop:{set:function(t){e.attr(this,i,t)},get:function(){return e.attr(this,i)||""}}})})},defineNodeNameProperty:function(n,i,a){return p[i]=!0,a.reflect&&(a.propType&&!t.propTypes[a.propType]?t.error("could not finde propType "+a.propType):t.propTypes[a.propType||"standard"](a,i)),["prop","attr","removeAttr"].forEach(function(r){var o=a[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),m[r](n,i,o),"*"!=n&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&T(n,i,o),a[r]=o)}),a.initAttr&&E.content(n,i),a},defineNodeNameProperties:function(e,n,i,a){for(var r in n)!a&&n[r].initAttr&&E.createTmpCache(e),i&&(n[r][i]||(n[r][i]={},["value","set","get"].forEach(function(e){e in n[r]&&(n[r][i][e]=n[r][e],delete n[r][e])}))),n[r]=t.defineNodeNameProperty(e,r,n[r]);return a||E.flushTmpCache(),n},createElement:function(n,i,a){var r;return e.isFunction(i)&&(i={after:i}),E.createTmpCache(n),i.before&&E.createElement(n,i.before),a&&(r=t.defineNodeNameProperties(n,a,!1,!0)),i.after&&E.createElement(n,i.after),E.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,n,i,a){"string"==typeof t&&(t=t.split(c)),e.isFunction(i)&&(i={set:i}),t.forEach(function(e){v[e]||(v[e]={}),"string"==typeof n&&(n=n.split(c)),i.initAttr&&E.createTmpCache(e),n.forEach(function(t){v[e][t]||(v[e][t]=[],p[t]=!0),i.set&&(a&&(i.set.only=a),v[e][t].push(i.set)),i.initAttr&&E.content(e,t)}),E.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,i,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(n,i,{attr:{set:function(e){this.setAttribute(i,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(i);return null==e?a:i}},removeAttr:{value:function(){this.removeAttribute(i),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,n){if(e.nodeName){var i;return n===a?(i=e.attributes[t]||{},n=i.specified?i.value:null,null==n?a:n):("boolean"==typeof n?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n),a)}},activeLang:function(){var n,i,a=[],r={},o=/:\/\/|^\.*\//,s=function(n,i,a){var r;return i&&a&&-1!==e.inArray(i,a.availableLangs||a.availabeLangs||[])?(n.loading=!0,r=a.langSrc,o.test(r)||(r=t.cfg.basePath+r),t.loader.loadScript(r+i+".js",function(){n.langObj[i]?(n.loading=!1,c(n,!0)):e(function(){n.langObj[i]&&c(n,!0),n.loading=!1})}),!0):!1},l=function(e){r[e]&&r[e].forEach(function(e){e.callback(n,i,"")})},c=function(e,t){if(e.activeLang!=n&&e.activeLang!==i){var a=u[e.module].options;e.langObj[n]||i&&e.langObj[i]?(e.activeLang=n,e.callback(e.langObj[n]||e.langObj[i],n),l(e.module)):t||s(e,n,a)||s(e,i,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],n),l(e.module))}},d=function(t){return"string"==typeof t&&t!==n?(n=t,i=n.split("-")[0],n==i&&(i=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback(n,i,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),n};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,i,a,r){"string"==typeof e&&(e=e.split(c));var o={};return e.forEach(function(e){o[e]=t[n](e,i,a,r)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},i=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(a,r){if(e.each(n,function(t,n){for(var o=e(t,a).add(r.filter(t)),s=0,l=o.length;l>s;s++)i(o[s],n)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&i(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||i(u,"contentinfo")}})}}(webshims.$,document),webshims.register("form-core",function(e,t,n,i,a,r){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,i=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),i.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!n.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},Modernizr.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0);var o=function(t){return(e.prop(t,"validity")||{valid:1}).valid},s=function(){var n=["form-validation"];r.lazyCustomMessages&&(r.customMessages=!0,n.push("form-message")),r.customDatalist&&(r.fD=!0,n.push("form-datalist")),r.addValidators&&n.push("form-validators"),t.reTest(n),e(i).off(".lazyloadvalidation")},l=/^(?:form|fieldset)$/i,u=function(t){var n=!1;return e(t).jProp("elements").each(function(){return!l.test(t.nodeName||"")&&(n=e(this).is(":invalid"))?!1:a}),n};e.extend(e.expr[":"],{"valid-element":function(t){return l.test(t.nodeName||"")?!u(t):!(!e.prop(t,"willValidate")||!o(t))},"invalid-element":function(t){return l.test(t.nodeName||"")?u(t):!(!e.prop(t,"willValidate")||o(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]});var c=e.expr[":"].focus;e.expr[":"].focus=function(){try{return c.apply(this,arguments)}catch(e){t.error(e)}return!1},t.triggerInlineForm=function(t,n){e(t).trigger(n)};var d=function(e,n,i){s(),t.ready("form-validation",function(){e[n].apply(e,i)})},p="transitionDelay"in i.documentElement.style?"":" no-transition",f=t.cfg.wspopover;f.position||f.position===!1||(f.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},f,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+p+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){d(this,"show",arguments)}},t.validityAlert={showFor:function(){d(this,"showFor",arguments)}},t.getContentValidationMessage=function(t,n,i){var r=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return i&&r[i]?r=r[i]:r&&(n=n||e.prop(t,"validity")||{valid:1},n.valid&&(r="")),"object"==typeof r&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||(e.each(n,function(e,t){return t&&"valid"!=e&&r[e]?(r=r[e],!1):a}),"object"==typeof r&&(n.typeMismatch&&r.badInput&&(r=r.badInput),n.badInput&&r.typeMismatch&&(r=r.typeMismatch)))),"object"==typeof r&&(r=r.defaultMessage),r||""},e.fn.getErrorMessage=function(n){var i="",a=this[0];return a&&(i=t.getContentValidationMessage(a,!1,n)||e.prop(a,"customValidationMessage")||e.prop(a,"validationMessage")),i},e(i).on("focusin.lazyloadvalidation",function(t){"form"in t.target&&(t.target.list||e(t.target).is(":invalid"))&&s()}),t.ready("WINDOWLOAD",s)}),webshims.register("form-datalist",function(e,t,n,i,a,r){"use strict";var o=function(e){e&&"string"==typeof e||(e="DOM"),o[e+"Loaded"]||(o[e+"Loaded"]=!0,t.ready(e,function(){t.loader.loadList(["form-datalist-lazy"])}))},s={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};t.modules["form-number-date-ui"].loaded&&e.extend(s,{number:1,time:1}),t.propTypes.element=function(n,a){t.createPropDefault(n,"attr"),n.prop||(n.prop={get:function(){var t=e.attr(this,a);return t&&(t=i.getElementById(t),t&&n.propNodeName&&!e.nodeName(t,n.propNodeName)&&(t=null)),t||null},writeable:!1})},function(){var l=e.webshims.cfg.forms,u=Modernizr.input.list;if(!u||l.customDatalist){var c=function(){var n=function(){var t;!e.data(this,"datalistWidgetData")&&(t=e.prop(this,"id"))?e('input[list="'+t+'"], input[data-wslist="'+t+'"]').eq(0).attr("list",t):e(this).triggerHandler("updateDatalist")},i={autocomplete:{attr:{get:function(){var t=this,n=e.data(t,"datalistWidget");return n?n._autocomplete:"autocomplete"in t?t.autocomplete:t.getAttribute("autocomplete")},set:function(t){var n=this,i=e.data(n,"datalistWidget");i?(i._autocomplete=t,"off"==t&&i.hideList()):"autocomplete"in n?n.autocomplete=t:n.setAttribute("autocomplete",t)}}}};u?((e("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||t.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var t=this.options||[];if(!t.length){var n=this,i=e("select",n);i[0]&&i[0].options&&i[0].options.length&&(t=i[0].options)}return t}}}),i.list={attr:{get:function(){var n=t.contentAttr(this,"list");return null!=n?(e.data(this,"datalistListAttr",n),s[e.prop(this,"type")]||s[e.attr(this,"type")]||this.removeAttribute("list")):n=e.data(this,"datalistListAttr"),null==n?a:n},set:function(n){var i=this;e.data(i,"datalistListAttr",n),s[e.prop(this,"type")]||s[e.attr(this,"type")]?i.setAttribute("list",n):(t.objectCreate(d,a,{input:i,id:n,datalist:e.prop(i,"list")}),i.setAttribute("data-wslist",n)),e(i).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):t.defineNodeNameProperties("input",{list:{attr:{get:function(){var e=t.contentAttr(this,"list");return null==e?a:e},set:function(n){var i=this;t.contentAttr(i,"list",n),t.objectCreate(r.shadowListProto,a,{input:i,id:n,datalist:e.prop(i,"list")}),e(i).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}}),t.defineNodeNameProperties("input",i),t.addReady(function(e,t){t.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(n)})},d={_create:function(n){if(!s[e.prop(n.input,"type")]&&!s[e.attr(n.input,"type")]){var i=n.datalist,r=e.data(n.input,"datalistWidget"),l=this;return i&&r&&r.datalist!==i?(r.datalist=i,r.id=n.id,e(r.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",e.proxy(r,"_resetListCached")),r._resetListCached(),a):i?(r&&r.datalist===i||(this.datalist=i,this.id=n.id,this.hasViewableData=!0,this._autocomplete=e.attr(n.input,"autocomplete"),e.data(n.input,"datalistWidget",this),e.data(i,"datalistWidgetData",this),o("WINDOWLOAD"),t.isReady("form-datalist-lazy")?this._lazyCreate(n):(e(n.input).one("focus",o),t.ready("form-datalist-lazy",function(){l._destroyed||l._lazyCreate(n)}))),a):(r&&r.destroy(),a)}},destroy:function(t){var r,o=e.attr(this.input,"autocomplete");e(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),e(i).off(".datalist"+this.id),e(n).off(".datalist"+this.id),this.input.form&&this.input.id&&e(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),o===a?this.input.removeAttribute("autocomplete"):e(this.input).attr("autocomplete",o),t&&"beforeunload"==t.type&&(r=this.input,setTimeout(function(){e.attr(r,"list",e.attr(r,"list"))},9)),this._destroyed=!0}};t.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:e.extend(r,{shadowListProto:d})}),c()}}()});