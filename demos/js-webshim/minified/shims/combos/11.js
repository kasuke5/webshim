(function(e){var t=function(e){return"number"==typeof e||e&&e==1*e},n=function(e,t){return"number"==typeof e||e&&e==1*e?1*e:t},i=["step","min","max","readonly","title","disabled","tabindex"],a={_create:function(){var t;for(this.element.addClass("ws-range").attr({role:"slider"}).append('<span class="ws-range-min ws-range-progress" /><span class="ws-range-rail ws-range-track"><span class="ws-range-thumb" /></span>'),this.trail=e(".ws-range-track",this.element),this.range=e(".ws-range-progress ",this.element),this.thumb=e(".ws-range-thumb",this.trail),this.updateMetrics(),this.orig=this.options.orig,t=0;i.length>t;t++)this[i[t]](this.options[i[t]]);this.value=this._value,this.value(this.options.value),this.initDataList(),this.element.data("rangeUi",this),this.addBindings(),this._init=!0},value:e.noop,_value:function(t,n,i){var a,r,o=this.options,s=t,l={},u={};n||parseFloat(t,10)==t||(t=o.min+(o.max-o.min)/2),n||(t=this.normalizeVal(t)),a=100*((t-o.min)/(o.max-o.min)),this._init&&t==o.value&&s==t||(this.options.value=t,this.thumb.stop(),this.range.stop(),u[this.dirs.width]=a+"%",this.vertical&&(a=Math.abs(a-100)),l[this.dirs.left]=a+"%",i?(i="object"!=typeof i?{}:e.extend({},i),i.duration||(r=Math.abs(a-parseInt(this.thumb[0].style[this.dirs.left]||50,10)),i.duration=Math.max(Math.min(999,5*r),99)),this.thumb.animate(l,i),this.range.animate(u,i)):(this.thumb.css(l),this.range.css(u)),this.orig&&(s!=t||!this._init&&this.orig.value!=t)&&this.options._change(t),this.element.attr({"aria-valuenow":this.options.value,"aria-valuetext":this.options.textValue?this.options.textValue(this.options.value):this.options.options[this.options.value]||this.options.value}))},initDataList:function(){if(this.orig){var t,n=this,i=function(){e(n.orig).jProp("list").off("updateDatalist",i).on("updateDatalist",i),clearTimeout(t),t=setTimeout(function(){n.list&&n.list()},9)};e(this.orig).on("listdatalistchange",i),this.list()}},list:function(){var n=this.options,i=n.min,a=n.max,r=this.trail,o=this;this.element.attr({"aria-valuetext":n.options[n.value]||n.value}),e(".ws-range-ticks",r).remove(),e(this.orig).jProp("list").find("option:not([disabled])").each(function(){n.options[e.prop(this,"value")]=e.prop(this,"label")||""}),e.each(n.options,function(s,l){if(!(!t(s)||i>s||s>a)){var u=100*((s-i)/(a-i)),c=n.showLabels&&l?' title="'+l+'"':"";o.vertical&&(u=Math.abs(u-100)),o.posCenter(e('<span class="ws-range-ticks"'+c+' data-label="'+l+'" style="'+o.dirs.left+": "+u+'%;" />').appendTo(r))}})},readonly:function(e){e=!!e,this.options.readonly=e,this.element.attr("aria-readonly",""+e),this._init&&this.updateMetrics()},disabled:function(e){e=!!e,this.options.disabled=e,e?this.element.attr({tabindex:-1,"aria-disabled":"true"}):this.element.attr({tabindex:this.options.tabindex,"aria-disabled":"false"}),this._init&&this.updateMetrics()},tabindex:function(e){this.options.tabindex=e,this.options.disabled||this.element.attr({tabindex:e})},title:function(e){this.element.prop("title",e)},min:function(e){this.options.min=n(e,0),this.value(this.options.value,!0)},max:function(e){this.options.max=n(e,100),this.value(this.options.value,!0)},step:function(e){var t=this.options,i="any"==e?"any":n(e,1);t.stepping&&("any"!=i&&t.stepping%i?webshims.error("wrong stepping value for type range:"+t.stepping%i):i=t.stepping),t.step=i,this.value(this.options.value)},normalizeVal:function(e){var t,n,i,a=this.options;return a.min>=e?e=a.min:e>=a.max?e=a.max:"any"!=a.step&&(i=a.step,t=(e-a.min)%i,n=e-t,2*Math.abs(t)>=i&&(n+=t>0?i:-i),e=1*n.toFixed(5)),e},doStep:function(e,t){var i=n(this.options.step,1);"any"==this.options.step&&(i=Math.min(i,(this.options.max-this.options.min)/10)),this.value(this.options.value+i*e,!1,t)},getStepedValueFromPos:function(e){var t,n,i,a;return 0>=e?t=this.options[this.dirs.min]:e>100?t=this.options[this.dirs.max]:(this.vertical&&(e=Math.abs(e-100)),t=(this.options.max-this.options.min)*(e/100)+this.options.min,a=this.options.step,"any"!=a&&(n=(t-this.options.min)%a,i=t-n,2*Math.abs(n)>=a&&(i+=n>0?a:-a),t=1*i.toFixed(5))),t},addRemoveClass:function(e,t){var n,i=-1!=this.element.prop("className").indexOf(e);!t&&i?(n="removeClass",this.element.removeClass(e),this.updateMetrics()):t&&!i&&(n="addClass"),n&&(this.element[n](e),this._init&&this.updateMetrics())},addBindings:function(){var t,n,i,a,r=this,o=this.options,s=function(){var t={};return{init:function(n,i,a){t[n]||(t[n]={fn:a},r.orig&&e(r.orig).on(n,function(){t[n].val=e.prop(r.orig,"value")})),t[n].val=i},call:function(e,n){t[e].val!=n&&(clearTimeout(t[e].timer),t[e].val=n,t[e].timer=setTimeout(function(){t[e].fn(n,r)},0))}}}(),l=function(){var e={touchstart:1,touchend:1,touchmove:1},t=["pageX","pageY"];return function(n){if(e[n.type]&&n.originalEvent&&n.originalEvent.touches&&n.originalEvent.touches.length)for(var i=0;t.length>i;i++)n[t[i]]=n.originalEvent.touches[0][t[i]];return n}}(),u=function(e,i){"touchmove"==e.type&&(e.preventDefault(),l(e));var a=r.getStepedValueFromPos((e[r.dirs.mouse]-t)*n);a!=o.value&&(r.value(a,!1,i),s.call("input",a)),e&&"mousemove"==e.type&&e.preventDefault()},c=function(t){t&&"mouseup"==t.type&&(s.call("input",o.value),s.call("change",o.value)),r.addRemoveClass("ws-active"),e(document).off("mousemove touchmove",u).off("mouseup touchend",c),e(window).off("blur",p),a=!1},p=function(e){e.target==window&&c()},h=function(i){var s;if(!a&&("touchstart"!=i.type||i.originalEvent&&i.originalEvent.touches&&1==i.originalEvent.touches.length)&&(i.preventDefault(),e(document).off("mousemove touchmove",u).off("mouseup touchend",c),e(window).off("blur",p),!o.readonly&&!o.disabled)){if(l(i),r.element.focus(),r.addRemoveClass("ws-active",!0),t=r.element.focus().offset(),n=r.element[r.dirs.innerWidth](),!n||!t)return;s=r.thumb[r.dirs.outerWidth](),t=t[r.dirs.pos],n=100/n,u(i,o.animate),a=!0,e(document).on("touchstart"==i.type?{touchend:c,touchmove:u}:{mouseup:c,mousemove:u}),e(window).on("blur",p),i.stopPropagation()}},d={"touchstart mousedown":h,focus:function(){o.disabled||i||(s.init("input",o.value),s.init("change",o.value),r.addRemoveClass("ws-focus",!0),r.updateMetrics()),i=!0},blur:function(){r.element.removeClass("ws-focus ws-active"),r.updateMetrics(),i=!1,s.init("input",o.value),s.call("change",o.value)},keyup:function(){r.addRemoveClass("ws-active"),s.call("input",o.value),s.call("change",o.value)},keydown:function(e){var t=!0,n=e.keyCode;o.readonly||o.disabled||(39==n||38==n?r.doStep(1):37==n||40==n?r.doStep(-1):33==n?r.doStep(10,o.animate):34==n?r.doStep(-10,o.animate):36==n?r.value(r.options.max,!1,o.animate):35==n?r.value(r.options.min,!1,o.animate):t=!1,t&&(r.addRemoveClass("ws-active",!0),s.call("input",o.value),e.preventDefault()))}};s.init("input",o.value,this.options.input),s.init("change",o.value,this.options.change),d[e.fn.mwheelIntent?"mwheelIntent":"mousewheel"]=function(e,t){t&&i&&!o.readonly&&!o.disabled&&(r.doStep(t),e.preventDefault(),s.call("input",o.value))},this.element.on(d),this.thumb.on({mousedown:h}),this.orig&&e(this.orig).jProp("form").on("reset",function(){var t=e.prop(r.orig,"value");r.value(t),setTimeout(function(){var n=e.prop(r.orig,"value");t!=n&&r.value(n)},4)}),window.webshims&&webshims.ready("WINDOWLOAD",function(){webshims.ready("dom-support",function(){e.fn.onWSOff&&r.element.onWSOff("updateshadowdom",function(){r.updateMetrics()})}),!e.fn.onWSOff&&webshims._polyfill&&webshims._polyfill(["dom-support"])})},posCenter:function(e,t){var n;!this.options.calcCenter||this._init&&!this.element[0].offsetWidth||(e||(e=this.thumb),t||(t=e[this.dirs.outerWidth]()),t/=-2,e.css(this.dirs.marginLeft,t),this.options.calcTrail&&e[0]==this.thumb[0]&&(n=this.element[this.dirs.innerHeight](),e.css(this.dirs.marginTop,(e[this.dirs.outerHeight]()-n)/-2),this.range.css(this.dirs.marginTop,(this.range[this.dirs.outerHeight]()-n)/-2),t*=-1,this.trail.css(this.dirs.left,t).css(this.dirs.right,t)))},updateMetrics:function(){var e=this.element.innerWidth();this.vertical=e&&this.element.innerHeight()-e>10,this.dirs=this.vertical?{mouse:"pageY",pos:"top",min:"max",max:"min",left:"top",right:"bottom",width:"height",innerWidth:"innerHeight",innerHeight:"innerWidth",outerWidth:"outerHeight",outerHeight:"outerWidth",marginTop:"marginLeft",marginLeft:"marginTop"}:{mouse:"pageX",pos:"left",min:"min",max:"max",left:"left",right:"right",width:"width",innerWidth:"innerWidth",innerHeight:"innerHeight",outerWidth:"outerWidth",outerHeight:"outerHeight",marginTop:"marginTop",marginLeft:"marginLeft"},this.element[this.vertical?"addClass":"removeClass"]("vertical-range")[this.vertical?"addClass":"removeClass"]("horizontal-range"),this.posCenter()}},r=function(e){function t(){}return t.prototype=e,new t};e.fn.rangeUI=function(t){return t=e.extend({readonly:!1,disabled:!1,tabindex:0,min:0,step:1,max:100,value:50,input:e.noop,change:e.noop,_change:e.noop,showLabels:!0,options:{},calcCenter:!0,calcTrail:!0},t),this.each(function(){var n=e.extend(r(a),{element:e(this)});n.options=t,n._create.call(n)})},window.webshims&&webshims.isReady&&(webshims.ready("es5",function(){webshims.isReady("range-ui",!0)}),webshims._polyfill&&webshims._polyfill(["es5"]))})(window.webshims?webshims.$:jQuery),webshims.register("form-number-date-ui",function(e,t,n,i,a,r){"use strict";var o,s=t.formcfg,l=["01","02","03","04","05","06","07","08","09","10","11","12"],u=function(e){e.stopImmediatePropagation()},c=function(){var t;return function(){return t||(t='<option value=""></option>'+e.map(l,function(e){return'<option value="'+e+'"]>'+e+"</option>"}).join("")),t}}(),p=function(t){if(!o.patterns[t+"Obj"]){var n={};e.each(o.patterns[t].split(o[t+"Format"]),function(e,t){n[t]=e}),o.patterns[t+"Obj"]=n}},h={date:{_create:function(t){var n={splits:[e('<input type="text" class="yy" size="4" inputmode="numeric" />')[0]]};return t.monthSelect?n.splits.push(e('<select class="mm">'+c(t)+"</select>")[0]):n.splits.push(e('<input type="text" class="mm" inputmode="numeric" maxlength="2" size="2" />')[0]),n.splits.push(e('<input type="text" class="dd ws-spin" inputmode="numeric" maxlength="2" size="2" />')[0]),n.elements=[n.splits[0],e('<span class="ws-input-seperator" />')[0],n.splits[1],e('<span class="ws-input-seperator" />')[0],n.splits[2]],n},sort:function(t){p("d");var n=0,i=e(".ws-input-seperator",t).html(o.dFormat),a=e("input, select",t);e.each(o.patterns.dObj,function(e){var r=a.filter("."+e);r[0]&&(r.appendTo(t),i.length>n&&i.eq(n).insertAfter(r),n++)})}},month:{_create:function(t){var n={splits:[e('<input type="text" class="yy" inputmode="numeric" size="4" />')[0]]};return t.monthSelect?n.splits.push(e('<select class="mm ws-spin">'+c(t)+"</select>")[0]):(n.splits.push(e('<input type="text" class="mm ws-spin" />')[0]),t.onlyMonthDigits&&e(n.splits[1]).attr({inputmode:"numeric",size:2,maxlength:2})),n.elements=[n.splits[0],e('<span class="ws-input-seperator" />')[0],n.splits[1]],n},sort:function(t){var n,i=e(".ws-input-seperator",t).html(o.dFormat),a=e("input.mm, select.mm",t);o.date.showMonthAfterYear?(a.appendTo(t),n="insertBefore"):(a.prependTo(t),n="insertAfter"),i[n](a)}}},d=new Date((new Date).getTime()-1e3*60*(new Date).getTimezoneOffset());d=new Date(d.getFullYear(),d.getMonth(),d.getDate(),d.getHours()).getTime();var f={number:{step:1},"datetime-local":{step:60,start:new Date(d).getTime()},time:{step:60},month:{step:1,start:new Date(d)},date:{step:1,start:new Date(d)}},m=function(){var n=function(){return t.getID(this)};return function(t,i,a){e(t).attr({"aria-labelledby":i.map(n).get().join(" ")}),a||i.on("click",function(e){return t.getShadowFocusElement().focus(),e.preventDefault(),!1})}}(),v=function(e){return e?(e+="",1==e.length?"0"+e:e):""};(function(){s.de=e.extend(!0,{numberFormat:{",":".",".":","},timeSigns:":. ",numberSigns:",",dateSigns:".",dFormat:".",patterns:{d:"dd.mm.yy"},month:{currentText:"Aktueller Monat"},time:{currentText:"Jetzt"},date:{close:"schlie\u00dfen",clear:"L\u00f6schen",prevText:"Zur\u00fcck",nextText:"Vor",currentText:"Heute",monthNames:["Januar","Februar","M\u00e4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","M\u00e4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},s.de||{}),s.en=e.extend(!0,{numberFormat:{".":".",",":","},numberSigns:".",dateSigns:"/",timeSigns:":. ",dFormat:"/",patterns:{d:"mm/dd/yy"},meridian:["AM","PM"],month:{currentText:"This month"},time:{currentText:"Now"},date:{closeText:"Done",clear:"Clear",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},s.en||{}),s["en-US"]||(s["en-US"]=e.extend(!0,{},s.en)),s["en-GB"]||(s["en-GB"]=e.extend(!0,{},s.en,{date:{firstDay:1},patterns:{d:"dd/mm/yy"}})),s["en-AU"]||(s["en-AU"]=e.extend(!0,{},s["en-GB"])),s[""]||(s[""]=s["en-US"]),o=s[""];var n=function(t){if(!t.date.monthkeys){var n=function(e,n){var i,a=e+1;i=10>a?"0"+a:""+a,t.date.monthkeys[a]=i,t.date.monthkeys[n]=i,t.date.monthkeys[n.toLowerCase()]=i};t.date.monthkeys={},t.date.monthDigits=l,t.numberSigns+="-",t.meridian&&(t.timeSigns+=t.meridian[0]+t.meridian[1]+t.meridian[0].toLowerCase()+t.meridian[1].toLowerCase()),e.each(t.date.monthNames,n),e.each(t.date.monthNamesShort,n)}t.colorSigns||(t.colorSigns="#abcdefABCDEF"),t["datetime-localSigns"]||(t["datetime-localSigns"]=t.dateSigns+t.timeSigns),t["datetime-local"]||(t["datetime-local"]={}),t.time||(t.time={}),!t["datetime-local"].currentText&&t.time.currentText&&(t["datetime-local"].currentText=t.time.currentText)},r=function(){n(o),e(i).triggerHandler("wslocalechange")};r(),t.activeLang({register:"form-core",callback:function(){e.each(arguments,function(e,t){return s[t]?(s[t]!=o&&(o=s[t],r()),!1):a})}}),t.activeLang({langObj:s,module:"form-core",callback:function(e){o!=e&&(o=e,r())}})})(),function(){var n=function(t){e(this)["mousepressstart"==t.type?"addClass":"removeClass"]("mousepress-ui")},i=function(e,t){return"number"==typeof e||e&&e==1*e?1*e:t},r={number:function(e){return(e+"").replace(/\,/g,"").replace(/\./,o.numberFormat["."])},time:function(t){var n;return t&&o.meridian&&(t=t.split(":"),n=1*t[0],n&&n>=12?(t[0]=v(n-12+""),n=1):n=0,"00"===t[0]&&(t[0]="12"),t=e.trim(t.join(":"))+" "+o.meridian[n]),t},"datetime-local":function(t,n){var i=e.trim(t||"").split("T");return 2==i.length&&(t=this.date(i[0],n)+" "+this.time(i[1],n)),t},month:function(e,t){var n,i=e.split("-");return i[0]&&i[1]?(n=o.date[t.formatMonthNames]||o.date[t.monthNames]||o.date.monthNames,i[1]=n[1*i[1]-1],t&&t.splitInput?e=[i[0]||"",i[1]||""]:i[1]&&(e=o.date.showMonthAfterYear?i.join(" "):i[1]+" "+i[0])):t&&t.splitInput&&(e=[i[0]||"",i[1]||""]),e},date:function(e,t){var n=(e+"").split("-");return n[2]&&n[1]&&n[0]?t&&t.splitInput?e=n:(e=o.patterns.d.replace("yy",n[0]||""),e=e.replace("mm",n[1]||""),e=e.replace("dd",n[2]||"")):t&&t.splitInput&&(e=[n[0]||"",n[1]||"",n[2]||""]),e},color:function(e){var t="#000000";return e&&(e=e.toLowerCase(),7==e.length&&c("color").isValid(e)&&(t=e)),t}},s={number:function(e){return(e+"").replace(o.numberFormat[","],"").replace(o.numberFormat["."],".")},"datetime-local":function(t,n){var i,a=e.trim(t||"").split(/\s+/);return 2==a.length?(-1!=a[0].indexOf(":")&&-1==a[1].indexOf(":")&&(i=a[1],a[1]=a[0],a[0]=i),t=this.date(a[0],n)+"T"+this.time(a[1],n)):3==a.length&&(t=this.date(a[0],n)+"T"+this.time(a[1]+a[2],n)),t},time:function(t){var n;return t&&o.meridian&&(t=t.toUpperCase(),"12"===t.substr(0,2)&&(t="00"+t.substr(2)),-1!=t.indexOf(o.meridian[1])&&(t=t.split(":"),n=1*t[0],isNaN(n)||(t[0]=n+12),t=t.join(":")),t=e.trim(t.replace(o.meridian[0],"").replace(o.meridian[1],""))),t},month:function(e,t,n){var i=t.splitInput?e:e.trim().split(/[\.\s-\/\\]+/);return 2==i.length&&i[0]&&i[1]?(i[0]=!n&&o.date.monthkeys[i[0]]||i[0],i[1]=!n&&o.date.monthkeys[i[1]]||i[1],e=2==i[1].length&&i[0].length>3?i[0]+"-"+i[1]:2==i[0].length&&i[1].length>3?i[1]+"-"+i[0]:""):t.splitInput&&(e=""),e},date:function(e,t,n){p("d");var i;return t.splitInput?i={yy:0,mm:1,dd:2}:(i=o.patterns.dObj,e=e.split(o.dFormat)),3==e.length&&e[0]&&e[1]&&e[2]&&(!n||e[i.yy].length>3&&2==e[i.mm].length&&2==e[i.dd].length)?[v(e[i.yy]),v(e[i.mm]),v(e[i.dd])].join("-"):""},color:function(e){var t="#000000";return e&&(e=e.toLowerCase(),0!==e.indexOf("#")&&(e="#"+e),4==e.length&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),7==e.length&&c("color").isValid(e)&&(t=e)),t}},l={date:function(e,t){var n=(e||"").split("-");return n=3==n.length?t.splitInput?n:o.patterns.d.replace("yy",n[0]).replace("mm",n[1]).replace("dd",n[2]):t.splitInput?[e,e,e]:e},month:function(e,t){var n=(e||"").split("-");return n=2==n.length?t.splitInput?n:o.date.showMonthAfterYear?n[0]+" "+n[1]:n[1]+" "+n[0]:t.splitInput?[e,e]:e}},c=function(){var t={};return function(n){var i;return t[n]||(i=e('<input type="'+n+'" step="any" />'),t[n]={asNumber:function(e){var t="object"==typeof e?"valueAsDate":"value";return i.prop(t,e).prop("valueAsNumber")},asValue:function(e){var t="object"==typeof e?"valueAsDate":"valueAsNumber";return i.prop(t,e).prop("value")},isValid:function(t,n){return n&&(n.nodeName||n.jquery)&&(n={min:e(n).prop("min")||"",max:e(n).prop("max")||"",step:e(n).prop("step")||"any"}),n=e.extend({step:"any",min:"",max:""},n||{}),i.attr(n).prop("value",t).is(":valid")&&i.prop("value")==t}}),t[n]}}();f.range=f.number;var d={_create:function(){var n,i,a,r=this.options,o=this.createOpts;for(this.type=r.type,this.orig=r.orig,this.buttonWrapper=e('<span class="input-buttons '+this.type+'-input-buttons"></span>').insertAfter(this.element),this.options.containerElements.push(this.buttonWrapper[0]),r.mirrorValidity=r.mirrorValidity&&this.orig&&Modernizr.formvalidation&&!t.bugs.bustedValidity,r.splitInput&&this._addSplitInputs?(r.monthSelect&&this.element.addClass("ws-month-select"),this._addSplitInputs()):this.inputElements=this.element,f[this.type]&&"object"==typeof f[this.type].start&&(f[this.type].start=this.asNumber(f[this.type].start)),t.picker[this.type]||(r.buttonOnly=!1),n=0;o.length>n;n++)null!=r[o[n]]&&this[o[n]](r[o[n]],r[o[n]]);"color"==this.type&&this.inputElements.prop("maxLength",7),this.addBindings(),e(this.element).data("wsWidget"+r.type,this),r.buttonOnly&&this.inputElements.prop({readOnly:!0}),this._init=!0,r.mirrorValidity&&(i=this,a=function(){clearTimeout(a._timerDealy),a._timerDealy=setTimeout(a._wsexec,9)},a._wsexec=function(){clearTimeout(a._timerDealy),i.mirrorValidity(!0)},a(),e(this.orig).on("change input",function(e){"input"==e.type?a():a._wsexec()}))},mirrorValidity:function(t){if(this._init&&this.options.mirrorValidity){t||e.prop(this.orig,"validity");var n=e(this.orig).getErrorMessage();n!==this.lastErrorMessage&&(this.inputElements.prop("setCustomValidity",function(e,t){t._supvalue&&t._supvalue.call(this,n)}),this.lastErrorMessage=n)}},addBindings:function(){var t,i=this,r=this.options,s=function(){var t={};return{init:function(n,a,r){t[n]||(t[n]={fn:r},e(i.orig).on(n,function(){t[n].val=e.prop(i.orig,"value")})),t[n].val=a},call:function(e,n){t[e]&&t[e].val!=n&&(clearTimeout(t[e].timer),t[e].val=n,t[e].timer=setTimeout(function(){t[e].fn(n,i)},9))}}}(),c=function(){s.init("input",e.prop(i.orig,"value"),i.options.input),s.init("change",e.prop(i.orig,"value"),i.options.change)},p={},h=function(e){return h.prevent?(e.preventDefault(),(t||i.element.getShadowFocusElement()).focus(),u(e),!0):a};(function(){var t,n=function(n){var a;clearTimeout(t),a=i.parseValue(),"color"==i.type&&i.inputElements.val(a),e.prop(i.orig,"value",a),s.call("input",a),n&&"wsupdatevalue"==n.type||s.call("change",a)},a=function(){clearTimeout(t)},o=function(e){clearTimeout(t),t=setTimeout(n,0),"change"==e.type&&(u(e),r.splitInput||n())};i.element.on("wsupdatevalue",n),i.inputElements.add(i.buttonWrapper).add(i.element).on({"focus focusin":a,"blur focusout change":o}),setTimeout(function(){i.popover&&(i.popover.element.on("wspopoverhide",o),e("> *",i.popover.element).on({focusin:a,focusout:o}))},0)})();var d={},m=r.splitInput?this.inputElements.filter(".ws-spin"):this.inputElements.eq(0),v={blur:function(e){h(e)||r.disabled||r.readonly||h.prevent||(t=!1),u(e)},focus:function(){t||(c(),t=this)},keypress:function(e){if(!e.isDefaultPrevented()){var t,n=!0,a=e.keyCode;e.ctrlKey||e.metaKey||!o[i.type+"Signs"]?n=!1:(t=String.fromCharCode(null==e.charCode?a:e.charCode),n=!(" ">t||(o[i.type+"Signs"]+"0123456789").indexOf(t)>-1)),n&&e.preventDefault()}},input:"color"==this.type&&this.isValid?e.noop:function(){var e,t=function(){var e=i.parseValue(!0);e&&i.isValid(e)&&i.setInput(e)};return function(){clearTimeout(e),e=setTimeout(t,200)}}(),"input keydown keypress":function(){var t,n=!1,i=function(){n===!0?(n="semi",t=setTimeout(i,250)):n=!1},a=function(){n=!0,clearTimeout(t),t=setTimeout(i,300)},o=function(){var e=this;setTimeout(function(){e.focus(),e.select()},4),a()};return function(t){if(r.splitInput&&r.jumpInputs)if("input"==t.type){if(e.prop(this,"value").length===e.prop(this,"maxLength"))try{e(this).next().next("input, select").each(o)}catch(i){}}else t.shiftKey||t.crtlKey||9!=t.keyCode||n!==!0&&(!n||e.prop(this,"value"))||t.preventDefault()}}()},g=function(){return r.disabled||t||i.element.getShadowFocusElement().focus(),h.set(),!1};h.set=function(){var e,t=function(){h.prevent=!1};return function(){clearTimeout(e),h.prevent=!0,setTimeout(t,9)}}(),this.buttonWrapper.on("mousedown",g),this.setInput=function(e){i.value(e),s.call("input",e)},this.setChange=function(e){i.setInput(e),s.call("change",e)},this.inputElements.on(v),f[this.type]&&(["stepUp","stepDown"].forEach(function(e){p[e]=function(n){if(!r.disabled&&!r.readonly){t||g();var a=!1;n||(n=1);try{i.elemHelper[e](n),a=i.elemHelper.prop("value")}catch(o){!r.value&&i.maxAsNumber>=i.minAsNumber&&(a=r.defValue)}return a!==!1&&r.value!=a&&(i.value(a),s.call("input",a)),a}}}),r.noSpinbtn||(d[e.fn.mwheelIntent?"mwheelIntent":"mousewheel"]=function(e,n){n&&t&&!r.disabled&&(p[n>0?"stepUp":"stepDown"](),e.preventDefault())},d.keydown=function(t){if(!(r.list||t.isDefaultPrevented()||t.altKey&&40==t.keyCode||e.attr(this,"list"))){var n=!0,i=t.keyCode;38==i?p.stepUp():40==i?p.stepDown():n=!1,n&&t.preventDefault()}},m.attr({autocomplete:"off",role:"spinbutton"}).on(d)),e(this.buttonWrapper).on("mousepressstart mousepressend",".step-up, .step-down",n).on("mousedown mousepress",".step-up",function(){p.stepUp()}).on("mousedown mousepress",".step-down",function(){p.stepDown()})),"color"!=this.type&&function(){var t;r.splitInput?(t=function(){i.reorderInputs()},i.reorderInputs()):t=function(){r.value&&i.value(r.value,!0),l[i.type]&&r.placeholder&&i.placeholder(r.placeholder)},e(i.orig).onWSOff("wslocalechange",t)}(),c()},required:function(e,t){this.inputElements.attr({"aria-required":""+t}),this.mirrorValidity()},parseValue:function(t){var n=this.inputElements.map(function(){return e.prop(this,"value")}).get();return this.options.splitInput||(n=n[0]),s[this.type](n,this.options,t)},formatValue:function(e,t){return r[this.type](e,t===!1?!1:this.options)},createOpts:["readonly","title","disabled","tabindex","placeholder","defaultValue","value","required"],placeholder:function(t){var n=this.options;n.placeholder=t;var i=t;l[this.type]&&(i=l[this.type](t,this.options)),n.splitInput&&"object"==typeof i?e.each(this.splits,function(t,n){e.prop(n,"placeholder",i[t])}):this.element.prop("placeholder",i)},initDataList:function(){var t,n=this,i=function(){e(n.orig).jProp("list").off("updateDatalist",i).on("updateDatalist",i),clearTimeout(t),t=setTimeout(function(){n.list&&n.list()},9)};e(this.orig).onTrigger("listdatalistchange",i)},getOptions:function(){var t={},n=e(this.orig).jProp("list");return n.find("option").each(function(){t[e.prop(this,"value")]=e.prop(this,"label")}),[t,n.data("label")]},list:function(t){"number"==this.type&&this.element.attr("list",e.attr(this.orig,"list")),this.options.list=t,this._propertyChange("list")},_propertyChange:e.noop,tabindex:function(t){this.options.tabindex=t,this.inputElements.prop("tabindex",this.options.tabindex),e("button",this.buttonWrapper).prop("tabindex",this.options.tabindex)},title:function(t){!t&&this.orig&&null==e.attr(this.orig,"title")&&(t=null),this.options.title=t,null==t?this.inputElements.removeAttr("title"):this.inputElements.prop("title",this.options.title)}};["defaultValue","value"].forEach(function(e){d[e]=function(t,n){(!this._init||n||t!==this.options[e])&&(this.element.prop(e,this.formatValue(t)),this.options[e]=t,this._propertyChange(e),this.mirrorValidity())}}),["readonly","disabled"].forEach(function(t){var n="disabled"==t;d[t]=function(i,a){var r=this.options;r[t]==a&&this._init||(r[t]=!!a,!n&&r.buttonOnly?this.inputElements.attr({"aria-readonly":r[t]}):this.inputElements.prop(t,r[t]),this.buttonWrapper[r[t]?"addClass":"removeClass"]("ws-"+t),n&&e("button",this.buttonWrapper).prop("disabled",r[t]))}});var m=e.extend({},d,{_create:function(){var t=this.options,n=c(t.type);this.elemHelper=e('<input type="'+t.type+'" />'),this.asNumber=n.asNumber,this.asValue=n.asValue,this.isValid=n.isValid,d._create.apply(this,arguments),this._init=!1,this.buttonWrapper.html('<span unselectable="on" class="step-controls"><span class="step-up"></span><span class="step-down"></span></span>'),"number"==this.type&&this.inputElements.attr("inputmode","numeric"),t.min||"number"!=typeof t.relMin||(t.min=this.asValue(this.getRelNumber(t.relMin)),e.prop(this.orig,"min",t.min)),t.max||"number"!=typeof t.relMax||(t.max=this.asValue(this.getRelNumber(t.relMax)),e.prop(this.orig,"max",t.max)),this._init=!0},createOpts:["step","min","max","readonly","title","disabled","tabindex","placeholder","defaultValue","value","required"],_addSplitInputs:function(){if(!this.inputElements){var t=h[this.type]._create(this.options);this.splits=t.splits,this.inputElements=e(t.elements).prependTo(this.element).filter("input, select")}},getRelNumber:function(e){var t=f[this.type].start||0;return e&&(t+=e),t},addZero:v,_setStartInRange:function(){var e=this.getRelNumber(this.options.relDefaultValue);!isNaN(this.minAsNumber)&&this.minAsNumber>e?e=this.minAsNumber:!isNaN(this.maxAsNumber)&&e>this.maxAsNumber&&(e=this.maxAsNumber),this.elemHelper.prop("valueAsNumber",e),this.options.defValue=this.elemHelper.prop("value")},reorderInputs:function(){if(h[this.type]){var e=this.element;h[this.type].sort(e,this.options),setTimeout(function(){var n=t.data(e);n&&n.shadowData&&(n.shadowData.shadowFocusElement=e.find("input, select")[0]||e[0])},9)}},step:function(e){var t=f[this.type];this.options.step=e,this.elemHelper.prop("step",i(e,t.step)),this.mirrorValidity()},_beforeValue:function(e){this.valueAsNumber=this.asNumber(e),this.options.value=e,isNaN(this.valueAsNumber)||!isNaN(this.minAsNumber)&&this.valueAsNumber<this.minAsNumber||!isNaN(this.maxAsNumber)&&this.valueAsNumber>this.maxAsNumber?this._setStartInRange():(this.elemHelper.prop("value",e),this.options.defValue="")}});["defaultValue","value"].forEach(function(t){var n="value"==t;m[t]=function(i,a){(!this._init||a||this.options[t]!==i)&&(n&&this._beforeValue(i),i=r[this.type](i,this.options),this.options.splitInput?e.each(this.splits,function(a,r){t in r||n||!e.nodeName(r,"select")?e.prop(r,t,i[a]):e('option[value="'+i[a]+'"]',r).prop("defaultSelected",!0)}):this.element.prop(t,i),this._propertyChange(t),this.mirrorValidity())}}),e.each({min:1,max:-1},function(e,t){var n=e+"AsNumber";m[e]=function(i){this.elemHelper.prop(e,i),this[n]=this.asNumber(i),null!=this.valueAsNumber&&(isNaN(this.valueAsNumber)||!isNaN(this[n])&&this.valueAsNumber*t<this[n]*t)&&this._setStartInRange(),this.options[e]=i,this._propertyChange(e),this.mirrorValidity()}}),e.fn.wsBaseWidget=function(t){return t=e.extend({},t),this.each(function(){e.webshims.objectCreate(d,{element:{value:e(this)}},t)})},e.fn.wsBaseWidget.wsProto=d,e.fn.spinbtnUI=function(t){return t=e.extend({monthNames:"monthNames",size:1,startView:0},t),this.each(function(){e.webshims.objectCreate(m,{element:{value:e(this)}},t)})},e.fn.spinbtnUI.wsProto=m}(),function(){var n={},a=function(e,n){return e=("color"==e?"color":"forms")+"-picker",a[n+"Loaded"+e]||(a[n+"Loaded"+e]=!0,t.ready(n,function(){t.loader.loadList([e])})),e};r.addZero=v,t.loader.addModule("forms-picker",{noAutoCallback:!0,options:r}),t.loader.addModule("color-picker",{noAutoCallback:!0,css:"jpicker/jpicker.css",options:r}),t.inlinePopover={_create:function(){this.element=e('<div class="ws-inline-picker"><div class="ws-po-box" /></div>').data("wspopover",this),this.contentElement=e(".ws-po-box",this.element),this.element.insertAfter(this.options.prepareFor)},show:e.noop,hide:e.noop,preventBlur:e.noop,isVisible:!0},n._genericSetFocus=function(t,n){if(t=e(t||this.activeButton),!this.popover.openedByFocus&&!n){var i=this,a=function(e){clearTimeout(i.timer),i.timer=setTimeout(function(){t[0]&&(t[0].focus(),e===!0||t.is(":focus")||a(!0))},i.popover.isVisible?99:360)};this.popover.activateElement(t),a()}},n._actions={changeInput:function(e,t,i){i.options.noChangeDismiss||n._actions.cancel(e,t,i),i.setChange(e)},cancel:function(e,t,n){n.options.inlinePicker||(t.stopOpen=!0,n.element.getShadowFocusElement().focus(),setTimeout(function(){t.stopOpen=!1},9),t.hide())}},n.commonInit=function(t,n){var a;n.isDirty=!0,n.element.on("updatepickercontent pickerchange",function(){a=!1}),t.options.inlinePicker||n.contentElement.on({keydown:function(i){if(9==i.keyCode){a||(a=e('input:not(:disabled), [tabindex="0"]:not(:disabled)',this).filter(":visible"));var r=a.index(i.target);if(i.shiftKey&&0>=r)return a.last().focus(),!1;if(!i.shiftKey&&r>=a.length-1)return a.first().focus(),!1}else if(27==i.keyCode)return t.element.getShadowFocusElement().focus(),n.hide(),!1}}),t._propertyChange=function(){var e,i=function(){n.isVisible&&n.element.triggerHandler("updatepickercontent")};return function(a){("value"!=a||t.options.inlinePicker)&&(n.isDirty=!0,n.isVisible&&(clearTimeout(e),e=setTimeout(i,9)))}}(),n.activeElement=e([]),n.activateElement=function(t){t=e(t),t[0]!=n.activeElement[0]&&(n.activeElement.removeClass("ws-focus"),t.addClass("ws-focus")),n.activeElement=t},n.element.on({wspopoverbeforeshow:function(){t.element.triggerHandler("wsupdatevalue"),n.element.triggerHandler("updatepickercontent")}}),e(t.orig).on("remove",function(n){n.originalEvent||e(i).off("wslocalechange",t._propertyChange)})},n._common=function(i){var r=i.options,o=t.objectCreate(r.inlinePicker?t.inlinePopover:t.wsPopover,{},{prepareFor:r.inlinePicker?i.buttonWrapper:i.element,position:r.widgetPosition}),s=e('<button type="button" class="ws-popover-opener"><span /></button>').appendTo(i.buttonWrapper),l=function(){(n[i.type].showPickerContent||n.showPickerContent)(i,o)},c=function(){var e=a(i.type,"DOM");r.disabled||r.readonly||!r.inlinePicker&&o.isVisible||(t.ready(e,l),o.show(i.element))},p=function(){(r.inlinePicker||o.isVisible)&&o.activeElement&&(o.openedByFocus=!1,o.activeElement.focus()),c()};r.containerElements.push(o.element[0]),"color"!=i.type&&(r.yearButtons&&(r.startView=2),r.startView||(r.startView=0),"time"==i.type&&(r.minView=3,r.startView=3),r.minView||(r.minView=0),r.startView<r.minView&&(r.startView=r.minView,t.warn("wrong config for minView/startView.")),r.size||(r.size=1)),o.element.addClass(i.type+"-popover input-picker").attr({role:"application"}).on({wspopoverhide:function(){o.openedByFocus=!1
},focusin:function(e){o.activateElement&&(o.openedByFocus=!1,o.activateElement(e.target))},focusout:function(){o.activeElement&&o.activeElement.removeClass("ws-focus"),r.inlinePicker&&(o.openedByFocus=!0)}}),m(o.element.children("div.ws-po-outerbox").attr({role:"group"}),r.labels,!0),m(s,r.labels,!0),null!=r.tabindex&&s.attr({tabindex:r.tabindex}),r.disabled&&s.prop({disabled:!0}),s.on({click:p}),r.inlinePicker?o.openedByFocus=!0:(s.on({mousedown:function(){u.apply(this,arguments),o.preventBlur()},focus:function(){o.preventBlur()}}),function(){var e=!1,t=function(){e=!1};i.inputElements.on({keydown:function(e){40==e.keyCode&&e.altKey&&p()},focus:function(){!o.stopOpen&&(r.buttonOnly||r.openOnFocus||e&&r.openOnMouseFocus)?(o.openedByFocus=r.buttonOnly?!1:!r.noInput,c()):o.preventBlur()},mousedown:function(){e=!0,setTimeout(t,9),r.buttonOnly&&o.isVisible&&o.activeElement&&(o.openedByFocus=!1,setTimeout(function(){o.openedByFocus=!1,o.activeElement.focus()},4)),i.element.is(":focus")&&(o.openedByFocus=r.buttonOnly?!1:!r.noInput,c()),o.preventBlur()}})}()),i.popover=o,i.opener=s,e(i.orig).on("remove",function(e){e.originalEvent||setTimeout(function(){s.remove(),o.element.remove()},4)}),r.inlinePicker&&c(),a(i.type,"WINDOWLOAD")},n.month=n._common,n.date=n._common,n.time=n._common,n["datetime-local"]=n._common,n.color=function(t){var i=n._common.apply(this,arguments),a=e(t.orig).data("alphacontrol"),r=t.opener.prepend('<span class="ws-color-indicator-bg"><span class="ws-color-indicator" /></span>').find(".ws-color-indicator"),o=function(){r.css({backgroundColor:e.prop(this,"value")||"#000"})},s=function(){var e,n=function(){try{var e=t.alpha.prop("valueAsNumber")/(t.alpha.prop("max")||1);isNaN(e)||r.css({opacity:e})}catch(n){}};return function(t){clearTimeout(e),e=setTimeout(n,t&&"change"!=t.type?40:4)}}();return t.alpha=a?e("#"+a):e([]),e(t.orig).on("wsupdatevalue change",o).each(o),t.alpha.on("wsupdatevalue change input",s).each(s),i},t.picker=n}(),function(){var n,a,o=Modernizr.inputtypes,s={},l={disabled:1,required:1,readonly:1},c=["disabled","readonly","value","defaultValue","min","max","step","title","required","placeholder"],p=["data-placeholder","tabindex"];if(e.each(c.concat(p),function(e,i){var a=i.replace(/^data\-/,"");t.onNodeNamesPropertyModify("input",i,function(e,i){if(!n){var r=t.data(this,"shadowData");r&&r.data&&r.nativeElement===this&&r.data[a]&&(l[a]?r.data[a](e,i):r.data[a](e))}})}),r.replaceUI&&"valueAsNumber"in i.createElement("input")){var d=function(){t.data(this,"hasShadow")&&e.prop(this,"value",e.prop(this,"value"))};t.onNodeNamesPropertyModify("input","valueAsNumber",d),t.onNodeNamesPropertyModify("input","valueAsDate",d),e.each({stepUp:1,stepDown:-1},function(e){var n=t.defineNodeNameProperty("input",e,{prop:{value:function(){var e;return n.prop&&n.prop._supvalue&&(e=n.prop._supvalue.apply(this,arguments),d.apply(this,arguments)),e}}})})}var v=function(){return function(t,n){s[t]=n,n.attrs=e.merge([],p,n.attrs),n.props=e.merge([],c,n.props)}}(),g=function(){return"none"!=e.css(this,"display")},y=function(t){var n,i=function(){e(t.orig).removeClass("ws-important-hide"),e.style(t.orig,"display","");var i,a,r,o=.8;(!n||t.orig.offsetWidth)&&(i=t.buttonWrapper&&t.buttonWrapper.filter(g).length,a=e.css(t.orig,"marginRight"),t.element.css({marginLeft:e.css(t.orig,"marginLeft"),marginRight:i?0:a}),i&&(r=parseInt(t.buttonWrapper.css("marginLeft"),10)||0,t.element.css({paddingRight:""}),0>r?(a=(parseInt(a,10)||0)+-1*(t.buttonWrapper.outerWidth()+r),t.buttonWrapper.css("marginRight",a),t.element.css({paddingRight:""}).css({paddingRight:(parseInt(t.element.css("paddingRight"),10)||0)+t.buttonWrapper.outerWidth()})):(t.buttonWrapper.css("marginRight",a),o=t.buttonWrapper.outerWidth(!0)+o)),t.element.outerWidth(e(t.orig).outerWidth()-o)),n=!0,e(t.orig).addClass("ws-important-hide")};t.element.onWSOff("updateshadowdom",i,!0)},b=function(){var i,o,l,h,d,f=e.prop(this,"type");if(s[f]&&t.implement(this,"inputwidgets")){for(l={},h=f,d=e(this).jProp("labels"),o=e.extend({},r.widgets,r[f],e(e.prop(this,"form")).data(f)||{},e(this).data(f)||{},{orig:this,type:f,labels:d,options:{},input:function(e){o._change(e,"input")},change:function(e){o._change(e,"change")},_change:function(t,i){n=!0,e.prop(o.orig,"value",t),n=!1,i&&e(o.orig).trigger(i)},containerElements:[]}),i=0;c.length>i;i++)o[c[i]]=e.prop(this,c[i]);for(i=0;p.length>i;i++)h=p[i].replace(/^data\-/,""),"placeholder"!=h&&o[h]||(o[h]=e.attr(this,p[i])||o[h]);o.monthSelect&&(o.onlyMonthDigits=!0),o.onlyMonthDigits&&(o.formatMonthNames="monthDigits"),l.shim=s[f]._create(o),t.addShadowDom(this,l.shim.element,{data:l.shim||{}}),l.shim.options.containerElements.push(l.shim.element[0]),m(e(this).getShadowFocusElement(),d),e(this).on("change",function(){n||l.shim.value(e.prop(this,"value"))}),function(){var t,n={focusin:!0,focus:!0},i=!1,a=!1;e(l.shim.options.containerElements).on({"focusin focus focusout blur":function(r){r.stopImmediatePropagation(),a=n[r.type],clearTimeout(t),t=setTimeout(function(){a!=i&&(i=a,e(o.orig).triggerHandler(a?"focus":"blur"),e(o.orig).trigger(a?"focusin":"focusout")),i=a},0)}})}(),l.shim.element.on("change input",u),Modernizr.formvalidation&&e(o.orig).on("firstinvalid",function(n){(t.fromSubmit||!a)&&e(o.orig).off("invalid.replacedwidgetbubble").on("invalid.replacedwidgetbubble",function(i){n.isInvalidUIPrevented()||i.isDefaultPrevented()||(t.validityAlert.showFor(n.target),n.preventDefault(),i.preventDefault()),e(o.orig).off("invalid.replacedwidgetbubble")})}),l.shim.buttonWrapper&&l.shim.buttonWrapper.filter(g).length&&l.shim.element.addClass("has-input-buttons"),l.shim.element.addClass(e.prop(this,"className")),o.calculateWidth?y(l.shim):e(this).addClass("ws-important-hide")}};Modernizr.formvalidation&&["input","form"].forEach(function(e){var n=t.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){a=!0;var e=n.prop._supvalue.apply(this,arguments);return a=!1,e}}})});var w={};r.replaceUI&&(e.isPlainObject(r.replaceUI)?e.extend(w,r.replaceUI):e.extend(w,{range:1,number:1,time:1,month:1,date:1,color:1,"datetime-local":1})),o.number&&-1==navigator.userAgent.indexOf("Touch")&&(/MSIE 1[0|1]\.\d/.test(navigator.userAgent)||/Trident\/7\.0/.test(navigator.userAgent))&&(w.number=1),(!o.range||w.range)&&v("range",{_create:function(t){var n=e("<span />").insertAfter(t.orig).rangeUI(t).data("rangeUi");return n}}),["number","time","month","date","color","datetime-local"].forEach(function(n){(!o[n]||w[n])&&v(n,{_create:function(i){i.monthSelect&&(i.splitInput=!0),i.splitInput&&!h[n]&&(t.warn("splitInput not supported for "+n),i.splitInput=!1);var a=i.splitInput?'<span class="ws-'+n+' ws-input" role="group"></span>':'<input class="ws-'+n+'" type="text" />',r=e(a).insertAfter(i.orig);return r=f[n]?r.spinbtnUI(i).data("wsWidget"+n):r.wsBaseWidget(i).data("wsWidget"+n),t.picker&&t.picker[n]&&t.picker[n](r),r.buttonWrapper.addClass("input-button-size-"+r.buttonWrapper.children().filter(g).length),r}})}),t.addReady(function(t,n){e("input",t).add(n.filter("input")).each(b)})}()});