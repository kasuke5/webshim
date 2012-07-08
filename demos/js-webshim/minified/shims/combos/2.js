(function(a){var b=window.Modernizr,l=a.webshims,i=l.bugs,p=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),f=function(){if(p[0].querySelector)try{i.findRequired=!p[0].querySelector("select:required")}catch(a){i.findRequired=!1}};i.findRequired=!1;i.validationMessage=!1;i.valueAsNumberSet=!1;l.capturingEventPrevented=function(b){if(!b._isPolyfilled){var d=b.isDefaultPrevented,
s=b.preventDefault;b.preventDefault=function(){clearTimeout(a.data(b.target,b.type+"DefaultPrevented"));a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30));return s.apply(this,arguments)};b.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))};b._isPolyfilled=!0}};if(!b.formvalidation||i.bustedValidity)f();else if(l.capturingEvents(["input"]),l.capturingEvents(["invalid"],!0),
b.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var d=a("input",p).eq(0),g,s=function(a){l.loader.loadList(["dom-extend"]);l.ready("dom-extend",a)},u=function(f){var j=["form-extend","form-message","form-native-fix"];f&&(f.preventDefault(),f.stopImmediatePropagation());clearTimeout(g);setTimeout(function(){p&&(p.remove(),p=d=null)},9);if(!b.bugfreeformvalidation)l.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),l.modules["form-extend"].test=a.noop;l.isReady("form-number-date-api")&&
j.push("form-number-date-api");l.reTest(j);if(d)try{d.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&s(function(){l.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(b){!b&&this&&a.prop(this,"value",a.prop(this,"value"))}});l.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(b){if(!b&&this)b=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(b)}})})}catch(i){}(a.browser.opera||window.testGoodWithFix)&&
s(function(){var d=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(c){var b=l.defineNodeNameProperty(c,"checkValidity",{prop:{value:function(){l.fromSubmit||a(this).bind("invalid.checkvalidity",d);l.fromCheckValidity=!0;var h=b.prop._supvalue.apply(this,arguments);l.fromSubmit||a(this).unbind("invalid.checkvalidity",d);l.fromCheckValidity=!1;return h}}})});b.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
l.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c=this.options||[];if(!c.length){var b=a("select",this);if(b[0]&&b[0].options&&b[0].options.length)c=b[0].options}return c}}})})};p.appendTo("head");if(window.opera||window.testGoodWithFix){f();i.validationMessage=!d.prop("validationMessage");if((b.inputtypes||{}).date){try{d.prop("valueAsNumber",0)}catch(x){}i.valueAsNumberSet="1970-01-01"!=d.prop("value")}d.prop("value","")}p.bind("submit",function(a){b.bugfreeformvalidation=
!1;u(a)});g=setTimeout(function(){p&&p.triggerHandler("submit")},9);a("input, select",p).bind("invalid",u).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(a,b,l,i,p,f){var d={radio:1},g={checkbox:1,radio:1},s=a([]),u=b.bugs,x=function(h){var h=a(h),c,b;c=s;if(d[h[0].type])b=h.prop("form"),c=(c=h[0].name)?b?a(b[c]):a(i.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):h,c=c.filter('[type="radio"]');return c},q=b.getContentValidationMessage=function(h,c,b){var n=a(h).data("errormessage")||h.getAttribute("x-moz-errormessage")||"";b&&n[b]&&(n=n[b]);"object"==typeof n&&(c=c||a.prop(h,"validity")||
{valid:1},c.valid||a.each(c,function(a,c){if(c&&"valid"!=a&&n[a])return n=n[a],!1}));if("object"==typeof n)n=n.defaultMessage;return n||""},j={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(c){return!(!a.prop(c,"willValidate")||!(a.prop(c,"validity")||{valid:1}).valid)},"invalid-element":function(c){return!(!a.prop(c,"willValidate")||(a.prop(c,"validity")||{valid:1}).valid)},"required-element":function(c){return!(!a.prop(c,"willValidate")||!a.prop(c,"required"))},"optional-element":function(c){return!!(a.prop(c,
"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!j[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!j[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(c){a.expr.filters[c]=a.expr.filters[c+"-element"]});a.expr.filters.focus=function(a){try{var c=
a.ownerDocument;return a===c.activeElement&&(!c.hasFocus||c.hasFocus())}catch(b){}return!1};var v=a.event.customEvent||{};console.log("das");(u.bustedValidity||u.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var c=a.find,b=a.find.matchesSelector;console.log("das2");var k=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,n=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var o=arguments,o=a.call(o,
1,o.length);o.unshift(b.replace(k,n));return c.apply(this,o)},o;for(o in c)c.hasOwnProperty(o)&&(b[o]=c[o]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",i.documentElement))a.find.matchesSelector=function(a,c){c=c.replace(k,n);return b.call(this,a,c)}}();var r=a.prop,c={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,k,d){var n=r.apply(this,arguments);if(b&&"form"in b&&c[k]&&d!==p&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),
"checked"==k&&d&&x(b).not(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return n};var k=function(c,b){var k;a.each(c,function(c,h){if(h)return k="customError"==c?a.prop(b,"validationMessage"):c,!1});return k};a(i).bind(f.validityUIEvents||"focusout change refreshvalidityui",function(c){if(c.target&&"submit"!=c.target.type&&a.prop(c.target,"willValidate")){var b=a.data(c.target,"webshimsswitchvalidityclass"),d=function(){var b=a(c.target).getNativeElement().trigger("refreshCustomValidityRules")[0],
d=a.prop(b,"validity"),m=a(b).getShadowElement(),o,t,w,y;d.valid?m.hasClass("form-ui-valid")||(o="form-ui-valid",t="form-ui-invalid",y="changedvaliditystate",w="changedvalid",g[b.type]&&b.checked&&x(b).not(b).removeClass(t).addClass(o).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(d=k(d,b),a.data(b,"webshimsinvalidcause")!=d&&(a.data(b,"webshimsinvalidcause",d),y="changedvaliditystate"),m.hasClass("form-ui-invalid")||(o="form-ui-invalid",t="form-ui-valid",g[b.type]&&!b.checked&&
x(b).not(b).removeClass(t).addClass(o),w="changedinvalid"));o&&(m.addClass(o).removeClass(t),setTimeout(function(){a(b).trigger(w)},0));y&&setTimeout(function(){a(b).trigger(y)},0);a.removeData(c.target,"webshimsswitchvalidityclass")};b&&clearTimeout(b);"refreshvalidityui"==c.type?d():a.data(c.target,"webshimsswitchvalidityclass",setTimeout(d,9))}});v.changedvaliditystate=!0;v.refreshCustomValidityRules=!0;v.changedvalid=!0;v.changedinvalid=!0;v.refreshvalidityui=!0;b.triggerInlineForm=function(c,
b){a(c).trigger(b)};b.modules["form-core"].getGroupElements=x;u=function(){b.scrollRoot=a.browser.webkit||"BackCompat"==i.compatMode?a(i.body):a(i.documentElement)};u();b.ready("DOM",u);b.getRelOffset=function(c,b){var c=a(c),k=a(b).offset(),d;a.swap(a(c)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){d=c.offset()});k.top-=d.top;k.left-=d.left;return k};b.validityAlert=function(){var c=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",k,d=!1,n=!1,s,m={hideDelay:5E3,
showFor:function(c,b,h,f){m._create();var c=a(c),j=a(c).getShadowElement(),z=m.getOffsetFromBody(j);m.clear();f?this.hide():(this.getMessage(c,b),this.position(j,z),k.css({fontSize:c.css("fontSize"),fontFamily:c.css("fontFamily")}),this.show(),this.hideDelay&&(d=setTimeout(s,this.hideDelay)),a(l).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(n);n=setTimeout(function(){m.position(j)},9)}));h||this.setFocus(j,z)},getOffsetFromBody:function(a){return b.getRelOffset(k,
a)},setFocus:function(o,t){var d=a(o).getShadowFocusElement(),m=b.scrollRoot.scrollTop(),n=(t||d.offset()).top-30,f;b.getID&&"label"==c&&k.attr("for",b.getID(d));m>n&&(b.scrollRoot.animate({scrollTop:n-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(m-n)),80)}),f=!0);try{d[0].focus()}catch(j){}f&&(b.scrollRoot.scrollTop(m),setTimeout(function(){b.scrollRoot.scrollTop(m)},0));setTimeout(function(){a(i).bind("focusout.validityalert",s)},10)},getMessage:function(c,b){b||(b=q(c[0])||c.prop("validationMessage"));
b?a("span.va-box",k).text(b):this.hide()},position:function(c,b){b=b?a.extend({},b):m.getOffsetFromBody(c);b.top+=c.outerHeight();k.css(b)},show:function(){"none"===k.css("display")&&k.css({opacity:0}).show();k.addClass("va-visible").fadeTo(400,1)},hide:function(){k.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(i).unbind(".validityalert");a(l).unbind(".validityalert");k.stop().removeAttr("for")},_create:function(){if(!k)k=m.errorBubble=a("<"+c+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
c+">").css({position:"absolute",display:"none"}),b.ready("DOM",function(){k.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&k.bgIframe()})}};s=a.proxy(m,"hide");return m}();(function(){var c,b=[],k;a(i).bind("invalid",function(d){if(!d.wrongWebkitInvalid){var f=a(d.target),m=f.getShadowElement();m.hasClass("form-ui-invalid")||(m.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(d.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!c)c=a.Event("firstinvalid"),c.isInvalidUIPrevented=d.isDefaultPrevented,m=a.Event("firstinvalidsystem"),a(i).triggerHandler(m,{element:d.target,form:d.target.form,isInvalidUIPrevented:d.isDefaultPrevented}),f.trigger(c);c&&c.isDefaultPrevented()&&d.preventDefault();b.push(d.target);d.extraData="fix";clearTimeout(k);k=setTimeout(function(){var k={type:"lastinvalid",cancelable:!1,invalidlist:a(b)};c=!1;b=[];a(d.target).trigger(k,k)},9);m=f=null}})})();a.fn.getErrorMessage=function(){var c="",
b=this[0];b&&(c=q(b)||a.prop(b,"customValidationMessage")||a.prop(b,"validationMessage"));return c};f.replaceValidationUI&&b.ready("DOM",function(){a(i).bind("firstinvalid",function(c){c.isInvalidUIPrevented()||(c.preventDefault(),a.webshims.validityAlert.showFor(c.target,a(c.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,b,l,i,p,f){var d=b.validityMessages,l=f.overrideMessages||f.customMessages?["customValidationMessage"]:[];d.en=d.en||d["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]=
"Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=d.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var g=
d[""];b.createValidationMessage=function(b,d){var f=g[d];f&&"string"!==typeof f&&(f=f[a.prop(b,"type")]||f[(b.nodeName||"").toLowerCase()]||f.defaultMessage);f&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==f.indexOf("{%"+d)){var j=("label"==d?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,d))||"";f=f.replace("{%"+d+"}",j);"value"==d&&(f=f.replace("{%valueLen}",j.length))}});return f||""};(b.bugs.validationMessage||!Modernizr.formvalidation||
b.bugs.bustedValidity)&&l.push("validationMessage");b.activeLang({langObj:d,module:"form-core",callback:function(a){g=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}});l.forEach(function(d){b.defineNodeNamesProperty(["fieldset",
"output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(f){var i=b.defineNodeNameProperty(f,d,{prop:{get:function(){var d=this,f="";if(!a.prop(d,"willValidate"))return f;var g=a.prop(d,"validity")||{valid:1};if(g.valid||(f=b.getContentValidationMessage(d,g)))return f;if(g.customError&&d.nodeName&&(f=Modernizr.formvalidation&&!b.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(d):b.data(d,"customvalidationMessage")))return f;a.each(g,function(a,c){if("valid"!=
a&&c&&(f=b.createValidationMessage(d,a)))return!1});return f||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,b,l,i){b.inputTypes=b.inputTypes||{};var p=b.cfg.forms,f,d=b.inputTypes,g={radio:1,checkbox:1};b.addInputType=function(a,b){d[a]=b};var s={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},u={valueMissing:function(c,d,h){if(!c.prop("required"))return!1;var f=!1;if(!("type"in h))h.type=(c[0].getAttribute("type")||
c[0].type||"").toLowerCase();if("select"==h.nodeName){if(d=!d)if(!(d=0>c[0].selectedIndex))c=c[0],d="select-one"==c.type&&2>c.size?!!a("> option:first-child",c).prop("selected"):!1;c=d}else c=g[h.type]?"checkbox"==h.type?!c.is(":checked"):!b.modules["form-core"].getGroupElements(c).filter(":checked")[0]:!d;return c},tooLong:function(){return!1},typeMismatch:function(a,b,h){if(""===b||"select"==h.nodeName)return!1;var f=!1;if(!("type"in h))h.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
if(d[h.type]&&d[h.type].mismatch)f=d[h.type].mismatch(b,a);else if("validity"in a[0])f=a[0].validity.typeMismatch;return f},patternMismatch:function(a,d,h){if(""===d||"select"==h.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(f){b.error('invalid pattern value: "'+a+'" | '+f),a=!1}return!a?!1:!a.test(d)}};b.addValidityRule=function(a,b){u[a]=b};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var c=
this.form||this;if(!a.data(c,"invalidEventShim")&&(a(c).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),b.moveToFirstEvent(c,"submit"),b.bugs.bustedValidity&&a.nodeName(c,"form"))){var d=c.getAttribute("novalidate");c.setAttribute("novalidate","novalidate");b.data(c,"bustedNoValidate",null==d?null:d)}},teardown:a.noop,handler:function(c){if(!("submit"!=c.type||c.testedValidity||!c.originalEvent||!a.nodeName(c.target,"form")||a.prop(c.target,"noValidate"))){f=!0;c.testedValidity=
!0;if(!a(c.target).checkValidity())return c.stopImmediatePropagation(),f=!1;f=!1}}};a(i).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var x=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return x.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=p.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return function(b){return!a.test(b)}}()});b.addInputType("url",{mismatch:function(){var a=p.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},s)}}},"prop");var q=function(c){var d,h=a.prop(c,"validity");if(h)a.data(c,"cachedValidity",
h);else return!0;if(!h.valid){d=a.Event("invalid");var g=a(c).trigger(d);if(f&&!q.unhandledInvalids&&!d.isDefaultPrevented())b.validityAlert.showFor(g),q.unhandledInvalids=!0}a.removeData(c,"cachedValidity");return h.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var c=!0,d=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});q.unhandledInvalids=!1;for(var h=0,f=d.length;h<f;h++)q(d[h])||
(c=!1);return c}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){q.unhandledInvalids=!1;return q(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(c){a.removeData(this,"cachedValidity");b.data(this,"customvalidationMessage",""+c)}},willValidate:{writeable:!1,get:function(){var c={button:1,reset:1,hidden:1,image:1};return function(){var b=a(this).getNativeElement()[0];return!(b.disabled||b.readOnly||c[b.type])}}()},validity:{writeable:!1,
get:function(){var c=a(this).getNativeElement(),d=c[0],h=a.data(d,"cachedValidity");if(h)return h;h=a.extend({},s);if(!a.prop(d,"willValidate")||"submit"==d.type)return h;var f=c.val(),g={nodeName:d.nodeName.toLowerCase()};h.customError=!!b.data(d,"customvalidationMessage");if(h.customError)h.valid=!1;a.each(u,function(a,b){if(b(c,f,g))h[a]=!0,h.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",h.valid?"false":"true");d=c=null;return h}}},"prop");b.defineNodeNamesBooleanProperty(["input",
"textarea","select"],"required",{set:function(c){a(this).getShadowFocusElement().attr("aria-required",!!c+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);if(!("maxLength"in i.createElement("textarea"))){var j=function(){var c,b=0,d=a([]),f=1E9,g=function(){var a=d.prop("value"),c=a.length;c>b&&c>f&&(c=Math.max(b,f),d.prop("value",a.substr(0,c)));b=c},n=function(){clearTimeout(c);d.unbind(".maxlengthconstraint")};return function(i,m){n();if(-1<m)f=m,b=
a.prop(i,"value").length,d=a(i),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(g,0)}),d.bind("keyup.maxlengthconstraint",g),d.bind("blur.maxlengthconstraint",n),c=setInterval(g,200)}}();j.update=function(c,b){a(c).is(":focus")&&(null==b&&(b=a.prop(c,"maxlength")),j(e.target,b))};a(i).bind("focusin",function(c){var b;"TEXTAREA"==c.target.nodeName&&-1<(b=a.prop(c.target,"maxlength"))&&j(c.target,b)});b.defineNodeNameProperty("textarea",
"maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);j.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);j.update(this,a)}else this.setAttribute("maxlength","0"),j.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea",
"maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var v={submit:1,button:1,image:1},r={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var d=
"form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),f="form"+b.name,g=b.name,j="click.webshimssubmittermutate"+g,n=function(){if("form"in this&&v[this.type]){var m=a.prop(this,"form");if(m){var o=a.attr(this,f);if(null!=o&&(!b.limitedTo||o.toLowerCase()===a.prop(this,d))){var t=a.attr(m,g);a.attr(m,g,o);setTimeout(function(){if(null!=t)a.attr(m,g,t);else try{a(m).removeAttr(g)}catch(b){m.removeAttribute(g)}},9)}}}};switch(b.proptype){case "url":var l=i.createElement("form");
r[d]={prop:{set:function(b){a.attr(this,f,b)},get:function(){var b=a.attr(this,f);if(null==b)return"";l.setAttribute("action",b);return l.action}}};break;case "boolean":r[d]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":r[d]={prop:{set:function(b){a.attr(this,f,b)},get:function(){var d=a.attr(this,f);return!d||(d=d.toLowerCase())&&!b.limitedTo[d]?b.defaultProp:
d}}};break;default:r[d]={prop:{set:function(b){a.attr(this,f,b)},get:function(){var b=a.attr(this,f);return null!=b?b:""}}}}r[f]||(r[f]={});r[f].attr={set:function(b){r[f].attr._supset.call(this,b);a(this).unbind(j).bind(j,n)},get:function(){return r[f].attr._supget.call(this)}};r[f].initAttr=!0;r[f].removeAttr={value:function(){a(this).unbind(j);r[f].removeAttr._supvalue.call(this)}}});b.defineNodeNamesProperties(["input","button"],r);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?
b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):b.bugs.bustedValidity&&(b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){b.data(this,"bustedNoValidate",""+a)},get:function(){var a=b.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){b.data(this,"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow",
"stepMismatch"],function(a,b){u[b]=function(a){return(a[0].validity||{})[b]||!1}}));b.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},d={date:1,time:1,"datetime-local":1},f={focusout:1,blur:1},g={updateInput:1,change:1},j=function(a){var d,k=!0,o=a.prop("value"),t=
o,w=function(d){if(a){var f=a.prop("value");f!==o&&(o=f,(!d||!b[d.type])&&a.trigger("input"));d&&g[d.type]&&(t=f);!k&&f!==t&&a.trigger("change")}},i,j=function(b){clearInterval(d);setTimeout(function(){b&&f[b.type]&&(k=!1);a&&(a.unbind("focusout blur",j).unbind("input change updateInput",w),w());a=null},1)};clearInterval(d);d=setInterval(w,160);clearTimeout(i);i=setTimeout(w,9);a.unbind("focusout blur",j).unbind("input change updateInput",w);a.bind("focusout blur",j).bind("input updateInput change",
w)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(i).bind("focusin",function(b){b.target&&d[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&j(a(b.target))})}();b.addReady(function(b,d){var f;a("form",b).add(d.filter("form")).bind("invalid",a.noop);try{if(b==i&&!("form"in(i.activeElement||{})))(f=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&f.offsetHeight&&f.offsetWidth&&f.focus()}catch(g){}});(function(){Modernizr.textareaPlaceholder=
!!("placeholder"in a("<textarea />")[0]);var c=a.browser.webkit&&Modernizr.textareaPlaceholder;if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder||c){var d="over"==b.cfg.forms.placeholderType,f=["textarea"];Modernizr.input.placeholder||f.push("input");var g=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},i=function(b,c,f,h){!1===f&&(f=a.prop(b,"value"));
if(!d&&"password"!=b.type){if(!f&&h&&g(b)){var j;a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))b.value=a.prop(b,"value"),c.box.removeClass("placeholder-visible"),clearTimeout(j),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){g(b);clearTimeout(j);j=setTimeout(function(){g(b)},
9)}).bind("blur.placeholderremove",function(){clearTimeout(j);a(b).unbind(".placeholderremove")});return}b.value=f}else if(!f&&h){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))c.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}c.box.removeClass("placeholder-visible")},
j=function(b,c,f,g,j){if(!g&&(g=a.data(b,"placeHolder"),!g))return;a(b).unbind(".placeholderremove");if("focus"==j||!j&&a(b).is(":focus"))("password"==b.type||d||a(b).hasClass("placeholder-visible"))&&i(b,g,"",!0);else if(!1===c&&(c=a.prop(b,"value")),c)i(b,g,c);else if(!1===f&&(f=a.attr(b,"placeholder")||""),f&&!c){c=g;!1===f&&(f=a.prop(b,"placeholder"));if(!d&&"password"!=b.type)b.value=f;c.box.addClass("placeholder-visible")}else i(b,g,c)},p=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&
!b.attr("aria-labelledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},m=function(){var c={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var c=a.data(b,"placeHolder");if(c)return c;c=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){j(this,!1,!1,c,a.type);c.box["focus"==
a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){j(b,!1,!1,c,a.type)},0)});if("password"==b.type||d){c.text=p(b);c.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(b).bind("mousedown.placeholder",function(){j(this,!1,!1,c,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(d,f){var g=(parseInt(a.curCSS(b,
"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+f),10)||0,0)+(parseInt(a.curCSS(b,"border"+f+"Width"),10)||0);c.text.css("padding"+f,g)});a.curCSS(b,"lineHeight");var f={width:a(b).width(),height:a(b).height()},g=a.curCSS(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(d,f){var g=a.curCSS(b,f);c.text.css(f)!=g&&c.text.css(f,g)});f.width&&f.height&&c.text.css(f);"none"!==g&&c.box.addClass("placeholder-box-"+g)}else f=function(d){a(b).hasClass("placeholder-visible")&&
(i(b,c,""),d&&"submit"==d.type&&setTimeout(function(){d.isDefaultPrevented()&&j(b,!1,!1,c)},9))},a(l).bind("beforeunload",f),c.box=a(b),b.form&&a(b.form).submit(f);return c},update:function(d,f){if(!c[a.prop(d,"type")]&&!a.nodeName(d,"textarea"))b.warn("placeholder not allowed on type: "+a.prop(d,"type"));else{var g=m.create(d);g.text&&g.text.text(f);j(d,!1,f,g)}}}}();a.webshims.publicMethods={pHolder:m};f.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){c?(b.data(this,
"textareaPlaceholder",a),this.placeholder=""):b.contentAttr(this,"placeholder",a);m.update(this,a)},get:function(){return(c?b.data(this,"textareaPlaceholder"):"")||b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});f.forEach(function(d){var f={},g;["attr","prop"].forEach(function(d){f[d]={set:function(f){var h;c&&(h=b.data(this,"textareaPlaceholder"));h||(h=b.contentAttr(this,"placeholder"));a.removeData(this,"cachedValidity");var i=g[d]._supset.call(this,f);h&&"value"in this&&j(this,
f,h);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":g[d]._supget.call(this)}}});g=b.defineNodeNameProperty(d,"value",f)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,l,i){(function(){if(!("value"in i.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var d=a.data(this,"outputShim");d||(d=l(this));d(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,d,g){"removeAttr"!=g&&(d=a.data(this,"outputShim"))&&d(b)});var l=function(f){if(!f.getAttribute("aria-live")){var f=a(f),d=(f.text()||"").trim(),
g=f.attr("id"),l=f.attr("for"),p=a('<input class="output-shim" type="text" disabled name="'+(f.attr("name")||"")+'" value="'+d+'" style="display: none !important;" />').insertAfter(f),x=p[0].form||i,q=function(a){p[0].value=a;a=p[0].value;f.text(a);b.contentAttr(f[0],"value",a)};f[0].defaultValue=d;b.contentAttr(f[0],"value",d);f.attr({"aria-live":"polite"});g&&(p.attr("id",g),f.attr("aria-labelledby",b.getID(a('label[for="'+g+'"]',x))));l&&(g=b.getID(f),l.split(" ").forEach(function(a){(a=i.getElementById(a))&&
a.setAttribute("aria-controls",g)}));f.data("outputShim",q);p.data("outputShim",q);return q}};b.addReady(function(b,d){a("output",b).add(d.filter("output")).each(function(){l(this)})})}})();(function(){var l={updateInput:1,input:1},f={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},d=function(a){var d,f=a.prop("value"),i=function(d){if(a){var c=a.prop("value");c!==f&&(f=c,(!d||!l[d.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},q,j=function(){clearTimeout(q);
q=setTimeout(i,9)},v=function(){a.unbind("focusout",v).unbind("keyup keypress keydown paste cut",j).unbind("input change updateInput",i);clearInterval(d);setTimeout(function(){i();a=null},1)};clearInterval(d);d=setInterval(i,99);j();a.bind("keyup keypress keydown paste cut",j).bind("focusout",v).bind("input updateInput change",i)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(i).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!f[b.target.type]&&d(a(b.target))})})();b.isReady("form-output",!0)});
