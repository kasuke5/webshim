(function(a){if(!Modernizr.genericDOM){var c=document,h,k,l=/<([\w:]+)/,u={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||u[(l.exec(a)||["",""])[1].toLowerCase()])return a;if(!k){h=c.body;if(!h)return a;k=c.createElement("div");k.style.display="none"}var o=k.cloneNode(!1);h.appendChild(o);o.innerHTML=a;h.removeChild(o);return o.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,c,h,k,l){var u=c.modules,p=/\s*,\s*/,o={},v={},q={},w={},s={},x=a.fn.val,b=function(g,n,f,d,b){return b?x.call(a(g)):x.call(a(g),f)};a.fn.val=function(g){var n=this[0];arguments.length&&null==g&&(g="");if(!arguments.length)return!n||1!==n.nodeType?x.call(this):a.prop(n,"value",g,"val",!0);if(a.isArray(g))return x.apply(this,arguments);var f=a.isFunction(g);return this.each(function(d){n=this;1===n.nodeType&&(f?(d=g.call(n,d,a.prop(n,"value",l,"val",
!0)),null==d&&(d=""),a.prop(n,"value",d,"val")):a.prop(n,"value",g,"val"))})};var e="_webshimsLib"+Math.round(1E3*Math.random()),i=function(g,n,f){g=g.jquery?g[0]:g;if(!g)return f||{};var d=a.data(g,e);f!==l&&(d||(d=a.data(g,e,{})),n&&(d[n]=f));return n?d&&d[n]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(g){a.fn[g.name]=function(){return this.map(function(){var a=i(this,
"shadowData");return a&&a[g.prop]||this})}});["removeAttr","prop","attr"].forEach(function(g){o[g]=a[g];a[g]=function(d,f,r,j,e){var i="val"==j,c=!i?o[g]:b;if(!d||!v[f]||1!==d.nodeType||!i&&j&&"attr"==g&&a.attrFn[f])return c(d,f,r,j,e);var y=(d.nodeName||"").toLowerCase(),t=q[y],m="attr"==g&&(!1===r||null===r)?"removeAttr":g,h,k,p;t||(t=q["*"]);t&&(t=t[f]);t&&(h=t[m]);if(h){if("value"==f)k=h.isVal,h.isVal=i;if("removeAttr"===m)return h.value.call(d);if(r===l)return h.get?h.get.call(d):h.value;h.set&&
("attr"==g&&!0===r&&(r=f),p=h.set.call(d,r));if("value"==f)h.isVal=k}else p=c(d,f,r,j,e);if((r!==l||"removeAttr"===m)&&s[y]&&s[y][f]){var u;u="removeAttr"==m?!1:"prop"==m?!!r:!0;s[y][f].forEach(function(a){if(!a.only||(a.only="prop"==g)||"attr"==a.only&&"prop"!=g)a.call(d,r,u,i?"val":m,g)})}return p};w[g]=function(d,f,r){q[d]||(q[d]={});q[d][f]||(q[d][f]={});var j=q[d][f][g],e=function(a,d,n){return d&&d[a]?d[a]:n&&n[a]?n[a]:"prop"==g&&"value"==f?function(a){return r.isVal?b(this,f,a,!1,0===arguments.length):
o[g](this,f,a)}:"prop"==g&&"value"==a&&r.value.apply?function(a){var d=o[g](this,f);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return o[g](this,f,a)}};q[d][f][g]=r;if(r.value===l){if(!r.set)r.set=r.writeable?e("set",r,j):c.cfg.useStrict&&"prop"==f?function(){throw f+" is readonly on "+d;}:a.noop;if(!r.get)r.get=e("get",r,j)}["value","get","set"].forEach(function(a){r[a]&&(r["_sup"+a]=e(a,j))})}});var t=!a.browser.msie||8<parseInt(a.browser.version,10),d=function(){var a=c.getPrototypeOf(k.createElement("foobar")),
d=Object.prototype.hasOwnProperty;return function(f,b,e){var m=k.createElement(f),h=c.getPrototypeOf(m);if(t&&h&&a!==h&&(!m[b]||!d.call(m,b))){var s=m[b];e._supvalue=function(){return s&&s.apply?s.apply(this,arguments):s};h[b]=e.value}else e._supvalue=function(){var a=i(this,"propValue");return a&&a[b]&&a[b].apply?a[b].apply(this,arguments):a&&a[b]},j.extendValue(f,b,e.value);e.value._supvalue=e._supvalue}}(),j=function(){var d={};c.addReady(function(f,n){var b={},j=function(d){b[d]||(b[d]=a(f.getElementsByTagName(d)),
n[0]&&a.nodeName(n[0],d)&&(b[d]=b[d].add(n)))};a.each(d,function(a,d){j(a);!d||!d.forEach?c.warn("Error: with "+a+"-property. methods: "+d):d.forEach(function(d){b[a].each(d)})});b=null});var n,f=a([]),b=function(f,b){d[f]?d[f].push(b):d[f]=[b];a.isDOMReady&&(n||a(k.getElementsByTagName(f))).each(b)};return{createTmpCache:function(d){a.isDOMReady&&(n=n||a(k.getElementsByTagName(d)));return n||f},flushTmpCache:function(){n=null},content:function(d,g){b(d,function(){var d=a.attr(this,g);null!=d&&a.attr(this,
g,d)})},createElement:function(a,d){b(a,d)},extendValue:function(d,g,f){b(d,function(){a(this).each(function(){i(this,"propValue",{})[g]=this[g];this[g]=f})})}}}(),m=function(a,d){if(a.defaultValue===l)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[d||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(c,{getID:function(){var d=(new Date).getTime();return function(b){var b=a(b),f=b.attr("id");f||(d++,f="ID-"+d,b.attr("id",f));return f}}(),extendUNDEFProp:function(d,
b){a.each(b,function(a,b){a in d||(d[a]=b)})},createPropDefault:m,data:i,moveToFirstEvent:function(){var d=a._data?"_data":"data";return function(b,f,j){if((b=(a[d](b,"events")||{})[f])&&1<b.length)f=b.pop(),j||(j="bind"),"bind"==j&&b.delegateCount?b.splice(b.delegateCount,0,f):b.unshift(f)}}(),addShadowDom:function(d,b,f){f=f||{};d.jquery&&(d=d[0]);b.jquery&&(b=b[0]);if(!f.shadowFocusElement)f.shadowFocusElement=b;var j=a.data(d,e)||a.data(d,e,{}),t=a.data(b,e)||a.data(b,e,{});j.hasShadow=b;t.nativeElement=
d;t.shadowData=j.shadowData={nativeElement:d,shadowElement:b,shadowFocusElement:f.shadowFocusElement};f.shadowChilds&&f.shadowChilds.each(function(){i(this,"shadowData",t.shadowData)});if(f.data)j.shadowData.data=f.data,t.shadowData.data=f.data;f=null},propTypes:{standard:function(a){m(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,""+d)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){m(a);if(!a.prop)a.prop={set:function(d){d?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(d,b){"string"==typeof b&&(b=b.split(p));b.forEach(function(b){c.defineNodeNamesProperty(d,b,{prop:{set:function(d){a.attr(this,b,d)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(b,e,f){v[e]=!0;if(f.reflect)c.propTypes[f.propType||"standard"](f);["prop","attr","removeAttr"].forEach(function(j){var i=f[j];i&&(i="prop"===j?a.extend({writeable:!0},i):a.extend({},
i,{writeable:!0}),w[j](b,e,i),"*"!=b&&c.cfg.extendNative&&"prop"==j&&i.value&&a.isFunction(i.value)&&d(b,e,i),f[j]=i)});f.initAttr&&j.content(b,e);return f},defineNodeNameProperties:function(a,d,b,e){for(var i in d)!e&&d[i].initAttr&&j.createTmpCache(a),b&&(d[i][b]?c.log("override: "+a+"["+i+"] for "+b):(d[i][b]={},["value","set","get"].forEach(function(a){a in d[i]&&(d[i][b][a]=d[i][a],delete d[i][a])}))),d[i]=c.defineNodeNameProperty(a,i,d[i]);e||j.flushTmpCache();return d},createElement:function(d,
b,f){var e;a.isFunction(b)&&(b={after:b});j.createTmpCache(d);b.before&&j.createElement(d,b.before);f&&(e=c.defineNodeNameProperties(d,f,!1,!0));b.after&&j.createElement(d,b.after);j.flushTmpCache();return e},onNodeNamesPropertyModify:function(d,b,f,e){"string"==typeof d&&(d=d.split(p));a.isFunction(f)&&(f={set:f});d.forEach(function(a){s[a]||(s[a]={});"string"==typeof b&&(b=b.split(p));f.initAttr&&j.createTmpCache(a);b.forEach(function(d){s[a][d]||(s[a][d]=[],v[d]=!0);if(f.set){if(e)f.set.only=e;
s[a][d].push(f.set)}f.initAttr&&j.content(a,d)});j.flushTmpCache()})},defineNodeNamesBooleanProperty:function(d,b,f){f||(f={});if(a.isFunction(f))f.set=f;c.defineNodeNamesProperty(d,b,{attr:{set:function(a){this.setAttribute(b,a);f.set&&f.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?l:b}},removeAttr:{value:function(){this.removeAttribute(b);f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(a,d,b){if(a.nodeName){if(b===
l)return b=(a.attributes[d]||{}).value,null==b?l:b;"boolean"==typeof b?b?a.setAttribute(d,d):a.removeAttribute(d):a.setAttribute(d,b)}},activeLang:function(){var d=[],b={},f,j,e=/:\/\/|^\.*\//,i=function(d,b,f){return b&&f&&-1!==a.inArray(b,f.availabeLangs||[])?(d.loading=!0,f=f.langSrc,e.test(f)||(f=c.cfg.basePath+f),c.loader.loadScript(f+b+".js",function(){d.langObj[b]?(d.loading=!1,m(d,!0)):a(function(){d.langObj[b]&&m(d,!0);d.loading=!1})}),!0):!1},t=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},
m=function(a,d){if(a.activeLang!=f&&a.activeLang!==j){var b=u[a.module].options;if(a.langObj[f]||j&&a.langObj[j])a.activeLang=f,a.callback(a.langObj[f]||a.langObj[j],f),t(a.module);else if(!d&&!i(a,f,b)&&!i(a,j,b)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],f),t(a.module)}};return function(e){if("string"==typeof e&&e!==f)f=e,j=f.split("-")[0],f==j&&(j=!1),a.each(d,function(a,d){m(d)});else if("object"==typeof e)if(e.register)b[e.register]||(b[e.register]=[]),b[e.register].push(e),
e.callback();else{if(!e.activeLang)e.activeLang="";d.push(e);m(e)}return f}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,d){c[a]=function(a,b,e,j){"string"==typeof a&&(a=a.split(p));var g={};a.forEach(function(a){g[a]=c[d](a,b,e,j)});return g}});c.isReady("webshimLocalization",!0)});
(function(a,c){var h=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<h)&&(!a.browser.msie||12>h&&7<h)){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},l=function(a,c){a.getAttribute("role")||a.setAttribute("role",c)};a.webshims.addReady(function(h,p){a.each(k,function(c,s){for(var k=a(c,h).add(p.filter(c)),b=0,e=k.length;b<e;b++)l(k[b],s)});if(h===c){var o=c.getElementsByTagName("header")[0],v=c.getElementsByTagName("footer"),q=v.length;
o&&!a(o).closest("section, article")[0]&&l(o,"banner");q&&(o=v[q-1],a(o).closest("section, article")[0]||l(o,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,c,h,k,l){c.propTypes.element=function(h){c.createPropDefault(h,"attr");if(!h.prop)h.prop={get:function(){var c=h.attr.get.call(this);c&&(c=a("#"+c)[0])&&h.propNodeName&&!a.nodeName(c,h.propNodeName)&&(c=null);return c||null},writeable:!1}};(function(){var u=a.webshims.cfg.forms,p=Modernizr.input.list;if(!p||u.customDatalist){var o=0,v={submit:1,button:1,reset:1,hidden:1,range:1,date:1},q=a.browser.msie&&7>parseInt(a.browser.version,10),w={},s=function(a){if(!a)return[];
if(w[a])return w[a];var e;try{e=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(i){}w[a]=e||[];return e||[]},x={_create:function(b){if(!v[a.prop(b.input,"type")]){var e=b.datalist,i=a.data(b.input,"datalistWidget");if(e&&i&&i.datalist!==e)i.datalist=e,i.id=b.id,i.shadowList.prop("className","datalist-polyfill "+(i.datalist.className||"")+" "+i.datalist.id+"-shadowdom"),u.positionDatalist?i.shadowList.insertAfter(b.input):i.shadowList.appendTo("body"),a(i.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",
a.proxy(i,"_resetListCached")),i._resetListCached();else if(e){if(!(i&&i.datalist===e)){o++;var c=this;this.hideList=a.proxy(c,"hideList");this.timedHide=function(){clearTimeout(c.hideTimer);c.hideTimer=setTimeout(c.hideList,9)};this.datalist=e;this.id=b.id;this.hasViewableData=!0;this._autocomplete=a.attr(b.input,"autocomplete");a.data(b.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill '+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');u.positionDatalist?
this.shadowList.insertAfter(b.input):this.shadowList.appendTo("body");this.index=-1;this.input=b.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(d){var e=a("li:not(.hidden-item)",c.shadowList),i="mousedown"==d.type||"click"==d.type;c.markItem(e.index(d.currentTarget),i,e);"click"==d.type&&(c.hideList(),a(b.input).trigger("datalistselect"));return"mousedown"!=d.type}).bind("focusout",this.timedHide);b.input.setAttribute("autocomplete",
"off");a(b.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!c.triggeredByDatalist)c.changedValue=!1,c.showHideOptions()}).bind("keydown.datalistWidget",function(d){var e=d.keyCode,i;if(40==e&&!c.showList())return c.markItem(c.index+1,!0),!1;if(c.isListVisible){if(38==e)return c.markItem(c.index-1,!0),!1;if(!d.shiftKey&&(33==e||36==e))return c.markItem(0,!0),!1;if(!d.shiftKey&&(34==e||35==e))return d=a("li:not(.hidden-item)",c.shadowList),c.markItem(d.length-1,!0,d),
!1;if(13==e||27==e)return 13==e&&(i=a("li.active-item:not(.hidden-item)",c.shadowList),c.changeValue(a("li.active-item:not(.hidden-item)",c.shadowList))),c.hideList(),i&&i[0]&&a(b.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&c.showList()}).bind("mousedown.datalistWidget",function(){a(this).is(":focus")&&c.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",
a.proxy(this,"_resetListCached"));this._resetListCached();b.input.form&&(b.input.name||b.input.id)&&a(b.input.form).bind("submit.datalistWidget"+b.input.id,function(){if(!a(b.input).hasClass("no-datalist-cache")){var d=a.prop(b.input,"value"),e=(b.input.name||b.input.id)+a.prop(b.input,"type");if(!c.storedOptions)c.storedOptions=s(e);if(d&&-1==c.storedOptions.indexOf(d)&&(c.storedOptions.push(d),d=c.storedOptions,e)){d=d||[];try{localStorage.setItem("storedDatalistOptions"+e,JSON.stringify(d))}catch(i){}}}});
a(h).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){c.destroy()})}}else i&&i.destroy()}},destroy:function(){var b=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(k).unbind(".datalist"+this.id);a(h).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");b===l?this.input.removeAttribute("autocomplete"):
a(this.input).attr("autocomplete",b)},_resetListCached:function(a){var e=this,i;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(h.QUnit||(i=a&&k.activeElement==e.input)?e.updateListOptions(i):c.ready("WINDOWLOAD",function(){e.updateTimer=setTimeout(function(){e.updateListOptions();e=null;o=1},200+100*o)}))},updateListOptions:function(b){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.curCSS(this.input,
"fontSize"),fontFamily:a.curCSS(this.input,"fontFamily")});this.searchStart=a(this.input).hasClass("search-start");var e=[],i=[],c=[],d,j,m,g;for(j=a.prop(this.datalist,"options"),m=0,g=j.length;m<g;m++){d=j[m];if(d.disabled)return;d={value:a(d).val()||"",text:a.trim(a.attr(d,"label")||d.textContent||d.innerText||a.text([d])||""),className:d.className||"",style:a.attr(d,"style")||""};d.text?d.text!=d.value&&(d.className+=" different-label-value"):d.text=d.value;i[m]=d.value;c[m]=d}if(!this.storedOptions)this.storedOptions=
a(this.input).hasClass("no-datalist-cache")?[]:s((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==i.indexOf(a)&&c.push({value:a,text:a,className:"stored-suggest",style:""})});for(m=0,g=c.length;m<g;m++)j=c[m],e[m]='<li class="'+j.className+'" style="'+j.style+'" tabindex="-1" role="listitem"><span class="option-label">'+j.text+'</span> <span class="option-value">'+j.value+"</span></li>";this.arrayOptions=c;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+
e.join("\n")+"</ul></div></div>");a.fn.bgIframe&&q&&this.shadowList.bgIframe();(b||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(b){var e=a.prop(this.input,"value").toLowerCase();if(!(e===this.lastUpdatedValue||this.lastUnfoundValue&&0===e.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=e;var c=!1,h=this.searchStart,d=a("li",this.shadowList);e?this.arrayOptions.forEach(function(b,m){var g;if(!("lowerText"in b))b.lowerText=b.text!=b.value?b.text.toLowerCase()+b.value.toLowerCase():
b.text.toLowerCase();g=b.lowerText.indexOf(e);(g=h?!g:-1!==g)?(a(d[m]).removeClass("hidden-item"),c=!0):a(d[m]).addClass("hidden-item")}):d.length&&(d.removeClass("hidden-item"),c=!0);this.hasViewableData=c;!b&&c&&this.showList();if(!c)this.lastUnfoundValue=e,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var b=u.positionDatalist?a(this.input).position():c.getRelOffset(this.shadowList,this.input);b.top+=a(this.input).outerHeight();
b.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(b);return b},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var b=this,e;b.setPos();b.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");
a(k).unbind(".datalist"+b.id).bind("mousedown.datalist"+b.id+" focusin.datalist"+b.id,function(e){e.target===b.input||b.shadowList[0]===e.target||a.contains(b.shadowList[0],e.target)?(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},9)):b.timedHide()});a(h).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){clearTimeout(e);e=setTimeout(function(){b.setPos()},9)});clearTimeout(e);return!0},hideList:function(){if(!this.isListVisible)return!1;
var b=this,e=function(){b.changedValue&&a(b.input).trigger("change");b.changedValue=!1};b.shadowList.removeClass("datalist-visible list-item-active");b.index=-1;b.isListVisible=!1;if(b.changedValue){b.triggeredByDatalist=!0;c.triggerInlineForm&&c.triggerInlineForm(b.input,"input");if(a(b.input).is(":focus"))a(b.input).one("blur",e);else e();b.triggeredByDatalist=!1}a(k).unbind(".datalist"+b.id);a(h).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+
b.id,function(){b.shadowList.css({top:0,left:0});a(h).unbind(".datalist"+b.id)});return!0},scrollIntoView:function(b){var e=a("ul",this.shadowList),c=a("div.datalist-box",this.shadowList),h=b.position();h.top-=(parseInt(e.css("paddingTop"),10)||0)+(parseInt(e.css("marginTop"),10)||0)+(parseInt(e.css("borderTopWidth"),10)||0);0>h.top?c.scrollTop(c.scrollTop()+h.top-2):(h.top+=b.outerHeight(),b=c.height(),h.top>b&&c.scrollTop(c.scrollTop()+(h.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",
b).text(),e=a.prop(this.input,"value");if(b!=e)a(this.input).prop("value",b).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(b,e,c){c=c||a("li:not(.hidden-item)",this.shadowList);if(c.length)0>b?b=c.length-1:b>=c.length&&(b=0),c.removeClass("active-item"),this.shadowList.addClass("list-item-active"),c=c.filter(":eq("+b+")").addClass("active-item"),e&&(this.changeValue(c),this.scrollIntoView(c)),this.index=b}};(function(){p||c.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,
get:function(){var b=a("select",this);b[0]?b=b[0].options:(b=a("option",this).get(),b.length&&c.warn("you should wrap you option-elements for a datalist in a select element to support IE and other old browsers."));return b}}});var b={autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var c=a.data(this,"datalistWidget");c?(c._autocomplete=b,"off"==b&&c.hideList()):
"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}}};if(!p||!1 in a("<input />")[0])b.selectedOption={prop:{writeable:!1,get:function(){var b=a.prop(this,"list"),c=null,h;if(!b)return c;h=a.attr(this,"value");if(!h)return c;b=a.prop(b,"options");if(!b.length)return c;a.each(b,function(d,b){if(h==a.prop(b,"value"))return c=b,!1});return c}}};b.list=p?{attr:{get:function(){var b=c.contentAttr(this,"list");null!=b?this.removeAttribute("list"):b=a.data(this,"datalistListAttr");
return null==b?l:b},set:function(b){a.data(this,"datalistListAttr",b);c.objectCreate(x,l,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}:{attr:{get:function(){var a=c.contentAttr(this,"list");return null==a?l:a},set:function(b){c.contentAttr(this,"list",b);c.objectCreate(x,l,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};c.defineNodeNameProperties("input",b);if(a.event.customEvent)a.event.customEvent.updateDatalist=
!0,a.event.customEvent.updateInput=!0,a.event.customEvent.datalistselect=!0;c.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
(function(a){var c=window.Modernizr,h=a.webshims,k=h.bugs,l=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),u=function(){if(l[0].querySelector)try{k.findRequired=!l[0].querySelector("select:required")}catch(a){k.findRequired=!1}};k.findRequired=!1;k.validationMessage=!1;k.valueAsNumberSet=!1;h.capturingEventPrevented=function(c){if(!c._isPolyfilled){var h=c.isDefaultPrevented,
b=c.preventDefault;c.preventDefault=function(){clearTimeout(a.data(c.target,c.type+"DefaultPrevented"));a.data(c.target,c.type+"DefaultPrevented",setTimeout(function(){a.removeData(c.target,c.type+"DefaultPrevented")},30));return b.apply(this,arguments)};c.isDefaultPrevented=function(){return!(!h.apply(this,arguments)&&!a.data(c.target,c.type+"DefaultPrevented"))};c._isPolyfilled=!0}};if(!c.formvalidation||k.bustedValidity)u();else if(h.capturingEvents(["input"]),h.capturingEvents(["invalid"],!0),
c.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var p=a("input",l).eq(0),o,v=function(a){h.loader.loadList(["dom-extend"]);h.ready("dom-extend",a)},q=function(k){var q=["form-extend","form-message","form-native-fix"];k&&(k.preventDefault(),k.stopImmediatePropagation());clearTimeout(o);setTimeout(function(){l&&(l.remove(),l=p=null)},9);if(!c.bugfreeformvalidation)h.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),h.modules["form-extend"].test=a.noop;h.isReady("form-number-date-api")&&
q.push("form-number-date-api");h.reTest(q);if(p)try{p.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&v(function(){h.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(b){!b&&this&&a.prop(this,"value",a.prop(this,"value"))}});h.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(b){if(!b&&this)b=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(b)}})})}catch(b){}(a.browser.opera||window.testGoodWithFix)&&
v(function(){var b=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(c){var k=h.defineNodeNameProperty(c,"checkValidity",{prop:{value:function(){h.fromSubmit||a(this).bind("invalid.checkvalidity",b);h.fromCheckValidity=!0;var d=k.prop._supvalue.apply(this,arguments);h.fromSubmit||a(this).unbind("invalid.checkvalidity",b);h.fromCheckValidity=!1;return d}}})});c.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
h.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}})})};l.appendTo("head");if(window.opera||window.testGoodWithFix){u();k.validationMessage=!p.prop("validationMessage");if((c.inputtypes||{}).date){try{p.prop("valueAsNumber",0)}catch(w){}k.valueAsNumberSet="1970-01-01"!=p.prop("value")}p.prop("value","")}l.bind("submit",function(a){c.bugfreeformvalidation=
!1;q(a)});o=setTimeout(function(){l&&l.triggerHandler("submit")},9);a("input, select",l).bind("invalid",q).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(a,c,h,k,l,u){var p={radio:1},o={checkbox:1,radio:1},v=a([]),q=c.bugs,w=function(d){var d=a(d),b,c;b=v;if(p[d[0].type])c=d.prop("form"),b=(b=d[0].name)?c?a(c[b]):a(k.getElementsByName(b)).filter(function(){return!a.prop(this,"form")}):d,b=b.filter('[type="radio"]');return b},s=c.getContentValidationMessage=function(b,c,e){var g=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";e&&g[e]&&(g=g[e]);"object"==typeof g&&(c=c||a.prop(b,"validity")||
{valid:1},c.valid||a.each(c,function(a,b){if(b&&"valid"!=a&&g[a])return g=g[a],!1}));if("object"==typeof g)g=g.defaultMessage;return g||""},x={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,
"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!x[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!x[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=a.expr.filters[b+"-element"]});a.expr.filters.focus=function(a){try{var b=
a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())}catch(c){}return!1};var b=a.event.customEvent||{};console.log("das");(q.bustedValidity||q.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var b=a.find,c=a.find.matchesSelector;console.log("das2");var e=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,g=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,c=function(c){var f=arguments,f=a.call(f,
1,f.length);f.unshift(c.replace(e,g));return b.apply(this,f)},j;for(j in b)b.hasOwnProperty(j)&&(c[j]=b[j]);return c}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",k.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(e,g);return c.call(this,a,b)}}();var e=a.prop,i={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,h){var g=e.apply(this,arguments);if(b&&"form"in b&&i[c]&&h!==l&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),
"checked"==c&&h&&w(b).not(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return g};var t=function(b,c){var e;a.each(b,function(b,d){if(d)return e="customError"==b?a.prop(c,"validationMessage"):b,!1});return e};a(k).bind(u.validityUIEvents||"focusout change refreshvalidityui",function(b){if(b.target&&"submit"!=b.target.type&&a.prop(b.target,"willValidate")){var c=a.data(b.target,"webshimsswitchvalidityclass"),e=function(){var c=a(b.target).getNativeElement().trigger("refreshCustomValidityRules")[0],
e=a.prop(c,"validity"),f=a(c).getShadowElement(),j,h,i,k;e.valid?f.hasClass("form-ui-valid")||(j="form-ui-valid",h="form-ui-invalid",k="changedvaliditystate",i="changedvalid",o[c.type]&&c.checked&&w(c).not(c).removeClass(h).addClass(j).removeAttr("aria-invalid"),a.removeData(c,"webshimsinvalidcause")):(e=t(e,c),a.data(c,"webshimsinvalidcause")!=e&&(a.data(c,"webshimsinvalidcause",e),k="changedvaliditystate"),f.hasClass("form-ui-invalid")||(j="form-ui-invalid",h="form-ui-valid",o[c.type]&&!c.checked&&
w(c).not(c).removeClass(h).addClass(j),i="changedinvalid"));j&&(f.addClass(j).removeClass(h),setTimeout(function(){a(c).trigger(i)},0));k&&setTimeout(function(){a(c).trigger(k)},0);a.removeData(b.target,"webshimsswitchvalidityclass")};c&&clearTimeout(c);"refreshvalidityui"==b.type?e():a.data(b.target,"webshimsswitchvalidityclass",setTimeout(e,9))}});b.changedvaliditystate=!0;b.refreshCustomValidityRules=!0;b.changedvalid=!0;b.changedinvalid=!0;b.refreshvalidityui=!0;c.triggerInlineForm=function(b,
c){a(b).trigger(c)};c.modules["form-core"].getGroupElements=w;q=function(){c.scrollRoot=a.browser.webkit||"BackCompat"==k.compatMode?a(k.body):a(k.documentElement)};q();c.ready("DOM",q);c.getRelOffset=function(b,c){var b=a(b),e=a(c).offset(),g;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){g=b.offset()});e.top-=g.top;e.left-=g.left;return e};c.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",e,i=!1,g=!1,n,f={hideDelay:5E3,
showFor:function(b,d,c,k){f._create();var b=a(b),l=a(b).getShadowElement(),o=f.getOffsetFromBody(l);f.clear();k?this.hide():(this.getMessage(b,d),this.position(l,o),e.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(i=setTimeout(n,this.hideDelay)),a(h).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(g);g=setTimeout(function(){f.position(l)},9)}));c||this.setFocus(l,o)},getOffsetFromBody:function(a){return c.getRelOffset(e,
a)},setFocus:function(f,g){var h=a(f).getShadowFocusElement(),i=c.scrollRoot.scrollTop(),l=(g||h.offset()).top-30,m;c.getID&&"label"==b&&e.attr("for",c.getID(h));i>l&&(c.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(i-l)),80)}),m=!0);try{h[0].focus()}catch(o){}m&&(c.scrollRoot.scrollTop(i),setTimeout(function(){c.scrollRoot.scrollTop(i)},0));setTimeout(function(){a(k).bind("focusout.validityalert",n)},10)},getMessage:function(b,d){d||(d=s(b[0])||b.prop("validationMessage"));
d?a("span.va-box",e).text(d):this.hide()},position:function(b,d){d=d?a.extend({},d):f.getOffsetFromBody(b);d.top+=b.outerHeight();e.css(d)},show:function(){"none"===e.css("display")&&e.css({opacity:0}).show();e.addClass("va-visible").fadeTo(400,1)},hide:function(){e.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(i);a(k).unbind(".validityalert");a(h).unbind(".validityalert");e.stop().removeAttr("for")},_create:function(){if(!e)e=f.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
b+">").css({position:"absolute",display:"none"}),c.ready("DOM",function(){e.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&e.bgIframe()})}};n=a.proxy(f,"hide");return f}();(function(){var b,c=[],e;a(k).bind("invalid",function(g){if(!g.wrongWebkitInvalid){var h=a(g.target),f=h.getShadowElement();f.hasClass("form-ui-invalid")||(f.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(g.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=g.isDefaultPrevented,f=a.Event("firstinvalidsystem"),a(k).triggerHandler(f,{element:g.target,form:g.target.form,isInvalidUIPrevented:g.isDefaultPrevented}),h.trigger(b);b&&b.isDefaultPrevented()&&g.preventDefault();c.push(g.target);g.extraData="fix";clearTimeout(e);e=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(g.target).trigger(e,e)},9);f=h=null}})})();a.fn.getErrorMessage=function(){var b="",
c=this[0];c&&(b=s(c)||a.prop(c,"customValidationMessage")||a.prop(c,"validationMessage"));return b};u.replaceValidationUI&&c.ready("DOM",function(){a(k).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
