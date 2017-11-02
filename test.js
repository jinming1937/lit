($atom.loaderFn=function(){function t(t,e){return function n(o){var r=t[o];if(!r)return void(e?console.warn("无法找到模块'"+e+"'的第"+o+"个内部模块"):console.warn("无法找到模块'"+o+"'"));var a;return r.isInitialized||(t[o]=a={exports:{},isInitialized:!0},r(n,a.exports,a)),(a||r).exports}}function e(t){if(!u[t]){var e=t.replace($atom.config.base,"").split(",");u[t]=function(){return e.shift()}}}function n(t){t.forEach(function(t){i[t]=!0}),t=t.sort();var e=$atom.config.base+t.join(",");d(e)}function o(t){var e=[];return t.forEach(function(t){$atom.$map[t].split(",").forEach(function(t){-1===e.indexOf(t)&&e.push(t)})}),e}if(!$atom.require){$atom.config.base&&/^\/\//.test($atom.config.base)&&($atom.config.base=location.protocol+$atom.config.base),$atom.config.assetsPath&&/^\/\//.test($atom.config.assetsPath)&&($atom.config.assetsPath=location.protocol+$atom.config.assetsPath);var r={},a={},i={},c=[],f=t(r),u={};$atom.define=function(n,o,s,d){e(o);var m=u[o]();"raw"!==n&&(d||l.set(m,{modId:n,factory:s}),r[n]=function(e,o,r){var a=s(e,$atom.config.assetsPath||$atom.config.base);a instanceof Array?r.exports=t(a,n)(0):r.exports=a},a[m]=!0,d||(delete i[m],c=c.filter(function(t){return t.abbrs=t.abbrs.filter(function(t){return!a[t]}),!!t.abbrs.length||(t.callback(f),!1)})))},f.async=function(t,e){t=t.filter(function(t){return!r[t]});var u=o(t),s=[];u=u.filter(function(t){if(a[t])return!1;if(i[t])return s.push(t),!1;var e=l.get(t);return!e||($atom.define(e.modId,t,e.factory,!0),!1)});var d=s.concat(u);d.length?c.push({abbrs:d,callback:e}):setTimeout(function(){e(f)},1),u.length&&n(u)},$atom.require=f,f.ensure=f.async,window.define=$atom.define,define.cmd=!0;var s=$atom.storePrefix||"$atom:";if($atom.loaderAbbr)try{localStorage.setItem($atom.loaderStoreKey||s+"$loader",JSON.stringify({abbr:$atom.loaderAbbr,factory:$atom.loaderFn.toString()}))}catch(t){console.error(t)}var l=function(){function t(t){try{return new Function("return "+t.replace(/^\s+|\s+$/g,""))()}catch(t){return null}}var e={get:function(t){return localStorage.getItem(s+t)},set:function(t,e){localStorage.setItem(s+t,e)},remove:function(t){localStorage.removeItem(s+t)}},n=function(){function t(){var t=e.get(r);return t&&(t=JSON.parse(t))?t:{}}function n(t){e.set(r,JSON.stringify(t))}function o(){return(new Date-i)/a|0}var r="mod-visit-hash",a=864e5,i=new Date(2017,6,1),c=null;return{update:function(e){c||(c=t()),c[e]=o(),n(c)},delete:function(e){c||(c=t()),delete c[id],n(c)},clear:function(r){c||(c=t()),r=o()-r;for(var a in c)c[a]<r&&(delete c[a],e.remove(a));n(c)}}}(),o=function(){function t(){var t=e.get(o);return t&&(t=JSON.parse(t))?t:{}}function n(t){e.set(o,JSON.stringify(t))}var o="mod-abbr-hash",r=null;return{update:function(o,a){r||(r=t());var i=r[o];i?i!==a&&(e.remove(i),r[o]=a,n(r)):(r[o]=a,n(r))}}}();return setTimeout(function(){n.clear(30)},5e3),{get:function(o){try{var r=e.get(o);if(r){try{r=JSON.parse(r)}catch(t){r=null}if(r&&(r.factory=t(r.factory),r.factory))return n.update(o),r;e.remove(o),n.delete(o)}}catch(t){console.error(t)}},set:function(t,r){try{r.factory=r.factory.toString(),e.set(t,JSON.stringify(r)),n.update(t),o.update(r.modId,t)}catch(t){console.error(t)}}}}(),d=function(t,e){function n(){o.onload=o.onerror=null,document.head.removeChild(o),o=null}var o=document.createElement("script");o.onload=n,o.onerror=function(){console.error(t+" load fail"),n(),void 0===e&&(e=3),e-- >0&&d(t,e)},o.crossorigin="anonymous",o.async=!0,o.src=t,document.head.appendChild(o)}}})(),define("raw",document.currentScript.src);define("hotelfx@1.1.0/src/js/calendar.js",document.currentScript.src,function(e,a){return[function(a,t,n){n.exports=function(e,a){$.extend($.fn,{calendar:function(a){a=$.extend({mindate:slark.getTimezoneDate(new Date(1970,0,1)),maxdate:slark.getTimezoneDate(new Date(2050,12,31)),text:"出发",startText:"开始",endText:"结束",isDouble:!1,isDeepNight:!1,tag:{week:["日","一","二","三","四","五","六"]},eventCallBack:function(e){},beforeSelected:function(e){return!0},festivaltag:{"1-1":["元旦"],"2-14":["情人节"],"3-8":["妇女节"],"5-1":["劳动节"],"6-1":["儿童节"],"7-1":["建党"],"8-1":["建军"],"9-10":["教师节"],"10-1":["国庆"],"10-31":["万圣节"],"12-24":["平安夜"],"12-25":["圣诞节"]},cnfestivaltag:{"2016-2-7":["除夕"],"2016-2-8":["春节"],"2016-2-22":["元宵节"],"2016-4-4":["清明"],"2016-5-1":["劳动节"],"2016-6-9":["端午节"],"2016-6-19":["父亲节"],"2016-8-9":["七夕"],"2016-8-17":["中元节"],"2016-9-15":["中秋节"],"2016-10-9":["重阳节"],"2016-10-31":["万圣节"],"2016-11-24":["感恩节"],"2017-1-5":["腊八"],"2017-1-20":["小年"],"2017-1-27":["除夕"],"2017-1-28":["春节"],"2017-2-11":["元宵节"],"2017-4-4":["清明节"],"2017-5-14":["母亲节"],"2017-5-30":["端午节"],"2017-6-18":["父亲节"],"2017-8-28":["七夕"],"2017-9-5":["中元节"],"2017-10-4":["中秋节"],"2017-10-28":["重阳节"],"2017-11-23":["感恩节"],"2018-1-24":["腊八"],"2018-2-8":["小年"],"2018-2-15":["除夕"],"2018-2-16":["春节"],"2018-3-2":["元宵节"]},holidaytag:{"2016-1-1":["休"],"2016-1-2":["休"],"2016-1-3":["休"],"2016-2-6":["班"],"2016-2-7":["休"],"2016-2-8":["休"],"2016-2-9":["休"],"2016-2-10":["休"],"2016-2-11":["休"],"2016-2-12":["休"],"2016-2-13":["休"],"2016-2-14":["班"],"2016-4-2":["休"],"2016-4-3":["休"],"2016-4-4":["休"],"2016-4-30":["休"],"2016-5-1":["休"],"2016-5-2":["休"],"2016-6-9":["休"],"2016-6-10":["休"],"2016-6-11":["休"],"2016-6-12":["班"],"2016-9-15":["休"],"2016-9-16":["休"],"2016-9-17":["休"],"2016-9-18":["班"],"2016-10-1":["休"],"2016-10-2":["休"],"2016-10-3":["休"],"2016-10-4":["休"],"2016-10-5":["休"],"2016-10-6":["休"],"2016-10-7":["休"],"2016-10-8":["班"],"2016-10-9":["班"],"2016-12-31":["休"],"2017-1-1":["休"],"2017-1-2":["休"],"2017-1-22":["班"],"2017-1-27":["休"],"2017-1-28":["休"],"2017-1-29":["休"],"2017-1-30":["休"],"2017-1-31":["休"],"2017-2-1":["休"],"2017-2-2":["休"],"2017-2-4":["班"],"2017-4-1":["班"],"2017-4-2":["休"],"2017-4-3":["休"],"2017-4-4":["休"],"2017-4-29":["休"],"2017-4-30":["休"],"2017-5-1":["休"],"2017-5-27":["班"],"2017-5-28":["休"],"2017-5-29":["休"],"2017-5-30":["休"],"2017-9-30":["班"],"2017-10-1":["休"],"2017-10-2":["休"],"2017-10-3":["休"],"2017-10-4":["休"],"2017-10-5":["休"],"2017-10-6":["休"],"2017-10-7":["休"],"2017-10-8":["休"]}},a);var t,n,s=this,d={el:"",data:""},l={el:"",data:""},i={el:"",data:""},r={el:"",data:""},o=!1,c=!0,p=!0,f=null;n=$("<div>").addClass("cld page-plugin"),e.getActiveLayer()?n.appendTo(e.getActiveLayer()):document.body.appendChild(n[0]);var v=function(){n.html("");var e=a.maxdate.diff(a.mindate,2),s=[],d={header:"",left:"",right:""};d.header=$('<header class="bar bar-nav"><h1 class="title">'+a.text+"日期</h1></header>").appendTo(n),d.left=$('<a class="icon icon-back pull-left hide-cln"></a>').appendTo(d.header),d.right=$("<a></a>").addClass("cld-title-year pull-right icon").appendTo(d.header),t=$('<div class="page-content">').appendTo(n),d.left.bind("click",function(){f.hide()}),u();for(var l=0;l<=e;l++){var i=slark.getTimezoneDate(new Date(a.mindate.format("yyyy-MM")+"-01")),r=i.add(l,2),o=r.getDay(),c=r.daysInMonth(),v=0,g={};g.wrap=$("<section class='cld-item'>"),g.date=$("<h1 class='cld-titleDate'>"+r.format("yyyy年MM月")+"</h1>").appendTo(g.wrap),g.days=$('<ul class="cld-day">').appendTo(g.wrap);for(var y=0;y<42;y++)if(y>=o&&v<c){var m=r.add(v,3);v++;var T=$('<li><span class="date-elem">'+v+"</span></li>").attr("data-day",m.format()).appendTo(g.days);h(T,m,v),p&&T.addClass("disabled")}else{if(y>=28&&y%7==0)break;$("<li>").appendTo(g.days)}s.push(g)}for(l=0;l<s.length;l++)s[l].wrap.appendTo(t);for(var D=$('<ul class="cld-title bar">').appendTo(n),b=0;b<a.tag.week.length;b++){$("<li>").text(a.tag.week[b]).appendTo(D)}},h=function(e,t,n,s){var d=slark.getTimezoneDate(new Date),l=a.festivaltag[[t.getMonth()+1,t.getDate()].join("-")],i=a.cnfestivaltag[[t.getFullYear(),t.getMonth()+1,t.getDate()].join("-")],r=a.holidaytag[[t.getFullYear(),t.getMonth()+1,t.getDate()].join("-")];if(a.isDeepNight&&t.format("yyyy-MM-dd")===d.add(-1,3).format("yyyy-MM-dd")&&e.html('<div><span class="festival">'+n+'</span><span class="festivalText">凌晨</span></div>'),t.equal(d,3)&&e.html('<div><span class="festival">'+n+'</span><span class="festivalText">今天</span></div>'),t.equal(a.mindate,3)?p=!1:t.equal(a.maxdate.add(1,3),3)&&(p=!0),l||i){var o;l&&(o=l),i&&(o=i),e.html('<div><span class="festival">'+n+'</span><span class="festivalText">'+o+"</span></div>")}r&&("休"==r?(e.append('<b class="holiday">'+r+"</b>"),e.addClass("holiday")):(e.append('<b class="work">'+r+"</b>"),e.addClass("work"))),"function"==typeof s&&s()},u=function(){"function"==typeof a.eventCallBack&&(a.isDouble?t.on("click",".cld-day li[data-day]",y):t.on("click",".cld-day li[data-day]",g)),$(s).on("click",function(){f.show()})},g=function(){var e=slark.getTimezoneDate($(this).attr("data-day"));return!$(this).hasClass("disabled")&&(!(a.beforeSelected&&"function"==typeof a.beforeSelected&&!a.beforeSelected(e))&&(m($(this),new Date(e).getDate()),d.el=$(this),d.data=e,f.hide(),void a.eventCallBack(e)))},y=function(){if($(this).hasClass("disabled")||!c)return!1;var e=$(this).attr("data-day"),t=!!a.beforeSelected&&"function"==typeof a.beforeSelected;if(l.data==e&&o)return b(),void(o=!1);if(!o||new Date(e)<new Date(l.data)){if(t&&!a.beforeSelected(e,null,o))return!1;b(),T($(this),slark.getTimezoneDate(e).getDate(),"start"),o=!0,l.el=$(this),l.data=e,$(n).find(".cld-item").removeClass("selected"),$(this).parents("section").addClass("selected")}else{if(t&&!a.beforeSelected(l.data,e,o))return!1;T($(this),slark.getTimezoneDate(e).getDate(),"end"),i.el=$(this),i.data=e,D(),o=!1,c=!1,setTimeout(function(){f.hide(),slark.setCookie("indate",slark.getTimezoneDate(l.data).format()),slark.setCookie("outdate",slark.getTimezoneDate(i.data).format()),a.eventCallBack(l.data,i.data),c=!0},200)}},m=function(e,t){""!==r.el&&(r.el.hide(),r.el.parent().removeClass("active").html(r.data),r.el.remove());var n=$("<div>"),s=e.find("b");$('<span class="active">'+t+"</span>").appendTo(n),$('<span class="activeText">'+a.text+"</span>").appendTo(n),r.data=$(e).html(),r.el=n,e.html(""),e.addClass("active"),e.append(s),n.appendTo(e)},T=function(e,t,s){var d=$("<div>"),l=e.find("b");"start"==s?$('<div class="undo-select"><div class="icon-cross"></div></div>').appendTo(d):$(".undo-select",n).remove(),$('<span class="active">'+t+"</span>").appendTo(d),"start"==s?$('<span class="activeText">'+a.startText+"</span>").appendTo(d):$('<span class="activeText">'+a.endText+"</span>").appendTo(d),e.attr("text",e.html()),e.html(""),e.addClass("active"),e.append(l),d.appendTo(e)},D=function(){var e=l.el.next(),a=i.el.attr("data-day");for(0!=e.length&&e.attr("data-day")||(e=l.el.parent().parent().next().find("li[data-day]").first());e.attr("data-day")!=a;){e.addClass("active-during");var t=e.next();e=0!=t.length&&t.attr("data-day")?t:e.parent().parent().next().find("li[data-day]").first()}},b=function(){var e=$(".cld-day li.active",n);e.each(function(){var e=$(this);e.html(e.attr("text"))}),e.removeClass("active"),$(".cld-day li.active-during",n).removeClass("active-during"),l.el="",l.data="",i.el="",i.data=""},k=function(){e.isLowDevice&&n.siblings(".page-content").show(),x.hasClass("android")&&x.css("overflow",""),o=!1},x=$("html"),w=function(){if("function"==typeof a.selectDate)if(a.isDouble){var s=a.selectDate(),d=slark.getTimezoneDate(s[0]).format(),r=slark.getTimezoneDate(s[1]).format();if(new Date(d)>new Date(r))return;var o=t.find("[data-day='"+d+"']"),c=parseInt(e.removeZeroOfDate(d.substr(-2))),p=t.find("[data-day='"+r+"']"),f=parseInt(e.removeZeroOfDate(r.substr(-2)));b(),o.length&&T(o,c,"start"),l.el=o,l.data=d,p.length&&T(p,f,"end"),i.el=p,i.data=r,o.length&&p.length&&D()}else{var v=a.selectDate(),h=t.find("[data-day='"+v+"']"),u=parseInt(e.removeZeroOfDate(v.substr(-2)));h.length&&m(h,u)}x.hasClass("android")&&x.css("overflow","hidden"),e.isLowDevice&&(n.siblings(".page-content").hide(),$("body").scrollTop(0))};return v(),f={page:n,option:{showType:"transition",transitionClass:"cld-active"},setMinDate:function(e){a.mindate=e,v()},beforeShow:w,afterHide:k}}})}(e("hotelfx@1.1.0/src/fw/core.js"),e("hotelfx@1.1.0/src/js/PluginManager.js"))}]});define("elong-xlog@0.1/dist/index.js",document.currentScript.src,function(e,n){return[function(e,n,t){!function(){function e(){try{var e=localStorage.getItem("__tjcount")||0;return localStorage.setItem("__tjcount",1*e+1),e}catch(e){return 0}}function n(){var e=+new Date;return"xxxyxxxy".replace(/[xy]/g,function(n){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==n?t:7&t|8).toString(16)})}function o(){return g?1:v?2:m?3:l?4:5}function r(){return h.match(/android/)?I?8:3:h.match(/iphone/)?1:h.match(/ipad/)?2:h.match(/macintosh/)?7:h.match(/windows/)?-1!==h.indexOf("Touch")?I?9:5:7:99}function i(){var e,n={visitType:o(),appType:r(),screen:[screen.width,screen.height,p].join("*"),dataVersion:k};return(e=document.cookie.match(/SessionGuid=([\w-]*)/))&&(n.sessionGuid=e[1]),(e=document.cookie.match(/CookieGuid=([\w-]*)/))&&(n.cookieGuid=e[1]),v&&(n.kernel=window.__wxjs_is_wkwebview?"WKWebview":"UIWebview"),n}function a(e){if(navigator.connection)e(navigator.connection.type);else{if(v)try{var n;if(n=h.match(/nettype\/([a-zA-Z0-9]+)\s/))return void e(n[1]);if("undefined"!=typeof wx)return void wx.ready(function(){wx.checkJsApi({jsApiList:["getNetworkType"],success:function(n){wx.getNetworkType({success:function(n){e(n.networkType)},fail:function(n){console.error(n),e("")}})},fail:function(n){console.error(n),e("")}})})}catch(e){console.error(e)}e("")}}function s(e){return Object.assign({url:location.href,referrer:document.referrer,pvId:n()},e)}function c(e){if(!window.performance||!window.performance.timing)return console.error("当前浏览器不支持window.performance.timing"),void e({});var n;if(!performance.timing.loadEventEnd&&(n=O-new Date)>0)setTimeout(function(){c(e)},n);else{var t=performance.timing.navigationStart||performance.timing.fetchStart||O,o={start:t};j.forEach(function(e){var n=performance.timing[e];"number"==typeof n?n-=t:n=-1,o[e]=n}),e(o)}}function u(){for(;D<S&&L.length;){var e=new Image,n=L.shift();D++,e.onerror=e.onabort=function(){T.error.add(n),e.onload()},e.onload=function(){D--,T.queue.remove(n),e=e.onload=e.onerror=e.onabort=null,u()},e.src=x+"?"+f(n),E&&console.log(n)}}function f(e){var n,t=[];for(var o in e)e.hasOwnProperty(o)&&(n=e[o],-1!==P.indexOf(o)&&"string"==typeof n&&(n=n.toLowerCase()),void 0!==n&&null!==n||(n=""),t.push((q[o]||o)+"="+encodeURIComponent(n)));return t.join("&")}function d(e,n){this.url=e,n=Object.assign({useDefaultPerformance:!0},n),this.baseInfo=i(),this.baseInfo.appId="wxqbh5",this.baseInfo.platform="";var t={};Object.defineProperty(this,"pageInfo",{get:function(){var e=this.url||location.hostname+location.pathname+location.search;return t[e]||(t[e]=s()),t[e]},set:function(e){var n=this.url||location.hostname+location.pathname+location.search;t[n]=e}});var o={};Object.defineProperty(this,"businessInfo",{get:function(){var e=this.url||location.hostname+location.pathname;return o[e]?o[e]:(console.error("页面"+e+"的businessInfo未指定"),null)},set:function(e){var n=this.url||location.hostname+location.pathname;o[n]=e}}),this._readyHash={},Object.defineProperty(this,"ready",{get:function(){var e=this.url||location.hostname+location.pathname;return this._readyHash[e]?this._readyHash[e]:(console.error("页面"+e+"未updatePageInfo"),{fire:function(){},on:function(){}})},set:function(e){var n=this.url||location.hostname+location.pathname;this._readyHash[n]=e}}),this.updatePageInfo();var r=this;n.useDefaultPerformance&&c(function(e){r.sendPerformanceInfo(e)})}"function"!=typeof Object.assign&&(Object.assign=function(e){if(e){for(var n=1,t=arguments.length;n<t;n++){var o=arguments[n];if(o)for(var r in o)o.hasOwnProperty(r)&&(e[r]=o[r])}return e}return{}});var h=navigator.userAgent.toLowerCase(),p=void 0===window.devicePixelRatio?1:window.devicePixelRatio,l=window.mqq&&"0"!=mqq.QQVersion,m=h.match(/qq/i),g=h.match(/ewiphone/i)||h.match(/ewandroid/i),v=h.match(/micromessenger/i),w=screen.width/document.body.clientWidth!=1&&screen.height/document.body.clientHeight!=1,y=w?screen.width/p:screen.width,b=w?screen.height/p:screen.height,I=y>=600&&b>=600,x="//xlog.elong.com/t.gif",k="1.1",S=2,E=!0,j=["fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","requestStart","responseStart","responseEnd","domLoading","domContentLoadedEventEnd","domComplete","loadEventEnd"],O=+new Date+500,_={get:function(e){try{var n=localStorage.getItem(e);return n&&(n=JSON.parse(n)),n}catch(e){return null}},set:function(e,n){try{n=JSON.stringify(n),localStorage.setItem(e,n)}catch(e){}}},T=function(e){function n(e){o[e]||(o[e]=_.get(t[e])||[])}var t={},o={},r={};return e.forEach(function(e){t[e]="tj-send-"+e,o[e]=null,r[e]={add:function(r){n(e),o[e].push(r),_.set(t[e],o[e])},remove:function(n){if(o[e]){var r=o[e].indexOf(n);-1!==r&&(o[e].splice(r,1),_.set(t[e],o[e]))}},get:function(){return n(e),o[e]}}}),r}(["waiting","queue","error"]),q={visitType:"vt",appType:"appt",screen:"bs",dataVersion:"dataVer",sessionGuid:"sid",cookieGuid:"cid",kernel:"kernel",network:"nt",url:"url",params:"par",referrer:"rf",pvId:"pvid",appId:"app_id",platform:"platform",channel:"ch",pageType:"pt",orderfrom:"p1",cardno:"cardno",aid:"aid",aname:"aname",start:"p80",fetchStart:"p88",domainLookupStart:"p89",domainLookupEnd:"p90",connectStart:"p91",connectEnd:"p92",requestStart:"p93",responseStart:"p94",responseEnd:"p95",domLoading:"p96",domContentLoadedEventEnd:"p97",domComplete:"p98",loadEventEnd:"p99"},P=["appId","channel","pageType","key"],L=[],D=0,C=function(n){n.count=e(),n._nd=+new Date,T.queue.add(n),L.push(n),u()};T.error.get().forEach(function(e){T.queue.add(e),T.error.remove(e)}),T.waiting.get().forEach(function(e){T.queue.add(e),T.waiting.remove(e)});var G=T.queue.get();setTimeout(function(){L=L.concat(G),u()},1e3);var H=function(e,n){function t(n){return n.every(function(n){return-1===e.indexOf(n)})}var o=[],r={};return{fire:function(i,a){var s=e.indexOf(i);-1!==s&&(r[i]=a,e.splice(s,1),o=o.filter(function(e){if(t(e.names)){try{e.listener.call(n,1===e.names.length?r[e.names[0]]:null)}catch(e){console.error(e)}return!1}return!0}))},on:function(i,a){if("string"==typeof i?i=[i]:e instanceof Array||(a=i,i=e),t(i))try{a.call(n,1===i.length?r[i[0]]:null)}catch(e){console.error(e)}else o.push({names:i,listener:a})}}};d.prototype={constructor:d,setBusinessInfo:function(e){if(this.businessInfo={},e.channel&&e.pageType){this.businessInfo.channel=e.channel,this.businessInfo.pageType=e.pageType,/^https/.test(location.protocol)&&(this.businessInfo.pageType+="s");var n=this;return["orderfrom","cardno","aid","aname"].forEach(function(t){e[t]&&(n.businessInfo[t]=e[t])}),this.ready.fire("business"),this}console.error("必传字段ch、pt缺失")},sendPerformanceInfo:function(e){return this.ready.fire("performance",e),this._send("timing",e),this},sendFirstScreenTime:function(e){return this.ready.on("performance",function(n){this._send("firstData",{end:+new Date-n.start,ajaxs:JSON.stringify(e)})}),this},sendDiy:function(e,n){return this._send("diy",{key:e,data:JSON.stringify(n||{})}),this},reportError:function(e){console.error("elong-tj/src/error.js未实现"),console.error(e)},updatePageInfo:function(e){this.pageInfo=s(e);var n=["performance","business"];this.baseInfo.network||n.push("network"),this.ready=H(n,this);var t=this.url||location.hostname+location.pathname,o=this;return a(function(e){o.baseInfo.network=e,o._readyHash[t].fire("network")}),this},_send:function(e,n){n=Object.assign({type:e},n,this.baseInfo,this.pageInfo),T.waiting.add(n),this.ready.on(["network","business"],function(){T.waiting.remove(n),C(Object.assign(n,this.baseInfo,this.businessInfo))})}};var N=new d;"function"==typeof define&&define.amd?t.exports=function(){return N}():void 0!==t&&t.exports&&(t.exports=N),window.xlog=N}()}]});define("hotelfx@1.1.0/entry/hotel/js/plugins/wxTitle.js",document.currentScript.src,function(n,e){return[function(n,e,t){function i(n,e,t){return void 0===t?a[n][e]:t}function o(n,e,t,i){var o={};o["__cacheEvent__"+e]=n[e],n[e]=function(){t&&t(this,arguments),o["__cacheEvent__"+e].apply(this,arguments),i&&i(this,arguments)}}var a={h5_wxqbindex:{globalCity:"选择城市",calendar:"选择日期",searchBox:"条件搜索"},h5_list:{calendar:"选择日期",searchBox:"条件搜索"},h5_detail:{calendar:"选择日期",hotelInfo:"酒店信息"},h5_createorder:{addPeople:"选择入住人",redPacketList:"选择红包",addGuide:"返现立减指南",addClause:"返现立减指南",newUser58:"返现立减指南",moreDetail:"取消险规则"},orderdetail:{orderprogress:"订单进度详情",cashBackSchedule:"返现进度"}},r=(navigator.userAgent.toLowerCase().indexOf("like mac os x"),function(n){document.title=n}),c=function(n){if(pageInfo&&("wxhome"===pageInfo.ch||"wxqbh5"===pageInfo.chid)){var e=document.title;!function(n){var t="string"==typeof n?n:n.originalEvent?n.originalEvent.detail:n.detail;for(var c in a[t])!function(n){o(PluginManager.plugins[t][n],"show",function(e,o){setTimeout(function(){r(i(t,n))},0)}),o(PluginManager.plugins[t][n],"hide",function(n){r(e)})}(c)}(n)}};c.bindTitle=function(n,e){var t=document.title;a[n]&&a[n][e]&&(o(PluginManager.plugins[n][e],"show",function(t,o){setTimeout(function(){r(i(n,e))},0)}),o(PluginManager.plugins[n][e],"hide",function(n){r(t)}))},t.exports=c}]});define("elong-xlog-report-error@0.1/dist/index.js",document.currentScript.src,function(r,e){return[function(r,e,t){!function(){function r(r){r=r.replace(/\r\n/g,"\n");for(var e="",t=0;t<r.length;t++){var o=r.charCodeAt(t);o<128?e+=String.fromCharCode(o):o>127&&o<2048?(e+=String.fromCharCode(o>>6|192),e+=String.fromCharCode(63&o|128)):(e+=String.fromCharCode(o>>12|224),e+=String.fromCharCode(o>>6&63|128),e+=String.fromCharCode(63&o|128))}return e}function e(e){var t,n,a,i,s,c,l,f="",g=0;for(e=r(e);g<e.length;)i=(t=e.charCodeAt(g++))>>2,s=(3&t)<<4|(n=e.charCodeAt(g++))>>4,c=(15&n)<<2|(a=e.charCodeAt(g++))>>6,l=63&a,isNaN(n)?c=l=64:isNaN(a)&&(l=64),f=f+o.charAt(i)+o.charAt(s)+o.charAt(c)+o.charAt(l);return f}function t(r,e){var t=new Error(r);if(t.stack){var o=t.stack.split(/\bat\b/);o.splice(1,(e||0)+1),t.stack=o.join("at")}return t}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=function(r){if("object"!=typeof r&&(r=t(r,2)),r instanceof Error){if((r={message:"Error: "+r.message,error:r}).error.stack){var e=((a=r.error.stack.split(/\bat\b/))[1]||"").match(/https?\:\/\/.+\:\d+\:\d+/);e&&(e=e[0].split(":"),r.colno=e.pop(),r.lineno=e.pop(),r.filename=e.join(":"))}}else!r.error&&!r.message||r.error instanceof Error||(r={message:"Error: "+r.error,error:t(r.error||r.message,2),filename:r.filename,lineno:r.lineno,colno:r.colno});var o="",n="",a="",i="";return r.error?(n=(o=(r.message||r.error.message||"").replace(/^\s*Uncaught\b/,"").trim()).slice(0,o.indexOf(":")),o=o.replace(n+":","").trim(),i=r.filename,r.error&&r.error.stack&&(a=r.error.stack.replace(n+":","").replace(o,"").trim().replace(/\n/gi,"").split(/\bat\b/).filter(function(r){return r.trim()}).slice(0,5).map(function(r){return"@"+r}).join(""))):r.target&&(n="HttpError",1===r.target.nodeType?(o=r.target.tagName.toLowerCase()+" request error",i="LINK"===r.target.tagName?r.target.href:"SCRIPT"===r.target.tagName?r.target.src:"IMG"===r.target.tagName?r.target.src:r.target.outerHTML,r.path instanceof Array&&(a="@ "+r.path.filter(function(r){return 1===r.nodeType}).reverse().map(function(r){var e=r.tagName.toLowerCase();return r.id&&(e+="#"+r.id),r.className&&(e+="."+r.className.split(/\s+/).join(".")),e}).join(">")+" ("+(r.target.baseURI||location.href)+")")):(o="http request error",a="")),{message:o,type:n,stack:a,line:r.lineno||-1,col:r.colno||-1,filename:i||""}},a=100;xlog.constructor.prototype.reportError=function(r){if(a--<0)return this;try{r=n(r),this._send("jserror",{errorType:r.type,errorId:e([r.filename,r.line,r.col].join("/")),message:r.message,errorTime:+new Date,stack:r.stack,filename:r.filename,position:[r.line,r.col].join(",")})}catch(r){console.error(r)}return this},window.$error?(window.$error._es instanceof Array&&window.$error._es.forEach(function(r){xlog.reportError(r)}),$error.report=function(r){xlog.reportError(r)}):window.addEventListener("error",function(r){xlog.reportError(r)},!0)}()}]});define("hotelfx@1.1.0/src/js/slideSelector.js",document.currentScript.src,function(e,t){return[function(t,a,i){i.exports=function(e,t){$.extend($.fn,{slideSelector:function(a){var i={TEMPLATE:{ITEM:'<li class="radio-item ${class}" value="${value}"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">${text}</div><div class="check"></div></label></li>',CONTAINERHEAD:'<div class="slide-selector"><header class="bar-nav"><div class="radio-title"><span class="title">${title}</span><span class="cancel">取消</span></div></header><ul class="page-content">',CONTAINERFOOT:'</ul><div class="arrow up left"></div><div class="describe"><span>${describe}</span></div></div>'},option:{showType:"transition",transitionClass:"selector-active",showTransition:!0},page:null,targetElement:null,disableIndex:null,config:a,callback:function(){},ctrlClick:function(){},confirm:function(){},init:function(){var t=this.config,a=this;if(t.data&&0!==t.data.length){t.targetElement&&(this.targetElement=t.targetElement),t.callback&&(this.callback=t.callback),t.confirm&&(this.confirm=t.confirm),t.disableIndex&&(this.disableIndex=t.disableIndex),this.data={},this._value=t.initValue;for(var i=this.TEMPLATE.CONTAINERHEAD.replace("${title}",t.title),s=0;s<t.data.length;s++){var l=this.TEMPLATE.ITEM,n=t.data[s];l=l.replace("${value}",n.value),l=l.replace("${text}",n.text),l=l.replace("${class}",this.disableIndex&&this.disableIndex==s?"disabled-item":""),this.data[(""==n.value?0:n.value)+n.text.trim()]=n,i+=l}i+=this.TEMPLATE.CONTAINERFOOT.replace("${describe}",t.describe?t.describe:"");var d=$(i),c=this.setValue(this);e.getActiveLayer()?d.appendTo(e.getActiveLayer()):d.appendTo("body"),t.initValue&&(d.find('li[value="'+t.initValue.value+'"]').addClass("selected").find(".radio").addClass("selected"),this.callback&&this.callback(t.initValue)),t.describe||d.find(".describe").hide(),this.page=d,$(d).on("click","ul li",c),$("header .cancel",d).on("click",function(){a.hide()})}},beforeShow:function(a){var i=this;if($(e.getActiveLayer()).off("click",".advanced-mask-layer").on("click",".advanced-mask-layer",function(){i.hide()}),e.isPad){if(this.page.hasClass("selector-active"))return this.hide(),!0;var s=(e.getActiveLayer().find(".page-content"),e.getActiveLayer().width()),l=e.getActiveLayer().height(),i=this,n=e.getElementVisibleTop(this.targetElement[0]),d=e.getElementVisibleLeft(this.targetElement[0]);this.targetElement.height();(n+this.targetElement.height()/2)/l>.5?(this.page.find(".arrow").removeClass("up").addClass("down"),this.page.css("top","auto"),this.page.css("bottom",l-n+15+"px")):(this.page.find(".arrow").removeClass("down").addClass("up"),this.page.css("top",n+this.targetElement.height()+15+"px"),this.page.css("bottom","auto")),d+this.targetElement.width()/2/s>.5?(this.page.find(".arrow").removeClass("left").addClass("right"),this.page.css("left","auto"),this.page.css("right",s-(d+this.targetElement.width()/2)-38+"px")):(this.page.find(".arrow").removeClass("right").addClass("left"),this.page.css("right","auto"),this.page.css("left",d-38+"px"))}t.showAdvancedLoad()},afterShow:function(){var t=this.page.find("ul.page-content");e.isPad?t.css("margin-bottom",this.page.find(".describe").height()+"px"):t.css("margin-top",this.page.find(".describe").height()+1+"px")},afterHide:function(){$(e.getActiveLayer()).off("click",".advanced-mask-layer"),t.removeAdvancedLoad(),e.isPad&&(this.page.removeClass("page-transitioning"),this.page.off(e.transitionEnd))},setData:function(e){for(var t="",a=0;a<e.length;a++){var i=this.TEMPLATE.ITEM,s=e[a];i=i.replace("${value}",s.value),i=i.replace("${text}",s.text),i=i.replace("${class}",this.disableIndex&&this.disableIndex==a?"disabled-item":""),this.disableIndex&&this.disableIndex==a&&(i=i.replace("${class}","disabled-item")),this.data[(""==s.value?0:s.value)+s.text.trim()]=s,t+=i}this.page.find("ul").html(t)},isHasValue:function(e){if(!e)return!1;for(var t=0;t<this.config.data.length;t++)if(this.config.data[t]&&this.config.data[t].value==e)return!0;return!1},selectValue:function(e){this.page.find("li").removeClass("selected").find(".radio").removeClass("selected"),this.page.find("li[value='"+e+"']").addClass("selected").find(".radio").addClass("selected")},setSelectValue:function(e){var t=this;t.config.data.forEach(function(a){a.value==e&&t.callback&&t.callback(a)}),this.page.find("li").removeClass("selected").find(".radio").removeClass("selected"),this.page.find("li[value='"+e+"']").addClass("selected").find(".radio").addClass("selected")},setValue:function(e){return function(){var t=$(this);if(!e.disableIndex||e.config.data[e.disableIndex].value!=t.attr("value")){var a=e.data[t.attr("value")+t.text().trim()];e._value=a,t.siblings().removeClass("selected").find(".radio").removeClass("selected"),t.addClass("selected").find(".radio").addClass("selected"),e.hide(),e.callback&&e.callback(a),e.confirm&&e.confirm(a)}}},getValue:function(){return this._value},changeDisable:function(e){this.disableIndex=e||null,this.setData(this.config.data)}};return i.elem=$(this),i.targetElement||(i.targetElement=i.elem),i.elem.on("click",function(e){i.show(e),i.ctrlClick(),i.elem.blur()}),i}})}(e("hotelfx@1.1.0/src/fw/core.js"),e("hotelfx@1.1.0/src/js/PluginManager.js"))}]});define("hotelfx@1.1.0/entry/hotel/js/activity/oldCustomers.js",document.currentScript.src,function(e,t){return[function(t,i,o){var a=e("hotelfx@1.1.0/entry/hotel/js/plugins/newUserHB.js"),r=e("hotelfx@1.1.0/entry/hotel/js/plugins/easyDialimg.js"),n=e("hotelfx@1.1.0/src/js/toast.js"),s=(t(1),{index:function(e){var t=JSON.parse(localStorage.getItem("oldcustomer")||"{}");t.advList=e.advList||[],t.enable=e.enable,!0!==t.indexWinFlag&&e.enable&&(s.showWinInit({tpl:"oldCustomersWinForIndex",jumpLink:t.advList[0]&&t.advList[0].jumpLink||"//m.elong.com/promotion/prizeindex",after:$(".tool-index",e.dom),configForWin:{tjclick:"tjclick",endDate:t.advList[0]&&t.advList[0].endDate?t.advList[0].endDate:""}}),tjMVT.setData({cspot:"olduserprizehomepagepopup",et:"click"}),t.indexWinFlag=!0),localStorage.setItem("oldcustomer",JSON.stringify(t))},indexTipsExec:function(e,t){!1===s.tipsInit({tpl:"oldCustomersTipsForIndex",before:e.before||$(".search",e.dom),pageIndex:0,pageName:"微信首页",pageGroup:"wxIndex",lotteryTipTag:e.lotteryTipTag,lotteryTip:e.lotteryTip})&&t()},listTipsExec:function(e){s.tipsInit({tpl:"oldCustomersTipsForList",before:$(".list-main",e.dom),pageIndex:1,pageName:"列表页",pageGroup:"list"})},detailTipsExec:function(e){s.tipsInit({tpl:"oldCustomersTipsForDetail",before:$(".detail-main .stickys",e.dom),pageIndex:2,pageName:"酒店详情页",pageGroup:"detail"})},createOrderTipsExec:function(e){s.tipsInit({tpl:"oldCustomersTipsForCreateOrder",before:$(".odr_doc .odr_info",e.dom),pageIndex:3,pageName:"订单填写页",pageGroup:"createOrder",disableClick:!0,lotteryTipTag:e.lotteryTipTag,lotteryTip:e.lotteryTip})},findOrderItem:function(e,t){var i={};return e.finishOrderList=e.finishOrderList||[],e.finishOrderList.forEach(function(e,o){e.orderId==t.orderId&&(i=e)}),i},showEasyDialimg:function(e,t){0==$("#promotion-ad-trag").length&&r(e.lotteryBox.orderPopUrl,"",t.dom,function(i){var o=$("#promotion-ad-trag img");t.pageType&&"finishorder"==t.pageType?o.addClass("tjclick").attr("data-tj",'{"cspot":"visitoldprizefloat3click"}'):o.addClass("tjclick").attr("data-tj",'{"cspot":"visitoldprizefloat1click"}'),o.off("click").on("click",function(t){$(".meng").show();var i=e.lotteryBox.amount?e.lotteryBox.amount:$("#promotion-ad-trag").attr("data-amount");i?($(".prize_name_hb").html("<span>"+i+"元</span>红包"),$(".finish_get_gift").show().siblings(".newtop").hide()):$(".before_get_gift").show().siblings(".newtop").hide()})})},finishOrder:function(e){var t=JSON.parse(localStorage.getItem("oldcustomer")||"{}");$.ajax({url:"//xapi.elong.com/order/dandanAwardInfo/",dataType:"json",data:{orderNo:e.orderId},success:function(i){if(!i.errorCode||""==i.errorCode){if(i.lotteryBox&&i.lotteryBox.isPopUp){var o="finishorder"==e.pageType?$(".new_finishorder"):$(".odr_dtl");s.showWinInit({tpl:"oldCustomersWinForFinishOrder",after:o,orderId:e.orderId,jumpLink:"//m.elong.com/promotion/prizeindex/",configForWin:{tjclick:"tjclick"}}),i.lotteryBox.hasChance?(e.pageType&&"finishorder"==e.pageType?$(".meng").show():($(".meng").hide(),s.showEasyDialimg(i,e)),t.enable=!0):($(".meng").hide(),s.showEasyDialimg(i,e),t.enable=!1),$(".close_win_hb").on("click",function(){s.showEasyDialimg(i,e)})}localStorage.setItem("oldcustomer",JSON.stringify(t))}},error:function(){console.log("get bonus error")}})},orderList:function(e){s.adInit({dom:e.dom,pageIndex:5,pageExIndex:1,pageName:"国内酒店订单列表页",pageGroup:"orderList"})},orderDetail:function(e){s.adInit({dom:e.dom,pageIndex:4,pageExIndex:0,pageName:"国内酒店订单详情页",pageGroup:"orderDetail"})},checkCache:function(e){return!0!==e.enable||!e.advList||"Array"!==e.advList.constructor.name||0===e.advList.length||"wxqbh5"!==TJObject.chid},matchAdData:function(e,t){var i={adName:"",picUrl:"",jumpLink:""};return t.advList.forEach(function(t){if(t.adGroup===e.pageName||t.adGroup===e.pageGroup)return i.adName=t.adName,i.picUrl=t.picUrl,i.jumpLink=t.jumpLink,i.lotteryTipTag=t.lotteryTipTag,void(i.lotteryTip=t.lotteryTip)}),i},adInit:function(e){var t=JSON.parse(localStorage.getItem("oldcustomer")||"{}"),i=["visitoldprizefloat1click","visitoldprizefloat2click"];if(!s.checkCache(t)){var o=s.matchAdData(e,t);o.picUrl&&o.jumpLink&&r(o.picUrl,o.jumpLink,e.dom,function(t){t.addClass("tjclick").attr("data-tj",JSON.stringify({cspot:i[e.pageExIndex]}))})}},tipsInit:function(e){var t=JSON.parse(localStorage.getItem("oldcustomer")||"{}"),i=null;if(!s.checkCache(t)){var o=["oldprizetip","oldprizebanner","oldprizetip1"],r=["visitoldprizetipclick","visitoldprizebannerclick","visitoldprizetip1click"],n=["visitoldprizetipcloseclick","visitoldprizebannercloseclick","visitoldprizetipclose1click"];tjMVT.setData({cspot:o[e.pageIndex],et:"click"});var l=s.matchAdData(e,t),c=e.lotteryTipTag||l.lotteryTipTag||"",d=e.lotteryTip||l.lotteryTip||l.adName||"";l.adName&&l.picUrl&&d&&(i=new a({tpl:e.tpl,formatPlaceholder:{label:c,text:d,background:'style="background-image:url('+l.picUrl+')"'},before:e.before,after:e.after}),i.bindClick($(".goto_acitivity_page_tips",i.areaBody),function(i){tjMVT.setData({et:"click",cspot:r[e.pageIndex]}),location.href=t.advList[e.pageIndex].jumpLink,i.preventDefault()}),e.disableClick||i.areaBody.on("click",function(i){tjMVT.setData({et:"click",cspot:r[e.pageIndex]}),location.href=t.advList[e.pageIndex].jumpLink,i.preventDefault()}),i.bindClick($(".hide_tips",i.areaBody),function(t){t.preventDefault(),tjMVT.setData({et:"click",cspot:n[e.pageIndex]}),this.close(),t.stopPropagation()}))}},showWinInit:function(e){var t=new a({tpl:e.tpl,formatPlaceholder:e.configForWin,after:e.after,before:e.before});t.bindClick($(".close_win_hb",t.areaBody),function(){this.close()}),t.bindClick($(".goto_acitivity_page",t.areaBody),function(){location.href=e.jumpLink||"#",this.close()}),t.bindClick($(".get_acitvity_gift",t.areaBody),function(){s.postPrize({orderId:e.orderId,hbWin:t})})},postPrize:function(e){slark.get(slark.getActiveId()).startLoading(),$.ajax({url:"//xapi.elong.com/index/applyLotteryGift/",dataType:"json",timeout:5e3,data:{orderId:e.orderId},success:function(t){slark.get(slark.getActiveId()).stopLoading(),t.amount>0?($(".prize_name_hb",e.areaBody).html("<span>"+t.amount+"元</span>红包"),$(".after_get_gift",e.hbWin.areaBody).show(),$(".ddhp",e.areaBody).addClass("open"),$(".before_get_gift",e.hbWin.areaBody).hide(),$("#promotion-ad-trag").attr("data-amount",t.amount)):n.show("抽奖人数过多，请稍后再试～")},error:function(){slark.get(slark.getActiveId()).stopLoading(),n.show("抽奖人数过多，请稍后再试～")}})},tryLoadImage:function(e,t){var i=new Image;i.src=e,i.onload=function(e){i.complete&&t&&t.call(this,e)}},massageBox:function(e){function t(){a+=2,o--,i.style.opacity=o/40,i.style.bottom=a+"px",setTimeout(function(){if(Number(i.style.opacity)<=0)return void $(i).remove();t()},100/3)}var i=document.createElement("div");i.className="message-box",i.style={},i.innerHTML=e,$(core.get(slark.getActiveId()).main).append(i);var o=36,a=20;t()}});o.exports=s},function(e,t,i){i.exports=function(){function e(e){for(var t=document.cookie.split("; "),i=0;i<t.length;i++){var o=t[i].split("=");if(o[0]==e)return unescape(o[1])}}return{sessionCtrl:{getData:function(e){return JSON.parse(sessionStorage.getItem(e))},setData:function(e,t){return sessionStorage.setItem(e,JSON.stringify(t))}},localCtrl:{getData:function(e){var t=JSON.parse(localStorage.getItem(e));return t.timeflag?t.timeflag&&new Date(t.timeflag)>new Date?t.data:null:t},setData:function(e,t,i){if("number"==typeof i){var o=(new Date).setMinutes((new Date).getMinutes()+i);localStorage.setItem(e,JSON.stringify({data:t,timeflag:o}))}else localStorage.setItem(e,JSON.stringify(t))}},cookieCtrl:{getData:function(t){var i,o=JSON.parse(JSON.stringify(e(t)||""));try{i=JSON.parse(o)}catch(e){i=o}return i},setData:function(t,i,o){var o=o||20,a=new Date;a.setTime(a.getTime()+1e3*o);var r=t+"="+escape(JSON.stringify(i))+";expires="+a.toGMTString()+";path=/",n=document.cookie;if(-1===n.search(new RegExp(t,"g"))&&n.length+r.length>4096||n.search(new RegExp(t,"g"))>-1&&n.replace(e(t),"").length-t.length-1+r.length>4096)throw"Error: out of cookie length";document.cookie=r}}}}()}]});define("hotelfx@1.1.0/entry/hotel/js/plugins/newUserHB.js",document.currentScript.src,function(s,i){return[function(s,i,a){function t(s){this.TPL={threeAndZCTpl:'<div class="meng bar"><div class="indexaddhblist"><div class="thrli thrlixk"><div class="closed close_win_hb {#tjclick}" data-tj={"cspot":"popclose"}></div><div class="top secxk"></div><div class="hbcon"><ul><li class="redxk">送<span>{#amount}</span>新客红包</li><li class="cashxk">返最高<span>￥50</span>现金</li><li class="giftxk">下单再抽<span>￥4999</span></li></ul></div><div class="hbbotbg"><div class="addbtn lookAllHotelhb {#tjclick}" data-tj={"cspot":"popin"}>立 即 领 取</div></div></div></div></div>',oldCustomersTipsForIndex:'<div class="ddyj clearfix"><span class="label">{#label}</span><span class="text">{#text}</span><span class="hide_tips"><i></i></span></div>',oldCustomersWinForIndex:'<div class="meng bar" style="display:block;"><div class="ddhp"><div class="hbc"><div class="closed close_win_hb {#tjclick}" data-tj={"cspot":"olduserprizepopclosecick"}></div><div class="banner_head banner_second"><div class="banner_head_a"></div></div><div class="newtop newtop_detail"><div class="reward_detail"><div class="detail_tit"><i class="i_left"></i>特权详述<i class="i_right"></i></div><div class="detail_con">在活动期间内，每完成国内酒店订单，就有抽奖机会，<span class="ori u_btn">100%中奖</span>，最高<span class="ori u_btn">¥4999礼品卡</span>，红包不限量'+(s&&s.formatPlaceholder&&s.formatPlaceholder.endDate?"，有效期截止至{#endDate}":"")+'。</div><div class="detail_tip goto_acitivity_page {#tjclick}" data-tj={"cspot":"visitactivitybutton"}>了解特权</div></div><div class="gets u_btn close_win_hb {#tjclick}" data-tj={"cspot":"olduserprizepopclosecick"}>知道了</div><div class="ddyj_tip">仅限部分老会员参与，转发无效哦</div></div></div></div></div>',oldCustomersTipsForList:'<div class="ddhp_btn" {#background}><i class="hide_tips"></i></div>',oldCustomersTipsForDetail:'<div class="ddhp_nav clearfix"><em {#background}></em><label class="goto_acitivity_page_tips">{#text}<i></i></label></div>',oldCustomersTipsForCreateOrder:'<div class="ddyj clearfix"><span class="label">{#label}</span><span class="text">{#text}</span></div>',oldCustomersWinForFinishOrder:'<div class="meng bar"><div class="newddhp"><div class="hbc"><div class="closed close_win_hb {#tjclick}" data-tj={"cspot":"olduserprizepopcloseclick"}></div><div class="newtop before_get_gift"><div class="topbg"></div><div class="text"><p>您获得1次拆宝箱机会！<span></span></p><p class="txt">点击按钮直接抽奖</p></div><div class="box_na"></div><div class="btn_box u_btn get_acitvity_gift {#tjclick}" data-tj={"cspot":"olduserprizeopenboxclick"}>打开宝箱</div><div class="more_text goto_acitivity_page {#tjclick}" data-tj={"cspot":"visitoldprizeclick"}>了解特权</div></div><div class="newtop after_get_gift" style="display: none;"><div class="topbg"></div><div class="text"><p>恭喜您抽到了<span class="prize_name_hb"></span></p><p class="txt">红包会在您成功入住酒店后到账</p></div><div class="box_na open"></div><div class="btn_box u_btn hasget close_win_hb {#tjclick}" data-tj={"cspot":"olduserprizepopcloseclick"}>知道了</div><div class="more_text goto_acitivity_page {#tjclick}" data-tj={"cspot":"visitoldprizeclick"}>查看红包状态</div></div><div class="newtop finish_get_gift" style="display: none;"><div class="topbg"></div><div class="text"><p>您已经抽到了<span class="prize_name_hb"></span></p><p class="txt">红包会在您成功入住酒店后到账</p></div><div class="box_na open"></div><div class="btn_box u_btn hasget close_win_hb {#tjclick}" data-tj={"cspot":"olduserprizepopcloseclick"}>知道了</div><div class="more_text goto_acitivity_page {#tjclick}" data-tj={"cspot":"visitoldprizeclick"}>查看红包状态</div></div></div></div></div>',ofValForZCTpl:'<div class="meng bar" style="display: block;"><div class="indexaddhblist"><div class="hbc"><div class="closed close_win_hb" style="z-index: 1000;"></div><div class="newtop"><p><span>{#hongbaoCount}<em>元</em></span><span class="txt">{#winContext}</span></p></div><div class="newhbbotbg"><div class="text">可在“<a href="{#winHongbaoLink}">我的-红包</a>”里查看红包使用详情</div><div class="order"></div><div class="addbtn winBtn">{#winbtnText}</div></div></div></div></div>',ofValForNewZcTpl:'<div class="meng bar" style="display:block"><div class="indexaddhblist"><div class="hbc ofwar"><div class="closed close_win_hb"></div><div class="newtop"><p><span>{#hongbaoCount}</span></p></div><div class="newhblist"><ul>{#newUserGiftItemDataList}</ul><div class="text">可在“<a href="{#winHongbaoLink}">我的-红包</a>”里查看红包使用详情</div></div><div class="newhbbotbg"><div class="order"></div><div class="addbtn winBtn">{#winbtnText}</div></div></div></div></div>',indexForZCTpl:'<div class="meng bar" style="display:block"><div class="indexaddhblist"><div class="hbc"><div class="closed close_win_hb {#tjclick}" data-tj={"cspot":"popclose"} style="z-index: 1000;"></div><div class="top"><p><span>{#hongbaoCount}<em>元</em></span><span class="txt">新客红包到账啦!</span></p></div><div class="hbcon"><ul>{#hongbaoList}<p class="hblinks">可在"<a href="{#lookHongbao}">我的-红包</a>"里查看红包使用详情</p></ul></div><div class="hbbotbg"><div class="addbtn lookAllHotelhb {#tjclick}" data-tj={"cspot":"popin"}>查看全部特惠酒店</div></div></div></div></div>',indexTplForRedPackage:'<div class="meng bar"><div class="indexaddhblist"><div class="thrli"><div class="closed close_win_hb {#tjclick}" data-tj={"cspot":"popclose"}></div><div class="top {#redPackageType}"></div><div class="hbcon"><ul><li>注册就送<span>￥100</span>新客红包</li>{#threePop}<li>完成首单再抽<span>￥4999</span>礼品卡</li></ul></div><div class="hbbotbg"><div class="addbtn lookAllHotelhb {#tjclick}" data-tj={"cspot":"popin"}>立即前往</div></div></div></div></div>',tipTpl:'<div class="subwxhb"><div class="wxhbtips"><span class="hb_nmbs tipLink {#tjclick}" data-tj={"cspot":"tipin"}><i></i>{#text}</span><span class="hb_txts close_hb {#tjclick}" data-tj={"cspot":"tipclose"}>{#btnStyle}</span></div></div>',orderTpl:'<div class="bar getpricef lookHongbao tjclick" data-tj={"cspot":"adbanner"} style="background-image:url({#imgUrl})"></div>',oldWithNew:'<div class="subwxhb tipLink oldwithnew tjclick" data-tj={"cspot":"invitefriend","if":"120012","ch":"wxinvitefriend"}><div class="wxhbtips"><span class="pep_nmbs"><i style="background-image:url({#imgUrl})"></i>{#text}</span><span class="hb_txts close_hb">{#btnStyle}</span></div></div>'},this.TPL.QQMemberTipTpl=this.TPL.tipTpl.replace("subwxhb","subwxhb qqwx"),this.areaBody=null;var i=this.TPL[s.tpl];for(var a in s.formatPlaceholder)if(s.formatPlaceholder.hasOwnProperty(a))if("newUserGiftItemDataList"==a){for(var t="",l=s.formatPlaceholder[a]?s.formatPlaceholder[a]:[],d=0;d<l.length;d++)t+='<li><div class="money"><em>￥</em>'+l[d].faceValue+'</div><div class="info"><p class="type">'+l[d].hongbaoTypeName+"</p></div></li>";i=i.replace(new RegExp("{#"+a+"}","g"),t||"")}else i=i.replace(new RegExp("{#"+a+"}","g"),s.formatPlaceholder[a]||"");this.areaBody=$(i),s.after?s.after.after(this.areaBody):s.before&&s.before.before(this.areaBody)}t.prototype.bindClick=function(s,i){var a=this;s.off("click").on("click",function(s){i.call(a,s)})},t.prototype.close=function(){this.areaBody.hide()},t.prototype.show=function(){this.areaBody.show()},a.exports=t}]});define("hotelfx@1.1.0/entry/hotel/js/configs.js",document.currentScript.src,function(e,a){return[function(a,o,t){t.exports=function(e){return{debug:!1,version:"0.0.1",apiCode:{SUCCESS:[0]},links:{},supportFacility:{1:{className:"parking",text:"停车场"},2:{className:"wifi",text:"无线wifi"},3:{className:"",text:""},4:{className:"eatting",text:"餐厅"},5:{className:"sport",text:"健身房"},6:{className:"swim",text:"游泳池"},7:{className:"fly",text:"接机"},8:{className:"meeting",text:"会议室"},9:{className:"",text:""},10:{className:"bag",text:"行李寄存"}},maps:{starLevelMap:{2:"经济型",3:"三星级",4:"四星级",5:"五星级","-3":"舒适型","-4":"高档型","-5":"豪华型","-12":"经济型",12:"经济型",13:"三星级","-13":"舒适型","-14":"高档型",14:"四星级","-15":"豪华型",15:"五星级"}},resourcePath:{listHotelImage:"//m.elongstatic.com/static/webapp/hotel/2015/06/v3/img/no-pic-for-hotel.png",hotelImage:"//m.elongstatic.com/static/webapp/hotel/2015/06/v2/img/defuat_room_pic.png",roomTypeHotelImage:"//m.elongstatic.com/static/webapp/hotel/2015/06/v2/img/room_type_default.png",defaultAvatar:"//m.elongstatic.com/static/webapp/hotel/2015/06/v2/img/Bitmap.png"},iconMapping:{"不限":{icon:"icon-unlimited",param:""},"经济":{param:"starlevels"},"三星舒适":{param:"starlevels"},"四星高档":{param:"starlevels"},"五星豪华":{param:"starlevels"},"大床":{icon:"icon-bigbed",param:"bedbreakfast"},"双床":{icon:"icon-doublebed",param:"bedbreakfast"},"免费取消":{icon:"icon-freecancel",param:"demand"},"立即确认":{icon:"icon-confirm",param:"demand"},"含早餐":{icon:"icon-bkft",param:"bedbreakfast"},"含双早":{icon:"icon-bkft",param:"bedbreakfast"}},wxSdkConfig:{debug:!1,appId:"",timestamp:"",nonceStr:"",signature:"",jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onRecordEnd","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"]}}}(e("hotelfx@1.1.0/src/fw/core.js"))}]});define("hotelfx@1.1.0/src/fw/core.js",document.currentScript.src,function(t,e){return[function(e,r,n){t("elong-xlog@0.1/dist/index.js"),t("elong-xlog-report-error@0.1/dist/index.js"),n.exports=function(t,e,r,n,o,i,a,s,l,d){if(window.template=d,"undefined"!=typeof slark)return slark;i=Blend.ui;var c={};c.initTime=Date.now(),c.GetQueryString=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(e);return null!=r?r[2]:null},c.is_exists=function(t,e){var r=this.router.routers[t];return void 0!==r&&void 0!==r[e]&&!0===r[e]},c.needHashUrl=function(t){var e=this.router.routers[t];return void 0!==e&&!!e.needHashUrl},c.onrender=function(t,e){"function"==typeof t?$(document).on("onrender",t):i.layerInit(t,e)},c.onreload=function(){},c.router=new s,c.addPager=function(t){var e,r,n=!!c.isLowDevice;return r=t.id?c.router.getInfoFromId(t.id):c.router.getInfoFromUrl(t.url),r?(t.title=r.title,e=t.id=r.tpl,t.lindex=r.lindex,t.is_frender=r.is_frender,t.is_hash=r.is_hash,t.is_offline=r.is_offline,t.errorHandle=r.errorHandle,t.withoutData=r.withoutData,void 0===t.noLoading&&(t.noLoading=r.noLoading)):n=!0,n&&!t.main?(location.href=t.url,!1):(void 0!==d&&void 0===t.tpl?t.tpl=d.get(r.tpl)&&"function"==typeof d.get(r.tpl)?d.get(r.tpl):t.id:void 0===t.tpl&&(t.tpl=t.id),t.url=c.router.cleanUrl(t.url,t.id),e&&c.get(e)?void c.get(e).in(t):new i.Layer(t))},c.addGroup=function(t){return void 0!==d&&d.get(c.getActiveId()),new i.LayerGroup(t)},c.get=function(t){return i.get(t)},c.canGoBack=function(){return i.canGoBack()},c.getActiveId=function(){return i.activeLayer?i.activeLayer.attr("data-blend-id"):0},c.getActiveLayer=function(){return i.activeLayer},c.setTitle=function(t){t&&(document.title=t,i.activeLayer.attr("data-title",t),this.titleControl&&(this.titleControl[this.getActiveId()]=t))};for(var u in a)c[u]=a[u];return c.init=function(t){if(1===$(".pages>.page").length||1===$(".doc-page .pages>.page").length){var e=$(".pages>.page");if(!e.attr("data-blend")){var r,n,o=location.pathname+location.search,a=c.router.getInfoFromUrl(location.href);void 0!==a&&"unedfiend"!==a.is_hash&&!0===a.is_hash&&(n=location.hash,n&&n.indexOf("!&")?(r=n.substr(n.indexOf("!&")).replace(/!&/g,"&&").replace("&&","?"),o=a.url+r):o=a.url),e.addClass("page-on-center");var s=a&&!0===a.is_frender?"template":"html";void 0!==d&&(s=d.get(a.tpl)&&"function"==typeof d.get(a.tpl)?d.get(a.tpl):"html"),i.project=t;new c.addPager({url:o,main:e[0],tpl:s,active:!0})}}},c.ui=i,window.slark=c,c}(t("hotelfx@1.1.0/src/js/libs/zepto/dist/zepto.js"),e(1),t("hotelfx@1.1.0/lib/zepto.scrollfocus.js"),e(2),e(4),e(5),e(19),e(20),e(21),t("hotelfx@1.1.0/lib/tpl-runtime.js"))},function(e,r,n){n.exports=function(){"undefined"!=typeof History&&void 0!==History.Adapter||(function(t,e){var r=t.History=t.History||{},n=t.Zepto;if(void 0!==r.Adapter)throw new Error("History.js Adapter has already been loaded...");r.Adapter={bind:function(t,e,r){new n(t).bind(e,r)},trigger:function(t,e){new n(t).trigger(e)},extractEventData:function(t,e){return e&&e[t]||void 0},onDomLoad:function(t){new n(t)}},void 0!==r.init&&r.init()}(window),function(t,e){var r=t.console||void 0,n=t.document,o=t.navigator,i=!1,a=t.setTimeout,s=t.clearTimeout,l=t.setInterval,d=t.clearInterval,c=t.JSON,u=t.alert,p=t.History=t.History||{},f=t.history;try{i=t.sessionStorage,i.setItem("TEST","1"),i.removeItem("TEST")}catch(t){i=!1}if(c.stringify=c.stringify||c.encode,c.parse=c.parse||c.decode,void 0!==p.init)throw new Error("History.js Core has already been loaded...");p.init=function(t){return void 0!==p.Adapter&&(void 0!==p.initCore&&p.initCore(),void 0!==p.initHtml4&&p.initHtml4(),!0)},p.initCore=function(e){if(void 0!==p.initCore.initialized)return!1;if(p.initCore.initialized=!0,p.options=p.options||{},p.options.hashChangeInterval=p.options.hashChangeInterval||100,p.options.safariPollInterval=p.options.safariPollInterval||500,p.options.doubleCheckInterval=p.options.doubleCheckInterval||500,p.options.disableSuid=p.options.disableSuid||!1,p.options.storeInterval=p.options.storeInterval||1e3,p.options.busyDelay=p.options.busyDelay||250,p.options.debug=p.options.debug||!1,p.options.initialTitle=p.options.initialTitle||n.title,p.options.html4Mode=p.options.html4Mode||!1,p.options.delayInit=p.options.delayInit||!1,p.intervalList=[],p.clearAllIntervals=function(){var t,e=p.intervalList;if(void 0!==e&&null!==e){for(t=0;t<e.length;t++)d(e[t]);p.intervalList=null}},p.debug=function(){p.options.debug&&p.log.apply(p,arguments)},p.log=function(){var t,e,o,i,a,s=!(void 0===r||void 0===r.log||void 0===r.log.apply),l=n.getElementById("log");for(s?(i=Array.prototype.slice.call(arguments),t=i.shift(),void 0!==r.debug?r.debug.apply(r,[t,i]):r.log.apply(r,[t,i])):t="\n"+arguments[0]+"\n",e=1,o=arguments.length;e<o;++e){if("object"==typeof(a=arguments[e])&&void 0!==c)try{a=c.stringify(a)}catch(t){}t+="\n"+a+"\n"}return l?(l.value+=t+"\n-----\n",l.scrollTop=l.scrollHeight-l.clientHeight):s||u(t),!0},p.getInternetExplorerMajorVersion=function(){return p.getInternetExplorerMajorVersion.cached=void 0!==p.getInternetExplorerMajorVersion.cached?p.getInternetExplorerMajorVersion.cached:function(){for(var t=3,e=n.createElement("div"),r=e.getElementsByTagName("i");(e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e")&&r[0];);return t>4&&t}()},p.isInternetExplorer=function(){return p.isInternetExplorer.cached=void 0!==p.isInternetExplorer.cached?p.isInternetExplorer.cached:Boolean(p.getInternetExplorerMajorVersion())},p.options.html4Mode?p.emulated={pushState:!0,hashChange:!0}:p.emulated={pushState:!Boolean(t.history&&t.history.pushState&&t.history.replaceState),hashChange:Boolean(!("onhashchange"in t||"onhashchange"in n)||p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8)},p.enabled=!p.emulated.pushState,p.bugs={setHash:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===o.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),safariPoll:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===o.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),ieDoubleCheck:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<7)},p.isEmptyObject=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},p.cloneObject=function(t){var e,r;return t?(e=c.stringify(t),r=c.parse(e)):r={},r},p.getRootUrl=function(){var t=n.location.protocol+"//"+(n.location.hostname||n.location.host);return n.location.port&&(t+=":"+n.location.port),t+="/"},p.getBaseHref=function(){var t=n.getElementsByTagName("base"),e=null,r="";return 1===t.length&&(e=t[0],r=e.href.replace(/[^\/]+$/,"")),r=r.replace(/\/+$/,""),r&&(r+="/"),r},p.getBaseUrl=function(){return p.getBaseHref()||p.getBasePageUrl()||p.getRootUrl()},p.getPageUrl=function(){var t=p.getState(!1,!1),e=(t||{}).url||p.getLocationHref();return e.replace(/\/+$/,"").replace(/[^\/]+$/,function(t,e,r){return/\./.test(t)?t:t+"/"})},p.getBasePageUrl=function(){return p.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(t,e,r){return/[^\/]$/.test(t)?"":t}).replace(/\/+$/,"")+"/"},p.getFullUrl=function(t,e){var r=t,n=t.substring(0,1);return e=void 0===e||e,/[a-z]+\:\/\//.test(t)||(r="/"===n?p.getRootUrl()+t.replace(/^\/+/,""):"#"===n?p.getPageUrl().replace(/#.*/,"")+t:"?"===n?p.getPageUrl().replace(/[\?#].*/,"")+t:e?p.getBaseUrl()+t.replace(/^(\.\/)+/,""):p.getBasePageUrl()+t.replace(/^(\.\/)+/,"")),r.replace(/\#$/,"")},p.getShortUrl=function(t){var e=t,r=p.getBaseUrl(),n=p.getRootUrl();return p.emulated.pushState&&(e=e.replace(r,"")),e=e.replace(n,"/"),p.isTraditionalAnchor(e)&&(e="./"+e),e=e.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},p.getLocationHref=function(t){return t=t||n,t.URL===t.location.href?t.location.href:t.location.href===decodeURIComponent(t.URL)?t.URL:t.location.hash&&decodeURIComponent(t.location.href.replace(/^[^#]+/,""))===t.location.hash?t.location.href:-1==t.URL.indexOf("#")&&-1!=t.location.href.indexOf("#")?t.location.href:t.URL||t.location.href},p.store={},p.idToState=p.idToState||{},p.stateToId=p.stateToId||{},p.urlToId=p.urlToId||{},p.storedStates=p.storedStates||[],p.savedStates=p.savedStates||[],p.normalizeStore=function(){p.store.idToState=p.store.idToState||{},p.store.urlToId=p.store.urlToId||{},p.store.stateToId=p.store.stateToId||{}},p.getState=function(t,e){void 0===t&&(t=!0),void 0===e&&(e=!0);var r=p.getLastSavedState();return!r&&e&&(r=p.createStateObject()),t&&(r=p.cloneObject(r),r.url=r.cleanUrl||r.url),r},p.getIdByState=function(t){var e,r=p.extractId(t.url);if(!r)if(e=p.getStateString(t),void 0!==p.stateToId[e])r=p.stateToId[e];else if(void 0!==p.store.stateToId[e])r=p.store.stateToId[e];else{for(;;)if(r=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),void 0===p.idToState[r]&&void 0===p.store.idToState[r])break;p.stateToId[e]=r,p.idToState[r]=t}return r},p.normalizeState=function(t){var e,r;return t&&"object"==typeof t||(t={}),void 0!==t.normalized?t:(t.data&&"object"==typeof t.data||(t.data={}),e={},e.normalized=!0,e.title=t.title||"",e.url=p.getFullUrl(t.url?t.url:p.getLocationHref()),e.hash=p.getShortUrl(e.url),e.data=p.cloneObject(t.data),e.id=p.getIdByState(e),e.cleanUrl=e.url.replace(/\??\&_suid.*/,""),e.url=e.cleanUrl,r=!p.isEmptyObject(e.data),(e.title||r)&&!0!==p.options.disableSuid&&(e.hash=p.getShortUrl(e.url).replace(/\??\&_suid.*/,""),/\?/.test(e.hash)||(e.hash+="?"),e.hash+="&_suid="+e.id),e.hashedUrl=p.getFullUrl(e.hash),(p.emulated.pushState||p.bugs.safariPoll)&&p.hasUrlDuplicate(e)&&(e.url=e.hashedUrl),e)},p.createStateObject=function(t,e,r){var n={data:t,title:e,url:r};return n=p.normalizeState(n)},p.getStateById=function(t){return t=String(t),p.idToState[t]||p.store.idToState[t]||void 0},p.getStateString=function(t){var e,r;return e=p.normalizeState(t),r={data:e.data,title:t.title,url:t.url},c.stringify(r)},p.getStateId=function(t){var e;return e=p.normalizeState(t),e.id},p.getHashByState=function(t){var e;return e=p.normalizeState(t),e.hash},p.extractId=function(t){var e,r;return r=-1!=t.indexOf("#")?t.split("#")[0]:t,e=/(.*)\&_suid=([0-9]+)$/.exec(r),e?e[1]||t:t,(e?String(e[2]||""):"")||!1},p.isTraditionalAnchor=function(t){return!/[\/\?\.]/.test(t)},p.extractState=function(t,e){var r,n,o=null;return e=e||!1,r=p.extractId(t),r&&(o=p.getStateById(r)),o||(n=p.getFullUrl(t),r=p.getIdByUrl(n)||!1,r&&(o=p.getStateById(r)),o||!e||p.isTraditionalAnchor(t)||(o=p.createStateObject(null,null,n))),o},p.getIdByUrl=function(t){return p.urlToId[t]||p.store.urlToId[t]||void 0},p.getLastSavedState=function(){return p.savedStates[p.savedStates.length-1]||void 0},p.getLastStoredState=function(){return p.storedStates[p.storedStates.length-1]||void 0},p.hasUrlDuplicate=function(t){var e;return e=p.extractState(t.url),e&&e.id!==t.id},p.storeState=function(t){return p.urlToId[t.url]=t.id,p.storedStates.push(p.cloneObject(t)),t},p.isLastSavedState=function(t){var e,r,n,o=!1;return p.savedStates.length&&(e=t.id,r=p.getLastSavedState(),n=r.id,o=e===n),o},p.saveState=function(t){return!p.isLastSavedState(t)&&(p.savedStates.push(p.cloneObject(t)),!0)},p.getStateByIndex=function(t){return void 0===t?p.savedStates[p.savedStates.length-1]:t<0?p.savedStates[p.savedStates.length+t]:p.savedStates[t]},p.getCurrentIndex=function(){return p.savedStates.length<1?0:p.savedStates.length-1},p.getHash=function(t){var e=p.getLocationHref(t);return p.getHashByUrl(e)},p.unescapeHash=function(t){var e=p.normalizeHash(t);return e=decodeURIComponent(e)},p.normalizeHash=function(t){return t.replace(/[^#]*#/,"").replace(/#.*/,"")},p.setHash=function(t,e){var r,o;return!1!==e&&p.busy()?(p.pushQueue({scope:p,callback:p.setHash,args:arguments,queue:e}),!1):(p.busy(!0),r=p.extractState(t,!0),r&&!p.emulated.pushState?p.pushState(r.data,r.title,r.url,!1):p.getHash()!==t&&(p.bugs.setHash?(o=p.getPageUrl(),p.pushState(null,null,o+"#"+t,!1)):n.location.hash=t),p)},p.escapeHash=function(e){var r=p.normalizeHash(e);return r=t.encodeURIComponent(r),p.bugs.hashEscape||(r=r.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),r},p.getHashByUrl=function(t){var e=String(t).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return e=p.unescapeHash(e)},p.setTitle=function(t){var e,r=t.title;r||(e=p.getStateByIndex(0))&&e.url===t.url&&(r=e.title||p.options.initialTitle);try{n.getElementsByTagName("title")[0].innerHTML=r.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(t){}return n.title=r,p},p.queues=[],p.busy=function(t){if(void 0!==t?p.busy.flag=t:void 0===p.busy.flag&&(p.busy.flag=!1),!p.busy.flag){s(p.busy.timeout);var e=function(){var t,r,n;if(!p.busy.flag)for(t=p.queues.length-1;t>=0;--t)r=p.queues[t],0!==r.length&&(n=r.shift(),p.fireQueueItem(n),p.busy.timeout=a(e,p.options.busyDelay))};p.busy.timeout=a(e,p.options.busyDelay)}return p.busy.flag},p.busy.flag=!1,p.fireQueueItem=function(t){return t.callback.apply(t.scope||p,t.args||[])},p.pushQueue=function(t){return p.queues[t.queue||0]=p.queues[t.queue||0]||[],p.queues[t.queue||0].push(t),p},p.queue=function(t,e){return"function"==typeof t&&(t={callback:t}),void 0!==e&&(t.queue=e),p.busy()?p.pushQueue(t):p.fireQueueItem(t),p},p.clearQueue=function(){return p.busy.flag=!1,p.queues=[],p},p.stateChanged=!1,p.doubleChecker=!1,p.doubleCheckComplete=function(){return p.stateChanged=!0,p.doubleCheckClear(),p},p.doubleCheckClear=function(){return p.doubleChecker&&(s(p.doubleChecker),p.doubleChecker=!1),p},p.doubleCheck=function(t){return p.stateChanged=!1,p.doubleCheckClear(),p.bugs.ieDoubleCheck&&(p.doubleChecker=a(function(){return p.doubleCheckClear(),p.stateChanged||t(),!0},p.options.doubleCheckInterval)),p},p.safariStatePoll=function(){var e,r=p.extractState(p.getLocationHref());if(!p.isLastSavedState(r))return e=r,e||(e=p.createStateObject()),p.Adapter.trigger(t,"popstate"),p},p.back=function(t){return!1!==t&&p.busy()?(p.pushQueue({scope:p,callback:p.back,args:arguments,queue:t}),!1):(p.busy(!0),p.doubleCheck(function(){p.back(!1)}),f.go(-1),!0)},p.forward=function(t){return!1!==t&&p.busy()?(p.pushQueue({scope:p,callback:p.forward,args:arguments,queue:t}),!1):(p.busy(!0),p.doubleCheck(function(){p.forward(!1)}),f.go(1),!0)},p.go=function(t,e){var r;if(t>0)for(r=1;r<=t;++r)p.forward(e);else{if(!(t<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(r=-1;r>=t;--r)p.back(e)}return p},p.emulated.pushState){var h=function(){};p.pushState=p.pushState||h,p.replaceState=p.replaceState||h}else p.onPopState=function(e,r){var n=!1,o=!1;return p.doubleCheckComplete(),p.getHash(),n=p.Adapter.extractEventData("state",e,r)||!1,o=n?p.getStateById(n):p.expectedStateId?p.getStateById(p.expectedStateId):p.extractState(p.getLocationHref()),o||(o=p.createStateObject(null,null,p.getLocationHref())),p.expectedStateId=!1,p.isLastSavedState(o)?(p.busy(!1),!1):(p.storeState(o),p.saveState(o),p.setTitle(o),p.Adapter.trigger(t,"statechange"),p.busy(!1),!0)},p.Adapter.bind(t,"popstate",p.onPopState),p.pushState=function(e,r,n,o){if(p.getHashByUrl(n)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(!1!==o&&p.busy())return p.pushQueue({scope:p,callback:p.pushState,args:arguments,queue:o}),!1;p.busy(!0);var i=p.createStateObject(e,r,n);return p.isLastSavedState(i)?p.busy(!1):(p.storeState(i),p.expectedStateId=i.id,f.pushState(i.id,i.title,i.url),p.Adapter.trigger(t,"popstate")),!0},p.replaceState=function(e,r,n,o){if(p.getHashByUrl(n)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(!1!==o&&p.busy())return p.pushQueue({scope:p,callback:p.replaceState,args:arguments,queue:o}),!1;p.busy(!0);var i=p.createStateObject(e,r,n);return p.isLastSavedState(i)?p.busy(!1):(p.storeState(i),p.expectedStateId=i.id,f.replaceState(i.id,i.title,i.url),p.Adapter.trigger(t,"popstate")),!0};if(i){try{p.store=c.parse(i.getItem("History.store"))||{}}catch(t){p.store={}}p.normalizeStore()}else p.store={},p.normalizeStore();p.Adapter.bind(t,"unload",p.clearAllIntervals),p.saveState(p.storeState(p.extractState(p.getLocationHref(),!0))),i&&(p.onUnload=function(){var t,e,r;try{t=c.parse(i.getItem("History.store"))||{}}catch(e){t={}}t.idToState=t.idToState||{},t.urlToId=t.urlToId||{},t.stateToId=t.stateToId||{};for(e in p.idToState)p.idToState.hasOwnProperty(e)&&(t.idToState[e]=p.idToState[e]);for(e in p.urlToId)p.urlToId.hasOwnProperty(e)&&(t.urlToId[e]=p.urlToId[e]);for(e in p.stateToId)p.stateToId.hasOwnProperty(e)&&(t.stateToId[e]=p.stateToId[e]);p.store=t,p.normalizeStore(),r=c.stringify(t);try{i.setItem("History.store",r)}catch(t){if(t.code!==DOMException.QUOTA_EXCEEDED_ERR)throw t;i.length&&(i.removeItem("History.store"),i.setItem("History.store",r))}},p.intervalList.push(l(p.onUnload,p.options.storeInterval)),p.Adapter.bind(t,"beforeunload",p.onUnload),p.Adapter.bind(t,"unload",p.onUnload)),p.emulated.pushState||(p.bugs.safariPoll&&p.intervalList.push(l(p.safariStatePoll,p.options.safariPollInterval)),"Apple Computer, Inc."!==o.vendor&&"Mozilla"!==(o.appCodeName||"")||(p.Adapter.bind(t,"hashchange",function(){p.Adapter.trigger(t,"popstate")}),p.getHash()&&p.Adapter.onDomLoad(function(){p.Adapter.trigger(t,"hashchange")})))},p.options&&p.options.delayInit||p.init()}(window))}(t("hotelfx@1.1.0/src/js/libs/zepto/dist/zepto.js"))},function(e,r,n){n.exports=function(t){e(3);var r=$.ajax,n=function(t){return 306==t.status},o=function(t){t&&t.errorcode&&"requireLogin"==t.errorcode&&(location.href=t.loginUrl)},i=function(t,e){var r=$(".advanced-mask-layer"),n=$(".page-on-center"),o=0==n.length?$("body"):n,i=$(".validate-code-by-intercept");0==r.length?(o.append('<div class="advanced-mask-layer"></div>'),r=$(".advanced-mask-layer")):r.show(),0!=i.length&&i.remove(),$(".preloader-indicator-modal").remove(),o.append('<div class="validate-code-by-intercept"><div class="content"><div class="form-li" >您的操作出现异常,请输入验证码:</div><form method="post" action="//m.elong.com/emdvalidate.html?t='+Math.random()+"&returnUrl="+encodeURIComponent(location.href)+'" onsubmit="return checkBeforeSubmit();"><div class="form-li" id="captchar-ajax"> </div><div class="form-li form-li2"><input class="txt l_black" name="code"></div><div class="form-li"><button class="submit">提交</button></div></form></div></div>'),$("#captchar-ajax").html('<img id="valcode" src="http://www.elong.com/home/efecode.html?t='+Math.random()+'"><a id="abtnChange" >看不清，换一张</a>'),$("#abtnChange").on("click",function(){document.getElementById("valcode").src="http://www.elong.com/home/efecode.html?t="+Math.random()}),window.checkBeforeSubmit=function(){if(""==$(".validate-code-by-intercept form input[name=code]").val().trim())return!1}},a=function(){return{get:function(t){var e=null;t="$preload:"+t;try{e=sessionStorage.getItem(t),e&&(e=JSON.parse(e),e.expires>+new Date?e=e.data:(e=null,sessionStorage.removeItem(t)))}catch(t){console.error(t)}return e},set:function(t,e,r){r=r||{};var n=1e3*("number"==typeof r.expires?r.expires:30);try{e={expires:+new Date+n,data:e},sessionStorage.setItem("$preload:"+t,JSON.stringify(e))}catch(t){console.error(t),this.clear()}},clear:function(){try{if(sessionStorage.length)for(var t,e=0,r=sessionStorage.length;e<r;e++)if(t=sessionStorage.key(e),0===t.indexOf("$preload:")){var n=sessionStorage.getItem(t);n&&(n=JSON.parse(n),n.expires<=+new Date&&sessionStorage.removeItem(t))}}catch(t){console.error(t)}}}}(),s={},l=function(t,e){"object"==typeof t&&(e=t,t=void 0),void 0!==t&&(e.url=t);var l=e.url;if("string"==typeof e.method&&"GET"!==e.method.toUpperCase()&&delete e.cache,e.data){var d=[];for(var c in e.data)e.data.hasOwnProperty(c)&&d.push([c,e.data[c]].join("="));l+=(-1===l.indexOf("?")?"?":"&")+d.sort().join("&")}if(s[l]){var u=+new Date;return e.success&&s[l].successs.push({time:u,callback:e.success}),e.error&&s[l].errors.push({time:u,callback:e.error}),void(e.complete&&s[l].completes.push({time:u,callback:e.complete}))}e=e||{},e.xhrFields={},e.xhrFields.withCredentials=!0;var p=e.success,f=e.complete,h=e.error;e.error=function(t,e){return function(r,o,a){n(r)?i(t,e):(h&&h.call(this,r,o,a),s[l]&&s[l].errors.forEach(function(t){t.callback.call(e,r,o,a,{isFromCache:!0})}))}}(t,e),e.success=function(t,r,n){o(t),!0===e.cache?a.set(l,t):"number"==typeof e.cache&&a.set(l,t,{expires:e.cache}),p&&p.call(this,t,r,n),s[l]&&s[l].successs.forEach(function(o){t&&(t.cacheInfo={isFromCache:!0,saveTime:o.time-s[l].time}),o.callback.call(e,t,r,n)})},e.complete=function(t,r){n(t)||(f&&f.call(this,t,r),s[l]&&(s[l].completes.forEach(function(n){n.callback.call(e,t,r,{isFromCache:!0})}),delete s[l]))};var g=a.get(l);if(g&&p)return g.cacheInfo={isFromCache:!0},void setTimeout(function(){p.call(e,g)},1);e.cache&&(s[l]={time:+new Date,successs:[],errors:[],completes:[]}),e.url+=(e.url.indexOf("?")>0?"&":"?")+"_rt="+(new Date).getTime(),r(e)};$.ajax=l}(t("hotelfx@1.1.0/src/fw/core.js"))},function(t,e,r){var n=document.createElement("div");n.innerHTML="<br /><style type='text/css' data-src='src/sass/captcha.scss'>.validate-code-by-intercept{position:absolute;top:50%;left:50%;margin-top:-120px;margin-left:-153px;padding-top:10px;height:220px;width:306px;z-index:15000;background-color:#fff;text-align:center;font-size:16px;font-weight:700;color:#353535}.validate-code-by-intercept .form-li{clear:both;height:44px;line-height:44px;margin:3px 12px}.validate-code-by-intercept .form-li2{overflow:hidden;border-radius:5px;border:1px solid #ddd;background-clip:padding-box;margin-bottom:10px}.validate-code-by-intercept input.txt{width:100%;padding:11px 10px 11px 13px;display:block;margin:0;border:0;background:0;font:16px/1.4 Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif}.validate-code-by-intercept .submit{font-size:1.1rem;width:100%;height:40px;line-height:40px;text-align:center;color:#fff;border-radius:5px;border-width:0;background-color:#e65749;margin:0 0 10px}</style>",r.exports=document.head.appendChild(n.lastChild),n=null},function(t,e,r){window.qq=window.qq||{},qq.maps=qq.maps||{},window.soso||(window.soso=qq),soso.maps||(soso.maps=qq.maps),qq.maps.Geolocation=function(){var t=null,e=null,r=null,n=null,o=null,i="_geoIframe_"+Math.ceil(1e7*Math.random()),a=document.createElement("iframe"),s=null,l=null,d=null,c=null,u=function(u,p){if(!u)return void alert("请输入key！");if(!p)return void alert("请输入referer！");if(!document.getElementById(i)){a.setAttribute("id",i);var f="https:";navigator.userAgent.match(/jdapp;iphone;/i)&&(f="http:"),a.setAttribute("src",f+"//apis.map.qq.com/tools/geolocation?key="+u+"&referer="+p),a.setAttribute("style","display: none; width: 100%; height: 30%"),document.body?document.body.appendChild(a):document.write(a.outerHTML),window.addEventListener("message",function(i){var a=i.data;a&&"geolocation"==a.module?(clearTimeout(c),t&&t(a),t=null,e=null,r&&r(a),r=null,n=null,o&&o(a)):(l=(new Date).getTime(),l-s>=d&&(e&&e(),e=null,t=null,clearTimeout(c)),n&&n(),n=null,r=null)},!1)}};return u.prototype.getLocation=function(r,n,o){t=r,e=n,s=(new Date).getTime(),d=o&&o.timeout?+o.timeout:1e4,clearTimeout(c),c=setTimeout(function(){e&&e(),e=null},d),document.getElementById(i).contentWindow.postMessage("getLocation","*")},u.prototype.getIpLocation=function(t,e){r=t,n=e,document.getElementById(i).contentWindow.postMessage("getLocation.robust","*")},u.prototype.watchPosition=function(t){o=t,document.getElementById(i).contentWindow.postMessage("watchPosition","*")},u.prototype.clearWatch=function(){o=null,document.getElementById(i).contentWindow.postMessage("clearWatch","*")},u}()},function(t,e,r){r.exports=function(t,e,r){return t=t||{},t.Layer=e,t.LayerGroup=r,window.Blend=window.Blend||{},window.Blend.ui=t,t}(t(6),t(12),t(17))},function(t,e,r){r.exports=function(t,e,r){$(".pages").length||$("body").prepend('<div class="pages"><div class="page"></div></div>');var n={},o={},i={};return n.version="alpha",t.extend(n,r),n.layerInit=function(t,e){i[t]=e;var r=n.get(t);r&&r.isRender()&&e&&e.call(r,r.main,r.controllerData)},$(document).on("onrender",function(t){var e=void 0!==t.originalEvent?t.originalEvent.detail:t.detail;if(e&&i[e]){var r=n.get(e);i[e].call(r,r.main,r.controllerData)}r&&r.isRender(!0)}),n.ready=function(t){if(/complete|loaded/.test(document.readyState)&&document.body)t();else{var e=!1;document.addEventListener("DOMContentLoaded",function(){e||(e=!0,t())},!1),window.addEventListener("load",function(){e||(e=!0,t())},!1)}},n.ready(function(){e.fire("blendready"),n.activeLayer=$(".page")}),n.inRuntime=function(){return!1},n.getLayerId=function(){return Blend.ui.activeLayer.attr("data-blend-id")},n.getUI=function(t){t=$(t)[0];do{if(!t||9==t.nodeType)return null;if(t.getAttribute("data-blend"))return o[t.getAttribute("data-blend-id")]}while((t=t.parentNode)!=document.body)},n.register=function(t){console.log("reg: "+t.id),o[t.id]=t},n.cancel=function(t){delete o[t.id]},n.create=function(t,e){},n.canGoBack=function(){return n.layerStack.length},n.get=function(t){return"0"===t&&(o[t]||(o[t]=new n.Layer({id:"0"}),$(".page").length?o[t].main=$(".page")[0]:console.warn(" '0' page need to have classes .pages>.page>.page-content "))),o[t]},n.on=e.on,n.once=e.once,n.off=e.off,n.fire=e.fire,n.layerStack=[],n}(t(7),t(10),t(11))},function(t,e,r){r.exports=function(){var e={},r=t(8),n=t(9),o=22;return e.getUniqueID=function(t){return(t=t||"uniq")+o++},e.noop=function(){},e.offloadFn=function(t){setTimeout(t||e.noop,0)},Array.prototype.contains=function(t){for(var e in this)if(this[e]==t)return!0;return!1},r.extend(e,r),r.extend(e,n),e}()},function(t,e,r){r.exports=function(){var t={};return t.inherits=function(t,e){var r=function(){};r.prototype=e.prototype;var n=t.prototype,o=t.prototype=new r;for(var i in n)o[i]=n[i];return t.prototype.constructor=t,t.superClass=e.prototype,t},t.clone=function(t){if(!t||"object"!=typeof t)return t;var e=t;if(u.isArray(t))e=u.clone(t);else if("[object Object]"==={}.toString.call(t)&&"isPrototypeOf"in t){e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=lib.deepClone(t[r]))}return e},t.extend=function(t,e){for(var r in e)e.hasOwnProperty(r)&&void 0!==e[r]&&(t[r]=e[r]);return t},t}()},function(t,e,r){r.exports=function(){var t={};return t.toPascal=function(e){return e?e.charAt(0).toUpperCase()+t.toCamel(e.slice(1)):""},t.toCamel=function(t){return t?t.replace(/-([a-z])/g,function(t){return t.toUpperCase()}):""},t}()},function(t,e,r){r.exports=function(){var t={},e=["layerCreateSuccess","layerLoadFinish","layerPullDown","layerPoped","tap","slide","menuPressed","layerGoBack","backPressedBeforeExit"],r=function(t,e){for(var r in t)if(t[r]==e)return!0;return!1};return t.on=function(t,n,o,i){void 0===i&&(i=o||this.id?Blend.ui.get(o||this.id).main:r(e,t)?Blend.ui.activeLayer[0]:document),"function"==typeof n&&i.addEventListener(t,n)},t.once=function(t,e,r,n){if(void 0===n&&(n=r||this.id?Blend.ui.get(r||this.id).main:document),"function"==typeof e)if("onrender"===t&&this&&this.isRender&&this.isRender())e.apply(n,arguments);else{var o=function(){e.apply(n,arguments),n.removeEventListener(t,o)};n.addEventListener(t,o)}},t.off=function(t,e,r,n){void 0===n&&(n=Blend.ui.get(r||this.id).main),"function"==typeof e&&n.removeEventListener(t,e)},t.fire=function(t,e,r,n,o){try{var i;e||(e=this.id),void 0===e&&(o=document),void 0===o&&void 0!==e&&(o=Blend.ui.get(e).main);var a={bubbles:!0,cancelable:!0,detail:e};if("function"==typeof CustomEvent?i=new CustomEvent(t,a):(i=document.createEvent("Events"),i.initEvent(t,a.bubbles,a.cancelable,a.detail),i.detail=a.detail),void 0!==r&&(i.data1=r),"function"==typeof n&&n(i),void 0!==e){var s=Blend.ui.get(e)[t];"function"==typeof s&&s.call(this,i)}o&&o.dispatchEvent(i),console.log(i.type,i.detail,i.data1)}catch(t){console.warn("Events fire errors.please check the runtime environment.",t.stack)}},t}()},function(t,e,r){r.exports=function(){var t={},e=function(){};return t.layerStopRefresh=function(t){t||(t=Blend.ui.activeLayer.attr("data-blend-id")||"0"),Blend.ui.get(t).endPullRefresh()},t.layerBack=function(t){t||(t=Blend.ui.activeLayer.attr("data-blend-id")||"0"),Blend.ui.get(t).out()},t.removeSplashScreen=e,t}()},function(t,e,r){r.exports=function(){var e=t(7),r=t(13),n=t(6),o=t(15),i=!1,a=i;/iPhone/i.test(navigator.userAgent)&&document.addEventListener("touchend",function(t){(i=t.changedTouches[0].clientX<0)?setTimeout(function(){i=a},1e3):i=a},!1);var s=t(16),l=function(t){return r.call(this,t),this._init(t),this};return e.inherits(l,r),l.prototype.onload=l.prototype.beforeshow=l.prototype.beforehide=e.noop,l.prototype.constructor=l,l.prototype.top=0,l.prototype.bottom=0,l.prototype.left=0,l.prototype.right=0,l.prototype.pullText="下拉刷新...",l.prototype.loadingText="加载中...",l.prototype.releaseText="释放刷新...",l.prototype.controllerData=null,l.prototype._init=function(t){var e=this;return $(this.main).addClass("page"),t.title&&$(this.main).attr("data-title",t.title),o.resume(this),t.main&&void 0===t.myGroup?(this.addState("got"),n.ready(function(){var r=$(t.main).data("blend-id"),n=Blend.ui.get(t.id),o=void 0===Blend.ui.project?e.getProject():Blend.ui.project,i=t.is_frender||null!==localStorage.getItem("elong"+o+r)&&t.is_offline;if(n.tpl&&"function"==typeof n.tpl&&i){if(t.is_offline){for(var a=$(".page[data-blend-id="+r+"]"),s=$(template(r,t.tplData||{})),l=s.hasClass("page")?s:s.find(".page"),d=l[0].classList,c=0,u=d.length;c<u;c++)$(a).addClass(d[c]);$(a).html(l.children()),n.addState("fetched")}else e.fetchData=!0;n.main.setAttribute("data-title-id",r),e._initEvent(),n.withoutData?n.hasState("fetched")&&n.fire("onrender"):(n.startLoading(),n.paint())}else"html"===n.tpl?($(n.main).attr("data-title",document.title),$(n.main).attr("data-title-id",r),e._initEvent(),t.is_hash?e.paint():e.fire("onrender")):console.log("front render no template")})):e._initEvent(),this.url?this.autoload&&this.render():console.log("###No url for render###"),this.once("onrender",function(){e.ptrFn&&(e.pullToRefresh=!0),e.pullToRefresh&&(e.on("layerPullDown",function(t){e.ptrFn&&e.ptrFn(t)}),o.startPullRefresh(e))}),t.active&&e.in(),void 0!==t.index&&this.main.setAttribute("data-blend-index",t.index),this},l.prototype.getProject=function(){var t=location.pathname.split("/");return"3000"===location.port?Blend.ui.project?Blend.ui.project:t[2]:Blend.ui.project?Blend.ui.project:t[1]},l.prototype.layerData=function(t){var e=this,r=this.getProject();if("string"==typeof t&&(t=JSON.parse(t)),"object"==typeof t.controller&&(e.controllerData=t.controller),void 0!==e.myGroup&&e.is_offline){var n=slark.getActiveId();localStorage["elong"+r+n+e.id]=JSON.stringify(t)}else e.is_offline&&(localStorage["elong"+r+e.id]=JSON.stringify(t))},l.prototype._initEvent=function(){var t=this;"none"===this.layerAnimate?a=i=!0:this.layerAnimate&&$(this.main).addClass(this.layerAnimate),t.on("out",t.beforehide),t.on("onrender",function(e){var r=void 0!==e.originalEvent?e.originalEvent.detail:e.detail,n=Blend.ui.get(r).main;s.runScript(n,r),t.stopLoading(),t.removeState("get"),t.addState("got")}),t.on("renderfailed",function(e){t.stopLoading(),t.removeState("get")}),t.on("onshow",function(e){t.render(),t.myGroup&&n.layerStack.pop(),t.myGroup?t.myGroup.activeId=e.detail:n.layerStack.push(n.activeLayer)}),t.on("beforedestroy",function(e){t.pullToRefresh&&(o.stopPullRefresh(t),t.on("layerPullDown",t.ptrFn))})},l.prototype.type="layer",l.prototype.loadingTime=500,l.prototype.paint=function(){var t=this;if(""!==t.url&&void 0!==t.url)return o.prepare(t.id,{url:t.url,top:t.top,left:t.left,bottom:t.bottom,right:t.right,tpl:t.tpl,tplData:t.tplData,withoutData:t.withoutData,noLoading:t.noLoading,errorHandle:t.errorHandle,pullToRefresh:t.pullToRefresh},t),this},l.prototype.in=function(t){if(this.isActive())return void console.log("layer is already activity ");if(this.hasState("slidein"))return console.log("this layer is sliding in."),
void this.removeState("slidein");if(t&&t.url){var e=t.url,r=location.host,o=(e.indexOf("#"),e.indexOf(r));o>=0&&(e=e.substring(o+r.length)),t.url=e}t&&(t.url&&decodeURI(t.url)!==decodeURI(this.url)||t.force)&&(console.log("layer url changed to..."+t.url),this.setUrl(t.url),this.removeState("got"),this.main.innerHTML="",$(this.main).removeAttr("data-title-id"));var a=this;a.fire("beforeshow"),u&&u.fire("beforehide"),t&&(this.tplData=t.tplData),this.render(),this.addState("slidein");var s=!1;this.myGroup&&this.myGroup.isActive()&&this.myGroup.idtoindex(this.myGroup.activeId)>this.index&&(s=!0);var l,d,c,u;if(l=$(this.main),d=this,this.myGroup){var p=this.myGroup;this.myGroup.isActive()||(l=$(p.main),d=p),p.activeId===d.id?(console.log("group.activeId is already activity,no need to slide out "+p.activeId),c=$()):(c=$(p.__layers[p.activeId].main),u=p.__layers[p.activeId])}else c=n.activeLayer,u=n.get(c.attr("data-blend-id"));!this.myGroup||this.myGroup.isActive()||(l=$(this.myGroup.main),d=this.myGroup,d.activeId!==this.id&&($(d.__layers[d.activeId].main).addClass("page-on-right").removeClass("page-on-center"),$(d.__layers[this.id].main).removeClass("page-on-right").addClass("page-on-center"))),t&&t.reverse?s=!s:this.lindex&&this.lindex&&u.lindex&&u.lindex>this.lindex&&(s=!s),this.myGroup&&c.parent().hasClass("layerGroup")||this.isSubLayer()&&(c=$());var f,h;s?(f="right",h="left"):(f="left",h="right"),i?(l.removeClass("page-on-left page-on-right").addClass("page-on-center"),c.removeClass("page-on-center").addClass("page-on-"+f)):(c.removeClass("page-on-center").addClass("page-from-center-to-"+f),l.removeClass("page-on-right").removeClass("page-on-left").addClass("page-from-"+h+"-to-center"));var g=function(){a.removeState("slidein"),a.fire("onshow"),u&&u.fire("onhide")};return i?g():d.animationEnd(function(){c.removeClass(function(t,e){return(e.match(/\bpage-from\S+/g)||[]).join(" ")}),l.removeClass(function(t,e){return(e.match(/\bpage-from\S+/g)||[]).join(" ")});var t;t=a.myGroup?$(a.myGroup.__layers[a.myGroup.activeId].main):n.activeLayer,t.attr("data-blend-id")!==c.attr("data-blend-id")&&c.addClass("page-on-"+f),t.attr("data-blend-id")===l.attr("data-blend-id")&&l.addClass("page-on-center"),g()}),this.myGroup?a.myGroup.activeId=this.id:n.activeLayer=$(a.main),this},l.prototype.out=function(t){var e=this;if(!this.isActive())return void console.log("layer is already inactivity ");this.isRefreshing()&&this.endPullRefresh();var r=n.layerStack.length>1?n.layerStack[n.layerStack.length-2]:$(".page-on-left"),o=$(e.main),a=r,s=n.get(a.attr("data-blend-id")),l=Blend.ui.get(a.attr("data-blend-id"));l&&l.addState("slidein"),this.myGroup&&o.parent().hasClass("layerGroup")||this.isSubLayer()&&(a=$()),i?(a.removeClass("page-on-left").addClass("page-on-center"),o.removeClass("page-on-center").addClass("page-on-right")):(a.removeClass("page-on-left").addClass("page-from-left-to-center"),o.removeClass("page-on-center").addClass("page-from-center-to-right")),e.fire("beforehide"),s&&s.fire("beforeshow");var d=function(){e.fire("onhide"),s&&s.fire("onshow"),n.activeLayer=r,l&&l.removeState("slidein")};return e.myGroup||n.layerStack.pop(),i?d():this.animationEnd(function(){d(),r.removeClass("page-from-left-to-center").addClass("page-on-center"),o.removeClass("page-from-center-to-right").addClass("page-on-right")}),this},l.prototype.reload=function(t,e){var r={url:t,onsuccess:this.onsuccess,onfail:this.onfail,top:this.top,left:this.left,right:this.right,bottom:this.bottom};return this.isRender(!1),o.prepare(this.id,r,this),"function"==typeof e&&this.once("onrender",e),this},l.prototype.isSubLayer=function(){return!(!this.sublayer&&!this.myGroup)},l.prototype.isRefreshing=function(t){return o.isRefreshing(t||this)},l.prototype.stopPullRefresh=function(t){return o.stopPullRefresh(t||this),this},l.prototype.endPullRefresh=function(t){return o.endPullRefresh(t||this),this},l.prototype.destroy=function(){r.prototype.destroy.apply(this,arguments)},l.prototype.replace=function(t){return me.url=t,this},l.prototype.startLoading=function(){$(".preloader-indicator-overlay",this.main).length||$(this.main).append('<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"></div>');var t=$("html");return t.hasClass("android")&&t.css("overflow","hidden"),this},l.prototype.stopLoading=function(){$(".preloader-indicator-overlay",this.main).remove(),$(".preloader-indicator-modal",this.main).remove();var t=$("html");return t.hasClass("android")&&t.css("overflow",""),this},l.prototype.getUrl=function(){return this.url},l.prototype.canGoBack=function(){return n.canGoBack()},l.prototype.clearHistory=function(){console.error("web cant clearHistory")},l.prototype.isActive=function(){return $(this.main).hasClass("page-on-center")},l}()},function(t,e,r){r.exports=function(){function e(t){n.apply(this,arguments)}var r=(t(6),t(7)),n=t(14),o=t(10);return e.prototype.type="layout",e.prototype.on=o.on,e.prototype.once=o.once,e.prototype.off=o.off,e.prototype.fire=o.fire,e.prototype.isRender=function(t){if(void 0===t)return!!this.isRendered&&this.isRendered;this.isRendered=t},e.prototype.animationEnd=function(t){function e(i){for(t(i),r=0;r<n.length;r++)o.off(n[r],e)}var r,n=["webkitAnimationEnd","OAnimationEnd","MSAnimationEnd","animationend"],o=this;if(t)for(r=0;r<n.length;r++)o.on(n[r],e);return this},e.prototype.transitionEnd=function(t){function e(i){for(t(i),r=0;r<n.length;r++)o.off(n[r],e)}var r,n=["webkitTransitionEnd"],o=this;if(t)for(r=0;r<n.length;r++)o.on(n[r],e);return this},r.inherits(e,n),e}()},function(t,e,r){r.exports=function(){function e(t){function e(t){return t.replace(location.protocol+"//"+location.host,"").split("#")[0].replace(/^\/|\/$/g,"")}t=t||{};this.id||(this.id=t.id||r.getUniqueID()),this.url=t.url||"",this.main=t.main?this.setMainAttr(t.main):this.initMain(t),this.controllerData=null,this.initOptions(t),n.register(this),this.currentStates={},this._listener={},e(this.url)!==e(location.href)?this.referrer=location.href:this.referrer=document.referrer}var r=t(7),n=t(6);return e.prototype={constructor:e,currentStates:null,_listener:null,getType:function(){return this.type||"control"},initOptions:function(t){t=t||{},this.setProperties(t)},initMain:function(){var t=document.createElement("div");return this.setMainAttr(t),t},setMainAttr:function(t){return!!t&&(t.setAttribute("data-blend",this.getType()),t.setAttribute("data-blend-id",this.id),this.url&&t.setAttribute("data-url",this.url),t.id=r.getUniqueID(),t)},render:function(){if(!this.hasState("got")&&!this.hasState("get")){this.addState("get"),this.fire("beforerender",this.id);var t=this;return t.fire("onload",this.id),t.paint(),this.main}},paint:function(t,e){},appendTo:function(t){this.main.appendChild(t)},insertBefore:function(t){this.main.parentNode.insertBefore(t,this.main)},dispose:function(){this.fire("beforedestroy"),this.fire("afterdestroy")},clearDOMEvents:function(){},destroy:function(){this.dispose(),n.cancel(this),$(this.main).remove()},get:function(t){var e=this["get"+r.toPascal(t)];return"function"==typeof e?e.call(this):this[t]},set:function(t,e){var n=this["set"+r.toPascal(t)];if("function"==typeof n)return n.call(this,e);var o={};o[t]=e,this.setProperties(o)},setProperties:function(t){r.extend(this,t)},disable:function(){this.addState("disabled")},enable:function(){this.removeState("disabled")},isDisabled:function(){return this.hasState("disabled")},setUrl:function(t){this.url=t,this.main.setAttribute("data-url",t)},addState:function(t){this.hasState(t)||(this.currentStates[t]=!0)},removeState:function(t){this.hasState(t)&&delete this.currentStates[t]},toggleState:function(t){this[this.hasState(t)?"removeState":"addState"](t)},hasState:function(t){if("string"==typeof t)return!!this.currentStates[t];var e=this,r=t.filter(function(t){return e.currentStates[t]});return!!r.length&&r},on:function(t,e){var r=this;r._listener[t]||(r._listener[t]=[]),r._listener[t].push(e)},off:function(t,e){var r=this._listener[t];if(r){if(!e)return void delete this._listener[t];r.splice(types.indexOf(e),1),r.length||delete this._listener[t]}},fire:function(t,e,r){if(!t)throw new Error("未指定事件名");var n=this._listener[t];if(r=r||this,n)for(var o=0,i=n.length;o<i;o++)n[o].apply(r,e);var a=this["on"+t];return"function"==typeof a&&a.call(this,event),event}},e}()},function(t,e,r){r.exports=function(){var t={},e=window.devicePixelRatio||1;t.prepare=function(t,e,r,n){(n=n||r.main)!==r.main&&r.main.appendChild(n);var o=$(r.main);o.css({top:e.top,left:e.left,right:e.right,bottom:e.bottom}),(e.top||e.bottom)&&(o.css({height:"calc(100% - "+(e.top+e.bottom)+"px)",width:"calc(100% - "+(e.left+e.right)+"px)"}),-1===o.css("height").indexOf("calc")&&(o.css({height:$("body").height()-(e.top+e.bottom),width:$("body").width()+(e.left+e.right)}),$(window).resize(function(){o.css({height:$("body").height()-(e.top+e.bottom),width:$("body").width()+(e.left+e.right)})}))),e.noLoading||r.startLoading();var i,a={};if(a.renderData=function(t,e,r){var n=r.main;if($(".page-content",n).hasClass("pull-to-refresh-content")){var o=$("<div></div>").html(t).find(".page-content").html()||t;$(".page-content",n).html(o),r.fire("onrender","",Date.now()+","+i)}else if($(n).attr("data-title-id")&&void 0===r.myGroup)$(n).html($(t)),r.fire("onrender","",Date.now()+","+i);else if(void 0===r.myGroup)$(n).html($(t).children()),r.fire("onrender","",Date.now()+","+i);else{var t=$("<div></div>").html(t).find(".page-content");$(n).html($(t)),r.fire("onrender","",Date.now()+","+i)}},a.url=function(t,e){if("json"===e){var r=(new Date).getTime();t=t.indexOf("?")>0?t+"&&timestamp="+r:t+"?timestamp="+r}return t},a.localStorageData=function(t,e,r){var n=t.main;n.addEventListener("online",function(){location.href=r.url}),n.addEventListener("offline",function(){location.href=r.url});var o=e;e.match(/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/)&&(o=slark.getActiveId()+e);var i=void 0===Blend.project?t.getProject():Blend.project;if(null!==localStorage.getItem("elong"+i+o)){var s=JSON.parse(localStorage.getItem("elong"+i+o));a.jsonHandle(t,r,e,s,"json")}else t.fire("renderfailed"),console.log("offline no cached data!!")},a.jsonHandle=function(t,e,r,n,o){var s,l;void 0===Blend.project?t.getProject():Blend.project;"object"==typeof n?s=n:"string"==typeof n&&(s=window.JSON.parse(n)),r.match(/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/)&&slark.getActiveId(),$(t.main).attr("data-title",s.doctitle),(slark.is_exists(r,"frender")||slark.is_exists(r,"offline"))&&($(t.main).attr("data-title",s.doctitle),$(t.main).attr("data-title-id",r)),t.layerData(s),t.fetchData?t.fire("onrender","",Date.now()+","+i):(l=e.tpl(s),a.renderData(l,o,t))},a.htmlHandle=function(t,e,r){if(-1!==e.indexOf("<html")){var n=e.substring(e.indexOf("<title"),e.indexOf("</title>"));-1!==e.indexOf("<title")&&n&&(document.title=n.replace(/<title[^>]*>/,""),$(t.main).attr("data-title",n.replace(/<title[^>]*>/,""))),t.myGroup&&$(e).find(".page .bar").remove()}e=$(e).find(".page").length>1?$(e).find(".page")[0]:$(e).find(".page"),t.hasState("slidein")?t.once("onshow",function(){a.renderData(e,r,t)}):a.renderData(e,r,t)},a.fetch=function(t,e,r,n){i=Date.now();var o="json"===e?"application/json":"text/html";$.ajax({url:a.url(t.url,e),type:"get",headers:{Accept:o+"; charset=utf-8"},dataType:e,contentType:o,success:function(o){"json"===e?a.jsonHandle(r,t,n,o,e):a.htmlHandle(r,o,e)},error:function(o,i,s){if(console.log(e+"renderfailed"),!t.errorHandle||t.errorHandle(o,i,s))return slark.router.getInfoFromId(n)||r.myGroup?void(r.is_offline&&a.localStorageData(r,n,t)):(console.log("jump server"),void(location.href=t.url))}})},e.tpl&&"function"==typeof e.tpl)if((Blend.ui.activeLayer?Blend.ui.activeLayer.attr("data-blend-id"):t)!==t)if($(r.main).attr("data-title-id")||void 0!==r.myGroup)e.withoutData?r.fire("onrender"):a.fetch(e,"json",r,t);else{e&&e.tplData&&"object"!=typeof e.tplData&&(e.tplData=JSON.parse(decodeURIComponent(e.tplData)||"{}"));for(var n=$(template(t,e||{})),s=n.hasClass("page")?n:n.find(".page"),l=s[0].classList,d=0,c=l.length;d<c;d++)$(r.main).addClass(l[d]);$(r.main).html(s.children()),r.main.setAttribute("data-title-id",t),r.paint()}else e.withoutData?(r.stopLoading(),r.addState("fetched"),"complete"==document.readyState&&r.fire("onrender")):a.fetch(e,"json",r,t);else a.fetch(e,"html",r,t)},t.resume=function(t){var e;t.myGroup?(console.log("in layer group..."+t.myGroup.index),e=t.myGroup.main):e=$(".pages")[0],$("#"+t.main.id).length||e.appendChild(t.main)};var r={};t.startPullRefresh=function(t){var e,n,o=function(){if(e=$(t.main).find(".page-content"),!e.length)return console.log("pull to refresh should has .page-content"),!1;e.addClass("pull-to-refresh-content"),$(".pull-to-refresh-layer",t.main).length||$(".page-content",t.main).before('<div class="pull-to-refresh-layer"> <div class="preloader"></div><div class="pull-to-refresh-arrow"></div><div class="pull-to-refresh-label"></div> </div>'),n=$(".pull-to-refresh-layer",t.main).css("padding-top",e.css("padding-top")),n.css("margin-top",e.position().top)};if(o(),e.length){var i,a,s,l,d,c={},u=!1,p=!1,f=0,h=function(e){e.removeClass("refreshing").addClass("transitioning"),$(".pull-to-refresh-label",n).text(t.loadingText),t.transitionEnd(function(){e.removeClass("transitioning"),n.removeClass("pull-up refreshing")})},g=function(e){t.transitionEnd(function(){e.removeClass("transitioning")})};r.handleTouchStart=function(t){return!i&&(0===e.parent().length&&o(),!e.hasClass("refreshing")&&(a=!1,i=!(e[0].scrollTop>0),s=void 0,c.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,c.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY,void(d=(new Date).getTime())))},r.handleTouchMove=function(r){if(!i)return!1;var o="touchmove"===r.type?r.targetTouches[0].pageX:r.pageX,d="touchmove"===r.type?r.targetTouches[0].pageY:r.pageY;if(void 0===s&&(s=!!(s||Math.abs(d-c.y)>Math.abs(o-c.x))),!s)return i=!1,!1;if(a||(e.removeClass("transitioning"),f=n.hasClass("refreshing")?44:0,p=!0),a=!0,(l=d-c.y)<0&&!e[0].style.webkitTransform)return i=!1,!1;if(e.hasClass("refreshing"))r.preventDefault(),e[0].style.webkitTransform=l>0?"translate3d(0,"+(Math.pow(l,.85)+f)+"px,0)":"translate3d(0, -"+(Math.pow(-l,.85)-f)+"px,0)";else{if(!(l>0&&e[0].scrollTop<=0||n.hasClass("pull-up")))return void(u=!1);p&&(r.preventDefault(),e[0].style.webkitTransform="translate3d(0,"+(Math.pow(l,.85)+f)+"px,0)"),p&&Math.pow(l,.85)>44||!p&&l>=88?(u=!0,n.addClass("pull-up"),$(".pull-to-refresh-label",n).text(t.releaseText)):(u=!1,n.removeClass("pull-up"),$(".pull-to-refresh-label",n).text(t.pullText))}},r.handleTouchEnd=function(r){return!e.hasClass("refreshing")&&(i&&a?(e.scrollTop<=5&&e.scrollTop(0),e.addClass("transitioning"),e[0].style.webkitTransform="",u?(n.addClass("refreshing"),e.addClass("refreshing"),$(".pull-to-refresh-label",n).text(t.loadingText),t.fire("layerPullDown"),t.once("layerPullEnd",function(){h(e)})):g(e),i=!1,void(a=!1)):(i=!1,a=!1,!1))},t.on("touchstart",r.handleTouchStart),t.on("touchmove",r.handleTouchMove),t.on("touchend",r.handleTouchEnd)}},t.isRefreshing=function(t){return $(t.main).find(".page-content").hasClass("refreshing")},t.endPullRefresh=function(t){t.fire("layerPullEnd")},t.stopPullRefresh=function(t){$(t.main).removeClass("pull-to-refresh-content"),t.off("touchstart",r.handleTouchStart),t.off("touchmove",r.handleTouchMove),t.off("touchend",r.handleTouchEnd)};var n={};return t.startSwipe=function(t,r){var o,i,a,s,l,d,c,u=!1,p=!1,f={},h=!0;i=$(t.main),r=r||$(".pages"),console.log("startSwipe init ... "+t.id);n.handleTouchStart=function(t){if(!h||u)return!1;p=!1,u=!0,o=void 0,f.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,f.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY,c=(new Date).getTime()},n.handleTouchMove=function(n){if(!u)return!1;var c="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,h="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(d=c-f.x,void 0===o&&(o=!!(o||Math.abs(h-f.y)>Math.abs(d))),o)return u=!1,!1;if(!p||p*d<0){p=!1;var g=!1;l=r.width();var v=t.myGroup.getIdByStep(d>0?-1:1);if(console.log("re init layer prvious...",v),a&&(a[0].style.webkitTransform=""),s=t.myGroup.__layers[v],a=$(s.main),v===t.id?g=!0:d>0?a.removeClass("page-on-right").addClass("page-on-left"):a.removeClass("page-on-left").addClass("page-on-right"),0!==a.length&&0!==i.length||(g=!0),g)return u=!1,!1}p=d>0?1:-1,n.preventDefault();var m=Math.abs(d/l);i[0].style.webkitTransform="translate3d("+d+"px,0,0)";var y=d-p*l;1===e&&(y=Math.round(y)),a[0].style.webkitTransform="translate3d("+y+"px,0,0)",a[0].style.opacity=.9+.1*m},n.handleTouchEnd=function(e){if(!u||!p)return u=!1,p=!1,!1;if(u=!1,p=!1,0===d)return $([i[0],a[0]]).css({opacity:"",boxShadow:""}),i[0].style.webkitTransform="",a[0].style.webkitTransform="",!1;var r=Math.abs(d),n=(new Date).getTime()-c,o=!1;(n<300&&r>10||n>=300&&r>l/2)&&(d>0?(i.removeClass("page-on-center page-on-left").addClass("page-on-right"),a.removeClass("page-on-right page-on-left").addClass("page-on-center")):(i.removeClass("page-on-center page-on-right").addClass("page-on-left"),a.removeClass("page-on-right page-on-left").addClass("page-on-center")),o=!0),$([i[0],a[0]]).css({opacity:"",boxShadow:""}).addClass("page-transitioning"),i[0].style.webkitTransform="",a[0].style.webkitTransform="",h=!1,o&&(s.fire("beforeshow"),t.fire("beforehide")),t.transitionEnd(function(){$([i[0],a[0]]).removeClass("page-transitioning"),h=!0,o&&(s.fire("onshow"),t.fire("onhide"))})},t.on("touchstart",n.handleTouchStart),t.on("touchmove",n.handleTouchMove),t.on("touchend",n.handleTouchEnd)},t.endSwipe=function(t){t.off("touchstart",n.handleTouchStart),t.off("touchmove",n.handleTouchMove),t.off("touchend",n.handleTouchEnd)},t.backLayer=function(t){blend.get(t).out()},t}()},function(t,e,r){r.exports=function(){var t={},e=function(t,e){var r=document.createElement("script");r.setAttribute("src",t),document.head.appendChild(r),r.onload=function(){e&&e(r)}};return t.getScript=function(t,r,n){for(var o=0,i=0,a=r.length;i<a;i++)e(r[i],function(){++o===a&&n()})},t.runScript=function(t,e){$("script",t).length&&$("script",t).each(function(){"text/custom"===$(this).attr("type")&&""!==$.trim($(this).html())?window.eval("slark.get('"+e+"').layerData("+$(this).html()+")"):window.eval($(this).html())})},t}()},function(t,e,r){r.exports=function(){var e=t(6),r=t(7),n=t(13),o=t(18),i=t(15),a=t(12),s=!1,l=($("html").hasClass("android"),function(t){n.call(this,t),this._init(t)});r.inherits(l,n),l.prototype.constructor=l,l.prototype.type="layerGroup",l.prototype.top=0,l.prototype.bottom=0,l.prototype.left=0,l.prototype.right=0,l.prototype.index=0,l.prototype._init=function(t){var e=this,n={},o=null;if(e.layers&&e.layers.length){!1===this.routing?this.main.setAttribute("data-routing","false"):this.main.setAttribute("data-routing","true");for(var i=0,a=e.layers.length;i<a;i++)e.layers[i].id||(e.layers[i].id=r.getUniqueID()),e.layers[i].active&&(o?(console.log("active id:"+o+" is already defined.. ignore the coming active ones:"+e.layers[i].id),delete e.layers[i].active):o=e.layers[i].id),e.layers[i].index=i,n[e.layers[i].id]=e.layers[i];return e._layers=n,e.__layers={},e.activeId=o||e.layers[0].id,e.layerArray=[],e.render(),e.once("onrender",function(){e._initEvent(),t.active&&e.in()}),e.once("renderfail",function(){console.error("render fail")}),this}};return l.prototype._initEvent=function(){return!1!==this.enableSwipe&&this.initSwipe(),null},l.prototype.paint=function(){var t=this;"none"===this.layerAnimate?s=!0:this.layerAnimate&&$(this.main).addClass(this.layerAnimate),void 0!==this.parent?$(this.main).addClass("layerGroup page page-on-center").appendTo(this.parent):$(this.main).addClass("layerGroup page page-on-center").appendTo(e.activeLayer),$(this.main).css({top:t.top,left:t.left,right:t.right,bottom:t.bottom}),(t.top||t.bottom)&&($(this.main).css({height:"calc(100% - "+(t.top+t.bottom)+"px)",width:"calc(100% - "+(t.left+t.right)+"px)"}),-1===$(this.main).css("height").indexOf("calc")&&($(this.main).css({height:$("body").height()-(t.top+t.bottom),width:$("body").width()+(t.left+t.right)}),$(window).resize(function(){$(t.main).css({height:$("body").height()-(t.top+t.bottom),width:$("body").width()+(t.left+t.right)})})));for(var r in this._layers)this.add(this._layers[r]);return this},l.prototype.active=function(t){return o.showLayer(this.id,t,this),this},l.prototype.idtoindex=function(t){return this._layers[t].index||0},l.prototype.indextoid=function(t){return t>=this.layers.length?t=this.layers.length-1:t<0&&(t=0),this.index=t,this.layers[t].id},l.prototype.getIdByStep=function(t){return this.index=this.idtoindex(this.activeId),this.indextoid(this.index+t)},l.prototype.next=function(){this.index=this.idtoindex(this.activeId);var t=this.indextoid(++this.index);return o.showLayer(this.id,t,this),this},l.prototype.prev=function(){this.index=this.idtoindex(this.activeId);var t=this.indextoid(--this.index);return o.showLayer(this.id,t,this),this},l.prototype.remove=function(t){return o.removeLayer(this.id,t),delete this._layers[t],this},l.prototype.add=function(t,e){var n=this;t.id||(t.id=r.getUniqueID());var o=Blend.ui.activeLayer.attr("data-blend-id");if(t.tpl="undefined"!=typeof template&&template.get(o)&&"function"==typeof template.get(o)?template.get(o):o,t.groupId=o,this._layers[t.id]&&this.__layers[t.id])return console.log("layerid:"+t.id+" in group has already exist..."),t.url&&(this._layers[t.id].url,t.url),this.__layers[t.id].in(),void(this.__layers[t.id].force&&this.__layers[t.id].onrender());n.onshow&&(t.onshow=n.onshow),n.beforeshow&&(t.beforeshow=n.beforeshow),n.onrender&&(t.onrender=n.onrender),t.myGroup=this;var i=new a(t);return this.__layers[t.id]=i,this._layers[t.id]=t,0===e?this.layerArray.unshift(i):this.layerArray.push(i),this.main.appendChild(i.main),this},l.prototype.update=function(t,e){return o.updateLayer(this.id,t,e),r.extend(this._layers[e.id],e),this},l.prototype.in=function(){if(this.isActive())return void console.log("layergroup is already active.");this.__layers[this.activeId].in()},l.prototype.out=function(){var t=this;if(!this.isActive())return void console.log("layer group is already inactivity ");var r=e.layerStack.length>1?e.layerStack[e.layerStack.length-2]:$(".page-on-left:first");s?(r.removeClass("page-on-left").addClass("page-on-center"),$(t.main).removeClass("page-on-center").addClass("page-on-right")):(r.removeClass("page-on-left").addClass("page-from-left-to-center"),$(t.main).removeClass("page-on-center").addClass("page-from-center-to-right")),e.layerStack.pop();var n=function(){t.fire("onhide")};return s?n():this.animationEnd(function(){n(),r.removeClass("page-from-left-to-center").addClass("page-on-center"),$(t.main).removeClass("page-from-center-to-right").addClass("page-on-right")}),this},l.prototype.destroy=function(t){n.prototype.destroy.apply(this,arguments)},l.prototype.initSwipe=function(){for(var t in this._layers)i.startSwipe(this.__layers[t],$(this.main))},l.prototype.isActive=function(){return $(this.main).hasClass("page-on-center")},l}()},function(t,e,r){r.exports=function(){var e={},r=t(15),n=window.devicePixelRatio||2;return e.create=function(t,e,o,i){var a={id:t||uniqid(),infos:e};o.active&&(a.active=o.active);var s={};["left","top","width","height"].forEach(function(t,e){void 0!==o[t]&&(s[t]=o[t]*n)});for(var l,d=0,c=e.length;d<c;d++)l=document.createElement("div"),l.className="page",r.prepare(e[d].id,o,l),i.main.appendChild(l);return t},e.showLayer=function(t,e,r){return r.__layers[e]?(r.__layers[e].in(),r.activeId=e):console.warn("no layerid found..."+e),t},e.addLayer=function(t,e){return window.lc_bridge.addLayerInGroup(t,e,index),t},e.removeLayer=function(t,e){return window.lc_bridge.removeLayerInGroup(t,e),t},e.updateLayer=function(t,e,r){return window.lc_bridge.updateLayerInGroup(t,e,r),t},e}()},function(e,r,n){t("hotelfx@1.1.0/src/js/dateextend.js");var o=t("hotelfx@1.1.0/entry/hotel/js/plugins/getMvtResult.js"),i={},a=navigator.userAgent;i.isLowDevice=function(){var t=navigator.userAgent.toLowerCase();return!(-1===t.indexOf("iemobile")&&(-1===t.indexOf("android")||!/ucbrowser\/[2-9]\./.test(t)&&!/android [1-2]\./.test(t)))}(),i.supports=function(t,e){return!1!==i.hasSupport()&&(void 0===e?CSS.supports(t)||window.supportsCSS&&supportsCSS(t):CSS.supports(t,e)||window.supportsCSS&&supportsCSS(t,e))},i.hasSupport=function(){return!!(window.CSS&&window.CSS.supports||window.supportsCSS)},i.animationEnd=function(){var t,e;if(i.hasSupport()){e={"-webkit-transform":"webkitAnimationEnd","-o-transform":"oAnimationEnd","-moz-transform":"AnimationEnd","-ms-transform":"msAnimationEnd",transform:"animationEnd"};for(t in e)if(i.supports(t,"initial"))return i.transform=t,e[t]}else{var r=document.createElement("element");e={WebkitTransform:"webkitAnimationEnd",OTransform:"oAnimationEnd",MozTransform:"AnimationEnd",MsTransform:"msAnimationEnd",transform:"animationEnd"};for(t in e)if(void 0!==r.style[t])return i.transform=t,e[t]}}(),i.transitionEnd=function(){var t,e;if(i.hasSupport()){e={"-webkit-transition":"webkitTransitionEnd","-o-transition":"oTransitionEnd","-moz-transition":"transitionend","-ms-transition":"msTransitionEnd",transition:"transitionend"};for(t in e)if(i.supports(t,"initial"))return i.transition=t,e[t]}else{var r=document.createElement("element");e={WebkitTransition:"webkitTransitionEnd",OTransition:"oTransitionEnd",MozTransition:"transitionend",MsTransition:"msTransitionEnd",transition:"transitionend"};for(t in e)if(void 0!==r.style[t])return i.transition=t,e[t]}}(),i.moveWidget=function(t,e,r,n){i.isLowDevice||!i.animationEnd?(t.addClass("page-on-"+r),t.removeClass("page-on-"+e),n&&n()):(t.bind(i.animationEnd,function(){t.addClass("page-on-"+r),t.removeClass("page-on-"+e),t.removeClass("page-from-"+e+"-to-"+r),n&&n(),t.unbind(i.animationEnd)}),t.removeClass("page-on-"+e).addClass("page-from-"+e+"-to-"+r))},i.removeZeroOfDate=function(t){return"0"==t.charAt(0)?t.substring(1):t},i.getTimezoneDate=function(t){var e=new Date(t),r=e.getTime(),n=6e4*e.getTimezoneOffset(),o=r+n;return new Date(o+288e5)},i.getElementLeft=function(t){for(var e=t.offsetLeft,r=t.offsetParent;null!==r;)e+=r.offsetLeft,r=r.offsetParent;return e},i.getElementTop=function(t){for(var e=t.offsetTop,r=t.offsetParent;null!==r;)e+=r.offsetTop,r=r.offsetParent;return e},i.getElementVisibleLeft=function(t){for(var e=t.offsetLeft,r=t.offsetParent;null!==r;)e+=r.offsetLeft,e-=r.scrollLeft,r=r.offsetParent;return $(r).hasClass("page")&&(e-=r.scrollLeft),e},i.getElementVisibleTop=function(t){for(var e=t.offsetTop,r=t.offsetParent;null!==r;)e+=r.offsetTop,e-=r.scrollTop,r=r.offsetParent;return $(r).hasClass("page")&&(e-=r.scrollTop),e},i.getLanguage=function(t,e,r){if(!e)return"";var n=e[t];if(!n)return"";if(r&&r.length>0)for(var o=0;o<r.length;o++)n=n.replace(new RegExp("\\{"+o+"\\}","g"),r[o]);return n},i.getHash=function(t){for(var e=location.hash.substring(1).split("&"),r=0;r<e.length;r++){var n=e[r].split("=");if(n.length>1&&t==n[0])return n[1]}return null},i.setHash=function(t){if(t&&t.length){for(var e=location.hash,r=e,n=0;n<t.length;n++){var o=t[n];!function(t,r){var n=e.indexOf(t),o=e.charAt(n+t.length);if(r){if(0===e.length)return void(e=t+"="+r);if(n>0&&("="==o||"&"==o||""===o)){var a=(i.getHash(t),e.substring(n));return o=a.indexOf("&"),a=a.substring(0,o>0?o:a.length),void(e=e.replace(a,t+"="+r))}e+="&"==e.charAt(e.length-1)?"":"&"+t+"="+r}}(o.name,o.value)}"#"!==e.charAt(0)&&(e="#"+e),r!=e&&History.replaceState(this.getActiveId(),document.title,location.pathname+location.search+e)}},i.setSearch=function(t){if(this.getProLen(t)){var e=location.search;for(var r in t)e=this.updateQuery(e,r,t[r]);e=e.replace(/(.+)&$/g,"$1"),History.replaceState(this.getActiveId(),document.title,location.pathname+e)}},i.getQueryJson=function(){var t={};return location.search.substr(1).replace(/(\w+)=(.*?)(&|#|$)/g,function(e,r,n){t[r]=decodeURIComponent(n)}),t},i.updateQuery=function(t,e,r){var n,o,i;return o=new RegExp("([?|&])"+e+"=.*?(&|#|$)","i"),t.match(o)?r?t.replace(o,"$1"+e+"="+r+"$2"):t.replace(o,"$1"):(n="",i=-1!==t.indexOf("?")?"&":"?",-1!==t.indexOf("#")&&(n=t.replace(/.*#/,"#"),t=t.replace(/#.*/,"")),t+i+e+"="+r+n)},i.clone=function(t){var e=null;if(t)if("object"!=typeof t)e=t;else{e=t.constructor==Array?[]:{};for(var r in t)e[r]=i.clone(t[r])}else e=t;return e},i.parseUrl=function(t){var e=t||window.location.href,r=document.createElement("a");return r.href=e,{source:e,protocol:r.protocol.replace(":",""),host:r.hostname,port:r.port,query:r.search,params:function(){for(var t,e={},n=r.search.replace(/^\?/,"").split("&"),o=n.length,i=0;i<o;i++)n[i]&&(t=n[i].split("="),e[t[0]]=decodeURIComponent(t[1]));return e}(),file:(r.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],hash:r.hash.replace("#",""),path:r.pathname.replace(/^([^\/])/,"/$1"),relative:(r.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:r.pathname.replace(/^\//,"").split("/")}},i.replaceUrlParams=function(t,e){for(var r in e){var n=!1;for(var o in t.params)if(r.toLowerCase()==o.toLowerCase()){t.params[o]=e[r],n=!0;break}n||(t.params[r]=e[r])}var i=t.protocol+"://"+t.host+(t.port?":"+t.port:"")+t.path+"?";for(var a in t.params)i+=a+"="+t.params[a]+"&";return"&"==i.substr(i.length-1)&&(i=i.substr(0,i.length-1)),""!=t.hash&&(i+="#"+t.hash),i},i.smartFloat=function(t){return(t=Math.round(100*t))/100},i.countTimer={},i.countTimer.set=function(){},i.countTimer.clear=function(){},i.getParam=function(t,e){var r,n;return n=new RegExp("[?|&]"+t+"=(.*?)(&|#|$)","i"),(r=e?("?"+e).match(n):window.location.search.match(n))&&decodeURIComponent(r[1])||void 0},i.handleBlankPaint=function(t,e,r,n){window.applicationCache.addEventListener("updateready",function(t){window.applicationCache.status==window.applicationCache.UPDATEREADY&&(window.applicationCache.swapCache(),confirm("存在最新数据，是否刷新")&&window.location.reload())},!1)},i.testVersion=function(t){if(0==ElongBridge.RUNTIME_VERSION)return!1;for(var e=ElongBridge.RUNTIME_VERSION.split("."),r=t.split("."),n=!1,o=0;o<e.length;o++)e[o]=parseInt(e[o]),r[o]=parseInt(r[o]);return e.length>2&&(e[0]>r[0]?n=!0:e[0]==r[0]&&(e[1]>r[1]?n=!0:e[1]==r[1]&&e[2]>=r[2]&&(n=!0))),n},i.setAppNavBar=function(){"undefined"!=typeof ElongBridge&&i.testVersion("9.10.0")&&ElongBridge.setNavbar({data:[{key:"title",content:document.title,priority:0}],onsuccess:function(){console.log("set navbar title success")},onfail:function(){console.log("set navbar title faile")}})},i.throttle=function(t,e){var r=0;return function(){var n=+new Date;n-r>e&&(t.apply(this,arguments),r=n)}},i.debounce=function(t,e,r){var n,o;return function(){var i=this,a=arguments,s=function(){n=null,r||(o=t.apply(i,a))},l=r&&!n;return clearTimeout(n),n=setTimeout(s,e),l&&(o=t.apply(i,a)),o}},i.setCookie=function(t,e,r){var n="";if(r){var o=new Date;o.setTime(o.getTime()+r),n="; expires="+o.toUTCString()}document.cookie=t+"="+e+n+"; path=/; domain=.elong.com"},i.getCookie=function(t){var e,r=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(r))?decodeURIComponent(e[2]):""},i.getMvtResult=function(t){return o(t).val},i.getChannelId=function(){return window.TJObject&&window.TJObject.chid||""},i.isWeixin=function(){return/MicroMessenger/g.test(a)},i.isAndroid=function(){return a.match(/(Android);?[\s\/]+([\d.]+)?/)},i.isQQ=function(){return/QQ\//.test(a)},i.getProLen=function(t){var e=0;if(t&&"object"==typeof t)for(var r in t)t.hasOwnProperty(r)&&e++;return e},i.addtj=function(t,e){t.length&&t.addClass("tjclick").attr("data-tj",JSON.stringify(e))},i.compareDiff=function(t,e){var r=!1;if(t&&"object"==typeof t&&e&&"object"==typeof e){if(this.getProLen(t)===this.getProLen(e))for(var n in t){var o=t[n],i=e[n];if("object"==typeof o&&"object"==typeof i)r=this.compareDiff(o,i);else if(o!==i){r=!0;break}}else r=!0}else r=!0;return r},i.fetch=function(t,e,r){var n=/(https?:)?\/\/[^\.]*\.([^\/|?]*)/g,o=$.Deferred(),i={type:"GET",
dataType:"json",jsonpCallback:"",timeout:0,apiPrefix:"//xapi.elong.com",beforeSend:function(){},complete:function(){},cache:""},a=$.extend(i,r);return $.ajax({url:n.test(t)?t:a.apiPrefix+t,data:e||{},timeout:a.timeout,dataType:a.dataType,type:a.type,jsonpCallback:a.jsonpCallback,xhrFields:{withCredentials:!0},cache:a.cache,beforeSend:a.beforeSend,complete:a.complete,success:function(t,e,r){return o.resolve(t,e,r)},error:function(t,e,r){return o.reject(t,e,r)}}),o.promise()},i.guid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})},i.setStorageCache=function(t,e,r){var n=(new Date).getTime()+(r||99999999999);localStorage.setItem(t,JSON.stringify({data:e,time:n}))},i.removeStorageCache=function(t){localStorage.removeItem(t)},i.getStorageCache=function(t){var e=localStorage.getItem(t);if(!e)return"";var r=JSON.parse(e);return(new Date).getTime()-r.time>0?(localStorage.removeItem(t),""):r.data},i.inherits=function(t,e){var r=function(){};r.prototype=e.prototype;var n=t.prototype,o=t.prototype=new r;for(var i in n)o[i]=n[i];return t.prototype.constructor=t,t.superClass=e.prototype,t},i.template=function(t,e,r){var e=e||{},r=r||"g";for(var n in e){var o=e[n];void 0!==o&&null!==o&&(t=t.replace(new RegExp("\\$\\{"+n+"\\}|{{"+n+"}}|{#"+n+"}|#{"+n+"}",r),o))}return t},n.exports=i},function(t,e,r){r.exports=function(){var t=function(){this.routers={}};return t.prototype.add=function(t){for(var e in t)t[e].url_pattern||(t[e].url_pattern=new RegExp(t[e].url,"i")),this.routers[e]=t[e]},t.prototype.getInfoFromId=function(t){if("string"!=typeof t)return void console.warn("router-getinfofromurl-warning. id is not string");for(var e in this.routers)if(this.routers[e].tpl===t)return this.routers[e]},t.prototype.getInfoFromUrl=function(t){if("string"!=typeof t)return void console.warn("router-getinfofromurl-warning. url is not string");if(t.indexOf("#!i!/")>0){var e=t.indexOf("!&")>0?t.indexOf("!&"):t.length,r=t.substring(t.indexOf("#!i!/")+5,e);return this.routers[r]}var n,o,i;for(var a in this.routers)this.routers[a].url_pattern.test(t)&&(i=t.match(this.routers[a].url_pattern)[0].length,n?o<i&&(n=this.routers[a],o=i):(n=this.routers[a],o=i));return n},t.prototype.getidFromUrl=function(t){var e=this.getInfoFromUrl(t);return e&&e.tpl},t.prototype.getUrlFromTpl=function(t){return this.routers[t]&&this.routers[t].url||""},t.prototype.cleanUrl=function(t,e,r,n){if(!e)return!1;"string"!=typeof e&&(e=this.getidFromUrl(t)),void 0!==r&&(e=n);var o=this.getUrlFromTpl(e);return void 0!==this.routers[e].is_hash&&!0===this.routers[e].is_hash?this.getUrlFromHashUrl(t,e):t.substring(t.lastIndexOf(o))},t.prototype.getUrlFromHashUrl=function(t,e){var r="";if(t.indexOf("!&")>0&&(r=t.substr(t.indexOf("!&")).replace(/!&/g,"&&").replace("&&","?")),t.indexOf("?")>0&&(r+=t.substr(t.indexOf("?"))),"string"!=typeof e&&(e=this.getidFromUrl(t)),!0===this.routers[e].is_hash)return this.getUrlFromTpl(e)+r},t.prototype.getTplFromHashUrl=function(t){if(t.indexOf("#!i!/")>0){var e=t.indexOf("!&")>0?t.indexOf("!&"):t.length;return t.substring(t.indexOf("#!i!/")+5,e)}if(void 0!==this.getidFromUrl(t))return this.getidFromUrl(t)},t.prototype.getHashFromUrl=function(t){var e=this.getInfoFromUrl(t),r=new RegExp("/\\w*"+e.tpl+"\\w*"),n=t.split("?")[0].match(r),o=void 0!==n?n.index+1:t.split("?")[0].length,i=t.substr(0,o);return t.indexOf("#!i!/")>0?i+=e.tpl:i+="#!i!/"+e.tpl,t.split("?").length>1&&(i+="!&"+t.split("?")[1].replace(/&&/g,"!&")),i},t}()},function(e,r,n){window.Promise=t("es6-promise@4/dist/es6-promise.js").Promise,n.exports=function(t){function e(t){if(!t)throw"error preventScroll options cannot be empty...";"string"==typeof t.selectors&&(l.selectors.push(t.selectors),delete t.selectors),this.offsetHeight=0,this.scrollHeight=0,this.startMoveYmap={},this.startMoveXmap={},this.index=0,this.config=$.extend(!0,{},l,t),this.config.dom&&(this.dom=this.config.dom),this._init()}function r(t){var e=/(Android)/i.test(d),r=/(iPhone|iPad|iPod|iOS)/i.test(d)&&!e;return"ios"==t?r:e}var n=!1;navigator.userAgent.match(/ (micromessenger|qq)/i)&&(n=!0),$(document).on("click","a[href='#']",function(t){return!1}),$(document).on("click",".label-switch",function(t){var e=$(this).find(".checkbox");return e.hasClass("active")?e.removeClass("active").attr("data-checkbox","false"):e.addClass("active").attr("data-checkbox","true"),!1}),window.Contacts&&navigator.userAgent.toLowerCase().indexOf("android")>-1&&$(document).on("click","a[href^='tel']",function(t){var e=$(this).attr("href").split(":");Contacts.tel(e[1])}),$(document).on("click",".label-checkbox",function(t){var e=$(this).find(".checkbox");return e.hasClass("checked")?e.removeClass("checked"):e.addClass("checked"),!1}),$(document).on("click","[data-rel=back]",function(t){if(Date.now()-slark.initTime<1200)return!1;var e=$(this).attr("href"),r=$(this).attr("data-href"),n=e+location.hash;return"no"!=r&&(r&&"null"!=r?slark.addPager({url:r,active:!0,reverse:!0}):slark.isLowDevice||slark.canGoBack()||e===location.href||n===location.href?History.back():e&&slark.addPager({url:e,active:!0,reverse:!0}),!1)});var o={},i={};$(document).on("beforeshow",function(t){slark.titleControl=i;var e=$(t.srcElement||t.target),r=void 0!==t.originalEvent?t.originalEvent.detail:t.detail;if("layer"===e.attr("data-blend")){var n=$(e).attr("data-blend-id");if("layerGroup"===e.parent().attr("data-blend")){n=$(e).parents("div[data-blend=layer]").attr("data-blend-id");var a=slark.is_exists(n,"is_hash")?slark.router.getHashFromUrl(e.attr("data-url")):e.attr("data-url");"false"===e.parent().attr("data-routing")||(slark.get(slark.getActiveId()).url=e.attr("data-url"),slark.getActiveLayer().attr("data-url",e.attr("data-url")),History.replaceState({blendid:e.attr("data-blend-id")},document.title,a))}else{var a=slark.is_exists(n,"is_hash")?slark.router.getHashFromUrl(e.attr("data-url")):e.attr("data-url");o[r]||(o[r]=!0,e.attr("data-title")?History.pushState({blendid:e.attr("data-blend-id")},e.attr("data-title"),a):History.pushState({blendid:e.attr("data-blend-id")},e.attr("data-title")||e.attr("data-blend-id"),a)),e.attr("data-title")?(document.title&&document.title!==e.attr("data-title")&&History.replaceState(e.attr("data-blend-id"),e.attr("data-title"),a),i[e.attr("data-blend-id")]=e.attr("data-title")):i[e.attr("data-blend-id")]=!1}}});var a=function(t){document.title=t};n&&($(document).on("beforeshow",function(t){var e=$(t.target||t.srcElement);e.attr("data-title")&&a(e.attr("data-title"))}),$(document).on("onrender",function(t){var e=$(t.target||t.srcElement);e.attr("data-title")&&t.detail==slark.getActiveId()&&a(e.attr("data-title"))})),$(document).on("onrender",function(t){var e=$(t.srcElement||t.target);!1===i[e.attr("data-blend-id")]&&e.attr("data-title")&&(i[e.attr("data-blend-id")]=e.attr("data-title"),History.replaceState(e.attr("data-blend-id"),e.attr("data-title"),location.href))}),$(document).on("onshow",function(t){var e=$(t.srcElement||t.target),r=void 0!==t.originalEvent?t.originalEvent.detail:t.detail;"layer"===e.attr("data-blend")&&(o[r]=!1)}),History.Adapter.bind(window,"statechange",function(){var t=History.getState(),e=slark.router.getidFromUrl(t.url);if(!slark.getActiveId()||slark.getActiveId()&&e===slark.getActiveId())return void console.log("active id === state layerid, return;");var r=slark.router.cleanUrl(t.url,e);i[e]&&i[e]!=document.title&&(document.title=i[e]),e&&!0!==o[e]&&slark.getActiveId()!==e?slark.get(e)?(slark.get(e).myGroup||(o[e]=!0),slark.is_exists(e,"is_hash")&&(r=slark.router.getUrlFromHashUrl(r,e)),slark.get(e).in({url:r})):(o[e]=!0,slark.addPager({url:t.url,active:!0})):e||location.reload()});var s=window,l={dom:$("body"),selectors:[],preventClass:"prevent-scroll-container",preventStyleId:"prevent-scroll-style",preventStyle:"{overflow-y: scroll; -webkit-overflow-scrolling: touch;}"};e.prototype={constructor:e,_init:function(){this._appendStyle(),this._bindEvent(this.config.selectors)},_initStart:function(t,e){if(r("ios")){var n=$(e),o=this,i=n.attr("data-preventid");i||(i=this.index++,n.attr("data-preventid",i),n.addClass(o.config.preventClass),this.startMoveYmap[i]=0,this.startMoveXmap[i]=0)}},_appendStyle:function(){if(!$(this.config.preventStyleId).size()){var t=$('<style id="'+this.config.preventStyleId+'"></style>');t.html("."+this.config.preventClass+this.config.preventStyle),$("head").eq(0).append(t)}},_startMove:function(t,e){var r=t||s.event,n=$(e).attr("data-preventid"),o=$(e);this.offsetHeight=o.offset().height,this.scrollHeight=o[0].scrollHeight,this.startMoveYmap[n]=r.touches[0].clientY,this.startMoveXmap[n]=r.touches[0].clientX},_preventMove:function(t,e){var r="11",n=t||s.event,o=$(e),i=o.attr("data-preventid"),a=n.touches[0].clientY,l=n.touches[0].clientX,d=this.startMoveYmap[i],c=this.startMoveXmap[i],u=o.scrollTop(),p=this.offsetHeight,f=this.scrollHeight;if(Math.abs(c-l)<25&&Math.abs(d-a)>3&&(0===u?r=p>=f?"00":"01":u+p>=f&&(r="10"),"11"!=r)){var h=a-d>0?"10":"01";if(!(parseInt(r,2)&parseInt(h,2)))return void n.preventDefault()}},_bindEvent:function(t){for(var e=this,r="",n=$(e.dom),o=0,i=t.length;o<i;o++){if(!(r=t[o]))throw"error";n.off("touchstart",r).on("touchstart",r,function(t){e._isChildren(this)||(e._initStart.call(e,t,this),e._startMove.call(e,t,this))}),n.off("touchmove",r).on("touchmove",r,function(t){e._isChildren(this)||e._preventMove.call(e,t,this)})}},_isChildren:function(t){for(var e=this.config.selectors,r=$(t),n=0;n<e.length;n++)if(r.find(e[n]).size())return!0;return!1},add:function(t){var e=$(t),r=e.attr("data-preventid");r&&r in this.startMoveYmap||(this.config.selectors.push(t),this._bindEvent([t]))},del:function(t){var e=$(this.dom);e.off("touchstart",t),e.off("touchmove",t)}};var d=navigator.userAgent,c=!!d.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(d.toLowerCase().match(/ micromessenger/)&&c){new e({selectors:["header",".page-content",".detail-hotelpic",".invoice-dets",".logistics",".picshow_nav",".spic_img",".header-search",".mask-layer",".list-sider",".sp-content",".per-list",".bot-btn",".advanced-mask-layer",".weixin-custom-mask",".filter-sp",".order_pr_info",".order_pri_close",".fastchoose",".order_detail_info",".order_pri_close",".orderdetail_list_detail_things",".preloader-indicator-modal",".preloader-indicator-overlay",".inner-mask",".toptitle",".addguide",".friendqa-get-section",".common-mask",".preventscroll-content"]})}!function(){if(document&&document.documentElement&&t&&1==t("308").val){var e=document.createElement("div");e.className="ripple";document.documentElement.appendChild(e);document.documentElement.addEventListener("click",function(t){e.style.cssText="left: "+(t.pageX-20)+"px;top:"+(t.pageY-20)+"px;",e.className=["ripple","rippleAni"].join(" "),setTimeout(function(){e.style.left="-100px",e.className="ripple"},290)},!1)}else setTimeout(arguments.callee,16)}()}(t("hotelfx@1.1.0/entry/hotel/js/plugins/getMvtResult.js"))}]});define("hotelfx@1.1.0/entry/hotel/mainFromOrder.js", document.currentScript.src, function (require, __dirname) {
			return [// entry/hotel/mainFromOrder.js
			function (__inner_require__, exports, module) {
						// require("./main.scss");
						// require("../wxqbh5/sass/wxqbh5.scss");
						module.exports = function (core, j) {
									core.init(); //立刻onrender 当前页面
									// j.setChannel('hotel','FEframework');
						}(require('hotelfx@1.1.0/src/js/core.js'), require('hotelfx@1.1.0/src/js/j.js'), require('hotelfx@1.1.0/entry/hotel/js/wxjssdk.js'), __inner_require__(1 /*entry/hotel/js/routeFromOrder.js*/), __inner_require__(2 /*entry/hotel/js/createorder.js*/), __inner_require__(35 /*entry/hotel/js/finishorder.js*/));
			}, // entry/hotel/js/routeFromOrder.js
			function (__inner_require__, exports, module) {
						module.exports = function (core) {
									//key 匹配 id
									// tpl 匹配 未来的模板
									// url 匹配 url
									// js 匹配 js
									if (location.port != '3000') {
												// 集成环境
												core.router.add({ "h5_createorder": { lindex: 1, tpl: "h5_createorder", title: "订单填写", url: "/hotelwxqb/createorder" }, "h5_finishorder": { lindex: 2, tpl: "h5_finishorder", title: "订单完成", url: "/hotelwxqb/finishorder" } });
									} else {
												//静态环境
												core.router.add({ "h5_createorder": { lindex: 1, tpl: "h5_createorder", url: "createorder.html" }, "h5_finishorder": { lindex: 2, tpl: "complete", url: "complete.html" } });
									}
						}(require("hotelfx@1.1.0/src/js/core.js"));
			}, // entry/hotel/js/createorder.js
			function (__inner_require__, exports, module) {
						var StorageCache = require('hotelfx@1.1.0/entry/hotel/js/plugins/storage_cache.js'),
						    common = require('hotelfx@1.1.0/src/js/common.js'),
						    core = require('hotelfx@1.1.0/src/js/core.js'),
						    replaceLocalStorage = require('hotelfx@1.1.0/src/js/replaceLocalStorage.js'),
						    replaceBackUrl = __inner_require__(3 /*src/js/replaceBackUrl.js*/),
						    validate = __inner_require__(4 /*src/js/validate.js*/),
						    dialog = require('hotelfx@1.1.0/src/js/dialog.js'),
						    PluginManager = require('hotelfx@1.1.0/src/js/PluginManager.js'),
						    clearInput = __inner_require__(5 /*src/js/clearInput.js*/),
						    Geolocation = require('hotelfx@1.1.0/src/js/getLocation.js'),
						    aborting = require('hotelfx@1.1.0/entry/hotel/js/components/aborting.js'),
						    titleManage = require('hotelfx@1.1.0/entry/hotel/js/plugins/wxTitle.js'),
						    friendQaManager = require('hotelfx@1.1.0/entry/hotel/js/friendQaManager.js'),
						    oldCustomers = require('hotelfx@1.1.0/entry/hotel/js/activity/oldCustomers.js'),
						    checkbox = __inner_require__(6 /*entry/hotel/js/components/checkbox.js*/),
						    invoiceForCO = __inner_require__(7 /*entry/hotel/js/invoice/invoiceForCO.js*/),
						    //entryInvoiceManager  = require("./invoice/entryInvoiceManager"),
						toast = require('hotelfx@1.1.0/src/js/toast.js'),
						    guidetextTpl = __inner_require__(11 /*entry/hotel/tpl/guidetext.js*/),
						    addGuideTpl = __inner_require__(12 /*entry/hotel/tpl/addGuide.js*/),
						    addClauseTpl = __inner_require__(13 /*entry/hotel/tpl/addClause.js*/),
						    addKickbackTpl = __inner_require__(14 /*entry/hotel/tpl/addKickback.js*/),
						    createOrderConfirmTpl = __inner_require__(15 /*entry/hotel/tpl/createOrderConfirm.js*/),
						    createorderTpl = __inner_require__(16 /*entry/hotel/tpl/createorder.js*/),
						    roomRpDetailForNewTpl = __inner_require__(17 /*entry/hotel/tpl/roomRpDetailForNew.js*/),
						    sendLog = require('hotelfx@1.1.0/src/js/tjSendLog.js'),
						    checkHotelInfo = __inner_require__(18 /*entry/hotel/js/components/checkhotelinfo.js*/),
						    ctrlErrorCode = __inner_require__(20 /*entry/hotel/js/pages/createorder/ctrlErrorCode.js*/),
						    ctrlLoginState = __inner_require__(21 /*entry/hotel/js/pages/createorder/ctrlLoginState.js*/),
						    ctrlPromotionText = __inner_require__(22 /*entry/hotel/js/pages/createorder/ctrlPromotionText.js*/);var XLog = require('elong-xlog@0.1/dist/index.js');__inner_require__(23 /*src/js/slideInput.js*/);require('hotelfx@1.1.0/lib/zepto.scrollfocus.js');require('hotelfx@1.1.0/src/js/calendar.js'); //new createorder
						var invoiceForNewCO = __inner_require__(24 /*entry/hotel/js/invoice/invoiceForNewCO.js*/),
						    createOrderShowPriceTpl = __inner_require__(34 /*entry/hotel/tpl/createOrderShowPrice.js*/);require('hotelfx@1.1.0/src/js/dateextend.js');require('hotelfx@1.1.0/src/js/slideSelector.js');require('hotelfx@1.1.0/entry/hotel/js/elongCompatible.js');require('hotelfx@1.1.0/entry/hotel/js/cancleInsuranceInfo.js');core.onrender("h5_createorder", function (dom) {
									window.TJObject = window.TJObject || {};window.TJObject.extendedFields = JSON.stringify(window.TJObject.extendedFields);sendLog.init("h5_createorder");slark.get("h5_createorder").startLoading();var __waittingTime__ = +new Date();var ajaxWaittingFlag = true;core.fetch('/createorder/api/createorder/', location.search.replace(/^\?/g, "")).then(function (data) {
												// if (window['tjClient'] && ajaxWaittingFlag) {
												//     ajaxWaittingFlag = false;
												//     window.tjClient.send("__firstTime__",[{
												//         url: location.protocol + "//" + location.host + "/createorder/api/createorder/",
												//         time: +new Date() - __waittingTime__,
												//         size: JSON.stringify(data).length
												//     }]);
												// }
												if (window['xlog'] && ajaxWaittingFlag) {
															ajaxWaittingFlag = false; // !!window.xlog && xlog.sendFirstScreenTime([{
															//     url: location.protocol + "//" + location.host + "/createorder/api/createorder/",
															//     time: +new Date() - __waittingTime__,
															//     size: JSON.stringify(data).length
															// }]);
															onlyPoint({ url: location.protocol + "//" + location.host + "/createorder/api/createorder/", time: +new Date() - __waittingTime__, size: JSON.stringify(data).length });
												}slark.get("h5_createorder").stopLoading();var $DATA_CREATEORDER = data;window.$DATA_CREATEORDER = $DATA_CREATEORDER;var pageData = { vm: data };if (!data.errorCode && data.errorCode == "") {
															$DATA_CREATEORDER.specialRequirement = JSON.parse($DATA_CREATEORDER.specialRequirement || '[]');$DATA_CREATEORDER.additionList = JSON.parse($DATA_CREATEORDER.additionList || "[]");$DATA_CREATEORDER.tipsList = JSON.parse($DATA_CREATEORDER.tipsList || '[]');$DATA_CREATEORDER.areaCode = JSON.parse($DATA_CREATEORDER.areaCode);$DATA_CREATEORDER.addressesJson = JSON.parse($DATA_CREATEORDER.addressesJson || "[]"); // booking 参数转为对象
															$DATA_CREATEORDER.productInfoStr = JSON.parse($DATA_CREATEORDER.productInfoStr || "[]");if ($DATA_CREATEORDER.customizationStr) {
																		$DATA_CREATEORDER.__customization__ = $DATA_CREATEORDER.customization;$DATA_CREATEORDER.customization = JSON.parse($DATA_CREATEORDER.customizationStr || '{}'); //
															} //localStorage替换为sessionStorage
															if ($DATA_CREATEORDER.customization && $DATA_CREATEORDER.customization.createorder && !!$DATA_CREATEORDER.customization.createorder.replacelocalstorage) {
																		replaceLocalStorage.replaceStorage($DATA_CREATEORDER.customization.createorder.replacelocalstorage);
															}data.resourceJsonData += ';window.$LANG_CREATEORDER = $LANG_CREATEORDER;';$DATA_CREATEORDER.createOrderBtnText = "提交订单";new Function(data.resourceJsonData)();window.pageInfo = JSON.parse(data.pageInfo || '{}');window.pageInfo.subPath = "/createorder/";window.$LOGIN = "https://msecure.elong.com/login/";data.loginHongbaoTypeValue = data.loginHongbaoTypeValue || 0; // $DATA_CREATEORDER.reconfirmMvtValue = core.getMvtResult("218");
															pageData.vm.loginState = ctrlLoginState(data.loginCouponType, data.customization);pageData.vm.promeotionText = ctrlPromotionText(data.promoteTextDTOList);pageData.vm.title = data.isCanBeExtended ? "延住订单填写" : "订单填写";pageData.vm.createOrderBtnText = $DATA_CREATEORDER.createOrderBtnText;pageData.vm.isCreateOrderNew = core.getMvtResult("268"); // 判断是否为booking产品
															if ($DATA_CREATEORDER.productInfoStr.isBookingProduct == true) {
																		pageData.vm.bookingInfo = '';for (key in $DATA_CREATEORDER.importantInfo) {
																					pageData.vm.bookingInfo += `${$DATA_CREATEORDER.importantInfo[key]}`;
																		}$DATA_CREATEORDER.bookingInfo = pageData.vm.bookingInfo;
															}document.title = pageData.vm.title;if (data.productInfo.isPreInvoice && data.preInvoiceSwitch) {
																		data.canUserPreInvoice = true; //预约发票 && 开关打开
																		data.invoiceAtElong = 1;(function () {
																					var ar = [];data.productInfo.invoiceContentList.forEach(function (item) {
																								ar.push({ value: item, text: item });
																					});data.invoiceContent = ar;
																		})();
															} else {
																		data.canUserPreInvoice = false;data.invoiceContent = [{ text: '代订房费', value: '住宿费' }, { text: '代订住宿费', value: '会务费' }];
															}
												}pageData.vm.errorObj = ctrlErrorCode(data);initPage(pageData, function (isNew) {
															isNew ? setPageV2(dom) : setPageV1(dom);
												});
									}, function (xhr, err, msg) {
												document.title = "订单填写";slark.get("h5_createorder").stopLoading(); // if (window['tjClient'] && ajaxWaittingFlag) {
												//     ajaxWaittingFlag = false;
												//     window.tjClient.send("__error__", {
												//         url: location.protocol + "//" + location.host + "/createorder/api/createorder/",
												//         err: err,
												//         msg: msg
												//     });
												// }
												if (window['xlog'] && ajaxWaittingFlag) {
															ajaxWaittingFlag = false;!!window.xlog && xlog.reportError({ filename: location.protocol + "//" + location.host + "/createorder/api/createorder/", message: msg, error: err });
												}var hotelid = location.search.replace(/(.*)hotelid\=(\d+)(.*)/g, '$2') === location.search ? "index" : location.search.replace(/(.*)hotelid\=(\d+)(.*)/g, '$2');var hrefStr = location.protocol + '//' + location.host + location.pathname.replace(/createorder/, hotelid);initPage({ vm: { errorObj: { text: "抱歉，网络繁忙，请稍后再试。", btnText: "返回酒店详情" }, errorCode: "self", returnUrl: hrefStr // location.href hotelid
															} });
									});
						});var roomNumber = null;function initPage(data, fn) {
									// 设置业务信息
									xlog.setBusinessInfo({ channel: "hotel", pageType: "h5_createorder", orderfrom: "", cardno: "" });var pageDom = "",
									    isNew = false; // if(["0","1","3"].indexOf(core.getMvtResult('268'))>-1){
									//     //新版填写
									//     isNew = true;
									//     $(".page").addClass("mvt_268");
									// }
									switch (["0", "1", "3"].indexOf(core.getMvtResult('268'))) {case 0:case 1:
															isNew = true;$(".page").addClass("mvt_268");break;case 2:
															isNew = true;$(".page").addClass("mvt_268 mvt_268_3");break;case -1:default:
															break;}pageDom = createorderTpl(data);$(".page").append(pageDom);if (data.vm.errorCode && data.vm.errorCode != "") {
												return;
									}fn && fn(isNew);
						}var mainDataApi = 0;var cacheTJArr = [];function onlyPoint(obj) {
									mainDataApi += 1;obj ? cacheTJArr.push(obj) : "";if (mainDataApi === 2) {
												if (window['xlog']) {
															!!window.xlog && xlog.sendFirstScreenTime(cacheTJArr);
												}
									}
						} /**
        * js浮点运算的bug
        * @param {any} a 
        * @param {any} b 
        * @returns  
        */function add(a, b) {
									var c, d, e;try {
												c = a.toString().split(".")[1].length;
									} catch (f) {
												c = 0;
									}try {
												d = b.toString().split(".")[1].length;
									} catch (f) {
												d = 0;
									}return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
						}function mul(a, b) {
									var c = 0,
									    d = a.toString(),
									    e = b.toString();try {
												c += d.split(".")[1].length;
									} catch (f) {}try {
												c += e.split(".")[1].length;
									} catch (f) {}return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
						}function checkboxToggle(dom, flag) {
									var ele = dom.find(".checkbox"),
									    elt = dom.parent().parent();if (!flag) {
												ele.find(".close").show();elt.find("li").hide();elt.find(".margin").show().css("border-bottom", "0");
									} else {
												ele.find(".open").show();elt.find("li").show();elt.find(".margin").show().css("border-bottom", "1px #ddd solid");
									}
						} // for distance cal
						function rad(d) {
									return d * Math.PI / 180.0;
						}function getDistance(lat1, lng1, lat2, lng2) {
									if (Math.abs(lat1) > 90 || Math.abs(lat2) > 90) {
												return;
									}if (Math.abs(lng1) > 180 || Math.abs(lng2) > 180) {
												return;
									}var radLat1 = rad(lat1);var radLat2 = rad(lat2);var a = radLat1 - radLat2;var b = rad(lng1) - rad(lng2);var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));s = s * 6378.137; // EARTH_RADIUS;
									s = Math.round(s * 10000) / 10; //转化为单位：米 和APP统一
									return s;
						}var huaZhuBotaoManager = { init: function (idCard, $DATA) {
												if ($DATA.activityType !== 0) {
															//铂涛新会员
															// 仅限一间，禁止选择房间数量
															$('#room-number').off('click').attr('disabled', 'disabled').css('color', '#000'); // 仅限大陆
															$('#area-code').off('click'); // 需要用户身份证
															idCard.init(); // 显示华住、铂涛注册会员提示
															switch ($DATA.activityType) {case 1:
																					//1、 铂涛产品
																					$('.botao-tip').show();break;case 2:
																					//2､ 华住
																					$('.huazhu-tip').show();break;case 3:
																					//3、 铂涛促销
																					// $('.botao-cuxiao').show();
																					break;case 4:
																					//4、铂涛新会员
																					$('.botao-new-tip').show();break;default:
																					break;}
												}
									} }; /* 一键延住 2016.11.14 ming.jin  */var easyDelayBack = { dayNum: 1, //$DATA_CREATEORDER.leastNumber || 1, //默认延住天数，
									$DOM: $('<div class="delay_room ' + (["0", "1", "3"].indexOf(core.getMvtResult('268')) > -1 ? 'bdb' : '') + '">' + '<p>延住几晚</p>' + '<p class="choose tjclick" data-tj={"cspot":"extendnight"}>' + //+ (["0", "1", "3"].indexOf(core.getMvtResult('268')) > -1 ? 'tjclick" data-tj={"cspot":"extendnight"}>' : '">') +
									'<span class="un minus">－</span><span class="num dayNum">1</span><span class="plus">＋</span>' + '</p>' + '</div>'), leastNum: 1, //$DATA_CREATEORDER.leastNumber || 1, //默认1， 最少延住天数
									// afterDom: $('.odr_info', dom),
									// afterDomForNewCreateOrder: $('.p-info ul', dom),
									// all_ni:$('.odr_info .info_mn .all_ni',dom),
									// newEidDom: $('.odr_info .info_mn .us_dt span', dom),
									checkInDate: '', checkOutDate: '', checkHotelInfo_outdate: '', // 一键延住下酒店核对信息传离店日期；
									init: function (priceManager, dom, roomNumber) {
												//document.title ="延住订单填写";
												var _this = this;var _inDate; // 入店日期
												var _outDate; //离店日期
												_this.dayNum = $DATA_CREATEORDER.leastNumber || 1;_this.leastNum = $DATA_CREATEORDER.leastNumber || 1;_this.afterDom = $('.odr_info', dom), _this.afterDomForNewCreateOrder = $('.p-info ul', dom), _this.all_ni = $('.odr_info .info_mn .all_ni', dom), _this.newEidDom = $('.odr_info .info_mn .us_dt span', dom), ["0", "1", "3"].indexOf(core.getMvtResult('268')) > -1 ? _this.afterDomForNewCreateOrder.before(_this.$DOM) : _this.afterDom.after(_this.$DOM);_inDate = location.search.match(/checkindate\=\d{4}\-\d{2}\-\d{2}/i);_outDate = location.search.match(/checkoutdate\=\d{4}\-\d{2}\-\d{2}/i);_this.checkInDate = _inDate[0].replace(/checkindate\=/, "");_this.checkOutDate = _outDate[0].replace(/checkoutdate\=/, "");_this.lastClick = 0; // 0 没有点击， 1 点击 ＋ ，－1 点击 —
												//修改延住的天数，同时，发生价格 、 离店日期 、 延住几晚 数量变更
												_this.$DOM.find('.minus').click(function () {
															if (_this.dayNum <= _this.leastNum) {
																		return;
															}_this.lastClick = -1;_this.$DOM.find('.plus').removeClass('un');$(this).removeClass('un');if (_this.dayNum === _this.leastNum + 1) {
																		$(this).addClass('un');
															}_this.dayNum--;_this.setPageData(priceManager);
												}); //
												_this.$DOM.find('.plus').click(function () {
															if (_this.dayNum >= 20) {
																		return;
															}_this.lastClick = 1;_this.$DOM.find('.minus').removeClass('un');$(this).removeClass('un');if (_this.dayNum === 19) {
																		$(this).addClass('un');
															}_this.dayNum++;_this.setPageData(priceManager);
												});_this.domDefaultCantSelect(dom, roomNumber);
									}, // 一建延住的时候部分dom;不可点击
									domDefaultCantSelect: function (dom, roomNumber) {
												/*
            延住订单填写页比原订单填写页增加［延住晚数输入框］，其他页面结构完全一致。
            延住晚数输入框：
            默认为1，下限1，上限30。
            改变数值，订单离店时间和订单价格相应改变。
            如果该房型有最晚起订晚数，修改默认值。
            其他字段信息说明：
            房型、房间数、联系人、手机号从原单带入到订单填写页，不能改
            入住时间：读取原单离店日期，不可修改。
            离店时间：默认为原单离店日期＋1，可随用户选择增加
            */ //房间数量不能改
												//放在代码后面防止被覆盖
												if (!!$DATA_CREATEORDER.isCanBeExtended && roomNumber.isHasValue(sessionStorage.getItem('extendedStayRoomCount'))) {
															roomNumber.setSelectValue(sessionStorage.getItem('extendedStayRoomCount'));
												}var extendedStayPer = JSON.parse(sessionStorage.getItem('extendedStayPer') || "[]");for (var i = 0; i < $('.contact-person li').length && extendedStayPer.length > 0; i++) {
															if ($DATA_CREATEORDER.needEnName == 1 && !!extendedStayPer[i] && !!extendedStayPer[i].name) {
																		$('.contact-person li').eq(i).find('input').eq(0).val(extendedStayPer[i].name.split('/')[0]).attr('disabled', 'disabled').off('click');$('.contact-person li').eq(i).find('input').eq(1).val(extendedStayPer[i].name.split('/')[1]).attr('disabled', 'disabled').off('click');
															} else if ($DATA_CREATEORDER.needEnName == 0 && !!extendedStayPer[i] && !!extendedStayPer[i].name) {
																		$('.contact-person li').eq(i).find('input').val(extendedStayPer[i].name).attr('disabled', 'disabled').off('click');
															}
												}$('#room-number').off('click').attr('disabled', 'disabled').css('color', '#000');$('#js_room_number,#js_specialrequirement', dom).off('click').find('.content').addClass('in_gray'); //添加入住人
												$('.add-person-button', dom).off("click"); //入住人
												// $("#cusname1").off('click').attr('disabled', 'disabled');
												//选择手机号
												$(".tel-choose", dom).off("click"); //手机号
												$("#contactormobile").off('click').attr('disabled', 'disabled'); //电子邮箱
												$("#contactoremail").off('click').attr('disabled', 'disabled');
									}, /**
            * 计算日期，传入一个日期，一个天，返回加和以后的日期
            * @param  {[type]} date     [description]
            * @param  {[type]} dayCount [description]
            * @return {[type]}          [description]
            */calculateDate: function (date, dayCount) {
												var dateTime = new Date(date);var _dateTime = dateTime.setDate(dateTime.getDate() + dayCount);var _newDate = new Date(_dateTime);return { date: _newDate, week: "周" + "日一二三四五六".substr(_newDate.getDay(), 1), dateMD: _newDate.getMonth() + 1 + "月" + _newDate.getDate() + "日", newDateMDCN: _newDate.getMonth() + 1 + "月" + _newDate.getDate() + "日", newDateMD: _newDate.getMonth() + 1 + "-" + _newDate.getDate(), dateYMD: _newDate.getFullYear() + "年" + (_newDate.getMonth() + 1) + "月" + _newDate.getDate() + "日" };
									}, /**
            * 设置页面数据: - 1 +  ； 离店日期 ； 住几晚 ; 价格
            */setPageData: function (priceManager) {
												var _this = this;_this.$DOM.find(".dayNum").html(_this.dayNum);var _date_ = _this.calculateDate(_this.checkInDate, _this.dayNum);if (["0", "1", "3"].indexOf(core.getMvtResult('268')) > -1) {
															_this.checkHotelInfo_outdate = _date_.newDateMDCN;_this.newEidDom.eq(1).html(_date_.newDateMD + '<em>' + _date_.week + '离店</em>');_this.all_ni.html('共' + _this.dayNum + '晚');
												} else {
															_this.checkHotelInfo_outdate = _date_.dateMD;_this.newEidDom.eq(1).html('<em>离店</em>' + _date_.dateMD + '(' + _date_.week + ')');_this.newEidDom.eq(2).html('共' + _this.dayNum + '晚');
												}var cache_aKeyData = JSON.parse(sessionStorage.getItem('cache_aKeyData'));cache_aKeyData.checkoutdate = _date_.date.format();sessionStorage.setItem('cache_aKeyData', JSON.stringify(cache_aKeyData));priceManager.fetchPriceInfo();
									}, backSetPageData: function () {
												var _this = this;if (_this.lastClick === 0) {
															return;
												} else if (_this.lastClick > 0) {
															_this.dayNum--;if (_this.dayNum === _this.leastNum) {
																		_this.$DOM.find('.minus').addClass('un');
															}
												} else {
															_this.dayNum++;if (_this.dayNum === 20) {
																		_this.$DOM.find('.plus').addClass('un');
															}
												}var _date_ = _this.calculateDate(_this.checkInDate, _this.dayNum);_this.$DOM.find(".dayNum").html(_this.dayNum);if (["0", "1", "3"].indexOf(core.getMvtResult('268')) > -1) {
															_this.checkHotelInfo_outdate = _date_.newDateMD;_this.newEidDom.eq(1).html(_date_.newDateMD + '<em>' + _date_.week + '离店</em>');_this.all_ni.html('共' + _this.dayNum + '晚');
												} else {
															_this.checkHotelInfo_outdate = _date_.dateMD;_this.newEidDom.eq(1).html('<em>离店</em>' + _date_.dateMD + '(' + _date_.week + ')');_this.newEidDom.eq(2).html('共' + _this.dayNum + '晚');
												}var cache_aKeyData = JSON.parse(sessionStorage.getItem('cache_aKeyData'));cache_aKeyData.checkoutdate = _date_.date.format();sessionStorage.setItem('cache_aKeyData', JSON.stringify(cache_aKeyData));
									} };var createOrder = { // mvtConfirm: ['0', '2'].indexOf(core.getMvtResult('218')) >= 0 ? true : false,
									orderPrice: false, isChangeprice: 0, isChangetype: 0, isAcceptSaleChange: 0, needRepeatOrder: false, bAccess: true, count: 10, timer: null, letvIsRun: false, //$mobilesubmit: $('.price_tab #mobilesubmit', dom),
									//$mobilesubmit_span: $('.price_tab #mobilesubmit>span', dom),
									promptDialog: null, init: function (compone, dom) {
												var _this = this;_this.dom = dom; //新增 在这里附加对象
												if (['0', '1', '3'].indexOf(core.getMvtResult('268')) > -1) {
															_this.$mobilesubmit = $('.price_tab #mobilesubmit', dom);_this.$mobilesubmit_span = $('.price_tab #mobilesubmit>span', dom);_this.createOrderPost = _this.createOrderPostV2;
												} else {
															_this.$mobilesubmit = $('#mobilesubmit');_this.$mobilesubmit_span = $('#mobilesubmit>span');_this.createOrderPost = _this.createOrderPostV1;
												}_this.postOrderBtnText = _this.$mobilesubmit.attr("data-activeTitle");$.extend(_this, compone);
									}, promptDes: { content: '', text: [] }, delayCreateOrder: function () {
												createOrder.count = 10;if (['0', '1', '3'].indexOf(core.getMvtResult('268')) > -1) {
															createOrder.$mobilesubmit.attr('style', $('.el_check_info').length > 0 ? "font-size:0.875rem;opacity:0.7" : 'opacity:0.7');
												} else {
															//1||3?
															createOrder.$mobilesubmit.attr('style', 'opacity:0.7');
												}createOrder.bAccess = false;createOrder.timer = setInterval(function () {
															createOrder.$mobilesubmit_span.text('重新提交(' + createOrder.count + 's)');if (createOrder.count < 0) {
																		createOrder.bAccess = true;createOrder.$mobilesubmit.attr('style', '');createOrder.$mobilesubmit_span.text(createOrder.postOrderBtnText);clearInterval(createOrder.timer);
															}createOrder.count--;
												}, 1000);
									}, clearDelayCreateOrder: function () {
												clearInterval(createOrder.timer);createOrder.bAccess = true;createOrder.$mobilesubmit.attr('style', '');createOrder.$mobilesubmit_span.text(createOrder.postOrderBtnText);
									}, /**
            * 重单回传单号duplicateOrderId
            * 操作类型 type
            *  0:查看订单
            *  1:取消(留在填单页)
            *  2:继续提交(原单调修改订单接口)
            *  3:继续提交(新下一单，原单还存在)
            *  4:继续提交(新下一单，取消并隐藏原单)
            *  下面只取 2 || 4
            */dupFactory: function (opt, action, duporderno, repeatOrderUrl) {
												var fun = null;var _this = this;if (action) switch (action.type) {case 0:
																		opt.text.push(action.des);fun = function () {
																					setTimeout(function () {
																								window.location.replace(repeatOrderUrl);
																					}, 300);
																		};break;case 1:
																		opt.text.push(action.des);break;case 2:
																		opt.text.push(action.des);fun = function () {
																					createOrder.createOrderPost({ dupordertype: 2, duporderno: duporderno });
																		};break;case 3:
																		opt.text.push(action.des);fun = function () {
																					createOrder.needRepeatOrder = true;createOrder.createOrderPost();
																		};break;case 4:
																		opt.text.push(action.des);fun = function () {
																					createOrder.createOrderPost({ dupordertype: 4, duporderno: duporderno });
																		};break;}return fun;
									}, /**
            * 旧版
            */createOrderPostV1: function (opt) {
												var _this = this;var idCard = _this.idCard,
												    addAddress = _this.addAddress,
												    selectInvoiceType = _this.selectInvoiceType,
												    invoiceForCO = _this.invoiceForCO,
												    loginComponent = _this.loginComponent,
												    redPacketList = _this.redPacketList,
												    specialRequirement = _this.specialRequirement,
												    selectInvoiceTitle = _this.selectInvoiceTitle,
												    selectInvoiceContent = _this.selectInvoiceContent,
												    selectAddress = _this.selectAddress,
												    expressFee = _this.expressFee,
												    priceCalculation = _this.priceCalculation,
												    Common = _this.Common,
												    priceManager = _this.priceManager,
												    dom = _this.dom;if (!createOrder.bAccess) {
															return;
												}validate.addFilter($("#hidarriveTime", dom), {}); /** 接入乐视黄页
                                                               * 在接入乐视黄页的时候先判断对方是否登录；调用window.contact.getLoginMaskUid();
                                                               * 定义 callback:getLeUidCallback(result,uid);
                                                               * uid -1 表示未登录对方会调到登录；
                                                               * uid 是否与$DATA_CREATEORDER.openId相符；
                                                               * 相符  表示乐视账号为当前账号
                                                               * 不相符 会跳艺龙的联合登录；在后端后再次获取uid再联合登录
                                                               */if (!!pageInfo && !!pageInfo.chid && pageInfo.chid == 'letvhy') {
															window.contact.getLoginMaskUid();window.getLeUidCallback = function (result, uid) {
																		switch (uid) {case $DATA_CREATEORDER.openId:
																								break;default:
																								location.href = $DATA_CREATEORDER.proxyLoginUrl + "?backUrl=" + encodeURIComponent(location.href);break;}
															};
												}var nameErrorMsg, nameRegex;if ($DATA_CREATEORDER.needEnName == "1") {
															nameErrorMsg = "抱歉，您入住的为外宾酒店。入住人姓名仅支持输入拼音或英文名称。";nameRegex = $DATA_CREATEORDER.customerENRule;
												} else {
															nameRegex = $DATA_CREATEORDER.customerCNRule;nameErrorMsg = "请输入真实的入住人姓名，支持全部为汉字以及全部为拼音或英文字母。";
												}if ($DATA_CREATEORDER.needEnName != "1") {
															validate.addFilter($("input[name='customernames']", dom), [{ rq: true, msg: "请输入入住人姓名" }, { regex: $DATA_CREATEORDER.customerCNRule, msg: "请输入真实的入住人姓名，支持全部为汉字以及全部为拼音或英文字母。" }]);
												} else {
															// todo 校验英文的输入名称；
															var customerEnNames = '';for (var en = 0; en < $('.eng_name', dom).length; en++) {
																		var enName = $('.eng_name', dom).eq(en).find('input')[0].value + '/' + $('.eng_name', dom).eq(en).find('input')[1].value;if (!$('.eng_name', dom).eq(en).find('input')[0].value || !$('.eng_name', dom).eq(en).find('input')[1].value) {
																					dialog.alert('请输入入住人姓名');return false;
																		} else if (!new RegExp($DATA_CREATEORDER.customerENRule).test(enName)) {
																					dialog.alert('抱歉，您入住的为外宾酒店。入住人姓名仅支持输入拼音或英文名称。');return false;
																		}Common.setLocalData("newEnPersonList", enName, ",", 10);customerEnNames += enName + (en != $('.eng_name', dom).length - 1 ? ',' : '');
															}
												}var validateResult = $('.createorder', dom).validate({ singleMode: true, fixDC: true, trim: true });if (validateResult.isError) {
															dialog.alert(validateResult.msgs[0]);return;
												} // 入住人姓名敏感词校验
												var limitedWords = ["发轮功", "张三", "李四", "王五", "SB", "逼", "傻逼", "傻冒", "王八", "王八蛋", "混蛋", "你妈", "你大爷", "操你妈", "你妈逼", "先生", "小姐", "男士", "女士", "测试", "小沈阳", "丫蛋", "男人", "女人", "骚", "騒", "搔", "傻", "逼", "叉", "瞎", "屄", "屁", "性", "骂", "疯", "臭", "贱", "溅", "猪", "狗", "屎", "粪", "尿", "死", "肏", "骗", "偷", "嫖", "淫", "呆", "蠢", "虐", "疟", "妖", "腚", "蛆", "鳖", "禽", "兽", "屁股", "畸形", "饭桶", "脏话", "可恶", "吭叽", "小怂", "杂种", "娘养", "祖宗", "畜 生", "姐卖", "找抽", "卧槽", "携程", "无赖", "废话", "废物", "侮辱", "精虫", "龟头", "残疾", "晕菜", "捣乱", "三八", "破鞋", "崽子", "混蛋", "弱智", "神经", "神精", "妓女", "妓男", "沙比", "恶性", "恶心", "恶意", "恶劣", "笨蛋", "他丫", "她丫", "它丫", "丫的", "给丫", "删丫", "山丫", "扇丫", "栅丫", "抽丫", "丑丫", "手机", "查询", "妈的", "犯人", "垃圾", "死鱼", "智障", "浑蛋", "胆小", "糙蛋", "操蛋", "肛门", "是鸡", "无赖", "赖皮", "磨几", "沙比", "智障", "犯愣", "色狼", "娘们", "疯子", "流氓", "色情", "三陪", "陪聊", "烤鸡", "下流", "骗子", "真贫", "捣乱", "磨牙", "磨积", "甭理", "尸体", "下流", "机巴", "鸡巴", "鸡吧", "机吧", "找日", "婆娘", "娘腔", "恐怖", "穷鬼", "捣乱", "破驴", "破罗", "妈必", "事妈", "神经", "脑积水", "事儿妈", "草泥马", "杀了铅笔", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J8", "s.b", "sb", "sbbt", "Sb＋Sb", "sb＋bt", "bt＋sb", " saorao", "SAORAO", "Fuck", "shit", "0", "\\*", "\\/", "\\.", "\\(", "\\)", "（", "）", ":", ";", "-", "_", "－", "谢先生", "谢小姐", "蔡先生", "蔡小姐", "常先生", "常小姐", "陈先生", "陈小姐", "陈女士", "崔先生", "崔小姐", "高先生", "高小姐", "高女士", "郭先生", "郭小姐", "郭女士", "黄先生", "黄小姐", "黄女士", "刘先生", "刘小姐", "刘女士", "李先生", "李小姐", "李女士", "王先生", "王小姐", "王女士", "朱先生", "朱小姐", "朱女士", "周先生", "周小姐", "周女士", "郑先生", "郑小姐", "郑女士", "赵先生", "赵小姐", "赵女士", "张先生", "张小姐", "张女士", "章先生", "章小姐", "杨先生", "杨小姐", "杨女士", "徐先生", "徐小姐", "徐女士", "许先生", "许小姐", "许女士", "贾先生", "贾小姐", "季先生", "季小姐", "康先生", "康小姐", "路先生", "路小姐", "马先生", "马小姐", "马女士", "彭先生", "彭小姐", "秦先生", "秦小姐", "任先生", "任小姐", "孙先生", "孙小姐", "谭先生", "谭小姐", "吴先生", "吴小姐", "叶先生", "叶小姐", "应先生", "应小姐", "于先生", "于小姐", "白先生", "白小姐", "包先生", "包小姐", "毕先生", "毕小姐", "曹先生", "曹小姐", "成先生", "成小姐", "程先生", "程小姐", "戴先生", "戴小姐", "邓先生", "邓小姐", "丁先生", "丁小姐", "董先生", "董小姐", "窦先生", "窦小姐", "杜先生", "杜小姐", "段先生", "段小姐", "方先生", "方小姐", "范先生", "范小姐", "冯先生", "冯小姐", "顾先生", "顾小姐", "古先生", "古小姐", "关先生", "关小姐", "管先生", "管小姐", "韩先生", "韩小姐", "潘先生", "潘小姐", "钱先生", "钱小姐", "齐先生", "齐小姐", "沈先生", "沈小姐", "石先生", "石小姐", "史先生", "史小姐", "宋先生", "宋小姐", "苏先生", "苏小姐", "唐先生", "唐小姐", "test", "ceshi", " ", "郝先生", "郝小姐", "何先生", "何小姐", "贺先生", "贺小姐", "侯先生", "侯小姐", "胡先生", "胡小姐", "华先生", "华小姐", "江先生", "江小姐", "姜先生", "姜小姐", "蒋先生", "蒋小姐", "焦先生", "焦小姐", "金先生", "金小姐", "孔先生", "孔小姐", "梁先生", "梁小姐", "林先生", "林小姐", "罗先生", "罗小姐", "孟先生", "孟小姐", "牛先生", "牛小姐"];var customernames = $(".contact-person input.createorder", dom);for (var i = 0, len = customernames.length; i < len; i++) {
															var customername = customernames[i];if (limitedWords.indexOf(customername.value) != -1) {
																		dialog.alert("入住人姓名中存在敏感词汇，请填写真实姓名确保顺利入住");return;
															}
												} //联系人手机号验证
												if ($("#contactormobile", dom).val().length == 0) {
															dialog.alert("请输入联系人手机号");return;
												} //联系人手机号验证
												if (!new RegExp($DATA_CREATEORDER.contactCodeRegex).test($("#area-code", dom).attr("data-value") + $("#contactormobile", dom).val())) {
															dialog.alert("联系人手机号格式不正确");return;
												}if ($DATA_CREATEORDER.productInfoStr.isBookingProduct == true) {
															// booking邮箱验证
															if ($("#contactoremail", dom).val().length == 0) {
																		dialog.alert("请输入联系人邮箱");return;
															} // booking邮箱验证
															if (!new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+$/).test($("#contactoremail", dom).val())) {
																		dialog.alert("请您先填写正确的邮箱，再提交订单");return;
															}
												} // 针对华住、铂涛的活动，如果存在身份证号输入栏，则验证入住人身份证
												if (idCard && idCard.jsCheckIDCard && idCard.jsCheckIDCard()) {
															return;
												} //发票
												if (addAddress.needInvoiceflag) {
															validate.addFilter($("#invoice-title em", dom), { rq: true, msg: "请输入发票抬头" });validate.addFilter($("#invoice-phone input", dom), [{ rq: true, msg: "请输入收票人手机" }, { regex: '^((\(\\d{2,3}\))|(\\d{3}\-))?1[34578]\\d{9}$', msg: "请输入正确的内地收票人手机" }]);if ((selectInvoiceType.value == 0 || selectInvoiceType.value == 1) && invoiceForCO.invoiceHeaderCtrl.value === 0) {
																		//纸质或电子，且发票抬头类型为公司，必须有纳税人识别号
																		validate.addFilter($(".taxpayerNumber input", dom), [{ rq: true, msg: "请输入纳税人识别号或统一社会信用代码" }, { regex: '[0-9a-zA-Z]{15}|[0-9a-zA-Z]{18}|[0-9a-zA-Z]{20}', msg: "纳税人识别号信息错误，请输入15、18位或20位数字或字母" }]);
															}if (selectInvoiceType.value == 2) {
																		//专票
																		validate.addFilter($("#invoice-shuiwuId input", dom), [{ rq: true, msg: "请输入纳税人识别号" }, { regex: '[0-9a-zA-Z]{15}|[0-9a-zA-Z]{18}', msg: "请正确填写纳税人识别号" }]);validate.addFilter($("#invoice-registerAddress input", dom), [{ rq: true, msg: "请输入注册地址" }, { regex: '\\S{2,100}', msg: "注册地址长度应在2-100字符之间" }]);validate.addFilter($("#invoice-companyPhone input", dom), [{ rq: true, msg: "请输入公司电话" }, { regex: '(\\d|\\(|\\/|\\)|\\N|\\,|\\*|\\;|\\#|\\+|\\-|\\.)+', msg: "请正确填写公司电话" }, { regex: '[\\d\\(\\/\\)\\N\\,\\*\\;\\#\\+\\-\\.]{2,50}', msg: "公司电话长度应在2-50字符之间" }]);validate.addFilter($("#invoice-openbank input", dom), [{ rq: true, msg: "请输入开户银行" }, { regex: '\\S{2,100}', msg: "开户银行长度应在2-100字符之间" }]);validate.addFilter($("#invoice-bankId input", dom), [{ rq: true, msg: "请输入银行账号" }, { regex: '\\d+', msg: "请正确填写银行账号" }, { regex: '\\d{2,50}', msg: "银行账号长度应在2-50字符之间" }]);
															} //纸质或者专票校验邮寄地址不能为空 // 非预约发票
															if (!$DATA_CREATEORDER.canUserPreInvoice && (selectInvoiceType.value == 0 || selectInvoiceType.value == 2)) {
																		//0纸质,专票
																		var usermessElem = $(dom).find(".postAddressContent .usermess");var addressDetailElem = $(dom).find(".postAddressContent .address-detail");if (!(addressDetailElem.size() && usermessElem.text() && addressDetailElem.size() && addressDetailElem.text())) {
																					dialog.alert("请输入邮寄地址");return;
																		}
															}
												} else {
															validate.addFilter($("#invoice-title em", dom), {});validate.addFilter($("#invoice-phone input", dom), {});
												}var validateInvoiceResultArray = [!$DATA_CREATEORDER.canUserPreInvoice ? $('#invoice-phone input', dom).validate({ singleMode: true, fixDC: true, trim: true }) : { isError: false }, $("#invoice-shuiwuId input", dom).validate({ singleMode: true, fixDC: true, trim: true }), $("#invoice-registerAddress input", dom).validate({ singleMode: true, fixDC: true, trim: true }), $("#invoice-companyPhone input", dom).validate({ singleMode: true, fixDC: true, trim: true }), $("#invoice-openbank input", dom).validate({ singleMode: true, fixDC: true, trim: true }), $("#invoice-bankId input", dom).validate({ singleMode: true, fixDC: true, trim: true })];var isPassValidateInvoice = false;if (!$DATA_CREATEORDER.canUserPreInvoice && addAddress.needInvoiceflag && selectInvoiceType != undefined && selectInvoiceType.value == 1) {
															var __Invoice_phone__ = $('#invoice-phone input', dom).validate({ singleMode: true, fixDC: true, trim: true });if (__Invoice_phone__.isError) {
																		dialog.alert(__Invoice_phone__.msgs[0]);isPassValidateInvoice = true;
															}
												}if (addAddress.needInvoiceflag && selectInvoiceType != undefined && invoiceForCO.invoiceHeaderCtrl.value === 0 && (selectInvoiceType.value == 0 || selectInvoiceType.value == 1)) {
															var __Invoice_taxpayerNumber__ = $(".taxpayerNumber input", dom).validate({ singleMode: true, fixDC: true, trim: true });if (!($(".taxpayerNumber input", dom).val().length === 15 || $(".taxpayerNumber input", dom).val().length === 18 || $(".taxpayerNumber input", dom).val().length === 20)) {
																		dialog.alert("纳税人识别号信息错误，请输入15、18位或20位数字或字母");isPassValidateInvoice = true;
															} else if (__Invoice_taxpayerNumber__.isError) {
																		dialog.alert(__Invoice_taxpayerNumber__.msgs[0]);isPassValidateInvoice = true;
															}
												}for (var indexForVal = 0, validateLength = validateInvoiceResultArray.length; indexForVal < validateLength && addAddress.needInvoiceflag && selectInvoiceType.value == 2; indexForVal++) {
															if (validateInvoiceResultArray[indexForVal].isError) {
																		dialog.alert(validateInvoiceResultArray[indexForVal].msgs[0]);isPassValidateInvoice = true;break;
															} else if (indexForVal === 0) {
																		if (!($("#invoice-shuiwuId input", dom).val().length === 15 || $("#invoice-shuiwuId input", dom).val().length === 18)) {
																					dialog.alert("请正确填写纳税人识别号");isPassValidateInvoice = true;break;
																		}
															}
												};if (isPassValidateInvoice) {
															return;
												} //登录
												if (loginComponent.loginStatus == 1) {
															dialog.alert("请先登录");return;
												} // 手Q定制
												if ($DATA_CREATEORDER.customization && $DATA_CREATEORDER.customization.createorder && $DATA_CREATEORDER.customization.createorder.needLogin && !$DATA_CREATEORDER.loginFlag) {
															setTimeout(function () {
																		var ele = $('.login-list .label-switch').find(".checkbox");var elt = $('.login-list .label-switch').parent().parent();ele.find("span").hide();ele.find(".open").show();elt.parent().addClass("order-loginb");elt.find("li").show();elt.find(".margin").show().css("border-bottom", "1px #dcdcdc solid");ele.addClass('active');PluginManager.showLoad();$(".imgcode", dom).hide();$(".imgwrong", dom).hide();loginComponent.loginOpen();
															}, 10);return;
												}var jsonData = {};if (!$DATA_CREATEORDER.isCanBeExtended) {
															jsonData = validateResult.getData();
												} else {
															var _str_ = '',
															    _str_arrivetime = '';for (var ind = 0, leng = validateResult.corrects.length; ind < leng; ind++) {
																		if (validateResult.corrects[ind].target.attr('name') == 'customernames') {
																					_str_ += _str_ == '' ? validateResult.corrects[ind].val : ',' + validateResult.corrects[ind].val;
																		} else if (validateResult.corrects[ind].target.attr('name') == 'arrivetime') {
																					_str_arrivetime = validateResult.corrects[ind].val;
																		}
															}jsonData['customernames'] = _str_;jsonData['arrivetime'] = _str_arrivetime;
												}if ($DATA_CREATEORDER.needEnName == '1') {
															jsonData['customernames'] = customerEnNames;
												}jsonData["cachekey"] = $DATA_CREATEORDER.cachekey; // if(redPacketList.selectedIncomeId) {
												jsonData["usehongbao"] = redPacketList.selectedIncomeId || ""; // }
												jsonData['isBoTaoNewMemberProduct'] = $DATA_CREATEORDER.activityType === 4 ? 'true' : 'false';jsonData["needrepeatorder"] = createOrder.needRepeatOrder;jsonData["roomcount"] = $("#room-number", dom).attr("value");jsonData["areacodeconnect"] = $("#area-code", dom).attr("data-value");jsonData["notetohotel"] = !!specialRequirement && !!specialRequirement.params ? specialRequirement.params : ""; //特殊要求
												jsonData["connectormobile"] = $("#contactormobile", dom).val(); // booking字段邮箱
												if ($DATA_CREATEORDER.productInfoStr.isBookingProduct == true) {
															jsonData["connectorEmail"] = $("#contactoremail", dom).val();jsonData["isBookingProduct"] = true;
												}jsonData["hotelid"] = $DATA_CREATEORDER.hotelId;if ($("#contactoridcard", dom).val()) {
															jsonData["idcard"] = $("#contactoridcard", dom).val();
												} // for loc
												if ($DATA_CREATEORDER.order_loc && $DATA_CREATEORDER.order_loc.lat) {
															//H5成单接口要转小写
															jsonData["lat"] = $DATA_CREATEORDER.order_loc.lat;jsonData["lng"] = $DATA_CREATEORDER.order_loc.lng;jsonData["sourcetype"] = $DATA_CREATEORDER.order_loc.sourceType;jsonData['distancefromhotelwhenbooking'] = getDistance($DATA_CREATEORDER.order_loc.lat, $DATA_CREATEORDER.order_loc.lng, $DATA_CREATEORDER.latitude, $DATA_CREATEORDER.longitude);jsonData['citywhenbooking'] = $DATA_CREATEORDER.order_loc.cityName;
												}if (addAddress.needInvoiceflag) {
															if (selectInvoiceTitle.value == '') {
																		dialog.alert("请输入发票抬头");return;
															}jsonData["invoicedata.type"] = selectInvoiceType.value;jsonData["invoicedata.title"] = selectInvoiceTitle.value;jsonData["invoicedata.content"] = selectInvoiceContent.value;jsonData["invoicedata.specialInvoice.taxPayerNum"] = $("#invoice-shuiwuId input", dom).val();jsonData["invoicedata.specialInvoice.sHotelAddress"] = $("#invoice-registerAddress input", dom).val();jsonData["invoicedata.specialInvoice.registerPhoneNum"] = $("#invoice-companyPhone input", dom).val();jsonData["invoicedata.specialInvoice.taxRegisterBank"] = $("#invoice-openbank input", dom).val();jsonData["invoicedata.specialInvoice.registerBankNum"] = $("#invoice-bankId input", dom).val();jsonData["invoicedata.hasInvoiceInfo"] = $(".voucher_bei", dom).hasClass('on'); //发票备注
															if ((selectInvoiceType.value == 0 || selectInvoiceType.value == 1) && invoiceForCO.invoiceHeaderCtrl.value === 0) {
																		//纸质发票 和电子发票 抬头类型为公司，需要纳税人识别号
																		jsonData["invoicedata.ITIN"] = $(".taxpayerNumber input", dom).val();
															} //invoiceForCO.invoiceHeaderCtrl.value 0 公司,1 个人,2 机关  
															jsonData["invoicedata.userType"] = [2, 1, 3][invoiceForCO.invoiceHeaderCtrl.value]; //后端 0-默认 1-个人 2- 企业 3-政府机关行政单位
															if (!$DATA_CREATEORDER.canUserPreInvoice && (selectInvoiceType.value == 0 || selectInvoiceType.value == 2)) {
																		//纸质发票和专票都需要邮寄地址和邮寄方式
																		if (selectAddress.name == '') {
																					dialog.alert("请输入发票收件人姓名");return;
																		}if (selectAddress.addressDetail == '') {
																					dialog.alert("请输入发票邮寄地址");return;
																		}jsonData["invoicedata.receiver"] = selectAddress.name;jsonData["invoicedata.address"] = selectAddress.addressDetail;jsonData["invoicedata.phone"] = selectAddress.phoneNo;if (expressFee && expressFee.delieverType) {
																					jsonData["invoicedata.delieverFeeType"] = expressFee.delieverType;jsonData["invoicedata.delieverFeeAmount"] = expressFee.value;
																		}
															} else {
																		jsonData["invoicedata.phone"] = $("#invoice-phone input", dom).val();
															}
												}jsonData["usecoupon"] = priceCalculation.usecoupon; //console.log(jsonData);
												//console.log(jsonInvoiceData);
												if (!$DATA_CREATEORDER.isCanBeExtended && $DATA_CREATEORDER.needEnName != '1') {
															for (var i = 0, arr = validateResult.getData().customernames.split(','); i < arr.length; i++) {
																		Common.setLocalData("newPersonList", arr[i], ",", 10);
															}
												} else if ($DATA_CREATEORDER.needEnName != '1') {
															for (var it = 0, len = validateResult.corrects.length; it < len; it++) {
																		if (validateResult.corrects[it].target.attr('name') == 'customernames') {
																					Common.setLocalData("newPersonList", validateResult.corrects[it].val, ",", 10);
																		}
															}
												}Common.setLocalData("contactmobile", $("#contactormobile", dom).val(), ",", 5); // booking字段 邮箱 存入localstorage
												if ($DATA_CREATEORDER.productInfoStr.isBookingProduct == true) {
															Common.setLocalData("contactemail", $("#contactoremail", dom).val(), ",", 5);
												}if (createOrder.isChangeprice == 1) {
															jsonData["acceptedchangeprice"] = true;
												} else {
															jsonData["acceptedchangeprice"] = false;
												};if (createOrder.isChangetype == 1) {
															jsonData["acceptednotvouchtovouch"] = true;
												} else {
															jsonData["acceptednotvouchtovouch"] = false;
												};if (createOrder.isAcceptSaleChange == 1) {
															jsonData['acceptSaleChangePrice'] = true;
												} else {
															jsonData['acceptSaleChangePrice'] = false;
												} //转让单
												if (!!$DATA_CREATEORDER.resale && !!$DATA_CREATEORDER.resaleSrcOrderId) {
															jsonData["resale"] = $DATA_CREATEORDER.resale;jsonData["resalesrcorderid"] = $DATA_CREATEORDER.resaleSrcOrderId;
												} //取消险参数
												if (!!priceManager.defaultInsuranceBack && !!priceManager.insurances && priceManager.insurances.length > 0 && !!priceManager.insurances[0].insurancePriceC) {
															var posterorderParams = JSON.parse(sessionStorage.getItem('posterorderParams'));posterorderParams.insurancePrice = priceManager.insurances[0].insurancePriceC;jsonData['cancelOrder'] = JSON.stringify(posterorderParams);
												} //闪住参数
												if (creditAndQuick.isSelect) {
															jsonData['isCheckCreditOrFlash'] = true;
												}if ($DATA_CREATEORDER.isCanBeExtended) {
															jsonData['baseOrderNo'] = $DATA_CREATEORDER.orderNo;
												}if (opt.depositMoney) {
															//闪住:成单异常 ，变价
															jsonData['depositMoney'] = opt.depositMoney;
												} //不完全重单继续提交订单传的参数
												if (!!opt && typeof opt == 'object') {
															for (var params in opt) {
																		jsonData[params] = opt[params];
															}
												}createOrder.delayCreateOrder();this.jsonData = jsonData; // 仅点击提交订单后弹层二次确认
												// if (window.pageInfo.chid === "wxqbh5" && this.mvtConfirm && opt && opt._from == 'mobilesubmit') {
												//     delete this.jsonData._from;
												//     this.createConfirm();
												//     if (core.getMvtResult('218') === '0') {
												//         setTimeout(function () {
												//             _this.$confirmDialog.remove();
												//             _this.submitOrder(jsonData);
												//         }, 6000);
												//     }
												// } else {
												this.submitOrder(jsonData); // }
									}, /**
            	     * 新版
            	     */createOrderPostV2: function (opt) {
												var _this = this;var idCard = _this.idCard,
												    loginComponent = _this.loginComponent,
												    redPacketList = _this.redPacketList,
												    specialRequirement = _this.specialRequirement,
												    invoiceForNewCO = _this.invoiceForNewCO,
												    Common = _this.Common,
												    priceManager = _this.priceManager,
												    dom = _this.dom;_this.$mobilesubmit = $('.price_tab #mobilesubmit', dom);_this.$mobilesubmit_span = $('.price_tab #mobilesubmit>span', dom);if (!createOrder.bAccess) {
															return;
												}validate.addFilter($("#hidarriveTime", dom), {}); /** 接入乐视黄页
                                                               * 在接入乐视黄页的时候先判断对方是否登录；调用window.contact.getLoginMaskUid();
                                                               * 定义 callback:getLeUidCallback(result,uid);
                                                               * uid -1 表示未登录对方会调到登录；
                                                               * uid 是否与$DATA_CREATEORDER.openId相符；
                                                               * 相符  表示乐视账号为当前账号
                                                               * 不相符 会跳艺龙的联合登录；在后端后再次获取uid再联合登录
                                                               */if (!!pageInfo && !!pageInfo.chid && pageInfo.chid == 'letvhy') {
															window.contact.getLoginMaskUid();window.getLeUidCallback = function (result, uid) {
																		switch (uid) {case $DATA_CREATEORDER.openId:
																								break;default:
																								location.href = $DATA_CREATEORDER.proxyLoginUrl + "?backUrl=" + encodeURIComponent(location.href);break;}
															};
												} // var nameErrorMsg,
												//     nameRegex;
												// if ($DATA_CREATEORDER.needEnName == "1") {
												//     nameErrorMsg = "抱歉，您入住的为外宾酒店。入住人姓名仅支持输入拼音或英文名称。";
												//     nameRegex = $DATA_CREATEORDER.customerENRule;
												// } else {
												//     nameRegex = $DATA_CREATEORDER.customerCNRule;
												//     nameErrorMsg = "请输入真实的入住人姓名，支持全部为汉字以及全部为拼音或英文字母。";
												// }
												if ($DATA_CREATEORDER.needEnName != "1") {
															validate.addFilter($("input[name='customernames']", dom), [{ rq: true, msg: "请输入入住人姓名" }, { regex: $DATA_CREATEORDER.customerCNRule, msg: "请输入真实的入住人姓名，支持全部为汉字以及全部为拼音或英文字母。" }]);
												} else {
															// todo 校验英文的输入名称；
															var customerEnNames = '';for (var en = 0; en < $('.eng_name', dom).length; en++) {
																		var enName = $('.eng_name', dom).eq(en).find('input')[0].value + '/' + $('.eng_name', dom).eq(en).find('input')[1].value;if (!$('.eng_name', dom).eq(en).find('input')[0].value || !$('.eng_name', dom).eq(en).find('input')[1].value) {
																					dialog.alert('请输入入住人姓名');return false;
																		} else if (!new RegExp($DATA_CREATEORDER.customerENRule).test(enName)) {
																					dialog.alert('抱歉，您入住的为外宾酒店。入住人姓名仅支持输入拼音或英文名称。');return false;
																		}Common.setLocalData("newEnPersonList", enName, ",", 10);customerEnNames += enName + (en != $('.eng_name', dom).length - 1 ? ',' : '');
															}
												}var validateResult = $('.createorder', dom).validate({ singleMode: true, fixDC: true, trim: true });if (validateResult.isError) {
															dialog.alert(validateResult.msgs[0]);return;
												} // 入住人姓名敏感词校验
												var limitedWords = ["发轮功", "张三", "李四", "王五", "SB", "逼", "傻逼", "傻冒", "王八", "王八蛋", "混蛋", "你妈", "你大爷", "操你妈", "你妈逼", "先生", "小姐", "男士", "女士", "测试", "小沈阳", "丫蛋", "男人", "女人", "骚", "騒", "搔", "傻", "逼", "叉", "瞎", "屄", "屁", "性", "骂", "疯", "臭", "贱", "溅", "猪", "狗", "屎", "粪", "尿", "死", "肏", "骗", "偷", "嫖", "淫", "呆", "蠢", "虐", "疟", "妖", "腚", "蛆", "鳖", "禽", "兽", "屁股", "畸形", "饭桶", "脏话", "可恶", "吭叽", "小怂", "杂种", "娘养", "祖宗", "畜 生", "姐卖", "找抽", "卧槽", "携程", "无赖", "废话", "废物", "侮辱", "精虫", "龟头", "残疾", "晕菜", "捣乱", "三八", "破鞋", "崽子", "混蛋", "弱智", "神经", "神精", "妓女", "妓男", "沙比", "恶性", "恶心", "恶意", "恶劣", "笨蛋", "他丫", "她丫", "它丫", "丫的", "给丫", "删丫", "山丫", "扇丫", "栅丫", "抽丫", "丑丫", "手机", "查询", "妈的", "犯人", "垃圾", "死鱼", "智障", "浑蛋", "胆小", "糙蛋", "操蛋", "肛门", "是鸡", "无赖", "赖皮", "磨几", "沙比", "智障", "犯愣", "色狼", "娘们", "疯子", "流氓", "色情", "三陪", "陪聊", "烤鸡", "下流", "骗子", "真贫", "捣乱", "磨牙", "磨积", "甭理", "尸体", "下流", "机巴", "鸡巴", "鸡吧", "机吧", "找日", "婆娘", "娘腔", "恐怖", "穷鬼", "捣乱", "破驴", "破罗", "妈必", "事妈", "神经", "脑积水", "事儿妈", "草泥马", "杀了铅笔", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J8", "s.b", "sb", "sbbt", "Sb＋Sb", "sb＋bt", "bt＋sb", " saorao", "SAORAO", "Fuck", "shit", "0", "\\*", "\\/", "\\.", "\\(", "\\)", "（", "）", ":", ";", "-", "_", "－", "谢先生", "谢小姐", "蔡先生", "蔡小姐", "常先生", "常小姐", "陈先生", "陈小姐", "陈女士", "崔先生", "崔小姐", "高先生", "高小姐", "高女士", "郭先生", "郭小姐", "郭女士", "黄先生", "黄小姐", "黄女士", "刘先生", "刘小姐", "刘女士", "李先生", "李小姐", "李女士", "王先生", "王小姐", "王女士", "朱先生", "朱小姐", "朱女士", "周先生", "周小姐", "周女士", "郑先生", "郑小姐", "郑女士", "赵先生", "赵小姐", "赵女士", "张先生", "张小姐", "张女士", "章先生", "章小姐", "杨先生", "杨小姐", "杨女士", "徐先生", "徐小姐", "徐女士", "许先生", "许小姐", "许女士", "贾先生", "贾小姐", "季先生", "季小姐", "康先生", "康小姐", "路先生", "路小姐", "马先生", "马小姐", "马女士", "彭先生", "彭小姐", "秦先生", "秦小姐", "任先生", "任小姐", "孙先生", "孙小姐", "谭先生", "谭小姐", "吴先生", "吴小姐", "叶先生", "叶小姐", "应先生", "应小姐", "于先生", "于小姐", "白先生", "白小姐", "包先生", "包小姐", "毕先生", "毕小姐", "曹先生", "曹小姐", "成先生", "成小姐", "程先生", "程小姐", "戴先生", "戴小姐", "邓先生", "邓小姐", "丁先生", "丁小姐", "董先生", "董小姐", "窦先生", "窦小姐", "杜先生", "杜小姐", "段先生", "段小姐", "方先生", "方小姐", "范先生", "范小姐", "冯先生", "冯小姐", "顾先生", "顾小姐", "古先生", "古小姐", "关先生", "关小姐", "管先生", "管小姐", "韩先生", "韩小姐", "潘先生", "潘小姐", "钱先生", "钱小姐", "齐先生", "齐小姐", "沈先生", "沈小姐", "石先生", "石小姐", "史先生", "史小姐", "宋先生", "宋小姐", "苏先生", "苏小姐", "唐先生", "唐小姐", "test", "ceshi", " ", "郝先生", "郝小姐", "何先生", "何小姐", "贺先生", "贺小姐", "侯先生", "侯小姐", "胡先生", "胡小姐", "华先生", "华小姐", "江先生", "江小姐", "姜先生", "姜小姐", "蒋先生", "蒋小姐", "焦先生", "焦小姐", "金先生", "金小姐", "孔先生", "孔小姐", "梁先生", "梁小姐", "林先生", "林小姐", "罗先生", "罗小姐", "孟先生", "孟小姐", "牛先生", "牛小姐"];var customernames = $(".contact-person input.createorder", dom);for (var i = 0, len = customernames.length; i < len; i++) {
															var customername = customernames[i];if (limitedWords.indexOf(customername.value) != -1) {
																		dialog.alert("入住人姓名中存在敏感词汇，请填写真实姓名确保顺利入住");return;
															}
												} //联系人手机号验证
												if ($("#contactormobile", dom).val().length == 0) {
															dialog.alert("请输入联系人手机号");return;
												} //联系人手机号验证
												if (!new RegExp($DATA_CREATEORDER.contactCodeRegex).test($("#area-code", dom).attr("data-value") + $("#contactormobile", dom).val())) {
															dialog.alert("联系人手机号格式不正确");return;
												}if ($DATA_CREATEORDER.productInfoStr.isBookingProduct == true) {
															// booking邮箱验证
															if ($("#contactoremail", dom).val().length == 0) {
																		dialog.alert("请输入联系人邮箱");return;
															} // booking邮箱验证
															if (!new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+$/).test($("#contactoremail", dom).val())) {
																		dialog.alert("请您先填写正确的邮箱，再提交订单");return;
															}
												} // 针对华住、铂涛的活动，如果存在身份证号输入栏，则验证入住人身份证
												if (idCard && idCard.jsCheckIDCard && idCard.jsCheckIDCard()) {
															return;
												} //登录
												if (loginComponent.loginStatus == 1) {
															dialog.alert("请先登录");return;
												} // 手Q定制
												if ($DATA_CREATEORDER.customization && $DATA_CREATEORDER.customization.createorder && $DATA_CREATEORDER.customization.createorder.needLogin && !$DATA_CREATEORDER.loginFlag) {
															setTimeout(function () {
																		var ele = $('.login-list .label-switch').find(".checkbox");var elt = $('.login-list .label-switch').parent().parent();ele.find("span").hide();ele.find(".open").show();elt.parent().addClass("order-loginb");elt.find("li").show();elt.find(".margin").show().css("border-bottom", "1px #dcdcdc solid");ele.addClass('active');PluginManager.showLoad();$(".imgcode", dom).hide();$(".imgwrong", dom).hide();loginComponent.loginOpen();
															}, 10);return;
												}var jsonData = {};if (!$DATA_CREATEORDER.isCanBeExtended) {
															jsonData = validateResult.getData();
												} else {
															var _str_ = '',
															    _str_arrivetime = '';for (var ind = 0, leng = validateResult.corrects.length; ind < leng; ind++) {
																		if (validateResult.corrects[ind].target.attr('name') == 'customernames') {
																					_str_ += _str_ == '' ? validateResult.corrects[ind].val : ',' + validateResult.corrects[ind].val;
																		} else if (validateResult.corrects[ind].target.attr('name') == 'arrivetime') {
																					_str_arrivetime = validateResult.corrects[ind].val;
																		}
															}jsonData['customernames'] = _str_;jsonData['arrivetime'] = _str_arrivetime;
												} //  todo入住人为英文的情况
												if ($DATA_CREATEORDER.needEnName == "1") {
															jsonData['customernames'] = customerEnNames;
												}jsonData["cachekey"] = $DATA_CREATEORDER.cachekey;jsonData["usehongbao"] = redPacketList.selectedIncomeId || "";jsonData['isBoTaoNewMemberProduct'] = $DATA_CREATEORDER.isBoTaoNewMemberProduct ? 'true' : 'false';jsonData["needrepeatorder"] = createOrder.needRepeatOrder;jsonData["roomcount"] = $("#room-number", dom).attr("data-value");jsonData["areacodeconnect"] = $("#area-code", dom).attr("data-value");jsonData["notetohotel"] = !!specialRequirement && !!specialRequirement.params ? specialRequirement.params : ""; //特殊要求
												jsonData["connectormobile"] = $("#contactormobile", dom).val();if ($DATA_CREATEORDER.productInfoStr.isBookingProduct == true) {
															jsonData["connectorEmail"] = $("#contactoremail", dom).val();jsonData["isBookingProduct"] = true;
												}jsonData["hotelid"] = $DATA_CREATEORDER.hotelId;if ($("#person-id", dom).val()) {
															jsonData["idcard"] = $("#person-id", dom).val();
												} // for loc
												if ($DATA_CREATEORDER.order_loc && $DATA_CREATEORDER.order_loc.lat) {
															//H5成单接口要转小写
															jsonData["lat"] = $DATA_CREATEORDER.order_loc.lat;jsonData["lng"] = $DATA_CREATEORDER.order_loc.lng;jsonData["sourcetype"] = $DATA_CREATEORDER.order_loc.sourceType;jsonData['distancefromhotelwhenbooking'] = getDistance($DATA_CREATEORDER.order_loc.lat, $DATA_CREATEORDER.order_loc.lng, $DATA_CREATEORDER.latitude, $DATA_CREATEORDER.longitude);jsonData['citywhenbooking'] = $DATA_CREATEORDER.order_loc.cityName;
												}if (invoiceForNewCO.invoicedata !== null) {
															// if (invoiceForNewCO.selectInvoiceTitle.value == '') {
															//     dialog.alert("请输入发票抬头");
															//     return;
															// }
															jsonData["invoicedata.type"] = invoiceForNewCO.invoicedata.invoiceType;jsonData["invoicedata.title"] = invoiceForNewCO.invoicedata.invoiceHeader;jsonData["invoicedata.content"] = invoiceForNewCO.invoicedata.invoiceContent;jsonData["invoicedata.hasInvoiceInfo"] = invoiceForNewCO.invoicedata.hasInvoiceInfo; //发票备注
															if (invoiceForNewCO.invoicedata.invoiceType == 0 || invoiceForNewCO.invoicedata.invoiceType == 1) {
																		//纸质发票 和电子发票
																		if (invoiceForNewCO.invoicedata.userType === 2) {
																					//抬头类型为公司，需要纳税人识别号
																					jsonData["invoicedata.ITIN"] = invoiceForNewCO.invoicedata.taxpayerRegistrationNumber;
																		}jsonData["invoicedata.userType"] = invoiceForNewCO.invoicedata.userType; // 0-默认 1-个人 2- 企业 3-政府机关行政单位
															} //else if(invoiceForNewCO.invoicedata.invoiceType == 2){ // 专票
															jsonData["invoicedata.specialInvoice.taxPayerNum"] = invoiceForNewCO.invoicedata.taxpayerRegistrationNumber || "";jsonData["invoicedata.specialInvoice.sHotelAddress"] = invoiceForNewCO.invoicedata.registerAddress || "";jsonData["invoicedata.specialInvoice.registerPhoneNum"] = invoiceForNewCO.invoicedata.companyPhone || "";jsonData["invoicedata.specialInvoice.taxRegisterBank"] = invoiceForNewCO.invoicedata.openAccountBank || "";jsonData["invoicedata.specialInvoice.registerBankNum"] = invoiceForNewCO.invoicedata.accountOfBank || ""; //}
															if (invoiceForNewCO.invoicedata.invoiceType == 0 || invoiceForNewCO.invoicedata.invoiceType == 2) {
																		//纸质发票和专票都需要邮寄地址和邮寄方式
																		// if (invoiceForNewCO.selectAddress.name == '') {
																		//     dialog.alert("请输入发票收件人姓名");
																		//     return;
																		// }
																		// if (invoiceForNewCO.selectAddress.addressDetail == '') {
																		//     dialog.alert("请输入发票邮寄地址");
																		//     return;
																		// }
																		jsonData["invoicedata.receiver"] = invoiceForNewCO.invoicedata.receiver;jsonData["invoicedata.address"] = invoiceForNewCO.invoicedata.receiveAddress;jsonData["invoicedata.phone"] = invoiceForNewCO.invoicedata.receivePhone; //if ( invoiceForNewCO && invoiceForNewCO.expressFee && invoiceForNewCO.expressFee.delieverType) {
																		jsonData["invoicedata.delieverFeeType"] = invoiceForNewCO.invoicedata.delieverFeeType;jsonData["invoicedata.delieverFeeAmount"] = invoiceForNewCO.invoicedata.delieverFeeAmount; //}
															} else {
																		jsonData["invoicedata.phone"] = invoiceForNewCO.invoicedata.receivePhone; //invoiceForNewCO.selectAddress.phoneNo;//$("#invoice-phone input", dom).val();
															}
												}jsonData["usecoupon"] = $DATA_CREATEORDER.checkCouponSwitch == 0 ? 'on' : 'off';if (!$DATA_CREATEORDER.isCanBeExtended && $DATA_CREATEORDER.needEnName != '1') {
															for (var i = 0, arr = validateResult.getData().customernames.split(','); i < arr.length; i++) {
																		Common.setLocalData("newPersonList", arr[i], ",", 10);
															}
												} else if ($DATA_CREATEORDER.needEnName != '1') {
															for (var it = 0, len = validateResult.corrects.length; it < len; it++) {
																		if (validateResult.corrects[it].target.attr('name') == 'customernames') {
																					Common.setLocalData("newPersonList", validateResult.corrects[it].val, ",", 10);
																		}
															}
												}Common.setLocalData("contactmobile", $("#contactormobile", dom).val(), ",", 5); // booking字段 邮箱存入 localstorage
												if ($DATA_CREATEORDER.productInfoStr.isBookingProduct == true) {
															Common.setLocalData("contactemail", $("#contactoremail", dom).val(), ",", 5);
												}if (createOrder.isChangeprice == 1) {
															jsonData["acceptedchangeprice"] = true;
												} else {
															jsonData["acceptedchangeprice"] = false;
												};if (createOrder.isChangetype == 1) {
															jsonData["acceptednotvouchtovouch"] = true;
												} else {
															jsonData["acceptednotvouchtovouch"] = false;
												};if (createOrder.isAcceptSaleChange == 1) {
															jsonData['acceptSaleChangePrice'] = true;
												} else {
															jsonData['acceptSaleChangePrice'] = false;
												} //转让单
												if (!!$DATA_CREATEORDER.resale && !!$DATA_CREATEORDER.resaleSrcOrderId) {
															jsonData["resale"] = $DATA_CREATEORDER.resale;jsonData["resalesrcorderid"] = $DATA_CREATEORDER.resaleSrcOrderId;
												} //取消险参数
												if (!!priceManager.defaultInsuranceBack && !!priceManager.insurances && priceManager.insurances.length > 0 && !!priceManager.insurances[0].insurancePriceC) {
															var posterorderParams = JSON.parse(sessionStorage.getItem('posterorderParams'));posterorderParams.insurancePrice = priceManager.insurances[0].insurancePriceC;jsonData['cancelOrder'] = JSON.stringify(posterorderParams);
												} //闪住参数
												if (creditAndQuick.isSelect) {
															jsonData['isCheckCreditOrFlash'] = true;
												}if ($DATA_CREATEORDER.isCanBeExtended) {
															jsonData['baseOrderNo'] = $DATA_CREATEORDER.orderNo;
												}if (opt.depositMoney) {
															////闪住:成单异常 ，变价
															jsonData['depositMoney'] = opt.depositMoney;
												} //不完全重单继续提交订单传的参数
												if (!!opt && typeof opt == 'object') {
															for (var params in opt) {
																		jsonData[params] = opt[params];
															}
												}createOrder.delayCreateOrder();this.jsonData = jsonData;console.log('----->jsonjsonData: ', jsonData); // 仅点击提交订单后弹层二次确认
												// if (window.pageInfo.chid === "wxqbh5" && this.mvtConfirm && opt && opt._from == 'mobilesubmit') {
												//     delete this.jsonData._from;
												//     this.createConfirm();
												//     if (core.getMvtResult('218') === '0') {
												//         setTimeout(function () {
												//             _this.$confirmDialog.remove();
												//             _this.submitOrder(jsonData);
												//         }, 6000);
												//     }
												// } else {
												this.submitOrder(jsonData); // }
									}, createConfirm: function () {
												var _this = this;var priceManager = _this.priceManager,
												    createOrderConfirmTpl = _this.createOrderConfirmTpl,
												    dom = _this.dom;var price = "￥" + parseFloat($('#wborderprice').text());if (priceManager.data.currencyPrice && priceManager.data.currencyPrice != '0') {
															price = priceManager.data.currencyPrice;
												} // var expressCount = expressFee && expressFee.value || 0;
												// 首晚担保情况下（房间担保， 时间担保），独立计算取消险
												/*if ( $DATA_CREATEORDER.vouchMoneyType == 1 && (roomReservation.getValue().needVouch == 1 || roomNumber.getValue().assure == 1) ) {
            			            if ( !!priceManager.defaultInsuranceBack && !!priceManager.insurances && priceManager.insurances.length > 0 && !!priceManager.insurances[0].insurancePriceC ) {
            			                price = priceManager.priceInfo.vouchPriceRmb + priceManager.insurances[0].insurancePriceC
            			            } else {
            			                price = priceManager.priceInfo.vouchPriceRmb;
            			            }
            			            // 计算发票邮费
            			            if ($(".order-invoice", dom).hasClass('order-loginb') && $('#express-fee').attr('data-value') == 10 && (selectInvoiceType.value == 0 || selectInvoiceType.value == 2)) {
            			                price += expressCount;
            			            }
            			        }*/var tmpl = createOrderConfirmTpl({ orderData: { // mvtCode: core.getMvtResult('218'),
																		hotelName: $DATA_CREATEORDER.hotelName, RoomTypeName: $DATA_CREATEORDER.productInfo.roomTypeName, roomcount: this.jsonData.roomcount, indate: $DATA_CREATEORDER.checkinCalendarStr, outdate: $DATA_CREATEORDER.checkoutCalendarStr, price: price, payType: $DATA_CREATEORDER.payType, showCouponText: priceManager.showCouponText, returnMoney: priceManager.data.couponText ? priceManager.data.couponText.match(/[-+]?[0-9]*\.?[0-9]+/g) ? priceManager.data.couponText.match(/[-+]?[0-9]*\.?[0-9]+/g)[0] : '' : '' // vouchPriceRmb: priceManager.priceInfo.vouchPriceRmb,
																		// couponVal: priceManager.priceInfo.couponVal,
																		// hongBaoVal: priceManager.priceInfo.hongBaoVal,
																		// vouchMoneyType: $DATA_CREATEORDER.vouchMoneyType,
																		// hongBaoVal: priceManager.priceInfo.hongBaoVal,
															} });this.$confirmDialog = $(tmpl).appendTo(dom);this.$confirmDialog.on('click', '.back', function () {
															_this.$confirmDialog.remove();tjMVT.setData({ "et": "click", "cspot": "backtocreateorder" });
												});this.$confirmDialog.on('click', '.submit', function () {
															_this.$confirmDialog.remove();_this.submitOrder(_this.jsonData);tjMVT.setData({ "et": "click", "cspot": "submitorder" });
												});tjMVT.setData({ "et": "click", "cspot": "reconfirmorder" });
									}, setFirstOrderFlat: function () {
												var expDate = new Date();expDate.setDate(expDate.getDate() + 1);expDate.setHours(0);expDate.setMinutes(0);expDate.setSeconds(0);document.cookie = "firstOrderFlag=true; expires=" + expDate.toUTCString() + "; path=/; domain=.elong.com";
									}, submitOrder: function (jsonData) {
												var _this = this;var aborting = _this.aborting,
												    priceManager = _this.priceManager,
												    synPriceInfo = _this.synPriceInfo,
												    replaceBackUrl = _this.replaceBackUrl,
												    redPacketList = _this.redPacketList,
												    dom = _this.dom; // console.log(JSON.stringify(jsonData));
												// return;
												core.fetch(window.pageInfo.subPath + "api/postorder/", jsonData, { timeout: 10000, type: "POST", //url: window.pageInfo.subPath + "api/postorder/",
															dataType: "json", //data: jsonData,
															beforeSend: function () {
																		slark.get("h5_createorder").startLoading();
															}, complete: function (result) {
																		switch (JSON.parse(result.response).errorCode) {case 'ORDER_GENERATE_PRICECHANGE':case 'ORDER_NOTVOUCH_TO_VOUCH':case 'ORDER_VOUCH_TO_NOTVOUCH':case 'ORDER_VOUCH_MONEY_CHANGE':case 'ORDER_GENERATE_HONGBAOPRICECHANGE':
																								break;case 'ORDER_GENERATE_DUPLICATE':
																								!!$DATA_CREATEORDER.loginFlag ? slark.get("h5_createorder").stopLoading() : "";break;default:
																								slark.get("h5_createorder").stopLoading();break;}
															} }).then( //success: 
												function (result) {
															createOrder.isChangeprice = 0;createOrder.isChangetype = 0; //提交订单后清空abort信息
															aborting.removeAbortData();if (result.errorCode == "") {
																		createOrder.needRepeatOrder = false;if (result.returnUrl != "") {
																					// 全渠道虚拟订单成功页面打点
																					tjMVT.setData({ "et": "show", "pt": "h5-hotel-ordercreated", oid: result.orderNo }); // 微信渠道订单流程定制
																					if (pageInfo.chid === 'wxqbh5') {
																								// 判断如果有首单 当天不在弹出单单有奖
																								var newForOrder = localStorage.getItem('newForOrder');if (newForOrder) {
																											createOrder.setFirstOrderFlat();localStorage.removeItem('newForOrder');
																								}window.location.replace(result.returnUrl);return false;
																					} else {
																								if (result.needPay == '1') {
																											//是否需要支付
																											window.location.href = result.returnUrl;return false;
																								} else {
																											core.addPager({ url: result.returnUrl, active: true });
																								}
																					}
																		}
															} else {
																		switch (result.errorCode) {//重单
																					case "ORDER_GENERATE_DUPLICATE":
																								//提交订单后清空abort信息
																								aborting.removeAbortData(); //给测试看
																								if (!!result.dupOrderOp && !!result.dupOrderOp.actions && result.dupOrderOp.actions.length > 0 && !!result.dupOrderOp.des && !!$DATA_CREATEORDER.loginFlag) {
																											createOrder.promptDes = { content: '', text: [] };createOrder.promptDes.content = result.dupOrderOp.des;if (result.dupOrderOp.actions.length == 2) {
																														createOrder.promptDialog = dialog.confirm;createOrder.promptDes.isVertical = false;createOrder.promptDes.success = createOrder.dupFactory(createOrder.promptDes, result.dupOrderOp.actions[0], result.dupOrderOp.duplicateOrderId, result.repeatOrderUrl);createOrder.promptDes.cancel = createOrder.dupFactory(createOrder.promptDes, result.dupOrderOp.actions[1], result.dupOrderOp.duplicateOrderId, result.repeatOrderUrl);
																											} else if (result.dupOrderOp.actions.length == 3) {
																														createOrder.promptDialog = dialog.moreconfirm;createOrder.promptDes.isVertical = true; //此参数代表多个按钮并排
																														createOrder.promptDes.first = createOrder.dupFactory(createOrder.promptDes, result.dupOrderOp.actions[0], result.dupOrderOp.duplicateOrderId, result.repeatOrderUrl);createOrder.promptDes.second = createOrder.dupFactory(createOrder.promptDes, result.dupOrderOp.actions[1], result.dupOrderOp.duplicateOrderId, result.repeatOrderUrl);createOrder.promptDes.third = createOrder.dupFactory(createOrder.promptDes, result.dupOrderOp.actions[2], result.dupOrderOp.duplicateOrderId, result.repeatOrderUrl);
																											}if (!!createOrder.promptDialog) {
																														createOrder.promptDialog(createOrder.promptDes);
																											}
																								} else if (!!$DATA_CREATEORDER.loginFlag) {
																											dialog.confirm({ text: ["查看订单", "取消"], content: "您已提交过相同的订单，订单正在处理中。请您查看订单继续操作原单", success: function () {
																																	setTimeout(function () {
																																				window.location.replace(result.repeatOrderUrl);
																																	}, 300);
																														}, cancel: function () {} });
																								} else {
																											window.setTimeout(function () {
																														slark.get("h5_createorder").stopLoading();dialog.confirm({ text: ["继续下单", "取消"], content: "您已提交过相同的订单，您可以继续提交，或者更新入住人信息后再次提交", success: function () {
																																				createOrder.needRepeatOrder = true;createOrder.createOrderPost();
																																	}, cancel: function () {} });
																											}, 4000);
																								}break; //取消险核保失败；
																					case "ORDER_INSURANCE_FAIL":
																								//提交订单后清空abort信息
																								aborting.removeAbortData();dialog.newAlert({ msg: result.errorMessage, btnText: '确定', callback: function () {
																														priceManager.defaultInsuranceBack = false;;$('.cancels', dom).find('.choosewx i').removeClass('on').attr('data-tj', '{"cspot":"insurancecanceloff"}');synPriceInfo();
																											} });break; //满房
																					case "ORDER_GENERATE_ROOMFULL":
																								//提交订单后清空abort信息
																								aborting.removeAbortData();dialog.confirm({ text: ["预订其他房型", "选择其他酒店"], content: "抱歉，房量不足，您可以修改预订其它房型或选择其它酒店。", success: function () {
																														setTimeout(function () {
																																	var backUrl = replaceBackUrl.getFromUrl(),
																																	    currentSessionInfo = "";if (sessionStorage.getItem('replaceInfo')) {
																																				currentSessionInfo = JSON.parse(sessionStorage.getItem('replaceInfo')) || {};
																																	}if (backUrl !== "" || !!currentSessionInfo) {
																																				replaceBackUrl.setCreateOrderSkip(window.pageInfo.pt);return false;
																																	} else {
																																				location.href = $DATA_CREATEORDER.hotelDetailUrl;return false;
																																	}
																														}, 300);
																											}, cancel: function () {
																														setTimeout(function () {
																																	var backUrl = replaceBackUrl.getFromUrl(),
																																	    currentSessionInfo = "";if (sessionStorage.getItem('replaceInfo')) {
																																				currentSessionInfo = JSON.parse(sessionStorage.getItem('replaceInfo')) || {};
																																	}if (backUrl !== "" || !!currentSessionInfo) {
																																				replaceBackUrl.setCreateOrderSkip(window.pageInfo.pt);return false;
																																	} else {
																																				location.href = $DATA_CREATEORDER.hotelListUrl;return false;
																																	}
																														}, 300);
																											} });break; //变价
																					case "ORDER_GENERATE_PRICECHANGE":
																								var lastprice;if (createOrder.orderPrice != false) {
																											lastprice = createOrder.orderPrice;
																								} else {
																											lastprice = core.smartFloat($DATA_CREATEORDER.priceInfo.averagePriceSubTotal * $DATA_CREATEORDER.stayDays);
																								} //取消险金额 原价 cancelPrice  现价changedCancelPrice；
																								window.setTimeout(function () {
																											slark.get("h5_createorder").stopLoading();dialog.confirm({ text: ["否，我再看看", "是，继续预订"], content: result.changeDescription, //"抱歉，由于酒店价格调整，订单金额由￥" + lastprice + "变为￥" + result.changedOrderPrice + (!!priceManager.defaultInsuranceBack? ",取消险金额￥" + result.cancelPrice + "变为￥" + result.changedCancelPrice: "") + ",是否继续预订",
																														success: function () {}, cancel: function () {
																																	createOrder.isChangeprice = 1;createOrder.createOrderPost();
																														} });
																								}, 4000);break; // 促销黑名单
																					case "ORDER_USER_IN_SALE_BLACKLIST":
																								dialog.confirm({ text: ["我再看看", "继续预订"], content: !!result.continueResultInfo && result.continueResultInfo.description || "", success: function () {}, cancel: function () {
																														//是否接受黑名单 不适用促销价格
																														createOrder.isAcceptSaleChange = 1;createOrder.createOrderPost();
																											} });break; //非担保变担保
																					case "ORDER_NOTVOUCH_TO_VOUCH":
																								window.setTimeout(function () {
																											slark.get("h5_createorder").stopLoading();dialog.confirm({ text: ["我再看看", "继续预订"], content: "因房量紧张，酒店需要您支付￥" + result.changedVouchMoney + "预订担保金", success: function () {}, cancel: function () {
																																	createOrder.isChangetype = 1;createOrder.createOrderPost();
																														} });
																								}, 4000);break; //担保变非担保
																					case "ORDER_VOUCH_TO_NOTVOUCH":
																								window.setTimeout(function () {
																											slark.get("h5_createorder").stopLoading();dialog.confirm({ text: ["我再看看", "继续预订"], content: "恭喜，由于酒店政策调整，预订该房型不需要担保，是否继续预订？", success: function () {}, cancel: function () {
																																	createOrder.isChangetype = 1;createOrder.createOrderPost();
																														} });
																								}, 4000);break; //担保金额变更
																					case "ORDER_VOUCH_MONEY_CHANGE":
																								window.setTimeout(function () {
																											slark.get("h5_createorder").stopLoading();dialog.confirm({ text: ["我再看看", "继续预订"], content: result.changeDescription, //"抱歉，由于酒店政策调整，担保金额变成 ¥" + result.changedVouchMoney + "，是否继续预订？",
																														success: function () {}, cancel: function () {
																																	createOrder.isChangetype = 1;createOrder.createOrderPost();
																														} });
																								}, 4000);break; //优惠券金额变更
																					case "ORDER_GENERATE_HONGBAOPRICECHANGE":
																								window.setTimeout(function () {
																											slark.get("h5_createorder").stopLoading();dialog.confirm({ text: ["否，我再看看", "是，继续预订"], content: result.errorMessage, success: function () {}, cancel: function () {
																																	createOrder.isChangetype = 1;redPacketList.selectedIncomeId = "";createOrder.createOrderPost();
																														} });
																								}, 4000); //redPacketList.selectedIncomeId
																								//dialog.alert(result.errorMessage);
																								break; // //成单失败
																					// case "ORDER_GENERATE_FAIL":
																					//     dialog.alert("十分抱歉，订单未能提交成功。请尝试重新预订或拨打电话进行预定。");
																					//     break;
																					//需使用龙萃会员登录
																					case "CREDITFLASH_DEPOSITMONEY_CHANGE":
																								//信用住 & 闪住
																								window.setTimeout(function () {
																											slark.get("h5_createorder").stopLoading();dialog.confirm({ text: ["否，我再看看", "是，继续预订"], content: result.description, success: function () {}, cancel: function () {
																																	createOrder.isChangetype = 1;redPacketList.selectedIncomeId = "";createOrder.createOrderPost({ depositMoney: result.depositMoney });
																														} });
																								}, 4000);break;case "HOTEL_LONGCUI_LOGIN":
																								//提交订单后清空abort信息
																								aborting.removeAbortData(); //两个按钮  登录帐号和其它房型
																								dialog.confirm({ text: ["登录帐号", "其它房型"], content: "抱歉，由于您选择的是龙萃房型，请登录龙萃账号或预订其他房型。", success: function () {
																														setTimeout(function () {
																																	location.href = $DATA_CREATEORDER.loginBackUrl;return false;
																														}, 300);
																											}, cancel: function () {
																														setTimeout(function () {
																																	var backUrl = replaceBackUrl.getFromUrl(),
																																	    currentSessionInfo = "";if (sessionStorage.getItem('replaceInfo')) {
																																				currentSessionInfo = JSON.parse(sessionStorage.getItem('replaceInfo')) || {};
																																	}if (backUrl !== "" || !!currentSessionInfo) {
																																				replaceBackUrl.setCreateOrderSkip(window.pageInfo.pt);return false;
																																	} else {
																																				location.href = $DATA_CREATEORDER.hotelDetailUrl;return false;
																																	}
																														}, 300);
																											} });break; //入住人姓名格式不正确
																					case "WRONG_NAME":
																								dialog.alert("请输入真实的入住人姓名，支持全部为汉字以及全部为拼音或英文字母。");break; //需填写英文姓名
																					case "WRONG_EN_NAME":
																								dialog.alert("抱歉，您入住的为外宾酒店。入住人姓名仅支持输入拼音或英文名称。"); //请输入拼音或英文名称
																								break; //真实姓名校验
																					case "ORDER_GENERATE_NOT_REALNAME":
																								dialog.alert("请填写实际入住客人的真实姓名，避免某先生、某小姐、生僻字，确保顺利入住");break; //联系人手机号为空
																					case "NO_MOBILE_NUM":
																								dialog.alert("请输入手机号");break; //入住人数和房间数量不一致
																					case "PNUM_NEQ_RNUM":
																								dialog.alert("请完整填写入住人");break; //入住人姓名包含敏感字（不是真实姓名）
																					case "FALSE_NAME":
																								dialog.alert("请输入真实入住人姓名。");break;case "NET_TIMEOUT":
																								//接口访问超时
																								dialog.alert("网络超时，请稍后再试。");break; //接口异常（接口返回无数据或格式不正确）
																					case "API_ERROR":
																								dialog.alert("网络异常，请稍后再试。");break; //系统异常（接口返回数据正确但服务处理时异常）
																					case "SYS_ERROR":
																								dialog.alert("系统异常，请稍后再试。");break; //cacheKey为空
																					case "ORDER_NO_DATA":
																								dialog.alert("您的预订信息已过期，请重新预订。");break; //是否存在订单信息
																					case "ORDER_WRONG_DATA":
																								dialog.newAlert({ msg: "您的预订信息已过期，请重新预订。", btnText: "重新预订", callback: function () {
																														setTimeout(function () {
																																	var backUrl = replaceBackUrl.getFromUrl(),
																																	    currentSessionInfo = "";if (sessionStorage.getItem('replaceInfo')) {
																																				currentSessionInfo = JSON.parse(sessionStorage.getItem('replaceInfo')) || {};
																																	}if (backUrl !== "" || !!currentSessionInfo) {
																																				replaceBackUrl.setCreateOrderSkip(window.pageInfo.pt);return false;
																																	} else {
																																				location.href = $DATA_CREATEORDER.hotelSearchUrl;return false;
																																	}
																														}, 300);
																											} });break;case "HOTEL_VOUCHSET_NOT_FOUND":
																								dialog.alert("网络繁忙，请稍后再试。");break;case "WRONG_IDCARD":
																								dialog.alert("请输入合法的身份证号码");break;case "BOTAO_CUXIAO_IDENTITY_DUPLICATE":
																								dialog.alert(result.errorMessage);break;case "BOTAO_NOT_FIRST_REG":
																								dialog.confirm({ text: ["再次验证", "预订其它房型"], content: "您已是铂涛会员，不能享受此活动价格，您可以验证其他入住人信息或预订其他房型。", success: function () {}, cancel: function () {
																														setTimeout(function () {
																																	location.href = $DATA_CREATEORDER.hotelDetailUrl;return false;
																														}, 300);
																											} });break;case "HUAZHU_NOT_FIRST_REG":
																								dialog.confirm({ text: ["再次验证", "预订其它房型"], content: "该入住人已是华住会员，不能享受此活动价格，您可以验证其他入住人信息或预订其他房型。", success: function () {}, cancel: function () {
																														setTimeout(function () {
																																	location.href = $DATA_CREATEORDER.hotelDetailUrl;return false;
																														}, 300);
																											} });break;case "TICKET_INVALID_TIMEOUT":
																								dialog.confirm({ text: ["再试一次", "预订其它房型"], content: "啊哦，小艺出错了，麻烦大侠再试一次~", success: function () {}, cancel: function () {
																														setTimeout(function () {
																																	location.href = $DATA_CREATEORDER.hotelDetailUrl;return false;
																														}, 300);
																											} });break;case "WEIXIN_TICKET_INVALID":
																								dialog.confirm({ text: ["再试一次", "预订其它房型"], content: "手太慢，这张优惠券被其他好友抢先一步使用中～", success: function () {// return false;
																											}, cancel: function () {
																														setTimeout(function () {
																																	location.href = $DATA_CREATEORDER.hotelDetailUrl;return false;
																														}, 300);
																											} });break; /* 专票 */case "SPECIAL_INVOICE_INVALID":
																								dialog.alert(result.errorMessage);break;default:
																								dialog.alert(result.errorMessage || '十分抱歉，订单未能提交成功。请尝试重新预订或拨打电话进行预订。');}createOrder.clearDelayCreateOrder();
															}
												}, //error:
												function () {
															slark.get("h5_createorder").stopLoading();dialog.alert("请求超时");
												});
									} }; /**
              * 信用住 & 闪住
              */var creditAndQuick = { dom: null, switch: true, tpl: '', isSelect: false, init: function (dom, insurancesAction) {
												this.dom = $(dom);if (this.switch) {
															this.bindEvents();
												}this.insurancesAction = insurancesAction;var flag = slark.getStorageCache('EL_WXQB_FLASHFLAG');if (($DATA_CREATEORDER.isCreditOrFlash == 1 || $DATA_CREATEORDER.isCreditOrFlash == 2) && (flag || $DATA_CREATEORDER.isDefaultCreditOrFlash)) {
															setTimeout(function () {
																		this.select();
															}.bind(this), 0);
												}this.askMore.init();
									}, select: function () {
												this.isSelect = true;this.dom.find(".order_sz i").addClass("on");roomNumber.setSelectValue('1');if (roomNumber.getValue().value != 1) {
															dialog.alert("您已选择【闪住】，房间数量已经变更成1间");
												} //与取消险互斥
												if ($('.cancels .choosewx i').hasClass("on")) {
															this.insurancesAction.clickEvent(); //
															dialog.alert("很抱歉，目前取消险和闪住不可同时勾选~");
												} //信用住勾选后提交按钮文案变更
												if ($DATA_CREATEORDER.isCreditOrFlash == 1) {// this.replaceBtnText('免支付下单');
												}slark.setStorageCache('EL_WXQB_FLASHFLAG', true);this.discription(true);
									}, discription: function (isSelected) {
												var onselectText = $DATA_CREATEORDER.creditFlashLiveDesc[0],
												    unselectText = $DATA_CREATEORDER.creditFlashLiveDesc[1];$(".order_sz .sz_content .top").text(isSelected ? onselectText : unselectText || onselectText);
									}, replaceBtnText: function (text) {
												$("#mobilesubmit span").text(text);$("#mobilesubmit").attr("data-activeTitle", text);
									}, cancel: function () {
												this.isSelect = false;this.dom.find(".order_sz i").removeClass("on");slark.removeStorageCache('EL_WXQB_FLASHFLAG');this.replaceBtnText('提交订单');this.discription(false);synPriceInfo();
									}, bindEvents: function () {
												var that = this;this.dom.off("click").on("click", ".order_sz i", function () {
															var oThis = $(this);if (oThis.hasClass('on')) {
																		that.cancel();
															} else {
																		that.select();
															}
												});
									}, askMore: { tpl: '<div class="mask_invoice js_sz_ask_more" style="display: none;"><div class="sz_mask"><div class="top_title">闪住流程说明<i class="icon-cross"></i></div><ul><li><span class="sz1"></span><dl><dt>预授住店费</dt><dd>预授住店费（部分产品含押金），可享受闪住产品服务。</dd></dl></li><li><span class="sz2"></span><dl><dt>免押金</dt><dd>办理入住时无需缴纳押金</dd></dl></li><li><span class="sz3"></span><dl><dt>免查房</dt><dd>办理离店时无需进行查房</dd></dl></li><li><span class="sz4"></span><dl><dt>免排队</dt><dd>离店后在线扣款，无需排队结帐</dd></dl></li></ul></div></div>', init: function () {
															var tpl = creditAndQuick.askMore.tpl;var winDom = $(tpl);$(slark.getActiveLayer()).append(tpl);$(".order_sz .ask_more").on('click', function () {
																		$('.js_sz_ask_more').show();
															});$(".js_sz_ask_more .icon-cross").on('click', function () {
																		$('.js_sz_ask_more').hide();
															});
												} } }; /**
                   * 新旧共公页面对象
                   * @param {any} $DATA 
                   * @param {any} dom 
                   * @returns  
                   */function commonInit($DATA, dom) {
									var geolocation = new Geolocation(); //去哪成单前校验 pm张旭。。。 根据后端返回的状态来进行展示by cpt
									var singleFrontCheck = { errorCode: $DATA.checkErrorCode, //状态码
												errorMessage: $DATA.checkErrorMessage, //返回的文案
												someLimit: null, btnText: '', //单个按钮btn文案；
												isBack: true, //是否返回上一页；
												tjObject: slark.clone(TJObject), init: function () {
															this.someLimit = !!this.errorCode && !!this.errorMessage;if (!this.someLimit) {
																		return;
															}this.switchCase(this.errorCode);
												}, /**
               * [switchCase 根据错误码，设置文案]
               * @param  {[type]} code [description]
               * @return {[type]}      [description]
               */switchCase: function (code) {
															var _this = this;switch (code) {case "2208":
																					var riseInPrice = _this.tjObject;riseInPrice.etinf = { value: 1 };dialog.confirm({ content: _this.errorMessage, text: ['返回', '继续预订'], success: function () {
																											riseInPrice.cspot = 'tcback';tjMVT.setData(riseInPrice);history.go(-2);return false;
																								}, cancel: function () {
																											riseInPrice.cspot = 'tcconfirm';tjMVT.setData(riseInPrice);
																								} });break;case "2207":
																					_this.btnText = '知道了';_this.isBack = false;break;case "2214":
																					_this.btnText = '知道了';_this.isBack = false;break;case "2209":
																					_this.btnText = '返回';break;case "2206":
																					_this.btnText = '返回';break;case "2237":
																					_this.btnText = '返回';break;default:
																					break;}if (!!_this.btnText) {
																		_this.dialogShow();
															}
												}, /**
               * [dialogShow 弹出错误对话框]
               * @return {[type]} [description]
               */dialogShow: function () {
															var _this = this;dialog.newAlert({ msg: _this.errorMessage, btnText: _this.btnText, callback: function () {
																					if (_this.isBack) {
																								history.go(-2);return false;
																					}
																		} });
												}, /**
               * [backHref 设置会退链接]
               * @return {[type]} [description]
               */backHref: function () {//history.go(-2);
												} };singleFrontCheck.init(); //微信环境静默定位 init $DATA.order_loc
									if (window.wx) {
												var order_storage = new StorageCache();var order_loc = order_storage.getData();if (typeof order_loc != 'object') {
															order_loc = {};
												}if (!order_loc.lat) {
															geolocation.getLocation(function (position) {
																		order_loc.cityId = position.cityId;order_loc.cityName = position.cityName;order_loc.lat = position.geoLocation.lat;order_loc.lng = position.geoLocation.lng;order_loc.sourceType = '5';order_storage.setData(order_loc);
															});
												}$DATA.order_loc = order_loc; // 引用传递，可等待接口返回
									} //发现酒店地址跳转
									replaceBackUrl.setReturnBack(window.pageInfo.pt); //回到首页的头（header）添加类样式，主要是margin-bottom ：－50px;
									$(".icon-house", dom).parent().addClass("createorder-header"); //放弃下单的弹框
									//点击header 的后退按钮
									$(dom).on("click", ".icon-left-nav", function () {
												dialog.confirm({ text: ["我要放弃", "继续下单"], content: "订单还未提交，<br/>确定放弃这么给力的价格?", success: function () {
																		setTimeout(function () {
																					var backUrl = replaceBackUrl.getFromUrl(),
																					    currentSessionInfo = "";if (sessionStorage.getItem('replaceInfo')) {
																								currentSessionInfo = JSON.parse(sessionStorage.getItem('replaceInfo')) || {};
																					}if (backUrl !== "" || !!currentSessionInfo) {
																								replaceBackUrl.setCreateOrderSkip(window.pageInfo.pt);return false;
																					} else {
																								var url = $DATA.backurl + "#&fromorder=1";location.href = url;return false;
																					}
																		}, 100);
															}, cancel: function () {} });
									}); //登录开关 -> $(".login-list .label-switch")
									var loginCheckbox = new checkbox($(".login-list .label-switch").find(".checkbox").hasClass("active"));loginCheckbox.addHandler('checked', function (flag) {
												checkboxToggle($(".login-list .label-switch"), flag);
									});loginCheckbox.addHandler('addClass', function (flag) {
												var elt = $(".login-list .label-switch").parent().parent();if (flag) {
															elt.parent().removeClass("order-loginb"); //蒙层
												} else {
															elt.parent().addClass("order-loginb");
												}
									});$(dom).on("click", ".voucher_bei", function () {
												$(this).hasClass('on') ? $(this).removeClass("on") : $(this).addClass("on");
									}); //登录开关的验证码部分
									$(dom).on("click", ".login-list .label-switch", function (e) {
												var ele = $(this).find(".checkbox");loginCheckbox.toggle(); //执行开关 dom 显示隐藏逻辑
												if (ele.hasClass("active")) {
															PluginManager.removeLoad();
												} else {
															PluginManager.showLoad();
												}if (ele.hasClass("active") && loginComponent.imgCode == "1") {
															$(".imgcode", dom).show();
												} else {
															$(".imgcode", dom).hide();
												}if (loginComponent.wrongImg == 1 && !ele.hasClass("active")) {
															$(".imgwrong", dom).show();
												} else {
															$(".imgwrong", dom).hide();
												}loginComponent.loginOpen();
									});var Common = { /**
                           * [getCheckedItem 获取数组中checked值为1的元素，如果没有，默认返回数组中第一个元素]
                           * @param  {[type]} list [目标数组]
                           * @return {[type]}      [数组元素]
                           */getCheckedItem: function (list) {
															if (list && list.length > 0) {
																		for (var i = 0; i < list.length; i++) {
																					if (list[i].checked && list[i].checked == 1) {
																								return list[i];
																					}
																		}return list[0];
															}
												}, /**
               * [setLocalData 根据传入键名key ，和键值value ,
               *  去修改localStorage key 中的value，
               *  或者直接覆盖的方式修改 该key 中的value]
               * @param {String} key    [键名字符串]
               * @param {String} value  [键值字符串]
               * @param {Char} symbol [分割字符]
               * @param {Number} limit  [限制长度]
               */setLocalData: function (key, value, symbol, limit) {
															var content = localStorage.getItem(key) || false;if (content && content.length > 0) {
																		var tempArr = content.split(symbol);if (tempArr.contains(value)) {
																					tempArr.splice(tempArr.indexOf(value), 1);
																		} else if (tempArr.length >= limit) {
																					tempArr.shift();
																		}tempArr.push(value);localStorage.setItem(key, tempArr.join(symbol));
															} else {
																		localStorage.setItem(key, value);
															}
												}, getLocalData: function (key, symbol, limit) {
															var tempSelectionArr = new Array();var localData = localStorage.getItem(key) || false;if (localData && localData.length > 0) {
																		var selectionValueArr = localData.split(symbol);if (limit >= 0 && selectionValueArr.length > limit) {
																					selectionValueArr = selectionValueArr.splice(selectionValueArr.length - limit);
																		}for (var i = 0; selectionValueArr.length > 0 && i < selectionValueArr.length; i++) {
																					if (selectionValueArr[i].length > 0) {
																								tempSelectionArr.push({ 'value': i + 1, 'text': selectionValueArr[i] });
																					}
																		}
															}return tempSelectionArr.reverse();
												}, /**
               * [露出条件：酒店48小时内订单数量 > 0] toast
               * @param  {[type]} opt [description]
               * @return {[type]}     [description]
               */recordTextLayer: function (text, className, t) {
															//48小时内有多少人预定的悬浮框
															var recordText = $("#record-text");if (!!text) {
																		recordText.html(text);
															}if (Common.timer) {
																		clearTimeout(Common.timer);recordText.removeClass("record-active no_icon").hide();
															}recordText.show();recordText.addClass(!!className ? "record-active no_icon" : "record-active");Common.timer = setTimeout(function () {
																		recordText.removeClass("record-active no_icon").hide();
															}, t || 5500);
												} };Common.recordTextLayer(); //登陆验证方法
									var loginComponent = { loginStatus: 0, imgCode: "0", verificationTime: 0, selectValue: 0, selectCode: 0, wrongImg: 0, wrongImgNub: 0, clause: 1, codeback: function () {
															$(".code .list-input .button", dom).removeAttr("disabled").removeClass("not-allow").html('重新获取');
												}, loginOpen: function () {
															if ($(".login-list .label-switch .checkbox").hasClass("active")) {
																		loginComponent.loginStatus = 0;
															} else {
																		loginComponent.loginStatus = 1;
															}
												}, init: function () {
															//点击验证码按钮
															$(dom).on("click", ".code .list-input .button", function () {
																		loginComponent.getDynamicLoginCode();
															}); //点击图形验证码图片
															$(dom).on("click", ".imgcode .list-input img", function () {
																		loginComponent.needGraphVerifyCode();
															}); //登陆按钮验证
															$(dom).on("click", ".login .login-sign", function () {
																		loginComponent.loginByDynamicCode();
															});$(dom).on("input keyup", ".tel .login-number", function () {
																		if (loginComponent.verificationTime == "0") {
																					loginComponent.validate();
																		}
															}); //点击刷新图形验证码
															$(dom).on("click", ".imgwrong .list-input img", function () {
																		$(this).attr('src', $(this).attr('src') + "1");
															}); // 服务条款切换
															$(dom).on("click", ".clause .checkbox", function () {
																		var _this = $(this);if (_this.hasClass("checked")) {
																					_this.removeClass("checked");$(".login-sign").addClass("login-sign-bg");loginComponent.clause = 0;
																		} else {
																					_this.addClass("checked");$(".login-sign").removeClass("login-sign-bg");loginComponent.clause = 1;
																		}
															});
												}, ajaxError: function (xhr, err, msg, callback) {
															// err type: "timeout", "error", "abort", "parsererror"
															dialog.alert('网络异常,请稍后重试.', callback);
												}, //短信验证方法
												getDynamicLoginCode: function () {
															var mobileNo = $(".tel .login-number", dom).val();if (mobileNo == "") {
																		dialog.alert("请输入正确的手机号码");
															} else if (loginComponent.wrongImg == 1 && $(".imgwrong .content input", dom).val() == "") {
																		dialog.alert("为了您的安全，请输入正确的图形验证码后，再获取短信验证码。");
															} else {
																		$(".code .list-input .button", dom).addClass("not-allow").html('发送中').attr('disabled', "true");slark.get("h5_createorder").startLoading();$.ajax({ timeout: 10000, url: $LOGIN + "json/getdynamiclogincodeext/", data: { "mobileNo": loginComponent.selectCode + mobileNo, "jsonp": "callback", "verifyCode": $(".imgwrong .list-input input", dom).val() }, type: "GET", dataType: "jsonp", jsonp: 'callback', success: function (data) {
																								slark.get("h5_createorder").stopLoading();loginComponent.codeback();loginComponent.wrongImg = 0;switch (data.errorCode) {//能否获取短信验证码
																											case "SEND_TOO_MUCH_PERTIME":
																														dialog.alert("短信发送过于频繁，请稍后重试");break;case "WRONG_VERIFYCODE":
																														loginComponent.wrongImg = 1;loginComponent.wrongImgNub = loginComponent.wrongImgNub + 1;if (loginComponent.wrongImgNub == 1) {
																																	dialog.alert("为了您的安全，请输入正确的图形验证码后，再获取短信验证码。");
																														} else {
																																	dialog.alert("抱歉，您输入的图形验证码有误，无法获取短信验证码，请重新输入。");
																														}$(".imgwrong", dom).show();$(".imgwrong .content img", dom).attr('src', data.verifyCodeUrl);break;case "NET_TIMEOUT":
																														dialog.alert("访问超时，请重试");break;case "API_ERROR":
																														dialog.alert("接口异常，请重试");break;case "SYS_ERROR":
																														dialog.alert("系统异常，请重试");break;case "WRONG_MOBILE_NUM":
																														dialog.alert("手机号无效，请重试");break;case "DYNAMIC_CODE_USE_TOO_MUCH":
																														dialog.alert("短信发送超过限制次数，请跳转登录页登录", function () {
																																	location.href = $DATA.loginBackUrl;return false;
																														});break;case "MOBILE_BIND_TOO_MUCH_CARDS":
																														dialog.alert("手机号绑定了多个艺龙卡号，请跳转登录页登录", function () {
																																	location.href = $DATA.loginBackUrl;return false;
																														});break;case "":
																														loginComponent.verificationCode();loginComponent.needGraphVerifyCode(); //dialog.alert("验证码已发送");
																														$("#record-text").html("验证码已发送");Common.recordTextLayer();break;default:
																														break;}if (loginComponent.wrongImg == 0) {
																											$(".imgwrong", dom).hide();$(".imgwrong .content input", dom).val("");loginComponent.wrongImgNub = 0;
																								} else {
																											$(".imgwrong", dom).show();
																								}
																					}, error: function (xhr, err, msg) {
																								loginComponent.ajaxError(xhr, err, msg, function () {
																											slark.get("h5_createorder").stopLoading();loginComponent.codeback();
																								});
																					} });
															}
												}, //倒计时控件
												verificationCode: function () {
															var i = 60;loginComponent.verificationTime = 60;var btn = $(".code .list-input .button", dom);btn.addClass("not-allow").html(i + "秒后重发").attr('disabled', "true");var _res = setInterval(function () {
																		i--;btn.html(i + "秒后重发");if (i <= 0) {
																					loginComponent.codeback();loginComponent.verificationTime = 0;clearInterval(_res);loginComponent.validate();
																		}
															}, 1000);
												}, //图形验证码
												needGraphVerifyCode: function () {
															slark.get("h5_createorder").startLoading();$.ajax({ timeout: 10000, type: "get", url: $LOGIN + "json/needgraphverifycodeext/", dataType: "jsonp", data: { "jsonp": "callback" }, success: function (data) {
																					slark.get("h5_createorder").stopLoading();if (data.errorCode == "NET_TIMEOUT") {
																								dialog.alert("访问超时，请重试");
																					} else if (data.errorCode == "API_ERROR") {
																								dialog.alert("图形验证码获取异常，请重试");
																					} else if (data.errorCode == "SYS_ERROR") {
																								dialog.alert("系统异常，请重试");
																					} else if (data.needVerifyCode == "0") {
																								loginComponent.imgCode = "0";$(".imgcode", dom).hide();$(".imgcode .list-input input", dom).attr("value", "");
																					} else if (data.needVerifyCode == "1" && data.verifyCodeUrl != "null") {
																								loginComponent.imgCode = "1";$(".imgcode", dom).show();$(".imgcode .content img", dom).attr('src', data.verifyCodeUrl);
																					}
																		}, error: function (xhr, err, msg) {
																					loginComponent.ajaxError(xhr, err, msg, function () {
																								slark.get("h5_createorder").stopLoading();loginComponent.codeback();
																					});
																		} });
												}, //登录验证
												loginByDynamicCode: function () {
															var mobileNo = $(".tel .login-number", dom).val();var verifyCode = $(".imgcode .list-input input", dom).attr("value");var dynamicCode = $(".code .list-input input", dom).attr("value");if (loginComponent.clause == 0) {} else if (mobileNo == "") {
																		dialog.alert("请输入正确的手机号码");
															} else if (dynamicCode == "") {
																		dialog.alert("请输入短信验证码");
															} else if (loginComponent.imgCode == "1" && verifyCode == "") {
																		dialog.alert("请输入图形验证码");
															} else {
																		slark.get("h5_createorder").startLoading();$.ajax({ timeout: 10000, type: "get", url: $LOGIN + "json/loginbydynamiccodeext/", dataType: "jsonp", data: { "mobileNo": loginComponent.selectCode + mobileNo, "verifyCode": verifyCode, "dynamicCode": dynamicCode, "jsonp": "callback" }, success: function (data) {
																								slark.get("h5_createorder").stopLoading();switch (data.errorCode) {case "NET_TIMEOUT":
																														dialog.alert("访问超时，请重试");break;case "API_ERROR":
																														dialog.alert("接口异常，请重试");break;case "SYS_ERROR":
																														dialog.alert("系统异常，请重试");break;case "WRONG_MOBILE_NUM":
																														dialog.alert("手机号无效，请重试");break;case "AUTO_LOGIN_FAILED":
																														dialog.alert("无法登录，请跳转登录页登录", function () {
																																	location.href = $DATA.loginBackUrl;return false;
																														});break;case "GRAPH_CODE_ERROR":
																														dialog.alert("请输入正确的图形验证码");break;case "DYNAMIC_CODE_INVALID":
																														dialog.alert("短信验证码失效，请重新获取");break;case "DYNAMIC_CODE_ERROR":
																														dialog.alert("短信验证码错误");break;case "REQUEST_VERIFICATION_ERR":
																														dialog.alert("验证请求失败");break;case "SSO_NONE_ERR":
																														dialog.alert("不支持的绑定类型");break;case "REGIST_ERROR":
																														dialog.alert("注册失败");break;case "SSO_ALREADY_BIND_ERR":
																														dialog.alert("已绑定过会员");break;case "WEIXIN_TICKET_INVALID":
																														dialog.alert("抱歉，优惠券正在被朋友使用");break;case "":
																														//console.log("登陆成功")
																														location.reload();break;default:
																														break;}if (data.errorCode != "") {
																											loginComponent.needGraphVerifyCode();
																								}
																					}, error: function (xhr, err, msg) {
																								loginComponent.ajaxError(xhr, err, msg, function () {
																											slark.get("h5_createorder").stopLoading();
																								});
																					} });
															}
												}, //手机号正则添加
												phoneVerify: function () {
															var selectregex = $DATA.loginCodeRegex;validate.addFilter($(".tel .login-number", dom), { rq: true, regex: selectregex, msg: "手机号格式不正确" });
												}, //实时正则判定
												validate: function () {
															loginComponent.selectCode = $("#login-code", dom).attr("data-value");var result = $('.tel .login-number', dom).validate({ before: function (prop) {
																					prop.val = loginComponent.selectCode + prop.val;return true;
																		}, report: function (result) {
																					if (result.msgs.length == 0 && result.corrects.length > 0) {
																								//console.log(result.corrects[0].val);
																								$(".code .list-input .button", dom).removeAttr("disabled").removeClass("not-allow");
																					} else {
																								$(".code .list-input .button", dom).addClass("not-allow").attr('disabled', "true");
																					};
																		} });
												} };if ($DATA.loginFlag == 0) {
												//如果没有登录，绑定图片验证码、登录按钮的一些事件
												loginComponent.init();
									} //cpt ... 这是订单填写页面二级页面的房型rp信息；
									var roomRpDetail = { TEMPLATE: '<div class="type-pop-box plugin-inited box-active order_typeilst"><div class="order_detail_info"><div class="info"><p class="name"></p><p class="brackfast"></p></div><div class="type_list"></div><div class="type_tip new_type_tip hide"></div></div><div class="order_pri_close bar"><span><i></i></span></div></div>', tpl: '<div class="type_tipb"><div class=" type_tip1"> <i>{{text1}}</i></div><div class=" type_tip2">{{text2}}</div></div>', // option: {
												//     showType: "transition", //类型：animation/transition, transition需搭配class选项
												//     transitionClass: "box-active", //showType为transition时搭配使用的class
												//     showTransition: $('html').hasClass('ios')
												// },
												freecancel: $DATA.freeCancel, //免费取消
												immediate: $DATA.confirmNow, //立即确认
												content: "", rpInfo: null, data: null, beforeShow: function () {
															PluginManager.showLoad();$('.mask-layer', dom).off('click').on('click', function () {
																		roomRpDetail.hide();$(".type-pop-box .price b", dom).remove();
															});var html = $('html');if (html.hasClass('android')) {
																		html.css('overflow', 'hidden');
															}
												}, init: function () {
															var tpl = '';if (['1', '3'].indexOf(core.getMvtResult('268')) > -1) {
																		//console.log($DATA.rpDetail.rpInfo.imgUrl);
																		$DATA.rpDetail.inHotelWeek = "日一二三四五六"[new Date(new Date().getFullYear() + '-' + $DATA.checkinMonthAndDateInChinese).getDay()];$DATA.rpDetail.outHotelWeek = "日一二三四五六"[new Date(new Date().getFullYear() + '-' + $DATA.checkoutMonthAndDateInChinese).getDay()];tpl = roomRpDetailForNewTpl($DATA.rpDetail);
															} else {
																		tpl = this.TEMPLATE;
															}this.page = $(tpl); //首先将添加的节点添加到当前页面中;this.page是方法中需要
															this.page.appendTo(core.getActiveLayer()); //通过点击事件让谈层弹出；rpdetaillayer
															$(dom).off("click", ".rpdetaillayer").on("click", ".rpdetaillayer", roomRpDetail._roomRpShow); // 通过点击事件让谈层消失
															$(dom).off("click", ".order_typeilst").on("click", ".order_typeilst", function () {
																		roomRpDetail.hide();
															});
												}, afterShow: function () {}, afterHide: function () {
															PluginManager.removeLoad();$('.mask-layer', dom).off('click');var html = $('html');if (html.hasClass('android')) {
																		html.css('overflow', '');
															}
												}, _roomRpShow: function () {
															//在这里改变弹层的数据====
															roomRpDetail.data = $DATA;var rpInfoIcon = roomRpDetail.data.additionList;var rpInfoList = roomRpDetail.data.tipsList;var rpArr = new Array();var roomTypeWrap = $(".order_detail_info .info", dom); //这是头部房型部分的信息
															roomTypeWrap.find(".name").html(roomRpDetail.data.productInfo.roomTypeName);roomTypeWrap.find(".brackfast").html(roomRpDetail.data.productName);var rpContentWrap = $(".order_detail_info .type_list .faclist span", dom);for (var i = 0; i < rpInfoIcon.length; i++) {
																		switch (rpInfoIcon[i].Key) {case "breakfast":
																								rpArr[0] = rpInfoIcon[i].Content;break;case "window":
																								rpArr[1] = rpInfoIcon[i].Content;break;case "floor":
																								rpArr[2] = rpInfoIcon[i].Content;break;case "area":
																								rpArr[3] = rpInfoIcon[i].Content;break;case "bed":
																								rpArr[4] = rpInfoIcon[i].Content;break;case "personnum":
																								rpArr[5] = rpInfoIcon[i].Content;break;case "network":
																								rpArr[6] = rpInfoIcon[i].Content;break;case "other":
																								// 屏蔽其他信息不展示
																								// rpArr[7] = rpInfoIcon[i];
																								break;default:
																								break;}
															};var str = '<p class="faclist clearfix">';for (var j = 0; j < rpArr.length; j++) {
																		if (!!rpArr[j] && rpArr[j] != "未知") {
																					str += '<span><i class="detail_fac_v' + j + '"></i>' + rpArr[j] + '</span>';
																		}
															}str += '</p>';if (rpInfoList.length != 0) {
																		for (var i = 0; i < rpInfoList.length; i++) {
																					if (!!rpInfoList[i].TipContent && rpInfoList[i].TipContent !== '未知' || !!rpInfoList[i].tipContent && rpInfoList[i].tipContent !== '未知') {
																								str += '<p class="tip clearfix hideTxt"><span class="dct_tit">' + (rpInfoList[i].TipName || rpInfoList[i].tipName) + '：</span><span class="dct_txt">' + (rpInfoList[i].TipContent || rpInfoList[i].tipContent) + '</span></p>';
																					}
																		}
															} // 屏蔽未知选项
															if (rpArr[6] && !!rpArr[6].Content && rpArr[6].Content != "未知") {
																		str += '<p class="tip clearfix hideTxt"><span class="dct_tit">' + rpArr[6].Desp + '：</span><span class="dct_txt">' + rpArr[6].Content + '</span></p>';
															} //新增三个标签 cpt... 2017.1.5
															//多个：jm  20170922
															//if (!!roomRpDetail.freecancel || !!roomRpDetail.immediate || $DATA.showGift) {
															if ($DATA.rpDetail && $DATA.rpDetail.promoteTextList) {
																		var tagtext = ""; // if (!!roomRpDetail.freecancel) {
																		//     tagtext += roomRpDetail.tpl.replace("{{text1}}", "免费取消").replace("{{text2}}", "订单提交后可随时变更或免费取消。")
																		// }
																		// if (!!roomRpDetail.immediate) {
																		//     tagtext += roomRpDetail.tpl.replace("{{text1}}", "立即确认").replace('{{text2}}', "订单提交后，酒店将第一时间确认您的订单。")
																		// }
																		// if (!!$DATA.showGift && !!$DATA.showGiftContent) {
																		//     tagtext += roomRpDetail.tpl.replace("{{text1}}", "礼").replace('{{text2}}', $DATA.showGiftContent)
																		// }
																		$DATA.rpDetail.promoteTextList.forEach(function (item) {
																					tagtext += roomRpDetail.tpl.replace("{{text1}}", item.typeLabel).replace("{{text2}}", item.typeDesc);
																		});$('.new_type_tip', dom).html(tagtext).removeClass('hide');
															} else {
																		$('.new_type_tip', dom).addClass('hide');
															}$(".type_list", dom).html(str);roomRpDetail.show();
												} };PluginManager.add("roomRpDetail", roomRpDetail);var loginCode = $(".login-code", dom).slideSelector({ title: '选择手机号地区', data: $DATA.areaCode, initValue: Common.getCheckedItem($DATA.areaCode), callback: function (result) {
															for (var i = 0; i < $DATA.areaCode.length; i++) {
																		if (result.value == $DATA.areaCode[i].value) {
																					$DATA.loginCodeRegex = $DATA.areaCode[i].regex;break;
																		}
															}var codevalue = loginComponent.selectValue;$(".login-code", dom).val("+" + (result.value == "" ? "86" : result.value));$(".login-code", dom).attr("data-value", result.value);loginComponent.selectValue = result.value;if ($DATA.loginFlag == 0) {
																		loginComponent.phoneVerify();if ($(".code .list-input .button", dom).html() == "重新获取" || $(".code .list-input .button", dom).html() == "获取验证码") {
																					loginComponent.validate();
																		}
															}
												} });PluginManager.add("logincode", loginCode);var customerMobilesData = Common.getLocalData("contactmobile", ',', 5);if (customerMobilesData.length > 0) {
												var telchoose = $(".tel-choose", dom).slideSelector({ title: '选择常用手机号', data: customerMobilesData, initValue: customerMobilesData[0], callback: function (result) {
																		if (result.text) {
																					$("#contactormobile", dom).val(result.text);
																		}
															} });PluginManager.add("telchoose", telchoose);
									} else {
												if ($DATA.loginFlag == 1) {
															$('#contactormobile', dom).val($DATA.userPhoneNo);
												}if (["0", "1", "3"].indexOf(core.getMvtResult('268')) > -1) {
															$(".tel-choose  .icon-choose", dom).addClass('no_addtel');
												} else {
															$(".tel-choose", dom).css('color', '#dcdcdc');$(".tel-choose .icon-tel-choose", dom).css('color', '#dcdcdc');
												}
									} // 回填booking邮箱
									var customerEmailData = Common.getLocalData("contactemail", ',', 5);if (customerEmailData.length > 0) {
												$("#contactoremail", dom).val(customerEmailData[0].text);
									} else {
												if ($DATA.loginFlag == 1 && $DATA.userEmail) {
															$("#contactoremail", dom).val($DATA.userEmail);
												}
									} //返现立减指南
									var addGuide = { TEMPLATE: { BODY: '<div class="add-address pagelugin page-on-right"><header class="bar bar-nav"><a class="icon icon-back pull-left"></a><h1 class="title">返现立减指南</h1></header><div class="page-content"><div class="info-box addguide"></div></div></div>' }, init: function () {
															this.page = $(this.TEMPLATE.BODY);var guidetext = ''; //为了页面整洁与单独维护；单独拿出；checkCouponSwitch 代表是否登录；修改于 2016.12.12 cpt...;
															if ($DATA.checkCouponSwitch == 1) {
																		guidetext = guidetextTpl({});
															} else {
																		guidetext = addGuideTpl({});
															}$(".addguide", this.page).html(guidetext);this._bindEvent();
												}, _bindEvent: function () {
															var page = this.page;$("#login-help", dom).click(function () {
																		addGuide.show();
															});$("header .icon-back", page).click(function () {
																		addGuide.hide();
															});
												} };PluginManager.add("addGuide", addGuide); //返现立减指南
									var addClause = { TEMPLATE: { BODY: '<div class="add-address page-plugin page-on-right"><header class="bar bar-nav"><a class="icon icon-back pull-left"></a><h1 class="title">艺龙旅行网服务条款</h1></header><div class="page-content"><div class="info-box addClause"></div></div></div>' }, init: function () {
															this.page = $(this.TEMPLATE.BODY); //为了维护与页面整洁，修改 于2016.12.12  cpt...
															var clausetext = addClauseTpl({});$(".addClause", this.page).html(clausetext);this._bindEvent();
												}, _bindEvent: function () {
															var page = this.page;$(".clause a", dom).click(function () {
																		addClause.show();
															});$("header .icon-back", page).click(function () {
																		addClause.hide();
															});
												} };PluginManager.add("addClause", addClause); //新客58折
									var newUser58 = { TEMPLATE: { BODY: '<div class="add-address page-plugin page-on-right"><header class="bar bar-nav"><a class="icon icon-back pull-left"></a><h1 class="title">艺龙旅行网服务条款</h1></header><div class="page-content"><div class="info-box addKickback"></div></div></div>' }, init: function () {
															this.page = $(this.TEMPLATE.BODY);var content = addKickbackTpl({});$('.addKickback', this.page).html(content);this._bindEvent();
												}, _bindEvent: function () {
															var page = this.page;$(".readNewUser58", dom).click(function () {
																		newUser58.show();
															});$("header .icon-back", page).click(function () {
																		newUser58.hide();
															});
												} };PluginManager.add("newUser58", newUser58); // 360定制兼容性
									// 输入法遮挡输入
									var custom360 = { init: function () {
															if ($DATA.customization && $DATA.customization.createorder && $DATA.customization.createorder['360sjwsqbh5_compatibility']) {
																		$('.contact-person').on('focus', 'input[name="customernames"]', this.dealInput);$('.contact-person').on('blur', 'input[name="customernames"]', this.cancelInput);$('input[name="connectormobile"]').on('focus', this.dealInput);$('input[name="connectormobile"]').on('blur', this.cancelInput);
															}
												}, dealInput: function () {
															var height = 120 + 20 * $('input[name="customernames"]').length;$('.android .page>.page-content').css('height', height + '%');$('html').css('background', '#f4f4f4');
												}, cancelInput: function () {
															$('.android .page>.page-content').css('height', '100%');$('html').css('background', '#FFFFFF');
												} };custom360.init(); /**
                                  * 微信朋友券？？？
                                  * 2017-08-16 通过后端配置，用于头部点击静默登录 （ txly 腾迅旅游渠道 ）
                                  */var customWxpyqh5 = { lockWXpyq: function () {
															setInterval(function () {
																		core.fetch(window.pageInfo.subPath + "api/weixin/ticketmark/", {}, { // "url": window.pageInfo.subPath + "api/weixin/ticketmark",
																					"type": "post", "timeout": 20000 // "success": function() {},
																					// "error": function() {}
																		}).then(function () {}, function () {});
															}, 120000);
												}, init: function () {
															if ($DATA.customization && $DATA.customization.createorder && $DATA.customization.createorder.forbidLoginSwitch) {
																		$('#loginCoupon').on('click', function () {
																					var isSilentLogin = $DATA.customization.createorder.silentLogin;if ($DATA.customization.createorder.unionLoginUrl) {
																								location.href = $DATA.customization.createorder.unionLoginUrl;
																					} else if (isSilentLogin && !isSilentLogin.loginStatus) {
																								window.location.href = isSilentLogin.refreshUrl;
																					}
																		}, false);
															}if ($DATA.customization && $DATA.customization.createorder && $DATA.customization.createorder.lockwxpyq) {
																		this.lockWXpyq();
															}
												} };customWxpyqh5.init();return { singleFrontCheck: singleFrontCheck, loginCheckbox: loginCheckbox, Common: Common, loginComponent: loginComponent, roomRpDetail: roomRpDetail, loginCode: loginCode, addGuide: addGuide, addClause: addClause, newUser58: newUser58, custom360: custom360, customWxpyqh5: customWxpyqh5 };
						} /**
        * old createorder
        * @param {any} dom 
        */var synPriceInfo;function setPageV1(dom) {
									var $DATA = $DATA_CREATEORDER; //异常退出,继续浏览
									var abortPlugin = null;var commonPackage = commonInit($DATA, dom);var singleFrontCheck = commonPackage.singleFrontCheck,
									    loginCheckbox = commonPackage,
									    loginCheckbox,
									    Common = commonPackage.Common,
									    loginComponent = commonPackage.loginComponent,
									    roomRpDetail = commonPackage.roomRpDetail,
									    loginCode = commonPackage.loginCode,
									    addGuide = commonPackage.addGuide,
									    addClause = commonPackage.addClause,
									    newUser58 = commonPackage.newUser58; //同步取消险和快递费的价格计算
									synPriceInfo = function () {
												if (!priceManager) {
															return;
												}var totalCount = creditAndQuick.isSelect ? priceManager.showPriceRmbWithDeposit : priceManager.showPriceRmb,
												    insuranceCount = priceManager.insurances && priceManager.insurances[0].insurancePriceC || 0,
												    expressCount = expressFee && expressFee.delieverType === 1 && expressFee.value || 0,
												    //expressFee.delieverType===1,等于1是金额，2是积分
												priceInfoStr = ''; // 2017-08-15 如果是到店担保 勾选了取消险，那么底部 #wborderprice 里不显示含保险的金额及含保险，而在 .addzhe.bar 里显示明细
												if ($('.cancels').length > 0 && $('.cancels .choosewx i').hasClass('on')) {
															if (!priceManager.isVouch) {
																		totalCount = add(totalCount, insuranceCount);priceInfoStr += '含保险';
															}
												} else if ($(".order_sz").length > 0 && $(".order_sz i").hasClass("on")) {
															//信用住
															if ($DATA.depositMoney > 0) {
																		// totalCount = add(totalCount, $DATA.depositMoney);
																		priceInfoStr += '含押金';
															}
												}if ($('.order-invoice').length) {
															//专票或纸质发票需要加快递费用  //selectInvoiceType.value 0纸质2专票  //$('#express-fee').attr('data-value') == 10
															//预约发票 不需要邮寄 ， 不需要快递费
															if (!$DATA_CREATEORDER.canUserPreInvoice && invoiceCheckbox.getVal() === true && expressFee && expressFee.delieverType === 1 && (selectInvoiceType.value == 0 || selectInvoiceType.value == 2)) {
																		totalCount = add(totalCount, expressCount);!!priceInfoStr ? priceInfoStr += '、邮费' : priceInfoStr += '含邮费';
															}
												} // if (window.pageInfo.chid === "wxqbh5" && core.getMvtResult('218') === '3') {
												//     // 核对信息按钮是否展示；
												//     $('.addzhe').addClass('mvt_218');
												//     (priceManager.isVouch || ($DATA_CREATEORDER.payType == 1 && $DATA_CREATEORDER.showPayType == 2)) ? $('.el_check_info').show(): $('.el_check_info').hide();
												//     // 金额展示；
												//     !!priceInfoStr ? $('.create-order-bar div.safe').html('(' + priceInfoStr + ')').show() : $('.create-order-bar div.safe').hide();
												// }
												priceInfoStr = !!priceInfoStr ? '<span class="safe">(' + priceInfoStr + ')</span>' : '';$('#wborderprice').html(totalCount + priceInfoStr); //给核对信息添加参数
												checkHotelInfo.hotelinfo = { hotelName: $DATA_CREATEORDER.hotelName, // 酒店名称
															RoomTypeName: $DATA_CREATEORDER.productInfo.roomTypeName, // 房型名称
															roomcount: $('#room-number').attr('data-value') || $('#room-number').attr('value') || 1, // 房间数
															indate: $DATA_CREATEORDER.checkinCalendarStr, // 入店日期
															outdate: $DATA_CREATEORDER.isCanBeExtended && !!easyDelayBack && !!easyDelayBack.checkHotelInfo_outdate ? easyDelayBack.checkHotelInfo_outdate : $DATA_CREATEORDER.checkoutCalendarStr, // 离店日期
															price: totalCount, // 金额
															isVouch: priceManager.isVouch, // 是否担保
															payType: $DATA_CREATEORDER.payType, showPayType: $DATA_CREATEORDER.showPayType, // 2预付、1担保、0现付
															showCouponText: priceManager.showCouponText, // 返现文案
															returnMoney: priceManager.data.couponText ? priceManager.data.couponText.match(/[-+]?[0-9]*\.?[0-9]+/g) ? priceManager.data.couponText.match(/[-+]?[0-9]*\.?[0-9]+/g)[0] : '' : '' //  返现金额；
												};
									}; //价格计算
									var priceCalculation = { hongbao: "false", //ture立减 turef 返现 false 不存在
												coupon: "false", //ture立减 turef 返现 false 不存在
												subCoupon: $DATA_CREATEORDER.priceInfo.subCoupon, //微信朋友券 true 立减 false不立减
												hongbaoSubtract: 0, couponSubtract: 0, usecoupon: "off", //是否使用返现  (on, 代表使用;   off,代表不使用)
												//价格变化方法
												init: function () {
															priceCalculation.formula();$("#wborderpricepad", dom).html(orderprice);$("#wborderprice", dom).html(orderprice);
												}, //与用户红包进行换算
												hongbaoPrice: function () {
															if (priceCalculation.subCoupon || priceCalculation.coupon != "false" || priceCalculation.hongbao != "false" || $DATA_CREATEORDER.customization && $DATA_CREATEORDER.customization.createorder && $DATA_CREATEORDER.customization.createorder.cashBack) {
																		// 高铁管家 floor(返前价 * 房间数 * 间夜数 * 0.08)
																		if ($DATA_CREATEORDER.customization && $DATA_CREATEORDER.customization.createorder && $DATA_CREATEORDER.customization.createorder.cashBack) {
																					if (($DATA_CREATEORDER.customization.createorder.cashBack.showType == 2 || $DATA_CREATEORDER.customization.createorder.cashBack.showType == 0) && $DATA.payType == 0) {
																								priceCalculation.couponSubtract = Math.floor($DATA.priceInfo.averagePriceRmb * $("#room-number", dom).attr("value") * $DATA.stayDays * $DATA_CREATEORDER.customization.createorder.cashBack.payRate);
																					} else if (($DATA_CREATEORDER.customization.createorder.cashBack.showType == 2 || $DATA_CREATEORDER.customization.createorder.cashBack.showType == 1) && $DATA.payType == 1) {
																								priceCalculation.couponSubtract = Math.floor($DATA.priceInfo.averagePriceRmb * $("#room-number", dom).attr("value") * $DATA.stayDays * $DATA_CREATEORDER.customization.createorder.cashBack.prepaidRate);
																					}
																		} else {
																					priceCalculation.couponSubtract = $DATA.priceInfo.couponVal * $("#room-number", dom).attr("value") * $DATA.stayDays;
																		}$(".showhongbaoval", dom).html("￥" + $DATA.priceInfo.hongBaoVal * $("#room-number", dom).attr("value") * $DATA.stayDays);priceCalculation.hongbaoSubtract = "0";$(".hongbaonub").remove();if ($(".order-login .hbselected .checkbox").hasClass("checked")) {
																					priceCalculation.hongbaoSubtract = $DATA.priceInfo.hongBaoVal * $("#room-number", dom).attr("value") * $DATA.stayDays;if (priceCalculation.hongbaoSubtract >= $DATA.priceInfo.availableHongBaoPrice) {
																								priceCalculation.hongbaoSubtract = $DATA.priceInfo.availableHongBaoPrice;$("#cbhongbao", dom).before('<b class="hongbaonub">您的可用红包为￥' + priceCalculation.hongbaoSubtract + '</b>');
																					}$(".showhongbaoval", dom).html("￥" + priceCalculation.hongbaoSubtract);
																		}$(".showcouponval", dom).html("￥" + priceCalculation.couponSubtract);$(".loginCoupon", dom).html("￥" + priceCalculation.couponSubtract);
															}
												}, //判断红包  ture立减 turef 返现 false 不存在
												hongbaoType: function () {
															if ($DATA.loginHongbaoTypeValue == "8") {
																		priceCalculation.hongbao = "true";
															} else if ($DATA.loginHongbaoTypeValue == "6") {
																		priceCalculation.hongbao = "truef";
															}
												}, //判断优惠 ture立减 turef 返现 false 不存在
												couponType: function () {
															if ($DATA.loginCouponTypeValue == "5") {
																		priceCalculation.coupon = "true";
															} else if ($DATA.loginCouponTypeValue == "4") {
																		priceCalculation.coupon = "truef";
															}
												}, //计算价格公式+港币兑换
												formula: function () {
															priceCalculation.hongbaoType();priceCalculation.couponType(); //换算总价公式
															if (priceCalculation.hongbao != "false" || priceCalculation.coupon != "false" || $DATA_CREATEORDER.customization && $DATA_CREATEORDER.customization.createorder && $DATA_CREATEORDER.customization.createorder.cashBack || priceCalculation.subCoupon) {
																		priceCalculation.hongbaoPrice();
															}orderprice = $DATA.priceInfo.averagePriceSubTotal * $("#room-number", dom).attr("value") * $DATA.stayDays - parseInt(priceCalculation.hongbaoSubtract);if (priceCalculation.hongbao == "truef") {
																		orderprice = orderprice + parseInt(priceCalculation.hongbaoSubtract);
															}orderprice = core.smartFloat(orderprice);createOrder.orderPrice = orderprice;if ($DATA.showForeignCurrencyTip == "1") {
																		if ($DATA.priceInfo.exchangeRate == "0") {
																					$DATA.priceInfo.exchangeRate = "1";
																		}orderprice = orderprice + "<b>" + $DATA.priceInfo.showCurrency + core.smartFloat(orderprice / $DATA.priceInfo.exchangeRate) + "</b>";
															};priceCalculation.preferentialText();
												}, //小字文字
												preferentialText: function () {
															//PriceCalculation.hongbaoSubtract与用户红包换算过的
															var hongbaoText = "";var couponText = "";var bCustomCoupontext = false;if (priceCalculation.hongbao == "true" && priceCalculation.hongbaoSubtract != "0") {
																		hongbaoText = "红包减￥" + priceCalculation.hongbaoSubtract;
															} else if (priceCalculation.hongbao == "truef" && priceCalculation.hongbaoSubtract != "0") {
																		hongbaoText = "红包返￥" + priceCalculation.hongbaoSubtract;
															}if (priceCalculation.coupon == "true") {
																		couponText = "已立减￥" + priceCalculation.couponSubtract;
															} else if (priceCalculation.coupon == "truef") {
																		couponText = "返￥" + priceCalculation.couponSubtract;
															} else if (priceCalculation.subCoupon) {
																		couponText = "已立减￥" + priceCalculation.couponSubtract;
															}if ($DATA_CREATEORDER.customization && $DATA_CREATEORDER.customization.createorder && $DATA_CREATEORDER.customization.createorder.cashBack) {
																		if (priceCalculation.couponSubtract > 0) {
																					$('.order-login.order-hongbao.gtgj', dom).show(); //渠道返现金额提示类名修改
																					$('.cashback-hint', dom).show();couponText = $DATA_CREATEORDER.customization.createorder.cashBack.returnprice + "￥" + priceCalculation.couponSubtract;bCustomCoupontext = true;
																		} else {
																					$('.order-login.order-hongbao.gtgj', dom).hide();$('.cashback-hint', dom).hide();couponText = "";bCustomCoupontext = true;
																		}
															}var text = '<div class="coupontext">' + couponText + '</div><div class="hongbaotext">' + hongbaoText + '</div>';if ($DATA.loginFlag == 1 || bCustomCoupontext || priceCalculation.subCoupon) {
																		$(".returnprice", dom).html(text);
															}if ($("#cbfanxian", dom).hasClass("checked") || priceCalculation.coupon == "true" || $DATA.checkCouponSwitch == 0 || priceCalculation.subCoupon) {
																		$(".coupontext", dom).show();
															}
												} };if ($DATA.checkCouponSwitch == 0) {
												$("#cbfanxian").remove();$(".returnprice .coupontext").show();priceCalculation.usecoupon = "on";
									} //价格明细弹层
									var priceDetail = { TEMPLATE: '<div class="type-pop-box plugin-inited box-active order_prilst"><div class="order_pr_info"><div class="odr_pri_tit">费用明细</div><div class="odr_pri_item clearfix"><div class="pri_item_tit">房费</div><div class="pri_item_txt room_total_txt"></div></div><div class="odr_pri_con"><ul></ul></div><div class="odr_pri_item clearfix hide insurancesDetail"> <div class="pri_item_tit ">保险</div> <div class="pri_item_txt"></div> </div> <div class="odr_pri_discount hide insurancesDetail"> <ul> <li> <div class="clearfix"> <div class="odr_date">取消险</div> <div class="odr_money"></div> </div> </li> </ul> </div> <div class="odr_pri_item clearfix discount_area"><div class="pri_item_tit">享受优惠</div><div class="pri_item_txt discount_total_txt"></div></div><div class="odr_pri_discount discount_area"><ul></ul></div><div class="ord_pri_label clearfix"></div><div class="ord_guarantee_tip clearfix"></div></div><div class="order_pri_close bar"><span><i></i></span></div></div>', option: { showType: "transition", //类型：animation/transition, transition需搭配class选项
															transitionClass: "box-active", //showType为transition时搭配使用的class
															showTransition: $('html').hasClass('ios') }, beforeShow: function () {
															var html = $('html');if (html.hasClass('android')) {
																		html.css('overflow', 'hidden');
															}
												}, init: function () {
															var _this = this;this.page = $(this.TEMPLATE);this.page.appendTo(core.getActiveLayer());this._bindEvent();
												}, afterHide: function () {
															var html = $('html');if (html.hasClass('android')) {
																		html.css('overflow', '');
															}
												}, _bindEvent: function () {
															//价格明细click事件
															$('.type_detail', dom).off('click').on('click', this._renderPriceDetail);$('.order_prilst', dom).off('click').on('click', function () {
																		priceDetail.hide();
															});
												}, _renderPriceDetail: function () {
															var itemPrice = $DATA_CREATEORDER.priceInfo.averagePriceRmb;var days = $DATA_CREATEORDER.stayDays;var payType = $DATA_CREATEORDER.payType;var promotionType = $DATA_CREATEORDER.priceInfo.promotionTypeValue;var hongbaoPromotionType = $DATA_CREATEORDER.priceInfo.hongbaoPromotionTypeValue;var checkInOutDates = $DATA_CREATEORDER.checkInToOutDateStr || [];var breakfastContent = $DATA_CREATEORDER.breakfastContent;var cancelableDesc = $DATA_CREATEORDER.cancelDescriptionEntity.cancelableDesc;var vouchCancelableDesc = $DATA_CREATEORDER.cancelDescriptionEntity.vouchCancelableDesc;var vouchMoneyType = $DATA_CREATEORDER.vouchMoneyType;var roomCount = +$('#room-number', dom).attr('value');var isNeedAssure = roomNumber.assureFlag || roomReservation.assureFlag; //房费
															var roomTotalCount = $('#wborderprice', dom).length && +$('#wborderprice', dom)[0].childNodes[0].nodeValue || 0;if (!!roomTotalCount && roomTotalCount != 0 && !!priceManager.defaultInsuranceBack && !!priceManager.insurances && !!priceManager.insurances.length > 0) {
																		var roomTotalCountTop = roomTotalCount - priceManager.insurances[0].insurancePriceC;
															}$('.room_total_txt', dom).text('￥' + (!!roomTotalCountTop ? roomTotalCountTop : roomTotalCount));var priceItemStr = '';$.each(checkInOutDates, function (index, val) {
																		priceItemStr += '<li><div class="clearfix"><div class="odr_date">' + val + '</div><div class="odr_breakfast">' + breakfastContent + '</div><div class="odr_money">￥<span class="price">' + itemPrice + '</span> x <span class="num">' + roomCount + '</span></div></div></li>';
															});$('.odr_pri_con ul', dom).html(priceItemStr); //享受优惠
															var couponStr = $('.showcouponval', dom).length ? $('.showcouponval', dom)[0].childNodes[0].nodeValue : '';var hongbaoStr = $('.showhongbaoval', dom).length ? $('.showhongbaoval', dom)[0].childNodes[0].nodeValue : '';hongbaoStr = $('.showhongbaoval', dom).hasClass('no-show') ? '' : hongbaoStr;var couponVal = !!couponStr ? +couponStr.substring(1) : 0;var hongbaoVal = !!hongbaoStr ? +hongbaoStr.substring(1) : 0;var totalDiscountVal = couponVal + hongbaoVal; //预付还是到店付
															var couponHtml = '';var hongbaoHtml = '';if (!!couponStr || !!hongbaoStr) {
																		if (promotionType === 9 || hongbaoPromotionType === 11) {
																					if (!!couponStr) {
																								couponHtml = '<li><div class="clearfix"><div class="odr_date">已立减</div><div class="odr_money">￥<span class="price">' + couponVal + '</span></div></div></li>';
																					}if (!!hongbaoStr) {
																								hongbaoHtml = '<li><div class="clearfix"><div class="odr_date">红包（已立减）</div><div class="odr_money">￥<span class="price">' + hongbaoVal + '</span></div></div></li>';
																					}
																		}if (promotionType === 1 || hongbaoPromotionType === 10) {
																					if (!!couponStr) {
																								couponHtml = '<li><div class="clearfix"><div class="odr_date">可返现</div><div class="odr_money">￥<span class="price">' + couponVal + '</span></div></div></li>';
																					}if (!!hongbaoStr) {
																								hongbaoHtml = '<li><div class="clearfix"><div class="odr_date">红包（可返现）</div><div class="odr_money">￥<span class="price">' + hongbaoVal + '</span></div></div></li>';
																					}
																		}$('.odr_pri_discount.discount_area ul', dom).html(couponHtml + hongbaoHtml);$('.discount_total_txt', dom).text('￥' + totalDiscountVal);$('.discount_area', dom).show();
															} else {
																		$('.discount_area', dom).hide();
															} //结算部分
															var subTotalStr = '';if (!!payType) {
																		if (totalDiscountVal > 0) {
																					if (promotionType === 1 || hongbaoPromotionType === 10) {
																								subTotalStr += '<div class="pri_label_roomMoney">在线支付：<span>￥' + roomTotalCount + '</span></div>';subTotalStr += '<div class="pri_label_returnMoney">离店可返：<span>￥' + totalDiscountVal + '</span></div>';
																					} else {
																								subTotalStr += '<div class="pri_label_roomMoney">在线支付：<span>￥' + roomTotalCount + '</span></div>';subTotalStr += '<div class="pri_label_returnMoney">本单已减：<span>￥' + totalDiscountVal + '</span></div>';
																					}
																		} else {
																					subTotalStr += '<div class="pri_label_roomMoney">在线支付：<span>￥' + roomTotalCount + '</span></div>';
																		}
															} else {
																		subTotalStr += '<div class="pri_label_roomMoney">到店支付：<span>￥' + roomTotalCount + '</span></div>';if (totalDiscountVal > 0) {
																					subTotalStr += '<div class="pri_label_returnMoney">离店可返：<span>￥' + totalDiscountVal + '</span></div>';
																		}if (isNeedAssure) {
																					if (vouchMoneyType === 1) {
																								subTotalStr += '<div class="pri_label_guarantee">担保金额：<span>￥' + itemPrice + '</span></div>';
																					} else {
																								subTotalStr += '<div class="pri_label_guarantee">担保金额：<span>￥' + roomTotalCount + '</span></div>';
																					}
																		}
															}$('.ord_pri_label', dom).html(subTotalStr); //取变规则
															var cancelableStr = '';if (isNeedAssure) {
																		cancelableStr += '<p>' + vouchCancelableDesc + '</p>';
															} else {
																		cancelableStr += '<p>' + cancelableDesc + '</p>';
															}if (!!vouchCancelableDesc || !!cancelableDesc) {
																		$('.ord_guarantee_tip', dom).html(cancelableStr).show();
															} else {
																		$('.ord_guarantee_tip', dom).hide();
															}if (!!priceManager.defaultInsuranceBack && !!priceManager.insurances && priceManager.insurances.length > 0 && !!priceManager.insurances[0].insurancePriceC) {
																		//价格明细中取消险；
																		$('.insurancesDetail').removeClass('hide').find('.pri_item_txt,.odr_money').html("￥" + priceManager.insurances[0].insurancePriceC);
															} else {
																		$('.insurancesDetail').addClass('hide');
															}priceDetail.show();
												} };PluginManager.add("priceDetail", priceDetail);roomNumber = $("#room-number", dom).slideSelector({ title: '选择房间数量', data: function () {
															$DATA.roomNumberSelections = JSON.parse($DATA.roomNumberSelections);for (var i = 0; i < $DATA.roomNumberSelections.length; i++) {
																		$DATA.roomNumberSelections[i].text += core.getLanguage('roomUnit', $LANG_CREATEORDER);if ($DATA.roomNumberSelections[i].assure == 1) {
																					$DATA.roomNumberSelections[i].text += " (" + core.getLanguage('assuretext', $LANG_CREATEORDER) + ")";
																		}
															}return $DATA.roomNumberSelections;
												}(), initValue: Common.getCheckedItem($DATA.roomNumberSelections), theFirstTime: "0", assureFlag: 0, isExtenedStay: false, isFirst: true, //担保房型时同步时不显示取消文案，理由是后端已经处理过文案。
												callback: function (result) {
															$("#room-number", dom).val(result.text);$("#room-number", dom).attr("value", result.value);$("#room-number", dom).css("width", 15 * $("#room-number", dom).val().length + "px"); //发票备注显示房间数
															$(".voucher_bei .voucher-room-count").text(result.text); //增加删除房间数量
															var room_length = $(".contact-person li", dom).length;room_number = result.value;var room_judgment = room_number - room_length;if (room_judgment == 0) {
																		room_judgment = room_number;
															}if (room_judgment > 0) {
																		for (var i = room_length + 1; i <= room_number; i++) {
																					var html = '<li><label for="cusname' + i + '"></label><div class="label">' + core.getLanguage('checkinperson', $LANG_CREATEORDER, [i]) + '</div>';if ($DATA_CREATEORDER.needEnName == '0') {
																								html += '<div class="content list-input">';html += '<input type="text" maxlength="20" class="createorder" name="customernames" placeholder=' + core.getLanguage('checkinprompt', $LANG_CREATEORDER) + ' id="cusname' + i + '"></div></li>';
																					} else {
																								html += '<div class="content list-input  eng_name">  <div > <input type="text" class="cert-type" id="" placeholder="lastname"> </div> <span></span> <div > <input type="text" class="cert-type" id="" placeholder="firstname"> </div>  </div>';
																					}$(".contact-person ul", dom).append(html);
																		}
															} else if (room_judgment < 0) {
																		var room_del = Math.abs(room_judgment);for (var i = room_length; i >= room_number; i--) {
																					$(".contact-person li", dom).eq(i).remove();
																		}
															}if ($DATA.confirmType == 1 && $(".room-big").length > 0) {
																		if (room_number > 5) {
																					$(".room-big").css("display", "block");
																		} else {
																					$(".room-big").css("display", "none");
																		}
															}if (result.assure == 1) {
																		roomNumber.assureFlag = 1;$(".guarantee-payment").show();
															} else {
																		roomNumber.assureFlag = 0;if (roomReservation && roomReservation.assureFlag == 0) {
																					$(".guarantee-payment").hide();
																		}
															} //取消变更规则
															if ($DATA.showPayType == 1 && !roomNumber.config.isFirst) {
																		//支付类型异步时
																		if (result.assure == 1 || roomReservation.assureFlag == 1) {
																					//是否需要担保
																					$(".cancle-desc", dom).hide();$(".cancle-desc2", dom).show(); //免费取消存在
																					// if (getMvtResult('146').val == '0') {
																					$('.freeCancel', dom).hide();roomRpDetail.freecancel = false; //房型详情中是否存在免费取消文案；
																					// }
																		} else {
																					//取消变更规则
																					$(".cancle-desc", dom).show();$(".cancle-desc2", dom).hide(); //免费取消不存在
																					// if (getMvtResult('146').val == '0') {
																					$('.freeCancel', dom).show();roomRpDetail.freecancel = true; //房型详情中是否存在免费取消文案；
																					// }
																		}
															} // if (roomNumber.theFirstTime == "1") {
															//     priceManager.fetchPriceInfo();
															//     // priceCalculation.init();
															//     // 切换房量需重新获取红包列表
															//     redPacketList.needReload = true;
															// }
															// roomNumber.theFirstTime = "1";
															//异步获取数据
															setTimeout(function () {
																		redPacketList.needReload = true;priceManager.fetchPriceInfo(); //异常退出,继续浏览 -设置房间数量, 再次进入如果房间数>客订房间数,展示异常页面
																		if (abortPlugin) {
																					abortPlugin.setData("ROOMCOUNT", result.text.charAt(0));
																		}
															}, 0); // 立即确认
															if ($DATA_CREATEORDER.confirmNow == 'true') {
																		var min = 4;if ($DATA_CREATEORDER.onTimeConfirmAmount != -1) {
																					min = Math.min($DATA_CREATEORDER.onTimeConfirmAmount, 4);
																		}if (room_number > min) {
																					$('.immediatelyConfirm-deficiency').show();$('.immediatelyConfirm-enough').hide(); // if (getMvtResult('146').val == '0'){
																					$('.immediate', dom).hide(); //列表页二期优化。。。
																					if (!$DATA_CREATEORDER.mostFavorable) {
																								$('#odr_info_tip').addClass('hide');
																					}roomRpDetail.immediate = false; //房型详情中是否存在立即确认
																					// }
																		} else {
																					$('.immediatelyConfirm-deficiency').hide();$('.immediatelyConfirm-enough').show(); // if (getMvtResult('146').val == '0'){
																					$('.immediate', dom).show();if (!$DATA_CREATEORDER.mostFavorable) {
																								$('#odr_info_tip').removeClass('hide');
																					}roomRpDetail.immediate = true; //房型详情中是否存在立即确认；
																					// }
																		}
															}roomNumber.config.isFirst = false; //input add clear btn 不友好，本次迭代后 重写 clearInput plugin
															clearInputList = '.contact-person input[type="text"], #contactormobile, #contactoremail';clearInput.init(dom, clearInputList, { top: 4 }); //信用住闪住
															if (result.checked != 1 && creditAndQuick.isSelect) {
																		creditAndQuick.cancel();dialog.alert('【闪住】仅支持预订1间（或预订多天每天1间），更改房间数则无法享受【闪住】');
															}
												} });PluginManager.add("roomnumber", roomNumber);var roomReservation = $("#room-reservation", dom).slideSelector({ describe: "14点前到店可能需要等待", title: '房间保留至', isFirst: true, //担保文案展示问题，页面同步渲染时前端不需要做处理
												data: function () {
															$DATA.roomKeepDate = JSON.parse($DATA.roomKeepDate);for (var i = 0, time; i < $DATA.roomKeepDate.length; i++) {
																		time = $DATA.roomKeepDate[i];if (time.day > 0) {
																					time.text = time.day + "日 " + time.text + " 之前";
																		}if (time.needVouch == 1) {
																					time.text += " " + core.getLanguage('assuretext', $LANG_CREATEORDER);
																		}
															}return $DATA.roomKeepDate;
												}(), initValue: Common.getCheckedItem($DATA.roomKeepDate), assureFlag: 0, callback: function (result) {
															if ($("#room-reservation", dom) && $("#room-reservation", dom).length > 0) {
																		$("#room-reservation", dom).val(result.text);$("#room-reservation", dom).css("width", 12 * $("#room-reservation", dom).val().length + "px");
															}$("#hidarriveTime", dom).val(result.value.split(',')[0]);if (result.needVouch == 1) {
																		roomReservation.assureFlag = 1;$(".guarantee-payment").show();
															} else {
																		roomReservation.assureFlag = 0;if (roomNumber.assureFlag == 0) {
																					$(".guarantee-payment").hide();
																		}
															} //取消变更规则
															if ($DATA.showPayType == 1 && !roomReservation.config.isFirst) {
																		if (result.needVouch == 1 || roomNumber.assureFlag == 1) {
																					//保留至时间触发担保；房量触发担保
																					$(".cancle-desc", dom).hide();$(".cancle-desc2", dom).show(); // if (getMvtResult('146').val == '0') {
																					$('.freeCancel', dom).hide();roomRpDetail.freecancel = false; //房型详情中是否存在免费取消文案；
																					// }
																		} else {
																					$(".cancle-desc", dom).show();$(".cancle-desc2", dom).hide(); // if (getMvtResult('146').val == '0') {
																					$('.freeCancel', dom).show();roomRpDetail.freecancel = true; //房型详情中是否存在免费取消文案；
																					// }
																		}
															}roomReservation.config.isFirst = false;
												}, confirm: function () {
															priceManager.fetchPriceInfo();
												} });PluginManager.add("roomreservation", roomReservation);var areaCode = $(".area-code", dom).slideSelector({ title: '选择手机号地区', data: $DATA.areaCode, initValue: Common.getCheckedItem($DATA.areaCode), callback: function (result) {
															for (var i = 0; i < $DATA.areaCode.length; i++) {
																		if (result.value == $DATA.areaCode[i].value) {
																					$DATA.contactCodeRegex = $DATA.areaCode[i].regex;break;
																		}
															}$(".area-code", dom).val("+" + (result.value == "" ? "86" : result.value));$(".area-code", dom).attr("data-value", result.value);
												} });PluginManager.add("areacode", areaCode); //cpt ... 特殊要求star---- specialRequirement  大双床的时候展示
									if ($DATA_CREATEORDER.specialRequirement.length > 0 && $DATA_CREATEORDER.additionList.length > 0 && !!$DATA_CREATEORDER.additionList) {
												//非转让房
												var __isBigOrDoubleBed__ = false;$DATA_CREATEORDER.additionList.forEach(function (item, index) {
															if (item.Content === "大/双床" && !__isBigOrDoubleBed__) {
																		__isBigOrDoubleBed__ = true;
															}
												});if (__isBigOrDoubleBed__) {
															var specialRequirement = $('.specialrequirement', dom).slideSelector({ describe: "需求将提交给酒店，但无法保证100%满足", title: '特殊要求', data: $DATA_CREATEORDER.specialRequirement, initValue: Common.getCheckedItem($DATA_CREATEORDER.specialRequirement), isFirst: false, cspot: '', params: '', callback: function (result) {
																					$('#specialrequirement', dom).val(result.text);if (!!specialRequirement.isFirst) {
																								switch (result.text) {case "无需求":
																														specialRequirement.cspot = 'requirenull';break;case "尽量安排大床":
																														specialRequirement.cspot = 'requirebed';break;case "尽量安排双床":
																														specialRequirement.cspot = 'requiretwin';break;case "一定安排大床":
																														specialRequirement.cspot = 'requiremustbed';break;case "一定安排双床":
																														specialRequirement.cspot = 'requiremusttwin';break;}tjMVT.setData({ cspot: specialRequirement.cspot, et: 'click' });
																					}specialRequirement.isFirst = true;specialRequirement.params = result.value;
																		} });PluginManager.add('specialRequirement', specialRequirement);
												}
									} //cpt ... 特殊要求end ---- 
									// 旧版港澳台 用户区分 TODO...  needEnName
									var addPeople = { TEMPLATE: { BODY: '<div class="select-people page-plugin page-on-right"><header class="bar bar-nav"><a class="icon icon-back pull-left"></a><h1 class="title">' + core.getLanguage('chooseperson.title', $LANG_CREATEORDER) + '</h1><a class="submit pull-right">' + core.getLanguage('chooseperson.confirmbtn', $LANG_CREATEORDER) + '</a></header><div class="page-content"><div class="person-box"><p class="tip">' + core.getLanguage('chooseperson.topwords', $LANG_CREATEORDER) + '</p><div class="add"><b>+</b> ' + core.getLanguage('chooseperson.addoriginal', $LANG_CREATEORDER) + '<span><i class="cert"></i></span></div><div class="to-input">' + ($DATA_CREATEORDER.needEnName ? '<div class="en_name"><input id="input_last_name" name="addcusname" type="text" placeholder="姓 Last name" maxlength="30" /></div><em>/</em><div class="en_name"><input id="input_first_name" name="addcusname" type="text" placeholder="名 First name" maxlength="30" /></div>' : '<input id="inputaddcusname" name="addcusname" type="text" placeholder=' + core.getLanguage('chooseperson.inputname', $LANG_CREATEORDER) + ' maxlength="30">') + '<div class="confirm">' + core.getLanguage('chooseperson.addbtn', $LANG_CREATEORDER) + '</div></div><div class="error">' + core.getLanguage('chooseperson.bottomwords', $LANG_CREATEORDER) + '</div></div></div><ul class="per-list"></ul></div>', ITEM: '<li data-name="${data-name}"><div class="checkbox"></div><span>${name}<span></li>' }, personData: [], selectedList: [], selectedNum: 0, needEnName: $DATA_CREATEORDER.needEnName == 1 ? true : false, roomNum: 0, init: function () {
															this.page = $(this.TEMPLATE.BODY);this.page.appendTo(core.getActiveLayer());this._getPersonData();if ($DATA.needEnName == '1') {
																		validate.addFilter($("#input_first_name,#input_last_name", this.page), { rq: true, msg: "请输入正确的入住人姓名", regex: "^[a-zA-Z]{1,50}$" });
															} else {
																		validate.addFilter($("#inputaddcusname", this.page), { rq: true, regex: $DATA.customerCNRule, //msg: "请您输入英文名称或中文拼音，并务必保证和有效证件上姓名一致，以保证正常入住。"
																					msg: "请输入正确的入住人姓名" });
															}var personListContainer = $('.per-list', this.page);for (var i = 0; i < this.personData.length; i++) {
																		if ($DATA.needEnName) {
																					if (this.personData[i].indexOf('/') >= 1 && !!this.personData[i]) personListContainer.append(this.TEMPLATE.ITEM.replace('${name}', this.personData[i]).replace('${data-name}', this.personData[i]));
																		} else {
																					if (!!this.personData[i]) personListContainer.append(this.TEMPLATE.ITEM.replace('${name}', this.personData[i]));
																		}
															}var cusname = Common.getLocalData(addPeople.needEnName ? "newEnPersonList" : "newPersonList", ",", 1);var userName = $DATA.loginFlag == 0 ? "" : $DATA_CREATEORDER.userName.indexOf('/') > 0 ? "" : $DATA_CREATEORDER.userName;if ($DATA_CREATEORDER.needEnName == '1') {
																		$('#lastname1').val(!!cusname && cusname.length > 0 && cusname[0].text.indexOf('/') > 0 ? cusname[0].text.split('/')[0] : "");$('#firstname1').val(!!cusname && cusname.length > 0 && cusname[0].text.indexOf('/') > 0 ? cusname[0].text.split('/')[1] : "");
															} else {
																		$("#cusname1").val(!!cusname && cusname.length > 0 && cusname[0].text.indexOf('/') < 0 ? cusname[0].text : userName);
															} //手机QQ定制
															if ($DATA_CREATEORDER.customization && $DATA_CREATEORDER.customization.checkinperson) {
																		if ($DATA_CREATEORDER.customization.checkinperson.btnSetBottom) {
																					this.page.addClass('qq_style');$('.per-list', this.page).after('<div class="qqbutton_style bar submit">确定</div>');
																		}
															} //手机QQ会员渠道和腾讯旅游渠道定制 (去掉选择人头部 确定按钮下移)
															if ($DATA_CREATEORDER.customization && $DATA_CREATEORDER.customization.createorder) {
																		if ($DATA_CREATEORDER.customization.createorder.noHeader == true) {
																					this.page.addClass('qq_style');$('.per-list', this.page).after('<div class="qqbutton_style bar submit">确定</div>');
																		}
															}this._bindEvent();
												}, beforeShow: function (num) {
															this.roomNum = num;this.selectedNum = 0;this.selectedList = [];$(".per-list li .checked", this.page).removeClass('checked');$(".per-list li .num", dom).remove();
												}, afterShow: function () {
															$('.per-list').scrollTop(1);
												}, _getPersonData: function () {
															if ($DATA.loginFlag) {
																		this.personData = JSON.parse($DATA.customerNames || "[]");
															} else {
																		var dataString = localStorage.getItem(addPeople.needEnName ? "newEnPersonList" : 'newPersonList');if (!!dataString) {
																					var tmp = dataString.split(',');this.personData = tmp.length > 0 ? tmp.reverse() : [];
																		}
															}
												}, _addPerson: function (name) {
															if ($DATA.loginFlag) {
																		this._addusualcustomer(name);
															} else {
																		this.personData.push(addPeople.needEnName ? name.lastname + "/" + name.firstname : name.name);Common.setLocalData(addPeople.needEnName ? 'newEnPersonList' : "newPersonList", addPeople.needEnName ? name.lastname + "/" + name.firstname : name.name, ',', 10);var liArr = $('.per-list', this.page); // if (liArr && liArr.length > 0) {
																		//     liArr.first().before(addPeople.TEMPLATE.ITEM.replace('${name}', name));
																		// } else {
																		//     $('.per-list', this.page).append(addPeople.TEMPLATE.ITEM.replace('${name}', name))
																		// }
																		if (addPeople.needEnName) {
																					liArr.prepend(addPeople.TEMPLATE.ITEM.replace("${name}", name.lastname + '/' + name.firstname).replace("${data-name}", name.lastname + '/' + name.firstname));
																		} else {
																					liArr.prepend(addPeople.TEMPLATE.ITEM.replace("${name}", name.name));
																		}
															}
												}, _addusualcustomer: function (name) {
															core.fetch(window.pageInfo.subPath + "api/addcustomer/", name, { timeout: 10000, type: "POST", //url: window.pageInfo.subPath + "api/addcustomer/",
																		dataType: "json" // data: {
																		//     "name": name
																		// },
															}).then( //success: 
															function (result) {
																		switch (result.ErrorCode) {case "NET_TIMEOUT":
																								dialog.alert(core.getLanguage('apitimeout', $LANG_CREATEORDER));break;case "API_ERROR":
																								dialog.alert(core.getLanguage('apierror', $LANG_CREATEORDER));break;case "SYS_ERROR":
																								dialog.alert(core.getLanguage('apierror', $LANG_CREATEORDER));break;case "SAVE_FAILED":
																								dialog.alert(core.getLanguage('addcustomer.savefailed', $LANG_CREATEORDER));break;default:
																								var liArr = $('.per-list', this.page);if (addPeople.needEnName) {
																											liArr.prepend(addPeople.TEMPLATE.ITEM.replace("${name}", name.lastname + '/' + name.firstname).replace("${data-name}", name.lastname + '/' + name.firstname));
																								} else {
																											liArr.prepend(addPeople.TEMPLATE.ITEM.replace("${name}", name.name));
																								}break;}
															}, function () {});
												}, _hasDuplicatedName: function (name) {
															for (var i = 0; i < this.personData.length; i++) {
																		if (name === this.personData[i]) {
																					return true;
																		}
															}return false;
												}, afterHide: function () {
															$('.add', this.page).show();$('.to-input', this.page).hide().find('input').val('').blur();
												}, _validate: function () {
															var result;if ($DATA_CREATEORDER.needEnName == "1") {
																		result = $('#input_last_name', this.page).validate({ report: function (result) {
																								result.msgs.length > 0 ? dialog.alert(result.msgs[0]) : null;
																					} });if (!result.isError) {
																					result = $('#input_first_name', this.page).validate({ report: function (result) {
																											result.msgs.length > 0 ? dialog.alert(result.msgs[0]) : null;
																								} });
																		}
															} else {
																		result = $('#inputaddcusname', this.page).validate({ report: function (result) {
																								result.msgs.length > 0 ? dialog.alert(result.msgs[0]) : null;
																					} });
															}return !result.isError;
												}, _bindEvent: function () {
															var _this = this;var toAdd = $('.add', this.page);var toInput = $('.to-input', this.page); //点击添加入住人
															toAdd.on('click', function () {
																		toAdd.hide();toInput.show();toInput.find('input').eq(0).focus();
															}); //确定添加入住人
															toInput.find('.confirm').on('click', function () {
																		tjMVT.setData({ "et": "click", "cspot": "addname" });if (!addPeople._validate()) {
																					return false;
																		}var input = toInput.find('input'),
																		    lastName,
																		    firstName,
																		    paramsName = { mode: _this.needEnName ? 1 : 0, name: input.val().trim() };if (_this.needEnName) {
																					lastName = toInput.find('#input_last_name').val().trim() || "";firstName = toInput.find('#input_first_name').val().trim() || "";delete paramsName.name;paramsName.firstname = firstName;paramsName.lastname = lastName;
																		}if (!paramsName.name && !_this.needEnName || _this.needEnName && (!paramsName.firstname || !paramsName.lastname)) {
																					dialog.alert(core.getLanguage('chooseperson.emptyname', $LANG_CREATEORDER));return false;
																		}addPeople._addPerson(paramsName);input.val('');toInput.hide();toAdd.show();
															}); // toInput.find('input').blur(function() {
															//     setTimeout(function() {
															//         toInput.hide();
															//         toAdd.show();
															//     }, 10)
															// });
															//选择入住人
															$('.per-list', this.page).on('click', 'li', function () {
																		var _this = $(this).find('.checkbox');if (_this.hasClass('checked')) {
																					_this.removeClass('checked');_this.parent().find('.num').remove();addPeople.selectedNum--;addPeople.selectedList.splice(addPeople.selectedList.length - 1, 1);$('.still .t1', addPeople.page).text(addPeople.roomNum - addPeople.selectedNum + '个');
																		} else {
																					if (addPeople.selectedNum == addPeople.roomNum) {
																								dialog.alert(core.getLanguage('chooseperson.bottomwords', $LANG_CREATEORDER));return false;
																					}_this.addClass('checked');addPeople.selectedNum++;addPeople.selectedList.push(addPeople.needEnName ? $(this).data('name') : _this.parent().find('span').text());$('.still .t1', addPeople.page).text(addPeople.roomNum - addPeople.selectedNum + '个');
																		}
															}); //确认选择
															$('.submit', this.page).on('click', function () {
																		if (addPeople.selectedList && addPeople.selectedList.length > 0) {
																					var personEmpty = new Array(),
																					    contactPersonList = addPeople.needEnName ? $('.contact-person li', dom) : $('.contact-person li', dom).find("input");for (var i = 0; i < contactPersonList.length && personEmpty.length != addPeople.selectedList.length; i++) {
																								if (addPeople.needEnName) {
																											var liInputs = $(contactPersonList[i]).find('input');for (var k = 0; k < liInputs.length; k++) {
																														if (($(liInputs[i]).val() || "").trim() == '') {
																																	personEmpty.push(contactPersonList[i]);break;
																														}
																											}
																								} else {
																											if (($(contactPersonList[i]).val() || "").trim() == "") {
																														personEmpty.push(contactPersonList[i]);
																											}
																								}
																					}for (var i = 0; i < personEmpty.length; i++) {
																								if (addPeople.needEnName && addPeople.selectedList[i].indexOf("/") > 0) {
																											var liInputs = $(personEmpty[i]).find('input');$(liInputs[0]).val(addPeople.selectedList[i].split('/')[0]);$(liInputs[1]).val(addPeople.selectedList[i].split('/')[1]);
																								} else {
																											$(personEmpty[i]).val(addPeople.selectedList[i]);
																								}
																					}for (var i = personEmpty.length, j = 0; i < addPeople.selectedList.length; i++, j++) {
																								if (personEmpty.contains(contactPersonList[j])) {
																											i--;
																								} else {
																											if (addPeople.needEnName && addPeople.selectedList[i].indexOf("/") > 0) {
																														var liInputs = $(contactPersonList[j]).find('input');$(liInputs[0]).val(addPeople.selectedList[i].split('/')[0]);$(liInputs[1]).val(addPeople.selectedList[i].split('/')[1]);
																											} else {
																														$(contactPersonList[j]).val(addPeople.selectedList[i]);
																											}
																								}
																					}
																		}addPeople.hide();
															}); //取消选择
															$('.cancel', this.page).on('click', function () {
																		addPeople.hide();
															}); //返回
															$('header .icon-back', this.page).on('click', function () {
																		addPeople.hide();
															}); //插件入口绑定
															$('.add-person-button', dom).on('click', function () {
																		var num = Number($('#room-number', dom).attr("value"));num = isNaN(num) ? 1 : num;addPeople.show(num);
															});
												} };PluginManager.add("addPeople", addPeople);var addAddress = { needInvoiceflag: false }; /**
                                                                                                       * 初始化发票填写项
                                                                                                       */function invoiceItemInit() {
												if ($DATA.canUserPreInvoice) {
															//预约发票 && 开关打开
															orderInvoiceInit();return;
												}switch (selectInvoiceType.value) {//根据组件的值判断
															case "0":
																		//纸质
																		invoiceForCO.elecHide();invoiceForCO.specialHide();invoiceForCO.paperShow();break;case "1":
																		//电子
																		invoiceForCO.paperHide();invoiceForCO.specialHide();invoiceForCO.elecShow();break;case "2":
																		//专票
																		invoiceForCO.paperHide();invoiceForCO.elecHide();invoiceForCO.specialShow();break;default:
																		break;}
									} /**
           * 预约发票
           */function orderInvoiceInit() {
												invoiceForCO.hideItemPack.hide();switch (selectInvoiceType.value) {case "0":
																		invoiceForCO.invoiceHeaderCtrl.setHeader();invoiceForCO.orderPage.show();invoiceForCO.orderSpecial.hide();break;case "2":
																		invoiceForCO.invoiceHeaderCtrl.hide();invoiceForCO.orderPage.hide();invoiceForCO.orderSpecial.show();break;default:
																		break;}
									} //发票开关  -> $(".order-invoice .label-switch")
									//跟发票开关点击相关的事件用addHandler来累加，用removeHandler，来移除
									var invoiceCheckbox = new checkbox($(".order-invoice .label-switch").find(".checkbox").hasClass("active")); //发票开关追加事件
									invoiceCheckbox.addHandler('checked', function (flag) {
												checkboxToggle($(".order-invoice .label-switch"), flag); //开关dom动画
												//纸质/电子发票 输入框切换
												if (flag && $DATA.invoiceTypeJson.length > 0) {
															//发票
															invoiceItemInit();
												}synPriceInfo();
									});function setInvoicePostAddress(address) {
												if ($DATA.addressesJson.length == 0 && localStorage.getItem('addresses') == null) {
															$('.invoicePostAddress').find(".postAddressContent").html('请输入邮寄地址');$('.invoicePostAddress').find(".postAddressContent").addClass("hui");$('.invoicePostAddress').removeClass("adress_select");
												} else {
															if ($('.invoicePostAddress').find(".postAddressContent").hasClass("hui") && $('.invoicePostAddress').find(".postAddressContent").find("span").length <= 0) {
																		$('.invoicePostAddress').find(".postAddressContent").html('<span class="usermess">' + '<b style="font-weight:normal"></b>' + '<em></em>' + '</span>' + '<em class="address-detail"></em>');$('.invoicePostAddress').find(".postAddressContent").removeClass("hui");
															}$('.invoicePostAddress').addClass("adress_select");address = address || $DATA.addressesJson[0] || JSON.parse(localStorage.getItem('addresses'))[0];$('.address_detail', dom).attr('data-id', address.id);$('.usermess b', dom).html(address.name);$('.usermess em', dom).html(address.phoneNo);$('.address-detail', dom).html(address.addressDetail);
												}
									}if ($DATA.invoiceAtElong === 1) {
												//初始化 各种发票所需填写的字段
												invoiceForCO.init({ taxpayerRegistrationNumber: $(".taxpayerNumber", dom), invoiceHeaderType: $(".invoice-header-type", dom), postAddress: $(".invoicePostAddress", dom), postType: $("#express-method", dom), taxpayerRegistrationNumberForZP: $("#invoice-shuiwuId", dom), registerAddress: $("#invoice-registerAddress", dom), companyPhone: $("#invoice-companyPhone", dom), openAccountBank: $("#invoice-openbank", dom), accountOfBank: $("#invoice-bankId", dom), invoiceRedTip: $(".invoiceRedTip", dom), elecInvoiceTip: $("#einvoice-tip", dom), invoiceElongTip: $("#invoice-elong", dom), taxpayerRegistrationNumberWin: $(".taxpayerNumber", dom).find(".taxpayer-num").find("b"), phoneNumber: $("#invoice-phone", dom) }, dom, $DATA); //非登录的发票抬头，邮寄地址
												if ($DATA.loginFlag == 0) {
															if (localStorage.getItem('invoiceTitles') != null) {
																		$('#invoice-title', dom).parent().find('.hui').remove();$('#invoice-title', dom).css('display', 'block');var invoiceTitles = JSON.parse(localStorage.getItem('invoiceTitles'));$('#invoice-title', dom).attr('data-value', invoiceTitles[0].value).attr('data-id', invoiceTitles[0].id);$('#invoice-title em', dom).html(invoiceTitles[0].value);
															}if (localStorage.getItem('addresses') != null) {
																		// $('.adress_select', dom).parent().find('.rm-cat').remove();
																		var addresses = JSON.parse(localStorage.getItem('addresses')); // $('.address_detail', dom).attr('data-id', addresses[0].id);
																		// $('.usermess b', dom).html(addresses[0].name);
																		// $('.usermess em', dom).html(addresses[0].phoneNo);
																		// $('.address-detail', dom).html(addresses[0].addressDetail);
																		setInvoicePostAddress(addresses[0]);$("#invoice-phone", dom).find('input').val(addresses[0].phoneNo);
															}
												}var _tips = $(".invoice-elong.tip", dom);_tips.hide();$("#needinvoiceflag", dom).click(function () {
															var _this = $(this);invoiceCheckbox.toggle(); //dom操作，及事件绑定
															if (_this.hasClass("active")) {
																		// if (getMvtResult('146').val == '0'){//温馨提示隐藏
																		$('.ive_tit1', dom).addClass('hide'); // }
																		_tips.hide(); //异常退出,继续浏览
																		abortPlugin.setData("NEEDINVOICEFLAG", false);
															} else {
																		//_tips.show();
																		// if (selectInvoiceType.value == 0 || selectInvoiceType.value == 2) {
																		//     $('#einvoice-tip', dom).hide();
																		//     $("#invoice-elong", dom).html($DATA_CREATEORDER.invoiceElongTip).show();
																		// } else if (selectInvoiceType.value == 1) {
																		//     $("#invoice-elong", dom).html($DATA_CREATEORDER.einvoiceElongTip).show();
																		//     $('#einvoice-tip', dom).html('电子发票开具后，您可在发票详情页添加发票到微信卡包，或者在艺龙官网下载打印发票。电子发票是税务局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票。').show();
																		// }
																		// if (getMvtResult('146').val == '0'){//温馨提示展示
																		$('.ive_tit1', dom).removeClass('hide'); // }
																		//异常退出,继续浏览
																		abortPlugin.setData("NEEDINVOICEFLAG", true);
															}
												});var selectInvoiceType = $("#invoice-type", dom).slideSelector({ title: '选择发票类型', data: function () {
																		$DATA.invoiceTypeJson = JSON.parse($DATA.invoiceTypeJson || "[]");return $DATA.invoiceTypeJson;
															}(), count: 0, // targetElement : $("#invoice-type", dom).next(),
															initValue: $DATA.invoiceTypeJson[0], value: $DATA.invoiceTypeJson[0].value, callback: function (result) {
																		//异常退出,继续浏览
																		setTimeout(function () {
																					abortPlugin.setData("INVOICTYPE", result.value);
																		}, 0);$("#invoice-type", dom).attr('data-value', result.value);$("#invoice-type", dom).html(result.text);selectInvoiceType.value = result.value;if (invoiceCheckbox.getVal() === true) {
																					invoiceItemInit();
																		} else {
																					checkboxToggle($(".order-invoice .label-switch"), false); //开关初始化dom
																		}setInvoicePostAddress();synPriceInfo();
															} });PluginManager.add("selectInvoiceType", selectInvoiceType);var selectInvoiceContent = $("#invoice-content", dom).slideSelector({ title: '选择发票内容', data: $DATA.invoiceContent, initValue: $DATA.invoiceContent[0], value: $DATA.invoiceContent[0].value, callback: function (result) {
																		$("#invoice-content", dom).attr('data-value', result.text);$("#invoice-content", dom).html(result.text);selectInvoiceContent.value = result.text;
															} });PluginManager.add("selectInvoiceContent", selectInvoiceContent);$DATA_CREATEORDER.delieverTypeInfos = JSON.parse($DATA_CREATEORDER.delieverTypeInfos || "[]"); //邮寄方式
												if ($DATA_CREATEORDER.delieverTypeInfos && $DATA_CREATEORDER.delieverTypeInfos.length > 0) {
															var expressFee = $("#express-fee", dom).slideSelector({ title: '邮寄方式', data: $DATA_CREATEORDER.delieverTypeInfos, initValue: $DATA_CREATEORDER.delieverTypeInfos[0], value: $DATA_CREATEORDER.delieverTypeInfos[0].value, delieverType: $DATA_CREATEORDER.delieverTypeInfos[0].delieverType, disableIndex: function () {
																					var disableIdx = 0;$.each($DATA_CREATEORDER.delieverTypeInfos, function (index, item) {
																								if (item.enabled === false) {
																											disableIdx = index;
																								}
																					});return disableIdx;
																		}(), callback: function (result) {
																					if (result.value == 10 && result.delieverType == 1) {
																								$('#wborderprice').val($('#wborderprice').val() + 10);
																					}$("#express-fee", dom).attr('data-value', result.value);$("#express-fee", dom).html(result.text);expressFee.value = result.value;expressFee.delieverType = result.delieverType;synPriceInfo();
																		} });PluginManager.add("expressFee", expressFee);
												}var selectInvoiceTitle = { TEMPLATE: { BODY: '<div>' + '<header class="bar bar-nav flight-order-head">' + '<a class="icon icon-back pull-left"></a>' + '<h1 class="title">常用发票抬头</h1>' + '</header>' + '<div class="page-content newbill">' + '<section class="addbill"><span>+</span>新增常用发票抬头</section>' + '<section class="bill_ad">' + '</section>' + '<div class="billbtn">确定</div>' + '</div>' + '</div>', ITEM: '<div class="invoice_item ${checked}" data-value="${value}" data-id="${id}">${invoiceTitle}</div>' }, initValue: $('#invoice-title', dom).attr('data-id'), invoiceTitles: function () {
																		$DATA.invoiceTitles = JSON.parse($DATA.invoiceTitles || '[]');return $DATA.invoiceTitles;
															}(), id: $('#invoice-title', dom).attr('data-id'), value: $('#invoice-title', dom).attr('data-value'), renderInvoiceTitles: function (invoiceTitles) {
																		var bill_ad = $('.bill_ad', this.page);$('.invoice_item', this.page).removeClass('on');for (var i = 0; i < invoiceTitles.length; i++) {
																					var checked = String(invoiceTitles[i].id) == this.initValue ? 'on' : '';var item = $(this.TEMPLATE.ITEM.replace('${checked}', checked).replace('${invoiceTitle}', invoiceTitles[i].value).replace('${value}', invoiceTitles[i].value).replace('${id}', invoiceTitles[i].id));item.on('click', function (e) {
																								$('.invoice_item', this.page).removeClass('on');var $target = $(e.currentTarget);selectInvoiceTitle.id = $target.attr('data-id');selectInvoiceTitle.value = $target.attr('data-value');$target.addClass('on');
																					});bill_ad.append(item);
																		}
															}, init: function () {
																		this.page = $(this.TEMPLATE.BODY);var invoiceTitles = [];if ($DATA.loginFlag == 1) {
																					invoiceTitles = selectInvoiceTitle.invoiceTitles;
																		} else {
																					if (localStorage.getItem('invoiceTitles') != null) {
																								invoiceTitles = JSON.parse(localStorage.getItem('invoiceTitles'));
																					}
																		}this.renderInvoiceTitles(invoiceTitles);this._bindEvent();
															}, _bindEvent: function () {
																		var page = this.page;$('.selected-invoice-title', dom).click(function () {
																					if ($DATA.loginFlag == 1 && selectInvoiceTitle.invoiceTitles.length > 0 || localStorage.getItem('invoiceTitles') != null) {
																								selectInvoiceTitle.show();
																					} else {
																								addInvoiceTitle.show();
																					}
																		});$('header .icon-back', this.page).on('click', function () {
																					selectInvoiceTitle.hide();
																		});$('.billbtn', page).on('click', function () {
																					$('#invoice-title', dom).attr('data-value', selectInvoiceTitle.value).attr('data-id', selectInvoiceTitle.id);$('#invoice-title em', dom).html(selectInvoiceTitle.value);selectInvoiceTitle.hide();
																		});$('.addbill', page).on('click', function () {
																					addInvoiceTitle.show();
																		});
															} };PluginManager.add('selectInvoiceTitle', selectInvoiceTitle);var addInvoiceTitle = { TEMPLATE: { BODY: '<div>' + '<header class="bar bar-nav flight-order-head">' + '<a class="icon icon-back pull-left"></a>' + '<h1 class="title">新增发票抬头</h1>' + '</header>' + '<div class="page-content newbill">' + '<section class="billname unon">' + '<div><span>发票抬头</span><span><input id="invoice_title" placeholder="请输入至少3个字符"></span></div>' + '</section>' + '<div class="billbtn">保存并使用</div>' + '</div>' + '</div>' }, beforeShow: function () {
																		var page = this.page;$("#invoice_title", page).val('');
															}, saveInvoiceTitle: function (value) {
																		slark.get("h5_createorder").startLoading();core.fetch(window.pageInfo.subPath + "api/addinvoicetitle/", { "value": value }, { //url: window.pageInfo.subPath + "api/addinvoicetitle/",
																					type: "POST", timeout: 10000, ataType: "json" // data: {
																					//     "value": value
																					// },
																		}).then( //success: 
																		function (result) {
																					slark.get("h5_createorder").stopLoading();if (result.errorCode == null) {
																								var invoiceTitle = {};invoiceTitle.id = result.id;invoiceTitle.value = value;addInvoiceTitle.afterHandle(invoiceTitle);
																					} else {
																								switch (result.errorCode) {case "NET_TIMEOUT":
																														dialog.alert(core.getLanguage('apitimeout', $LANG_CREATEORDER));break;case "SYS_ERROR":
																														dialog.alert(core.getLanguage('apierror', $LANG_CREATEORDER));break;default:
																														dialog.alert('保存数据失败，请稍后重试');}
																					}
																		}, //error: 
																		function (error) {
																					slark.get('h5_createorder').stopLoading();dialog.alert('保存数据失败，请稍后重试');
																		});
															}, _validate: function () {
																		var result = $('#invoice_title', this.page).validate({ report: function (result) {
																								result.msgs.length > 0 ? dialog.alert(result.msgs[0]) : null;
																					} });return !result.isError;
															}, afterHandle: function (invoiceTitle) {
																		selectInvoiceTitle.id = invoiceTitle.id;selectInvoiceTitle.value = invoiceTitle.value;selectInvoiceTitle.initValue = invoiceTitle.id;$DATA.invoiceTitles.push(invoiceTitle);selectInvoiceTitle.invoiceTitles = $DATA.invoiceTitles;$('#invoice-title', dom).parent().find('.hui').remove();$('#invoice-title', dom).css('display', 'block');$('#invoice-title', dom).attr('data-id', selectInvoiceTitle.id).attr('data-value', selectInvoiceTitle.alue);$('#invoice-title em', dom).html(selectInvoiceTitle.value);selectInvoiceTitle.renderInvoiceTitles([invoiceTitle]);addInvoiceTitle.hide();selectInvoiceTitle.hide();
															}, init: function () {
																		this.page = $(this.TEMPLATE.BODY);this._bindEvent();validate.addFilter($("#invoice_title", this.page), { rq: true, regex: /^[\u4E00-\u9FA5a-zA-Z0-9/ \(\)（）\-\_]{2,50}$/, msg: "请输入正确的发票抬头" });
															}, _bindEvent: function () {
																		var page = this.page;$('.billbtn', page).on('click', function () {
																					var value = $('#invoice_title').val().trim();var regex = /^[\u4E00-\u9FA5a-zA-Z0-9/ \(\)（）\-\_]{2,50}$/; //if (!addInvoiceTitle._validate()) return false;
																					if (!regex.test(value)) {
																								dialog.alert('请输入正确的发票抬头');return;
																					}if (value == '') {
																								dialog.alert('请输入发票抬头');return false;
																					}if (value.length > 100) {
																								dialog.alert('发票抬头过长（可输入100个字符）');return;
																					}var invoiceTitles = selectInvoiceTitle.invoiceTitles;for (var i = 0; i < invoiceTitles.length; i++) {
																								if (value == invoiceTitles[i].value) {
																											dialog.alert('您已保存过相同的发票抬头');return false;
																								}
																					}if ($DATA.loginFlag == 1) {
																								addInvoiceTitle.saveInvoiceTitle(value);
																					} else {
																								//未登录，发票信息保存至localStorage
																								var invoiceTitles = new Array();var invoiceTitle = {};invoiceTitle.id = new Date().getTime();invoiceTitle.value = value;if (localStorage.getItem('invoiceTitles') != null) {
																											invoiceTitles = JSON.parse(localStorage.getItem('invoiceTitles'));
																								}invoiceTitles.push(invoiceTitle);localStorage.setItem('invoiceTitles', JSON.stringify(invoiceTitles));addInvoiceTitle.afterHandle(invoiceTitle);
																					}
																		});$('header .icon-back', this.page).on('click', function () {
																					addInvoiceTitle.hide();
																		});
															} };PluginManager.add('addInvoiceTitle', addInvoiceTitle); //选择邮寄地址
												var selectAddress = { TEMPLATE: { BODY: '<div>' + '<header class="bar bar-nav flight-order-head">' + '<a class="icon icon-back pull-left"></a>' + '<h1 class="title">常用邮寄地址</h1>' + '</header>' + '<div class="page-content newbill">' + '<div class="newbillmain_content">' + '<section class="addbill"><span>+</span>增加常用邮寄地址</section>' + '<div class="address-list"></div>' + '<div class="billbtn">确定</div>' + '</div>' + '</div>' + '</div>', ITEM: '<section class="bill_person">' + '<div class="address_item ${checked}" data-id="${id}" data-name="${name}" data-areacode="${areaCode}" data-phoneno="${phoneNo}" data-addressdetail="${addressDetail}">' + '<p><span>${name}</span><span><em>+${areaCode}</em>${phoneNo}</span></p>' + '<p><span>${addressDetail}</span></p>' + '</div>' + '</section>' }, addresses: $DATA.addressesJson, initValue: $('.address_detail', dom).attr('data-id'), id: $('.address_detail', dom).attr('data-id'), name: $('.usermess b', dom).html(), phoneNo: $('.usermess em', dom).html(), addressDetail: $('.address-detail', dom).html(), init: function () {
																		this.page = $(this.TEMPLATE.BODY);var addresses = [];if ($DATA.loginFlag == 1) {
																					addresses = selectAddress.addresses;
																		} else {
																					if (localStorage.getItem('addresses') != null) {
																								addresses = JSON.parse(localStorage.getItem('addresses'));
																					}
																		}this.renderAddresses(addresses);this._bindEvent();
															}, renderAddresses: function (addresses) {
																		var newbill = $('.address-list', this.page); //newbill.append($('<section class="addbill"><span>+</span>增加常用邮寄地址</section>'));
																		$('.address_item', this.page).removeClass('on');for (var i = 0; i < addresses.length; i++) {
																					var checked = String(addresses[i].id) == this.initValue ? 'on' : '';if (checked == 'on') {
																								selectAddress.name = addresses[i].name;selectAddress.phoneNo = addresses[i].phoneNo;selectAddress.addressDetail = addresses[i].addressDetail;
																					}var item = $(this.TEMPLATE.ITEM.replace('${checked}', checked).replace('${id}', addresses[i].id).replace('${name}', addresses[i].name).replace('${areaCode}', addresses[i].areaCode).replace('${phoneNo}', addresses[i].phoneNo).replace('${addressDetail}', addresses[i].addressDetail).replace('${name}', addresses[i].name).replace('${areaCode}', addresses[i].areaCode).replace('${phoneNo}', addresses[i].phoneNo).replace('${addressDetail}', addresses[i].addressDetail));item.on('click', function (e) {
																								$('.address_item', this.page).removeClass('on');var $target = $(e.currentTarget);selectAddress.id = $target.find('.address_item').attr('data-id');selectAddress.name = $target.find('.address_item').attr('data-name');selectAddress.phoneNo = $target.find('.address_item').attr('data-phoneno');selectAddress.addressDetail = $target.find('.address_item').attr('data-addressdetail');$target.find('.address_item').addClass('on');
																					});newbill.append(item);
																		} //newbill.append($('<div class="billbtn">确定</div>'));
															}, _bindEvent: function () {
																		var page = this.page;$('.invoicePostAddress', dom).click(function () {
																					if ($DATA.loginFlag == true && selectAddress.addresses.length > 0 || localStorage.getItem('addresses') != null) {
																								selectAddress.show();
																					} else {
																								addAddress.show();
																					}
																		});$('header .icon-back', this.page).on('click', function () {
																					selectAddress.hide();
																		});$('.addbill', page).on('click', function () {
																					addAddress.show();
																		});$('.billbtn', page).on('click', function () {
																					setInvoicePostAddress(selectAddress);selectAddress.hide();
																		});
															} };PluginManager.add('selectAddress', selectAddress);addAddress = { TEMPLATE: { BODY: '<div>' + '<header class="bar bar-nav flight-order-head">' + '<a class="icon icon-back pull-left"></a>' + '<h1 class="title">新增邮寄地址</h1>' + '</header>' + '<div class="page-content newbill">' + '<section class="addnewdress">' + '<div class="cname"><span>姓名</span><span><input placeholder="请填写姓名"></span></div>' + '</section>' + '<section class="addnewdress">' + '<div class="phone-no"><span>手机<em class="areacode" data-value="86">+86</em></span><span><input placeholder="请填写手机号"></span></div>' + '</section>' + '<section class="addnewdress">' + '<div class="detail-address"><span>地址</span><span><input placeholder="请填写详细地址"></span></div>' + '</section>' + '<section class="addnewdress lastchild">' + '<div class="post-code"><span>邮编</span><span><input placeholder="选填"></span></div>' + '</section>' + '<div class="billbtn">保存并使用</div>' + '</div>' + '</div>' }, needInvoiceflag: false, codeRegex: null, init: function () {
																		this.page = $(this.TEMPLATE.BODY);this.page.appendTo(core.getActiveLayer());this._bindEvent();
															}, beforeShow: function () {
																		var page = this.page;$(".cname input", page).val('');$(".phone-no input", page).val('');$(".post-code input", page).val('');$(".detail-address input", page).val('');
															}, // _validate: function() {
															//     var result = $('.info input', this.page).validate({
															//         report: function(result) {
															//             result.msgs.length > 0 ? dialog.alert(result.msgs[0]) : null;
															//         }
															//     });
															//     return !result.isError;
															// },
															_addusualaddress: function (name, areacode, phoneno, addr, postcode) {
																		core.fetch(window.pageInfo.subPath + "api/addaddress/", { "name": name, "areacode": areacode, "phoneno": phoneno, "address": addr, "postcode": postcode }, { timeout: 10000, type: "POST", //url: window.pageInfo.subPath + "api/addaddress/",
																					dataType: "json" // data: {
																					//     "name": name,
																					//     "areacode": areacode,
																					//     "phoneno": phoneno,
																					//     "address": addr,
																					//     "postcode": postcode
																					// },
																		}).then( //success: 
																		function (result) {
																					if (result.errorCode == null) {
																								var address = {};address.id = result.id;address.name = name;address.areaCode = areacode;address.phoneNo = phoneno;address.addressDetail = addr;address.postcode = postcode;addAddress.afterHandle(address);
																					} else {
																								switch (result.errorCode) {case "NET_TIMEOUT":
																														dialog.alert(core.getLanguage('apitimeout', $LANG_CREATEORDER));break;case "SYS_ERROR":
																														dialog.alert(core.getLanguage('apierror', $LANG_CREATEORDER));break;default:
																														dialog.alert('保存数据失败，请稍后重试');}
																					}
																		}, //error: 
																		function (xhr, errorType, error) {
																					Common.recordTextLayer(core.getLanguage('nettimeout', $LANG_CREATEORDER));return false;
																		});
															}, afterHandle: function (address) {
																		selectAddress.id = address.id;selectAddress.initValue = address.id;selectAddress.name = address.name;selectAddress.phoneNo = address.phoneNo;selectAddress.addressDetail = address.addressDetail;$DATA.addressesJson.push(address);selectAddress.addresses = $DATA.addressesJson; //保存并使用
																		// $('.adress_select', dom).parent().find('.rm-cat').remove();
																		// $('.adress_select', dom).css('display', 'block');
																		// $('.address_detail', dom).attr('data-id', selectAddress.id);
																		// $('.usermess b', dom).html(selectAddress.name);
																		// $('.usermess em', dom).html(selectAddress.phoneNo);
																		// $('.address-detail', dom).html(selectAddress.addressDetail);
																		setInvoicePostAddress(selectAddress);selectAddress.renderAddresses([address]);addAddress.hide();selectAddress.hide();
															}, _bindEvent: function () {
																		var page = this.page;var area_code = $(".areacode", page).slideSelector({ title: '选择手机号地区', data: $DATA.areaCode, initValue: Common.getCheckedItem($DATA.areaCode), callback: function (result) {
																								for (var i = 0; i < $DATA.areaCode.length; i++) {
																											if (result.value == $DATA.areaCode[i].value) {
																														addAddress.codeRegex = $DATA.areaCode[i].regex;break;
																											}
																								}$(".areacode", page).html("+" + (result.value == "" ? "86" : result.value));$(".areacode", page).attr("data-value", result.value == "" ? "86" : result.value);
																					} });PluginManager.add("area_code", area_code); // $(".selected-address-button", dom).click(function() {
																		//     addAddress.show();
																		// });
																		// $('#needinvoiceflag', dom).on('click', function() {
																		//     var _this = $(this);
																		//     if (_this.hasClass('active')) {
																		//         addAddress.needInvoiceflag = false;
																		//     } else {
																		//         addAddress.needInvoiceflag = true;
																		//     }
																		// });
																		invoiceCheckbox.addHandler('checked', function (flag) {
																					addAddress.needInvoiceflag = flag;
																		});$("header .icon-back", page).click(function () {
																					addAddress.hide();
																		});$('.rm-cat', dom).on('click', function () {
																					addAddress.show();
																		});$(".billbtn", page).click(function () {
																					// if (!addAddress._validate()) {
																					//     return false;
																					// }
																					var name = $(".cname input", page).val().trim();var areacode = $(".areacode", page).attr("data-value").trim();var phoneno = $(".phone-no input", page).val().trim();var addressdetail = $(".detail-address input", page).val().trim();var postcode = $(".post-code input", page).val().trim();var reg = /^[\u4E00-\u9FA5a-zA-Z0-9/ \(\)（）\-\_]{2,50}$/;areacode = areacode == "" ? "86" : areacode; //输入校验
																					if (name == '') {
																								dialog.alert('请输入姓名');return;
																					}if (phoneno == '') {
																								dialog.alert('请输入手机号');return;
																					}if (addressdetail == '') {
																								dialog.alert('请输入邮寄地址');return;
																					} // if(postcode == '') {
																					//     dialog.alert('邮递编码不能为空');
																					//     return;
																					// }
																					if (name.length > 100 || !reg.test(name)) {
																								dialog.alert('请输入真实的姓名（长度为2-100个字符）');return;
																					}if (addressdetail.length > 200 || !reg.test(addressdetail)) {
																								dialog.alert('邮寄地址过长（可输入200个字符）');return;
																					}if (!new RegExp(addAddress.codeRegex).test(areacode + phoneno)) {
																								dialog.alert("请输入正确收票人电话");return;
																					}if (postcode != '' && /^\d{6}$/.test(postcode) == false) {
																								dialog.alert("请输入正确的邮政编码");return;
																					}var addresses = selectAddress.addresses;for (var i = 0; i < addresses.length; i++) {
																								if (name == addresses[i].name && addressdetail == addresses[i].addressDetail && phoneno == addresses[i].phoneNo && postcode == addresses[i].postcode) {
																											dialog.alert("您已保存相同邮寄地址");return;
																								}
																					}if ($DATA.loginFlag == 1) {
																								addAddress._addusualaddress(name, areacode, phoneno, addressdetail, postcode);
																					} else {
																								//未登录，发票信息保存至localStorage
																								var addresses = new Array();var address = {};address.id = new Date().getTime();address.name = name;address.areaCode = areacode;address.phoneNo = phoneno;address.addressDetail = addressdetail;address.postcode = postcode;if (localStorage.getItem('addresses') != null) {
																											addresses = JSON.parse(localStorage.getItem('addresses'));
																								}addresses.push(address);localStorage.setItem('addresses', JSON.stringify(addresses));addAddress.afterHandle(address);
																					} // addAddress.selectedAddressLabel.after(addAddress.TEMPLATE.ITEM.replace('${address}', allAddress));
																					// addedList.find('.checkbox').removeClass("checked");
																					// $(".order-invoice li.selected", dom).first().find(".checkbox").addClass("checked");
																					// addAddress.hide();
																					// if (addAddress.selectedAddressLabel.attr('display') == 'none') {
																					//     addAddress.selectedAddressLabel.show();
																					//     addAddress.selectedAddressLabel.attr('display', 'list-item');
																					// }
																		});
															} };PluginManager.add("addAddress", addAddress);
									} //手机提交订单
									$(dom).on('click', '#mobilesubmit', function (e) {
												if ($(e.target).hasClass('el_check_info')) return;createOrder.createOrderPostV1({ _from: 'mobilesubmit' });
									}); //pad提交订单
									$(dom).on('click', '#padsubmit', function () {
												createOrder.createOrderPostV1();
									}); //170713~170722迭代
									var idCard = { //任一入住人身份证
												IDCardCheckResult: false, $checkIdCard: null, init: function () {
															if ($('.order-occupancy.order-occupancy1 .js_check_IdCard', dom).length > 0) {
																		this.$checkIdCardbtn = $('.order-occupancy.order-occupancy1 .js_check_IdCard', dom);this.$checkIdCard = $('.order-occupancy.order-occupancy1 .js_check_IdCard .id-ico', dom);this.$contactoridcard = $("#contactoridcard", dom);this.$clearInput = $(".person-identify .clear-input", dom);this.$checkIdCard.addClass("invalid");this.$clearInput.css("z-index", "2100").hide();idCard.bindEvent();
															}
												}, bindEvent: function () {
															var _this = this;_this.$checkIdCardbtn.on("click", function () {
																		tjMVT.setData({ "et": "click", "cspot": "checkidnumber" });var val = $("#contactoridcard").val();if (_this.jsCheckIDCard()) {
																					return;
																		}_this.checkIDCard(val);
															});_this.$contactoridcard.on("focus input", function () {
																		if (this.value.length === 0) {
																					//清输入的时候 不显示X ,不点亮查询按钮
																					_this.$clearInput.hide();_this.$checkIdCard.addClass("invalid");
																		} else {
																					//有输入的时候 立刻显示X ,点亮查询按钮
																					_this.$clearInput.show();_this.$checkIdCard.removeClass("invalid");
																		}
															}).blur(function () {
																		setTimeout(function () {
																					_this.$clearInput.hide();
																		}, 10);
															});_this.$clearInput.on("click", function () {
																		_this.$contactoridcard.val("");_this.$clearInput.hide();_this.$checkIdCard.addClass("invalid");
															});
												}, checkIDCard: function (idcard) {
															var _this = this;slark.get("h5_createorder").startLoading();_this.$checkIdCard.addClass("invalid");core.fetch(window.pageInfo.subPath + "api/verifyIdentity/", { "checkindate": core.getCookie('indate'), "checkoutdate": core.getCookie('outdate'), "hotelId": $DATA_CREATEORDER.hotelId, "identity": idcard, "key": $DATA_CREATEORDER.cachekey }, { type: "POST", timeout: 2000, ataType: "json" }).then(function (data) {
																		slark.get("h5_createorder").stopLoading();_this.$checkIdCard.removeClass("invalid");if (data.error === false) {
																					_this.IDCardCheckResult = true;toast.show("身份证校验通过");
																		} else {
																					_this.IDCardCheckResult = false;dialog.alert(data.errorMessage === null ? "校验错误，请您核对身份证后再试" : data.errorMessage, function () {//location.reload();
																					});
																		}
															}, function () {
																		_this.$checkIdCard.removeClass("invalid");slark.get("h5_createorder").stopLoading();toast.show("身份证校验通过");
															});
												}, jsCheckIDCard: function () {
															var flag = false;var $contactoridcard = $("#contactoridcard", dom);var contactoridcard = null;if ($contactoridcard.length > 0) {
																		contactoridcard = $contactoridcard.val();if (contactoridcard.length != 15 && contactoridcard.length != 18) {
																					dialog.alert("身份证号码长度应为15位或18位");flag = true; //return;
																		} else if (contactoridcard.length == 15) {
																					if (!/^\d{15}$/.test(contactoridcard)) {
																								//if (!(/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(contactoridcard))){
																								dialog.alert("请输入正确的身份证号");flag = true; //return;
																					}
																		} else if (contactoridcard.length == 18) {
																					//if (!(/^(\d{18}$|^\d{17}(\d|X|x))$/.test(contactoridcard))) {
																					if (!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(contactoridcard)) {
																								dialog.alert("请输入正确的身份证号");flag = true; //return;
																					}
																		}
															}return flag;
												} };huaZhuBotaoManager.init(idCard, $DATA);var priceManager = { data: {}, ajaxWaittingFlag: true, isFirstInsurance: false, showPriceRmb: null, showPriceRmbWithDeposit: null, showPriceRmbWithInsurance: null, hasInsurance: null, defaultInsuranceBack: null, //api接口该字段已经废弃，端上仍然有需要
												recommendHongBao: $DATA_CREATEORDER.priceInfo.recommendHongBao, currencyType: 1, //  1 :rmb, 2 : 港币
												isVouch: 0, fetchPriceInfo: function (needLoading) {
															var params = {};params["key"] = $DATA_CREATEORDER.cachekey;if ($DATA_CREATEORDER.isCanBeExtended) {
																		// fix bug
																		params["productUniqueId"] = $DATA_CREATEORDER.productUniqueId;
															}params["roomnum"] = parseInt($("#room-number", dom).attr("value"));if (redPacketList.selectedIncomeId) {
																		params["incomeid"] = parseInt(redPacketList.selectedIncomeId);
															}priceManager.isVouch = roomReservation.getValue().needVouch || roomNumber.getValue().assure || 0;params = $.extend(params, JSON.parse(sessionStorage.getItem('insurancesParams') || '{}'));params['dayPricesJSON'] = $DATA_CREATEORDER.productInfo.dayPricesJson || '[]';params['needVouch'] = priceManager.isVouch;params['vouchMoneyType'] = $DATA_CREATEORDER.vouchMoneyType; /* 是否是延住订单 */if ($DATA.isCanBeExtended && window.pageInfo.chid === "wxqbh5") {
																		var _cache_aKeyData = JSON.parse(sessionStorage.getItem('cache_aKeyData'));params.oneKeyContinuesParamJSON = {};params['oneKeyContinuesParamJSON'] = sessionStorage.getItem('cache_aKeyData').toString();
															} //2017-08-14 API 需要判断
															params["payType"] = $DATA_CREATEORDER.payType;slark.get("h5_createorder").startLoading();var __waittingTime__ = +new Date();core.fetch(window.pageInfo.subPath + "api/getpriceinfo/", params, { //url: 'http://xapi.elong.com' + window.pageInfo.subPath + "api/getpriceinfo/",
																		type: "POST", timeout: 20000 }).then( //data: params,
															//success: 
															function (data) {
																		// needLoading?"":slark.get("h5_createorder").stopLoading();
																		// if (window['tjClient'] && priceManager.ajaxWaittingFlag) {
																		//     priceManager.ajaxWaittingFlag = false;
																		//     window.tjClient.send("__firstTime__",[{
																		//         url: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/",
																		//         time: +new Date() - __waittingTime__,
																		//         size: JSON.stringify(data).length
																		//     }]);
																		// }
																		if (window['xlog'] && priceManager.ajaxWaittingFlag) {
																					priceManager.ajaxWaittingFlag = false; // !!window.xlog && xlog.sendFirstScreenTime([{
																					//     url: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/",
																					//     time: +new Date() - __waittingTime__,
																					//     size: JSON.stringify(data).length
																					// }]);
																					onlyPoint({ url: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/", time: +new Date() - __waittingTime__, size: JSON.stringify(data).length });
																		}slark.get("h5_createorder").stopLoading();if (data.error || data.errorCode !== null) {
																					setTimeout(function () {
																								if (!$DATA.isCanBeExtended) {
																											//这个地方有个bug
																											dialog.alert('获取价格信息失败，请重新尝试', function () {
																														location.reload();
																											});
																								} else {
																											dialog.alert(data.errorMessage || "获取价格信息失败，请重新尝试", function () {
																														location.reload();
																											});
																								}
																					}, 17);
																		} else {
																					priceManager.render(data); //异常退出,继续浏览初始化
																					abortPlugin.init();
																		}
															}, //error: 
															function (xhr, err, msg) {
																		if ($DATA.isCanBeExtended && window.pageInfo.chid === "wxqbh5") {
																					easyDelayBack.backSetPageData();
																		} // needLoading?"":slark.get("h5_createorder").stopLoading();
																		slark.get("h5_createorder").stopLoading();setTimeout(function () {
																					dialog.alert('获取价格信息失败，请重新尝试', function () {
																								location.reload();
																					});
																		}, 17); // if (window['tjClient'] && priceManager.ajaxWaittingFlag) {
																		//     priceManager.ajaxWaittingFlag = false;
																		//     window.tjClient.send("__error__", {
																		//         url: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/",
																		//         err: err,
																		//         msg: msg
																		//     });
																		// }
																		if (window['xlog'] && priceManager.ajaxWaittingFlag) {
																					priceManager.ajaxWaittingFlag = false;!!window.xlog && xlog.reportError({ filename: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/", message: msg, error: err });onlyPoint();
																		}
															});
												}, render: function (data) {
															this.data = data;this.priceInfo = data.priceInfo;this.showCouponText = data.showCouponText; //取消险  showPriceRmb 不加保险
															var insurancesEle = $('.cancels', dom); //todo ...红包外框的展示与隐藏； to by jin'ming ／done
															if (!!data.logicPriceInfo && data.logicPriceInfo.loginFlag == "1") {
																		//登录态
																		var logicPriceInfo = data.logicPriceInfo;if (!!logicPriceInfo.loginCouponType && data.priceInfo.showPromotionVal > 0 && !!logicPriceInfo.showTitle) {
																					switch (logicPriceInfo.loginCouponType) {case "yLoginYCoupon":
																											$("#couponval", dom).addClass('fxselected')[0].childNodes[0].nodeValue = logicPriceInfo.showTitle;if (logicPriceInfo.checkCouponSwitch == 1) {
																														$('#cbfanxian', dom).removeClass("hide");
																											} else {
																														$('#cbfanxian', dom).addClass("hide");
																											}$("#couponval", dom).removeClass('hide');break;case "yLoginYReduce":
																											$("#couponval", dom).addClass('hbselected')[0].childNodes[0].nodeValue = logicPriceInfo.showTitle;$('#couponval', dom).removeClass("hide");break;default:
																											$("#couponval", dom).addClass('hide');break;}
																		} else {
																					$("#couponval", dom).addClass('hide');
																		} //红包选择入口： 红包卡券bar
																		if (!!logicPriceInfo.loginHongbaoType && data.priceInfo.recommendHongBao > 0) {
																					///2017-06-29 优惠券 ， 红包选择bar  更名title ：红包卡券
																					$('#loginHongbaoType', dom).removeClass("hide")[0].childNodes[0].nodeValue = "红包卡券";
																		} else {
																					redPacketList.lastIncomeId = "";redPacketList.selectedIncomeId = "";$("#loginHongbaoType", dom).addClass('hide');
																		} //返现说明文案；
																		if (logicPriceInfo.loginFlag == 1 && (logicPriceInfo.loginCouponType == "yLoginYCoupon" || logicPriceInfo.loginHongbaoType == "yLoginYHongBaoCouponYUserHongBao")) {
																					$("#invoice-elong1", dom).removeClass('hide');
																		} else {
																					$("#invoice-elong1", dom).addClass('hide');
																		} //返现立减指南文案；
																		if ((data.priceInfo.couponVal > 0 || data.priceInfo.recommendHongBao > 0) && (["nLoginYCoupon", "nLoginYReduce", "yLoginYCoupon", "yLoginYReduce"].indexOf(logicPriceInfo.loginCouponType) > -1 || ["yLoginYHongBaoReduceYUserHongBao", "yLoginYHongBaoCouponYUserHongBao"].indexOf(logicPriceInfo.loginHongbaoType) > -1)) {
																					$('#login-help', dom).removeClass('hide');
																		} else {
																					$('#login-help', dom).addClass('hide');
																		} // 立减bar 和 红包选择bar 隐藏 ， 那么该区域（order-hongbao）隐藏
																		if ($(".order-hongbao ul").children().length == $(".order-hongbao ul .hide").length) {
																					$(".order-hongbao").addClass('hide');
																		} else {
																					$(".order-hongbao").removeClass('hide');
																		}
															}var featuresCoupons = data.featuresCoupon; // 返现和立减栏（包括额外优惠）
															if (!!featuresCoupons && !!featuresCoupons.extraCouponInfo && !!featuresCoupons.extraCouponInfo.extraCoupon && pageInfo.chid === "wxqbh5") {
																		$('.showcouponval', dom).html('￥' + data.priceInfo.showPromotionVal + '<span>(含额外优惠￥' + featuresCoupons.extraCouponInfo.extraCouponVal + ')</span>');
															} else {
																		$('.showcouponval', dom).html('￥' + data.priceInfo.couponVal);
															} //新客五八折金额展示 |2017-08-07 jinming qqhyh5 , qqqbh5 支持新客58折|
															if (!!featuresCoupons && !!featuresCoupons.xinke58Info && !!featuresCoupons.xinke58Info.xinke58 && ["qqqbh5", "qqhyh5", "wxqbh5"].indexOf(window.pageInfo.chid) > -1) {
																		$(".xk_58_sale .cert-type ", dom).html('￥' + featuresCoupons.xinke58Info.xinke58CouplePrice);$(".xk_58_sale", dom).show(); //显示新客返现金额
																		$(".xk_tips", dom).show(); //显示新客返现说明
															}if (!!data.insurances && data.insurances.length > 0 && !$DATA_CREATEORDER.isCanBeExtended) {
																		//取消险是否展示
																		if (!priceManager.isFirstInsurance) {
																					priceManager.defaultInsuranceBack = false;
																		};priceManager.insurances = data.insurances; // 修正sessionStorage中的insuranceId
																		sessionStorage.setItem("posterorderParams", function () {
																					var obj = JSON.parse(sessionStorage.getItem("posterorderParams") || '{}');obj['insuranceId'] = data.insurances[0].insuranceId;obj['hotelName'] = obj['hotelName'] || $DATA_CREATEORDER.hotelName;obj['hotelAddr'] = obj['hotelAddr'] || ""; // ||
																					obj['hotelCity'] = obj['hotelCity'] || ""; // ||
																					return JSON.stringify(obj);
																		}());insurancesEle.find('.cert-type').text("￥" + priceManager.insurances[0].insurancePriceC);if (!!priceManager.defaultInsuranceBack) {
																					insurancesEle.find('.choosewx i').addClass('on').attr('data-tj', '{"cspot":"insurancecanceloff"}');
																		} else {
																					insurancesEle.find('.choosewx i').removeClass('on').attr('data-tj', '{"cspot":"insurancecancelon"}');
																		}insurancesEle.removeClass('hide');$('.cancels-warning').removeClass('hide');
															} else {
																		priceManager.defaultInsuranceBack = false;insurancesEle.addClass('hide').find('.choosewx i').removeClass('on');$('.cancels-warning').addClass('hide');
															} // 红包栏，推荐红包（data.selectedHongbao为空相当于未使用任何红包）
															this.showPriceRmbWithInsurance = data.priceInfo.showPriceRmbWithInsurance + "<span class='safe'>(含保险)</span>";this.showPriceRmb = data.priceInfo.showPriceRmb;this.showPriceRmbWithDeposit = data.priceInfo.showPriceRmbWithDeposit;this.recommendHongBao = data.priceInfo.recommendHongBao;if (!!data.selectedHongbao) {
																		data.recommondHongBao = data.selectedHongbao;
															}if (data.priceInfo.hongBaoVal) {
																		//满返红包 lastIncomeId selectedIncomeId  //张旭2017-08-08 15:46:12 QQ钱包渠道，默认选中
																		if ($DATA_CREATEORDER.priceInfo.hongbaoPromotionTypeValue == 10) {
																					$('.redpackethit .showhongbaoval').html('￥' + data.priceInfo.hongBaoVal + '<span class="recommendHongBao">（' + (!!data.recommondHongBao && data.recommondHongBao.flag == 1000 && !!data.recommondHongBao.canUse ? !!data.recommondHongBao.fullReturnRule && !!data.recommondHongBao.fullReturnRule.description && data.recommondHongBao.fullReturnRule.description : '最多可返￥' + data.priceInfo.recommendHongBao) + '）</span>');
																		} else {
																					$('.redpackethit .showhongbaoval').html('￥' + data.priceInfo.hongBaoVal + '<span class="recommendHongBao">（最多可减￥' + data.priceInfo.recommendHongBao + '）</span>');
																		}$('.redpackethit .showhongbaoval').removeClass('no-show');
															} else {
																		if ($DATA_CREATEORDER.priceInfo.hongbaoPromotionTypeValue == 10) {
																					$('.redpackethit .showhongbaoval').html(!!data.recommondHongBao && data.recommondHongBao.flag == 1000 && !data.recommondHongBao.canUse ? '未使用' : '未使用<span class="recommendHongBao">（最多可返￥' + data.priceInfo.recommendHongBao + '）</span>');if (!!data.recommondHongBao && data.recommondHongBao.flag == 1000 && !!data.recommondHongBao.canUse) {
																								redPacketList.lastIncomeId = "";redPacketList.selectedIncomeId = "";
																					}
																		} else {
																					$('.redpackethit .showhongbaoval').html('未使用<span class="recommendHongBao">（最多可减￥' + data.priceInfo.recommendHongBao + '）</span>');
																		}$('.redpackethit .showhongbaoval').addClass('no-show');
															} // 价格
															var currency = '';if (data.currencyPrice) {
																		$('.currency-info span', dom).text(data.currencyPrice);
															} //data.priceInfo.showPriceRmb = !!$DATA_CREATEORDER.defaultInsuranceBack ? data.priceInfo.showPriceRmb+"<span class='safe'>(含保险)</span>" : data.priceInfo.showPriceRmb + (!!data.currencyPrice && data.currencyPrice !='0' ? '<b style="font-size:14px">'+ data.currencyPrice +'</b>' : '');
															if (!!priceManager.defaultInsuranceBack) {
																		data.priceInfo.showPriceRmb = this.showPriceRmbWithInsurance;
															} else {}$(".addzhe").length === 0 ? $(".create-order-bar").before('<div class="addzhe bar"></div>') : ''; // !!data.currencyPrice && data.currencyPrice != '0'?
															$(".addzhe").html('<label class="js_needNotInsurances_for_GAT">约折合<em>' + data.currencyPrice + '</em>请您到店后在酒店前台支付</label>' + '<label class="js_needInsurances_for_GAT">约折合<em>' + data.currencyPrice + '</em>请您到店后在酒店前台支付，担保金¥' + data.priceInfo.vouchPriceRmb + '（入住后原路返回），取消险¥' + (data.insurances.length > 0 && data.insurances[0].insurancePriceC || 0) + '</label>' + '<label class="js_needInsurances">担保金¥' + data.priceInfo.vouchPriceRmb + '（入住后原路返回），取消险¥' + (data.insurances.length > 0 && data.insurances[0].insurancePriceC || 0) + '</label>'); //:'';
															//港币
															$(".addzhe").show();if (!!data.currencyPrice && data.currencyPrice != '0') {
																		priceManager.currencyType = 2;if (insurancesEle.find('.choosewx i').hasClass('on')) {
																					$(".js_needInsurances_for_GAT").show();$(".js_needInsurances").hide();$(".js_needNotInsurances_for_GAT").hide();
																		} else {
																					$(".js_needInsurances_for_GAT").hide();$(".js_needInsurances").hide();$(".js_needNotInsurances_for_GAT").show();
																		}
															} else {
																		if (insurancesEle.find('.choosewx i').hasClass('on')) {
																					$(".js_needInsurances_for_GAT").hide();$DATA_CREATEORDER.showPayType === 1 ? $(".js_needInsurances").show() : $(".js_needInsurances").hide();$(".js_needNotInsurances_for_GAT").hide();
																		} else {
																					$(".js_needInsurances_for_GAT").hide();$(".js_needInsurances").hide();$(".js_needNotInsurances_for_GAT").hide();$(".addzhe").hide();
																		}priceManager.currencyType = 1;
															}if ($('.addzhe.bar').children().length === ($('.addzhe.bar').html().match(/display\:\s?none\;?/g) && $('.addzhe.bar').html().match(/display\:\s?none\;?/g).length || -1)) {
																		$('.addzhe.bar').hide();
															} else {
																		$('.addzhe.bar').show();
															} //$('#wborderprice').html(data.priceInfo.showPriceRmb);
															synPriceInfo(); // 左下角立减，返现，红包
															!!data.couponText ? $('.total .coupontext', dom).html(data.couponText).show() : $('.total .coupontext', dom).html(data.couponText).hide();
												} };if ($DATA.loginFlag != 0 && $DATA.isCanBeExtended && window.pageInfo.chid === "wxqbh5") {
												easyDelayBack.init(priceManager, dom, roomNumber);
									} // 红包选择列表
									var redPacketList = { TEMPLATE: '<div>' + '<div class="page-content usehb">' + '<section>' + '<div class="hb_expl"><p><span class="unhb" data-incomeid=""><i class="chkbox on"><em></em></i>暂不使用红包</span>' + '<a href="javascript:void(0)" class="hbsrc"><i></i>使用说明</a>' + '</p></div>' + '<div class="hb_container"></div>' + '</section></div>' + '</div>', REDPACKET: '<div class="hb_content" data-incomeid="${incomeId}" data-trueuseamount="${data-trueuseamount}" data-facevalue="${data-facevalue}" data-flag="${data-flag}" data-canUse="${data-canUse}"><div class="list"><div class="choose"><div class="chkbox ${checked}"><i></i></div></div>' + '<div class="list_c ${canUse}">' + '<div class="list_title ${hbbg3}"><p>${rechargeTypeName}</p></div><div class="hb_text">' + '<div class="text1"><h1>${activityName}</h1><p class="ex_text">有效期至 ${validDate}</p><p class="last ${hide}">此红包本单可优惠￥${trueUseAmount}</p></div>' + '<div class="text2"><div class="text2_content"><p>￥<span>${faceValue}</span></p><p class="fullReturn">${fullReturn}</p></div></div></div></div></div></div>', lastIncomeId: ["qqqbh5", "qqhyh5"].indexOf(window.pageInfo.chid) > -1 && !!$DATA_CREATEORDER.productInfo.recommendHongBao && !!$DATA_CREATEORDER.productInfo.recommendHongBao.incomeId ? $DATA_CREATEORDER.productInfo.recommendHongBao.incomeId : "", selectedIncomeId: ["qqqbh5", "qqhyh5"].indexOf(window.pageInfo.chid) > -1 && !!$DATA_CREATEORDER.productInfo.recommendHongBao && !!$DATA_CREATEORDER.productInfo.recommendHongBao.incomeId ? $DATA_CREATEORDER.productInfo.recommendHongBao.incomeId : "", selectedFaceValue: "0", selectedTrueUseAmount: "0", tjObject: slark.clone(TJObject), //深度克隆的TJObject;
												needReload: true, flag: '', init: function () {
															this.page = $(this.TEMPLATE);this._bindEvent();
												}, _bindEvent: function () {
															var _this = this;$('.order-fill', dom).on('click', '.redpackethit', function () {
																		if (_this.needReload) {
																					_this.getRedPacketList();
																		} else {
																					_this.show();
																		}
															}); //.bind(this));
															$(dom).on('click', '.page-content.usehb .hbsrc', function () {
																		if (location.href.indexOf('redpacket=1') == -1) {
																					history.replaceState(null, null, '?redpacket=' + this.selectedIncomeId + '&' + location.search.slice(1));
																		}location.href = "//promotion.elong.com/app/2016/redCashWX/index.html?ref=hotel";
															}.bind(this));$(dom).on('click', '.page-content.usehb .hb_content', this.selectRedPacket.bind(this));$(dom).on('click', '.page-content.usehb .hb_expl .unhb', this.selectRedPacket.bind(this));
												}, getRedPacketList: function () {
															slark.get("h5_createorder").startLoading();var _this = this;var roomNum = parseInt($("#room-number", dom).attr("value"));core.fetch(window.pageInfo.subPath + "api/hongbaolist/", { "key": $DATA_CREATEORDER.cachekey, "roomnum": roomNum, "payType": $DATA_CREATEORDER.payType }, { type: "GET", timeout: 10000 }).then(function (data) {
																		_this.getRedPacketListSuccess(data);
															}, function (error) {
																		_this.getRedPacketListFailed(error);
															});
												}, getRedPacketListSuccess: function (data) {
															slark.get("h5_createorder").stopLoading();if (data.error) {
																		dialog.alert('获取红包列表失败，请重试');
															} else {
																		this.needReload = false;if (!this.selectedIncomeId) {
																					$('.page-content.usehb .hb_expl .chkbox').addClass('on');
																		} else {
																					$('.page-content.usehb .hb_expl .chkbox').removeClass('on');
																		}var listStr = this.genRedPacketList(this.REDPACKET, data.hongbaoList, this.selectedIncomeId);$('.page-content.usehb .hb_container', dom).html(listStr);this.show();
															}
												}, getRedPacketListFailed: function (error) {
															slark.get("h5_createorder").stopLoading();dialog.alert('获取红包列表失败，请重试');
												}, selectRedPacket: function (e) {
															var $target = $(e.currentTarget);this.target = $(e.currentTarget);if ($target.find('.list_c').hasClass('none_c')) return;$('.page-content.usehb .chkbox').removeClass('on');$target.find('.chkbox').addClass('on');this.lastIncomeId = this.selectedIncomeId;this.selectedIncomeId = $target.attr('data-incomeid');this.selectedFaceValue = $target.attr('data-facevalue');this.flag = $target.attr('data-flag');this.canUse = $target.attr('data-canUse');this.selectedTrueUseAmount = $target.attr('data-trueuseamount');if (!this.selectedIncomeId) {
																		this.tjObject.cspot = 'hongbaounselect';
															} else {
																		this.tjObject.cspot = 'hongbaoselect';
															} //满返红包；
															tjMVT.setData(this.tjObject); //打点by cpt ...2016/11/8 张旭
															if (this.lastIncomeId != this.selectedIncomeId) {
																		setTimeout(function () {
																					priceManager.fetchPriceInfo();
																		}, 17);
															}this.hide();
												}, beforeHide: function () {
															if (location.href.indexOf('redpacket=') > -1) {
																		var search = location.search.replace(/redpacket=(\d+)&/, function (item) {
																					return '';
																		});history.replaceState(null, null, search);
															}
												}, genRedPacketList: function (tpl, data, selectedIncomeId) {
															if (data && data.length) {
																		var list = data.map(function (item) {
																					var checked = String(item.incomeId) == selectedIncomeId ? 'on' : '',
																					    fullReturn = !!item.fullReturnRule && !!item.fullReturnRule.description ? item.fullReturnRule.description : '';return tpl.replace('${rechargeTypeName}', item.fullReturnRule === null ? item.rechargeTypeName : "优惠券").replace('${activityName}', item.activityName).replace('${validDate}', item.validDate).replace('${trueUseAmount}', item.trueUseAmount).replace('${faceValue}', item.faceValue).replace('${incomeId}', item.incomeId).replace('${data-trueuseamount}', item.trueUseAmount).replace('${data-facevalue}', item.faceValue).replace('${checked}', checked).replace('${canUse}', !!item.canUse ? '' : 'none_c').replace('${hbbg3}', !!item.canUse ? item.fullReturnRule === null ? '' : 'hbbg8' : 'hbbg3').replace('${fullReturn}', fullReturn).replace('${data-flag}', item.flag).replace('${hide}', !!item.canUse ? '' : 'hide').replace('${data-canUse}', item.canUse);
																		});return list.join('');
															}return '';
												} };PluginManager.add('redPacketList', redPacketList);if (location.search.indexOf('redpacket=') > -1) {
												location.search.match(/redpacket=(\d+)/)[1] ? redPacketList.selectedIncomeId = location.search.match(/redpacket=(\d+)/)[1] : redPacketList.selectedIncomeId = "";redPacketList.getRedPacketList();
									} //这是取消险说明 cpt
									//PluginManager.add("cancleInsuranceInfo",cancleInsuranceInfo);
									cancleInsuranceInfo.init();PluginManager.add("moreDetail", moreDetail);PluginManager.add('zazxbx', zazxbx);PluginManager.add('zgrmcc', zgrmcc);PluginManager.add("pacificInsuranceHotel", pacificInsuranceHotel); //这是取消险的交互 hasInsurance : 0无保险 1有保险
									var insurancesAction = { init: function () {
															$('.cancels .choosewx', dom).off('click').on('click', function () {
																		insurancesAction.clickEvent();
															});
												}, clickEvent: function () {
															if ($('.cancels .choosewx', dom).find('i').hasClass('on')) {
																		priceManager.defaultInsuranceBack = false;;$('.cancels', dom).find('.choosewx i').removeClass('on').attr('data-tj', '{"cspot":"insurancecanceloff"}');$(".addzhe").show();if (priceManager.currencyType == 2) {
																					$(".js_needInsurances_for_GAT").hide();$(".js_needInsurances").hide();$(".js_needNotInsurances_for_GAT").show();
																		} else {
																					$(".js_needInsurances_for_GAT").hide();$(".js_needInsurances").hide();$(".js_needNotInsurances_for_GAT").hide();$(".addzhe").hide();
																		}
															} else {
																		priceManager.defaultInsuranceBack = true;$('.cancels', dom).find('.choosewx i').addClass('on').attr('data-tj', '{"cspot":"insurancecancelon"}'); //与信用住闪住互斥
																		if (creditAndQuick.isSelect && $DATA.isCreditOrFlash && ($DATA.isCreditOrFlash == 1 || $DATA.isCreditOrFlash == 2)) {
																					creditAndQuick.cancel();dialog.alert("很抱歉，目前取消险和闪住不可同时勾选~");
																		} //港币
																		$(".addzhe").show();if (priceManager.currencyType == 2) {
																					$(".js_needInsurances_for_GAT").show();$(".js_needInsurances").hide();$(".js_needNotInsurances_for_GAT").hide();
																		} else {
																					$(".js_needInsurances_for_GAT").hide();$DATA_CREATEORDER.showPayType === 1 ? $(".js_needInsurances").show() : $(".js_needInsurances").hide();$(".js_needNotInsurances_for_GAT").hide();
																		}
															}if ($('.addzhe.bar').children().length === ($('.addzhe.bar').html().match(/display\:\s?none\;?/g) && $('.addzhe.bar').html().match(/display\:\s?none\;?/g).length || -1)) {
																		$('.addzhe.bar').hide();
															} else {
																		$('.addzhe.bar').show();
															}priceManager.isFirstInsurance = true;synPriceInfo();
												} };insurancesAction.init(); //信用住闪住
									if ($DATA.isCreditOrFlash == 1 || $DATA.isCreditOrFlash == 2) {
												creditAndQuick.init(dom, insurancesAction);
									} //内宾或mis更改 交互
									if ($('.clearsb', dom).length > 0) {
												$('.clearsb .btnclose', dom).off('click').on("click", function () {
															$(this).closest('.clearsb').addClass('hide');
												});
									} /** 老客单单有奖 jinming 2017-05-17 start*/oldCustomers.createOrderTipsExec({ lotteryTipTag: $DATA_CREATEORDER.lotteryTipTag || '', lotteryTip: $DATA_CREATEORDER.lotteryTip || '', dom: dom }); /** 老客单单有奖 jinming 2017-05-17 end*/ /** 微信title 优化 */titleManage("h5_createorder");var serviceBack = new friendQaManager.ServiceBack();serviceBack.init(); //异常退出,继续浏览
									abortPlugin = { abortData: null, //存放状态数据
												init: function () {
															if (this.isFirst) return;this.isFirst = true;this.updateAbortData();var that = this;var abortData = this.abortData;var isabort = this.isabort;this.abortData.hotelName = $DATA.hotelName;this.abortData.roomTypeName = $DATA.productInfo.roomTypeName;this.abortData.productName = $DATA.productName;$(".contact-person").off().on("input keyup change", "input.createorder", function () {
																		that.setData("PERSONNAME");
															});$("#contactormobile").on("input keyup change", function () {
																		that.setData("PERSONPHONE", $(this).val());
															});$("#invoice-phone input").on("input keyup change", function () {
																		that.setData("PERSONPHONE2", $(this).val());
															});var shuiwu = $("#invoice-shuiwuId"),
															    //税务
															registerAddress = $("#invoice-registerAddress"),
															    //注册地址
															companyPhone = $("#invoice-companyPhone"),
															    //公司电话
															openbank = $("#invoice-openbank"),
															    //开户银行
															bankId = $("#invoice-bankId"),
															    // 银行账号
															bankId = $("#invoice-bankId"),
															    // 银行账号
															invoicePhone = $("#invoice-phone input"),
															    invoiceContentObj = {},
															    invoiceContentElems = [shuiwu, registerAddress, companyPhone, openbank, bankId];invoiceContentElems.forEach(function (elem) {
																		elem.on("input keyup change", "input", function () {
																					var invoiceContentObj = {};invoiceContentElems.forEach(function (elem) {
																								var key = elem.attr("id");invoiceContentObj[key] = elem.find("input").val();
																					});that.setData("INVOICCONTENT", invoiceContentObj);
																		});
															}); //执行回填标记,目前只有首页异常退出后进入才会执行回填
															if (isabort && abortData) {
																		//回填入住人
																		var personNameList = abortData.personNameList;if (personNameList) {
																					personNameList.forEach(function (val, index) {
																								$(dom).find(".contact-person").find("input.createorder").eq(index).val(val);
																					});
																		} //开具发票开关
																		var flag = abortData.needinvoiceflag,
																		    currentFlag = $("#needinvoiceflag").hasClass("active");if (flag != currentFlag) {
																					$("#needinvoiceflag").click();
																		} //回填发票类型
																		var invoicetype = abortData.invoicetype;if (invoicetype) {
																					selectInvoiceType.setSelectValue(invoicetype);
																		} //回填手机号
																		var personPhone = abortData.personPhone;if (personPhone) {
																					$("#contactormobile").val(personPhone);
																		} //回填电子发票手机号
																		var personPhone2 = abortData.personPhone2;if (personPhone2) {
																					$("#invoice-phone input").val(personPhone2);
																		} //回填发票填写信息
																		var invoiceContent = abortData.invoiceContent;if (invoiceContent) {
																					$.each(invoiceContent, function (key, val) {
																								$("#" + key).find("input").val(val);
																					});
																		}
															}
												}, updateAbortData: function () {
															var abortData = aborting.getAbortData();this.isabort = abortData.url ? slark.getParam("isabort", abortData.url.split('?')[1]) : false;if (!this.abortData) {
																		if (abortData.pageType === 'h5-hotel-createorder') {
																					//同步本地存储数据
																					this.abortData = abortData.params || {};
																		} else {
																					this.abortData = {};
																		}
															}
												}, setData: function (key, val) {
															this.updateAbortData();abortPlugin['_set' + key](val);if (slark.getChannelId() === "wxqbh5") {
																		var curURL = slark.parseUrl();var replaceUrl = slark.replaceUrlParams(curURL, { isabort: 1 });this.abortData.url = replaceUrl;aborting.setAbortData(this.abortData);
															}
												}, _setROOMCOUNT: function (num) {
															this.abortData.roomCount = num;
												}, _setPERSONPHONE: function (val) {
															this.abortData.personPhone = val;
												}, _setPERSONPHONE2: function (val) {
															this.abortData.personPhone2 = val;
												}, _setPERSONNAME: function () {
															var personNameList = [];$(dom).find(".contact-person").find("input.createorder").each(function () {
																		var val = $(this).val() || "";personNameList.push(val);
															});this.abortData.personNameList = personNameList;
												}, _setNEEDINVOICEFLAG: function (flag) {
															this.abortData.needinvoiceflag = flag;if (!flag) {
																		this.setData("INVOICCONTENT", {});this.setData("INVOICTYPE", "");
															}
												}, _setINVOICTYPE: function (type) {
															this.abortData.invoicetype = type;
												}, _setINVOICCONTENT: function (obj) {
															this.abortData.invoiceContent = obj;
												} };createOrder.init({ idCard: idCard, addAddress: addAddress, selectInvoiceType: selectInvoiceType, invoiceForCO: invoiceForCO, loginComponent: loginComponent, redPacketList: redPacketList, specialRequirement: specialRequirement, selectInvoiceTitle: selectInvoiceTitle, selectInvoiceContent: selectInvoiceContent, selectAddress: selectAddress, expressFee: expressFee, priceCalculation: priceCalculation, Common: Common, priceManager: priceManager, createOrderConfirmTpl: createOrderConfirmTpl, aborting: aborting, synPriceInfo: synPriceInfo, replaceBackUrl: replaceBackUrl }, dom); //核对信息；
									// if (core.getMvtResult('218') === '3') {
									//     checkHotelInfo.init(createOrder);
									// }
									// booking 重要信息，是否折叠事件处理
									if ($DATA_CREATEORDER.productInfoStr.isBookingProduct == true) {
												// 展示文本
												var $cText = $('#bookingtext'); // 全部展开按钮区域
												var $btn = $('#bookingbtn'); // 渐隐蒙层
												var $mask = $('#bookingmask');if ($DATA_CREATEORDER.bookingInfo.length > 70) {
															$cText.addClass('text-close'); // 绑定折叠事件
															$('.special-content').on('click', function () {
																		// 展开，折叠 箭头
																		var $i = $($(this).find('i')[0]); // 提示文本（全部展开，折叠
																		var $text = $i.prev();if ($i.hasClass('close')) {
																					$i.removeClass('close');$i.addClass('open');$cText.removeClass('text-close');$mask.hide();$text.html('全部收起');
																		} else {
																					$i.removeClass('open');$i.addClass('close');$cText.addClass('text-close');$mask.show();$text.html('全部展开');
																		}
															});
												} else {
															$btn.hide();$mask.hide();
												}
									}
						} /**
        * new createorder
        * @param {any} dom 
        */function setPageV2(dom) {
									var $DATA = $DATA_CREATEORDER; //异常退出,继续浏览
									var abortPlugin = null;var commonPackage = commonInit($DATA, dom);var singleFrontCheck = commonPackage.singleFrontCheck,
									    loginCheckbox = commonPackage,
									    loginCheckbox,
									    Common = commonPackage.Common,
									    loginComponent = commonPackage.loginComponent,
									    roomRpDetail = commonPackage.roomRpDetail,
									    loginCode = commonPackage.loginCode,
									    addGuide = commonPackage.addGuide,
									    addClause = commonPackage.addClause,
									    newUser58 = commonPackage.newUser58; //同步取消险和快递费的价格计算
									synPriceInfo = function () {
												if (!priceManager) {
															return;
												}var totalCount = creditAndQuick.isSelect ? priceManager.showPriceRmbWithDeposit : priceManager.showPriceRmb,
												    insuranceCount = priceManager.insurances && priceManager.insurances[0].insurancePriceC || 0,
												    expressCount = invoiceForNewCO.invoicedata && invoiceForNewCO.invoicedata.delieverFeeType === 1 && invoiceForNewCO.invoicedata.delieverFeeAmount || 0,
												    //expressFee.delieverType===1,等于1是金额，2是积分
												priceInfoStr = ''; // 2017-08-15 如果是到店担保 勾选了取消险，那么底部 #wborderprice 里不显示含保险的金额及含保险，而在 .addzhe.bar 里显示明细
												if ($('.cancels').length > 0 && $('.cancels .choosewx i').hasClass('on')) {
															if (!priceManager.isVouch) {
																		totalCount = add(totalCount, insuranceCount);priceInfoStr += '含保险';
															}
												} else if ($(".order_sz").length > 0 && $(".order_sz i").hasClass("on")) {
															//信用住
															if ($DATA.depositMoney > 0) {
																		// totalCount = add(totalCount, $DATA.depositMoney);
																		priceInfoStr += '含压金';
															}
												} // if ($('.order-invoice').length) {
												//专票或纸质发票需要加快递费用  //selectInvoiceType.value 0纸质2专票  //$('#express-fee').attr('data-value') == 10
												if (!$DATA_CREATEORDER.canUserPreInvoice && invoiceForNewCO.invoicedata !== null && invoiceForNewCO.invoicedata.delieverFeeType === 1 && (invoiceForNewCO.invoicedata.invoiceType == 0 || invoiceForNewCO.invoicedata.invoiceType == 2)) {
															totalCount = add(totalCount, expressCount);!!priceInfoStr ? priceInfoStr += '、邮费' : priceInfoStr += '含邮费';
												} // }
												if (!!priceInfoStr) {
															$('.price_tab .insurances-expressfree').removeClass('hide');$('.price_tab .insurances-expressfree .colorred').text(priceInfoStr);
												} else {
															$('.price_tab .insurances-expressfree').addClass('hide');
												}$('#wborderprice').html(totalCount); //给核对信息添加参数
												checkHotelInfo.hotelinfo = { hotelName: $DATA_CREATEORDER.hotelName, // 酒店名称
															RoomTypeName: $DATA_CREATEORDER.productInfo.roomTypeName, // 房型名称
															roomcount: $('#room-number').attr('data-value'), // 房间数
															indate: $DATA_CREATEORDER.checkinCalendarStr, // 入店日期
															outdate: $DATA_CREATEORDER.isCanBeExtended && !!easyDelayBack && !!easyDelayBack.checkHotelInfo_outdate ? easyDelayBack.checkHotelInfo_outdate : $DATA_CREATEORDER.checkoutCalendarStr, // 离店日期
															price: totalCount, // 金额
															isVouch: priceManager.isVouch, // 是否担保
															payType: $DATA_CREATEORDER.payType, showPayType: $DATA_CREATEORDER.showPayType, // 2预付、1担保、0现付&&非担保
															showCouponText: priceManager.showCouponText, // 返现文案
															returnMoney: priceManager.data.couponText ? priceManager.data.couponText.match(/[-+]?[0-9]*\.?[0-9]+/g) ? priceManager.data.couponText.match(/[-+]?[0-9]*\.?[0-9]+/g)[0] : '' : '' //  返现金额；
												};
									};roomNumber = $("#js_room_number", dom).slideSelector({ title: '选择房间数量', data: function () {
															$DATA.roomNumberSelections = JSON.parse($DATA.roomNumberSelections);for (var i = 0; i < $DATA.roomNumberSelections.length; i++) {
																		$DATA.roomNumberSelections[i].text += core.getLanguage('roomUnit', $LANG_CREATEORDER);if ($DATA.roomNumberSelections[i].assure == 1) {
																					$DATA.roomNumberSelections[i].text += " (" + core.getLanguage('assuretext', $LANG_CREATEORDER) + ")";
																		}
															} // 增加10间以上请拨打客服电话预订服务
															// 电话号码写死：400-6661166
															var lastRoomCount = $DATA.roomNumberSelections.length > 0 && parseInt($DATA.roomNumberSelections[$DATA.roomNumberSelections.length - 1].value);if (lastRoomCount >= 10) {
																		$DATA.roomNumberSelections.push({ assure: 0, checked: 0, text: '<a href="tel:400-6661166">10间以上请拨打客服电话预订</a>', value: lastRoomCount + 1 });
															}return $DATA.roomNumberSelections;
												}(), initValue: Common.getCheckedItem($DATA.roomNumberSelections), theFirstTime: "0", isExtenedStay: false, assureFlag: 0, isFirst: true, //担保房型时同步时不显示取消文案，理由是后端已经处理过文案。
												callback: function (result) {
															// 异常处理：当房间数 > 10时，添加的客服预订电话
															if (!result) return;$("#room-number", dom).html(result.text);$("#room-number", dom).attr("data-value", result.value); // $("#room-number", dom).css("width", 15 * $("#room-number", dom).html().length + "px");
															//发票备注显示房间数
															$(".voucher_bei .voucher-room-count").text(result.text); //增加删除房间数量
															var room_length = $(".contact-person li", dom).length;room_number = result.value;var room_judgment = room_number - room_length;if (room_judgment == 0) {
																		room_judgment = room_number;
															}if (room_judgment > 0) {
																		for (var i = room_length + 1; i <= room_number; i++) {
																					if ($DATA_CREATEORDER.needEnName != '1') {
																								var html = '<li class="bdb"><label for="cusname' + i + '"></label><div class="label">入住人</div>';html += '<div class="content list-input">';html += '<input type="text" maxlength="20" class="createorder cert-type" name="customernames" placeholder="姓名，每间填1人" id="cusname' + i + '"></div></li>'; //' + core.getLanguage('checkinprompt2', $LANG_CREATEORDER,[i]) + ' id="cusname' + i + '"></div></li>'
																					} else {
																								// todo ...
																								var html = '<li class="bdb"><div class="label">入住人</div> <div class="content list-input eng_name"><div><input type="text" class="cert-type" id="" placeholder="姓(英文)"></div><span></span><div><input type="text" class="cert-type" id="" placeholder="名(英文)"></div> </div> </li>';
																					}$(".contact-person ul", dom).append(html);
																		}
															} else if (room_judgment < 0) {
																		var room_del = Math.abs(room_judgment);for (var i = room_length; i >= room_number; i--) {
																					$(".contact-person li", dom).eq(i).remove();
																		}
															}roomNumber.assureFlag = result.assure; //取消变更规则
															//showPayType 1==担保  2==预付  0==到店付非担保
															if ($DATA.showPayType == 1 && !roomNumber.config.isFirst) {
																		//支付类型异步时
																		if (result.assure == 1 || roomReservation.assureFlag == 1) {
																					//是否需要担保
																					$(".cancle-desc", dom).hide();$(".cancle-desc2", dom).show(); //免费取消存在
																					// 刺激性文案之免费取消
																					if ($('#odr_info_tip p.freeCancel', dom).length == 1 && $('#odr_info_tip p', dom).length == 1) {
																								$('.freeCancel', dom).hide();$('#odr_info_tip', dom).hide();
																					} else {
																								$('.freeCancel', dom).hide();
																					}roomRpDetail.freecancel = false; //房型详情中是否存在免费取消文案；
																		} else {
																					//页面底下的取消变更规则
																					$(".cancle-desc", dom).show();$(".cancle-desc2", dom).hide(); //免费取消不存在
																					// 刺激性文案之免费取消
																					if ($('#odr_info_tip p.freeCancel', dom).length == 1 && $('#odr_info_tip p', dom).length == 1) {
																								$('.freeCancel', dom).show();$('#odr_info_tip', dom).show();
																					} else {
																								$('.freeCancel', dom).show();
																					}roomRpDetail.freecancel = true; //房型详情中是否存在免费取消文案；
																		}
															} //异步获取数据
															setTimeout(function () {
																		redPacketList.needReload = true;priceManager.fetchPriceInfo(); //异常退出,继续浏览 -设置房间数量, 再次进入如果房间数>客订房间数,展示异常页面
																		if (abortPlugin) {
																					abortPlugin.setData("ROOMCOUNT", result.text.charAt(0));
																		}
															}, 0); // 立即确认
															if ($DATA_CREATEORDER.confirmNow == 'true') {
																		var min = 4;if ($DATA_CREATEORDER.onTimeConfirmAmount != -1) {
																					min = Math.min($DATA_CREATEORDER.onTimeConfirmAmount, 4);
																		}if (room_number > min) {
																					// 立即确认文案
																					if ($('#odr_info_tip p.immediate', dom).length == 1 && $('#odr_info_tip p', dom).length == 1) {
																								$('.immediate', dom).hide();$('#odr_info_tip', dom).hide();
																					} else {
																								$('.immediate', dom).hide();if ($('#odr_info_tip p', dom).length === 2) {
																											$('#odr_info_tip p', dom).eq(0).css('margin-bottom', '0px');
																								}
																					}roomRpDetail.immediate = false; //房型详情中是否存在立即确认
																		} else {
																					if ($('#odr_info_tip p.immediate', dom).length == 1 && $('#odr_info_tip p', dom).length == 1) {
																								$('.immediate', dom).show();$('#odr_info_tip', dom).show();
																					} else {
																								$('.immediate', dom).show();if ($('#odr_info_tip p', dom).length === 2) {
																											$('#odr_info_tip p', dom).eq(0).css('margin-bottom', '12px');
																								}
																					}roomRpDetail.immediate = true; //房型详情中是否存在立即确认；
																		}
															}roomNumber.config.isFirst = false; //input add clear btn 不友好，本次迭代后 重写 clearInput plugin
															// 增加click事件绑定
															var clearInputList = '.contact-person input[type="text"], #contactormobile, #contactoremail, #person-id';clearInput.init(dom, clearInputList, { top: 4 }); //信用住闪住
															if (result.checked != 1 && creditAndQuick.isSelect) {
																		creditAndQuick.cancel();dialog.alert('【闪住】仅支持预订1间（或预订多天每天1间），更改房间数则无法享受【闪住】');
															}
												} });PluginManager.add("roomnumber", roomNumber); //脚本专用id名
									var roomReservation = $("#js_room_reservation", dom).slideSelector({ describe: "14点前到店可能需要等待", title: '房间保留至', isFirst: true, //担保文案展示问题，页面同步渲染时前端不需要做处理
												data: function () {
															$DATA.roomKeepDate = JSON.parse($DATA.roomKeepDate);for (var i = 0, time; i < $DATA.roomKeepDate.length; i++) {
																		time = $DATA.roomKeepDate[i];if (time.day > 0) {
																					time.text = time.day + "日 " + time.text + " 之前";
																		}if (time.needVouch == 1) {
																					time.text += " " + core.getLanguage('assuretext', $LANG_CREATEORDER);
																		}
															}return $DATA.roomKeepDate;
												}(), initValue: Common.getCheckedItem($DATA.roomKeepDate), assureFlag: 0, callback: function (result) {
															if ($("#room-reservation", dom) && $("#room-reservation", dom).length > 0) {
																		$("#room-reservation", dom).html(result.text); // $("#room-reservation", dom).css("width", 12.5 * $("#room-reservation", dom).val().length + "px");
															}$("#hidarriveTime", dom).val(result.value.split(',')[0]);roomReservation.assureFlag = result.needVouch; //取消变更规则
															if ($DATA.showPayType == 1 && !roomReservation.config.isFirst) {
																		if (result.needVouch == 1 || roomNumber.assureFlag == 1) {
																					//保留至时间触发担保；房量触发担保
																					$(".cancle-desc", dom).hide();$(".cancle-desc2", dom).show(); // 刺激性文案之免费取消
																					if ($('#odr_info_tip p.freeCancel', dom).length == 1 && $('#odr_info_tip p', dom).length == 1) {
																								$('.freeCancel', dom).hide();$('#odr_info_tip', dom).hide();
																					} else {
																								$('.freeCancel', dom).hide();
																					}roomRpDetail.freecancel = false; //房型详情中是否存在免费取消文案；
																		} else {
																					$(".cancle-desc", dom).show();$(".cancle-desc2", dom).hide(); // 刺激性文案之免费取消
																					if ($('#odr_info_tip p.freeCancel', dom).length == 1 && $('#odr_info_tip p', dom).length == 1) {
																								$('.freeCancel', dom).show();$('#odr_info_tip', dom).show();
																					} else {
																								$('.freeCancel', dom).show();
																					}roomRpDetail.freecancel = true; //房型详情中是否存在免费取消文案；
																		}
															}roomReservation.config.isFirst = false;
												}, confirm: function () {
															priceManager.fetchPriceInfo();
												} });PluginManager.add("roomreservation", roomReservation);var areaCode = $("#js_area_code", dom).slideSelector({ title: '选择手机号地区', data: $DATA.areaCode, initValue: Common.getCheckedItem($DATA.areaCode), callback: function (result) {
															for (var i = 0; i < $DATA.areaCode.length; i++) {
																		if (result.value == $DATA.areaCode[i].value) {
																					$DATA.contactCodeRegex = $DATA.areaCode[i].regex;break;
																		}
															}$(".area-code", dom).html("+" + (result.value == "" ? "86" : result.value));$(".area-code", dom).attr("data-value", result.value);
												} });PluginManager.add("areacode", areaCode); //cpt ... 特殊要求star---- specialRequirement  大双床的时候展示
									if ($DATA_CREATEORDER.specialRequirement.length > 0 && $DATA_CREATEORDER.additionList.length > 0 && !!$DATA_CREATEORDER.additionList) {
												//非转让房
												var __isBigOrDoubleBed__ = false;$DATA_CREATEORDER.additionList.forEach(function (item, index) {
															if (item.Content === "大/双床" && !__isBigOrDoubleBed__) {
																		__isBigOrDoubleBed__ = true;
															}
												});if (__isBigOrDoubleBed__) {
															var specialRequirement = $('#js_specialrequirement', dom).slideSelector({ describe: "需求将提交给酒店，但无法保证100%满足", title: '特殊要求', data: $DATA_CREATEORDER.specialRequirement, initValue: Common.getCheckedItem($DATA_CREATEORDER.specialRequirement), isFirst: false, cspot: '', params: '', callback: function (result) {
																					$('#specialrequirement', dom).html(result.text);if (!!specialRequirement.isFirst) {
																								switch (result.text) {case "无需求":
																														specialRequirement.cspot = 'requirenull';break;case "尽量安排大床":
																														specialRequirement.cspot = 'requirebed';break;case "尽量安排双床":
																														specialRequirement.cspot = 'requiretwin';break;case "一定安排大床":
																														specialRequirement.cspot = 'requiremustbed';break;case "一定安排双床":
																														specialRequirement.cspot = 'requiremusttwin';break;}tjMVT.setData({ cspot: specialRequirement.cspot, et: "click" });
																					}specialRequirement.isFirst = true;specialRequirement.params = result.value;
																		} });PluginManager.add('specialRequirement', specialRequirement);
												}
									} //cpt ... 特殊要求end ----
									var addPeoName = { TEMPLATE: '<div class="add_people  page-plugin"> <ul> ' + ($DATA_CREATEORDER.needEnName == 0 ? '<li class="add_name_wrap "> <span>中文姓名</span> <div><input type="text" name="" class="cn_name" id="cn_name" placeholder="请填写入住人姓名"></div> </li>' : '<li class="add_name_wrap bdb"> <span>英文姓</span> <div><input id="lastName" type="text" name="" class="cn_name" placeholder="First name"></div> </li> <li class="add_name_wrap"> <span>英文名</span> <div><input id="firstName" type="text" name="" class="cn_name" placeholder="Last name"></div> </li>') + '</ul> <div class="tip">请输入真实入住人，以保证后续正常审核、返现。</div> <div class="btn_bg"> <div class="btn_confirm"> 确定 </div> </div> </div>', init: function () {
															this.page = $(this.TEMPLATE).appendTo(core.getActiveLayer());if ($DATA_CREATEORDER.needEnName == 0) {
																		validate.addFilter($("#cn_name", this.page), { rq: true, regex: $DATA.customerCNRule, //msg: "请您输入英文名称或中文拼音，并务必保证和有效证件上姓名一致，以保证正常入住。"
																					msg: "请输入正确的入住人姓名" });
															} else {
																		validate.addFilter($("#firstName,#lastName", this.page), { rq: true, msg: "请输入正确的入住人姓名", regex: "^[a-zA-Z]{1,50}$" });
															}this.bindEvent();
												}, beforeShow: function () {
															clearInput.init(dom, this.page.find('input'), { top: 4 }); // 
												}, afterShow: function () {
															if ($('html').hasClass('ios')) {
																		addPeoName.page.css('position', 'fixed');
															}$('input', this.page).eq(0).focus();
												}, afterHide: function () {
															this.page.find('input').val('').blur(); // addPeople.noPeopleShow();
															document.title = "选择入住人";
												}, _validate: function () {
															var result;if ($DATA_CREATEORDER.needEnName == "1") {
																		result = $('#firstName', this.page).validate({ report: function (result) {
																								result.msgs.length > 0 ? dialog.alert(result.msgs[0]) : null;
																					} });if (!result.isError) {
																					result = $('#lastName', this.page).validate({ report: function (result) {
																											result.msgs.length > 0 ? dialog.alert(result.msgs[0]) : null;
																								} });
																		}
															} else {
																		result = $('#cn_name', this.page).validate({ report: function (result) {
																								result.msgs.length > 0 ? dialog.alert(result.msgs[0]) : null;
																					} });
															}return !result.isError;
												}, _addPerson: function (name) {
															if ($DATA.loginFlag) {
																		this._addusualcustomer(name);
															} else {
																		addPeople.personData.push($DATA_CREATEORDER.needEnName == '1' ? name.lastname + "/" + name.firstname : name.name);Common.setLocalData(addPeople.needEnName ? 'newEnPersonList' : "newPersonList", addPeople.needEnName ? name.lastname + "/" + name.firstname : name.name, ',', 10);$('.per-list', addPeople.page).prepend(addPeople.TEMPLATE.ITEM.replace('${name}', $DATA_CREATEORDER.needEnName == '1' ? name.lastname + "/" + name.firstname : name.name).replace('${add_eidt_peop}', "").replace('${checked}', addPeople.roomNum - $('.per-list li.checked', addPeople.page).length > 0 ? "checked" : ""));this.hide();addPeople.numberConut();addPeople.noPeopleShow();
															}
												}, _hasDuplicatedName: function (paramsName) {
															for (var i = 0; i < addPeople.personData.length; i++) {
																		if ($DATA_CREATEORDER.needEnName == '0') {
																					if (paramsName.name === addPeople.personData[i]) {
																								return true;
																					}
																		} else {
																					if (paramsName.lastname + "/" + paramsName.firstname == addPeople.personData[i]) {
																								return true;
																					}
																		}
															}return false;
												}, bindEvent: function () {
															var _this = this; // 点击确定添加入住人事件；
															$('.btn_confirm', this.page).on('click', function () {
																		//先进行校验
																		tjMVT.setData({ cspot: 'addname' });if (!_this._validate()) {
																					return false;
																		}var input = _this.page.find('.add_name_wrap input'),
																		    lastname,
																		    firstname,
																		    paramsName = { mode: $DATA_CREATEORDER.needEnName, name: input.val().trim() };if ($DATA_CREATEORDER.needEnName == 1) {
																					lastname = _this.page.find('#lastName').val().trim();firstname = _this.page.find('#firstName').val().trim();delete paramsName.name;paramsName.firstname = firstname;paramsName.lastname = lastname;
																		}if (!paramsName.name && $DATA_CREATEORDER.needEnName == '0' || $DATA_CREATEORDER.needEnName == '1' && (!paramsName.firstname || !paramsName.lastname)) {
																					dialog.alert(core.getLanguage('chooseperson.emptyname', $LANG_CREATEORDER));return false;
																		}if (_this._hasDuplicatedName(paramsName)) {
																					Common.recordTextLayer('该姓名已存在', true, 2000);return false;
																		}_this._addPerson(paramsName);
															});
												}, _addusualcustomer: function (name) {
															var _this = this;core.fetch(window.pageInfo.subPath + "api/addcustomer/", name, { timeout: 10000, type: "POST", //url: window.pageInfo.subPath + "api/addcustomer/",
																		dataType: "json" // data: {
																		//     "name": name
																		// },
															}).then( //success: 
															function (result) {
																		switch (result.ErrorCode) {case "NET_TIMEOUT":
																								dialog.alert(core.getLanguage('apitimeout', $LANG_CREATEORDER));break;case "API_ERROR":
																								dialog.alert(core.getLanguage('apierror', $LANG_CREATEORDER));break;case "SYS_ERROR":
																								dialog.alert(core.getLanguage('apierror', $LANG_CREATEORDER));break;case "SAVE_FAILED":
																								dialog.alert(core.getLanguage('addcustomer.savefailed', $LANG_CREATEORDER));break;default:
																								$('.per-list', addPeople.page).prepend(addPeople.TEMPLATE.ITEM.replace('${name}', $DATA_CREATEORDER.needEnName == '1' ? name.lastname + "/" + name.firstname : name.name).replace('${add_eidt_peop}', "").replace('${checked}', addPeople.roomNum - $('.per-list li.checked', addPeople.page).length > 0 ? "checked" : ""));addPeople.numberConut();addPeople.personData.push($DATA_CREATEORDER.needEnName == '1' ? name.lastname + "/" + name.firstname : name.name);_this.hide();addPeople.noPeopleShow();break;}
															});
												} };var addPeople = { TEMPLATE: { BODY: '<div class="new_sec_per page-plugin"> <div class="page-content"><div class="per_list bian_css"> <div class="bdb titles more_per"> <span>还需选择<em>1</em>人<span> </div> <ul class="per-list"> <p class=" bdt add_new_btn tjclick" data-tj={"cspot":"addname"}><span>+</span>新增入住人</p> </ul> </div> <div class="add_none" > <div class="addper_btn"><div class="no_bg"></div> <p>您没有常用旅客信息</p> <div class="no_btn u_btn tjclick" data-tj={"cspot":"addname"}><span>+</span>新增入住人</div></div> </div> </div> <div class="bar add_btn tjclick" data-tj={"cspot":"addnameconfirm"}><p>确定</p></div> </div>', ITEM: '<li class="${add_eidt_peop} ${checked} "><p class="bdb"><span>${name}</span><span class="checkbox"></span></p></li>', showCase: '<div class="mask_invoice mvt_268 show_case hide" ><div class="invoice-layer exp"> <h1 class="bdb">入住人姓名填写说明<i class="closed"></i></h1><ul>${case}</ul> </div> </div>', caseText: { 0: '<li> <span>1、</span><p>预订国内酒店需要提供入住人中文姓名，该姓名需与入住时所持证件完全一致</p> </li> <li> <span>2、</span><p>中文姓名中不能包含英文字母</p> </li>', 1: '<li> <span>1、</span><p>预订港澳台酒店，请输入英文名称或中文拼音</p> </li> <li> <span>2、</span><p>务必保证和有效证件上的姓名一致，以保证正常入住，如李明为li/ming</p> </li>' } }, personData: [], roomNum: 0, init: function () {
															this.page = $(this.TEMPLATE.BODY);$(this.TEMPLATE.showCase.replace('${case}', this.TEMPLATE.caseText[$DATA_CREATEORDER.needEnName])).appendTo(core.getActiveLayer());this.page.appendTo(core.getActiveLayer());this._getPersonData();var personListContainer = $('.per-list', this.page);for (var i = 0; i < this.personData.length; i++) {
																		if (!!this.personData[i]) {
																					personListContainer.prepend(this.TEMPLATE.ITEM.replace('${name}', this.personData[i]).replace('${add_eidt_peop}', '').replace('${checked}', ''));
																		}
															}var cusname = Common.getLocalData($DATA_CREATEORDER.needEnName == '1' ? "newEnPersonList" : "newPersonList", ",", 1);var userName = $DATA.loginFlag == 0 ? "" : $DATA_CREATEORDER.userName.indexOf('/') > 0 ? "" : $DATA_CREATEORDER.userName;if ($DATA_CREATEORDER.needEnName != '1') {
																		//英文名不去回填
																		$("#cusname1").val(!!cusname && cusname.length > 0 ? cusname[0].text : userName);
															} else {
																		$('.eng_name').find('input').eq(0).val(!!cusname && cusname.length > 0 && cusname[0].text.indexOf('/') > 0 ? cusname[0].text.split('/')[0] : "");$('.eng_name').find('input').eq(1).val(!!cusname && cusname.length > 0 && cusname[0].text.indexOf('/') > 0 ? cusname[0].text.split('/')[1] : "");
															} // // 分销部分渠道去掉头部；确定按钮下移；
															// if ( $DATA_CREATEORDER.customization && ( ($DATA_CREATEORDER.customization.checkinperson && $DATA_CREATEORDER.customization.checkinperson.btnSetBottom) || ($DATA_CREATEORDER.customization.createorder && $DATA_CREATEORDER.customization.createorder.noHeader)) ) {
															//     this.page.addClass('qq_style');
															//     $('.per-list', this.page).after('<div class="btn_bg"><div class="qqbutton_style submit">确定</div></div>');
															// }
															this._bindEvent();
												}, beforeShow: function (num) {
															this.roomNum = num;$(".per-list li ", this.page).removeClass('checked'); // 默认添加 已经填写的名称；
															var contactPersonList = $DATA_CREATEORDER.needEnName == '1' ? $('.contact-person li', dom) : $('.contact-person li', dom).find("input");var add_eidt_peop = "";for (var i = 0; i < contactPersonList.length; i++) {
																		if ($DATA_CREATEORDER.needEnName != '1' && $(contactPersonList[i]).val().trim() !== "") {
																					add_eidt_peop += this.TEMPLATE.ITEM.replace('${name}', $(contactPersonList[i]).val().trim()).replace('${add_eidt_peop}', 'add_eidt_peop').replace('${checked}', 'checked');
																		} else if ($DATA_CREATEORDER.needEnName == '1' && $(contactPersonList[i]).find('input').eq(0).val().trim() !== "" && $(contactPersonList[i]).find('input').eq(1).val().trim() !== "") {
																					add_eidt_peop += this.TEMPLATE.ITEM.replace('${name}', $(contactPersonList[i]).find('input').eq(0).val().trim() + "/" + $(contactPersonList[i]).find('input').eq(1).val().trim()).replace('${add_eidt_peop}', 'add_eidt_peop').replace('${checked}', 'checked');
																		}
															};if (add_eidt_peop) $(add_eidt_peop).prependTo($('.per-list', this.page));this.noPeopleShow();this.numberConut();
												}, numberConut: function () {
															this.roomNum == 1 ? this.page.addClass('no_per_num') : this.page.removeClass('no_per_num');$('.more_per em', this.page).html(this.roomNum - $('.per-list li.checked').length);
												}, noPeopleShow: function () {
															$('.per-list li', this.page).length > 0 ? this.page.removeClass('no_per_conent') : this.page.addClass('no_per_conent');
												}, afterShow: function () {
															$('.per-list').scrollTop(1);
												}, afterHide: function () {
															$('.per-list .add_eidt_peop', this.page).remove(); // this.page.find('input').val('').blur();
												}, _getPersonData: function () {
															if ($DATA.loginFlag) {
																		this.personData = JSON.parse($DATA.customerNames || "[]");
															} else {
																		var dataString = localStorage.getItem($DATA_CREATEORDER.needEnName == '1' ? "newEnPersonList" : 'newPersonList');if (!!dataString) {
																					var tmp = dataString.split(',');this.personData = tmp.length > 0 ? tmp.reverse() : [];
																		}
															}
												}, _bindEvent: function () {
															var _this = this; //入住人说明文案
															$('.show_case .invoice-layer').click(function (e) {
																		e.stopPropagation();
															});$('.contact-person .name_instruction', dom).on('click', function () {
																		$('.show_case', dom).removeClass('hide');$('html,body').css("overflow", "hidden");
															});$('.show_case .closed,.show_case', dom).click(function (e) {
																		$('.show_case', dom).addClass('hide');$('html,body').css('overflow', '');
															}); //  跳转增加入住人二级弹层
															$('.add_new_btn,.addper_btn .no_btn', this.page).on('click', function () {
																		addPeoName.show();
															}); //选择入住人
															$('.per-list', this.page).on('click', 'li', function () {
																		$(this).toggleClass('checked');if ($('.per-list li.checked', _this.page).length > _this.roomNum && _this.roomNum != 1) {
																					$(this).removeClass('checked');dialog.alert(core.getLanguage('chooseperson.bottomwords', $LANG_CREATEORDER));return false;
																		}if (_this.roomNum == 1) {
																					$(this).siblings('li').removeClass('checked');
																		}_this.numberConut();
															}); //确认选择
															$('.add_btn', this.page).on('click', function () {
																		var contactPersonList = $DATA_CREATEORDER.needEnName == '1' ? $('.contact-person li', dom) : $('.contact-person li', dom).find("input");for (var i = 0; i < contactPersonList.length; i++) {
																					var liText = $('.per-list li.checked ', _this.page).eq(i).find('span').text();if ($DATA_CREATEORDER.needEnName == '1') {
																								$(contactPersonList[i]).find('input').eq(0).val(!!liText ? liText.split('/')[0] : "");$(contactPersonList[i]).find('input').eq(1).val(!!liText ? liText.split('/')[1] : "");
																					} else {
																								$(contactPersonList[i]).val(liText);
																					}
																		}_this.hide();
															}); //插件入口绑定
															$('.add-person-button', dom).on('click', function () {
																		var num = Number($('#room-number', dom).attr("data-value"));num = isNaN(num) ? 1 : num;addPeople.show(num);
															});
												} };PluginManager.add("addPeople", addPeople);PluginManager.add("addPeoName", addPeoName);if ($DATA_CREATEORDER.invoiceAtElong === 1) {
												// 是否可以开发票，1 表示支持开发票 且非预约发票
												PluginManager.add('invoiceForNewCO', invoiceForNewCO);invoiceForNewCO.afterHide = function () {
															if (invoiceForNewCO.isSubmitByButton === true) {
																		//说明不是从发票填写页的完成按钮回来的， 而从手机回退的 , 并且发票信息也没有输入完过
																		// invoiceForNewCO.needInvoice = false;
																		// invoiceForNewCO.invoiceItemInit();
																		// invoiceForNewCO.domObj.invoiceSwitch.removeClass("on");
																		synPriceInfo();
															}
												};invoiceForNewCO.domObj.invoiceH1Tip.addClass("hide");invoiceForNewCO.domObj.invoiceRedTip.hide();invoiceForNewCO.domObj.elecInvoiceTip.hide();invoiceForNewCO.domObj.invoiceElongTip.hide(); //}
												//else if($DATA_CREATEORDER.canUserPreInvoice){//支持预约发票
												// $(".js_invoice").find(".selected").find("span").html("发票由酒店提供，支持在线预约");
												// PluginManager.add("entryInvoiceManager",entryInvoiceManager);
												// entryInvoiceManager.domObj.postType.hide();
												// entryInvoiceManager.domObj.postAddress.hide();
												// entryInvoiceManager.domObj.invoiceRemark.hide();
									} else {
												invoiceForNewCO.needInvoice = false; // 标识用户是否选择开发票
												$(".js_invoice").find(".bill").html("如需发票，请到酒店前台索取");$(".js_invoice").find(".selected").find("i").remove();$(".js_wxts").addClass("hide");$(".invoiceRedTip").hide();$("#invoice-elong").hide();$("#einvoice-tip").hide();
									} //手机提交订单
									$(dom).on('click', '#mobilesubmit', function (e) {
												if ($(e.target).hasClass('el_check_info')) return;createOrder.createOrderPostV2({ _from: 'mobilesubmit' });
									}); //pad提交订单
									$(dom).on('click', '#padsubmit', function () {
												createOrder.createOrderPostV2();
									});var idCard = { //任一入住人身份证
												IDCardCheckResult: false, $checkIdCard: null, init: function () {
															if ($('.order-occupancy.order-occupancy1 .js_check_IdCard', dom).length > 0) {
																		this.$checkIdCardbtn = $('.order-occupancy.order-occupancy1 .js_check_IdCard', dom);this.$checkIdCard = $('.order-occupancy.order-occupancy1 .js_check_IdCard.id-ico', dom);this.$contactoridcard = $("#person-id", dom);this.$clearInput = $(".person-identify .clear-input", dom);this.$checkIdCard.addClass("invalid");this.$clearInput.css({ "z-index": "2100", "right": "30px" }).hide();idCard.bindEvent();
															}
												}, bindEvent: function () {
															var _this = this;_this.$checkIdCardbtn.on("click", function () {
																		tjMVT.setData({ "et": "click", "cspot": "checkidnumber" });var val = $("#person-id").val();if (_this.jsCheckIDCard()) {
																					return;
																		}_this.checkIDCard(val);
															});_this.$contactoridcard.off("focus keyup input").on("focus keyup input", function () {
																		if (this.value.length === 0) {
																					_this.$checkIdCard.addClass("invalid");_this.$clearInput.hide();_this.$contactoridcard.css('padding-right', '0px');
																		} else {
																					_this.$checkIdCard.removeClass("invalid");_this.$clearInput.show();_this.$contactoridcard.css('padding-right', '24px');
																		}
															});_this.$clearInput.off("click").on("click", function () {
																		_this.$contactoridcard.val("");_this.$checkIdCard.addClass("invalid");_this.$clearInput.hide();_this.$contactoridcard.css('padding-right', '0px');_this.$contactoridcard.focus();
															});_this.$clearInput.off("touchstart").on("touchstart", function () {
																		_this.$contactoridcard.val("");_this.$clearInput.hide();_this.$contactoridcard.css('padding-right', '0px');_this.$checkIdCard.addClass("invalid");
															});
												}, checkIDCard: function (idcard) {
															var _this = this;slark.get("h5_createorder").startLoading();_this.$checkIdCard.addClass("invalid");core.fetch(window.pageInfo.subPath + "api/verifyIdentity/", { "checkindate": core.getCookie('indate'), "checkoutdate": core.getCookie('outdate'), "hotelId": $DATA_CREATEORDER.hotelId, "identity": idcard, "key": $DATA_CREATEORDER.cachekey }, { type: "POST", timeout: 2000, ataType: "json" }).then(function (data) {
																		slark.get("h5_createorder").stopLoading();_this.$checkIdCard.removeClass("invalid");if (data.error === false) {
																					_this.IDCardCheckResult = true;toast.show("身份证校验通过");
																		} else {
																					_this.IDCardCheckResult = false;dialog.alert(data.errorMessage === null ? "校验错误，请您核对身份证后再试" : data.errorMessage);
																		}
															}, function () {
																		_this.$checkIdCard.removeClass("invalid");slark.get("h5_createorder").stopLoading();toast.show("身份证校验通过"); // 接口2s后超时，也返回成功文案--张旭
															});
												}, jsCheckIDCard: function () {
															var flag = false;var $contactoridcard = $("#person-id", dom);var contactoridcard = null;if ($contactoridcard.length > 0) {
																		contactoridcard = $contactoridcard.val();if (contactoridcard.length != 15 && contactoridcard.length != 18) {
																					dialog.alert("身份证号码长度应为15位或18位");flag = true; //return;
																		} else if (contactoridcard.length == 15) {
																					if (!/^\d{15}$/.test(contactoridcard)) {
																								//if (!(/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(contactoridcard))){
																								dialog.alert("请输入正确的身份证号");flag = true; //return;
																					}
																		} else if (contactoridcard.length == 18) {
																					//if (!(/^(\d{18}$|^\d{17}(\d|X|x))$/.test(contactoridcard))) {
																					if (!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(contactoridcard)) {
																								dialog.alert("请输入正确的身份证号");flag = true; //return;
																					}
																		}
															}return flag;
												} };huaZhuBotaoManager.init(idCard, $DATA); /**
                                                        * [priceManager 动态获取价格]
                                                        * @type {Object}
                                                        */var priceManager = { data: {}, ajaxWaittingFlag: true, isFirstInsurance: false, showPriceRmb: null, showPriceRmbWithDeposit: null, showPriceRmbWithInsurance: null, hasInsurance: null, defaultInsuranceBack: null, //api接口该字段已经废弃
												recommendHongBao: $DATA_CREATEORDER.priceInfo.recommendHongBao, isVouch: 0, //是否担保（包括房量担保或者到店时间担保）
												fetchPriceInfo: function () {
															var params = {};params["key"] = $DATA_CREATEORDER.cachekey;if ($DATA_CREATEORDER.isCanBeExtended) {
																		// fix bug
																		params["productUniqueId"] = $DATA_CREATEORDER.productUniqueId;
															}params["roomnum"] = parseInt($("#room-number", dom).attr("data-value"));if (redPacketList.selectedIncomeId) {
																		params["incomeid"] = parseInt(redPacketList.selectedIncomeId);
															}priceManager.isVouch = roomReservation.getValue().needVouch || roomNumber.getValue().assure || 0;params = $.extend(params, JSON.parse(sessionStorage.getItem('insurancesParams') || '{}'));params['dayPricesJSON'] = $DATA_CREATEORDER.productInfo.dayPricesJson || '[]';params['needVouch'] = priceManager.isVouch;params['vouchMoneyType'] = $DATA_CREATEORDER.vouchMoneyType; /* 是否是延住订单 */if ($DATA.isCanBeExtended && window.pageInfo.chid === "wxqbh5") {
																		var _cache_aKeyData = JSON.parse(sessionStorage.getItem('cache_aKeyData'));params.oneKeyContinuesParamJSON = {};params['oneKeyContinuesParamJSON'] = sessionStorage.getItem('cache_aKeyData').toString();
															} //2017-08-14 API 需要判断
															params["payType"] = $DATA_CREATEORDER.payType;slark.get("h5_createorder").startLoading();var __waittingTime__ = +new Date();core.fetch(window.pageInfo.subPath + "api/getpriceinfo/", params, { //url: 'http://xapi.elong.com' + window.pageInfo.subPath + "api/getpriceinfo/",
																		type: "POST", timeout: 10000 }).then( //data: params,
															//success: 
															function (data) {
																		// if (window['tjClient'] && priceManager.ajaxWaittingFlag) {
																		//     priceManager.ajaxWaittingFlag = false;
																		//     window.tjClient.send("__firstTime__",[{
																		//         url: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/",
																		//         time: +new Date() - __waittingTime__,
																		//         size: JSON.stringify(data).length
																		//     }]);
																		// }
																		if (window['xlog'] && priceManager.ajaxWaittingFlag) {
																					priceManager.ajaxWaittingFlag = false; // !!window.xlog && xlog.sendFirstScreenTime([{
																					//     url: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/",
																					//     time: +new Date() - __waittingTime__,
																					//     size: JSON.stringify(data).length
																					// }]);
																					onlyPoint({ url: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/", time: +new Date() - __waittingTime__, size: JSON.stringify(data).length });
																		}slark.get("h5_createorder").stopLoading();if (data.error || data.errorCode !== null) {
																					setTimeout(function () {
																								if (!$DATA.isCanBeExtended) {
																											//这个地方有个bug
																											dialog.alert('获取价格信息失败，请重新尝试', function () {
																														location.reload();
																											});
																								} else {
																											dialog.alert(data.errorMessage || "获取价格信息失败，请重新尝试", function () {
																														location.reload();
																											});
																								}
																					}, 17);
																		} else {
																					priceManager.render(data); //异常退出,继续浏览初始化
																					abortPlugin.init();
																		}
															}, //error: 
															function (xhr, err, msg) {
																		if ($DATA.isCanBeExtended && window.pageInfo.chid === "wxqbh5") {
																					easyDelayBack.backSetPageData();
																		}slark.get("h5_createorder").stopLoading();setTimeout(function () {
																					dialog.alert('获取价格信息失败，请重新尝试', function () {
																								location.reload();
																					});
																		}, 17); // if (window['tjClient'] && priceManager.ajaxWaittingFlag) {
																		//     priceManager.ajaxWaittingFlag = false;
																		//     window.tjClient.send("__error__", {
																		//         url: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/",
																		//         err: err,
																		//         msg: msg
																		//     });
																		// }
																		if (window['xlog'] && priceManager.ajaxWaittingFlag) {
																					priceManager.ajaxWaittingFlag = false;!!window.xlog && xlog.reportError({ filename: location.protocol + "//" + location.host + window.pageInfo.subPath + "api/getpriceinfo/", message: msg, error: err });onlyPoint();
																		}
															});
												}, //优惠文案
												staticText: function () {
															var mvt = { m268: { m1: { cutDown: "红包/优惠券立减", redReturn: "红包/优惠券返现", newReturn: "新客专享返现" }, m3: { cutDown: "红包卡券立减", redReturn: "红包卡券返现", newReturn: "新客返现" } } };return mvt['m268']["m" + core.getMvtResult('268')];
												}(), render: function (data) {
															this.data = data;this.priceInfo = data.priceInfo;this.showCouponText = data.showCouponText;var staticT = priceManager.staticText; // 现金返现或立减
															// 用户未登录情况，同步登录条上的返现或者立减金额
															if (!!data.logicPriceInfo && data.logicPriceInfo.loginFlag == "1") {
																		var logicPriceInfo = data.logicPriceInfo;if (!!logicPriceInfo.loginCouponType) {
																					switch (logicPriceInfo.loginCouponType) {// 现金返现
																								case "yLoginYCoupon":
																											$("#couponval p.coupontext", dom).text('现金返现');break; // 现金立减
																								case "yLoginYReduce":
																											$("#couponval p.coupontext", dom).text('现金立减');break;default:
																											$("#couponval", dom).addClass('hide');break;}
																		}if (data.priceInfo.couponVal > 0) {
																					$('#couponval .showcouponval', dom).html('￥' + data.priceInfo.couponVal);$("#couponval", dom).removeClass('hide');
																		} else {
																					$("#couponval", dom).addClass('hide');
																		} //返现说明文案；
																		if (logicPriceInfo.loginFlag == 1 && (logicPriceInfo.loginCouponType == "yLoginYCoupon" || logicPriceInfo.loginHongbaoType == "yLoginYHongBaoCouponYUserHongBao")) {
																					$("#invoice-elong1", dom).removeClass('hide');
																		} else {
																					$("#invoice-elong1", dom).addClass('hide');
																		} //返现立减指南文案；
																		if ((data.priceInfo.couponVal > 0 || data.priceInfo.recommendHongBao > 0) && (["nLoginYCoupon", "nLoginYReduce", "yLoginYCoupon", "yLoginYReduce"].indexOf(logicPriceInfo.loginCouponType) > -1 || ["yLoginYHongBaoReduceYUserHongBao", "yLoginYHongBaoCouponYUserHongBao"].indexOf(logicPriceInfo.loginHongbaoType) > -1)) {
																					$('#login-help', dom).removeClass('hide');
																		} else {
																					$('#login-help', dom).addClass('hide');
																		}if ($(".order-hongbao ul").children().length == $(".order-hongbao ul .hide").length) {
																					$(".order-hongbao").addClass('hide');
																		} else {
																					$(".order-hongbao").removeClass('hide');
																		}
															} else {
																		if (data.priceInfo.couponVal > 0) {
																					$('#loginCoupon .loginCoupon', dom).text('¥' + data.priceInfo.couponVal);
																		}
															} // 红包/优惠券 红包栏，推荐红包（data.selectedHongbao为空相当于未使用任何红包）
															this.showPriceRmbWithInsurance = data.priceInfo.showPriceRmbWithInsurance + "<span class='safe'>(含保险)</span>"; //showPriceRmbWithInsurance没有被用到
															this.showPriceRmb = data.priceInfo.showPriceRmb;this.showPriceRmbWithDeposit = data.priceInfo.showPriceRmbWithDeposit;this.recommendHongBao = data.priceInfo.recommendHongBao;if (!!data.selectedHongbao) {
																		data.recommondHongBao = data.selectedHongbao;
															} // 红包/优惠券展示逻辑
															//满返红包 满返红包 lastIncomeId selectedIncomeId
															var $loginHongbaoType = $('#loginHongbaoType', dom),
															    $hongBaoVal = $('#loginHongbaoType em', dom),
															    $showhongbaoval = $('#loginHongbaoType .showhongbaoval', dom),
															    logicPriceInfo = data.logicPriceInfo;if (!!logicPriceInfo.loginHongbaoType && data.priceInfo.recommendHongBao > 0) {
																		var loginHongbaoTypeText = logicPriceInfo.loginHongbaoType == "yLoginYHongBaoCouponYUserHongBao" ? staticT.redReturn //"红包/优惠券返现"
																		: staticT.cutDown; //"红包/优惠券立减");
																		$loginHongbaoType.removeClass("hide");$loginHongbaoType.find('.hongbaotext').text(loginHongbaoTypeText);
															} else {
																		redPacketList.lastIncomeId = "";redPacketList.selectedIncomeId = "";$loginHongbaoType.addClass('hide');
															}if (data.priceInfo.hongBaoVal) {
																		if ($DATA_CREATEORDER.priceInfo.hongbaoPromotionTypeValue == 10) {
																					$showhongbaoval.text('￥' + data.priceInfo.hongBaoVal);$hongBaoVal.text(!!data.recommondHongBao && data.recommondHongBao.flag == 1000 && !!data.recommondHongBao.canUse ? !!data.recommondHongBao.fullReturnRule && !!data.recommondHongBao.fullReturnRule.description && '(' + data.recommondHongBao.fullReturnRule.description + ')' : '(最多可返￥' + data.priceInfo.recommendHongBao + ')');
																		} else {
																					$showhongbaoval.text('￥' + data.priceInfo.hongBaoVal);$hongBaoVal.text('(最多可减￥' + data.priceInfo.recommendHongBao + ')');
																		}$showhongbaoval.addClass("add_show").removeClass('no-show');
															} else {
																		if ($DATA_CREATEORDER.priceInfo.hongbaoPromotionTypeValue == 10) {
																					if (!!data.recommondHongBao && data.recommondHongBao.flag == 1000 && !data.recommondHongBao.canUse) {
																								$showhongbaoval.text('未使用');$showhongbaoval.text('');
																					} else {
																								$hongBaoVal.text('(最多可返￥' + data.priceInfo.recommendHongBao + ')');$showhongbaoval.text('未使用');
																					}if (!!data.recommondHongBao && data.recommondHongBao.flag == 1000 && !!data.recommondHongBao.canUse) {
																								redPacketList.lastIncomeId = "";redPacketList.selectedIncomeId = "";
																					}
																		} else {
																					$hongBaoVal.text('(最多可减￥' + data.priceInfo.recommendHongBao + ')');$showhongbaoval.text('未使用');
																		}$showhongbaoval.addClass('no-show').removeClass("add_show");
															} // 额外返现
															var featuresCoupons = data.featuresCoupon,
															    $extraCoupon = $('#extracoupon', dom);if (!!featuresCoupons && !!featuresCoupons.extraCouponInfo && !!featuresCoupons.extraCouponInfo.extraCoupon && pageInfo.chid === "wxqbh5") {
																		$extraCoupon.find('.showhongbaoval').text('￥' + featuresCoupons.extraCouponInfo.extraCouponVal);$extraCoupon.removeClass('hide');
															} else {
																		$extraCoupon.addClass('hide');
															} //新客五八折金额展示 |2017-08-07 jinming qqhyh5 , qqqbh5 支持新客58折|
															var $xinke = $('#xinke', dom);if (!!featuresCoupons && !!featuresCoupons.xinke58Info && !!featuresCoupons.xinke58Info.xinke58 && ["wxqbh5", "qqqbh5", "qqhyh5"].indexOf(pageInfo.chid) > -1) {
																		$xinke.find('.showhongbaoval').text('￥' + featuresCoupons.xinke58Info.xinke58CouplePrice);$xinke.removeClass('hide');$(".xk_tips", dom).show();
															} else {
																		$xinke.addClass('hide');$(".xk_tips", dom).hide();
															} //取消险是否展示
															var $insurancesEle = $('#cancels', dom);if (!!data.insurances && data.insurances.length > 0 && !$DATA_CREATEORDER.isCanBeExtended) {
																		if (!priceManager.isFirstInsurance) {
																					priceManager.defaultInsuranceBack = false;
																		};priceManager.insurances = data.insurances; // 修正sessionStorage中的insuranceId
																		sessionStorage.setItem("posterorderParams", function () {
																					var obj = JSON.parse(sessionStorage.getItem("posterorderParams") || '{}');obj['insuranceId'] = data.insurances[0].insuranceId;obj['hotelName'] = obj['hotelName'] || $DATA_CREATEORDER.hotelName;obj['hotelAddr'] = obj['hotelAddr'] || ""; // ||
																					obj['hotelCity'] = obj['hotelCity'] || ""; // ||
																					return JSON.stringify(obj);
																		}());$insurancesEle.find('.cert-type').text("￥" + priceManager.insurances[0].insurancePriceC);if (!!priceManager.defaultInsuranceBack) {
																					$insurancesEle.find('.choosewx i').addClass('on').attr('data-tj', '{"cspot":"insurancecanceloff"}');
																		} else {
																					$insurancesEle.find('.choosewx i').removeClass('on').attr('data-tj', '{"cspot":"insurancecancelon"}');
																		}$insurancesEle.removeClass('hide');
															} else {
																		priceManager.defaultInsuranceBack = false;$insurancesEle.addClass('hide').find('.choosewx i').removeClass('on');
															} // 优惠小计
															var $price_chips = $('#price_chips', dom);if (data.totalSale > 0) {
																		$price_chips.find('.total-sale span').eq(1).text("￥" + data.totalSale); // if(data.totalCoupon > 0) {
																		//     $price_chips.find('.total-coupon span').eq(1).text("￥" + data.totalCoupon);
																		//     $price_chips.find('.total-coupon').show();
																		// } else {
																		//     $price_chips.find('.total-coupon').hide();
																		// }
																		// if(data.totalReduce > 0) {
																		//     $price_chips.find('.total-reduce span').eq(1).text("￥" + data.totalReduce);
																		//     $price_chips.find('.total-reduce span').show();
																		// } else {
																		//     $price_chips.find('.total-reduce span').hide();
																		// }
																		$price_chips.removeClass('hide');
															} else {
																		$price_chips.addClass('hide');
															} // 提交订单部分价格展示逻辑
															$('.price_tab').html(createOrderShowPriceTpl({ mvtCreatorderNew: core.getMvtResult('268'), //新旧版MVT
																		isLogin: $DATA_CREATEORDER.loginFlag, //用户登录信息
																		currencyPrice: data.currencyPrice, // 港币文案
																		payType: $DATA_CREATEORDER.payType, //支付方式
																		showPayType: $DATA_CREATEORDER.showPayType, //订单类型
																		priceInfo: data.priceInfo, //价格信息
																		totalCoupon: data.totalCoupon, // 总返现金额  主要用于优惠小计以及登录后价格展示处
																		totalReduce: data.totalReduce, // 总立减金额
																		isVouch: priceManager.isVouch, //是否房量担保或者到店时间担保--非担保变担保情况；
																		// isShowCheckInfoMvt: core.getMvtResult('218'), // 是否展示核对信息；
																		insurancePriceC: priceManager.insurances && priceManager.insurances[0].insurancePriceC || 0, createOrderBtnText: $DATA_CREATEORDER.isCreditOrFlash === 1 && creditAndQuick.dom.find(".order_sz i").hasClass("on") ? "免支付下单" : "提交订单" }));if ($('.cancels', dom).find('.choosewx i').hasClass("on")) {
																		$(".js_needNotInsurances").hide();$(".js_needInsurances").show();
															} else {
																		if ($(".js_needNotInsurances").length > 0) {
																					$(".js_needNotInsurances").show();
																		} else {
																					$(".addzhe").hide();
																		}$(".js_needInsurances").hide();
															} // 同步取消险和快递费的价格计算
															synPriceInfo(); // 优惠小计大于两条时露出
															if ($('#couponval', dom).parent().find('.hide').length >= 3) {
																		$('#price_chips', dom).hide();
															} else {
																		$('#price_chips', dom).show();
															}
												} };if ($DATA.loginFlag != 0 && $DATA.isCanBeExtended && window.pageInfo.chid === "wxqbh5") {
												easyDelayBack.init(priceManager, dom, roomNumber);
									} // 红包选择列表
									var redPacketList = { TEMPLATE: '<div>' + '<div class="page-content usehb">' + '<section>' + '<div class="hb_expl"><p><span class="unhb" data-incomeid=""><i class="chkbox on"><em></em></i>暂不使用红包</span>' + '<a href="javascript:void(0)" class="hbsrc"><i></i>使用说明</a>' + '</p></div>' + '<div class="hb_container"></div>' + '</section></div>' + '</div>', REDPACKET: '<div class="hb_content" data-incomeid="${incomeId}" data-trueuseamount="${data-trueuseamount}" data-facevalue="${data-facevalue}" data-flag="${data-flag}" data-canUse="${data-canUse}"><div class="list"><div class="choose"><div class="chkbox ${checked}"><i></i></div></div>' + '<div class="list_c ${canUse}">' + '<div class="list_title ${hbbg3}"><p>${rechargeTypeName}</p></div><div class="hb_text">' + '<div class="text1"><h1>${activityName}</h1><p class="ex_text">有效期至 ${validDate}</p><p class="last ${hide}">此红包本单可优惠￥${trueUseAmount}</p></div>' + '<div class="text2"><div class="text2_content"><p>￥<span>${faceValue}</span></p><p class="fullReturn">${fullReturn}</p></div></div></div></div></div></div>', lastIncomeId: ["qqqbh5", "qqhyh5"].indexOf(window.pageInfo.chid) > -1 && !!$DATA_CREATEORDER.productInfo.recommendHongBao && !!$DATA_CREATEORDER.productInfo.recommendHongBao.incomeId ? $DATA_CREATEORDER.productInfo.recommendHongBao.incomeId : "", selectedIncomeId: ["qqqbh5", "qqhyh5"].indexOf(window.pageInfo.chid) > -1 && !!$DATA_CREATEORDER.productInfo.recommendHongBao && !!$DATA_CREATEORDER.productInfo.recommendHongBao.incomeId ? $DATA_CREATEORDER.productInfo.recommendHongBao.incomeId : "", selectedFaceValue: "0", selectedTrueUseAmount: "0", tjObject: slark.clone(TJObject), //深度克隆的TJObject;
												needReload: true, flag: '', init: function () {
															this.page = $(this.TEMPLATE);this._bindEvent();
												}, _bindEvent: function () {
															var _this = this;$('.order-fill', dom).on('click', '#loginHongbaoType', function () {
																		if (_this.needReload) {
																					_this.getRedPacketList();
																		} else {
																					_this.show();
																		}
															});$(dom).on('click', '.page-content.usehb .hbsrc', function () {
																		if (location.href.indexOf('redpacket=1') == -1) {
																					history.replaceState(null, null, '?redpacket=' + this.selectedIncomeId + '&' + location.search.slice(1));
																		}location.href = "//promotion.elong.com/app/2016/redCashWX/index.html?ref=hotel";
															}.bind(this));$(dom).on('click', '.page-content.usehb .hb_content', this.selectRedPacket.bind(this));$(dom).on('click', '.page-content.usehb .hb_expl .unhb', this.selectRedPacket.bind(this));
												}, getRedPacketList: function () {
															slark.get("h5_createorder").startLoading();var _this = this;var roomNum = parseInt($("#room-number", dom).attr("data-value"));core.fetch(window.pageInfo.subPath + "api/hongbaolist/", { "key": $DATA_CREATEORDER.cachekey, "roomnum": roomNum, "payType": $DATA_CREATEORDER.payType }, { type: "GET", timeout: 10000 }).then(function (data) {
																		_this.getRedPacketListSuccess(data);
															}, function (error) {
																		_this.getRedPacketListFailed(error);
															});
												}, getRedPacketListSuccess: function (data) {
															slark.get("h5_createorder").stopLoading();if (data.error) {
																		dialog.alert('获取红包列表失败，请重试');
															} else {
																		this.needReload = false;if (!this.selectedIncomeId) {
																					$('.page-content.usehb .hb_expl .chkbox').addClass('on');
																		} else {
																					$('.page-content.usehb .hb_expl .chkbox').removeClass('on');
																		}var listStr = this.genRedPacketList(this.REDPACKET, data.hongbaoList, this.selectedIncomeId);$('.page-content.usehb .hb_container', dom).html(listStr);this.show();
															}
												}, getRedPacketListFailed: function (error) {
															slark.get("h5_createorder").stopLoading();dialog.alert('获取红包列表失败，请重试');
												}, selectRedPacket: function (e) {
															var $target = $(e.currentTarget);this.target = $(e.currentTarget);if ($target.find('.list_c').hasClass('none_c')) return;$('.page-content.usehb .chkbox').removeClass('on');$target.find('.chkbox').addClass('on');this.lastIncomeId = this.selectedIncomeId;this.selectedIncomeId = $target.attr('data-incomeid');this.selectedFaceValue = $target.attr('data-facevalue');this.flag = $target.attr('data-flag');this.canUse = $target.attr('data-canUse');this.selectedTrueUseAmount = $target.attr('data-trueuseamount');if (!this.selectedIncomeId) {
																		this.tjObject.cspot = 'hongbaounselect';
															} else {
																		this.tjObject.cspot = 'hongbaoselect';
															} //满返红包；
															tjMVT.setData(this.tjObject); //打点by cpt ...2016/11/8 张旭
															if (this.lastIncomeId != this.selectedIncomeId) {
																		setTimeout(function () {
																					priceManager.fetchPriceInfo();
																		}, 17);
															}this.hide();
												}, beforeHide: function () {
															if (location.href.indexOf('redpacket=') > -1) {
																		var search = location.search.replace(/redpacket=(\d+)&/, function (item) {
																					return '';
																		});history.replaceState(null, null, search);
															}
												}, genRedPacketList: function (tpl, data, selectedIncomeId) {
															if (data && data.length) {
																		var list = data.map(function (item) {
																					var checked = String(item.incomeId) == selectedIncomeId ? 'on' : '',
																					    fullReturn = !!item.fullReturnRule && !!item.fullReturnRule.description ? item.fullReturnRule.description : '';return tpl.replace('${rechargeTypeName}', item.fullReturnRule === null ? item.rechargeTypeName : "优惠券").replace('${activityName}', item.activityName).replace('${validDate}', item.validDate).replace('${trueUseAmount}', item.trueUseAmount).replace('${faceValue}', item.faceValue).replace('${incomeId}', item.incomeId).replace('${data-trueuseamount}', item.trueUseAmount).replace('${data-facevalue}', item.faceValue).replace('${checked}', checked).replace('${canUse}', !!item.canUse ? '' : 'none_c').replace('${hbbg3}', !!item.canUse ? item.fullReturnRule === null ? '' : 'hbbg8' : 'hbbg3').replace('${fullReturn}', fullReturn).replace('${data-flag}', item.flag).replace('${hide}', !!item.canUse ? '' : 'hide').replace('${data-canUse}', item.canUse);
																		});return list.join('');
															}return '';
												} };PluginManager.add('redPacketList', redPacketList);if (location.search.indexOf('redpacket=') > -1) {
												location.search.match(/redpacket=(\d+)/)[1] ? redPacketList.selectedIncomeId = location.search.match(/redpacket=(\d+)/)[1] : redPacketList.selectedIncomeId = "";redPacketList.getRedPacketList();
									} //这是取消险说明 cpt
									//PluginManager.add("cancleInsuranceInfo",cancleInsuranceInfo);
									cancleInsuranceInfo.init();PluginManager.add("moreDetail", moreDetail);PluginManager.add('zazxbx', zazxbx);PluginManager.add('zgrmcc', zgrmcc);PluginManager.add("pacificInsuranceHotel", pacificInsuranceHotel); //这是取消险的交互 hasInsurance : 0无保险 1有保险
									var insurancesAction = { init: function () {
															$('.cancels .choosewx', dom).off('click').on('click', function () {
																		insurancesAction.clickEvent();
															});
												}, clickEvent: function () {
															if ($('.cancels .choosewx', dom).find('i').hasClass('on')) {
																		priceManager.defaultInsuranceBack = false;$(".js_needNotInsurances").show();$(".js_needInsurances").hide();$('.cancels', dom).find('.choosewx i').removeClass('on').attr('data-tj', '{"cspot":"insurancecanceloff"}');
															} else {
																		priceManager.defaultInsuranceBack = true;$('.cancels', dom).find('.choosewx i').addClass('on').attr('data-tj', '{"cspot":"insurancecancelon"}');$(".js_needNotInsurances").hide();$(".js_needInsurances").show(); //与信用住闪住互斥
																		if (creditAndQuick.isSelect && $DATA.isCreditOrFlash && ($DATA.isCreditOrFlash == 1 || $DATA.isCreditOrFlash == 2)) {
																					creditAndQuick.cancel();dialog.alert("很抱歉，目前取消险和闪住不可同时勾选~");
																		}
															}if ($('.addzhe.bar').children().length === (($('.addzhe.bar').html() || "").match(/display\:\s?none\;?/g) && ($('.addzhe.bar').html() || "").match(/display\:\s?none\;?/g).length || -1) || $('.addzhe.bar').children().length === 0) {
																		$('.addzhe.bar', dom).hide();
															} else {
																		$('.addzhe.bar', dom).show();
															}priceManager.isFirstInsurance = true;synPriceInfo();
												} };insurancesAction.init(); //信用住闪住
									if ($DATA.isCreditOrFlash == 1 || $DATA.isCreditOrFlash == 2) {
												creditAndQuick.init(dom, insurancesAction);
									} // 特别提示文案消失 交互
									if ($('.clearsb', dom).length > 0) {
												$('.clearsb .btnclose', dom).off('click').on("click", function () {
															$(this).closest('.clearsb').addClass('hide');
												});
									} /** 老客单单有奖 jinming 2017-05-17 start*/oldCustomers.createOrderTipsExec({ lotteryTipTag: $DATA_CREATEORDER.lotteryTipTag || '', lotteryTip: $DATA_CREATEORDER.lotteryTip || '', dom: dom }); /** 老客单单有奖 jinming 2017-05-17 end*/ /** 微信title 优化 */titleManage("h5_createorder");var serviceBack = new friendQaManager.ServiceBack();serviceBack.init(); //异常退出,继续浏览
									abortPlugin = { abortData: null, //存放状态数据
												init: function () {
															if (this.isFirst) return;this.isFirst = true;this.updateAbortData();var that = this;var abortData = this.abortData;var isabort = this.isabort;this.abortData.hotelName = $DATA.hotelName;this.abortData.roomTypeName = $DATA.productInfo.roomTypeName;this.abortData.productName = $DATA.ProductName;$(".contact-person").off().on("input keyup change", "input.createorder", function () {
																		that.setData("PERSONNAME");
															});$("#contactormobile").on("input keyup change", function () {
																		that.setData("PERSONPHONE", $(this).val());
															}); // $("#invoice-phone input").on("input keyup change", function() {
															//     that.setData("PERSONPHONE2", $(this).val());
															// });
															// var shuiwu = $("#invoice-shuiwuId"), //税务
															//     registerAddress = $("#invoice-registerAddress"), //注册地址
															//     companyPhone = $("#invoice-companyPhone"), //公司电话
															//     openbank = $("#invoice-openbank"), //开户银行
															//     bankId = $("#invoice-bankId"), // 银行账号
															//     bankId = $("#invoice-bankId"), // 银行账号
															//     invoicePhone = $("#invoice-phone input"),
															//     invoiceContentObj = {},
															//     invoiceContentElems = [shuiwu,registerAddress,companyPhone,openbank,bankId];
															// invoiceContentElems.forEach(function(elem){
															//     elem.on("input keyup change", "input", function(){
															//         var invoiceContentObj = {};
															//         invoiceContentElems.forEach(function(elem) {
															//             var key = elem.attr("id");
															//             invoiceContentObj[key] = elem.find("input").val();
															//         });
															//         that.setData("INVOICCONTENT", invoiceContentObj);
															//     });
															// });
															//执行回填标记,目前只有首页异常退出后进入才会执行回填
															if (isabort && abortData) {
																		//回填入住人
																		var personNameList = abortData.personNameList;if (personNameList) {
																					personNameList.forEach(function (val, index) {
																								$(dom).find(".contact-person").find("input.createorder").eq(index).val(val);
																					});
																		} //开具发票开关
																		// var flag = abortData.needinvoiceflag,
																		//     currentFlag = $("#needinvoiceflag").hasClass("active");
																		// if (flag != currentFlag) {
																		//     $("#needinvoiceflag").click();
																		// }
																		// //回填发票类型
																		// var invoicetype = abortData.invoicetype;
																		// if (invoicetype) {
																		//     invoiceForNewCO.selectInvoiceType.setSelectValue(invoicetype);
																		// }
																		//回填手机号
																		var personPhone = abortData.personPhone;if (personPhone) {
																					$("#contactormobile").val(personPhone);
																		} // //回填电子发票手机号
																		// var personPhone2 = abortData.personPhone2;
																		// if (personPhone2) {
																		//     $("#invoice-phone input").val(personPhone2);
																		// }
																		// //回填发票填写信息
																		// var invoiceContent = abortData.invoiceContent;
																		// if (invoiceContent) {
																		//     $.each(invoiceContent, function(key, val){
																		//         $("#" + key).find("input").val(val);
																		//     });
																		// }
															}
												}, updateAbortData: function () {
															var abortData = aborting.getAbortData();this.isabort = abortData.url ? slark.getParam("isabort", abortData.url.split('?')[1]) : false;if (!this.abortData) {
																		if (abortData.pageType === 'h5-hotel-createorder') {
																					//同步本地存储数据
																					this.abortData = abortData.params || {};
																		} else {
																					this.abortData = {};
																		}
															}
												}, setData: function (key, val) {
															this.updateAbortData();abortPlugin['_set' + key](val);if (slark.getChannelId() === "wxqbh5") {
																		var curURL = slark.parseUrl();var replaceUrl = slark.replaceUrlParams(curURL, { isabort: 1 });this.abortData.url = replaceUrl;aborting.setAbortData(this.abortData);
															}
												}, _setROOMCOUNT: function (num) {
															this.abortData.roomCount = num;
												}, _setPERSONPHONE: function (val) {
															this.abortData.personPhone = val;
												}, _setPERSONPHONE2: function (val) {
															this.abortData.personPhone2 = val;
												}, _setPERSONNAME: function () {
															var personNameList = [];$(dom).find(".contact-person").find("input.createorder").each(function () {
																		var val = $(this).val() || "";personNameList.push(val);
															}); // console.log(this.abortData.personNameList)
															this.abortData.personNameList = personNameList;
												}, _setNEEDINVOICEFLAG: function (flag) {
															this.abortData.needinvoiceflag = flag;if (!flag) {
																		this.setData("INVOICCONTENT", {});this.setData("INVOICTYPE", "");
															}
												}, _setINVOICTYPE: function (type) {
															this.abortData.invoicetype = type;
												}, _setINVOICCONTENT: function (obj) {
															this.abortData.invoiceContent = obj;
												} };createOrder.init({ idCard: idCard, loginComponent: loginComponent, redPacketList: redPacketList, specialRequirement: specialRequirement, invoiceForNewCO: invoiceForNewCO, Common: Common, priceManager: priceManager, createOrderConfirmTpl: createOrderConfirmTpl, aborting: aborting, synPriceInfo: synPriceInfo, replaceBackUrl: replaceBackUrl }, dom); // 页面滚至电话号码处 露出支付说明文案提示
									if ($('html').hasClass('android')) {
												$(document).off('scroll').on('scroll', core.throttle(function () {
															showPriceTip();
												}, 200));
									} else {
												$('.odr_doc.page-content', dom).off('scroll').on('scroll', core.throttle(function () {
															showPriceTip();
												}, 200));
									}function showPriceTip() {
												var iosTop = $(".odr_doc.page-content", dom).scrollTop(),
												    androidTop = window.scrollY,
												    hotelNameHeight = $('.odr_info', dom).height(),
												    tipToTop = $('#loginCoupon', dom).length > 0 ? hotelNameHeight + $('#loginCoupon', dom).height() : hotelNameHeight;if (iosTop > tipToTop || androidTop > tipToTop) {
															if ($('.addzhe.bar').children().length === (($('.addzhe.bar').html() || "").match(/display\:\s?none\;?/g) && ($('.addzhe.bar').html() || "").match(/display\:\s?none\;?/g).length || -1) || $('.addzhe.bar').children().length === 0) {
																		$('.addzhe.bar', dom).hide();
															} else {
																		$('.addzhe.bar', dom).show();
															}
												} else {
															$('.addzhe.bar', dom).hide();
												}
									} //核对信息；
									if (core.getMvtResult('218') === '3') {
												checkHotelInfo.init(createOrder);
									} // booking 重要信息，是否折叠事件处理
									if ($DATA_CREATEORDER.productInfoStr.isBookingProduct == true) {
												// 展示文本
												var $cText = $('#bookingtext'); // 全部展开按钮区域
												var $btn = $('#bookingbtn'); // 渐隐蒙层
												var $mask = $('#bookingmask');if ($DATA_CREATEORDER.bookingInfo.length > 70) {
															$cText.addClass('text-close'); // 绑定折叠事件
															$('.special-content').on('click', function () {
																		// 展开，折叠 箭头
																		var $i = $($(this).find('i')[0]); // 提示文本（全部展开，折叠
																		var $text = $i.prev();if ($i.hasClass('close')) {
																					$i.removeClass('close');$i.addClass('open');$cText.removeClass('text-close');$mask.hide();$text.html('全部收起');
																		} else {
																					$i.removeClass('open');$i.addClass('close');$cText.addClass('text-close');$mask.show();$text.html('全部展开');
																		}
															});
												} else {
															$btn.hide();$mask.hide();
												}
									}
						}
			}, // src/js/replaceBackUrl.js
			function (__inner_require__, exports, module) {
						module.exports = function (core) {
									var replaceBackUrl = { options: { fromUrl: "", entryPage: "" }, getFromUrl: function () {
															var fromUrl = "";for (var i = 1; i < location.href.split('&').length; i++) {
																		var item = location.href.split('&')[i]; //validate from url
																		if (/from=http(s)?\:\/\/\w+\.elong\.com/.test(decodeURIComponent(item))) {
																					fromUrl = item.replace(/from=/, '');break;
																		}
															}return fromUrl;
												}, setReturnBack: function (pt) {
															var obj = { fromUrl: replaceBackUrl.getFromUrl(), entryPage: pt };var replaceInfo = sessionStorage.getItem('replaceInfo');var currentSessionInfo = typeof replaceInfo != 'undefined' ? JSON.parse(replaceInfo) : null;if (typeof obj === "undefined") return false;if (obj.fromUrl === "" && obj.entryPage === "") return false; //1.不存在的时候 2.覆盖之前的session
															if (currentSessionInfo === null && obj.fromUrl !== "" && obj.entryPage !== "") {
																		sessionStorage.setItem('replaceInfo', JSON.stringify(obj));
															} else if (!!currentSessionInfo && obj.fromUrl !== "") {
																		sessionStorage.setItem('replaceInfo', JSON.stringify(obj));
															}
												}, setFoundUrl: function (pt) {
															var obj = { fromUrl: replaceBackUrl.getFromUrl(), entryPage: pt };replaceBackUrl.setReturnBack(pt);var currentSessionInfo = sessionStorage.getItem('replaceInfo') && JSON.parse(sessionStorage.getItem('replaceInfo')) || {};var returnIcon = core.getActiveLayer().children('header').find('a[data-rel]');if (!currentSessionInfo) return;if (currentSessionInfo.fromUrl !== "" && currentSessionInfo.entryPage === obj.entryPage) {
																		if (returnIcon.attr('data-href') !== "") {
																					returnIcon.attr('data-href', decodeURIComponent(currentSessionInfo.fromUrl));
																		} else if (returnIcon.attr('href') !== "") {
																					returnIcon.attr('href', decodeURIComponent(currentSessionInfo.fromUrl));
																		} else {
																					returnIcon.attr('data-href', decodeURIComponent(currentSessionInfo.fromUrl));
																		}
															}
												}, //createorder skip
												setCreateOrderSkip: function (pt) {
															var obj = { fromUrl: replaceBackUrl.getFromUrl(), entryPage: pt };var currentSessionInfo = sessionStorage.getItem('replaceInfo') && JSON.parse(sessionStorage.getItem('replaceInfo')) || {};if (currentSessionInfo === null) return;if (currentSessionInfo.fromUrl !== "") {
																		location.href = decodeURIComponent(currentSessionInfo.fromUrl);
															}
												}, //createorder historyback
												setHistoryBack: function (pt) {
															var obj = { fromUrl: replaceBackUrl.getFromUrl(), entryPage: pt };var currentSessionInfo = sessionStorage.getItem('replaceInfo') && JSON.parse(sessionStorage.getItem('replaceInfo')) || {};if (currentSessionInfo === null) return;if (currentSessionInfo.fromUrl !== "" && currentSessionInfo.entryPage === obj.entryPage) {
																		history.replaceState({}, 'elong', decodeURIComponent(currentSessionInfo.fromUrl));history.back();
															}
												} };return replaceBackUrl;
						}(require("hotelfx@1.1.0/src/fw/core.js"));
			}, // src/js/validate.js
			function (__inner_require__, exports, module) {
						module.exports = function () {
									var validate = function () {
												//解析属性
												var parse = function (filter) {
															var msg, errorClass, correctClass;if (typeof filter == "string") filter = filter.charAt(0) == "#" ? eval(filter.substr(1)) : JSON.parse(filter);if (!$.isArray(filter)) filter = [filter];else {
																		for (var i = 0, p; i < filter.length; i++) {
																					p = filter[i];if (p["msg"] == undefined) p["msg"] = msg;else msg = p["msg"];
																		}
															}return { filter: filter };
												}; //带有value属性的标签
												var VALTAGS = { "INPUT": 1, "TEXTAREA": 1, "BUTTON": 1, "SELECT": 1 }; //获取元素属性值
												var getval = function (zep, fixdc, trim) {
															var v,
															    fn = VALTAGS[zep[0].tagName.toUpperCase()] == undefined ? "html" : "val";v = zep[fn]() || "";if (fixdc) v = dc2sc(v);if (trim) v = v.trim();zep[fn](v);return v;
												}; //计算表达式值
												var evalVal = function (v) {
															if (typeof v == "function") return v();else if (typeof v == "string" && v.indexOf("javascript:") == 0) return Function("v", "return " + v.substr(11))();return v;
												}; //全角转半角字符
												var dc2sc = function (src) {
															var len = src.length,
															    code,
															    tar = [];for (var i = 0; i < len; i++) {
																		code = src.charCodeAt(i);if (code == 12288) tar.push(String.fromCharCode(32));else if (code > 65280 && code < 65375) tar.push(String.fromCharCode(code - 65248));else tar.push(src.charAt(i));
															}return tar.join("");
												};var isept = function (v) {
															return v.trim().length == 0;
												};var vtip = function (tar, msg) {
															var tip = tar.next("span.vtip");if (tip.length == 0) tip = $("<span class='vtip'>");tar.after(tip.html(msg));return tip;
												}; //预定义验证类型
												var definedType = { digit: /^\d*$/, number: /^[-\+]?\d*(\.\d+)?$/, email: /^(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)?$/i, mobile: /^(((\(\d{2,3}\))|(\d{3}\-))?1[34578]\d{9})?$/, tel: /^(((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,6})?)?$/, zip: /^(\d{6})?$/, name: /^[a-zA-Z\u0391-\uFFE5][a-zA-Z\u0391-\uFFE5\/\-\.]{1,19}$/, idcard: /^(\d{15}|\d{18}|\d{17}(\d|X|x))?$/, en: /^[A-Za-z]*$/, ch: /^[\u0391-\uFFE5]*$/, bankcard: /^(\d[\d\-]{10,17}\d)?$/ }; //预定义类型别名
												definedType["int"] = definedType["long"] = definedType["digit"];definedType["money"] = definedType["float"] = definedType["double"] = definedType["number"];definedType["phone"] = definedType["mobile"];definedType["telephone"] = definedType["tel"];definedType["postcode"] = definedType["zipcode"] = definedType["zip"];definedType["username"] = definedType["realname"] = definedType["name"];definedType["english"] = definedType["en"];definedType["chinese"] = definedType["zh"] = definedType["ch"]; //检测单个filter项
												var checkerr = function (f, v) {
															var iserr = false;for (var i in f) {
																		if (iserr) break;switch (i) {case "required":case "rq":
																								if (f[i]) iserr = isept(v);break;case "min":
																								iserr = !isept(v) && Number(v) < Number(evalVal(f[i]));break;case "max":
																								iserr = !isept(v) && Number(v) > Number(evalVal(f[i]));break;case "minlength":case "minlen":
																								iserr = !isept(v) && v.length < Number(evalVal(f[i]));break;case "maxlength":case "maxlen":
																								iserr = !isept(v) && v.length > Number(evalVal(f[i]));break;case "equal":case "eq":
																								iserr = !isept(v) && v != evalVal(f[i]);break;case "regex":
																								iserr = !new RegExp(evalVal(f[i])).test(v);break;case "function":case "fn":
																								iserr = evalVal(f[i]);break;case "type":
																								iserr = !definedType[f[i]].test(v);break;}
															}return f["mirror"] ? !iserr : iserr;
												}; //验证函数
												var $v = function (zep, options) {
															options = $.extend({}, $v.globalOptions, options);if (zep == undefined) zep = $("[data-validate]");var prop,
															    f,
															    f0,
															    result = { isError: !1, msgs: [], errors: [], corrects: [], getData: function () {
																					var data = {},
																					    checked,
																					    tg,
																					    nm;for (var i = 0; i < this.corrects.length; i++) {
																								tg = this.corrects[i].target;checked = false;nm = tg.attr("name");if (nm && !tg.prop("disabled")) {
																											if (tg[0].tagName.toUpperCase() == "INPUT" && "RADIO,CHECKBOX".indexOf((tg.attr("type") || "-").toUpperCase()) != -1) checked = tg.prop("checked");else checked = true;
																								}if (checked) data[nm] = data[nm] ? data[nm] + "," + this.corrects[i].val : this.corrects[i].val;
																					}return data;
																		} };zep = zep.filter("[data-validate]");zep.each(function () {
																		filter = $(this).data("validate");if (!filter) return true;prop = parse(filter);prop.filter[0] = $.extend({}, options.defaultFilter, prop.filter[0]);prop.target = $(this);prop.val = getval(prop.target, options.fixDC, options.trim);if (!options.testMode && options.before && !options.before(prop)) return true;f0 = prop.filter[0];for (var i = 0; i < prop.filter.length; i++) {
																					f = prop.filter[i];prop.isError = checkerr(f, prop.val);if (prop.isError) {
																								result.isError = true;result.msgs.push(f.msg);result.errors.push(prop);if (!options.testMode && typeof f0.errorClass == "string") (options.appendDom ? vtip(prop.target, f.msg) : prop.target).removeClass(f0.correctClass).addClass(f0.errorClass);break;
																					}
																		}if (!prop.isError) {
																					result.corrects.push(prop);if (!options.testMode && typeof f0.correctClass == "string") (options.appendDom ? vtip(prop.target, "") : prop.target).removeClass(f0.errorClass)[isept(prop.val) ? "removeClass" : "addClass"](f0.correctClass);
																		}if (!options.testMode && options.after) result = options.after(prop, result) || result;if (prop.isError && options.singleMode) return false;
															});if (!options.testMode && options.report) options.report(result);return result;
												}; //全局默认设置
												$v.globalOptions = { fixDC: !1, trim: !0, singleMode: !1, testMode: !1, before: 0, after: 0, defaultFilter: undefined, appendDom: 0, report: function (result) {} };return $v;
									}();validate.idCard = function () {
												var vcity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };checkCard = function (card) {
															//是否为空  
															if (card === '') {
																		return false;
															} //校验长度，类型  
															if (isCardNo(card) === false) {
																		return false;
															} //检查省份  
															if (checkProvince(card) === false) {
																		return false;
															} //校验生日  
															if (checkBirthday(card) === false) {
																		return false;
															} //检验位的检测  
															if (checkParity(card) === false) {
																		return false;
															}return true;
												}; //检查号码是否符合规范，包括长度，类型  
												isCardNo = function (card) {
															//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
															var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;if (reg.test(card) === false) {
																		return false;
															}return true;
												}; //取身份证前两位,校验省份  
												checkProvince = function (card) {
															var province = card.substr(0, 2);if (vcity[province] === undefined) {
																		return false;
															}return true;
												}; //检查生日是否正确  
												checkBirthday = function (card) {
															var len = card.length;var arr_data, year, month, day, birthday; //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字  
															if (len == '15') {
																		var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;arr_data = card.match(re_fifteen);year = arr_data[2];month = arr_data[3];day = arr_data[4];birthday = new Date('19' + year + '/' + month + '/' + day);return verifyBirthday('19' + year, month, day, birthday);
															} //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X  
															if (len == '18') {
																		var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;arr_data = card.match(re_eighteen);year = arr_data[2];month = arr_data[3];day = arr_data[4];birthday = new Date(year + '/' + month + '/' + day);return verifyBirthday(year, month, day, birthday);
															}return false;
												}; //校验日期  
												verifyBirthday = function (year, month, day, birthday) {
															var now = new Date();var now_year = now.getFullYear(); //年月日是否合理  
															if (birthday.getFullYear() == year && birthday.getMonth() + 1 == month && birthday.getDate() == day) {
																		//判断年份的范围（3岁到100岁之间)  
																		var time = now_year - year;if (time >= 3 && time <= 100) {
																					return true;
																		}return false;
															}return false;
												}; //校验位的检测  
												checkParity = function (card) {
															//15位转18位  
															card = changeFivteenToEighteen(card);var len = card.length;if (len == '18') {
																		var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');var cardTemp = 0,
																		    i,
																		    valnum;for (i = 0; i < 17; i++) {
																					cardTemp += card.substr(i, 1) * arrInt[i];
																		}valnum = arrCh[cardTemp % 11];if (valnum == card.substr(17, 1)) {
																					return true;
																		}return false;
															}return false;
												}; //15位转18位身份证号  
												changeFivteenToEighteen = function (card) {
															if (card.length == '15') {
																		var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');var cardTemp = 0,
																		    i;card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);for (i = 0; i < 17; i++) {
																					cardTemp += card.substr(i, 1) * arrInt[i];
																		}card += arrCh[cardTemp % 11];return card;
															}return card;
												};return function (card) {
															return checkCard(card);
												};
									}();validate.mobile = function (phone) {
												return (/^1\d{6,10}$/.test(phone)
												);
									};validate.addFilter = function (elem, filter) {
												elem.data("validate", JSON.stringify(filter)); //兼容zepto和jquery
												// if(!elem.attr("data-validate")) {
												// 	elem.attr("data-validate", JSON.stringify(filter));
												// }
												// 因在提交订单的时候 先选择一间( 提交订单后 ) ;再选择多间提交订单 提示填写入住人bug  hack;
												$.each(elem, function (key, value) {
															if (!$(value).attr("data-validate")) {
																		$(value).attr("data-validate", JSON.stringify(filter));
															}
												});
									};$.extend($.fn, { validate: function (options) {
															return validate(this, options);
												} });return validate;
						}(require("hotelfx@1.1.0/src/js/libs/zepto/dist/zepto.js"));
			}, // src/js/clearInput.js
			function (__inner_require__, exports, module) {
						module.exports = function () {
									var clearInput = { TEMPLATE: '<i class="clear-input"></i>', query: "input[type^='te'], input[type='password']", init: function (dom, query, position) {
															var currentQuery = !!query ? query : this.query;var targets = $(currentQuery, dom);targets.each(function () {
																		var _this = $(this);var parent = _this.parent();if (!parent.find(".clear-input").size()) {
																					var parentPosition = parent.css('position');var clearButton = $(clearInput.TEMPLATE);if (parentPosition != 'absolute' && parentPosition != 'relative' && parentPosition != 'fixed') {
																								parent.css('position', 'relative');
																					}clearButton.hide();parent.append(clearButton);if (!!position) {
																								!!position.top ? clearButton.css('top', position.top) : null;!!position.right ? clearButton.css('right', position.right) : null;
																					}clearButton.off("touchstart").on("touchstart", function () {
																								_this.val('');clearButton.hide();_this.css('padding-right', _this.attr("pr") ? _this.attr("pr") + 'px' : '0px');
																					});clearButton.off("click").on("click", function () {
																								_this.val('');clearButton.hide();_this.focus(); // iOS上文本框内容清除后会自动失去焦点，而安卓不会
																					});_this.off("input keyup focus").on('input keyup focus', function () {
																								if (_this.val().trim() != '') {
																											clearButton.show();_this.css('padding-right', '24px');
																								} else {
																											clearButton.hide();_this.val(''); // ios 清空完字符光标会前移一位bug
																											_this.css('padding-right', _this.attr("pr") ? _this.attr("pr") + 'px' : '0px');
																								}
																					});_this.off("blur").on('blur', function () {
																								clearButton.hide();_this.css('padding-right', _this.attr("pr") ? _this.attr("pr") + 'px' : '0px');
																					});
																		}
															});
												} };return clearInput;
						}(require("hotelfx@1.1.0/src/js/libs/zepto/dist/zepto.js"));
			}, // entry/hotel/js/components/checkbox.js
			function (__inner_require__, exports, module) {
						//<label class="label-switch">
						//    <div class="checkbox" data-checkbox="false">
						//        <span class="open" style="display: none;">开</span>
						//        <span class="close" style="display: inline;">关</span>
						//    </div>
						//</label>
						/**
      			 * jinming,2017-06-09
      			 * 
      			 * @param {JQueryObject} dom 类似上面的dom结构的$(".label-swicth")
      			 * @param {Boolean} defalutVal 初始值
      			 */var Checkbox = function (defalutVal) {
									//私有 只读
									var value = defalutVal || false;var handlerArray = []; //只读
									this.getVal = function () {
												return value;
									};this.addHandler = function (handlerName, fn) {
												var i = handlerArray.length - 1,
												    flag = false;for (; i > 0; i--) {
															if (handlerArray[i].handlerName === handlerName) {
																		flag = true;break;
															}
												}if (!flag) {
															handlerArray.push({ handlerName: handlerName, fn: fn });
												}
									};this.removeHandler = function (handlerName) {
												var i = handlerArray.length - 1;for (; i > 0; i--) {
															if (handlerArray[i].handlerName === handlerName) {
																		handlerArray.splice(i, 1);
															}
												}
									};function fire(flag) {
												handlerArray.forEach(function (item) {
															typeof item.fn === 'function' && item.fn.call(this, flag);
												}, this);
									};this.toggle = function () {
												value = !value;fire(value);return this.getVal();
									};
						};module.exports = Checkbox;
			}, // entry/hotel/js/invoice/invoiceForCO.js
			function (__inner_require__, exports, module) {
						var taxpayerTpl = __inner_require__(8 /*entry/hotel/tpl/taxpayer.js*/); /*
                                                                              * ming.jin 2017-06-09
                                                                              * 订单填写页发票逻辑
                                                                              */var itemBarPackage = __inner_require__(9 /*entry/hotel/js/invoice/itembar.js*/),
						    invoicePackage = __inner_require__(10 /*entry/hotel/js/invoice/invoice.js*/);var initInvoice = { paper: null, elec: null, special: null, init: function (domObj, dom, $DATA) {
												//发票
												this.paper = new invoicePackage.InvoiceOfPaper();this.elec = new invoicePackage.InvoiceOfElec();this.special = new invoicePackage.InvoiceOfSpecial();this.orderPage = new invoicePackage.InvoiceOfPaperForOrder();this.orderSpecial = new invoicePackage.InvoiceOfSpecialForOrder(); //hide
												this.hideItemPack = new invoicePackage.InvoiceHideItem(); //发票抬头
												this.headerOfCompany = new invoicePackage.InvoiceHeader.HeaderOfCompany();this.headerOfPerson = new invoicePackage.InvoiceHeader.HeaderOfPerson();this.headerOfOrganization = new invoicePackage.InvoiceHeader.HeaderOfOrganization(); //初始化 发票所填字段，只需要初始化动态或可隐藏的字段dom即可
												//纳税人识别号 －》 纸质或电子发票
												var taxpayerRegistrationNumber = new itemBarPackage.taxpayerRegistrationNumber(domObj.taxpayerRegistrationNumber); //抬头类型
												var invoiceHeaderType = new itemBarPackage.invoiceHeaderType(domObj.invoiceHeaderType); //手机号
												var phoneNumber = new itemBarPackage.receivePhoneNumber(domObj.phoneNumber); //邮寄地址
												var postAddress = new itemBarPackage.postAddress(domObj.postAddress); //邮寄方式
												var postType = new itemBarPackage.postType(domObj.postType); //纳税人识别号:专票--------------
												var taxpayerRegistrationNumberForZP = new itemBarPackage.taxpayerRegistrationNumberForZP(domObj.taxpayerRegistrationNumberForZP); //注册地址
												var registerAddress = new itemBarPackage.registerAddress(domObj.registerAddress); //公司电话
												var companyPhone = new itemBarPackage.companyPhone(domObj.companyPhone); //开户银行
												var openAccountBank = new itemBarPackage.openAccountBank(domObj.openAccountBank); //银行帐号
												var accountOfBank = new itemBarPackage.accountOfBank(domObj.accountOfBank); //tips --------------------
												//发票红字说明
												this.invoiceRedTip = new itemBarPackage.invoiceRedTip(domObj.invoiceRedTip); //电子发票说明
												this.elecInvoiceTip = new itemBarPackage.elecInvoiceTip(domObj.elecInvoiceTip); //发票说明
												this.invoiceElongTip = new itemBarPackage.invoiceElongTip(domObj.invoiceElongTip); //发票抬头， 公司需要纳税人识别号；个人，机关单位不需要
												this.headerOfCompany.add(taxpayerRegistrationNumber); // 个人，机关单位不需要任何必填项，不需要调用add方法
												//纸质发票----------------
												this.paper.add(invoiceHeaderType);this.paper.add(postAddress);this.paper.add(postType);this.paper.add(this.invoiceRedTip);this.paper.add(this.invoiceElongTip); //电子发票-----------------
												this.elec.add(invoiceHeaderType);this.elec.add(this.invoiceRedTip);this.elec.add(this.invoiceElongTip);this.elec.add(this.elecInvoiceTip); //专票发票-----------------
												this.special.add(taxpayerRegistrationNumberForZP);this.special.add(registerAddress);this.special.add(companyPhone);this.special.add(openAccountBank);this.special.add(accountOfBank);this.special.add(postAddress);this.special.add(postType);this.special.add(this.invoiceRedTip);this.special.add(this.invoiceElongTip); //2017-09-26 jm 新增功能：预约发票
												this.hideItemPack.add(postAddress);this.hideItemPack.add(postType);this.hideItemPack.add(phoneNumber); //预约发票--纸
												this.orderPage.add(invoiceHeaderType); //预约发票--专
												this.orderSpecial.add(taxpayerRegistrationNumberForZP);this.orderSpecial.add(registerAddress);this.orderSpecial.add(companyPhone);this.orderSpecial.add(openAccountBank);this.orderSpecial.add(accountOfBank); //纳税人识别号说明
												var taxpayerNum = { TEMPLATE: taxpayerTpl({}), beforeShow: function () {
																		var html = $('html');if (html.hasClass('android')) {
																					html.css('overflow', 'hidden');
																		}
															}, init: function () {
																		this.page = $(this.TEMPLATE);this.hide();this.closeDom = this.page.find(".closed");this.page.appendTo($(dom));this._bindEvent();
															}, show: function () {
																		this.page.show();
															}, hide: function () {
																		this.page.hide();
															}, afterHide: function () {
																		var html = $('html');if (html.hasClass('android')) {
																					html.css('overflow', '');
																		}
															}, _bindEvent: function () {
																		this.closeDom.on('click', function () {
																					taxpayerNum.hide();
																		});
															} };taxpayerNum.init(); //纳税人识别号： 纸质或电子
												taxpayerRegistrationNumber.bindEvent(domObj.taxpayerRegistrationNumberWin, "click", function () {
															//弹层
															taxpayerNum.show();
												}); //发票抬头类型 处理对象
												this.invoiceHeaderCtrl = { value: 0, //默认公司
															init: function (dom) {
																		this.value = 0;this.bindEvent(dom);
															}, bindEvent: function (dom) {
																		var items = $(".invoice-header-type .invoice-header", dom).find("a"),
																		    _this = this;items && items.on("click", function () {
																					if ($(this).hasClass("active")) {
																								return;
																					}$(this).siblings().removeClass("active");$(this).addClass("active");_this.value = $(this).index();_this.setHeader();
																		});
															}, setHeader: function () {
																		//个人机关单位 对象中没有元素，show hide 省略调用
																		switch (this.value) {case 0:
																								initInvoice.headerOfCompany.show();break;case 1:
																								initInvoice.headerOfCompany.hide();break;case 2:
																								initInvoice.headerOfCompany.hide();break;default:
																								break;}
															}, hide: function () {
																		//个人机关单位 对象中没有元素，hide 省略调用
																		initInvoice.headerOfCompany.hide();
															} };this.invoiceHeaderCtrl.init(dom);this.invoiceElongTip_text = $DATA.invoiceElongTip;this.einvoiceElongTip_text = $DATA.einvoiceElongTip;
									}, paperShow: function () {
												//纸质发票 根据发票抬头类型展示发票抬头项
												this.invoiceHeaderCtrl.setHeader();this.invoiceElongTip.dom.html(this.invoiceElongTip_text);this.paper.show();
									}, paperHide: function () {
												//纸质发票 隐藏发票抬头类型  
												this.invoiceHeaderCtrl.hide();this.paper.hide();
									}, elecShow: function () {
												this.invoiceHeaderCtrl.setHeader();this.invoiceElongTip.dom.html(this.einvoiceElongTip_text);this.elec.show();
									}, elecHide: function () {
												this.invoiceHeaderCtrl.hide();this.elec.hide();
									}, specialShow: function () {
												this.invoiceElongTip.dom.html(this.invoiceElongTip_text);this.special.show();
									}, specialHide: function () {
												this.special.hide();
									} };module.exports = initInvoice;
			}, // entry/hotel/tpl/taxpayer.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":1,"md5":"bf41f0d0b6f11b8c94586754ae9837b7"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('taxpayer', '<div class="mask_invoice"> <div class="invoice-layer"> <h1>发票须知<i class="closed"></i></h1> <ul> <li> <span>1、</span><p>国家税务总局要求，2017年7月1日起，企业发票需带有纳税人识别号或统一社会信用代码，否则无法报销。</p> </li> <li> <span>2、</span><p>如果您现在不知道企业纳税人识别号或统一社会信用代码，为确保您可以入住，可先行预定，后续补开发票。</p> </li> <li> <span>3、</span><p>纳税人识别号或统一社会信用代码，请向贵公司税务/财务部门询问。</p> </li> </ul> </div> </div>');
						}();
			}, // entry/hotel/js/invoice/itembar.js
			function (__inner_require__, exports, module) {
						/*
      * 发票相关输入字段
      */ /**
         * 发票信息条目基类
         * 
         */var baseItemBar = function (dom) {
									this.dom = dom;this.bindEvent = function (dom, type, callback) {
												var _this = this;dom.off(type).on(type, function (e) {
															callback && callback.call(_this, e);
												});
									};this.offEvent = function (dom, type) {
												dom.off(type);
									};this.show = function () {
												this.dom.show();
									};this.hide = function () {
												this.dom.hide();
									};
						}; //item start------------------------------------------------
						/**
      			 * 发票类型：电子发票，纸质发票，专用发票
      			 * 
      			 */var invoiceType = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 发票抬头类型：公司，个人，机关单位
         * 
         */var invoiceHeaderType = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 发票抬头：
         * 
         */var invoiceHeader = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 发票内容：代订房费、代订住宿费 
         * 注：170606-170621 删掉旅游服务费、会议服务费
         */var invoiceContent = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 纳税人识别号: 专票，抬头类型为公司的电子或纸质发票必须要有该字段
         * taxpayer's registration number
         */var taxpayerRegistrationNumber = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 收票人手机号
         * 
         */var receivePhoneNumber = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 备注
         * 
         */var invoiceRemark = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 纳税人识别号: 专票，抬头类型为公司的电子或纸质发票必须要有该字段
         * 产品要保持原来的，于是先做的专票就有了差异
         */var taxpayerRegistrationNumberForZP = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 注册地址
         * 
         */var registerAddress = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 公司电话
         * 
         */var companyPhone = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 开户银行
         * 
         */var openAccountBank = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 银行帐号
         * 
         */var accountOfBank = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 邮寄地址
         * 
         */var postAddress = function (dom) {
									baseItemBar.call(this, dom);
						}; /**
         * 邮寄方式
         * 
         */var postType = function (dom) {
									baseItemBar.call(this, dom);
						}; //item end------------------------------------------------
						//tips start----------------------------------------------
						var invoiceRedTip = function (dom) {
									baseItemBar.call(this, dom);
						};var elecInvoiceTip = function (dom) {
									baseItemBar.call(this, dom);
						};var invoiceElongTip = function (dom) {
									baseItemBar.call(this, dom);
						}; //tips end------------------------------------------------
						/**
      			 * 打包item
      			 */var itemPackage = { invoiceType: invoiceType, invoiceHeaderType: invoiceHeaderType, invoiceHeader: invoiceHeader, invoiceContent: invoiceContent, taxpayerRegistrationNumber: taxpayerRegistrationNumber, receivePhoneNumber: receivePhoneNumber, invoiceRemark: invoiceRemark, taxpayerRegistrationNumberForZP: taxpayerRegistrationNumberForZP, registerAddress: registerAddress, companyPhone: companyPhone, openAccountBank: openAccountBank, accountOfBank: accountOfBank, postAddress: postAddress, postType: postType, invoiceRedTip: invoiceRedTip, elecInvoiceTip: elecInvoiceTip, invoiceElongTip: invoiceElongTip };module.exports = itemPackage;
			}, // entry/hotel/js/invoice/invoice.js
			function (__inner_require__, exports, module) {
						/**
      * 发票产品基类
      * 
      */var itemCollector = function () {
									var itemArray = [];this.add = function (itemBar) {
												itemArray.push(itemBar);
									};this.remove = function (itemConstructorName) {
												var len = itemArray.length,
												    i = 0;for (; i < len; i++) {
															if (itemArray.constructor.name === itemConstructorName) {
																		itemArray.splice(i, 1);break;
															}
												}
									};this.show = function () {
												itemArray.forEach(function (item) {
															item.show();
												});
									};this.hide = function () {
												itemArray.forEach(function (item) {
															item.hide();
												});
									};
						}; /**
         * 纸质发票:抬头类型，发票抬头，发票内容，纳税人识别号，邮寄地址，邮寄方式，发票备注
         * 发票抬头为公司时，必须有纳税人识别号
         * @param {any} data 
         */var InvoiceOfPaper = function () {
									itemCollector.call(this);
						}; /**
         * 电子发票
         * 
         */var InvoiceOfElec = function () {
									itemCollector.call(this);
						}; /**
         * 专用发票
         * 
         */var InvoiceOfSpecial = function () {
									itemCollector.call(this);
						}; /**
         * 预约发票 --- 纸
         */var InvoiceOfPaperForOrder = function () {
									itemCollector.call(this);
						}; /**
         * 预约发票 --- 专
         */var InvoiceOfSpecialForOrder = function () {
									itemCollector.call(this);
						}; /**
         * hide
         */var InvoiceHideItem = function () {
									itemCollector.call(this);
						}; /**
         * 发票抬头类型：公司
         * 
         */var HeaderOfCompany = function () {
									itemCollector.call(this);
						}; /**
         * 发票抬头类型：个人
         * 
         */var HeaderOfPerson = function () {
									itemCollector.call(this);
						}; /**
         * 发票抬头类型：机关单位
         * 
         */var HeaderOfOrganization = function () {
									itemCollector.call(this);
						};var invoicePackage = { InvoiceOfPaper: InvoiceOfPaper, InvoiceOfElec: InvoiceOfElec, InvoiceOfSpecial: InvoiceOfSpecial, InvoiceHeader: { HeaderOfCompany: HeaderOfCompany, HeaderOfPerson: HeaderOfPerson, HeaderOfOrganization: HeaderOfOrganization }, InvoiceOfPaperForOrder: InvoiceOfPaperForOrder, InvoiceOfSpecialForOrder: InvoiceOfSpecialForOrder, InvoiceHideItem: InvoiceHideItem };module.exports = invoicePackage;
			}, // entry/hotel/tpl/guidetext.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":1,"md5":"2f3c4143d6e67dc3a9617c72b8c78515"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('guidetext', '<h1>1.返现是什么？</h1> <p>“返现”是艺龙回馈客户的一种优惠促销方式。您在艺龙预订酒店或机票，成功消费后艺龙会将当次消费款中一定比例的金额返还到您的艺龙账户。</p> <h1>2. 如何获取返现？</h1> <p>您需要在预订酒店时，勾选“可领取返现XX”选项才可获取返现；不勾选将无法获取返现。</p> <h1>3.返现有什么用？</h1> <p>提现到自己的银行卡。</p> <p>使用艺龙app用返现金额直接购买预付酒店。</p> <h1>4.红包返现是什么？</h1> <p>当您拥有艺龙酒店红包且此产品可以使用红包返现时，需要您手动勾选页面下方的“红包返现”，系统会在您离店结账后将对应的红包金额打入您的账户。</p> <h1>5.额外优惠返现是什么？</h1> <p>艺龙会不定期对指定会员发放额外优惠权益，会员领取后，可预订带有“额外优惠”标识的产品，享受额外返现。</p> <h1>6.什么时候把返现给我？</h1> <p>预订带有“返现xx”的酒店订单，离店后30天内到“个人中心”的“酒店订单”去领取返现！您领取返现（从入住日开始之后30天内可领取返现）且离店结账3个工作日后您的艺龙账户中冻结的返现金额可使用。</p> <h1>7.如何查询返现是否到达我的艺龙账户？</h1> <p>返现到账后，您会收到短信提醒，或者用电脑或手机登录艺龙官网，进入”我的账户或个人中心“页面，在您的艺龙“现金账户”中查询您的返现详情。</p> <h1>8.预付立减</h1> <p>预付立减时艺龙回馈会员的一种促销方式。当您预订预付产品时，如有立减，系统会自动将相应的立减金额从您订单总价中减去。</p> <h1>9.红包立减</h1> <p>当您拥有艺龙酒店红包且此预付产品可以使用红包时，需要您手动勾选页面下方的“红包立减”，系统就会自动将相应的立减金额从您订单总价中减去。</p> 订单”去领取返现！您领取返现（从入住日开始之后30天内可领取返现）且离店结账3个工作日后您的艺龙账户中冻结的返现金额可使用。</p> <h1>10.特别提醒</h1> <p>只有登录的用户才能获得返现或者享受立减。</p> ');
						}();
			}, // entry/hotel/tpl/addGuide.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":1,"md5":"a7cc9b869648dea98dfd2c960ebf959f"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('addGuide', '<h1>1.返现是什么？</h1> <p>“返现”是艺龙回馈客户的一种优惠促销方式。您在艺龙预订酒店或机票，成功消费后艺龙会将当次消费款中一定比例的金额返还到您的艺龙账户。</p> <h1>2.返现有什么用？</h1> <p>提现到自己的银行卡。</p> <p>使用艺龙时返现金额直接购买预付酒店。</p> <h1>3.红包返现是什么？</h1> <p>当您拥有艺龙酒店红包且此产品可以使用红包返现时，需要您手动选择页面下方的“红包返现”，离店后30天内到“个人中心”的“酒店订单”去领取返现，系统会将对应的红包金额打入您的账户中。</p> <h1>4.额外优惠返现是什么？</h1> <p>艺龙会不定期对指定会员发放额外优惠权益，会员领取后，可预订带有“额外优惠”标识的产品，享受额外返现。</p> <h1>5.什么时候把返现给我？</h1> <p>预订带有“返现xx”或“红包返现xx”的酒店订单，离店后30天内到“个人中心”的“酒店订单”去领取返现！您领取返现（从入住日开始之后30天内可领取返现）且离店结账3个工作日后您的艺龙账户中冻结的返现金额可使用。</p> <h1>6.如何查询返现是否到达我的艺龙账户？</h1> <p>返现到账后，您会收到短信提醒，或者用电脑或手机登录艺龙官网，进入”我的账户或个人中心“页面，在您的艺龙“现金账户”中查询您的返现详情。</p> <h1>7.提现说明</h1> <p>1) 普通会员单笔提现金额&lt;200元时收取5元/次的手续费(≥200元免手续费)；</p> <p>2) 贵宾会员单笔提现金额&lt;100元时收取5元/次的手续费(≥100元免手续费)；</p> <p>3) 龙萃会员和钻石龙萃会员可特享1元以上随意提，免手续费。建议您可以累积到免手续费额度以上再提现，就没有手续费了哦~</p> <h1>8.预付立减</h1> <p>预付立减时艺龙回馈会员的一种促销方式。当您预订预付产品时，如有立减，系统会自动将相应的立减金额从您订单总价中减去。</p> <h1>9.红包立减</h1> <p>当您拥有艺龙酒店红包且此预付产品可以使用红包时，需要您手动选择页面下方的“红包立减”，系统就会自动将相应的立减金额从您订单总价中减去。</p> <h1>10.特别提醒</h1> <p>只有登录的用户才能获得返现或者享受立减。</p> ');
						}();
			}, // entry/hotel/tpl/addClause.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":1,"md5":"a4c94d98581b740c154aa0a65f247571"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('addClause', '<h1>1．艺龙旅行网服务条款的确认</h1> <p>艺龙旅行网的所有权与运作权归北京艺龙信息技术有限公司（以下简称"艺龙"）所有。本服务条款具有法律约束力。一旦您点选"注册"并通过注册程序，即表示您自愿接受本协议之所有条款，并已成为艺龙旅行网的注册会员。 用户在享用艺龙网络会员服务的同时，同意接受艺龙网络会员服务提供的各类信息服务。</p> <h1>2．服务内容</h1> <p>2.1 艺龙旅行网服务的具体内容由艺龙根据实际情况提供，艺龙对其所提供之服务拥有最终解释权。</p> <p>2.2 艺龙在艺龙旅行网上向其会员提供相关网络服务，与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均由会员自行负担。</p> <p>2.3 授权艺龙向注册所使用号码发送确认订单说明短信、优惠促销活动通知类短信、周边服务类短信（其中优惠促销活动通知信息每周不超过2条），用户有权在个人中心进行权限修改。</p> <h1>3．会员帐号及密码</h1> <p>3.1 用户可通过在艺龙旅行网网站系统或移动客户端系统完成注册程序并通过身份认证成为会员。如会员的账号信息（包括但不限于用户名、头像、简介、个性签名等）含有不雅、不当、非法、令人反感的词汇或图像或存在以下情形的，艺龙可不予注册，并保留对已注册会员进行注销的权利：</p> <p>1. 冒用党和国家领导人、社会名人、国家机构或其他社会机构的真实姓名、名称、字号、艺名、笔名注册的；</p> <p>2. 包含不文明、不健康内容，或包含歧视、侮辱、猥亵类词语的；</p> <p>3. 注册易产生歧义、引起他人误解或其他不符合法律规定的账号的。</p> <p>3.2 您注册会员成功后，将得到一个帐号和密码。您应妥善保管该帐号及密码，并对以该帐号进行的所有活动及事件负法律责任。因黑客行为或会员保管疏忽致使帐号、密码被他人非法使用的，艺龙不承担任何责任。如您发现任何非法使用会员帐号或安全漏洞的情况，请立即与艺龙联系。</p> <h1>4．会员权责</h1> <p>4.1 会员有权按照艺龙规定的程序和要求使用艺龙向会员提供的各项网络服务，如果会员对该服务有异议，可以与艺龙联系以便得到及时解决。</p> <p>4.2 用户在申请使用艺龙旅行网网络服务时，必须向艺龙旅行网提供准确的个人资料，如个人资料有任何变动，必须及时更新。</p> <p>4.3 会员须同意接受艺龙旅行网通过电子邮件或其他方式向会员发送促销或其他相关商业信息。</p> <p>4.4 会员在艺龙旅行网的网页上发布信息或者利用艺龙旅行网的服务时必须符合国家的法律法规以及国际法的有关规定。</p> <p>4.5 对于会员通过艺龙旅行网网上消息平台（包括但不限于论坛、BBS、评论）上传到艺龙旅行网网站上可公开获取区域的任何内容，会员同意授予艺龙在全世界范围内享有完全的、免费的、永久性的、不可撤销的、非独家的权利，以及再许可第三方的权利，以使用、复制、修改、改编、出版、翻译、据以创作衍生作品、传播、表演和展示此等内容（整体或部分），和/或将此等内容编入当前已知的或以后开发的其他任何形式的作品、媒体或技术中。</p> <p>4.6 会员承诺不会在艺龙旅行网的消息平台（包括但不限于论坛、BBS、评论）发布或在其账号注册信息（包括但不限于用户名、头像、简介、个性签名等）包含如下信息：</p> <p>1. 反对宪法所确定的基本原则或违反宪法或法律法规规定的；</p> <p>2. 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p> <p>3. 损害国家荣誉和利益的，损害公共利益的；</p> <p>4. 煽动民族仇恨、民族歧视，破坏民族团结的；</p> <p>5. 破坏国家宗教政策，宣扬邪教和封建迷信的；</p> <p>6. 散布谣言，扰乱社会秩序，破坏社会稳定的；</p> <p>7. 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p> <p>8. 侮辱或者诽谤他人，侵害他人合法权益的；</p> <p>9. 含有法律、行政法规禁止的其他内容的。</p> <p>4.7 会员单独为其发布在艺龙旅行网上信息承担责任。会员若在艺龙旅行网散布和传播违法信息，网络会员服务的系统记录有可能作为会员违法之证据。</p> <p>4.8 会员不得利用本站的服务从事以下活动：</p> <p>1. 未经允许，进入计算机信息网络或者使用计算机信息网络资源；</p> <p>2. 未经允许，对计算机信息网络功能进行删除、修改或者增加；</p> <p>3. 未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加；</p> <p>4. 故意制作、传播计算机病毒等破坏性程序；</p> <p>5. 其他危害计算机信息网络安全的行为。</p> <p>4.9 会员不得以任何方式干扰本站的服务。</p> <p>4.10 会员承诺遵守本站的所有其他规定和程序。</p> <p>4.11 如果会员违反上述规定，艺龙有权要求其改正或直接采取一切必要措施（包括但不限于更改或删除会员发布的信息、中断或终止会员使用网络的权利、暂时冻结账户或注销其登记等），以减轻会员不当行为所造成的影响。</p> <p>4.12 会员应承诺遵守法律法规、拥挤社会主义制度、不损害国家利益、公民合法权益和公共秩序、社会道德风尚，并确保其信息的真实性。</p> <h1>5．服务条款的修改</h1> <p>艺龙有权在必要时修改本服务条款而无需事先通知用户。艺龙行使该修改权，无需对用户或第三方承担任何责任。 会员如不同意修改，可以主动选择取消会员资格；如果会员继续使用艺龙旅行网服务，将被视为接受修改后的服务条款。</p> <h1>6．服务内容的修改或中断</h1> <p>鉴于网络服务的特殊性，艺龙保留随时修改或中断其部分或全部网络服务的权利，并无需通知会员或为此对会员及任何第三方负责。</p> <h1>7．会员隐私保护</h1> <p>艺龙尊重会员的隐私权，不会公开、编辑或泄露任何有关会员的个人资料以及会员在使用网络服务时存储在艺龙旅行网的非公开内容，但以下情况除外：</p> <p>1. 事先获得会员的明确授权；</p> <p>2. 遵守法律规定或艺龙旅行网合法服务程序；</p> <p>3. 按照相关政府主管部门的合理要求；</p> <p>4. 维护社会公众利益；</p> <p>5. 维护艺龙的合法权益；</p> <p>6. 符合其他合法要求。</p> <h1>8．中断或终止服务</h1> <p>如发生下列任何一种情形，艺龙有权随时中断或终止向会员提供本协议项下的网络服务，而无需对会员或任何第三方承担任何责任。</p> <p>1. 会员向艺龙提供的个人资料不真实。</p> <p>2. 会员违反本协议的规则或不履行其所承担的义务。</p> <p>除此之外，会员可随时根据需要通知艺龙终止向该会员提供服务，会员服务终止后，会员使用服务的权利同时终止。自会员服务终止之时起，艺龙旅行网不再对该会员承担任何责任。</p> <h1>9. 知识产权及其他权益</h1> <p>9.1 艺龙旅行网专属权利</p> <p>9.1.1除明显归属于合作伙伴、第三方所有的信息资料外，艺龙旅行网拥有网络服务内所有内容，包括但不限于文字、图片、图形、表格、动画、程序、软件、音频和视频资料等单独或组合的版权。任何被授权的浏览、复制、打印和传播属于本网站内的内容必须符合以下条件：</p> <p>1) 所有的资料和图像均以获得信息为目的；</p> <p>2) 所有的资料和图像均不得用于商业目的；</p> <p>3) 所有的资料和图像及其任何部分都必须包括此版权声明。</p> <p>未经艺龙旅行网许可，任何人不得擅自以非法的方式复制、传播、展示、镜像、上载、下载进行使用；否则，艺龙旅行网将依法追究法律责任。</p> <p>9.1.2艺龙为提供网络服务而自行开发的软件，包括不限于无线客户端应用等，拥有完整的知识产权。艺龙在此授予您个人非独家、不可转让、可撤销的，并通过在一部拥有所有权或使用权的手机或计算机上使用该软件的权利，且仅限于个人非商业性使用之合法目的，您应当保证合法使用该等软件，任何用户不得对该等软件进行如下违法行为：</p> <p>1) 开展反向工程、反向编译或反汇编，或以其他方式发现其原始编码，以及实施任何涉嫌侵害著作权等其他知识产权的行为；</p> <p>2) 以出租、租赁、销售、转授权、分配或其他任何方式向第三方转让该等软件或利用该等软件为任何第三方提供相似服务；</p> <p>3) 任何复制该等软件的行为；</p> <p>4) 以移除、规避、破坏、损害或其他任何方式干扰该等软件的安全功能；</p> <p>5) 以不正当手段取消该等软件上权利声明或权利通知的；</p> <p>6) 其他违反法律规定的行为。</p> <p>艺龙有权对该等软件进行定期或不定期的修订、扩展、升级等更新措施，而无需提前通知用户，但您有权选择是否使用更新后的软件。</p> <p>9.1.3以下文字、图形及艺龙旅行网服务LOGO等，均为艺龙旅行网及其关联公司的注册商标以及受法律保护的商号；未经授权的任何形式使用，均为侵权，将被依法追究其责任：</p> <p>“eLong.com”，“艺龙”，“艺龙旅行网”，“e龍”，“e龙”，“XICI”，“西祠”，“西祠胡同”等。</p> <p>9.2知识产权权属</p> <p>9.2.1您应对通过艺龙旅行网或艺龙移动客户端上传的可公开浏览区域中任何内容的真实性、合法性负责，保证对该等内容拥有完整的、无瑕疵的所有权和知识产权，或拥有完整的授权，并不存在任何侵犯第三方合法权益（包括但不限于著作权、肖像权、商标权、专利权、企业名称权、商号权、商业秘密、个人隐私、合同权利等权利）的情形。因您上传或发布该等内容而给艺龙或任何第三方造成的损害和相关后果，均由您全部承担，艺龙旅行网对此不承担任何责任；且艺龙旅行网有义务配合第三方、司法机关或行政机关完成相关的取证，并根据法律、主管部门或司法部门的要求将用户注册信息给予披露。</p> <p>9.2.2对于您通过互联网或移动终端等设备访问艺龙旅行网及其关联公司网站时发表的任何形式的文字、图片等信息及内容：</p> <p>1) 您在此同意将您在任何时间段在本站发表的任何形式的信息的著作财产权，包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权、据以创作衍生作品权以及其他除必须由著作权人享有的权利以外的可转让权利，无偿独家转让给艺龙及其关联公司所有。</p> <p>2) 您在此同意并授予艺龙及其关联公司独家的、全球通用的、永久的、免费的许可使用权利 (并有权在多个层面对该权利进行再授权)。</p> <p>3) 您在此同意并授予艺龙及其关联公司有权(全部或部份地)使用、复制、修订、改写、发布、翻译、分发、执行和展示您的全部资料数据（包括但不限于注册资料、交易行为数据及全部展示于艺龙旅行平台的各类信息）或制作其派生作品，并以现在已知或日后开发的任何形式、媒体或技术，将上述信息纳入艺龙旅行作品内。</p> <p>4) 您同意并许可艺龙就任何主体侵权而单独提起诉讼，并获得全部赔偿。</p> <p>5) 您保证不将已发表于本站的信息资料，以任何形式发布或授权其它网站（及媒体）使用；同时，您承诺配合艺龙为保证您发表的信息资料的独家性而进行的任何合法的维权行为。</p> <p>6）本协议已经构成《著作权法》第二十五条所规定的书面协议，其效力及于用户在艺龙旅行网发布的任何受著作权法保护的作品内容，无论该内容形成于本协议签订前还是本协议签订后。</p> <p>9.2.3艺龙为提供网络服务而使用的任何软件（包括但不限于软件中的任何文字、图形、音频、视频资料及其辅助资料）的一切权利属于该软件的著作权人，未经该著作权人同意，任何人不得对该软件进行反向工程、反向编译或反汇编。。</p> <p>9.2.4若您浏览、复制、打印和传播艺龙旅行网其他用户上传到艺龙旅行网站的内容，应保证仅用于个人欣赏之目的，不得用于商业目的，不得侵犯权利人的合法权益以及艺龙旅行网的合法权益和商业利益。</p> <p>9.3若您认为您的知识产权或其他合法权益被侵犯，请向艺龙提供以下资料：</p> <p>1) 对涉嫌侵权内容拥有知识产权或其他合法权益的权属证明；</p> <p>2) 权利人具体的主体资质和联络信息，包括个人的姓名、身份证或护照复印件、单位的营业执照复印件或者其他资质证明复印件、通信地址及电话号码等；</p> <p>3) 涉嫌侵权内容在本网站上的位置；</p> <p>4) 对侵权情况的详细描述；</p> <p>5) 请在权利通知中加入如下关于通知内容真实性的声明：“我保证，本通知中所述信息是充分、真实、准确的，如果本权利通知内容不完全属实，本人将承担由此产生的一切法律责任。”</p> <p>6) 在签字或加盖公章后，请将上述资料发往以下地址：北京市朝阳区酒仙桥路10号星科大厦C座三层艺龙法务部（邮编100015），也可发往以下邮箱：legal@corp.elong.com。</p> <p>9.4艺龙及其关联公司是艺龙旅行网的制作者，拥有此网站内容及资源的全部著作权；未经艺龙的明确书面许可，任何第三方不得为任何非私人或商业目的获取或使用本网站的任何部分或通过本网站可直接或间接获得的任何内容、服务或资料。任何第三方违反本协议的规定以任何方式，和/或以任何文字对本网站的任何部分进行发表、复制、转载、更改、引用、链接、下载或以其他方式进行使用，或向任何其它第三方提供获取本网站任何内容的渠道，则对本网站的使用权将立即终止，且任何第三方必须按照艺龙的要求，归还或销毁使用本网站任何部分的内容所创建的资料的任何副本。同时，艺龙保留进一步追究其法律责任的权利。</p> <h1>10．免责声明</h1> <p>10.1 艺龙对任何因会员不正当或非法使用服务、在网上进行交易、在账户信息中散播非法或不良信息、或会员传送信息变动而产生的直接、间接、偶然、特殊及后续的损害不承担责任。</p> <p>10.2 艺龙对任何他人的威胁性的、诽谤性的、淫秽的、令人反感的或非法的内容或行为或对他人权利的侵犯（包括知识产权）不承担责任；并对任何第三方通过服务发送或在服务中包含的任何内容不承担责任。</p> <p>10.3 会员明确同意承担因其提供个人信息不真实、不准确而对艺龙或艺龙网络服务造成的一切不利后果。 会员明确同意其使用艺龙旅行网服务所存在的风险以及使用艺龙网络服务产生的一切后果由其自己承担。</p> <p>10.4 对于因不可抗力或艺龙旅行网不能控制的原因造成的网络服务中断或其它缺陷，艺龙旅行网不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。</p> <p>10.5 艺龙不对所提供之网络服务做任何类型之担保，包括但不限于：</p> <p>1. 网络服务一定能满足会员要求；</p> <p>2. 网络服务不会中断；</p> <p>3. 网络服务的及时性、安全性、准确性。</p> <p>但是艺龙对不违反规定的特定目的担保不作限制。</p> <h1>11．赔偿</h1> <p>因会员对本服务之使用而导致艺龙遭受任何来自第三方之纠纷、诉讼及索赔要求，会员同意向艺龙及其关联企业、职员赔偿相应损失（包括合理的律师费），并尽力使之免受损害。</p> <h1>12．通告</h1> <p>所有发给会员的通告都可以通过重要页面的公告、电子邮件以及常规信件的形式传送。</p> <h1>13．法律</h1> <p>艺龙服务条款之效力、解释、执行均适用中华人民共和国法律。如发生争议，应提交至有管辖权之人民法院。</p> <h1>14．其他规定</h1> <p>本服务条款中的标题仅为方便而设，在解释本服务条款时应被忽略。</p>');
						}();
			}, // entry/hotel/tpl/addKickback.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":1,"md5":"3ccd22331839bf41c2c70ae8165e5961"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('addKickback', '<h1 style="color: #353535;font-size: .8125rem">返现领取说明</h1> <p>1、用户需在入住日至离店日16点期间，在酒店附近（约半径5km内）进入微信钱包艺龙订单详情页，点击“领取返现”按钮可获得返现，过期不领视为自动放弃；返现金额将在用户离店结账后3个工作日内返至用户在微信钱包艺龙账户“我的钱包”中的“现金账户”中。</p> <p>2、本活动仅限新会员方可预定，每个账户参与活动只能享受一间夜的返现，参与活动的酒店不同，返现金额不同，具体以预定时微信钱包艺龙酒店展示为准。</p> <p>3、同一会员账号／手机号／银行卡／支付账号／入住人，最多只能下一张活动订单，每张订单需大于等于一间夜，其中仅限一间夜活动产品。</p> <p>4、入住期间延住的间夜，不可享受活动折扣的返现。</p> <p>5、若出现作弊行为，艺龙有权取消已成的活动订单；即使订单已被确认，艺龙有权随时拒绝履行该订单，且艺龙有权取消该用户后续参与艺龙其他活动的资格。艺龙同时保留进一步追究作弊行为人／作弊酒店法律责任的合法权利。</p> <p>6、在法律允许范围内，根据活动的进展情况艺龙旅行网可能对活动规则／条款作出适当修改／调整。</p>');
						}();
			}, // entry/hotel/tpl/createOrderConfirm.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":1,"md5":"7d410d51513e0933a26adec488499aa5"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('createOrderConfirm', function ($data, $filename /**/) {
												var $utils = this,
												    $helpers = $utils.$helpers,
												    $escape = $utils.$escape,
												    orderData = $data.orderData,
												    $out = '';$out += '<div class="all-mask"> <div class="confirm-order"> <h2> <span class="modal-title">核对信息</span> </h2> <div class="info-con"> <ul> <li class="info-item"> <span class="info-detail anim-span1">';$out += $escape(orderData.hotelName);$out += '</span> <span class="ico ico1"><i></i></span> </li> <li class="info-item"> <span class="info-detail anim-span2">';$out += $escape(orderData.RoomTypeName);$out += ' ';$out += $escape(orderData.roomcount);$out += '间</span> <span class="ico ico2"><i></i></span> </li> <li class="info-item"> <span class="info-detail anim-span3">';$out += $escape(orderData.indate);$out += '<b>入住</b> ';$out += $escape(orderData.outdate);$out += '<b>离店</b></span> <span class="ico ico3"><i></i></span> </li> <li class="info-item"> <span class="info-detail anim-span4"> ';if (orderData.payType == 0) {
															$out += ' 到店后支付房费 ';
												} else {
															$out += ' 在线支付房费 ';
												}$out += ' <em>';$out += $escape(orderData.price);$out += '</em> </span> <span class="ico ico4"><i></i></span> </li> ';if (orderData.showCouponText) {
															$out += ' <li class="info-item"> <span class="info-detail anim-span5">离店后返现 <em>￥';$out += $escape(orderData.returnMoney);$out += '</em> </span> <span class="ico ico5"><i></i></span> </li> ';
												}$out += ' </ul> </div> <div class="info-tip"> <span class="process"> <i class="pro1"></i> <i class="pro2"></i> <i class="pro3"></i> </span> <span>即将提交订单，';if (orderData.payType == 0) {
															$out += '请稍等';
												} else {
															$out += '带您去支付';
												}$out += '</span> </div> </div> </div>';return new String($out);
									});
						}();
			}, // entry/hotel/tpl/createorder.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":5,"md5":"bceb5e9367ba74e67a5d83196df368a7"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('createorder', function ($data, $filename /**/) {
												var $utils = this,
												    $helpers = $utils.$helpers,
												    vm = $data.vm,
												    $string = $utils.$string,
												    $escape = $utils.$escape,
												    $out = '';if (vm.errorCode && vm.errorCode != "") {
															$out += ' ';if (vm.__customization__ && vm.__customization__.noHeader == false) {
																		$out += ' <header class="bar bar-nav"> <h1 class="title">订单填写</h1> </header> ';
															}$out += ' <div class="page-content"> <div class="error-info"> <div class="error-message"> <p>';$out += $string(vm.errorObj.text);$out += '</p> ';if (vm.errorCode === "HOTEL_LONGCUI_LOGIN") {
																		$out += ' <a href="';$out += $string(vm.loginUrl);$out += '" class="first">登录账号</a> ';
															}$out += ' ';if (vm.returnUrl) {
																		$out += ' <a href="';$out += $string(vm.returnUrl);$out += '" class="';$out += $escape(vm.errorCode === "HOTEL_LONGCUI_LOGIN" ? "second" : "first");$out += '">';$out += $escape(vm.errorObj.btnText);$out += '</a> ';
															}$out += ' </div> </div> </div> ';
												} else {
															$out += ' ';if (vm.__customization__ && vm.__customization__.noHeader === false) {
																		$out += ' ';if (vm.__customization__.hiddenBackHome) {
																					$out += ' <header class="bar bar-nav"> <a class="icon icon-left-nav pull-left icon-back"></a> <a class="icon icon-phone pull-right" href="tel:';$out += $string(vm.tel);$out += '"></a> <a class="icon icon-house pull-right tjclick" href="//x.elong.com/hotelwxqb/index/" data-tj=\'{"cspot":"backhome"}\'></a> <h1 class="title">';$out += $string(vm.title);$out += '</h1> </header> ';
																		} else {
																					$out += ' <header class="bar bar-nav"> <a class="icon icon-left-nav pull-left icon-back"></a> <a class="icon icon-phone pull-right" href="tel:';$out += $string(vm.tel);$out += '"></a> <a class="icon icon-house pull-right tjclick" href="';$out += $string(vm.homeUrl);$out += '" data-tj=\'{"cspot":"backhome"}\'></a> <h1 class="title">';$out += $string(vm.title);$out += '</h1> </header> ';
																		}$out += ' ';
															}$out += ' ';if (["0", "1", "3"].indexOf(vm.isCreateOrderNew) > -1) {
																		$out += ' <nav class="bar bar-tab price_tab"> <div class="total"> <div class="orderprice"> <p><span>在线担保</span><span><b>¥</b></span></p> </div> <div class="returnprice"> <p><span></span><span class="colorred">(含保险、邮费)</span></p> </div> <div class="returnprice"> <p><span>离店可返</span><span><b>¥</b></span></p> </div> </div> <div class="next commit tjclick" id="mobilesubmit" data-tj=\'{"cspot":"nextstep"}\' data-activeTitle="';$out += $string(vm.createOrderBtnText);$out += '"> <span>';$out += $string(vm.createOrderBtnText);$out += '</span> <span class="preloader preloader-white button-loader"></span> </div> </nav> ';
															} else {
																		$out += ' <nav class="bar bar-tab create-order-bar"> <div class="total"> <div class="orderprice return">￥<span id="wborderprice"> <b style="font-size:14px;';if (vm.showForeignCurrencyTip == 0) {
																					$out += 'display:none;';
																		}$out += '"></b></span></div> <div class="returnprice"> <div class="coupontext"></div> </div> </div> <div id="mobilesubmit" class="next commit tjclick" data-tj=\'{"cspot":"nextstep"}\' data-activeTitle="';$out += $string(vm.createOrderBtnText);$out += '"> <span>';$out += $string(vm.createOrderBtnText);$out += '</span> <span class="preloader preloader-white button-loader"></span> </div> </nav> ';
															}$out += ' ';if (vm.orderPromptInTwoDays > 0) {
																		$out += ' <nav class="bar record" id="record-text"> 48小时内有';$out += $escape(vm.orderPromptInTwoDays);$out += '人预订 </nav> ';
															}$out += ' ';if (!vm.__customization__.createorderhiddenLogin) {
																		$out += ' ';if (vm.loginFlag == 0) {
																					$out += ' <div class="order-login bar"> <ul class="login-list"> <li class="margin" id="loginCoupon"> ';$out += $string(vm.loginState.text);$out += ' ';if (vm.loginCouponType == "nLoginYCoupon" || vm.loginCouponType == "nLoginYReduce") {
																								$out += ' <span class="loginCoupon">￥';$out += $string(vm.priceInfo.couponVal);$out += '</span> ';
																					}$out += ' <span style="display:none" id="couponval"></span> ';if (!vm.__customization__.forbidLoginSwitch) {
																								$out += ' <label class="label-switch tjclick" data-tj=\'{"cspot":"loginbutton"}\'> <div class="checkbox" data-checkbox="false"> <span class="open"></span> <span class="close"></span> </div> </label> ';
																					}$out += ' </li> <li class="tel"> <div class="label">手机号：</div> <label for="login-code"></label> <div class="area-address"> <input type="text" readonly="readonly" id="login-code" class="login-code" value="1" title="中国大陆+86"> <span><i class="icon-bottom"></i></span> </div> <input type="tel" maxlength="25" class="login-number" placeholder="点此输入手机号码" id=""> </li> <li class="imgwrong"> <div class="label">图形验证码：</div> <div class="content list-input list-input-s"><img src="" height="30"> <input type="text" maxlength="4" class="name" placeholder="点此输入"> </div> </li> <li class="code"> <div class="label">短信验证码：</div> <div class="content list-input list-input-s"> <button class="button not-allow" disabled="true">获取验证码</button> <input type="text" maxlength="6" class="name" placeholder="点此输入"> </div> </li> <li class="imgcode"> <div class="label">图形验证码：</div> <div class="content list-input list-input-s"><img src="" height="30"> <input type="text" maxlength="4" class="name" placeholder="点此输入"> </div> </li> ';if (vm.__customization__.clause) {
																								$out += ' <li class=\'shouqq_warning\'> <div class="checkbox warning_pic"></div>';$out += $string(vm.__customization__.clause);$out += ' </li> ';
																					} else {
																								$out += ' <li class="clause"> <div class="checkbox checked"></div>同意<a href="javascript:void(0);">艺龙旅行网服务条款</a> </li> ';
																					}$out += ' <li class="login"> <div class="login-sign tjclick" data-tj=\'{"cspot":"login"}\'> ';if (vm.__customization__.loginText) {
																								$out += ' ';$out += $string(vm.__customization__.loginText);$out += ' ';
																					} else {
																								$out += ' 登录 ';
																					}$out += ' </div> </li> </ul> </div> ';
																		}$out += ' ';
															}$out += ' <div class="page-content ';if (vm.__customization__.createorderhiddenLogin) {
																		$out += ' ';
															} else if (vm.loginFlag == 0) {
																		$out += ' order-fill-top';
															}$out += ' odr_doc"> <div class="odr_info"> <div class="info_mn"> <span class="odr_icl"></span> <span class="odr_icr"></span> <div class="odr_tit"> <h2>';$out += $string(vm.hotelName);$out += '</h2> ';if (["0", "1", "3"].indexOf(vm.isCreateOrderNew) > -1) {
																		$out += ' <p>';$out += $string(vm.roomInfo);if (vm.productName && vm.productName != "") {
																					$out += '(';$out += $string(vm.productName);$out += ')';
																		}$out += '</p> <div class="btn_det rpdetaillayer tjclick" data-tj=\'{"cspot":"roomdetails"}\'>详情</div> ';
															}$out += ' </div> <div class="odr_mm"> ';if (["0", "1", "3"].indexOf(vm.isCreateOrderNew) > -1) {
																		$out += ' <p class="us_dt"> <span>';$out += $string(vm.checkinMonthAndDateInChinese);$out += '<em>';$out += $string(vm.checkinDayInChinese);$out += '入住</em></span> <span>';$out += $string(vm.checkoutMonthAndDateInChinese);$out += '<em>';$out += $string(vm.checkoutDayInChinese);$out += '离店</em></span> <em class="all_ni">共';$out += $string(vm.stayDays);$out += '晚</em> </p> ';
															} else {
																		$out += ' <p class="us_dt"> <span><em>入住</em>';$out += $string(vm.checkInDate.substring(5));$out += '</span> <span><em>离店</em>';$out += $string(vm.checkOutDate.substring(5));$out += '</span> <span>共';$out += $string(vm.stayDays);$out += '晚</span> </p> <p class="ht_type"> <span class="ht_nm">';$out += $string(vm.roomInfo);$out += '</span> <span class="ht_tp"> <span>';$out += $string(vm.productName);$out += '</span> ';if (vm.showAgentFlag == true) {
																					$out += ' <span>代理</span> ';
																		}$out += ' ';if (vm.minStocks > 0) {
																					$out += ' <span class="cf55">仅剩';$out += $string(vm.minStocks);$out += '间</span> ';
																		}$out += ' </span> </p> ';if (vm.confirmNow || vm.freeCancel == true || vm.showGift == true) {
																					$out += ' <p class="ht_tag"> ';if (vm.freeCancel == true) {
																								$out += ' <span class="tg freeCancel">免费取消</span> ';
																					}$out += ' ';if (vm.showGift == true) {
																								$out += ' <span class="tg">礼</span> ';
																					}$out += ' </p> ';
																		}$out += ' <p class="ht_more tjclick rpdetaillayer" data-tj=\'{"cspot":"roomdetails"}\'>房型详情<i></i></p> ';
															}$out += ' </div> </div> ';if ((vm.confirmNow || vm.mostFavorable) && ["0", "1", "3"].indexOf(vm.isCreateOrderNew) === -1) {
																		$out += ' <div class="odr_info_tip" id="odr_info_tip"> ';if (vm.mostFavorable) {
																					$out += ' <p class="odr_info_tip1"><i></i>恭喜！您找到该房型最优惠价格</p> ';
																		}$out += ' ';if (vm.confirmNow) {
																					$out += ' <p class="odr_info_tip2 immediate"><i></i>订单提交后，酒店第一时间确认您的订单</p> ';
																		}$out += ' </div> ';
															}$out += ' </div> ';if (vm.hotelPolicies && ["0", "1", "3"].indexOf(vm.isCreateOrderNew) === -1) {
																		$out += ' <div class="valid-certificate"> ';$out += $string(vm.hotelPolicies);$out += ' </div> ';
															}$out += ' ';if ((!!vm.productInfo && vm.productInfo.applicablePeopleTips || vm.needEnName != 0) && ["0", "1", "3"].indexOf(vm.isCreateOrderNew) === -1) {
																		$out += ' <div class="clearsb"> <div class="tswa"> <p> <span>特别提示</span> ';if (vm.productInfo && vm.productInfo.applicablePeopleTips) {
																					$out += ' <span class="icon"> ';$out += $escape(vm.productInfo.applicablePeopleTips);$out += ' </span> ';
																		}$out += ' ';if (vm.needEnName != 0) {
																					$out += ' <span class="icon"> 请您输入英文名称或中文拼音，并务必保证和有效证件上姓名一致，以保证正常入住，如：李明为li/ming。 </span> ';
																		}$out += ' </p> <span class="btnclose tjclick" data-tj=\'{"cspot":"offspecialinstruction"}\'> <i></i> </span> </div> </div> ';
															}$out += ' ';if (["0", "1", "3"].indexOf(vm.isCreateOrderNew) > -1) {
																		$out += ' ';if (vm.promoteTextDTOList && vm.promoteTextDTOList.length > 0) {
																					$out += ' <div class="odr_info_tip bian_css" id =\'odr_info_tip\'> ';$out += $string(vm.promeotionText);$out += ' </div> ';
																		}$out += ' <section class="order-info bian_css"> <div class="p-info"> <ul> <li class="bdb tjclick" data-tj=\'{"cspot":"roomnumber"}\' id="js_room_number"> <div class="label">房间数</div> <div class="content list-input" > <div class="cert-type" id="room-number">1间</div> <span></span> </div> </li> <li class="bdb tjclick" data-tj=\'{"cspot":"timereserve"}\' id="js_room_reservation"> <div class="label">到店时间</div> <div class="content list-input" > <div class="cert-type" id="room-reservation"></div> <span></span> </div> </li> ';if (vm.specialRequirement && vm.showSpecialRequrements == true) {
																					$out += ' <li class="tjclick" data-tj=\'{"cspot":"requirements"}\' id="js_specialrequirement"> <div class="label">特殊要求</div> <div class="content list-input"> <div class="cert-type" id="specialrequirement">无</div> <span></span> </div> </li> ';
																		}$out += ' </ul> </div> </section> <article class="order-content"> <section class="order-fill"> <div class="order-contact bian_css"> <div class="contact-person"> <ul> <li class="bdb"> <div class="label name_instruction tjclick" data-tj=\'{"cspot":"nameinstruction"}\'>入住人 ';if (vm.needEnName == 1) {
																					$out += '<i></i>';
																		}$out += ' </div> ';if (vm.needEnName == 1) {
																					$out += ' <div class="content list-input eng_name"> <div> <input type="text" class="cert-type" placeholder="姓(英文)" value=""> </div> <span></span> <div> <input type="text" class="cert-type" placeholder="名(英文)" value=""> </div> </div> ';
																		} else {
																					$out += ' <div class="content list-input"> <input type="text" class="cert-type createorder" name="customernames" id="cusname1" pr="12" placeholder="姓名，每间填1人" value=""> </div> ';
																		}$out += ' </li> </ul> <div class="add-person-button tjclick" data-tj=\'{"cspot":"selectname"}\'> <div class="add_line bdl"> <div class="person-choose"> <div class="icon-person-choose"></div>选择入住人 </div> </div> </div> </div> <div class="contact-tel"> <div class="tel_con bdt"> <div class="tel-text"> <span class="tel-person">联系电话</span> <div class="tel_show"> <div class="area-address" id="js_area_code"> <div class="area-code createorder" data-name="areacodeconnect" data-value="" id="area-code">+86</div> <span><i class="icon-bottom"></i></span> </div> <input type="tel" maxlength="25" class="area-number createorder" name="connectormobile" placeholder="联系人手机号" pr="12" id="contactormobile" value=""> </div> </div> <div class="tel-choose bdl tjclick" data-tj=\'{"cspot":"selecttelnum"}\' style="color: rgb(220, 220, 220);"> <div class="icon-choose"> <div class="icon-tel-choose" style="color: rgb(220, 220, 220);"></div> </div> </div> </div> </div> ';if (vm.productInfoStr.isBookingProduct == true) {
																					$out += ' <div class="contact-tel"> <div class="tel_con bdt"> <div class="tel-text"> <span class="tel-person">电子邮箱</span> <div class="tel_show"> <input type="text" maxlength="25" class="booking-email area-number createorder" pr="12" name="connectoremail" placeholder="用于接收订单确认信息" id="contactoremail" value=""> </div> </div> </div> </div> ';
																		}$out += ' ';if (vm.activityType == "1" || vm.activityType == "2" || vm.activityType == "3" || vm.activityType == "4") {
																					$out += ' <div class="order-occupancy order-occupancy1"> <ul> <li class="person-identify bdt"> <label for="person-id"></label> <div class="label">入住人身份证</div> <div class="content list-input"> <input type="text" class="cert-type" id="person-id" maxlength="18" placeholder="请输入入住人身份证"> ';if (vm.activityType = "3") {
																								$out += ' <div class="id_ico_bor bdl"> <span class="id-ico js_check_IdCard"></span> </div> ';
																					}$out += ' </div> </li> </ul> </div> ';
																		}$out += ' <p class="ad_text botao-new-tip" style="display: none;"> 该房型为铂涛新会员专享，您填写的身份证号将会用于注册铂涛会员。请确保会员本人入住，否则无法享受优惠。 </p> ';if (vm.productInfo.boTao121Product && vm.productInfo.boTao121Product.boTao121Product == true) {
																					$out += ' <p class="ad_text">';$out += $string(vm.productInfo.boTao121Product.boTao121OrderDescription);$out += '</p> ';
																		}$out += ' ';if (!!vm.productInfo.applicablePeopleTips) {
																					$out += ' <p class="more_text">';$out += $escape(vm.productInfo.applicablePeopleTips);$out += '</p> ';
																		}$out += ' </div> <div class="bian_css"> <div class="order-login order-hongbao"> <ul> <li class="selected hide" id="couponval"> <p class="coupontext"></p> <span><b class="showcouponval"></b></span> </li> <li class="selected bdt hide" id="loginHongbaoType"> ';if (vm.isCreateOrderNew == 3) {
																					$out += ' <p class="hongbaotext"></p> <span><b class="showhongbaoval"></b><em></em></span><i></i> ';
																		} else {
																					$out += ' <p class="hongbaotext"></p><em></em> <span><b class="showhongbaoval"></b></span><i></i> ';
																		}$out += ' </li> <li class="selected bdt hide" id="extracoupon"> <p class="extracoupontext">额外返现</p> <span><b class="showhongbaoval"></b></span> </li> <li class="selected bdt xk_58_sale hide" id="xinke"> <div class="xinkehint readNewUser58 tjclick" data-tj=\'{"cspot":"newcustomercouponinstruction"}\'>';$out += $escape(vm.isCreateOrderNew == 3 ? "新客返现" : "新客专享返现");$out += '<b class="ask_more"></b></div> <span><b class="showhongbaoval cert-type"></b></span> </li> <div class="more_text xk_tips" style="display:none">';$out += $string(vm.xinke58Content);$out += '</div> <div class="price_chips bdt hide" id="price_chips"> <p class="all total-sale"><span>优惠共计</span><span></span></p> </div> </ul> <p class="more_exp hide" id="invoice-elong1">返现需在离店后30天到订单详情页面领取，过期未领取视为自动放弃。';$out += $string(vm.tipForCashBack);$out += '</p> <p class="btn_exp hide" id="login-help">返现立减指南<b></b></p> </div> </div> <div class="bian_css hide" id="cancels"> <div class="order-login order-hongbao"> <ul> <li class="selected cancels"> <div class="cancelInsuranceInfo tjclick" data-tj=\'{"cspot":"insurancecancelinstruction"}\'>取消险<b class="ask_more"></b></div> <span class="choosewx"><b class="showhongbaoval cert-type"></b><i class="tjclick"></i></span> </li> </ul> <p class="more_exp">只需5%房费即在理赔范围内可获最高90%赔偿</p> </div> </div> ';if (vm.isCreditOrFlash == 1 || vm.isCreditOrFlash == 2) {
																					$out += ' <div class="bian_css"> <div class="order_sz"> <div class="selected"> <div class="sz"><b class="ask_more"></b></div> <div class="sz_content"> <p class="bdl"> ';if (vm.isCreditOrFlash == 1 && vm.isDefaultCreditOrFlash && vm.depositMoney > 0) {
																								$out += ' <span class="top"> ';$out += $escape(vm.creditFlashLiveDesc[1]);$out += ' </span> ';
																					} else {
																								$out += ' <span class="top"> ';$out += $escape(vm.creditFlashLiveDesc[0]);$out += ' </span> ';
																					}$out += ' <span>选择闪住即视为同意 <a href="http://promotion.elong.com/app/2016/11/flashRrotocolH5/index.html">《闪住服务相关协议》</a> ';if (vm.contractName && vm.contractName !== "" && vm.contractUrl && vm.contractUrl !== "") {
																								$out += ' <a href="';$out += $string(vm.contractUrl);$out += '">';$out += $string(vm.contractName);$out += '</a> ';
																					}$out += ' </span> </p> </div> <i></i> </div> </div> </div> ';
																		}$out += ' <div class="bian_css"> <div class="order-login order-hongbao js_invoice tjclick" data-tj=\'{"cspot":"invoice"}\'> <ul> <li class="selected">发票<span class="bill">';$out += $escape(!vm.canUserPreInvoice ? "未开具" : "发票由酒店提供，支持在线预约");$out += '</span><i></i></li> </ul> </div> </div> ';if (vm.productInfoStr.isBookingProduct == true) {
																					$out += ' <div class="booking-logo"> <div class="booking-img"></div> </div> ';
																		}$out += ' <div>';$out += $escape(vm.productInfoStr.isBookingProduct);$out += '</div> <div class="explain_text"> <div class="order-login order-hongbao"> ';if (vm.showAgentFlag == true) {
																					$out += ' <h1>代理说明</h1> <p class="more_exp">此为向代理申请的特殊价格，我们会在1小时内回复您预订结果，订单确认后，请直接报订单中的入住客人姓名办理入住。</p> ';
																		}$out += ' ';if (vm.cancelableDescription || vm.cancleDesc) {
																					$out += ' <h1>取消规则</h1> ';
																		}$out += ' ';if (vm.cancelableDescription) {
																					$out += ' <p class="more_exp cancle-desc">';$out += $string(vm.cancelableDescription);$out += '</p> ';
																		}$out += ' ';if (vm.cancleDesc) {
																					$out += ' <p class="more_exp cancle-desc2" ';if (vm.cancelableDescription) {
																								$out += 'style="display:none"';
																					}$out += '>';$out += $string(vm.cancleDesc);$out += '</p> ';
																		}$out += ' ';if (vm.productInfoStr.isBookingProduct == true && vm.bookingInfo.length > 0) {
																					$out += ' <h1>重要信息</h1> <div class="special-content"> <div class="text" id="bookingtext"> <p class="more_exp cancle-desc booking-text">';$out += $escape(vm.bookingInfo);$out += '</p> <div class="mask" id="bookingmask"></div> </div> <div class="special-text" id="bookingbtn"> <div class="content"> <span>全部展开</span><i class="icon-left icon-arrow close"></i> </div> </div> </div> ';
																		}$out += ' <h1 class="js_wxts ';if (vm.invoiceAtElong == 1) {
																					$out += 'hide';
																		}$out += '">温馨提示</h1> ';if (vm.invoiceAtElong == 1) {
																					$out += ' <p class="more_exp invoiceRedTip"> 国家税务总局要求，2017年7月1日起，企业发票需带有纳税人识别号或统一社会信用代码，否则无法报销。如暂时忘记可先行预订酒店，后续补开发票即可。 </p> ';
																		}$out += ' ';if (vm.invoiceAtElong == 1) {
																					$out += ' <p class="more_exp" id="invoice-elong"> ';if (vm.invoiceType[0].value == "0") {
																								$out += $string(vm.invoiceElongTip);
																					} else {
																								$out += $string(vm.einvoiceElongTip);
																					}$out += ' </p> ';
																		} else {
																					$out += ' <p class="more_exp" id="invoice-elong"> 如需发票请到酒店前台咨询 </p> ';
																		}$out += ' ';if (vm.invoiceAtElong == 1) {
																					$out += ' ';if (vm.invoiceType[0].value == "0") {
																								$out += ' ';
																					} else {
																								$out += ' <p class="more_exp" id="einvoice-tip"> 电子发票开具后，您可在发票详情页添加发票到微信卡包，或者在艺龙官网下载打印发票。电子发票是税务局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票。 </p> ';
																					}$out += ' ';
																		}$out += ' </div> </div> <div class="search"> <button id="padsubmit" class="btn btn-primary btn-block"> 提交订单 </button> </div> <div class="get-div"></div> </section> </article> ';
															} else {
																		$out += ' <article class="order-content"> <section class="order-fill"> <div class="order-occupancy"> <h1>入住信息 <span> ';if (vm.mostFavorable) {
																					$out += ' <div class="preferential-price">恭喜，您找到的是该房型最优惠的价格。</div> ';
																		}$out += ' </span> </h1> <ul> <li class="tjclick" data-tj=\'{"cspot":"roomnumber"}\'> <label for="room-number"></label> <div class="label"> ';if (vm.__customization__.roomCount) {
																					$out += ' ';$out += $string(vm.__customization__.roomCount);$out += ' ';
																		} else {
																					$out += ' 房间数 ';
																		}$out += ' </div> <div class="content list-input"> <input type="text" readonly="readonly" class="cert-type createorder" id="room-number" name="roomcount" value=""> <span><i class="icon-left icon-arrow"></i></span> </div> </li> <li class="room-big" ';if (vm.roomCount <= 5) {
																					$out += 'style="display:none"';
																		}$out += '> 因房量大于5间，可能无法立即确认 </li> <li class="tjclick" data-tj=\'{"cspot":"timereserve"}\'> <label for="room-reservation"></label> <div class="label"> ';if (vm.__customization__.roomKeepTo) {
																					$out += ' ';$out += $string(vm.__customization__.roomKeepTo);$out += ' ';
																		} else {
																					$out += ' 保留至 ';
																		}$out += ' </div> <div class="content list-input"> <input type="text" readonly="readonly" class="cert-type" id="room-reservation" value=""> <span><i class="icon-left"></i></span> </div> </li> ';if (vm.bigOrDoubleBed) {
																					$out += ' <li> <label for="bed-type"></label> <div class="label">大双床要求</div> <div class="content list-input"> <input type="text" readonly="readonly" class="cert-type" id="bed-type" value="1"> <span><i class="icon-left"></i></span> </div> </li> ';
																		}$out += ' </ul> </div> ';if (vm.confirmNow) {
																					$out += ' <div class="immediatelyConfirm-deficiency">因房量紧张，酒店需要一些时间确认您的订单</div> ';
																		}$out += ' <div class="guarantee-payment" style=\'display:none\'>因房量紧张，酒店需要您支付预订担保金</div> ';if (vm.__customization__.bindMobilePhone && vm.loginFlag == 0) {
																					$out += ' <div class="binding-mobilephone">';$out += $string(vm.__customization__.bindMobilePhone);$out += '</div> ';
																		}$out += ' <div class="order-contact"> <h1>联系资料</h1> <div class="contact-person"> <ul> <li> <label for="cusname1"></label> <div class="label">入住人(房间1)</div> <div class="content list-input ';if (vm.needEnName == '1') {
																					$out += ' eng_name';
																		}$out += '"> ';if (vm.needEnName == "0") {
																					$out += ' <input type="text" class="createorder" name="customernames" id="cusname1" placeholder="姓名，每间填1人" value=""> ';
																		} else {
																					$out += ' <div> <input type="text" class="cert-type" placeholder="姓(英文)" id="lastname1"> </div> <span></span> <div> <input type="text" class="cert-type" placeholder="名(英文)" id="firstname1"> </div> ';
																		}$out += ' </div> </li> </ul> <div class="add-person-button tjclick" data-tj=\'{"cspot":"selectname"}\'> <div class="person-choose"> <div class="icon-person-choose"></div>选择入住人 </div> </div> </div> <div class="contact-tel"> <div class="tel-text"> <span class="tel-person">联系人手机：</span> <div class="area-address"> <label for="area-code"></label> <input type="text" readonly="readonly" id="area-code" class="area-code createorder" name="areacodeconnect" value="1" title="中国大陆+86"> <span><i class="icon-bottom"></i></span> </div> <input type="tel" maxlength="25" class="area-number createorder" name="connectormobile" placeholder=联系人手机号 id="contactormobile" value=""> </div> <div class="tel-choose tjclick" data-tj=\'{"cspot":"selecttelnum"}\'> <div class="icon-choose"><div class="icon-tel-choose"></div>选择手机号</div> </div> </div> ';if (vm.productInfoStr.isBookingProduct == true) {
																					$out += ' <div class="contact-email"> <ul> <li> <div class="label">电子邮箱</div> <div class="content list-input"> <input type="text" class="createorder" name="connectoremail" id="contactoremail" placeholder="用于接收订单确认信息" value=""> </div> </li> </ul> </div> ';
																		}$out += ' </div> <div class="order-occupancy order-occupancy1"> <ul> ';if (vm.specialRequirement && vm.showSpecialRequrements == true) {
																					$out += ' <li class="tjclick" data-tj=\'{"cspot":"requirements"}\'> <label for="bed-type" class="specialrequirement"></label> <div class="label">特殊要求</div> <div class="content list-input"> <input id ="specialrequirement" type="text" readonly="readonly" class="cert-type" id="bed-type" value="无" placeholder="无"> <span><i class="icon-left"></i></span> </div> </li> ';
																		}$out += ' ';if (vm.activityType == "1" || vm.activityType == "2" || vm.activityType == "3" || vm.activityType == "4") {
																					$out += ' <li class="person-identify"> <label for="contactoridcard"></label> <div class="label">入住人身份证</div> <div class="content list-input"> <input type="text" maxlength="18" class="id-type" name="idcard" id="contactoridcard" placeholder="入住人身份证号"> <i class="icon-cross clear-input" style="top: 7px;"></i> ';if (vm.activityType = "3") {
																								$out += ' <div class="ico-div js_check_IdCard"> <span class="id-ico"></span> </div> ';
																					}$out += ' </div> </li> ';
																		}$out += ' </ul> </div> <div class="huazhu-tip new_warning" style="display:none"> <i class="icon-ok5"></i> <span class="warning_text">如该入住人还没注册华住会员，我们将帮助该入住人申请注册成为华住会员。</span> </div> <div class="botao-tip new_warning" style="display:none"> <i class="icon-ok5"></i> <span class="warning_text">如该入住人还没注册铂涛会员，我们将帮助该入住人申请注册成为铂涛会员。</span> </div> <div class="botao-new-tip new_warning" style="display:none"> <i class="icon-ok5"></i> <span class="warning_text">该房型为铂涛新会员专享，您填写的身份证号将会用于注册铂涛会员。请确保会员本人入住，否则无法享受优惠</span> </div> ';if (vm.productInfo.boTao121Product && vm.productInfo.boTao121Product.boTao121Product == true) {
																					$out += ' <div class="botao-cuxiao new_warning"> <i class="icon-ok5"></i> <span class="warning_text">';$out += $string(vm.productInfo.boTao121Product.boTao121OrderDescription);$out += '</span> </div> ';
																		}$out += ' <div class="xk_58_sale order-occupancy" style ="display:none;"> <ul> <li> <div class="label">新客专享返现</div> <div class="content list-input"><span class="cert-type"></span></div> </li> </ul> </div> <div class="clearsb xk_tips" style ="display:none;"> ';$out += $string(vm.xinke58Content);$out += ' </div> ';if (vm.priceInfo.subCoupon) {
																					$out += ' <div class="order-login order-hongbao"> <ul> <li class="selected fxselected"> ';$out += $string(vm.__customization__.fxselected);$out += '<span><b class="showcouponval"></b></span><b></b> </li> </ul> </div> ';$out += 'elseif vm.__customization__.createorderFxselected && vm.priceInfo.couponVal == 0> <div class="order-login order-hongbao"> <ul> <li class="selected fxselected"> ';$out += $string(vm.__customization__.createorderFxselected);$out += '<span><b class="showcouponval"></b></span><b></b> </li> </ul> </div> ';$out += 'elseif vm.__customization__.createorderFxselected && vm.priceInfo.showCouponVal == 0> <div class="order-login order-hongbao gtgj" style="display: none"> <ul> <li class="selected fxselected"> ';$out += $string(vm.__customization__.createorderFxselected);$out += '<span><b class="showcouponval"></b></span><b></b> </li> </ul> </div> ';
																		} else {
																					$out += ' <div class="order-login order-hongbao hide"> <ul> <li class="selected hide" id="couponval"> <span><b class="showcouponval"></b> <div id="cbfanxian" name="selectfanxian" class="checkbox createorder hide"></div></span> </li> <li class="selected fxselected red redpackethit hide" id="loginHongbaoType"> <span><b class="showhongbaoval no-show"></b></span><b></b> </li> </ul> </div> ';
																		}$out += ' <div class="invoice-elong hide" id="invoice-elong1">返现需在离店后30天内到订单详情页面领取，过期未领取视为自动放弃。';$out += $string(vm.tipForCashBack);$out += '</div> <div class="login-help hide" id="login-help"><a href="javascript:void(0);">返现立减指南</a></div> <div class="order-occupancy cancels hide"> <ul> <li> <div class="label cancelInsuranceInfo tjclick" data-tj=\'{"cspot":"insurancecancelinstruction"}\'>取消险</div> <div class="content list-input"> <span class="cert-type"></span> <span class="choosewx"><i class=\'tjclick\'></i></span> </div> </li> </ul> </div> ';if (vm.isCreditOrFlash == 1 || vm.isCreditOrFlash == 2) {
																					$out += ' <div class="order_sz"> <div class="selected"> <div class="sz"><b class="ask_more"></b></div> <div class="sz_content"> <p class="bdl"> ';if (vm.isCreditOrFlash == 1 && vm.isDefaultCreditOrFlash && vm.depositMoney > 0) {
																								$out += ' <span class="top"> ';$out += $escape(vm.creditFlashLiveDesc[1]);$out += ' </span> ';
																					} else {
																								$out += ' <span class="top"> ';$out += $escape(vm.creditFlashLiveDesc[0]);$out += ' </span> ';
																					}$out += ' <span>选择闪住即视为同意 <a href="http://promotion.elong.com/app/2016/11/flashRrotocolH5/index.html">《闪住服务相关协议》</a> ';if (vm.contractName && vm.contractName !== "" && vm.contractUrl && vm.contractUrl !== "") {
																								$out += ' <a href="';$out += $string(vm.contractUrl);$out += '">';$out += $string(vm.contractName);$out += '</a> ';
																					}$out += ' </span> </p> </div> <i></i> </div> </div> ';
																		}$out += ' <div class="new_warning cancels-warning hide"> <span class="warning_text noicon">因故无法入住，只需5%房费即在理赔范围可获最高90%赔偿</span> </div> ';if (vm.invoiceAtElong == 1) {
																					$out += ' <div class="order-invoice" id="order-invoice"> <ul> <li class="margin" id="whetherReceipt"> ';$out += $escape(!vm.canUserPreInvoice ? "需要发票" : "预约发票");$out += ' <label class="label-switch tjclick" data-tj=\'{"cspot":"invoice"}\'> <div id="needinvoiceflag" class="checkbox" data-checkbox="false"> <span class="open"></span> <span class="close"></span> </div> </label> </li> <li> <label for="invoice-type" class="invoice-type"></label> <div><p><span>发票类型：</span><span id="invoice-type" data-value="';$out += $string(vm.invoiceType[0].value);$out += '">';$out += $string(vm.invoiceType[0].text);$out += '</span></p></div> </li> <li class="invoice-header-type"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span>抬头类型：</span> <span class="invoice-header"> <a href="javascript:;" class="active">公司</a> <a href="javascript:;">个人</a> <a href="javascript:;">机关单位</a> </span> </p> </div> </li> <li class="selected-invoice-title inc_tit"> <label for="invoice-type" class="invoice-type"></label> <div><p> <span>发票抬头：</span> <span ';if (vm.defInvoiceTitle == null) {
																								$out += 'style="display:none"';
																					}$out += ' id="invoice-title" data-value="';$out += $string(vm.defInvoiceTitle && vm.defInvoiceTitle.value);$out += '" data-id="';$out += '#vm.defInvoiceTitle&&vm.defInvoiceTitle.id}"><em>';$out += $string(vm.defInvoiceTitle && vm.defInvoiceTitle.value);$out += '</em></span> ';if (vm.defInvoiceTitle == null) {
																								$out += ' <span class="hui"><em>请输入发票抬头</em></span> ';
																					}$out += ' </p></div> </li> <li> <label for="invoice-type" class="invoice-type"></label> <div><p><span>发票内容：</span><span id="invoice-content">住宿费</span></p></div> </li> <li class="inc_tit taxpayerNumber"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span class="taxpayer-num">纳税人识别号<b>?</b></span> <span class="taxpayer-inp"> <input type="text" placeholder="公司统一纳税编号"> </span> </p> </div> </li> <li id="invoice-shuiwuId"> <label for="invoice-type" class="invoice-type"></label> <div><p><span>纳税人识别号：</span><span><input type="text" placeholder="税务登记证上的编号" value=""></span></p></div> </li> <li id="invoice-registerAddress"> <label for="invoice-type" class="invoice-type"></label> <div><p><span>注册地址：</span><span><input type="text" placeholder="营业执照上的登记地址" value=""></span></p></div> </li> <li id="invoice-companyPhone"> <label for="invoice-type" class="invoice-type"></label> <div><p><span>公司电话：</span><span><input type="tel" placeholder="有效公司电话" value=""></span></p></div> </li> <li id="invoice-openbank"> <label for="invoice-type" class="invoice-type"></label> <div><p><span>开户银行：</span><span><input type="text" placeholder="请与开户许可证保持一致" value=""></span></p></div> </li> <li id="invoice-bankId"> <label for="invoice-type" class="invoice-type"></label> <div><p><span>银行账号：</span><span><input type="tel" placeholder="请与开户许可证保持一致" value=""></span></p></div> </li> <li class="invoice-type" id="invoice-phone"> <label for="invoice-type" class="invoice-type"></label> <div><p> <span>收票人手机：</span> <span><input type="text" placeholder="请输入手机号" value="';$out += $string(vm.defAddress && vm.defAddress.phoneNo);$out += '"></span> </p></div> </li> <li class="invoicePostAddress"> <label for="invoice-type" class="invoice-type"></label> <div class="address_detail" data-id="';$out += $string(vm.defAddress && vm.defAddress.id);$out += '"> <p> <span>邮寄地址：</span> <span class="postAddressContent"> <span class="usermess"> <b style="font-weight:normal">';$out += $string(vm.defAddress && vm.defAddress.name);$out += '</b> <em>';$out += $string(vm.defAddress && vm.defAddress.phoneNo);$out += '</em> </span> <em class="address-detail">';$out += $string(vm.defAddress && vm.defAddress.addressContent);$out += '</em> </span> </p> </div> </li> ';if (vm.delieverTypeInfos && vm.delieverTypeInfos.length > 5) {
																								$out += ' <li id="express-method"> <label for="invoice-type" class="invoice-type"></label> <div><p><span>邮寄方式：</span><span id="express-fee"></span></p></div> </li> ';
																					}$out += ' <li class="voucher_bei on"> <label for="invoice-type" class="invoice-type"></label> <div><p><span>发票备注</span></p></div> <ul> <li><span>酒店名称：</span>';$out += $string(vm.hotelName);$out += '</li> <li><span>入住时间：</span>';$out += $string(vm.invoiceRemarkInDate);$out += '<span class="sec">离店时间：</span>';$out += $string(vm.invoiceRemarkOutDate);$out += '</li> <li><span>房间数量：</span><span class="voucher-room-count" ></span></li> </ul> <i></i> </li> </ul> </div> ';
																		}$out += ' ';if (vm.productInfoStr.isBookingProduct == true) {
																					$out += ' <div class="booking-logo booking-logo-v1"> <div class="booking-img"></div> </div> ';
																		}$out += ' <span class="ive_tit ive_tit1 ';if (vm.invoiceAtElong == 1) {
																					$out += 'hide';
																		}$out += '">温馨提示</span> <div class="invoice-elong tip first-red invoiceRedTip"> ';if (vm.invoiceAtElong == 1) {
																					$out += ' 国家税务总局要求，2017年7月1日起，企业发票需带有纳税人识别号或统一社会信用代码，否则无法报销。如暂时忘记可先行预订酒店，后续补开发票即可。 ';
																		}$out += ' </div> <div class="invoice-elong tip" id="invoice-elong"> ';if (vm.invoiceAtElong == 1) {
																					$out += ' ';if (vm.invoiceType[0].value == "0") {
																								$out += $string(vm.invoiceElongTip);
																					} else {
																								$out += $string(vm.einvoiceElongTip);
																					}$out += ' ';
																		} else {
																					$out += ' 如需发票请到酒店前台咨询 ';
																		}$out += ' </div> <div class="invoice-elong tip" id="einvoice-tip"> ';if (vm.invoiceAtElong == 1) {
																					$out += ' ';if (vm.invoiceType[0].value == "0") {
																								$out += ' ';
																					} else {
																								$out += ' 电子发票开具后，您可在发票详情页添加发票到微信卡包，或者在艺龙官网下载打印发票。电子发票是税务局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票。 ';
																					}$out += ' ';
																		}$out += ' </div> ';if (vm.cancelableDescription) {
																					$out += ' <div class="invoice-elong cancle-desc"> <span class="ive_tit">取消规则</span><p>';$out += $string(vm.cancelableDescription);$out += '</p> </div> ';
																		}$out += ' ';if (vm.cancleDesc) {
																					$out += ' <div class="invoice-elong cancle-desc2" ';if (vm.cancelableDescription) {
																								$out += 'style="display:none"';
																					}$out += '> ';if (vm.cancleDesc) {
																								$out += ' <span class="ive_tit">取消规则</span><p>';$out += $string(vm.cancleDesc);$out += '</p> ';
																					}$out += ' </div> ';
																		}$out += ' ';if (vm.productInfoStr.isBookingProduct == true && vm.bookingInfo.length > 0) {
																					$out += ' <div class="invoice-elong cancle-desc"> <span class="ive_tit">重要信息</span> <div class="special-content"> <div class="text" id="bookingtext"> <p class="more_exp cancle-desc booking-text">';$out += $escape(vm.bookingInfo);$out += '</p> <div class="mask mask-v1" id="bookingmask"></div> </div> <div class="special-text" id="bookingbtn"> <div class="content"> <span class="span-v1">全部展开</span><i class="icon-left icon-arrow icon-arrow-v1 close"></i> </div> </div> </div> </div> ';
																		}$out += ' <div class="search"> <button id="padsubmit" class="btn btn-primary btn-block">提交订单</button> </div> <div class="get-div"></div> </section> </article> ';
															}$out += ' </div> <input type=\'hidden\' class="createorder" name="arrivetime" id=\'hidarriveTime\' value=""/> ';
												}$out += ' ';return new String($out);
									});
						}();
			}, // entry/hotel/tpl/roomRpDetailForNew.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":3,"md5":"3ddc8e30269943a933f53d0c197807c1"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('roomRpDetailForNew', function ($data, $filename /**/) {
												var $utils = this,
												    $helpers = $utils.$helpers,
												    $escape = $utils.$escape,
												    rpInfo = $data.rpInfo,
												    inHotelWeek = $data.inHotelWeek,
												    outHotelWeek = $data.outHotelWeek,
												    $each = $utils.$each,
												    roomAdditionInfoEntityList = $data.roomAdditionInfoEntityList,
												    tagItem = $data.tagItem,
												    $index = $data.$index,
												    tipsList = $data.tipsList,
												    tipsItem = $data.tipsItem,
												    promoteTextList = $data.promoteTextList,
												    promotionItem = $data.promotionItem,
												    $out = '';$out += '<div class="type-pop-box plugin-inited box-active order_typeilst"> <div class="bar order_typeilst_title">订单详情<i class="icon-cross"></i></div> <div class="order_detail_info"> <div class="hotel_info"> <div class="pic"> <img src="';$out += $escape(rpInfo.imgUrl);$out += '"> </div> <div class="h_info"> <p class="hotel_name">';$out += $escape(rpInfo.hotelName);$out += '</p> <p class="hotel_type">';$out += $escape(rpInfo.roomInfo);$out += '(';$out += $escape(rpInfo.productName);$out += ')</p> <p class="hotel_date"> <span>';$out += $escape(rpInfo.checkinMonthAndDateInChinese);$out += '</span> <em>周';$out += $escape(inHotelWeek);$out += '入住</em> <span>';$out += $escape(rpInfo.checkoutMonthAndDateInChinese);$out += '</span> <em>周';$out += $escape(outHotelWeek);$out += '离店</em> </p> <p class="hotel_num">共';$out += $escape(rpInfo.stayDays);$out += '晚</p> </div> </div> <div class="type_list"> <p class="faclist clearfix bdb"> ';$each(roomAdditionInfoEntityList, function (tagItem, $index) {
															$out += ' ';if (["breakfast", "window", "floor", "area", "bed", "personnum", "network", "other"].indexOf(tagItem.key) > -1 && tagItem.content != "未知") {
																		$out += ' <span><i class="detail_fac_v';$out += $escape(["breakfast", "window", "floor", "area", "bed", "personnum", "network", "other"].indexOf(tagItem.key));$out += '"></i>';$out += $escape(tagItem.content);$out += '</span> ';
															}$out += ' ';
												});$out += ' </p> ';$each(tipsList, function (tipsItem, $index) {
															$out += ' <p class="tip clearfix"><span class="dct_tit">';$out += $escape(tipsItem.tipName);$out += '：</span><span class="dct_txt">';$out += $escape(tipsItem.tipContent);$out += '</span></p> ';
												});$out += ' </div> <div class="type_tip bdt"> ';$each(promoteTextList, function (promotionItem, $index) {
															$out += ' <div class="type_tipb"> <div class=" type_tip1"> <i class="u_btn">';$out += $escape(promotionItem.typeLabel);$out += '</i> </div> <div class=" type_tip2"> ';$out += $escape(promotionItem.typeDesc);$out += ' </div> </div> ';
												});$out += ' </div> </div> <div class="bottom_cover"></div> </div>';return new String($out);
									});
						}();
			}, // entry/hotel/js/components/checkhotelinfo.js
			function (__inner_require__, exports, module) {
						var checkHotelInfoTpl = __inner_require__(19 /*entry/hotel/tpl/checkhotelinfo.js*/);module.exports = { tpl: '<div class="check_info_mask {mvt_268}" style="display:none"><div class="bar check_info"><h3>请您核对信息<div class="el_closed"><i></i></div></h3><ul></ul><div class="check_btn_wrap"><span class="u_btn eidt_back " >返回修改</span><span class="u_btn"  id="el_submit">确认信息</span></div></div></div>', init: function (createOrder) {
												this.page = $(this.tpl.replace('{mvt_268}', slark.getMvtResult('268') == '2' ? "" : "mvt_268")).appendTo(slark.getActiveLayer());this.bindEvent(createOrder);
									}, hotelinfo: {}, _show: function () {
												this.page.show();$('html,body').css("overflow", "hidden");
									}, _hide: function () {
												this.page.hide();$('html,body').css("overflow", "");
									}, bindEvent: function (createOrder) {
												var _this = this;$(slark.getActiveLayer()).off('click', '.el_check_info').on('click', '.el_check_info', function (e) {
															var tpl = checkHotelInfoTpl(_this.hotelinfo);_this.page.find('ul').html(tpl);_this._show();
												});this.page.find('.check_info').click(function (e) {
															e.stopPropagation();
												});this.page.find('.el_closed').click(function () {
															tjMVT.setData({ et: 'click', cspot: 'confirmclose' });_this._hide();
												});this.page.find('.eidt_back').click(function () {
															tjMVT.setData({ et: 'click', cspot: 'confirmback' });_this._hide();
												});this.page.click(function () {
															_this._hide();tjMVT.setData({ et: "click", cspot: 'confirmcloseshade' });
												});this.page.find('#el_submit').on('click', function () {
															tjMVT.setData({ et: 'click', cspot: 'confirmnextstep' });_this._hide(); //createOrder.createOrderPost();
												});
									} };
			}, // entry/hotel/tpl/checkhotelinfo.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":1,"md5":"3bb0d001aa9b3e20bc7dd99a2df39f64"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('checkhotelinfo', function ($data, $filename /**/) {
												var $utils = this,
												    $helpers = $utils.$helpers,
												    $escape = $utils.$escape,
												    hotelName = $data.hotelName,
												    RoomTypeName = $data.RoomTypeName,
												    roomcount = $data.roomcount,
												    indate = $data.indate,
												    outdate = $data.outdate,
												    payType = $data.payType,
												    price = $data.price,
												    isVouch = $data.isVouch,
												    showCouponText = $data.showCouponText,
												    returnMoney = $data.returnMoney,
												    $out = '';$out += '<li> <span class="info_item">酒店名称：</span> <p>';$out += $escape(hotelName);$out += '</p> </li> <li> <span class="info_item">房型名称：</span> <p> <span>';$out += $escape(RoomTypeName);$out += '</span> <span>';$out += $escape(roomcount);$out += '间</span> </p> </li> <li> <span class="info_item">入离日期：</span> <p> <span>';$out += $escape(indate);$out += '<em>入住</em></span> <span>';$out += $escape(outdate);$out += '<em>离店</em></span> </p> </li> <li> <span class="info_item">订单金额：</span> <p>';if (payType == 0) {
															$out += '到店后支付';
												} else {
															$out += '在线支付';
												}$out += '<i class="red">￥';$out += $escape(price);if (payType == 0 && isVouch) {
															$out += '(另需在线担保)';
												}$out += '</i> </p> </li> ';if (showCouponText && returnMoney) {
															$out += ' <li><span class="info_item">返现金额：</span> <p>离店后返现<i class="red">￥';$out += $escape(returnMoney);$out += '</i></p></li> ';
												}$out += ' ';return new String($out);
									});
						}();
			}, // entry/hotel/js/pages/createorder/ctrlErrorCode.js
			function (__inner_require__, exports, module) {
						/**
      * ming.jin 2017-09-12
      * for createorder
      * @param {Object} data 后端数据
      */var ctrlErrorCode = function (data) {
									var errorObj = {};if (data.errorCode) {
												switch (data.errorCode) {case 'HOTEL_LONGCUI_LOGIN':
																		errorObj.text = "抱歉，由于您选择的是龙萃房型，请登录龙萃账号或预订其他房型。";errorObj.btnText = "其他房型";break;case 'HOTEL_PARAMETER_INVALID':
																		//<!---------------参数错误-------------->
																		errorObj.text = "非常抱歉，您请求的参数有误，请重新预订。";errorObj.btnText = "返回酒店列表";break; //<!---------------酒店未找到-------------->
															case 'HOTEL_NOT_FOUND':
																		errorObj.text = "非常抱歉，该酒店不存在或已下架，您可以预订其他酒店。";errorObj.btnText = "返回酒店列表";break; //<!---------------房型未找到-------------->
															case 'HOTEL_PRODUCTS_NOT_FOUND':
																		errorObj.text = " 非常抱歉，该报价不存在或已过期，您可以选择其他报价。";errorObj.btnText = "返回酒店详情";break;case 'HOTEL_CHECKEDTIME_LONG':
																		errorObj.text = "抱歉，目前暂不支持入住时长超过20天的预订，请重新选择时间。";errorObj.btnText = "返回酒店列表";break;case 'HOTEL_CHECKEDTIME_FAR':
																		errorObj.text = "抱歉，目前暂不支持入住时间在180天以后的预订，请重新选择时间。";errorObj.btnText = "返回酒店列表";break;case 'HOTEL_OVERFLOW_MAXROOM':
																		errorObj.text = "抱歉，您选择的入住房间数大于单次预订最大房间数，请重新选择房间数量";errorObj.btnText = "返回酒店详情";break;case 'HOTEL_OVERFLOW_MINROOM':
																		errorObj.text = "抱歉，您选择的入住房间数小于起订房间数，请选择至少" + data.exRoomCount + "间房";errorObj.btnText = "";break;case 'PRODUCT_PROMOTION_ERROR':
																		errorObj.text = "抱歉，房量不足，请您预订其它房型。";errorObj.btnText = "返回酒店详情";break;case 'PRODUCT_NOROOM':
																		errorObj.text = "抱歉，房量不足，请您预订其它房型。";errorObj.btnText = "返回酒店详情";break;case 'QUNAR_HOLDING_TIME_ERR':
																		errorObj.text = "当前时间已超过可预订时间，请您选择其他产品，请您谅解。";errorObj.btnText = "返回酒店详情";break;case 'WEIXIN_TICKET_INVALID':
																		errorObj.text = "手太慢，这张优惠券被其他好友抢先一步使用中～";errorObj.btnText = "返回酒店详情";break;case 'TICKET_INVALID_TIMEOUT':
																		errorObj.text = "啊哦，小艺出错了，麻烦大侠再试一次~";errorObj.btnText = "再试一次";break;default:
																		errorObj.text = "抱歉，网络繁忙，请稍后再试。";errorObj.btnText = "返回酒店详情";break;}
									}return errorObj;
						};module.exports = ctrlErrorCode;
			}, // entry/hotel/js/pages/createorder/ctrlLoginState.js
			function (__inner_require__, exports, module) {
						/**
      * ming.jin 2017-09-12
      * for createorder
      * @param {String} loginCouponType loginCouponType
      * @param {Object} customization 
      * @param {Object} nlogin 
      */var ctrlLoginState = function (loginCouponType, customization) {
									var loginState = {};if (!customization.createorderhiddenLogin) {
												switch (loginCouponType) {case 'nLoginNCouponNReduce':
																		if (customization.couponNull) {
																					loginState.text = customization.couponNull;
																		} else {
																					loginState.text = nlogin.couponnull;
																		}break;case 'nLoginYCoupon':
																		if (customization.nLoginYCoupon) {
																					loginState.text = customization.nLoginYCoupon;
																		} else {
																					loginState.text = nlogin.nLoginYCoupon;
																		}break;case 'nLoginYReduce':
																		if (customization.nLoginYReduce) {
																					loginState.text = customization.nLoginYReduce;
																		} else {
																					loginState.text = nlogin.nLoginYReduce;
																		}break;default:
																		if (customization.couponNull) {
																					loginState.text = customization.couponNull;
																		} else {
																					loginState.text = nlogin.couponnull;
																		}}
									}return loginState;
						};var nlogin = { couponnull: "登录后可实时查看及管理订单", nLoginYCoupon: "登录预订可获取返现", nLoginYReduce: "登录预订才可享受立减" };module.exports = ctrlLoginState;
			}, // entry/hotel/js/pages/createorder/ctrlPromotionText.js
			function (__inner_require__, exports, module) {
						/**
      * ming.jin 2017-09-12
      * for createorder
      * @param {Array} promoteTextDTOList 
      */var ctrlPromotionText = function (promoteTextDTOList) {
									var promeotionText = "";if (promoteTextDTOList && promoteTextDTOList.length > 0) {
												promoteTextDTOList.forEach(function (item) {
															switch (item.typeId) {case "1":
																					//仅剩N间
																					promeotionText += '<p class="odr_info_tip5"><i></i>' + item.typeLabel + '<span>' + item.typeDesc + '</span></p>';break;case "2":
																					//免费取消
																					promeotionText += '<p class="odr_info_tip2 freeCancel"><i></i>' + item.typeLabel + '<span>' + item.typeDesc + '</p>';break;case "3":
																					//可取消
																					promeotionText += '<p class="odr_info_tip2"><i></i>' + item.typeLabel + '<span>' + item.typeDesc + '</p>';break;case "4":
																					//不可取消
																					promeotionText += '<p class="odr_info_tip3 "><i></i>' + item.typeLabel + '<span>' + item.typeDesc + '</p>';break;case "5":
																					//可转让
																					promeotionText += '<p class="odr_info_tip6"><i></i>' + item.typeLabel + '<span>' + item.typeDesc + '</p>';break;case "6":
																					//立即确认
																					promeotionText += '<p class="odr_info_tip3 immediate"><i></i>' + item.typeLabel + '<span>' + item.typeDesc + '</p>';break;case "7":
																					//最低价
																					promeotionText += '<p class="odr_info_tip1"><i></i>' + item.typeLabel + '<span>' + item.typeDesc + '</p>';break;case "8":
																					//礼包
																					promeotionText += '<p class="odr_info_tip4"><i></i>' + item.typeLabel + '<span>' + item.typeDesc + '</p>';break;default:
																					break;}
												});
									}return promeotionText;
						};module.exports = ctrlPromotionText;
			}, // src/js/slideInput.js
			function (__inner_require__, exports, module) {
						module.exports = function (core, PluginManager) {
									$.extend($.fn, { slideInput: function () {
															if (!this.length) return { page: $() };var sourceElem = this[0];var sourceInput = sourceElem.outerHTML;var slideInput = { TEMPLATE: '<div class="slide-input page-plugin"><div class="bar bar-nav"><div class="input-row button-line">${input}<div class="triangle-right-buttom"></div></div><span class="btn confirm pull-right">确定</span></div><div class="local-history"><ul></ul></div></div>', page: null, elem: sourceElem, localData: null, option: { showType: "transition", transitionClass: "input-active" }, callback: function (opt) {}, init: function () {
																					var html = this.TEMPLATE.replace('${input}', sourceInput);var page = $(html);var _setValue = this.setValue(this);if (core.getActiveLayer()) {
																								page.appendTo(core.getActiveLayer());
																					} else {
																								page.appendTo("body");
																					}this.page = page;$(".confirm", page).on("click", _setValue);
																		}, beforeShow: function (value) {
																					var input = this.page.find("input");PluginManager.showLoad();input.val(value);setTimeout(function () {
																								input.focus();
																					}, 500);
																		}, setValue: function (context) {
																					return function () {
																								context.hide();$(context.elem).val(context.page.find("input").val());
																					};
																		}, afterHide: function () {
																					PluginManager.removeLoad();
																		} };$(this).on('click focus', function () {
																		if (slideInput.page.hasClass('input-active')) return;slideInput.show(this.value);
															});return slideInput;
												} });
						}(require("hotelfx@1.1.0/src/fw/core.js"), require("hotelfx@1.1.0/src/js/PluginManager.js"));
			}, // entry/hotel/js/invoice/invoiceForNewCO.js
			function (__inner_require__, exports, module) {
						/*
      * ming.jin 2017-07-13
      * 新版订单填写页发票逻辑
      */var selectInvoiceInfo = __inner_require__(25 /*entry/hotel/js/invoice/selectInvoiceInfo.js*/);var invoicePostAddressPackage = __inner_require__(30 /*entry/hotel/js/invoice/invoicePostAddress.js*/);var showInvoiceManager = __inner_require__(31 /*entry/hotel/js/invoice/showInvoiceManager.js*/),
						    clearInput = __inner_require__(5 /*src/js/clearInput.js*/),
						    dialog = require("hotelfx@1.1.0/src/js/dialog.js"),
						    validate = __inner_require__(4 /*src/js/validate.js*/),
						    taxpayerNumWin = __inner_require__(32 /*entry/hotel/js/invoice/taxpayerNumWin.js*/),
						    showInvoiceInfoTpl = __inner_require__(33 /*entry/hotel/tpl/showInvoiceInfo.js*/);var initInvoice = { selectInvoiceInfo: selectInvoiceInfo, selectAddress: invoicePostAddressPackage.selectAddress, addAddress: invoicePostAddressPackage.addAddress, selectInvoiceType: null, selectInvoiceContent: null, invoicedata: null, needInvoice: false, needInvoiceRemark: true, isSubmitByButton: false, TEMPLATE: showInvoiceInfoTpl({}), init: function () {
												this.page = $(this.TEMPLATE);this.page.appendTo(slark.getActiveLayer());this._bindEvent(this.page[0]);
									}, loadPlugFlag: false, _bindEvent: function (dom) {
												var _this = this;_this.domObj = { invoiceH1Tip: $(".js_wxts", slark.getActiveLayer()), invoiceRedTip: $(".invoiceRedTip", slark.getActiveLayer()), invoiceElongTip: $("#invoice-elong", slark.getActiveLayer()), elecInvoiceTip: $("#einvoice-tip", slark.getActiveLayer()), entryInvoiceBtn: $(".js_invoice", slark.getActiveLayer()), invoiceSwitch: $(".js_invoice_switch", dom), //发票开关 
															invoiceInputArea: $(".js_invoice_area_input", dom), // 发票输入区域 
															invoiceTipArea: $(".js_invoice_area_tip", dom), // 发票tip 区域 
															invoiceType: $(".js_invoice_type", dom), // 发票类型 
															invoiceHeaderType: $(".js_invoice_header_type", dom), // 抬头类型 
															invoiceHeaderTypeBox: $(".js_invoice_header_type .invoice-header", dom), invoiceHeader: $('.js_selected_invoice_title', dom), //发票抬头 选择
															invoiceHeaderForNoLogin: $(".js_input_invoice_title", dom), // 发票抬头 输入
															invoiceContent: $(".js_invoice_content", dom), // 发票内容 
															taxpayerRegistrationNumber: $(".js_taxpayer_registration_number", dom), // 纳税人识别号 
															taxpayerRegistrationNumberWin: $(".js_taxpayer_registration_number", dom).find(".taxpayer-num").find("b"), registerAddress: $(".js_invoice_register_address", dom), // 注册地址 
															companyPhone: $(".js_invoice_company_phone", dom), // 公司电话 
															openAccountBank: $(".js_invoice_open_bank", dom), //开户银行 
															accountOfBank: $(".js_invoice_bank_id", dom), // 开户银行帐号
															phoneNumber: $(".js_phone_number", dom), //电子发票手机号
															postType: $(".js_invoice_post_type", dom), //邮寄方式 
															postAddress: $(".js_invoice_post_address", dom), // 邮寄地址 
															invoiceRemark: $(".js_invoice_remark", dom), //发票备注
															invoicePaperTip: $(".js_invoice_paper_tip", dom), invoiceElecTip0: $(".js_invoice_elec_tip0", dom), invoiceElecTip1: $(".js_invoice_elec_tip1", dom), invoiceCommonTips: $(".js_invoice_common_tip", dom), // 非预约公共tips 
															invoiceOrderTips: $(".js_invoice_order_tip", dom), //预约发票 tips 
															submitInvoiceInfo: $(".js_submit_invoice_info", dom) //确定 
												}; //填写页，发票点击入口
												_this.domObj.entryInvoiceBtn.on("click", function () {
															_this.isSubmitByButton = false;_this.show();if (!_this.loadPlugFlag) {
																		_this.pluginInit();taxpayerNumWin.init(dom);_this.loadPlugFlag = true;
															}if (_this.invoicedata != null && !_this.needInvoice) {
																		invoiceSwitchCallBack();
															}
												});function invoiceSwitchCallBack() {
															if (_this.domObj.invoiceSwitch.hasClass("on")) {
																		_this.domObj.invoiceSwitch.removeClass("on");_this.domObj.invoiceInputArea.hide();_this.domObj.invoiceTipArea.hide();_this.needInvoice = false;
															} else {
																		_this.needInvoice = true;_this.domObj.invoiceSwitch.addClass("on");_this.domObj.invoiceInputArea.show();_this.invoiceItemInit();_this.domObj.invoiceTipArea.show();
															}
												} // 发票开关
												_this.domObj.invoiceSwitch.on("click", invoiceSwitchCallBack); //发票类型
												_this.selectInvoiceType = _this.domObj.invoiceType.slideSelector({ title: '选择发票类型', data: function () {
																		$DATA_CREATEORDER.invoiceTypeJson = JSON.parse($DATA_CREATEORDER.invoiceTypeJson || "[]");return $DATA_CREATEORDER.invoiceTypeJson;
															}(), count: 0, // targetElement : $("#invoice-type", dom).next(), // ???
															initValue: $DATA_CREATEORDER.invoiceTypeJson[0], value: $DATA_CREATEORDER.invoiceTypeJson[0].value, text: $DATA_CREATEORDER.invoiceTypeJson[0].text, callback: function (result) {
																		_this.domObj.invoiceType.find("input").attr('data-value', result.value);_this.domObj.invoiceType.find("input").val(result.text);_this.selectInvoiceType.value = result.value;_this.selectInvoiceType.text = result.text;_this.invoiceItemInit();
															} }); //发票内容
												_this.selectInvoiceContent = _this.domObj.invoiceContent.slideSelector({ title: '选择发票内容', data: $DATA_CREATEORDER.invoiceContent, initValue: $DATA_CREATEORDER.invoiceContent[0], value: $DATA_CREATEORDER.invoiceContent[0].value, callback: function (result) {
																		_this.domObj.invoiceContent.find("input").attr('data-value', result.text);_this.domObj.invoiceContent.find("input").val(result.text);_this.selectInvoiceContent.value = result.text;
															} });_this.domObj.taxpayerRegistrationNumberWin.on("click", function () {
															taxpayerNumWin.show();
												}); // 邮寄地址 
												$DATA_CREATEORDER.delieverTypeInfos = JSON.parse($DATA_CREATEORDER.delieverTypeInfos || "[]");if ($DATA_CREATEORDER.delieverTypeInfos && $DATA_CREATEORDER.delieverTypeInfos.length > 0) {
															_this.expressFee = _this.domObj.postType.slideSelector({ title: '邮寄方式', data: $DATA_CREATEORDER.delieverTypeInfos, initValue: $DATA_CREATEORDER.delieverTypeInfos[0], value: $DATA_CREATEORDER.delieverTypeInfos[0].value, delieverType: $DATA_CREATEORDER.delieverTypeInfos[0].delieverType, disableIndex: function () {
																					var disableIdx = 0;$.each($DATA_CREATEORDER.delieverTypeInfos, function (index, item) {
																								if (item.enabled === false) {
																											disableIdx = index;
																								}
																					});return disableIdx;
																		}(), callback: function (result) {
																					// if (result.value == 10 && result.delieverType == 1) {
																					//     $(".js_post_type_result",dom).html('普通快递<i>(邮费¥'+result.value+')</i>');
																					// }else{
																					//     $(".js_post_type_result",dom).html('普通快递<i>('+result.value+'积分)</i>');
																					// }
																					var str = "";var __tip = "";switch (result.delieverType) {case 0:
																											str = result.text;__tip = str;break;case 1:
																											str = result.value == 10 ? '普通快递<i>(邮费¥' + result.value + ')</i>' : "";__tip = '<em>(邮费¥' + result.value + ')</em>';break;case 2:
																											str = '普通快递<i>(' + result.value + '积分)</i>';break;default:
																											break;}$(".js_post_type_result", dom).html(str);_this.expressFee.createorderTip = __tip;_this.expressFee.value = result.value;_this.expressFee.delieverType = result.delieverType;
																		} });
												} // 抬头带数据到三页
												_this.selectInvoiceInfo.beforeShow = function () {
															//console.log("selectInvoiceInfo beforeShow");
															if (this.hasLoadItem && this.hasLoadItem.value === _this.selectInvoiceType.value) {
																		return;
															}this.hasLoadItem.value = _this.selectInvoiceType.value;this.currentPageIndex = 1; /*
                                                                                                  isDefault   boolean：是否仅返回默认发票抬头
                                                                                                  invoiceTitleType   int：发票抬头类型（0 全部、 1 个人、 2 公司、 3 机关单位）（注：如果只获取全部，invoiceTitleType可以后端写死）
                                                                                                  supportSpecialInvoice   boolean：是否仅返回企业专票
                                                                                                  pageSize   int：每页显示大小
                                                                                                  pageNo   int：分页号
                                                                                                  */ // this.param = {
															//     "isDefault":false,   
															//     "invoiceTitleType":0,
															//     "supportSpecialInvoice": _this.selectInvoiceType.value === "2",
															//     "pageSize":20,
															//     "pageNo":this.currentPageIndex
															// };
															this.chooseInvoiceItem = null;this.listBox.find("ul").html("");this.listBox.hide();this.listBoxBlank.show();this.param["pageNo"] = this.currentPageIndex;this.param["supportSpecialInvoice"] = _this.selectInvoiceType.value === "2";this.ajax(this.param, true);
												}; // 抬头三级页回带数据
												_this.selectInvoiceInfo.beforeHide = function () {
															//console.log("selectInvoiceInfo beforeHide");
															var isIOS = !$('html').hasClass('android');if (isIOS) {
																		$(".page-content", dom).off("scroll");
															} else {
																		$(document).off('scroll');
															} //信息反填
															var data = _this.selectInvoiceInfo.chooseInvoiceItem;if (data !== null) {
																		//三级回带
																		//_this.domObj.invoiceHeaderType.find("input").val(data["invoiceHeaderType"]);
																		var matchHeaderType = [0, 1, 0, 2];showInvoiceManager.invoiceHeaderCtrl.value = matchHeaderType[data["invoiceHeaderType"]]; // 转换为我自己invoiceHeaderCtrl插件匹配的值
																		_this.selectInvoiceInfo.chooseInvoiceItem['invoiceHeaderType'] = data["invoiceHeaderType"]; /// 提交给后端
																		showInvoiceManager.invoiceHeaderCtrl.setHeader();_this.domObj.invoiceHeaderType.find(".invoice-header").find("a").removeClass("active").eq(showInvoiceManager.invoiceHeaderCtrl.value).addClass("active");if (_this.selectInvoiceType.value === "2") {
																					// 专票
																					_this.domObj.taxpayerRegistrationNumber.find("input").val(data["taxpayerRegistrationNumber"]);_this.domObj.registerAddress.find("input").val(data["registerAddress"]);_this.domObj.companyPhone.find("input").val(data["companyPhone"]);_this.domObj.openAccountBank.find("input").val(data["openAccountBank"]);_this.domObj.accountOfBank.find("input").val(data["accountOfBank"]);
																		} else {
																					//  纸制， 电子
																					if (showInvoiceManager.invoiceHeaderCtrl.value === 0) {
																								// 公司
																								_this.domObj.taxpayerRegistrationNumber.find("input").val(data["taxpayerRegistrationNumber"]);
																					}
																		}_this.domObj.invoiceHeader.find("input").val(data["invoiceHeader"]);
															}
												}; // 发票邮寄地址
												_this.selectAddress.beforeHide = function () {
															//console.log("selectAddress beforeHide");
															if (_this.selectAddress.addressDetail && _this.selectAddress.name && _this.selectAddress.phoneNo) {
																		_this.hasSelectAddress = true;_this.domObj.postAddress.addClass("invoice_info");_this.domObj.postAddress.find(".js_invoice_receive_place").val(_this.selectAddress.addressDetail);_this.domObj.postAddress.find(".js_invoice_receive_name").html(_this.selectAddress.name);_this.domObj.postAddress.find(".js_invoice_receive_phone").html(_this.selectAddress.phoneNo);
															} else {
																		_this.hasSelectAddress = false;
															}
												}; // 发票备注
												_this.domObj.invoiceRemark.on("click", function () {
															if ($(".js_invoice_remark_checkbox", dom).hasClass("for_good")) {
																		$(".js_invoice_remark_checkbox", dom).removeClass("for_good");_this.needInvoiceRemark = false;
															} else {
																		$(".js_invoice_remark_checkbox", dom).addClass("for_good");_this.needInvoiceRemark = true;
															}
												}); // 完成btn ＋ 校验
												_this.domObj.submitInvoiceInfo.on("click", function () {
															//发票
															if (!_this.needInvoice) {
																		_this.domObj.entryInvoiceBtn.find(".bill").html("未开具"); //todo
																		_this.domObj.invoiceH1Tip.addClass("hide");_this.domObj.invoiceRedTip.hide();_this.domObj.elecInvoiceTip.hide();_this.domObj.invoiceElongTip.hide();_this.isSubmitByButton = true;_this.invoicedata = null;_this.hide();return;
															} else {
																		var validateInvoiceResultArray = [],
																		    isPassValidateInvoice = false;if ($DATA_CREATEORDER.loginFlag === 1) {
																					validate.addFilter(_this.domObj.invoiceHeader.find("input"), { rq: true, msg: "请选择或添加发票抬头" });validateInvoiceResultArray.push(_this.domObj.invoiceHeader.find("input").validate({ singleMode: true, fixDC: true, trim: true }));
																		} else {
																					validate.addFilter(_this.domObj.invoiceHeaderForNoLogin.find("input"), [{ rq: true, msg: "请输入发票抬头" }, { regex: '\\S{3,}', msg: "发票抬头至少3个字符" }]);validateInvoiceResultArray.push(_this.domObj.invoiceHeaderForNoLogin.find("input").validate({ singleMode: true, fixDC: true, trim: true }));
																		}if (_this.selectInvoiceType.value == "1") {
																					validate.addFilter(_this.domObj.phoneNumber.find("input"), [{ rq: true, msg: "请输入收票人手机" }, { regex: '^\\d{11}$', msg: "请输入正确的内地收票人手机" }]);validateInvoiceResultArray.push(_this.domObj.phoneNumber.find("input").validate({ singleMode: true, fixDC: true, trim: true }));
																		}if ((_this.selectInvoiceType.value == "0" || _this.selectInvoiceType.value == "1") && showInvoiceManager.invoiceHeaderCtrl.value === 0 || _this.selectInvoiceType.value == "2") {
																					//0纸质或1电子 或者为2专票，且发票抬头类型为公司，必须有纳税人识别号 ,
																					validate.addFilter(_this.domObj.taxpayerRegistrationNumber.find("input"), [{ rq: true, msg: "请输入纳税人识别号或统一社会信用代码" }, { regex: '^[0-9a-zA-Z]{15}$|^[0-9a-zA-Z]{18}$|^[0-9a-zA-Z]{20}$', msg: "纳税人识别号信息错误，请输入15、18位或20位数字或字母" }]);validateInvoiceResultArray.push(_this.domObj.taxpayerRegistrationNumber.find("input").validate({ singleMode: true, fixDC: true, trim: true }));
																		}if (_this.selectInvoiceType.value == "2") {
																					//专票
																					validate.addFilter(_this.domObj.registerAddress.find("input"), [{ rq: true, msg: "请输入注册地址" }, { regex: '\\S{2,100}', msg: "注册地址长度应在2-100字符之间" }]);validateInvoiceResultArray.push(_this.domObj.registerAddress.find("input").validate({ singleMode: true, fixDC: true, trim: true }));validate.addFilter(_this.domObj.companyPhone.find("input"), [{ rq: true, msg: "请输入公司电话" }, { regex: '(\\d|\\(|\\/|\\)|\\N|\\,|\\*|\\;|\\#|\\+|\\-|\\.)+', msg: "请正确填写公司电话" }, { regex: '[\\d\\(\\/\\)\\N\\,\\*\\;\\#\\+\\-\\.]{2,50}', msg: "公司电话长度应在2-50字符之间" }]);validateInvoiceResultArray.push(_this.domObj.companyPhone.find("input").validate({ singleMode: true, fixDC: true, trim: true }));validate.addFilter(_this.domObj.openAccountBank.find("input"), [{ rq: true, msg: "请输入开户银行" }, { regex: '\\S{2,100}', msg: "开户银行长度应在2-100字符之间" }]);validateInvoiceResultArray.push(_this.domObj.openAccountBank.find("input").validate({ singleMode: true, fixDC: true, trim: true }));validate.addFilter(_this.domObj.accountOfBank.find("input"), [{ rq: true, msg: "请输入银行账号" }, { regex: '\\d+', msg: "请正确填写银行账号" }, { regex: '\\d{2,50}', msg: "银行账号长度应在2-50字符之间" }]);validateInvoiceResultArray.push(_this.domObj.accountOfBank.find("input").validate({ singleMode: true, fixDC: true, trim: true }));
																		}
															} //纸质或者专票校验邮寄地址不能为空 // 且非预约发票
															if (!$DATA_CREATEORDER.canUserPreInvoice && (_this.selectInvoiceType.value == "0" || _this.selectInvoiceType.value == "2")) {
																		//0纸质,2专票
																		if (!_this.hasSelectAddress) {
																					dialog.alert("请选择邮寄地址");isPassValidateInvoice = true;
																		}
															}for (var indexForVal = 0, validateLength = validateInvoiceResultArray.length; indexForVal < validateLength; indexForVal++) {
																		if (validateInvoiceResultArray[indexForVal].isError) {
																					dialog.alert(validateInvoiceResultArray[indexForVal].msgs[0]);isPassValidateInvoice = true;break;
																		}
															};if (isPassValidateInvoice) {
																		return;
															}if ($DATA_CREATEORDER.loginFlag === 1) {
																		_this.selectInvoiceInfo.chooseInvoiceItem["invoiceHeaderType"] = [2, 1, 3][showInvoiceManager.invoiceHeaderCtrl.value]; //从invoiceHeaderCtrl 插件中匹配出后端对应的值
															} else {
																		_this.selectInvoiceInfo.chooseInvoiceItem["invoiceHeader"] = _this.domObj.invoiceHeaderForNoLogin.find("input").val();_this.selectInvoiceInfo.chooseInvoiceItem["invoiceHeaderType"] = [2, 1, 3][showInvoiceManager.invoiceHeaderCtrl.value]; //从invoiceHeaderCtrl 插件中匹配出后端对应的值
																		_this.selectInvoiceInfo.chooseInvoiceItem["taxpayerRegistrationNumber"] = _this.domObj.taxpayerRegistrationNumber.find("input").val();
															}_this.domObj.entryInvoiceBtn.find(".bill").html(_this.selectInvoiceType.text + (_this.selectInvoiceType.value !== "1" ? _this.expressFee && _this.expressFee.createorderTip || "" : ""));_this.invoicedata = { invoiceType: _this.selectInvoiceType.value, invoiceHeader: $DATA_CREATEORDER.loginFlag == 1 ? _this.domObj.invoiceHeader.find('input').val() : _this.domObj.invoiceHeaderForNoLogin.find("input").val(), invoiceContent: _this.selectInvoiceContent.value, taxpayerRegistrationNumber: _this.domObj.taxpayerRegistrationNumber.find("input").val(), userType: _this.selectInvoiceInfo.chooseInvoiceItem["invoiceHeaderType"], //[2,1,3][showInvoiceManager.invoiceHeaderCtrl.value],
																		registerAddress: _this.domObj.registerAddress.find("input").val(), companyPhone: _this.domObj.companyPhone.find("input").val(), openAccountBank: _this.domObj.openAccountBank.find("input").val(), accountOfBank: _this.domObj.accountOfBank.find("input").val(), receiver: _this.selectAddress.name, receiveAddress: _this.selectAddress.addressDetail, receivePhone: ['0', '2'].indexOf(_this.selectInvoiceType.value) > -1 ? _this.selectAddress.phoneNo : _this.domObj.phoneNumber.find("input").val(), //_this.selectAddress.phoneNo,
																		delieverFeeType: _this.expressFee.delieverType, delieverFeeAmount: _this.expressFee.value, hasInvoiceInfo: _this.needInvoiceRemark }; // console.log(JSON.stringify(_this.invoicedata));
															_this.isSubmitByButton = true; //todo
															if (!$DATA_CREATEORDER.canUserPreInvoice) {
																		_this.domObj.invoiceH1Tip.removeClass("hide");_this.domObj.invoiceRedTip.show();switch (_this.selectInvoiceType.value) {case "1":
																								//电
																								_this.domObj.invoiceElongTip.html($DATA_CREATEORDER.einvoiceElongTip);_this.domObj.invoiceElongTip.show();_this.domObj.elecInvoiceTip.show();break;case "0": //纸
																					case "2":
																								// 专
																								_this.domObj.invoiceElongTip.html($DATA_CREATEORDER.invoiceElongTip);_this.domObj.invoiceElongTip.show();_this.domObj.elecInvoiceTip.hide();break;default:
																								break;}_this.hide();
															} else {// _this.domObj.invoiceElongTip.hide();
																		// _this.domObj.elecInvoiceTip.hide();
															}
												}); /**
                        * 初始化发票填写项 
                        */_this.invoiceItemInit = function () {
															if ($DATA_CREATEORDER.canUserPreInvoice) {
																		_this.orderInvoiceItemInit();return;
															}if (_this.needInvoice === true) {
																		_this.domObj.invoiceTipArea.show();switch (_this.selectInvoiceType.value) {//根据组件的值判断
																					case "0":
																								//纸质
																								showInvoiceManager.elecHide();showInvoiceManager.specialHide();showInvoiceManager.paperShow();_this.domObj.invoiceElongTip.html($DATA_CREATEORDER.invoiceElongTip);break;case "1":
																								//电子
																								showInvoiceManager.paperHide();showInvoiceManager.specialHide();showInvoiceManager.elecShow();_this.domObj.invoiceElongTip.html($DATA_CREATEORDER.einvoiceElongTip);break;case "2":
																								//专票
																								showInvoiceManager.paperHide();showInvoiceManager.elecHide();showInvoiceManager.specialShow();_this.domObj.invoiceElongTip.html($DATA_CREATEORDER.invoiceElongTip);break;default:
																								break;}
															} else {
																		_this.domObj.invoiceTipArea.hide();_this.domObj.invoiceInputArea.hide();
															}
												}; /**
               * 初始化 预约发票
               */_this.orderInvoiceItemInit = function () {
															if (_this.needInvoice === true) {
																		switch (_this.selectInvoiceType.value) {case "0":
																								showInvoiceManager.orderSpecial.hide();showInvoiceManager.invoiceHeaderCtrl.setHeader();showInvoiceManager.orderPage.show();break;case "2":
																								showInvoiceManager.invoiceHeaderCtrl.hide();showInvoiceManager.orderPage.hide();showInvoiceManager.orderSpecial.show();break;default:
																								break;}
															}
												};if ($DATA_CREATEORDER.loginFlag === 1) {
															_this.domObj.invoiceHeader.show();
												} else {
															_this.domObj.invoiceHeaderForNoLogin.show();_this.selectInvoiceInfo.chooseInvoiceItem = {};
												}showInvoiceManager.init(_this.domObj);if ($DATA_CREATEORDER.canUserPreInvoice) {
															//hide
															showInvoiceManager.hideItemPack.hide();$(".check_box_invoice_title", dom).html("预约发票");
												} else {
															_this.domObj.invoiceOrderTips.hide();
												} //开关默认打开
												_this.domObj.invoiceSwitch.click();clearInput.init(dom, '.js_show_clear_input', { top: 7 });
									}, pluginInit: function () {
												$DATA_CREATEORDER.delieverTypeInfos && $DATA_CREATEORDER.delieverTypeInfos.length > 0 ? PluginManager.add("expressFee", this.expressFee) : "";$DATA_CREATEORDER.loginFlag === 1 ? PluginManager.add("selectInvoiceInfo", this.selectInvoiceInfo) : ""; //发票抬头        
												PluginManager.add('selectAddress', this.selectAddress);PluginManager.add('addAddress', this.addAddress);PluginManager.add("selectInvoiceType", this.selectInvoiceType);PluginManager.add("selectInvoiceContent", this.selectInvoiceContent);
									} };module.exports = initInvoice;
			}, // entry/hotel/js/invoice/selectInvoiceInfo.js
			function (__inner_require__, exports, module) {
						var core = require('hotelfx@1.1.0/src/js/core.js'),
						    selectInvoiceInfoTpl = __inner_require__(26 /*entry/hotel/tpl/selectInvoiceInfo.js*/),
						    addInvoiceInfo = __inner_require__(27 /*entry/hotel/js/invoice/addInvoiceInfo.js*/),
						    dialog = require('hotelfx@1.1.0/src/js/dialog.js');var selectInvoiceInfo = { listBox: null, flag: false, currentPageIndex: 1, chooseInvoiceItem: null, hasAddItem: false, hasLoadItem: {}, /*设定距离底部的距离*/toBottomLength: 350, ajax: function (param, isRefresh) {
												var _this = this;slark.get("h5_createorder").startLoading();core.fetch(window.pageInfo.subPath + 'api/queryInvoiceTitles/', param, { // url: window.pageInfo.subPath +'api/queryInvoiceTitles',
															type: "POST", timeout: 5000 // data:param,
															// success:
												}).then(function (data) {
															slark.get("h5_createorder").stopLoading();if (data.error === false) {
																		if (data.list && data.list.length > 0) {
																					_this._renderData(data.list, isRefresh);_this.chooseDataItemBtn.show();_this.currentPageIndex += 1;_this.param["pageNo"] = _this.currentPageIndex;
																		} else {
																					if (_this.listBox.find("ul").find("li").length === 0) {
																								_this.chooseDataItemBtn.hide();
																					}
																		}
															} else {//error
															}
												}, // error:
												function (data) {
															slark.get("h5_createorder").stopLoading(); //error
												});
									}, init: function () {
												this.page = $(selectInvoiceInfoTpl({}));this.page.appendTo(slark.getActiveLayer());this._bindEvent(this.page[0]);this.param = { "defaultFlag": false, "invoiceTitleType": 0, "supportSpecialInvoice": false, "pageSize": 20, "pageNo": this.currentPageIndex };
									}, _bindEvent: function (dom) {
												var _this = this;this.listBox = $(".js_invoice_info_list", dom);this.listBoxBlank = $(".js_list_blank", dom);this.chooseDataItemBtn = $(".js_choose_invoice_data", dom); //发票二级页 选择 发票抬头
												$('.js_selected_invoice_title', slark.getActiveLayer()).click(function () {
															selectInvoiceInfo.show();if (!_this.flag) {
																		_this.flag = true;PluginManager.add("addInvoiceInfo", addInvoiceInfo);
															}
												}); // 点击 选择发票项
												this.listBox.on("click", "li", function () {
															if ($(this).find("i").hasClass("choose_on")) {
																		$(this).find("i").removeClass("choose_on");_this.chooseInvoiceItem = null;
															} else {
																		$(this).siblings().find("i").removeClass("choose_on");$(this).find("i").addClass("choose_on");_this.chooseInvoiceItem = {};_this.chooseInvoiceItem["invoiceHeaderType"] = $(this).find(".list_info").data("titletype");_this.chooseInvoiceItem["invoiceHeader"] = $(this).find(".list_info").data("invoicetitle");_this.chooseInvoiceItem["taxpayerRegistrationNumber"] = $(this).find(".list_info").data("taxpayernum");_this.chooseInvoiceItem["registerAddress"] = $(this).find(".list_info").data("regaddress");_this.chooseInvoiceItem["companyPhone"] = $(this).find(".list_info").data("regphone");_this.chooseInvoiceItem["openAccountBank"] = $(this).find(".list_info").data("regbank");_this.chooseInvoiceItem["accountOfBank"] = $(this).find(".list_info").data("regbankaccount");_this.chooseInvoiceItem["supportSpecialInvoice"] = $(this).find(".list_info").data("supspecial");
															}
												});this.chooseDataItemBtn.on("click", function () {
															if (_this.chooseInvoiceItem == null) {
																		dialog.alert("请选择一项报销凭证");return;
															} //信息回带
															_this.hide();
												}); // 三级跳四级
												addInvoiceInfo.beforeShow = function () {
															if (_this.hasLoadItem.value === "2") {
																		// 专票 只显示公司
																		addInvoiceInfo.domObj.invoiceHeaderType.children('a').hide().eq(0).show();addInvoiceInfo.editorInvoiceManager.invoiceHeaderCtrl.value = 0;addInvoiceInfo.editorInvoiceManager.invoiceHeaderCtrl.setHeader();
															} else {
																		addInvoiceInfo.domObj.invoiceHeaderType.children('a').show();
															}
												}; //四级回三级
												addInvoiceInfo.afterHide = function () {
															if (addInvoiceInfo.isAddedHide === true) {
																		addInvoiceInfo.isAddedHide = false;_this.currentPageIndex = 1;_this.param["pageNo"] = _this.currentPageIndex;_this.currentPageIndex = 1;_this.ajax(_this.param, true);
															}
												};var isIOS = !$('html').hasClass('android');if (isIOS) {
															$(".page-content", dom).off("scroll").on("scroll", function () {
																		_this._scroll($(this).scrollTop());
															});
												} else {
															$(document).off('scroll').on('scroll', function () {
																		_this._scroll($(this).scrollTop());
															});
												}
									}, _renderData: function (dataList, isRefresh) {
												var tem = '<li class="bdb"><div class="list_info" data-regaddress="${regAddress}" data-regbank="${regBank}" data-regbankAccount="${regBankAccount}" data-regphone="${regPhone}" data-taxpayernum="${taxPayerNum_Val}" data-titletype="${titleType_Val}" data-supspecial="${suportSpe_Val}" data-invoicetitle="${invoiceTitle}"><p>${invoiceTitle}</p>${titleType}${suportSpe}</div>${taxPayerNum}</div><i class="choose_off"></i></li>';var str = "";dataList.forEach(function (item) {
															if (item.valid === false) {
																		return;
															}str += tem.replace(/\$\{invoiceTitle\}/g, item.invoiceTitle).replace('${suportSpe}', item.supportSpecialInvoice ? '<a href="javascript:;" class="u_btn">支持专票</a>' : '').replace('${suportSpe_Val}', item.supportSpecialInvoice).replace('${titleType}', item.invoiceTitleType !== 0 ? '<a href="javascript:;" class="u_btn">' + ["个人", "公司", "机关单位"][item.invoiceTitleType - 1] + '</a>' : '').replace('${titleType_Val}', item.invoiceTitleType).replace('${taxPayerNum}', item.taxPayerNum !== '' && item.taxPayerNum !== 'null' ? '<div class="list_num">纳税人识别号：<span>' + item.taxPayerNum + '</span>' : '').replace('${taxPayerNum_Val}', item.taxPayerNum).replace('${regAddress}', item.registerAddress).replace('${regBank}', item.registerBank).replace('${regBankAccount}', item.registerBankNum).replace('${regPhone}', item.registerPhoneNum);
												});if (isRefresh) {
															this.listBox.find("ul").html("").html(str);
												} else {
															this.listBox.find("ul").append(str);
												}this.listBox.show();this.listBoxBlank.hide();this.hasLoadData = false;
									}, _scroll: function (scrollToTop) {
												var _this = this;var scrollToBottom = _this.listBox.height() - window.screen.height * 2 - scrollToTop; //console.log("_this.listBox.height() - scrollToTop:"+(_this.listBox.height() - scrollToTop));
												//console.log("scrollToTop:"+scrollToTop);
												//console.log("_this.listBox.height() :"+_this.listBox.height());
												/*  */if (scrollToBottom <= _this.toBottomLength) {
															if (!_this.hasLoadData) {
																		/*执行加载数据*/_this.ajax(_this.param, false);_this.hasLoadData = true; //console.log("loading");
															}
												} else {
															_this.hasLoadData ? _this.hasLoadData = false : "";
												}
									} };module.exports = selectInvoiceInfo;
			}, // entry/hotel/tpl/selectInvoiceInfo.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":5,"md5":"0dce7d36d5afbacbfe1e002a7386ff41"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('selectInvoiceInfo', ' <div> <header class="bar bar-nav flight-order-head"> <a class="icon icon-back pull-left"></a> <h1 class="title">发票抬头</h1> </header> <div class="page-content"> <div class="invoice_div invoice_divlist js_invoice_info_list" style="display:none;"> <div class="invoice_list"> <ul> </ul> </div> </div> <div class="invoice_box js_list_blank"> <div class="invoice_nolist"> <div class="nolist"></div> <p>您没有添加过报销凭证哦</p> </div> </div> </div> <nav class="bar invoice_bar"> <div class="btn_sure js_choose_invoice_data" style="display:none;">确定</div> <div class="btn_sure btn_new u_btn js_add_invoice_data">新增报销凭证</div> </nav> </div>');
						}();
			}, // entry/hotel/js/invoice/addInvoiceInfo.js
			function (__inner_require__, exports, module) {
						var core = require('hotelfx@1.1.0/src/js/core.js'),
						    taxpayerTpl = __inner_require__(8 /*entry/hotel/tpl/taxpayer.js*/),
						    editInvoiceInfoTpl = __inner_require__(28 /*entry/hotel/tpl/editInvoiceInfo.js*/),
						    editorInvoiceManager = __inner_require__(29 /*entry/hotel/js/invoice/editorInvoiceManager.js*/),
						    clearInput = __inner_require__(5 /*src/js/clearInput.js*/),
						    validate = __inner_require__(4 /*src/js/validate.js*/),
						    dialog = require('hotelfx@1.1.0/src/js/dialog.js'); //taxPayerNumWin = require("./taxpayerNumWin");
						var taxPayerNumWin = { TEMPLATE: taxpayerTpl({}), beforeShow: function () {
												var html = $('html');if (html.hasClass('android')) {
															html.css('overflow', 'hidden');
												}
									}, init: function (dom) {
												this.page = $(this.TEMPLATE);this.hide();this.closeDom = this.page.find(".closed");this.page.appendTo($(dom));this._bindEvent();
									}, show: function () {
												this.page.show();
									}, hide: function () {
												this.page.hide();
									}, afterHide: function () {
												var html = $('html');if (html.hasClass('android')) {
															html.css('overflow', '');
												}
									}, _bindEvent: function () {
												this.closeDom.on('click', function () {
															taxPayerNumWin.hide();
												});
									} };var addInvoiceInfo = { TEMPLATE: editInvoiceInfoTpl({}), editorInvoiceManager: editorInvoiceManager, isAddedHide: false, init: function () {
												this.page = $(this.TEMPLATE);this.page.appendTo(slark.getActiveLayer());this._bindEvent(this.page[0]);
									}, loadPlugFlag: false, _bindEvent: function (dom) {
												var _this = this;_this.domObj = { invoiceHeader: $(".js_invoice_title_name", dom), taxpayerRegistrationNumber: $(".js_taxpayer_registration_number", dom), registerAddress: $(".js_register_address", dom), companyPhone: $(".js_company_phone", dom), openAccountBank: $(".js_open_account_bank", dom), accountOfBank: $(".js_account_of_bank", dom), invoiceHeaderType: $(".js_invoice_header_type", dom), specialInvoiceCheckBox: $(".js_special_invoice_checkBox", dom), selectSpecialCheckBox: $(".js_select_special_checkBox", dom), taxpayerRegistrationNumberWin: $(".js_taxpayer_registration_number", dom).find(".taxpayer-num").find("b") }; //客史list 中的 新增报销凭证 button
												$(".js_add_invoice_data").on("click", function () {
															_this.show();
												}); //新增报销凭证页 中的 确定 button
												$(".js_save_invoice_info", dom).on("click", function () {
															/*注：invoiceTitle、invoiceTitleType为必传*/var param = {}; // {   cardNo: '',
															//     //invoiceTitleId: ,/*发票抬头ID -- 修改时必传*/
															//     invoiceTitle:,/*发票抬头*/
															//     defaultFlag:false,/*是否默认发票抬头*/
															//     invoiceTitleType:,/*发票抬头类型（0 全部、 1 个人、 2 公司、 3 机关单位）*/
															//     taxPayerNum:,/*税号 -- 企业普票、专票使用*/
															//     registerPhoneNum:,/*公司电话 -- 企业专票使用*/
															//     registerAddress:,/*公司地址 -- 企业专票使用*/
															//     registerBankNum:,/*注册银行卡号 -- 企业专票使用*/
															//     registerBank:,/*银行名称 -- 企业专票使用*/
															//     supportSpecialInvoice:,/*是否专票 -- 企业专票使用*/
															// }
															var flag = false;var invoiceVaidArr = [];validate.addFilter(_this.domObj.invoiceHeader.find("input"), [{ rq: true, msg: "请输入抬头名称" }, { regex: '\\S{3,}', msg: "发票抬头至少3个字符" }]);invoiceVaidArr.push(_this.domObj.invoiceHeader.find("input").validate({ singleMode: true, fixDC: true, trim: true }));switch (editorInvoiceManager.invoiceHeaderCtrl.value) {case 0:
																					/*公司*/validate.addFilter(_this.domObj.taxpayerRegistrationNumber.find("input"), [{ rq: true, msg: "请输入纳税人识别号或统一社会信用代码" }, { regex: '^[0-9a-zA-Z]{15}$|^[0-9a-zA-Z]{18}$|^[0-9a-zA-Z]{20}$', msg: "纳税人识别号信息错误，请输入15、18位或20位数字或字母" }]);invoiceVaidArr.push(_this.domObj.taxpayerRegistrationNumber.find("input").validate({ singleMode: true, fixDC: true, trim: true }));if (editorInvoiceManager.specialInvoiceCheckBox.getVal() === true) {
																								//支持专票
																								validate.addFilter(_this.domObj.registerAddress.find("input"), [{ rq: true, msg: "请输入注册地址" }, { regex: '\\S{2,100}', msg: "注册地址长度应在2-100字符之间" }]);invoiceVaidArr.push(_this.domObj.registerAddress.find("input").validate({ singleMode: true, fixDC: true, trim: true }));validate.addFilter(_this.domObj.companyPhone.find("input"), [{ rq: true, msg: "请输入公司电话" }, { regex: '(\\d|\\(|\\/|\\)|\\N|\\,|\\*|\\;|\\#|\\+|\\-|\\.)+', msg: "请正确填写公司电话" }, { regex: '[\\d\\(\\/\\)\\N\\,\\*\\;\\#\\+\\-\\.]{2,50}', msg: "公司电话长度应在2-50字符之间" }]);invoiceVaidArr.push(_this.domObj.companyPhone.find("input").validate({ singleMode: true, fixDC: true, trim: true }));validate.addFilter(_this.domObj.openAccountBank.find("input"), [{ rq: true, msg: "请输入开户银行" }, { regex: '\\S{2,100}', msg: "开户银行长度应在2-100字符之间" }]);invoiceVaidArr.push(_this.domObj.openAccountBank.find("input").validate({ singleMode: true, fixDC: true, trim: true }));validate.addFilter(_this.domObj.accountOfBank.find("input"), [{ rq: true, msg: "请输入银行账号" }, { regex: '\\d+', msg: "请正确填写银行账号" }, { regex: '\\d{2,50}', msg: "银行账号长度应在2-50字符之间" }]);invoiceVaidArr.push(_this.domObj.accountOfBank.find("input").validate({ singleMode: true, fixDC: true, trim: true }));
																					}break;case 1: /*个人*/case 2:
																					/*机关单位*/break;}for (var index = 0, len = invoiceVaidArr.length; index < len; index++) {
																		if (invoiceVaidArr[index].isError) {
																					dialog.alert(invoiceVaidArr[index].msgs[0]);flag = true;break;
																		} else if (index === 1 && !(_this.domObj.taxpayerRegistrationNumber.find("input").val().length === 15 || _this.domObj.taxpayerRegistrationNumber.find("input").val().length === 18 || _this.domObj.taxpayerRegistrationNumber.find("input").val().length === 20)) {
																					dialog.alert("纳税人识别号信息错误，请输入15、18位或20位数字或字母");flag = true;break;
																		}
															};if (flag) {
																		return;
															}var matchHeaderType = [2, 1, 3];param["invoiceTitle"] = _this.domObj.invoiceHeader.find("input").val();param["defaultFlag"] = false;param["invoiceTitleType"] = matchHeaderType[editorInvoiceManager.invoiceHeaderCtrl.value];if (editorInvoiceManager.invoiceHeaderCtrl.value === 0) {
																		param["taxPayerNum"] = _this.domObj.taxpayerRegistrationNumber.find("input").val();if (editorInvoiceManager.specialInvoiceCheckBox.getVal() === true) {
																					param["registerPhoneNum"] = _this.domObj.companyPhone.find("input").val();param["registerAddress"] = _this.domObj.registerAddress.find("input").val();param["registerBankNum"] = _this.domObj.accountOfBank.find("input").val();param["registerBank"] = _this.domObj.openAccountBank.find("input").val();param["supportSpecialInvoice"] = true;
																		} else {
																					param["supportSpecialInvoice"] = false;
																		}
															}if ( /* 末登录 */window["TJObject"].ecrd === "192928") {
																		// 存localStorage
																		return;
															} // param["cardNo"] = window["TJObject"].ecrd;
															slark.get("h5_createorder").startLoading();core.fetch(window.pageInfo.subPath + 'api/saveOrUpdateInvoiceTitle/', param, { // url:window.pageInfo.subPath + 'api/saveOrUpdateInvoiceTitle',
																		type: "post", timeout: 5000 // data:param,
																		// success:
															}).then(function (data) {
																		slark.get("h5_createorder").stopLoading();if (data.error === false) {
																					dialog.alert("添加成功！", function () {
																								_this.clearInput();_this.isAddedHide = true;_this.hide();
																					});
																		} else {
																					dialog.alert("添加失败！");
																		}
															}, // error:
															function () {
																		slark.get("h5_createorder").stopLoading();dialog.alert("添加失败！");
															});
												});if (!_this.loadPlugFlag) {
															_this.pluginInit();taxPayerNumWin.init(dom);_this.loadPlugFlag = true;
												}_this.domObj.taxpayerRegistrationNumberWin.on("click", function () {
															taxPayerNumWin.show();
												});clearInput.init(dom, '.js_add_clear_input', { top: 7 });
									}, pluginInit: function () {
												this.editorInvoiceManager.init(this.domObj, 0, this.page[0]);
									}, clearInput: function () {
												for (var item in this.domObj) {
															if (this.domObj[item].find("input").length > 0) {
																		this.domObj[item].find("input").val("");
															}
												}
									} };module.exports = addInvoiceInfo;
			}, // entry/hotel/tpl/editInvoiceInfo.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":1,"md5":"9680c4fd3dfe61733dc0ddf5573a6ee7"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('editInvoiceInfo', '<div> <header class="bar bar-nav flight-order-head"> <a class="icon icon-back pull-left"></a> <h1 class="title">发票抬头</h1> </header> <div class="page-content">  <div> <div class="invoice_div"> <div class="invoice"> <ul class="invoice_save"> <li class="bdb"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span>抬头类型</span> <span class="js_invoice_header_type"> <a href="javascript:;" class="u_btn">公司</a> <a href="javascript:;" class="u_btn">个人</a> <a href="javascript:;" class="u_btn">机关单位</a> </span> </p> </div> </li> <li class="bdb js_invoice_title_name"> <label for="invoice-type" class="invoice-type"></label> <div> <p><span class="taxpayer-num">抬头名称</span><span class="taxpayer-inp"><input class="right_no js_add_clear_input" type="text" placeholder="抬头全称"></span></p> </div> </li> <li class="bdb js_taxpayer_registration_number"> <label for="invoice-type" class="invoice-type"></label> <div> <p><span class="taxpayer-num">纳税人识别号<b></b></span><span class="taxpayer-inp"><input class="right_no js_add_clear_input" maxlength="20" type="text" placeholder="公司统一纳税编号"></span></p> </div> </li> </ul> <ul class="invoice_save invoice_savebot"> <li class="bdb js_select_special_checkBox"> <label for="invoice-type" class="invoice-type"></label> <div> <p class="invoice_add"> <span class="taxpayer-num">增值税专用发票</span> <span></span> </p><div class="taxpayer-inp"> <label class="label-switch"> <div class="check_box u_btn js_special_invoice_checkBox" data-checkbox="false"> <span class="open">开</span> <span class="close">关</span> </div> </label> </div> <p></p> </div> </li> <li class="bdb invoice_i js_register_address" style="display:none;"> <label for="invoice-type" class="invoice-type"></label> <div> <p><span class="taxpayer-num">注册地址</span><span class="taxpayer-inp"><input class="right_no js_add_clear_input" type="text" placeholder="请输入注册地址" value=""></span></p> </div> </li> <li class="bdb invoice_i js_company_phone" style="display:none;"> <label for="invoice-type" class="invoice-type"></label> <div> <p><span class="taxpayer-num">公司电话</span><span class="taxpayer-inp"><input class="right_no js_add_clear_input" type="text" placeholder="请输入公司电话" value=""></span></p> </div> </li> <li class="bdb invoice_i js_open_account_bank" style="display:none;"> <label for="invoice-type" class="invoice-type"></label> <div> <p><span class="taxpayer-num">开户银行名称</span><span class="taxpayer-inp"><input class="right_no js_add_clear_input" type="text" placeholder="请与开户许可证保持一致" value=""></span></p> </div> </li> <li class="bdb invoice_i js_account_of_bank" style="display:none;"> <label for="invoice-type" class="invoice-type"></label> <div> <p><span class="taxpayer-num">开户银行账号</span><span class="taxpayer-inp"><input class="right_no js_add_clear_input" type="text" placeholder="请与开户许可证保持一致" value=""></span></p> </div> </li> </ul> </div> </div> </div>  </div> <nav class="bar invoice_bar"> <div class="btn_sure js_save_invoice_info">保存</div> </nav> <div class="m_dialog" style="display: none;"> <div class="bd bdb"> <h3>说明</h3> <p>纳税人识别号是税务登记证上的唯一识别企业的税号，通常由15位、18位或20位码组成。</p> </div> <div class="ft">确定</div> </div> <div class="m_mask" style="display: none;"></div> <div>');
						}();
			}, // entry/hotel/js/invoice/editorInvoiceManager.js
			function (__inner_require__, exports, module) {
						var itemBarPackage = __inner_require__(9 /*entry/hotel/js/invoice/itembar.js*/),
						    invoicePackage = __inner_require__(10 /*entry/hotel/js/invoice/invoice.js*/),
						    checkbox = __inner_require__(6 /*entry/hotel/js/components/checkbox.js*/);var editorInvoicemanager = { init: function (domObj, invoiceHeaderDefValue) {
												//发票抬头
												this.headerOfCompany = new invoicePackage.InvoiceHeader.HeaderOfCompany();this.headerOfPerson = new invoicePackage.InvoiceHeader.HeaderOfPerson();this.headerOfOrganization = new invoicePackage.InvoiceHeader.HeaderOfOrganization();this.InvoiceOfSpecial = new invoicePackage.InvoiceOfSpecial(); //
												var taxpayerRegistrationNumber = new itemBarPackage.taxpayerRegistrationNumber(domObj.taxpayerRegistrationNumber); //
												var registerAddress = new itemBarPackage.registerAddress(domObj.registerAddress);var companyPhone = new itemBarPackage.companyPhone(domObj.companyPhone);var openAccountBank = new itemBarPackage.openAccountBank(domObj.openAccountBank);var accountOfBank = new itemBarPackage.accountOfBank(domObj.accountOfBank); //发票抬头， 公司需要纳税人识别号；个人，机关单位不需要
												this.headerOfCompany.add(taxpayerRegistrationNumber);this.InvoiceOfSpecial.add(registerAddress);this.InvoiceOfSpecial.add(companyPhone);this.InvoiceOfSpecial.add(openAccountBank);this.InvoiceOfSpecial.add(accountOfBank); //发票抬头类型 处理对象
												this.invoiceHeaderCtrl = { value: 0, //默认公司
															init: function (defValue) {
																		this.value = defValue;this.bindEvent();
															}, bindEvent: function () {
																		var items = domObj.invoiceHeaderType.find("a"),
																		    _this = this;_this.click(domObj.invoiceHeaderType.find("a").eq(_this.value));items && items.on("click", function () {
																					if ($(this).hasClass("active")) {
																								return;
																					}_this.click(this);
																		});
															}, click: function (_this) {
																		$(_this).siblings().removeClass("active");$(_this).addClass("active");this.value = $(_this).index();this.setHeader();
															}, setHeader: function () {
																		//个人机关单位 对象中没有元素，show hide 省略调用
																		switch (this.value) {case 0:
																								editorInvoicemanager.headerOfCompany.show();domObj.selectSpecialCheckBox.show();editorInvoicemanager.specialInvoiceCheckBox.getVal() ? editorInvoicemanager.InvoiceOfSpecial.show() : editorInvoicemanager.InvoiceOfSpecial.hide();break;case 1:case 2:
																								editorInvoicemanager.headerOfCompany.hide();domObj.selectSpecialCheckBox.hide();editorInvoicemanager.InvoiceOfSpecial.hide();break;default:
																								break;}
															}, hide: function () {
																		//个人机关单位 对象中没有元素，hide 省略调用
																		editorInvoicemanager.headerOfCompany.hide();
															} };this.specialInvoiceCheckBox = new checkbox(domObj.specialInvoiceCheckBox.hasClass("on"));this.specialInvoiceCheckBox.addHandler("checked", function (flag) {
															flag ? domObj.specialInvoiceCheckBox.addClass("on") : domObj.specialInvoiceCheckBox.removeClass("on");flag ? editorInvoicemanager.InvoiceOfSpecial.show() : editorInvoicemanager.InvoiceOfSpecial.hide();domObj.specialInvoiceCheckBox.attr("data-checkbox", flag);
												});domObj.specialInvoiceCheckBox.on("click", function () {
															editorInvoicemanager.specialInvoiceCheckBox.toggle();
												});this.invoiceHeaderCtrl.init(invoiceHeaderDefValue);
									} };module.exports = editorInvoicemanager;
			}, // entry/hotel/js/invoice/invoicePostAddress.js
			function (__inner_require__, exports, module) {
						var core = require('hotelfx@1.1.0/src/js/core.js'),
						    dialog = require('hotelfx@1.1.0/src/js/dialog.js');var Common = { /**
                                                                            * [getCheckedItem 获取数组中checked值为1的元素，如果没有，默认返回数组中第一个元素]
                                                                            * @param  {[type]} list [目标数组]
                                                                            * @return {[type]}      [数组元素]
                                                                            */getCheckedItem: function (list) {
												if (list && list.length > 0) {
															for (var i = 0; i < list.length; i++) {
																		if (list[i].checked && list[i].checked == 1) {
																					return list[i];
																		}
															}return list[0];
												}
									}, /**
            * [setLocalData 根据传入键名key ，和键值value ,
            *  去修改localStorage key 中的value，
            *  或者直接覆盖的方式修改 该key 中的value]
            * @param {String} key    [键名字符串]
            * @param {String} value  [键值字符串]
            * @param {Char} symbol [分割字符]
            * @param {Number} limit  [限制长度]
            */setLocalData: function (key, value, symbol, limit) {
												var content = localStorage.getItem(key) || false;if (content && content.length > 0) {
															var tempArr = content.split(symbol);if (tempArr.contains(value)) {
																		tempArr.splice(tempArr.indexOf(value), 1);
															} else if (tempArr.length >= limit) {
																		tempArr.shift();
															}tempArr.push(value);localStorage.setItem(key, tempArr.join(symbol));
												} else {
															localStorage.setItem(key, value);
												}
									}, getLocalData: function (key, symbol, limit) {
												var tempSelectionArr = new Array();var localData = localStorage.getItem(key) || false;if (localData && localData.length > 0) {
															var selectionValueArr = localData.split(symbol);if (limit >= 0 && selectionValueArr.length > limit) {
																		selectionValueArr = selectionValueArr.splice(selectionValueArr.length - limit);
															}for (var i = 0; selectionValueArr.length > 0 && i < selectionValueArr.length; i++) {
																		if (selectionValueArr[i].length > 0) {
																					//tempSelectionArr.push(new slideSelectionEntity(i + 1, selectionValueArr[i]));
																					tempSelectionArr.push({ 'value': i + 1, 'text': selectionValueArr[i] });
																		}
															}
												}return tempSelectionArr.reverse();
									}, recordTextLayer: function (opt) {
												//48小时内有多少人预定的悬浮框
												var recordText = $("#record-text"); //recordText.html(opt);
												recordText.show();recordText.addClass("record-active");setTimeout(function () {
															recordText.removeClass("record-active").hide();
												}, 5500);
									} };Common.recordTextLayer();var dom = slark.getActiveLayer();var selectAddress = { TEMPLATE: { BODY: '<div>' + '<header class="bar bar-nav flight-order-head">' + '<a class="icon icon-back pull-left"></a>' + '<h1 class="title">常用邮寄地址</h1>' + '</header>' + '<div class="page-content newbill">' + '<div class="newbillmain_content">' + '<section class="addbill"><span>+</span>增加常用邮寄地址</section>' + '<div class="address-list"></div>' + '<div class="billbtn">确定</div>' + '</div>' + '</div>' + '</div>', ITEM: '<section class="bill_person">' + '<div class="address_item ${checked}" data-id="${id}" data-name="${name}" data-areacode="${areaCode}" data-phoneno="${phoneNo}" data-addressdetail="${addressDetail}">' + '<p><span>${name}</span><span><em>+${areaCode}</em>${phoneNo}</span></p>' + '<p><span>${addressDetail}</span></p>' + '</div>' + '</section>' }, addresses: {}, //$DATA_CREATEORDER.addressesJson,
									initValue: '', //$('.address_detail', dom).attr('data-id'),
									id: '', //$('.address_detail', dom).attr('data-id'),
									name: '', //$('.usermess b', dom).html(),
									phoneNo: '', //$('.usermess em', dom).html(),
									addressDetail: '', //$('.address-detail', dom).html(),
									init: function () {
												this.page = $(this.TEMPLATE.BODY);this.addresses = $DATA_CREATEORDER.addressesJson;var addresses = [];if ($DATA_CREATEORDER.loginFlag == 1) {
															addresses = selectAddress.addresses;
												} else {
															if (localStorage.getItem('addresses') != null) {
																		addresses = JSON.parse(localStorage.getItem('addresses'));
															}
												}this.renderAddresses(addresses);this._bindEvent();
									}, renderAddresses: function (addresses) {
												var newbill = $('.address-list', this.page); //newbill.append($('<section class="addbill"><span>+</span>增加常用邮寄地址</section>'));
												$('.address_item', this.page).removeClass('on');for (var i = 0; i < addresses.length; i++) {
															var checked = String(addresses[i].id) == this.initValue ? 'on' : '';if (checked == 'on') {
																		selectAddress.name = addresses[i].name;selectAddress.phoneNo = addresses[i].phoneNo;selectAddress.addressDetail = addresses[i].addressDetail;
															}var item = $(this.TEMPLATE.ITEM.replace('${checked}', checked).replace('${id}', addresses[i].id).replace('${name}', addresses[i].name).replace('${areaCode}', addresses[i].areaCode).replace('${phoneNo}', addresses[i].phoneNo).replace('${addressDetail}', addresses[i].addressDetail).replace('${name}', addresses[i].name).replace('${areaCode}', addresses[i].areaCode).replace('${phoneNo}', addresses[i].phoneNo).replace('${addressDetail}', addresses[i].addressDetail));item.on('click', function (e) {
																		$('.address_item', this.page).removeClass('on');var $target = $(e.currentTarget);selectAddress.id = $target.find('.address_item').attr('data-id');selectAddress.name = $target.find('.address_item').attr('data-name');selectAddress.phoneNo = $target.find('.address_item').attr('data-phoneno');selectAddress.addressDetail = $target.find('.address_item').attr('data-addressdetail');$target.find('.address_item').addClass('on');
															});newbill.append(item);
												} //newbill.append($('<div class="billbtn">确定</div>'));
									}, _bindEvent: function () {
												var page = this.page;var _this = this;$('.js_invoice_post_address', dom).click(function () {
															if ($DATA_CREATEORDER.loginFlag == true && selectAddress.addresses.length > 0 || localStorage.getItem('addresses') != null) {
																		selectAddress.show();
															} else {
																		addAddress.show();
															}
												});$('header .icon-back', this.page).on('click', function () {
															selectAddress.hide();
												});$('.addbill', page).on('click', function () {
															addAddress.show();
												});$('.billbtn', page).on('click', function () {
															// $('.address_detail', dom).attr('data-id', selectAddress.id);
															// $('.usermess b', dom).html(selectAddress.name);
															// $('.usermess em', dom).html(selectAddress.phoneNo);
															// $('.address-detail', dom).html(selectAddress.addressDetail);
															selectAddress.hide();
												});
									} };var addAddress = { // TEMPLATE: {
									//     BODY: '<div class="add-address page-plugin page-on-right"><header class="bar bar-nav"><a class="icon icon-back pull-left"></a><h1 class="title">新增邮寄地址</h1></header><div class="page-content"><div class="info-box"><article class="info"><div class="name bottom-line"><input id="cusnameblank" type="text" placeholder="姓名" maxlength="20"></div><div class="address-detail"><input id="cusaddressblank" type="text" placeholder="详细地址" class="area-input" maxlength="50"></div></article><article class="set-common-use"><span>设为常用地址</span><label class="label-switch"><div id="addcusaddressflag" class="checkbox active" data-checkbox="true"><span class="open" style="display: inline;">开</span><span class="close" style="display: none;">关</span></div></label></article><div class="confirm">保存</div></div></div></div>',
									//     ITEM: '<li class="selected" style="display: list-item;"><div class="checkbox"></div><span>${address}</span></li>'
									// },
									TEMPLATE: { BODY: '<div>' + '<header class="bar bar-nav flight-order-head">' + '<a class="icon icon-back pull-left"></a>' + '<h1 class="title">新增邮寄地址</h1>' + '</header>' + '<div class="page-content newbill">' + '<section class="addnewdress">' + '<div class="cname"><span>姓名</span><span><input placeholder="请填写姓名"></span></div>' + '</section>' + '<section class="addnewdress">' + '<div class="phone-no"><span>手机<em class="areacode" data-value="86">+86</em></span><span><input placeholder="请填写手机号"></span></div>' + '</section>' + '<section class="addnewdress">' + '<div class="detail-address"><span>地址</span><span><input placeholder="请填写详细地址"></span></div>' + '</section>' + '<section class="addnewdress lastchild">' + '<div class="post-code"><span>邮编</span><span><input placeholder="选填"></span></div>' + '</section>' + '<div class="billbtn">保存并使用</div>' + '</div>' + '</div>' }, // selectedAddressLabel: $(".selected-address-label", dom),
									// selectedAddressButton: $(".selected-address-button", dom),
									needInvoiceflag: false, codeRegex: null, init: function () {
												this.page = $(this.TEMPLATE.BODY);this.page.appendTo(slark.getActiveLayer());this._bindEvent(); // validate.addFilter($(".cname input", this.page), {
												//     rq: true,
												//     msg: "请输入姓名"
												// });
												// validate.addFilter($(".phone-no input", this.page), {
												//     rq: true,
												//     msg: "请输入手机号"
												// });
												// validate.addFilter($(".detail-address input", this.page), {
												//     rq: true,
												//     minlen: 3,
												//     maxlen: 50,
												//     msg: "请输入详细地址（长度为3-50个字符）"
												// });
												// validate.addFilter($(".post-code input", this.page), {
												//     rq: true,
												//     minlen: 6,
												//     maxlen: 6,
												//     msg: "请输入正确的邮编（长度为6位数字）"
												// });
												// if ($(".order-invoice li.selected", dom).length == 0) {
												//     addAddress.selectedAddressLabel.hide();
												//     addAddress.selectedAddressLabel.attr('display', 'none');
												// }
												// if (!$DATA_CREATEORDER.loginFlag) {
												//     $(".set-common-use").hide();
												// }
									}, beforeShow: function () {
												var page = this.page;$(".cname input", page).val('');$(".phone-no input", page).val('');$(".post-code input", page).val('');$(".detail-address input", page).val('');
									}, // _validate: function() {
									//     var result = $('.info input', this.page).validate({
									//         report: function(result) {
									//             result.msgs.length > 0 ? dialog.alert(result.msgs[0]) : null;
									//         }
									//     });
									//     return !result.isError;
									// },
									_addusualaddress: function (name, areacode, phoneno, addr, postcode) {
												core.fetch(window.pageInfo.subPath + "api/addaddress/", { "name": name, "areacode": areacode, "phoneno": phoneno, "address": addr, "postcode": postcode }, { timeout: 10000, type: "POST", // url: window.pageInfo.subPath + "api/addaddress/",
															dataType: "json" // data: {
															//     "name": name,
															//     "areacode": areacode,
															//     "phoneno": phoneno,
															//     "address": addr,
															//     "postcode": postcode
															// },
												}).then( //success: 
												function (result) {
															if (result.errorCode == null) {
																		var address = {};address.id = result.id;address.name = name;address.areaCode = areacode;address.phoneNo = phoneno;address.addressDetail = addr;address.postcode = postcode;addAddress.afterHandle(address);
															} else {
																		switch (result.errorCode) {case "NET_TIMEOUT":
																								dialog.alert(slark.getLanguage('apitimeout', $LANG_CREATEORDER));break;case "SYS_ERROR":
																								dialog.alert(slark.getLanguage('apierror', $LANG_CREATEORDER));break;default:
																								dialog.alert('保存数据失败，请稍后重试');}
															}
												}, //error: 
												function (xhr, errorType, error) {
															Common.recordTextLayer(slark.getLanguage('nettimeout', $LANG_CREATEORDER));return false;
												});
									}, afterHandle: function (address) {
												selectAddress.id = address.id;selectAddress.initValue = address.id;selectAddress.name = address.name;selectAddress.phoneNo = address.phoneNo;selectAddress.addressDetail = address.addressDetail;$DATA_CREATEORDER.addressesJson.push(address);selectAddress.addresses = $DATA_CREATEORDER.addressesJson; //保存并使用
												// $('.adress_select', dom).parent().find('.rm-cat').remove();
												// $('.adress_select', dom).css('display', 'block');
												// $('.address_detail', dom).attr('data-id', selectAddress.id);
												// $('.usermess b', dom).html(selectAddress.name);
												// $('.usermess em', dom).html(selectAddress.phoneNo);
												// $('.address-detail', dom).html(selectAddress.addressDetail);
												//setInvoicePostAddress(selectAddress);
												selectAddress.renderAddresses(selectAddress.addresses);addAddress.hide();selectAddress.hide();
									}, _bindEvent: function () {
												var page = this.page;var area_code = $(".areacode", page).slideSelector({ title: '选择手机号地区', data: $DATA_CREATEORDER.areaCode, initValue: Common.getCheckedItem($DATA_CREATEORDER.areaCode), callback: function (result) {
																		for (var i = 0; i < $DATA_CREATEORDER.areaCode.length; i++) {
																					if (result.value == $DATA_CREATEORDER.areaCode[i].value) {
																								addAddress.codeRegex = $DATA_CREATEORDER.areaCode[i].regex;break;
																					}
																		}$(".areacode", page).html("+" + (result.value == "" ? "86" : result.value));$(".areacode", page).attr("data-value", result.value == "" ? "86" : result.value);
															} });PluginManager.add("area_code", area_code); // $(".selected-address-button", dom).click(function() {
												//     addAddress.show();
												// });
												// $('#needinvoiceflag', dom).on('click', function() {
												//     var _this = $(this);
												//     if (_this.hasClass('active')) {
												//         addAddress.needInvoiceflag = false;
												//     } else {
												//         addAddress.needInvoiceflag = true;
												//     }
												// });
												// invoiceCheckbox.addHandler('checked',function(flag){
												//     addAddress.needInvoiceflag = flag;
												// });
												$("header .icon-back", page).click(function () {
															addAddress.hide();
												});$('.rm-cat', dom).on('click', function () {
															addAddress.show();
												});$(".billbtn", page).click(function () {
															// if (!addAddress._validate()) {
															//     return false;
															// }
															var name = $(".cname input", page).val().trim();var areacode = $(".areacode", page).attr("data-value").trim();var phoneno = $(".phone-no input", page).val().trim();var addressdetail = $(".detail-address input", page).val().trim();var postcode = $(".post-code input", page).val().trim();var reg = /^[\u4E00-\u9FA5a-zA-Z0-9/ \(\)（）\-\_]{2,50}$/;areacode = areacode == "" ? "86" : areacode; //输入校验
															if (name == '') {
																		dialog.alert('请输入姓名');return;
															}if (phoneno == '') {
																		dialog.alert('请输入手机号');return;
															}if (addressdetail == '') {
																		dialog.alert('请输入邮寄地址');return;
															} // if(postcode == '') {
															//     dialog.alert('邮递编码不能为空');
															//     return;
															// }
															if (name.length > 100 || !reg.test(name)) {
																		dialog.alert('请输入真实的姓名（长度为2-100个字符）');return;
															}if (addressdetail.length > 200 || !reg.test(addressdetail)) {
																		dialog.alert('邮寄地址过长（可输入200个字符）');return;
															}if (!new RegExp(addAddress.codeRegex).test(areacode + phoneno)) {
																		dialog.alert("请输入正确收票人电话");return;
															}if (postcode != '' && /^\d{6}$/.test(postcode) == false) {
																		dialog.alert("请输入正确的邮政编码");return;
															}var addresses = selectAddress.addresses;for (var i = 0; i < addresses.length; i++) {
																		if (name == addresses[i].name && addressdetail == addresses[i].addressDetail && phoneno == addresses[i].phoneNo && postcode == addresses[i].postcode) {
																					dialog.alert("您已保存相同邮寄地址");return;
																		}
															}if ($DATA_CREATEORDER.loginFlag == true) {
																		addAddress._addusualaddress(name, areacode, phoneno, addressdetail, postcode);
															} else {
																		//未登录，发票信息保存至localStorage
																		var addresses = new Array();var address = {};address.id = new Date().getTime();address.name = name;address.areaCode = areacode;address.phoneNo = phoneno;address.addressDetail = addressdetail;address.postcode = postcode;if (localStorage.getItem('addresses') != null) {
																					addresses = JSON.parse(localStorage.getItem('addresses'));
																		}addresses.push(address);localStorage.setItem('addresses', JSON.stringify(addresses));addAddress.afterHandle(address);
															} // addAddress.selectedAddressLabel.after(addAddress.TEMPLATE.ITEM.replace('${address}', allAddress));
															// addedList.find('.checkbox').removeClass("checked");
															// $(".order-invoice li.selected", dom).first().find(".checkbox").addClass("checked");
															// addAddress.hide();
															// if (addAddress.selectedAddressLabel.attr('display') == 'none') {
															//     addAddress.selectedAddressLabel.show();
															//     addAddress.selectedAddressLabel.attr('display', 'list-item');
															// }
												});
									} //PluginManager.add("addAddress", addAddress);
						};module.exports = { selectAddress: selectAddress, addAddress: addAddress };
			}, // entry/hotel/js/invoice/showInvoiceManager.js
			function (__inner_require__, exports, module) {
						/*
      * ming.jin 2017-07-28
      * 订单填写页发票二级页逻辑
      */var itemBarPackage = __inner_require__(9 /*entry/hotel/js/invoice/itembar.js*/),
						    invoicePackage = __inner_require__(10 /*entry/hotel/js/invoice/invoice.js*/);var initInvoice = { paper: null, elec: null, special: null, init: function (domObj) {
												//发票
												this.paper = new invoicePackage.InvoiceOfPaper();this.elec = new invoicePackage.InvoiceOfElec();this.special = new invoicePackage.InvoiceOfSpecial();this.orderPage = new invoicePackage.InvoiceOfPaperForOrder();this.orderSpecial = new invoicePackage.InvoiceOfSpecialForOrder(); //hide
												this.hideItemPack = new invoicePackage.InvoiceHideItem(); //发票抬头
												this.headerOfCompany = new invoicePackage.InvoiceHeader.HeaderOfCompany();this.headerOfPerson = new invoicePackage.InvoiceHeader.HeaderOfPerson();this.headerOfOrganization = new invoicePackage.InvoiceHeader.HeaderOfOrganization(); //初始化 发票所填字段，只需要初始化动态或可隐藏的字段dom即可
												//纳税人识别号 －》 纸质或电子发票 或专票 
												var taxpayerRegistrationNumber = new itemBarPackage.taxpayerRegistrationNumber(domObj.taxpayerRegistrationNumber); //抬头类型
												var invoiceHeaderType = new itemBarPackage.invoiceHeaderType(domObj.invoiceHeaderType); //电子发票手机号
												var phoneNumber = new itemBarPackage.receivePhoneNumber(domObj.phoneNumber); //邮寄地址
												var postAddress = new itemBarPackage.postAddress(domObj.postAddress); //邮寄方式
												var postType = new itemBarPackage.postType(domObj.postType); //注册地址
												var registerAddress = new itemBarPackage.registerAddress(domObj.registerAddress); //公司电话
												var companyPhone = new itemBarPackage.companyPhone(domObj.companyPhone); //开户银行
												var openAccountBank = new itemBarPackage.openAccountBank(domObj.openAccountBank); //银行帐号
												var accountOfBank = new itemBarPackage.accountOfBank(domObj.accountOfBank); //tips --------------------
												//电子发票说明
												this.elecInvoiceTip0 = new itemBarPackage.elecInvoiceTip(domObj.invoiceElecTip0);this.elecInvoiceTip1 = new itemBarPackage.elecInvoiceTip(domObj.invoiceElecTip1); //纸制发票说明
												this.invoiceElongTip = new itemBarPackage.invoiceElongTip(domObj.invoicePaperTip); //common tips
												this.invoiceCommonTips = new itemBarPackage.invoiceElongTip(domObj.invoiceCommonTips); //预约发票 tips
												this.invoiceOrderTips = new itemBarPackage.invoiceElongTip(domObj.invoiceOrderTips); //发票抬头， 公司需要纳税人识别号；个人，机关单位不需要
												this.headerOfCompany.add(taxpayerRegistrationNumber); // 个人，机关单位不需要任何必填项，不需要调用add方法
												//纸质发票----------------
												this.paper.add(invoiceHeaderType);this.paper.add(postAddress);this.paper.add(postType);this.paper.add(this.invoiceElongTip); //电子发票-----------------
												this.elec.add(phoneNumber);this.elec.add(invoiceHeaderType);this.elec.add(this.elecInvoiceTip0);this.elec.add(this.elecInvoiceTip1); //专票发票-----------------
												this.special.add(taxpayerRegistrationNumber);this.special.add(registerAddress);this.special.add(companyPhone);this.special.add(openAccountBank);this.special.add(accountOfBank);this.special.add(postAddress);this.special.add(postType);this.special.add(this.invoiceElongTip); //2017-09-26 jm 新增功能：预约发票
												this.hideItemPack.add(postAddress);this.hideItemPack.add(postType);this.hideItemPack.add(phoneNumber);this.hideItemPack.add(this.invoiceElongTip);this.hideItemPack.add(this.elecInvoiceTip0);this.hideItemPack.add(this.elecInvoiceTip1);this.hideItemPack.add(this.invoiceCommonTips); //...
												//预约发票--纸
												this.orderPage.add(invoiceHeaderType); //预约发票--专
												this.orderSpecial.add(taxpayerRegistrationNumber);this.orderSpecial.add(registerAddress);this.orderSpecial.add(companyPhone);this.orderSpecial.add(openAccountBank);this.orderSpecial.add(accountOfBank); //发票抬头类型 处理对象
												this.invoiceHeaderCtrl = { value: 0, //默认公司
															init: function () {
																		this.value = 0;this.bindEvent();
															}, bindEvent: function () {
																		var items = domObj.invoiceHeaderTypeBox.find("a"),
																		    _this = this;items && items.on("click", function () {
																					if ($(this).hasClass("active")) {
																								return;
																					}$(this).siblings().removeClass("active");$(this).addClass("active");_this.value = $(this).index();_this.setHeader();
																		});
															}, setHeader: function () {
																		//个人机关单位 对象中没有元素，show hide 省略调用
																		switch (this.value) {case 0:
																								initInvoice.headerOfCompany.show();break;case 1:
																								initInvoice.headerOfCompany.hide();break;case 2:
																								initInvoice.headerOfCompany.hide();break;default:
																								break;}
															}, hide: function () {
																		//个人机关单位 对象中没有元素，hide 省略调用
																		initInvoice.headerOfCompany.hide();
															} };this.invoiceHeaderCtrl.init();
									}, paperShow: function () {
												//纸质发票 根据发票抬头类型展示发票抬头项
												this.invoiceHeaderCtrl.setHeader();this.paper.show();
									}, paperHide: function () {
												//纸质发票 隐藏发票抬头类型  
												this.invoiceHeaderCtrl.hide();this.paper.hide();
									}, elecShow: function () {
												this.invoiceHeaderCtrl.setHeader();this.elec.show();
									}, elecHide: function () {
												this.invoiceHeaderCtrl.hide();this.elec.hide();
									}, specialShow: function () {
												this.special.show();
									}, specialHide: function () {
												this.special.hide();
									} };module.exports = initInvoice;
			}, // entry/hotel/js/invoice/taxpayerNumWin.js
			function (__inner_require__, exports, module) {
						var taxpayerTpl = __inner_require__(8 /*entry/hotel/tpl/taxpayer.js*/); //纳税人识别号说明
						var taxpayerNum = { TEMPLATE: taxpayerTpl({}), beforeShow: function () {
												var html = $('html');if (html.hasClass('android')) {
															html.css('overflow', 'hidden');
												}
									}, init: function (dom) {
												this.page = $(this.TEMPLATE);this.hide();this.closeDom = this.page.find(".closed");this.page.appendTo($(dom));this._bindEvent();
									}, show: function () {
												this.page.show();
									}, hide: function () {
												this.page.hide();
									}, afterHide: function () {
												var html = $('html');if (html.hasClass('android')) {
															html.css('overflow', '');
												}
									}, _bindEvent: function () {
												this.closeDom.on('click', function () {
															taxpayerNum.hide();
												});
									} };module.exports = taxpayerNum;
			}, // entry/hotel/tpl/showInvoiceInfo.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":1,"md5":"1ae33e13437998cb40cd5fd03af245d4"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('showInvoiceInfo', '<div> <header class="bar bar-nav flight-order-head"> <a class="icon icon-back pull-left"></a> <h1 class="title">发票</h1> </header> <div class="page-content newbill"> <div> <div class="invoice_div"> <div class="invoice"> <ul class="invoice_savebot invoice_switch"> <li> <label for="invoice-type" class="invoice-type"></label> <div> <p class="invoice_add"> <span class="taxpayer-num check_box_invoice_title">需要发票</span> <span></span> </p><div class="taxpayer-inp"> <label class="label-switch"> <div class="check_box u_btn js_invoice_switch" data-checkbox="false"> <span class="open">开</span> <span class="close">关</span> </div> </label> </div> <p></p> </div> </li> </ul> <ul class="js_invoice_area_input" style="display:none;"> <li class="invoice-top inc_tit js_invoice_type"> <label for="invoice-type" class="invoice-type"></label> <div class="label">发票类型</div> <div class="content list-input"> <input type="text" readonly="readonly" class="cert-type" data-value="1" placeholder=""> <span class="to_right"></span> </div> </li> <li class="bdb js_invoice_header_type"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span>抬头类型</span> <span class="invoice-header"> <a href="javascript:;" class="u_btn active">公司</a> <a href="javascript:;" class="u_btn">个人</a> <a href="javascript:;" class="u_btn">机关单位</a> </span> </p> </div> </li> <li class="bdb js_selected_invoice_title" style="display:none;"> <label for="invoice-type" class="invoice-type"></label> <div class="label">发票抬头</div> <div class="content list-input"> <input type="text" readonly="readonly" class="cert-type" placeholder="请选择发票抬头"> <span class="to_right"></span> </div> </li> <li class="bdb invoice_i js_input_invoice_title" style="display:none;"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span class="taxpayer-num">发票抬头</span> <span class="taxpayer-inp"> <input type="text" class="js_show_clear_input" placeholder="请输入发票抬头" value=""> </span> </p> </div> </li> <li class="bdb js_invoice_content"> <label for="invoice-type" class="invoice-type"></label> <div class="label">发票内容</div><div class="content list-input"> <input type="text" readonly="readonly" class="cert-type" placeholder=""> <span class="to_right"></span> </div> </li> <li class="bdb invoice_i js_taxpayer_registration_number"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span class="taxpayer-num">纳税人识别号<b></b></span> <span class="taxpayer-inp"> <input type="text" class="js_show_clear_input" maxlength="20" placeholder="公司统一纳税编号"> </span> </p> </div> </li> <li class="bdb invoice_i js_invoice_register_address"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span class="taxpayer-num">注册地址</span> <span class="taxpayer-inp"> <input type="text" class="js_show_clear_input" placeholder="营业执照上的登记地址" value=""> </span> </p> </div> </li> <li class="bdb invoice_i js_invoice_company_phone"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span class="taxpayer-num">公司电话</span> <span class="taxpayer-inp"> <input type="text" class="js_show_clear_input" placeholder="有效公司电话" value=""> </span> </p> </div> </li> <li class="bdb invoice_i js_invoice_open_bank"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span class="taxpayer-num">开户银行名称</span> <span class="taxpayer-inp"> <input type="text" class="js_show_clear_input" placeholder="请与开户许可证保持一致" value=""> </span> </p> </div> </li> <li class="bdb invoice_i js_invoice_bank_id"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span class="taxpayer-num">开户银行账号</span> <span class="taxpayer-inp"> <input type="text" class="js_show_clear_input" placeholder="请与开户许可证保持一致" value=""> </span> </p> </div> </li> <li class="bdb invoice_i js_phone_number"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span class="taxpayer-num">收票人手机</span> <span class="taxpayer-inp"> <input type="text" class="js_show_clear_input" maxlength="11" placeholder="请输入手机号"> </span> </p> </div> </li> <li class="bdb js_invoice_post_type"> <label for="invoice-type" class="invoice-type"></label> <div> <p> <span class="taxpayer-num">邮寄方式</span> <span class="taxpayer-inp"> <em class="list-input"><label class="js_post_type_result">普通快递<i>(邮费¥10)</i></label><b class="to_right"></b></em> </span> </p> </div> </li> <li class="bdb js_invoice_post_address invoice_info_no"> <label for="invoice-type" class="invoice-type"></label> <div class="label">邮寄信息</div> <div class="content list-input"> <b> <em class="invoice_nam js_invoice_receive_name"></em><em class="invoice_pho js_invoice_receive_phone"></em> </b> <input type="text" readonly="readonly" class="js_invoice_receive_place" class="cert-type" placeholder="请选择邮寄信息" value="" ><span class="to_right"></span></div> </li> <li class="js_invoice_remark"> <label for="invoice-type" class="invoice-type"></label> <div class="label">发票备注</div> <div class="content list-input"> <input type="text" readonly="readonly" class="cert-type" placeholder="注明酒店名和入离日期"> <span class="js_invoice_remark_checkbox for_no for_good"></span> </div> </li> </ul> </div> <div class="invoice_tip bdb js_invoice_area_tip"> <span class="ive_tit js_invoice_wxts">温馨提示</span> <p class="js_invoice_order_tip">此发票由酒店开具，预约发票后可在离店日到酒店前台索取发票。</p> <p class="js_invoice_common_tip">国家税务总局要求，2017年7月1日起，企业发票需带有纳税人识别号或统一社会信用代码，否则无法报销。如暂时忘记可先行预订酒店，后续补开发票即可。</p> <p class="js_invoice_paper_tip">发票由艺龙公司开具，发票金额为现金支付金额（扣除礼品卡金额，立减金额等）；发票将会在您离店后寄出，普通快递，5日送达（遇节假日顺延），四川、新疆、厦门地区，受地震及金砖会议影响，部分区域暂停派件，预计9月中旬恢复后派发。</p> <p class="js_invoice_elec_tip0">此发票由艺龙公司开具，发票金额不含立减及现金账户支付的部分。确认离店后开具电子发票。</p> <p class="js_invoice_elec_tip1">电子发票开具后，您可在发票详情页添加发票到微信卡包，或者在艺龙官网下载打印发票。电子发票是税务局认可的有效凭证，其法律效力、基本用途及使用规定同纸质发票。</p> </div> </div> </div> </div> <nav class="bar invoice_bar"> <div class="btn_sure js_submit_invoice_info">确定</div> </nav> </div>');
						}();
			}, // entry/hotel/tpl/createOrderShowPrice.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":5,"md5":"4038a489339d48102eeea6dd429a9df9"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('createOrderShowPrice', function ($data, $filename /**/) {
												var $utils = this,
												    $helpers = $utils.$helpers,
												    mvtCreatorderNew = $data.mvtCreatorderNew,
												    payType = $data.payType,
												    showPayType = $data.showPayType,
												    currencyPrice = $data.currencyPrice,
												    $escape = $utils.$escape,
												    isVouch = $data.isVouch,
												    priceInfo = $data.priceInfo,
												    insurancePriceC = $data.insurancePriceC,
												    totalCoupon = $data.totalCoupon,
												    totalReduce = $data.totalReduce,
												    isLogin = $data.isLogin,
												    createOrderBtnText = $data.createOrderBtnText,
												    $out = '';if (mvtCreatorderNew == '0') {
															$out += ' <div class="addzhe bar"> ';if (payType == 0) {
																		$out += ' ';if (showPayType == 0) {
																					$out += ' <p>现在下单无需付款，请您到店后在前台付款';if (currencyPrice != 0) {
																								$out += '，折合约<em>';$out += $escape(currencyPrice);$out += '</em>';
																					}$out += '</p> ';
																		} else if (showPayType == 1) {
																					$out += ' ';if (!isVouch) {
																								$out += ' <p>现在下单无需付款，请您到店后在前台付款';if (currencyPrice != 0) {
																											$out += '，折合约<em>';$out += $escape(currencyPrice);$out += '</em>';
																								}$out += '</p> ';
																					} else {
																								$out += ' <p class="js_needNotInsurances">为锁定房源，您需在线支付担保金，成功入住后担保金将原路退还，到店后您需在前台支付房费';if (currencyPrice != 0) {
																											$out += '，折合约<em>';$out += $escape(currencyPrice);$out += '</em>';
																								}$out += '</p> <p class="js_needInsurances">为锁定房源，您需要在线支付担保金¥';$out += $escape(priceInfo.vouchPriceRmb);$out += '，成功入住后担保金将原路退还，取消险金额¥';$out += $escape(insurancePriceC);$out += '，到店后您需在前台支付房费</p> ';
																					}$out += ' ';
																		}$out += ' ';
															} else if (payType === 1 && showPayType == 2) {
																		$out += ' <p>在线付款，到店后无需付款，预订更便捷</p> ';
															}$out += ' </div> ';
												} else if ((mvtCreatorderNew == '1' || mvtCreatorderNew == '3') && (currencyPrice != 0 || priceInfo.vouchPriceRmb !== 0 && insurancePriceC !== 0)) {
															$out += ' <div class="addzhe bar"> ';if (currencyPrice != 0) {
																		$out += ' <p class="js_needNotInsurances">约折合<em>';$out += $escape(currencyPrice);$out += '</em>请您到店后在酒店前台支付</p> ';
															}$out += ' ';if ((mvtCreatorderNew == '1' || mvtCreatorderNew == '3') && showPayType == 1) {
																		$out += ' <p class="js_needInsurances">担保金¥';$out += $escape(priceInfo.vouchPriceRmb);$out += '（入住后原路返回），取消险¥';$out += $escape(insurancePriceC);$out += '</p> ';
															}$out += ' </div> ';
												}$out += ' <div class="total"> <div class="orderprice paytype"> <p> ';if (mvtCreatorderNew == '0') {
															$out += ' <span>';if (payType == 0) {
																		$out += '到店付款';
															} else if (payType == 1) {
																		$out += '在线付款';
															}$out += '</span> ';
												}$out += ' <span><b>¥</b><span id="wborderprice">';$out += $escape(priceInfo.showPriceRmb);$out += '</span></span> </p> </div> <div class="returnprice insurances-expressfree hide"> <p> ';if (mvtCreatorderNew == '0') {
															$out += '<span></span>';
												}$out += ' <span class="colorred"></span> </p> </div> ';if (totalCoupon > 0 || totalReduce > 0) {
															$out += ' <div class="returnprice totalcouple"> ';if (isLogin == '1') {
																		$out += ' ';if (totalCoupon > 0) {
																					$out += ' <p> <span>离店可返</span> <span><b>¥</b>';$out += $escape(totalCoupon);$out += '</span> </p> ';
																		} else if (totalReduce > 0) {
																					$out += ' <p> <span>已立减</span> <span><b>¥</b>';$out += $escape(totalReduce);$out += '</span> </p> ';
																		}$out += ' ';
															}$out += ' </p> </div> ';
												}$out += ' </div> <div class="next commit tjclick" id="mobilesubmit" data-tj=\'{"cspot":"nextstep"}\' data-activeTitle="';$out += $escape(createOrderBtnText);$out += '"> <span>';$out += $escape(createOrderBtnText);$out += '</span> <span class="preloader preloader-white button-loader"></span> ';if (218 < 1) {
															$out += ' <div class="check_hotel_info el_check_info tjclick" data-tj={"cspot":"ordercheck"}>核对信息</div> ';
												}$out += ' </div> ';return new String($out);
									});
						}();
			}, // entry/hotel/js/finishorder.js
			function (__inner_require__, exports, module) {
						module.exports = function (common, core, newUserHB, oldCustomers, getMvtResult, tjSendLog, mainPageTmpl, XLog) {
									var apiDomain = location.protocol + '//xapi.elong.com/';var mainPage = { render: function (element, data) {
															var data = data || {};$(element).append(mainPageTmpl({ data: data }));
												}, fetch: function () {
															var args = Array.prototype.slice.call(arguments);return core.fetch.apply(this, args);
												} };core.onrender("h5_finishorder", function (dom) {
												var cachekey = core.getParam('cachekey');var orderno = core.getParam('orderno');tjSendLog.init("h5_finishorder", { oid: orderno });var xlog = window.xlog; // 单页跳转
												if (window.$SPAToListStartTime) {
															xlog = new XLog.constructor(null, { useDefaultPerformance: false });var offsetTime = +new Date() - window.$SPAToListStartTime;xlog.sendPerformanceInfo({ start: window.$SPAToListStartTime, // 页面发起请求
																		"fetchStart": 0, // DNS查找开始/结束
																		"domainLookupStart": 0, "domainLookupEnd": 0, // 建立http连接开始/结束
																		"connectStart": 0, "connectEnd": 0, // 请求开始发送
																		"requestStart": 0, // 响应开始
																		"responseStart": 0, // 响应结束
																		"responseEnd": offsetTime, //
																		"domLoading": offsetTime, "domContentLoadedEventEnd": offsetTime, "domComplete": offsetTime, "loadEventEnd": offsetTime });
												} // 设置业务信息
												xlog.setBusinessInfo({ channel: "hotel", pageType: "h5_finishorder", orderfrom: "", cardno: "" });mainPage.fetch('/order/finishorder', { cachekey: cachekey, orderno: orderno }).then(function (pageData) {
															pageData.arriveDate = new Date(pageData.arriveDate).format('MM月dd日');pageData.leaveDate = new Date(pageData.leaveDate).format('MM月dd日');pageData.pageInfo = JSON.parse(pageData.pageInfo);pageData.hotelWeiXinPro = JSON.parse(pageData.hotelWeiXinPro);window.pageInfo = pageData.pageInfo;window.$LOGIN = "https://msecure.elong.com/login/";mainPage.render(dom, pageData);return pageData;
												}).then(function (pageData) {
															/*  事件绑定：异步请求订单完成状态  */var finishOrderProgress = { htmlModel: '<li class="#0#"><i>#1#</i>#2#</li>', init: function () {
																					var _this = this;this.$progress = $(".progress ul");var precentUrl = window.location.href;if (core.getActiveId() != "h5_finishorder") {
																								return;
																					}var objData = _this.parseUrlParamToData(precentUrl);_this.ajaxPro("/order/getorderprogresslist/", objData);
																		}, /*把URL参数转换为对象*/parseUrlParamToData: function (url) {
																					var url = url || "";if (url != "") {
																								var abledUrlArray = url.split("?")[1];var paramArr = abledUrlArray.split("&");var param = {};for (var i = 0, len = paramArr.length; i < len; i++) {
																											param[paramArr[i].split("=")[0]] = paramArr[i].split("=")[1];
																								}return param;
																					} else {
																								return null;
																					}
																		}, /*格式化字符串*/formatString: function (model, value) {
																					var str = model;for (var i = 0, len = arguments.length - 1; i < len; i++) {
																								str = str.replace(new RegExp("#[" + i + "]#", "g"), arguments[i + 1]);
																					}return str;
																		}, ajaxPro: function (strUrl, objData) {
																					var _this = this;core.fetch(strUrl, objData, { timeout: 6000 }).then(function (jsonData) {
																								var result = jsonData;if (jsonData) {
																											console.log("success load orderStatus"); // result = JSON.parse(jsonData);
																											if (result.orderProgressListViewModel.progressDescList && result.orderProgressListViewModel.progressDescList.length && result.orderProgressListViewModel.progressDescList.length > 0) {
																														var progressDescList = result.orderProgressListViewModel.progressDescList;var len = progressDescList.length;var strHtml = "";for (var i = 0; i < len; i++) {
																																	strHtml += _this.formatString(_this.htmlModel, progressDescList[i].status == 1 ? "on" : "", "", progressDescList[i].info);
																														}strHtml && _this.$progress.html(strHtml);return;
																											} else {
																														_this.$progress.html('<li class="on"><i></i>获取订单状态失败</li>');
																											}
																								} else {
																											_this.$progress.html('<li class="on"><i></i>获取订单状态失败</li>');
																								}
																					}).fail(function (xhr, err, msg) {
																								_this.$progress.html('<li class="on"><i></i>获取订单状态失败</li>');console.log("error");
																					});
																		} };finishOrderProgress.init();var focusWechat = { init: function (data) {
																					if (data.pageInfo.chid == "wxqbh5") {
																								core.fetch('/order/isfocuswechat', {}, { timeout: 5000 }).then(function (data) {
																											// var data = !!data && JSON.parse(data) || {};
																											if (data && data.isFocusWechat === false) {
																														$('.new_finishorder .focuswx').removeClass('hide');
																											}
																								}).fail(function (xhr, err, msg) {
																											console.log("error", err);
																								});
																					};
																		} };focusWechat.init(pageData); /*  微信满100返50提示  */var WXPromotionTocast = { wxpromotiontocast: null, template: '<nav class="bar record wxpromotiontocast" style="display: none; height: 80px; width: 260px; left: 46%; transition: all 20s;"></nav>', init: function (data) {
																					if (data.hotelWeiXinPro.channel && data.hotelWeiXinPro.channel == "weixin_lbs") {
																								var money = data.payAmount;if (money >= 100 && data.loginFlag == "50" && data.hotelWeiXinPro.state == 1) {
																											$('.page.page-on-center').append(WXPromotionTocast.template);WXPromotionTocast.wxpromotiontocast = $('.wxpromotiontocast');WXPromotionTocast.wxpromotiontocast.html('恭喜您赚到啦——小艺为您准备的50元预付卡，将在您离店后3个工作日内送到您的艺龙账户');WXPromotionTocast.wxpromotiontocast.show().addClass('record-active');setTimeout(function () {
																														WXPromotionTocast.wxpromotiontocast.hide();
																											}, 20000);
																								}
																					}
																		} };WXPromotionTocast.init(pageData); // wx
															// 首单抽奖
															// var _isWXNewUser_HB = localStorage.getItem("isWXNewUser_HB") && JSON.parse(localStorage.getItem("isWXNewUser_HB")) || '';
															// var _flag_ = _isWXNewUser_HB? _isWXNewUser_HB.isShowTip : true;
															var wxFirstOrderActivity = { init: function (data) {
																					// 之前是用 TJObject.chid == 'wxqbh5' 判断
																					if (data.channId == 'wxqbh5') {
																								// 微信 首单活动，来带新活动
																								var tjStartTime = new Date().getTime();core.fetch('/order/getfirstorderactivity', { hotelId: data.hotelId, orderId: data.orderId, activityType: data.activityType || 0 //todo
																								}, { timeout: 5000 }).then(function (data) {
																											var tjEndTime = new Date().getTime(); // window.tjClient.send("__firstTime__",[{
																											//     url: apiDomain +"order/getfirstorderactivity",
																											//     time: tjEndTime-tjStartTime,
																											//     size: JSON.stringify(data).length
																											// }]);
																											!!window.xlog && xlog.sendFirstScreenTime([{ url: apiDomain + "order/getfirstorderactivity", time: tjEndTime - tjStartTime, size: JSON.stringify(data).length }]);if (!data.error && data.error == false && data.jumpLink != "" && data.picUrl != "") {
																														//activeType 1=新客首单  2=老带新；
																														var jumpLink = data.jumpLink;var imgUrl = data.picUrl;var $new_finishorder = $(".new_finishorder", dom);if (data.openAdNewUserPromotionSwitch == "1" && data.activityType == 1 || data.openAdOldTakeNewSwitch == "1" && data.activityType == 2) {
																																	// 撑开一个弹层的高度，使页面可以滑动一段这个高度的距离，防止这个弹层覆盖住 《 再订一间 查看订单 》按钮，
																																	$new_finishorder.append('<div style="padding-top: 21.9%;"></div>');var hbBar = new newUserHB({ tpl: "orderTpl", after: $new_finishorder, formatPlaceholder: { imgUrl: imgUrl } });hbBar.bindClick($(".lookHongbao", dom), function (e) {
																																				//这个页面请求一个接口
																																				var tjobject = core.clone(TJObject);tjobject.tri = "adbanner";tjobject.et = "info";if (data.activityType == 2) {
																																							tjobject.sthm = "老带新";
																																				} else if (data.activityType == 1) {
																																							tjobject.sthm = "新客首单";
																																				}tjMVT.setData(tjobject);location.href = jumpLink;
																																	});
																														}
																											} else {} //微信 老客单单有奖活动
																											if (pageData.dandanAwardConfig && pageData.dandanAwardConfig == '1') {
																														oldCustomers.finishOrder({ orderId: pageData.orderId, dom: dom, pageType: 'finishorder' // mvtResult:getMvtResult("227") === "0"
																														});
																											}
																								}).fail(function (xhr, err, msg) {
																											console.log("network error"); // window.tjClient.send("__error__", {
																											//   url: apiDomain + "order/getfirstorderactivity",
																											//   err: err,
																											//   msg: msg
																											// });
																											!!window.xlog && xlog.reportError({ filename: apiDomain + "order/getfirstorderactivity", message: msg, error: err });
																								});
																					}
																		} };wxFirstOrderActivity.init(pageData); //.see Button
															$(dom).on("click", ".see", function () {
																		location.href = $("#orderDetailUrl", dom).val();
															}); //.book Button
															$(dom).on("click", ".book", function () {
																		var currentSessionInfo = JSON.parse(sessionStorage.getItem('replaceInfo'));if (currentSessionInfo !== null && currentSessionInfo.fromUrl !== "") {
																					location.href = decodeURIComponent(currentSessionInfo.fromUrl);
																		} else {
																					location.href = $("#hotelDetailUrl", dom).val();
																		}
															}); //ID: #bookAgainBtn Button
															$(dom).on("click", "#bookAgainBtn", function () {
																		var currentSessionInfo = JSON.parse(sessionStorage.getItem('replaceInfo'));if (currentSessionInfo !== null && currentSessionInfo.fromUrl !== "") {
																					location.href = decodeURIComponent(currentSessionInfo.fromUrl);
																		} else {
																					location.href = $("#hotelListUrl", dom).val();
																		}
															}); //ID: hotelOrderListBtn Button
															$(dom).on("click", "#hotelOrderListBtn", function () {
																		location.href = $("#hotelOrderListUrl", dom).val();
															}); /** 微信title 优化 */ // titleManage("h5_finishorder");
															document.title = '订单完成';
												}).fail(function (err) {
															console.log(err);
												});
									});
						}(require('hotelfx@1.1.0/src/js/common.js'), require('hotelfx@1.1.0/src/js/core.js'), require('hotelfx@1.1.0/entry/hotel/js/plugins/newUserHB.js'), require('hotelfx@1.1.0/entry/hotel/js/activity/oldCustomers.js'), require('hotelfx@1.1.0/entry/hotel/js/plugins/getMvtResult.js'), require('hotelfx@1.1.0/src/js/tjSendLog.js'), __inner_require__(36 /*entry/hotel/tpl/order/orderFinish.js*/), require('hotelfx@1.1.0/src/js/dialog.js'), require('hotelfx@1.1.0/entry/hotel/js/elongCompatible.js'), require('hotelfx@1.1.0/src/js/dateextend.js'), require('elong-xlog@0.1/dist/index.js')); // 解决ios后退页面不刷新 单单有奖浮层重复出现   //待优化
						$(function () {
									var isPageHide = false;window.addEventListener('pageshow', function () {
												if (isPageHide) {
															window.location.reload();
												}
									});window.addEventListener('pagehide', function () {
												isPageHide = true;
									});
						});
			}, // entry/hotel/tpl/order/orderFinish.js
			function (__inner_require__, exports, module) {
						/*TMODJS:{"version":5,"md5":"473de570b7ac910812f81b61f46acde2"}*/module.exports = function () {
									return require('hotelfx@1.1.0/entry/hotel/tpl/template.js')('order/orderFinish', function ($data, $filename /**/) {
												var $utils = this,
												    $helpers = $utils.$helpers,
												    data = $data.data,
												    $escape = $utils.$escape,
												    $out = '';if (!!data.customization.noHeader || data.customization.noHeader == false) {
															$out += ' <header class="bar bar-nav flight-order-head"> ';if (data.customization.hiddenBackUrl) {
																		$out += ' <a class="icon icon-left-nav pull-left icon-back" data-rel="back" data-href="';$out += $escape(data.hotelListUrl);$out += '"></a> ';
															}$out += ' ';if (data.customization.hiddenBackHome) {
																		$out += ' <a class="icon icon-house pull-right" href="//m.elong.com/"></a> ';
															}$out += ' <h1 class="title">订单完成</h1> </header> ';
												}$out += ' <div class="page-content new_finishorder"> ';if (data.errorCode && data.errorCode != '') {
															$out += ' <div class="error-info"> <div class="error-message"> ';if (data.errorCode == 'SYS_ERROR') {
																		$out += ' ';if (data.loginFlag) {
																					$out += ' <p>抱歉，网络繁忙，请直接打开酒店订单查看详情。</p> <a href="javascript:void(0);" id="hotelOrderListBtn" class="first">酒店订单 </a> ';
																		} else {
																					$out += ' <p>抱歉，网络繁忙，请稍后再试。</p> <a href="javascript:void(0);" id="bookAgainBtn" class="first">重新预订 </a> ';
																		}$out += ' ';
															} else if (data.errorCode == 'CACHE_EXPIRED') {
																		$out += ' ';if (data.loginFlag) {
																					$out += ' <p>抱歉，网络繁忙，请直接打开酒店订单查看详情。</p> <a href="javascript:void(0);" id="hotelOrderListBtn" class="first">酒店订单 </a> ';
																		} else {
																					$out += ' <p>非常抱歉，您的信息已过期。如需查询订单，请拨打客服热线4009-333-333。</p> <a href="javascript:void(0);" id="bookAgainBtn" class="first">重新预订 </a> ';
																		}$out += ' ';
															} else if (data.errorCode == 'URL_PARAM_ERROR') {
																		$out += ' ';if (data.loginFlag) {
																					$out += ' <p>非常抱歉，您请求的参数有误，请重新预订或打开酒店订单查看详情。</p> <a href="javascript:void(0);" id="bookAgainBtn" class="first">重新预订 </a> <a id="hotelOrderListBtn" href="javascript:void(0);" class="second">酒店订单 </a> ';
																		} else {
																					$out += ' <p>非常抱歉，您请求的参数有误，请重新预订。</p> <a href="javascript:void(0);" id="bookAgainBtn" class="first">重新预订 </a> ';
																		}$out += ' ';
															}$out += ' <input type=\'hidden\' id=\'hotelOrderListUrl\' value="';$out += $escape(data.hotelOrderListUrl);$out += '"/> <input type=\'hidden\' id=\'hotelListUrl\' value="';$out += $escape(data.hotelListUrl);$out += '"/> </div> </div> ';
												} else {
															$out += ' <section class="comp-wrap"> <span class="t-shaft"></span> <a class="focuswx hide" href="https://d.elong.com/a/dtygz"> <p><span>关注艺龙旅行网服务号，获取最新订单状态</span><span>点此关注</span></p> </a> <div class="sucess"> <span class="correct"></span> 订单提交成功！ ';if (data.vouchToNotVouch) {
																		$out += ' <div class="tip">恭喜您，此次订单无需提供担保金<i class="star"></i></div> ';
															}$out += ' </div> <div class="division">**********************************************************************************************************************************</div> <div class="progress"> <h2> 订单进度： </h2> <ul> <li class="on"><i></i>订单状态加载中...</li> </ul> </div> <div class="info"> <dl> <dt> 订&nbsp;单&nbsp;号&nbsp;： </dt> <dd>';$out += $escape(data.orderId);$out += '</dd> </dl> <dl> <dt> 酒店名称： </dt> <dd>';$out += $escape(data.hotelName);$out += '</dd> </dl> <dl> <dt> 房&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型： </dt> <dd> ';$out += $escape(data.roomName);$out += ' ';if (data.supplierName && data.supplierName != '艺龙') {
																		$out += ' <span style="color:#999;"> 代理 </span> ';
															}$out += ' </dd> </dl> <dl> <dt> 入离日期： </dt> <dd> ';$out += $escape(data.arriveDate);$out += ' - ';$out += $escape(data.leaveDate);$out += ' <span> 共 ';$out += $escape(data.daysBetween);$out += ' 晚 </span> </dd> </dl> </div> <div class="consume">  ';if (data.vouch) {
																		$out += ' <p class="price"> 到店支付: <span> ';$out += $escape(data.currency);$out += ' ';$out += $escape(data.sumPrice);$out += ' </span> </p> <p class="price"> 在线担保: <span> ￥';$out += $escape(data.vouchMoney);$out += ' </span>（入住后原路返回） </p> ';if (data.showCancelInsurance && data.insurancePrice > 0) {
																					$out += ' <p class="price"> 取消险: <span> ￥';$out += $escape(data.insurancePrice);$out += ' </span> </p> ';
																		}$out += ' ';
															} else {
																		$out += ' <p class="price"> 消费金额： <span> ';if (data.showCancelInsurance) {
																					$out += ' ';if (data.delieverFeeType == 1) {
																								$out += ' <span style="color:black"><span style="color:red">￥';$out += $escape(data.payWithCancelInsurance[0]);$out += ' </span>&nbsp;&nbsp;含<span style="color:red">￥';$out += $escape(data.payWithCancelInsurance[1]);$out += '</span>保险，<span style="color:red">￥';$out += $escape(data.payWithCancelInsurance[2]);$out += '</span>快递</span> ';
																					} else if (data.delieverFeeType == 2) {
																								$out += ' <span style="color:black"><span style="color:red">￥';$out += $escape(data.payWithCancelInsurance[0]);$out += ' </span>&nbsp;&nbsp;含<span style="color:red">￥';$out += $escape(data.payWithCancelInsurance[1]);$out += '</span>保险，快递费<span style="color:red">';$out += $escape(data.payWithCancelInsurance[2]);$out += '</span>积分</span> ';
																					} else {
																								$out += ' <span style="color:black"><span style="color:red">￥';$out += $escape(data.payWithCancelInsurance[0]);$out += '</span>&nbsp;&nbsp;含<span style="color:red">￥';$out += $escape(data.payWithCancelInsurance[1]);$out += '</span>保险</span> ';
																					}$out += ' ';
																		} else {
																					$out += ' ';if (data.payAmountValue) {
																								$out += ' ';if (data.delieverFeeType == 1) {
																											$out += ' <span style="color:black"><span style="color:red">￥';$out += $escape(data.payAmountValue[0]);$out += ' </span>&nbsp;&nbsp;含<span style="color:red">￥';$out += $escape(data.payAmountValue[1]);$out += '</span>快递</span> ';
																								} else if (data.delieverFeeType == 2) {
																											$out += ' <span style="color:black"><span style="color:red">￥';$out += $escape(data.payAmountValue[0]);$out += ' </span>&nbsp;&nbsp;含快递费<span style="color:red">';$out += $escape(data.payAmountValue[1]);$out += '</span>积分</span> ';
																								} else {
																											$out += ' <span style="color:red">￥';$out += $escape(data.payAmountValue[0]);$out += '</span> ';
																								}$out += ' ';
																					}$out += ' ';
																		}$out += ' </span> </p> ';
															}$out += '  ';if (data.customization.finishorderConsumeTip && data.gtBackMoney > 0) {
																		$out += ' <p class="tip">您已获得￥';$out += $escape(data.gtBackMoney);$out += $escape(data.customization.finishorderConsumeTip);$out += '红包返现，入住离店7个工作日内，';$out += $escape(data.customization.finishorderConsumeTip);$out += '将现金返入您的高铁管家账户</p> ';
															} else {
																		$out += ' ';if (data.totalCashBackMoney) {
																					$out += ' <p class="tip"> 您己获得￥';$out += $escape(data.totalCashBackMoney);$out += '冻结中返现 ';if (data.payAmountPrefixDesc) {
																								$out += ' ';$out += $escape(data.payAmountPrefixDesc);$out += ' ';
																					}$out += ' ';$out += $escape(data.payAmountSuffixDesc);$out += ' 。';$out += $escape(data.tipForCashBack);$out += ' </p> ';
																		}$out += ' ';
															}$out += ' </div> ';if (data.txlyElongTip) {
																		$out += ' <div class="consume"> <p class="tip"> ';$out += $escape(data.txlyElongTip);$out += ' </p> </div> ';
															}$out += ' ';if (data.cancelOrderInfo) {
																		$out += ' <div class="division">**********************************************************************************************************************************</div> <div class="change">';$out += $escape(data.cancelOrderInfo);$out += '</div> ';
															}$out += ' <span class="b-curve"></span> </section> <section class="comp-link"> ';if (data.loginFlag) {
																		$out += ' ';if (data.customization.checkOrder && data.customization.checkOrder == true) {
																					$out += ' ';
																		} else {
																					$out += ' <a href="javascript:void(0);" class="see"> <i class="see_bg"></i> 查看订单 </a> ';
																		}$out += ' ';
															}$out += ' ';if (!data.customization.detail2orderUrl) {
																		$out += ' <a href="javascript:void(0);" class="share" style="display:none;"> <i class="share_bg"></i> 分享订单 </a> <a href="javascript:void(0);" class="return" style="display:none;"> <i class="return_bg"></i> 申请返现 </a> <a href="javascript:void(0);" class="book tjclick" data-tj=\'{"cspot":"bookingagain"}\'> <i class="book_bg"></i> 再订一间 </a> ';
															}$out += ' </section> ';if (data.customization.gzElongPublicAccount) {
																		$out += ' <section class="wxpyq"> <div class="qrcode"> <img src="//m.elongstatic.com/static/webapp/hotel/2016/02/v1/img/elong_gzh.jpeg" alt=""/> </div> <p>长按二维码关注艺龙旅行公众号，更多旅行资讯及优惠信息及时推送，还可以通过联系人手机号查询管理订单哟~</p> </section> ';
															}$out += ' <input type=\'hidden\' id=\'orderDetailUrl\' value="';$out += $escape(data.orderDetailUrl);$out += '"/> <input type=\'hidden\' id=\'hotelDetailUrl\' value="';$out += $escape(data.hotelDetailUrl);$out += '"/> ';
												}$out += ' </div> ';return new String($out);
									});
						}();
			}];
});define("hotelfx@1.1.0/src/js/toast.js",document.currentScript.src,function(t,e){return[function(e,s,i){function n(){this.init()}var o=t("hotelfx@1.1.0/src/fw/core.js");n.prototype={timer:null,pageElem:null,template:'<div class="listcoast"><nav class="bar record record-text" style="display:none;"></nav></div>',toastElem:null,init:function(){this.wrapElem=$(this.template),this.toastElem=this.wrapElem.find(".record")},show:function(t){var e=this;return this.pageElem=o.getActiveLayer(),this.hide(),this.toastElem.html(t),this.wrapElem.appendTo(this.pageElem),this.toastElem.show(),this.toastElem.addClass("record-active"),e.toastElem.on(o.animationEnd,function(){e.hide()}),this},hide:function(){return this.toastElem.removeClass("record-active").hide()}},i.exports=new n}]});define("hotelfx@1.1.0/src/js/replaceLocalStorage.js",document.currentScript.src,function(e,t){return[function(e,t,o){o.exports=function(){var e={setItem:localStorage.setItem,getItem:localStorage.getItem,removeItem:localStorage.removeItem};return{replaceStorage:function(t){t?(localStorage.setItem=function(e,t){sessionStorage.setItem(e,t)},localStorage.getItem=function(e){return sessionStorage.getItem(e)},localStorage.removeItem=function(e){return sessionStorage.removeItem(e)}):(localStorage.setItem=e.setItem,localStorage.getItem=e.getItem,localStorage.removeItem=e.removeItem)}}}()}]});define("hotelfx@1.1.0/src/js/libs/zepto/dist/zepto.js",document.currentScript.src,function(t,e){return[function(t,e,n){var i=function(){function t(t){return null==t?String(t):H[U.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return P.call(t,function(t){return null!=t})}function c(t){return t.length>0?j.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in D?D[t]:D[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||M[u(t)]?e:e+"px"}function h(t){var e,n;return A[t]||(e=k.createElement(t),k.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),A[t]=n),A[t]}function p(t){return"children"in t?N.call(t.children):j.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function d(t,e,n){for(E in e)n&&(o(e[E])||Y(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),Y(e[E])&&!Y(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==w&&(t[E]=e[E])}function m(t,e){return null==e?j(t):j(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==w;if(e===w)return i?n.baseVal:n;i?n.baseVal=e:t.className=e}function b(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?j.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,i=t.childNodes.length;n<i;n++)x(t.childNodes[n],e)}var w,E,j,S,C,T,O=[],N=O.slice,P=O.filter,k=window.document,A={},D={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},$=/^\s*<(\w+|!)[^>]*>/,_=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,q=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],W=k.createElement("table"),V=k.createElement("tr"),Z={tr:k.createElement("tbody"),tbody:W,thead:W,tfoot:W,td:V,th:V,"*":k.createElement("div")},B=/complete|loaded|interactive/,I=/^[\w-]*$/,H={},U=H.toString,J={},X=k.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return J.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=X).appendChild(t),i=~J.qsa(r,e).indexOf(t),o&&X.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},T=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n})},J.fragment=function(t,e,n){var i,r,a;return _.test(t)&&(i=j(k.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(F,"<$1></$2>")),e===w&&(e=$.test(t)&&RegExp.$1),e in Z||(e="*"),a=Z[e],a.innerHTML=""+t,i=j.each(N.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=j(i),j.each(n,function(t,e){z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},J.Z=function(t,e){return t=t||[],t.__proto__=j.fn,t.selector=e||"",t},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,n){var i;if(!t)return J.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&$.test(t))i=J.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return j(n).find(t);i=J.qsa(k,t)}else{if(e(t))return j(k).ready(t);if(J.isZ(t))return t;if(Y(t))i=s(t);else if(r(t))i=[t],t=null;else if($.test(t))i=J.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return j(n).find(t);i=J.qsa(k,t)}}return J.Z(i,t)},j=function(t,e){return J.init(t,e)},j.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},J.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=I.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},j.contains=k.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},j.type=t,j.isFunction=e,j.isWindow=n,j.isArray=Y,j.isPlainObject=o,j.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},j.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},j.camelCase=C,j.trim=function(t){return null==t?"":String.prototype.trim.call(t)},j.uuid=0,j.support={},j.expr={},j.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&o.push(n);else for(r in t)null!=(n=e(t[r],r))&&o.push(n);return c(o)},j.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},j.grep=function(t,e){return P.call(t,e)},window.JSON&&(j.parseJSON=JSON.parse),j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){H["[object "+e+"]"]=e.toLowerCase()}),j.fn={forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,indexOf:O.indexOf,concat:O.concat,map:function(t){return j(j.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return j(N.apply(this,arguments))},ready:function(t){return B.test(k.readyState)&&k.body?t(j):k.addEventListener("DOMContentLoaded",function(){t(j)},!1),this},get:function(t){return t===w?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return e(t)?this.not(this.not(t)):j(P.call(this,function(e){return J.matches(e,t)}))},add:function(t,e){return j(T(this.concat(j(t,e))))},is:function(t){return this.length>0&&J.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?N.call(t):j(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return j(n)},has:function(t){return this.filter(function(){return r(t)?j.contains(this,t):j(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:j(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:j(t)},find:function(t){var e=this;return t?"object"==typeof t?j(t).filter(function(){var t=this;return O.some.call(e,function(e){return j.contains(e,t)})}):1==this.length?j(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)}):j()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=j(t));n&&!(r?r.indexOf(n)>=0:J.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return j(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=j.map(n,function(t){if((t=t.parentNode)&&!i(t)&&e.indexOf(t)<0)return e.push(t),t});return m(e,t)},parent:function(t){return m(T(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return P.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return j.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=j(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){j(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){j(this[0]).before(t=j(t));for(var e;(e=t.children()).length;)t=e.first();j(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=j(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){j(this).replaceWith(j(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=j(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return j(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return j(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;j(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(E in t)g(this,E,t[E]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(q,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?b(i):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?j(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=j(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof e)return r.style[C(e)]||i.getPropertyValue(e);if(Y(e)){var o={};return j.each(e,function(t,e){o[e]=r.style[C(e)]||i.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(E in e)e[E]||0===e[E]?a+=u(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(u(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(j(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&O.some.call(this,function(t){return this.test(y(t))},l(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=y(this);v(this,t,e,n).split(/\s+/g).forEach(function(t){j(this).hasClass(t)||S.push(t)},this),S.length&&y(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return y(this,"");S=y(this),v(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),y(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=j(this);v(this,t,n,y(this)).split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=L.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(j(t).css("margin-top"))||0,n.left-=parseFloat(j(t).css("margin-left"))||0,i.top+=parseFloat(j(e[0]).css("border-top-width"))||0,i.left+=parseFloat(j(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||k.body;t&&!L.test(t.nodeName)&&"static"==j(t).css("position");)t=t.offsetParent;return t})}},j.fn.detach=j.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});j.fn[t]=function(r){var o,a=this[0];return r===w?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=j(this),a.css(t,v(this,r,e,a[t]()))})}}),R.forEach(function(e,n){var i=n%2;j.fn[e]=function(){var e,r,o=j.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:J.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=j.contains(k.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return j(t).remove();r.insertBefore(t,e),s&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},j.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return j(t)[e](this),this}}),J.Z.prototype=j.fn,J.uniq=T,J.deserializeValue=b,j.zepto=J,j}();window.Zepto=i,void 0===window.$&&(window.$=i),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(v[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return x[t]||y&&b[t]||t}function s(n,r,s,c,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in x&&(s=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return r.fn.apply(this,arguments)}),r.del=h;var d=h||s;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,p))})}function c(t,i,r,s,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(S,function(t,i){var r=n[t];e[t]=function(){return this[i]=w,r&&r.apply(n,arguments)},e[i]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||!1===r||(r=i,i=n,n=f),(d(i)||!1===i)&&(r=i,i=f),!1===r&&(r=E),h.each(function(f,h){o&&(a=function(t){return c(h,t.type,r),r.apply(this,arguments)}),n&&(u=function(e){var i,o=t(e.target).closest(n,h).get(0);if(o&&o!==h)return i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(p.call(arguments,1)))}),s(h,e,r,i,n,u||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||!1===i||(i=n,n=f),!1===i&&(i=E),r.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){if(o=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),u(n)}}(i),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){if(t.global)return e(n||y,i,r)}function i(e){e.global&&0==t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;if(!1===e.beforeSend.call(i,t,e)||!1===n(e,i,"ajaxBeforeSend",[t,e]))return!1;n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context;i.success.call(o,t,"success",e),r&&r.resolveWith(o,[t,"success",e]),n(i,o,"ajaxSuccess",[e,i,t]),c("success",e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==j?"html":t==E?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(c.name,c.value):"array"==o||!i&&"object"==o?d(e,c,i,n):e.add(n,c)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",j="text/html",S=/^\s*$/,C=y.createElement("a");C.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++g,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,c){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],p,e,n):s(null,c||"error",p,e,n),window[u]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),!1===o(p,e)?(h("abort"),p):(window[u]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:j,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,r=t.extend({},e||{}),c=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===r[m]&&(r[m]=t.ajaxSettings[m]);i(r),r.crossDomain||(n=y.createElement("a"),n.href=r.url,n.href=n.href,r.crossDomain=C.protocol+"//"+C.host!=n.protocol+"//"+n.host),r.url||(r.url=window.location.toString()),h(r);var p=r.dataType,d=/\?.+=\?/.test(r.url);if(d&&(p="jsonp"),!1!==r.cache&&(e&&!0===e.cache||"script"!=p&&"jsonp"!=p)||(r.url=f(r.url,"_="+Date.now())),"jsonp"==p)return d||(r.url=f(r.url,r.jsonp?r.jsonp+"=?":!1===r.jsonp?"":"callback=?")),t.ajaxJSONP(r,c);var g,b=r.accepts[p],x={},w=function(t,e){x[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,j=r.xhr(),T=j.setRequestHeader;if(c&&c.promise(j),r.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",b||"*/*"),(b=r.mimeType||b)&&(b.indexOf(",")>-1&&(b=b.split(",",2)[0]),j.overrideMimeType&&j.overrideMimeType(b)),(r.contentType||!1!==r.contentType&&r.data&&"GET"!=r.type.toUpperCase())&&w("Content-Type",r.contentType||"application/x-www-form-urlencoded"),r.headers)for(v in r.headers)w(v,r.headers[v]);if(j.setRequestHeader=w,j.onreadystatechange=function(){if(4==j.readyState){j.onreadystatechange=u,clearTimeout(g);var e,n=!1;if(j.status>=200&&j.status<300||304==j.status||0==j.status&&"file:"==E){p=p||l(r.mimeType||j.getResponseHeader("content-type")),e=j.responseText;try{"script"==p?(0,eval)(e):"xml"==p?e=j.responseXML:"json"==p&&(e=S.test(e)?null:t.parseJSON(e))}catch(t){n=t}n?s(n,"parsererror",j,r,c):a(e,j,r,c)}else s(j.statusText||null,j.status?"error":"abort",j,r,c)}},!1===o(j,r))return j.abort(),s(null,"abort",j,r,c),j;if(r.xhrFields)for(v in r.xhrFields)j[v]=r.xhrFields[v];var O=!("async"in r)||r.async;j.open(r.type,r.url,O,r.username,r.password);for(v in x)T.apply(j,x[v]);return r.timeout>0&&(g=setTimeout(function(){j.onreadystatechange=u,j.abort(),s(null,"timeout",j,r,c)},r.timeout)),j.send(r.data?r.data:null),j},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=p(e,n,i),c=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(s),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},d(i,e,n),i.join("&").replace(/%20/g,"+")}}(i),function(t){function e(t,e){var n=this.os={},i=this.browser={},r=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),o=t.match(/(Android);?[\s\/]+([\d.]+)?/),a=!!t.match(/\(Macintosh\; Intel /),s=t.match(/(iPad).*OS\s([\d_]+)/),c=t.match(/(iPod)(.*OS\s([\d_]+))?/),u=!s&&t.match(/(iPhone\sOS)\s([\d_]+)/),l=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),f=/Win\d{2}|Windows/.test(e),h=t.match(/Windows Phone ([\d.]+)/),p=l&&t.match(/TouchPad/),d=t.match(/Kindle\/([\d.]+)/),m=t.match(/Silk\/([\d._]+)/),v=t.match(/(BlackBerry).*Version\/([\d.]+)/),g=t.match(/(BB10).*Version\/([\d.]+)/),y=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),b=t.match(/PlayBook/),x=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),w=t.match(/Firefox\/([\d.]+)/),E=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),j=!x&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),S=j||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(i.webkit=!!r)&&(i.version=r[1]),o&&(n.android=!0,n.version=o[2]),u&&!c&&(n.ios=n.iphone=!0,n.version=u[2].replace(/_/g,".")),s&&(n.ios=n.ipad=!0,n.version=s[2].replace(/_/g,".")),c&&(n.ios=n.ipod=!0,n.version=c[3]?c[3].replace(/_/g,"."):null),h&&(n.wp=!0,n.version=h[1]),l&&(n.webos=!0,n.version=l[2]),p&&(n.touchpad=!0),v&&(n.blackberry=!0,n.version=v[2]),g&&(n.bb10=!0,n.version=g[2]),y&&(n.rimtabletos=!0,n.version=y[2]),b&&(i.playbook=!0),d&&(n.kindle=!0,n.version=d[1]),m&&(i.silk=!0,i.version=m[1]),!m&&n.android&&t.match(/Kindle Fire/)&&(i.silk=!0),x&&(i.chrome=!0,i.version=x[1]),w&&(i.firefox=!0,i.version=w[1]),E&&(i.ie=!0,i.version=E[1]),S&&(a||n.ios||f)&&(i.safari=!0,n.ios||(i.version=S[1])),j&&(i.webview=!0),n.tablet=!!(s||b||o&&!t.match(/Mobile/)||w&&t.match(/Tablet/)||E&&!t.match(/Phone/)&&t.match(/Touch/)),n.phone=!(n.tablet||n.ipod||!(o||u||l||v||g||x&&t.match(/Android/)||x&&t.match(/CriOS\/([\d.]+)/)||w&&t.match(/Mobile/)||E&&t.match(/Touch/)))}e.call(t,navigator.userAgent,navigator.platform),t.__detect=e}(i),function(t){function e(e,i){var c=e[s],u=c&&r[c];if(void 0===i)return u||n(e);if(u){if(i in u)return u[i];var l=a(i);if(l in u)return u[l]}return o.call(t(e),i)}function n(e,n,o){var c=e[s]||(e[s]=++t.uuid),u=r[c]||(r[c]=i(e));return void 0!==n&&(u[a(n)]=o),u}function i(e){var n={};return t.each(e.attributes||c,function(e,i){0==i.name.indexOf("data-")&&(n[a(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var r={},o=t.fn.data,a=t.camelCase,s=t.expando="Zepto"+ +new Date,c=[];t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(e,r){t.each(i,function(t,e){n(r,t,e)})}):0 in this?e(this[0],i):void 0:this.each(function(){n(this,i,r)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[s],i=n&&r[n];i&&t.each(e||i,function(t){delete i[e?a(this):t]})})},["remove","empty"].forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=this.find("*");return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)}})}(i),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,a,s,c=[],u=!e.once&&[],l=function(t){for(n=e.memory&&t,i=!0,s=o||0,o=0,a=c.length,r=!0;c&&s<a;++s)if(!1===c[s].apply(t[0],t[1])&&e.stopOnFalse){n=!1;break}r=!1,c&&(u?u.length&&l(u.shift()):n?c.length=0:f.disable())},f={add:function(){if(c){var i=c.length,s=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||c.push(n):n&&n.length&&"string"!=typeof n&&s(n)})};s(arguments),r?a=c.length:n&&(o=i,l(n))}return this},remove:function(){return c&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,c,i))>-1;)c.splice(i,1),r&&(i<=a&&--a,i<=s&&--s)}),this},has:function(e){return!(!c||!(e?t.inArray(e,c)>-1:c.length))},empty:function(){return a=c.length=0,this},disable:function(){return c=u=n=void 0,this},disabled:function(){return!c},lock:function(){return u=void 0,n||f.disable(),this},locked:function(){return!u},fireWith:function(t,e){return!c||i&&!u||(e=e||[],e=[t,e.slice?e.slice():e],r?u.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!i}};return f}}(i),function(t){function e(n){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return a.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(i,function(i,r){var s=t.isFunction(n[i])&&n[i];a[r[1]](function(){var n=s&&s.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var i=this===o?e.promise():this,a=s?[n]:arguments;e[r[0]+"With"](i,a)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},a={};return t.each(i,function(t,e){var n=e[2],s=e[3];o[e[1]]=n.add,s&&n.add(function(){r=s},i[1^t][2].disable,i[2][2].lock),a[e[0]]=function(){return a[e[0]+"With"](this===a?o:this,arguments),this},a[e[0]+"With"]=n.fireWith}),o.promise(a),n&&n.call(a,a),a}var n=Array.prototype.slice;t.when=function(i){var r,o,a,s=n.call(arguments),c=s.length,u=0,l=1!==c||i&&t.isFunction(i.promise)?c:0,f=1===l?i:e(),h=function(t,e,i){return function(o){e[t]=this,i[t]=arguments.length>1?n.call(arguments):o,i===r?f.notifyWith(e,i):--l||f.resolveWith(e,i)}};if(c>1)for(r=new Array(c),o=new Array(c),a=new Array(c);u<c;++u)s[u]&&t.isFunction(s[u].promise)?s[u].promise().done(h(u,a,s)).fail(f.reject).progress(h(u,o,r)):--l;return l||f.resolveWith(a,s),f.promise()},t.Deferred=e}(i),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){if(t.forEach)return t.forEach(r);i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(i),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=s.exec(t);if(r&&r[2]in a&&(n=a[r[2]],i=r[3],t=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return e(t,n,i)}var i=t.zepto,r=i.qsa,o=i.matches,a=t.expr[":"]={visible:function(){if(e(this))return this},hidden:function(){if(!e(this))return this},selected:function(){if(this.selected)return this},checked:function(){if(this.checked)return this},parent:function(){return this.parentNode},first:function(t){if(0===t)return this},last:function(t,e){if(t===e.length-1)return this},eq:function(t,e,n){if(t===n)return this},contains:function(e,n,i){if(t(this).text().indexOf(i)>-1)return this},has:function(t,e,n){if(i.qsa(this,n).length)return this}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),c=/^\s*>/,u="Zepto"+ +new Date;i.qsa=function(e,o){return n(o,function(n,a,s){try{var l;!n&&a?n="*":c.test(n)&&(l=t(e).addClass(u),n="."+u+" "+n);var f=r(e,n)}catch(t){throw console.error("error performing selector: %o",o),t}finally{l&&l.removeClass(u)}return a?i.uniq(t.map(f,function(t,e){return a.call(t,e,f,s)})):f})},i.matches=function(t,e){return n(e,function(e,n,i){return(!e||o(t,e))&&(!n||n.call(t,null,i)===t)})}}(i)}]});define("hotelfx@1.1.0/src/js/dateextend.js",document.currentScript.src,function(t,e){return[function(t,e,r){r.exports=function(){$.extend(Date.prototype,{format:function(t){t=t||"yyyy-MM-dd";var e=this.toArray(),r={"M+":e[1]+1,"d+":e[2],"h+":e[3],"m+":e[4],"s+":e[5],"q+":Math.floor((e[1]+3)/3),S:e[6]};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e[0]+"").substr(4-RegExp.$1.length)));for(var n in r)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[n]:("00"+r[n]).substr((""+r[n]).length)));return t},isLeapYear:function(){var t=this.getFullYear();return 0==t%4&&(t%100!=0||t%400==0)},daysInMonth:function(){return[31,0,31,30,31,30,31,31,30,31,30,31][this.getMonth()]||(this.isLeapYear()?29:28)},dayOfYear:function(){return Math.ceil((this.getTime()-new Date(this.getFullYear(),0,1).getTime())/Date.MSINDAY)},add:function(t,e){if(1==e||2==e){var r=new Date(this);return 1==e?r.setYear(r.getFullYear()+t):r.setMonth(r.getMonth()+t),r}return new Date(this.getTime()+[1,0,0,Date.MSINDAY,Date.MSINHOUR,Date.MSINMINUTE,Date.MSINSECOND,1][e||7]*t)},date:function(t){for(var e=this.toArray(),r=t||3;r<7;r++)e[r]=2==r?1:0;return new Date(e[0],e[1],e[2],e[3],e[4],e[5],e[6])},toArray:function(){return[this.getFullYear(),this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds()]},equal:function(t,e){if(typeof this!=typeof t)return!1;var r=this.toArray();t=t.toArray();for(var n=0;n<(e||7);n++)if(r[n]!=t[n])return!1;return!0},diff:function(t,e){if(1==e||2==e){var r=this.getFullYear()-t.getFullYear();return 2==e?12*r+this.getMonth()-t.getMonth():r}return e=[1,0,0,Date.MSINDAY,Date.MSINHOUR,Date.MSINMINUTE,Date.MSINSECOND,1][e||7],this.getTime()/e-t.getTime()/e}}),$.extend(Date,{parseDate:function(t,e){switch(typeof t){case"object":case"number":t=new Date(t);break;case"string":t=new Date(isNaN(t)?t.trim().replace(/\-/g,"/"):parseInt(t))}return"Invalid Date"==t?e:t},MSINSECOND:1e3,MSINMINUTE:6e4,MSINHOUR:36e5,MSINDAY:864e5})}()}]});define("hotelfx@1.1.0/src/js/PluginManager.js",document.currentScript.src,function(e,n){return[function(e,n,i){i.exports=function(e){return e}(e(1))},function(n,i,t){t.exports=function(e){function n(i,t){for(var a in t)i[a]?"object"==typeof i[a]&&"object"==typeof t[a]&&n(i[a],t[a]):"object"==typeof t[a]?i[a]=e.clone(t[a]):i[a]=t[a]}!function(){if(location.href.indexOf("&!_PLU_")>0){var n=e.getActiveId();History.replaceState(n,document.title,location.href.split("&!_PLU_")[0]+location.hash)}}(),window.PluginManager={plugins:{},isHashChangeByPlugin:!1,lastUrl:location.href,maskNum:0,advancedMaskNum:0,showPluginNum:0,activePluginId:null,base:{id:null,option:{showLoad:!1,showTransition:!1,showType:"animation",transitionClass:""},init:function(){},Beforeinit:function(){e.isPad&&"animation"==this.option.showType?this.option.showLoad=!0:this.page&&this.page.hasClass("page-plugin")&&(e.isPad&&(this.option.showLoad=!0),this.option.showTransition=!0)},page:null,beforeShow:function(){return!1},lastShowArguments:null,show:function(){if(!this.beforeShow.apply(this,arguments)){var n=$("html"),i=this.page;if($("html").hasClass("android")?n.addClass("of-hid"):(e.getActiveLayer().find(".page-content").css("overflow","hidden!important"),PluginManager._removeOverflow(i.find(".page-content"))),e.getActiveLayer().addClass("fixed"),PluginManager.showPluginNum++,"animation"==this.option.showType)i.addClass("plugin-show"),e.moveWidget(i,"right","center");else{var t=this;e.transitionEnd&&this.option.showTransition?(i.addClass("page-transitioning"),i.off(e.transitionEnd).on(e.transitionEnd,function(){i.removeClass("page-transitioning"),i.addClass("plugin-show"),i.off(e.transitionEnd)})):i.addClass("plugin-show"),setTimeout(function(){i.addClass(t.option.transitionClass)},0)}if(this.option.showLoad&&PluginManager.showLoad(),this.afterShow.apply(this,arguments),this.lastShowArguments=arguments,location.href.indexOf("&!_PLU_"+this.id)<0){var a=e.getActiveId(),o=location.pathname+(""===location.search?"?_=1":location.search)+"&!_PLU_"+this.id+location.hash;PluginManager.isHashChangeByPlugin=!0,History.pushState(a,document.title,o)}PluginManager.activePluginId=this.id}},afterShow:function(){},beforeHide:function(){},hide:function(){if(!this.beforeHide()){var n=this.page;if("animation"==this.option.showType&&n.hasClass("page-on-center"))e.moveWidget(n,"center","right",function(){n.removeClass("plugin-show")});else{e.transitionEnd&&this.option.showTransition?(n.addClass("page-transitioning"),n.removeClass("plugin-show"),n.off(e.transitionEnd).on(e.transitionEnd,function(){n.removeClass("page-transitioning"),n.off(e.transitionEnd)})):n.removeClass("plugin-show"),n.removeClass(this.option.transitionClass)}PluginManager.showPluginNum>0&&PluginManager.showPluginNum--,0===PluginManager.showPluginNum&&e.getActiveLayer().removeClass("fixed"),this.option.showLoad&&PluginManager.removeLoad();var i=$("html");i.hasClass("android")?i.removeClass("of-hid"):PluginManager._removeOverflow(e.getActiveLayer().find(".page-content")),this.afterHide(),location.href.indexOf("&!_PLU_"+this.id)>0&&(PluginManager.isHashChangeByPlugin=!0,History.back()),PluginManager.activePluginId=null}},afterHide:function(){},destroy:function(){this.page&&this.page.detach(),e.getActiveLayer().removeClass("fixed")},restore:function(n){var i=e.get(n);this.page&&this.page.appendTo(i.main)}},add:function(i,t){var a=this.getCurrentPagePlugins();a||(a={},this.setCurrentPagePlugins(a));n(t,this.base),t.id=i,t.Beforeinit(),t.init(),t.destroy(),t.restore(e.getActiveId()),t.page&&t.page.addClass("plugin-inited"),"animation"==t.option.showType&&t.page.addClass("page-plugin"),a[i]=t},getCurrentPagePlugins:function(){return this.plugins[e.getActiveId()]},setCurrentPagePlugins:function(n){this.plugins[e.getActiveId()]=n},getItem:function(e){var n=this.getCurrentPagePlugins();return n?n[e]:null},remove:function(e){var n=this.getCurrentPagePlugins();n[e].destroy(),delete n[e]},removePluginBeforePageHide:function(e){var n=this.plugins[e];if(n)for(var i in n)n[i].destroy()},restorePluginBeforePageShow:function(e){var n=this.plugins[e];if(n)for(var i in n)n[i].restore(e)},showLoad:function(){e.getActiveLayer().children(".mask-layer").length?e.getActiveLayer().children(".mask-layer").show():$("<div class='mask-layer'></div>").appendTo(e.getActiveLayer()),this.maskNum++},removeLoad:function(){this.maskNum>0&&this.maskNum--,0===this.maskNum&&$(".mask-layer",e.getActiveLayer()).hide()},showAdvancedLoad:function(){e.getActiveLayer().children(".advanced-mask-layer").length?e.getActiveLayer().children(".advanced-mask-layer").show():$("<div class='advanced-mask-layer'></div>").appendTo(e.getActiveLayer())},removeAdvancedLoad:function(){$(".advanced-mask-layer",e.getActiveLayer()).hide()},_removeOverflow:function(e){e.each(function(){var e=$(this),n=e.attr("style");if("string"!=typeof n)return!0;for(var i=n.split(";"),t=0;t<i.length;t++){var a=i[t];if(a.indexOf("overflow")>=0){e.attr("style",n.replace(a+";",""));break}}})}};var i=function(e){PluginManager.restorePluginBeforePageShow(e.detail)},t=function(e){PluginManager.removePluginBeforePageHide(e.detail)};return $(document).on("beforehide",t),$(document).on("onshow",i),$("body").on("click",".mask-layer",function(){var e=PluginManager.activePluginId;e&&PluginManager.getItem(e).hide()}),History.Adapter.bind(window,"statechange",function(e){var n=location.href,i=PluginManager.lastUrl;if(PluginManager.lastUrl=location.href,PluginManager.isHashChangeByPlugin)return void(PluginManager.isHashChangeByPlugin=!1);var t=null,a=null;if(n.length>i.length){t=n.split("&!_PLU_");var o=t[t.length-1];if(o=o.substring(0,o.indexOf("#")),!(a=PluginManager.getItem(o)))return;a.lastShowArguments?a.show.apply(a,a.lastShowArguments):a.show()}else t=i.split("&!_PLU_"),(a=PluginManager.getItem(t[t.length-1].split("#")[0]))&&a.hide()}),PluginManager}(e("hotelfx@1.1.0/src/fw/core.js"))}]});define("hotelfx@1.1.0/entry/hotel/js/friendQaManager.js",document.currentScript.src,function(e,t){return[function(t,s,i){i.exports=function(e,t){var s,i,o,n=function(e,t,s){var i=null,o=null;return function(){var s,n=this,a=arguments;clearTimeout(o),i||(i=Date.now()),s=Date.now(),s-i>=100?(e.apply(n,a),i=null,clearTimeout(o)):o=setTimeout(function(){e.apply(n,a),i=null,clearTimeout(o)},t)}};return s=function(e){var t={TMPL:{controller:'<div class="adv_btn  help-btn corner-icon"> <p> <span class="message" style="display: none;">不知道怎么选？我帮你<i></i></span> <span class="helpyou bg"></span> </p> </div>'},defaultShowNum:4,limitNum:10,activeState:!1,hotelClickNum:0,cacheKey:{accessStatus:"quest.access"},hesitateText:"不知道怎么选？我帮你",messageClick:function(){}};this.opts=$.extend({},t,e)},s.prototype={constructor:s,init:function(){this.$dom=$(e.getActiveLayer()),this.$controller=$(this.opts.TMPL.controller).appendTo(this.$dom),this.$message=this.$controller.find(".message"),this.setAccessStatus(),this._initEvent()},setAccessStatus:function(){"yes"!==localStorage.getItem(this.opts.cacheKey.accessStatus)?(this.activeState=!0,this.showMessage(),localStorage.setItem(this.opts.cacheKey.accessStatus,"yes")):this.$message.html(this.opts.hesitateText+"<i></i>")},triggerMessage:function(){3===this.opts.hotelClickNum&&this.showMessage()},showMessage:function(){var e=this;this.opts.activeState||(this.$message.show(),setTimeout(function(){e.$message.hide()},5e3),this.opts.activeState=!0)},_initEvent:function(){var t=this,s=this.opts,i=$("html").hasClass("android")?$(document):this.$dom.children(".page-list"),o=e.get("h5_list");this.$content=i,this.$content.on("scroll",n(t._scroll.bind(t),100)),this.$controller.on("click",function(){t.$message.hide(),s.messageClick.call(t)}),o.on("onshow",function(){t.triggerMessage()})},_scroll:function(){if(!this.activeState){var e=$(".search-field").height(),t=$(".hotel-item").height(),s=this.$content.scrollTop()||window.scrollY;this.opts.defaultShowNum=Math.ceil((window.innerHeight-e)/t),s>t*(this.opts.limitNum-this.opts.defaultShowNum)&&this.showMessage()}}},i=function(e){var t={TMPL:{newMaskLayer:'<div class="mask_send " style="display: none";> <div class="arrow"></div> <div class="info"></div> <div class="image"></div> </div>',modal:'<div class="mask_choice" style="display: none;"></div>',modalOld:'<div class="mask-layer-new" style="display: none;"> <div class="share_fre_rec"> <div class="recond_c"></div> <div class="bottom_c"></div> </div> </div>',share:'<div class="topshare">点右上角“发送给朋友”</div>',controller:'<div class="adv_btn corner-icon"> <p>  <span class="response">好友要求</span> </p> </div>',friendWant:'<div class="friends_request_mask " style="display:none"> <div class="friends_request_layer tickling_con"> <h1 class="bdb"><span>来自${userName}的消息</span><img src="${userImg}"></h1> <div class="news bdb"> <div class="hope_dialogue"> <p class="titletips">我希望入住的酒店</p> <div class="hot_news"> <p>${indate}至${outdate}</p> <p>${cityName} &nbsp; ${placeName}</p> <p>${pricetext}</p> </div> </div> <p class="hope"> ${content} </p> </div> </div> </div>'},cacheKey:{modal:"answer.modal",message:"answer.message"},msg:"好友相信你的眼光，随便挑吧~"};this.opts=$.extend(!0,{},t,e)},i.prototype={constructor:i,init:function(){var s=JSON.parse(sessionStorage.getItem(this.opts.cacheKey.message)||"{}");this.$dom=$(e.getActiveLayer()),this.$modal=$(this.opts.TMPL.modal).appendTo(this.$dom),this.$share=$(this.opts.TMPL.share).appendTo(this.$dom),this.$controller=$(this.opts.TMPL.controller).appendTo(this.$dom),this.$friendWant=$(this.opts.TMPL.friendWant.replace("${userImg}",s.userimg||t.resourcePath.defaultAvatar).replace("${userName}",s.username||"好友").replace("${indate}",new Date(s.indate).format("MM月dd日")).replace("${outdate}",new Date(s.outdate).format("MM月dd日")).replace("${cityName}",s.cityname||"").replace("${placeName}",s.placename||"").replace("${pricetext}",s.pricetext||"").replace("${content}",s.content||"没有具体要求")).appendTo(this.$dom),this.$newmasklayer=$(this.opts.TMPL.newMaskLayer),this.$message=this.$controller.find(".message"),s.content&&$(".friends_request_mask .hope").addClass("long"),"h5_detail"==e.getActiveId()&&(this.$newmasklayer.appendTo(this.$dom),sessionStorage.getItem("newmasklayer")?this.$newmasklayer.hide():this.$newmasklayer.show()),this._initEvent()},modalShow:function(){"yes"!==sessionStorage.getItem(this.opts.cacheKey.modal)&&($("html, .page-content").addClass("weixin-overflowhidden"),this.$modal.show())},modalHide:function(){this.$modal.hide(),sessionStorage.setItem(this.opts.cacheKey.modal,"yes")},_initEvent:function(){var e=this,t=this.opts;this.$controller.on("click",function(){e.$friendWant.show(),t.messageClick.call(e)}),this.$modal.on("click",function(){$("html, .page-content").removeClass("weixin-overflowhidden"),e.modalHide()}),this.$newmasklayer.on("click",function(){e.$newmasklayer.hide(),sessionStorage.setItem("newmasklayer","yes")}),e.$friendWant.on("click",function(){e.$friendWant.hide()})}},o=function(e){var t={TMPL:{controller:'<div class="list-top corner-icon"><span class="backphone bg"></span></div>'},cacheKey:{service:"qaManager.service",serviceLink:"qaManager.service.link"},messageClick:function(){},initPageBefore:function(){}};this.opts=$.extend({},t,e)},o.prototype={constructor:o,ofs:["1301052","1301053","1301054","1301055","1301056","1301057","1301058","1301059","1301060","1301061"],init:function(){this.$dom=$(e.getActiveLayer()),this.getOf()},_initPage:function(){this.opts.initPageBefore.call(this),this.$controller=$(this.opts.TMPL.controller).appendTo(this.$dom),e.addtj(this.$controller,{cspot:"returnask"}),this._initEvent()},getOf:function(){var e=this;-1!=document.referrer.indexOf("my/chat/bookhotel")&&!this.getStorage()&&TJObject&&"1000000"!==TJObject.of?this.ofs.indexOf(TJObject.of)>=0&&(e.setStorage(),e._initPage()):"yes"===this.getStorage()&&e._initPage()},setStorage:function(){sessionStorage.setItem(this.opts.cacheKey.service,"yes")},getStorage:function(){return sessionStorage.getItem(this.opts.cacheKey.service)},_initEvent:function(){var e=this,t=sessionStorage.getItem(e.opts.cacheKey.serviceLink);t||(sessionStorage.setItem(e.opts.cacheKey.serviceLink,document.referrer),t=document.referrer),this.$controller.on("click",function(){e.opts.messageClick.call(e),window.location.href=t})}},{Questioner:s,Answer:i,ServiceBack:o}}(e("hotelfx@1.1.0/src/fw/core.js"),e("hotelfx@1.1.0/entry/hotel/js/configs.js"))}]});define("hotelfx@1.1.0/src/js/tjSendLog.js",document.currentScript.src,function(t,e){return[function(t,e,n){n.exports=function(t,e){function n(){}var o;return n.prototype={constructor:n,init:function(n,i){if(!n||"object"==typeof n)return void console.error("缺少pageId或格式不正确!");var i=i||{},r=e.get(n);o=slark.clone(window.TJObject),o=$.extend({},o,r,i),o.biz="h5_hotel",o.id=slark.guid(),o.bns=2,o.chid="wxqbh5",function(t){window[n]||(window["TJ_"+n]=t)}(o);var c=this._getCookie("cityid");c&&(o.hcty=c),o.et="show",o.st=Date.now(),o.pt&&t.setData(o),this._bindEvent(n,o)},_tjClickEvent:function(e,n){var o=$(this).data("tj"),i=n;i.et="click","string"==typeof o&&(o=JSON.parse(o)),o=o||{};for(var r in o){var c=o[r];i[r]="string"==typeof c?c:JSON.stringify(c)}i.st=Date.now(),i.pt&&t.setData(i)},_bindEvent:function(t,e){var n=this;$("[data-blend-id="+t+"]").off("click",".tjclick").on("click",".tjclick",function(){n._tjClickEvent.call(this,t,e)})},_getCookie:function(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?decodeURIComponent(e[2]):""}},new n}(t(1),t(2))},function(t,e,n){!function(){if(!window.tjNew){Object.keys||(Object.keys=function(t){if(t!==Object(t))throw new TypeError("Object.keys called on a non-object");var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n});var t=navigator.userAgent.toLowerCase(),e="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,o=screen.width/document.body.clientWidth!=1&&screen.height/document.body.clientHeight!=1,i=o?screen.width/e:screen.width,r=o?screen.height/e:screen.height,c=i>=600&&r>=600,a=/ ew(\w+)\/([\d.-_]*)/.test(t)?1:0,s=(new Date).getTime(),d=function(){return a?1:t.match(/ micromessenger/)?4:2},h=function(){return(new Date).getTime()},u=function(t){"string"==typeof t&&(t=JSON.parse(t));for(var e="",n=0;n<t.length;n++)3===Object.keys(t[n]).length&&(e+=t[n].eid+"_"+t[n].vid+"_"+t[n].val+(n===t.length-1?"":"-"));return e},f=function(){return navigator.connection?navigator.connection.type:0},l=function(){var e={},n=t.match(/android(.*);(.*)build/i);return n?(e.os=n[1],e.md=n[2]):t.match(/iphone/)?(e.os="ios",e.md="iphone"):t.match(/ipad/)?(e.os="ios",e.md="ipad"):(e.os="unkown",e.md="unkown"),e},m=function(){var e=99;return t.match(/android/)?e=c?8:3:t.match(/iphone/)?e=1:t.match(/ipad/)?e=2:t.match(/macintosh/)?e=7:t.match(/windows/)&&(e=-1!==t.indexOf("Touch")?c?9:5:7),e},p=function(){return"//m.elongstatic.com/tj/t.gif?"}(),v={fetchStart:"p88",responseStart:"p94",domContentLoadedEventEnd:"drt",loadEventEnd:"olt"},w=function(t,e){var n={},o={};if(t&&t.timing){var i;for(i in t.timing)"number"==typeof t.timing[i]&&e<t.timing[i]&&(e=t.timing[i]);for(i in v)n[i]=t.timing[i]||e;for(var r in n){var c=v[r];c&&(o[c]=n[r])}}return o},g=function(){this.bns=2,this.fst=s,this.ct=d(),this.st=h(),document.cookie.match(/H5CookieId=([\w-]*)/)&&(this.cid=document.cookie.match(/H5CookieId=([\w-]*)/)[1]),this.rf="",this.bs=screen?screen.width+"*"+screen.height+"*"+(window.devicePixelRatio||1):"",this.md=l().md,this.os=l().os,this.nt=f(),this.dt=m(),this.execTime=0},j=function(t,e){var n=w(t,s+500);for(var o in e)e[o]&&"function"!=typeof e[o]&&(n[o]=e[o]);var i="";for(var r in n)i=i+"&"+r+"="+n[r];(new Image).src=p+i};g.prototype.__sendObj=function(t){var e=this,n=(new Date).getTime();n-s>=500||t&&t.timing&&t.timing.loadEventEnd?j(t,e):setTimeout(function(){j(t,e)},500-n+s)},window.tjmvtjscb=function(t){try{var e=JSON.parse(t);b.cid=e.publicAttris.deviceID}catch(t){}finally{b.__sendObj(window.performance)}},g.prototype.setData=function(t){for(var e in t)"ct"!==e&&(this[e]="mvt"===e||"mvt2"===e?u(t[e]):t[e]);this.execTime++;try{var n=parseInt(localStorage.getItem("tjmvtcin"));this.cin=n?++n:1,localStorage.setItem("tjmvtcin",this.cin)}catch(t){this.cin=this.execTime}var o=this;if(a){if("undefined"==typeof ElongApp)return void document.addEventListener("ElongAppReady",function(e){o.setData(t)});if("function"==typeof ElongApp.getPublicAttris)return void ElongApp.getPublicAttris("window.tjmvtjscb")}this.__sendObj(window.performance)};var b=new g,y=function(){this.cacheTj={};try{sessionStorage.testtest="1","1"==sessionStorage.testtest&&(sessionStorage.removeItem("testtest"),this.cacheTj=sessionStorage)}catch(t){this.cacheTj={}}};window.tjNew=new y,y.prototype.setData=function(t){var e="";for(var n in t)e=e+"&"+n+"="+t[n];this.cacheTj[t.mvt2]||(this.cacheTj[t.mvt2]=!0,(new Image).src=p+e)};!function(t){/complete|loaded|interactive/.test(document.readyState)&&document.body?t():document.addEventListener("DOMContentLoaded",t,!1)}(function(){if("object"==typeof TJObject&&TJObject.mvt2){var t={cid:TJObject.cid,sid:TJObject.sid,ecrd:TJObject.ecrd,st:TJObject.st,mvt2:u(TJObject.mvt2),et:"mvttest"};if(tjNew.setData(t),window.$&&$.ajax){var e=$.ajax,n=function(t){var n=t.complete;return t.complete=function(t){return n&&n.apply(void 0,arguments),!0},e(t)};$.ajax=n}}}),"function"==typeof define&&define.amd?n.exports=function(){return b}():void 0!==n&&n.exports&&(n.exports=b),window.tjMVT=b}}()},function(t,e,n){n.exports={get:function(t){var t=t||slark.getActiveId(),e=slark.parseUrl(),n=e.params,o={h5_wxqbindex:function(){return{pt:"h5-hotel-wxqbindex",ch:"wxhome"}},h5_list:function(){return{pt:"h5-hotel-list"}},h5_detail:function(){return{pt:"h5-hotel-detail",hcty:slark.getCookie("cityid")||"",ocit:slark.getCookie("indate")&&slark.getCookie("outdate")?new Date(slark.getCookie("outdate")).diff(new Date(slark.getCookie("indate")),3):"1"}},photo:function(){return{pt:"h5-hotel-photo"}},h5_createorder:function(){return{pt:"h5-hotel-createorder"}},comments:function(){return{pt:"h5-hotel-review"}},ranklist:function(){return{pt:"h5-hotel-rank"}},nearbyHotel:function(){return{pt:"h5-hotel-nearbyhotel"}},h5_finishorder:function(){return{pt:"h5-hotel-finishorder"}},orderfeedback:function(){return{pt:"h5-hotel-orderfeedback"}},createComment:function(){return{pt:"h5-hotel-createcomments"}},h5_comment_prize:function(){return{pt:"h5-hotel-canCommentHotel"}},orderlist:function(){return{pt:"h5-hotel-orderlist"}},orderdetail:function(){return{pt:"h5-hotel-orderdetai"}},h5_createresaleorder:function(){return{pt:"h5-hotel-createresaleorder"}},h5_resaleorderlist:function(){return{pt:"h5-hotel-resaleorderlist"}}},i=o[t],r=i?i():{};return r.pturl=encodeURIComponent(window.location.href),n.if&&(r.if=n.if),n.ch&&(r.ch=n.ch),n.of&&(r.of=n.of),r}}}]});define("hotelfx@1.1.0/src/js/common.js",document.currentScript.src,function(e,t){return[function(t,n,o){o.exports=function(e,t){t.attach(document.body);var n=$("html");!function(){var e=navigator.userAgent,t=e.match(/(Android);?[\s\/]+([\d.]+)?/),o=!e.match(/Mobile/),i=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),a=!i&&e.match(/(iPhone\sOS)\s([\d_]+)/);window.scrollTo(0,1),t&&n.addClass("android"+(o?" pad":"")),(i||a||r)&&n.addClass("ios"),(a||r)&&n.addClass("iphone"),i&&n.addClass("ipad");var c=!1,s="undefined"!=typeof devicePixelRatio&&devicePixelRatio>1?devicePixelRatio:1,l=screen.width/document.body.clientWidth!=1&&screen.height/document.body.clientHeight!=1,u=l?screen.width/s:screen.width,d=l?screen.height/s:screen.height;(c=u>=600&&d>=600)&&n.addClass("pad")}(),n.hasClass("android")&&$(".pages").addClass("page-fade"),e.isLowDevice&&n.addClass("low-device"),e.isPad=n.hasClass("pad")||n.hasClass("ipad")}(e("hotelfx@1.1.0/src/fw/core.js"),t(1),t(2))},function(e,t,n){!function(){function e(t,n){var i;if(n=n||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=n.touchBoundary||10,this.layer=t,this.tapDelay=n.tapDelay||200,this.tapTimeout=n.tapTimeout||700,!e.notNeeded(t)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,c=0,s=r.length;c<s;c++)a[r[c]]=function(e,t){return function(){return e.apply(t,arguments)}}(a[r[c]],a);o&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,o){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,o):i.call(t,e,n,o)},t.addEventListener=function(e,n,o){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),o):i.call(t,e,n,o)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(e){i(e)},!1),t.onclick=null)}}var t=navigator.userAgent.indexOf("Windows Phone")>=0,o=navigator.userAgent.indexOf("Android")>0&&!t,i=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,r=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent),a=i&&/OS [6-7]_\d/.test(navigator.userAgent),c=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(i&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!o;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},e.prototype.sendClick=function(e,t){var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},e.prototype.determineEventType=function(e){return o&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(e){var t;i&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},e.prototype.updateScrollParent=function(e){var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},e.prototype.onTouchStart=function(e){var t,n,o;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],i){if(o=window.getSelection(),o.rangeCount&&!o.isCollapsed)return!0;if(!r){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},e.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(e){var t,n,c,s,l,u=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,a&&(l=e.changedTouches[0],u=document.elementFromPoint(l.pageX-window.pageXOffset,l.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(c=u.tagName.toLowerCase())){if(t=this.findControl(u)){if(this.focus(u),o)return!1;u=t}}else if(this.needsFocus(u))return e.timeStamp-n>100||i&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,e),i&&"select"===c||(this.targetElement=null,e.preventDefault()),!1);return!(!i||r||!(s=u.fastClickScrollParent)||s.fastClickLastScrollTop===s.scrollTop)||(this.needsClick(u)||(e.preventDefault(),this.sendClick(u,e)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},e.prototype.destroy=function(){var e=this.layer;o&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(e){var t,n,i;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!o)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(c&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(t=document.querySelector("meta[name=viewport]"))&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===e.style.touchAction||"manipulation"===e.style.touchAction))},e.attach=function(t,n){return new e(t,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?n.exports=function(){return e}():void 0!==n&&n.exports?n.exports=e:window.FastClick=e}()},function(e,t,n){n.exports=function(){function e(){var e={},t={};return e.setItem=function(e,n){t[e]=n},e.getItem=function(e){return t[e]},e.removeItem=function(e){delete t[e]},e.clear=function(){t={}},e}try{localStorage.setItem("localStorage",1),localStorage.removeItem("localStorage")}catch(t){window.localStorage||Object.defineProperty(window,"localStorage",{value:{},writable:!0,configurable:!0,enumerable:!0}),window.sessionStorage||Object.defineProperty(window,"sessionStorage",{value:{},writable:!0,configurable:!0,enumerable:!0}),localStorage.__proto__=e(),sessionStorage.__proto__=e()}}()}]});define("hotelfx@1.1.0/lib/zepto.scrollfocus.js",document.currentScript.src,function(t,e){return[function(e,o,r){r.exports=function(){if(!navigator.userAgent.match(/android/i))return!1;var t,e=$("body").height();window.addEventListener("resize",function(){if(!(t&&Date.now()-t<1e3)){t=Date.now();var o=$("body").height();e<o?e=o:e>o&&($("input[type^='te']:focus").scrollFocus(),$("input[type='password']:focus").scrollFocus())}},!1);var o=function(t,e){try{return getComputedStyle(t).getPropertyValue(e)}catch(t){}return null};$.extend($.fn,{scrollFocus:function(){var t=this[0];if(t){for(var e=0,r=document.body;(t=t.parentNode)&&!t.nodeName.toLowerCase().match(/(html)|(body)/);)t.offsetTop&&"relative"===o(t,"position")&&(e+=t.offsetTop||0),"auto"===o(t,"overflow-y")&&(r=t);r.scrollTop=e-$(window).height()+114;try{t.select()}catch(t){}return this}}})}(t("hotelfx@1.1.0/src/js/libs/zepto/dist/zepto.js"))}]});define("hotelfx@1.1.0/src/js/j.js",document.currentScript.src,function(t,e){return[function(t,e,n){!function(){function t(t){var e="//xlog.elong.com/t.gif?",t=t||f(),n={rf:document.referrer,bs:screen?screen.width+"*"+screen.height+"*"+o:"",app_id:"wxqbh5",platform:"",pvid:t},i=[];for(var r in n)i.push(r+"="+n[r]);return e+=i.join("&")}function e(t){var e={err:t.err||t.msg||"",msg:"",url:location.href,line:0,col:0,tar:""},n=Object.assign({},e,t),i="";n.err&&n.err.stack?(i=n.err.stack.substr(0,600),-1!==i.indexOf("@")&&(i=n.msg+" \n\r"+i)):n.err||n.msg?i="ThrowError: "+JSON.stringify(n.err||n.msg)+"\n\r  at "+n.url+":"+n.line+":"+n.col:n.tar&&(n.msg="http request error",i="HttpError at "+(n.tar.baseURI||location.href)+" outerHTML:"+n.tar.outerHTML),y(null,Object.assign(x,{type:"jserror",message:n.msg,errorTime:(new Date).getTime(),stack:i,filename:n.url,position:n.line+","+n.col}))}var i,r=navigator.userAgent.toLowerCase(),o="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,a=screen.width/document.body.clientWidth!=1&&screen.height/document.body.clientHeight!=1,s=a?screen.width/o:screen.width,c=a?screen.height/o:screen.height,d=s>=600&&c>=600,h=function(){try{var t=localStorage.getItem("__tjcount")||0;return localStorage.setItem("__tjcount",1*t+1),t}catch(t){return 0}},m=/ ew(\w+)\/([\d.-_]*)/.test(r);i=m?1:location.host.match(/^m[\w\.]*\.elong\.com/)?2:4;var u=99;r.match(/android/)?u=d?8:3:r.match(/iphone/)?u=1:r.match(/ipad/)?u=2:r.match(/macintosh/)?u=7:r.match(/windows/)&&(u=-1!==r.indexOf("Touch")?d?9:5:7);var p=(new Date).getTime(),f=function(){var t=+new Date;return"xxxyxxxy".replace(/[xy]/g,function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?n:7&n|8).toString(16)})};"function"!=typeof Object.assign&&(Object.assign=function(t){if(t){for(var e=1,n=arguments.length;e<n;e++){var i=arguments[e];if(i)for(var r in i)i.hasOwnProperty(r)&&(t[r]=i[r])}return t}return{}});var g=t(),l={start:"p80",fetchStart:"p88",domainLookupStart:"p89",domainLookupEnd:"p90",connectStart:"p91",connectEnd:"p92",requestStart:"p93",responseStart:"p94",responseEnd:"p95",domLoading:"p96",domContentLoadedEventEnd:"p97",domComplete:"p98",loadEventEnd:"p99"},v=function(t,e){var n={},i={};if(t&&t.timing){for(var r in t.timing)"number"==typeof t.timing[r]&&e<t.timing[r]&&(e=t.timing[r]);n.start=t.timing.navigationStart||t.timing.fetchStart||e;for(var r in l)"start"!==r&&(n[r]=t.timing[r]||e,n[r]=n[r]-n.start);for(var o in n){var a=l[o];a&&(i[a]=n[o])}}return i},w=function(){this.vt=i,this.appt=u,this.type="timing",this.sid="",this.cid="",document.cookie.match(/SessionGuid=([\w-]*)/)&&(this.sid=document.cookie.match(/SessionGuid=([\w-]*)/)[1]),document.cookie.match(/CookieGuid=([\w-]*)/)&&(this.cid=document.cookie.match(/CookieGuid=([\w-]*)/)[1]),this.getParam(),this.ch="webapp",this.pt="tjonly",this.p1="",this.url=encodeURIComponent(location.href),this.par=encodeURIComponent(location.search.replace(/^\?/,""))},y=function(t,e){var n=v(t,p+500);for(var i in e)e[i]&&"function"!=typeof e[i]&&(n[i]=e[i]);var r="";n.count=h(),n._nd=+new Date;for(var o in n)r=r+"&"+o+"="+n[o];(new Image).src=g+r};w.prototype.getParam=function(){var t=this;if(navigator.connection&&(this.nt=navigator.connection.type),"micromessenger"==r.match(/micromessenger/i))try{r.match(/nettype\/[a-zA-Z0-9]+\s/)&&(this.nt=r.match(/nettype\/[a-zA-Z0-9]+\s/)[0],this.nt=this.nt.substring(8,this.nt.length-1)),wx&&wx.ready(function(){wx.checkJsApi({jsApiList:["getNetworkType"],success:function(e){wx.getNetworkType({success:function(e){t.nt=e.networkType},fail:function(t){console.log(JSON.stringify(t))}})},fail:function(t){console.log("请确认getNetworkType开启权限")}})}),this.kernel=window.__wxjs_is_wkwebview?"WKWebview":"UIWebview"}catch(t){console.log(JSON.stringify(t))}},w.prototype.__sendObj=function(t,e){try{var n=Object.assign({},this,e),i=(new Date).getTime();i-p>=500||t&&t.timing&&t.timing.loadEventEnd?y(t,n):setTimeout(function(){y(t,n)},500-i+p)}catch(t){console.error(t)}},w.prototype.setChannel=function(t,e,n,i,r,o){if(!t||!e)return void console.error("必传字段ch、pt缺失");this.ch=t,this.pt=e,"https"===location.protocol&&(this.pt+="s"),n&&(this.p1=n),i&&(this.cardno=i),r&&(this.aid=r),o&&(this.aname=o),this.__sendObj(window.performance)},w.prototype.send=function(t,e){"__firstTime__"==t?this.setFirstDataTime(+new Date,e):this.__sendObj(null,{key:t,data:JSON.stringify(e||{}),type:"diy"})},w.prototype.setFirstDataTime=function(t,e){var n={};if(t&&(n.end=t),e instanceof Array)try{e=e.map(function(t,e){return t.url=encodeURIComponent(t.url),t}),n.ajaxs=JSON.stringify(e)}catch(t){console.log(t)}n.type="firstData",this.__sendObj(null,n)};var x=new w;window.addEventListener("error",function(t){e({err:t.error,msg:t.message,url:t.filename,line:t.lineno,col:t.colno,tar:t.target})},!0);var _=function(t,e){var n={};n.timing={};for(var i in l)n.timing[i]=t;return n.timing.domContentLoadedEventEnd=e,n.timing.loadEventEnd=e,n};document.addEventListener("onrender",function(e){if("string"==typeof e.data1&&-1!==e.data1.indexOf(",")){var n=e.data1.split(","),i=_(n[1],n[0]);g=t(f()),x.pt=e.detail,x.p98=n[0],x.__sendObj(i)}}),"function"==typeof define&&define.amd?n.exports=function(){return x}():void 0!==n&&n.exports&&(n.exports.tjClient=x),window.tjClient=x}()}]});define("es6-promise@4/dist/es6-promise.js",document.currentScript.src,function(t,e){return[function(e,n,r){!function(t,e){"object"==typeof n&&void 0!==r?r.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){function e(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function n(t){return"function"==typeof t}function r(t){B=t}function o(t){G=t}function i(){return void 0!==z?function(){z(u)}:s()}function s(){var t=setTimeout;return function(){return t(u,1)}}function u(){for(var t=0;t<q;t+=2){(0,V[t])(V[t+1]),V[t]=void 0,V[t+1]=void 0}q=0}function c(t,e){var n=arguments,r=this,o=new this.constructor(f);void 0===o[Z]&&C(o);var i=r._state;return i?function(){var t=n[i-1];G(function(){return T(i,o,t,r._result)})}():A(r,o,t,e),o}function a(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(f);return m(n,t),n}function f(){}function l(){return new TypeError("You cannot resolve a promise with itself")}function h(){return new TypeError("A promises callback cannot return that same promise.")}function p(t){try{return t.then}catch(t){return nt.error=t,nt}}function v(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function d(t,e,n){G(function(t){var r=!1,o=v(n,e,function(n){r||(r=!0,e!==n?m(t,n):w(t,n))},function(e){r||(r=!0,g(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,g(t,o))},t)}function _(t,e){e._state===tt?w(t,e._result):e._state===et?g(t,e._result):A(e,void 0,function(e){return m(t,e)},function(e){return g(t,e)})}function y(t,e,r){e.constructor===t.constructor&&r===c&&e.constructor.resolve===a?_(t,e):r===nt?(g(t,nt.error),nt.error=null):void 0===r?w(t,e):n(r)?d(t,e,r):w(t,e)}function m(t,n){t===n?g(t,l()):e(n)?y(t,n,p(n)):w(t,n)}function b(t){t._onerror&&t._onerror(t._result),S(t)}function w(t,e){t._state===$&&(t._result=e,t._state=tt,0!==t._subscribers.length&&G(S,t))}function g(t,e){t._state===$&&(t._state=et,t._result=e,G(b,t))}function A(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+tt]=n,o[i+et]=r,0===i&&t._state&&G(S,t)}function S(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function j(){this.error=null}function E(t,e){try{return t(e)}catch(t){return rt.error=t,rt}}function T(t,e,r,o){var i=n(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=E(r,o),s===rt?(a=!0,u=s.error,s.error=null):c=!0,e===s)return void g(e,h())}else s=o,c=!0;e._state!==$||(i&&c?m(e,s):a?g(e,u):t===tt?w(e,s):t===et&&g(e,s))}function M(t,e){try{e(function(e){m(t,e)},function(e){g(t,e)})}catch(e){g(t,e)}}function P(){return ot++}function C(t){t[Z]=ot++,t._state=void 0,t._result=void 0,t._subscribers=[]}function O(t,e){this._instanceConstructor=t,this.promise=new t(f),this.promise[Z]||C(this.promise),W(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&w(this.promise,this._result))):g(this.promise,x())}function x(){return new Error("Array Methods must be provided an Array")}function k(t){return new O(this,t).promise}function Y(t){var e=this;return new e(W(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(f);return g(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[Z]=P(),this._result=this._state=void 0,this._subscribers=[],f!==t&&("function"!=typeof t&&D(),this instanceof L?M(this,t):K())}function N(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=L}var U=void 0;U=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var W=U,q=0,z=void 0,B=void 0,G=function(t,e){V[q]=t,V[q+1]=e,2===(q+=2)&&(B?B(u):X())},H="undefined"!=typeof window?window:void 0,I=H||{},J=I.MutationObserver||I.WebKitMutationObserver,Q="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),R="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,V=new Array(1e3),X=void 0;X=Q?function(){return function(){return process.nextTick(u)}}():J?function(){var t=0,e=new J(u),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():R?function(){var t=new MessageChannel;return t.port1.onmessage=u,function(){return t.port2.postMessage(0)}}():void 0===H&&"function"==typeof t?function(){try{var e=t,n=e("vertx");return z=n.runOnLoop||n.runOnContext,i()}catch(t){return s()}}():s();var Z=Math.random().toString(36).substring(16),$=void 0,tt=1,et=2,nt=new j,rt=new j,ot=0;return O.prototype._enumerate=function(t){for(var e=0;this._state===$&&e<t.length;e++)this._eachEntry(t[e],e)},O.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===a){var o=p(t);if(o===c&&t._state!==$)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===L){var i=new n(f);y(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},O.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===$&&(this._remaining--,t===et?g(r,n):this._result[e]=n),0===this._remaining&&w(r,this._result)},O.prototype._willSettleAt=function(t,e){var n=this;A(t,void 0,function(t){return n._settledAt(tt,e,t)},function(t){return n._settledAt(et,e,t)})},L.all=k,L.race=Y,L.resolve=a,L.reject=F,L._setScheduler=r,L._setAsap=o,L._asap=G,L.prototype={constructor:L,then:c,catch:function(t){return this.then(null,t)}},L.polyfill=N,L.Promise=L,L})}]});define("hotelfx@1.1.0/entry/hotel/js/components/aborting.js",document.currentScript.src,function(t,e){return[function(t,e,a){var r=t(1);a.exports={_previous:null,getAbortData:function(){var t=JSON.parse(localStorage.getItem("abortData")||"{}");return{url:t.url||"",pageType:t.pageType||"",params:t.params||""}},setAbortData:function(t){$(".history-view").remove();var e=this,a=window.location.href;t&&t.url&&(a=t.url,delete t.url);var r={url:a,pageType:slark.getActiveId()||"",params:t||""};clearTimeout(this.timer),this.timer=setTimeout(function(){var t=JSON.stringify(r);t!==e._previous&&(localStorage.setItem("abortData",t),e._previous=t)},500)},removeAbortData:function(){localStorage.removeItem("abortData")},tipsTemplate:function(t){var e=sessionStorage.getItem("abortFlag"),a=this.getAbortData(),r="";if(sessionStorage.setItem("abortFlag","true"),this.today=$DATA.today?new Date($DATA.today):new Date,!slark.getCookie("abort_close_flag")&&!e&&a.url){switch(a.pageType){case"h5_list":r=this._getListAbortTpl(a);break;case"h5_detail":r=this._getDetaillAbortTpl(a);break;case"h5_createorder":r=this._getCreateOrderAbortTpl(a)}if(t.find(".history-view").size()&&t.find(".history-view").remove(),!r)return void localStorage.removeItem("abortData");window.tjMVT&&window.tjMVT.setData&&tjMVT.setData({et:"info",tri:"continue",etinf:"{}"}),t.append(r),t.find(".history-view").addClass("animate-fade"),t.find(".h-close").off().on("click",function(){var t=new Date,e=(new Date).format("yyyy-MM-dd"),a=new Date(e+" 23:59:59");$(this).parents(".history-view").remove(),slark.setCookie("abort_close_flag",!0,a-t)})}},_getListAbortTpl:function(t){var e=t.url.split("?")[1],a=slark.getParam("indate",e),i=slark.getParam("outdate",e),s=JSON.parse(localStorage._historyDatas||"{}"),o=slark.getParam("isnear",e),l=s.cityName||"",n=s.cityId||"",c=o?s.cityCn||"":"",d=!!a&&new Date(a)-this.today>=0,v=(new Date(i)-new Date(a))/1e3/60/60/24,p=a?a.substring(5):"",u=i?i.substring(5):"",h=t.url.replace("#","?"),m=slark.parseUrl(h);h=slark.replaceUrlParams(m,{isabort:1}),c&&(c+="附近");var f=/\/hotelwxqb\/(.*?)(\/)/i,g=t.url.match(f)[1];return g&&g!=n&&(d=!1),v<1&&(d=!1),l&&a&&i&&d?r({url:h,cspot:"list",title:"您上次在浏览",disContendText:o?'<div class="clearfix hotel_news"><p>'+l+c+'</p></div><div class="clearfix hotel_news"><div>'+p+"至"+u+'</div><div class="all_ni">共'+v+"晚</div></div>":'<div class="clearfix hotel_news"><div class="ellipsis">'+l+c+"</div><div>"+p+"至"+u+'</div><div class="all_ni">共'+v+"晚</div></div>"}):""},_getDetaillAbortTpl:function(t){var e=t.params.hotelName,a=t.params.hotelAddress,i=t.params.indate,s=!!i&&new Date(i)-this.today>=0;return e&&a&&s?r({url:t.url,cspot:"detail",title:"您上次看的酒店是",disContendText:'<div class="clearfix hotel_news"><p>'+e+'</p></div><div class="clearfix more_news"><p>'+a+"</p></div>"}):""},_getCreateOrderAbortTpl:function(t){var e=t.url.split("?")[1],a=slark.getParam("checkindate",e),i=slark.getParam("checkoutdate",e),s=t.params.hotelName,o=t.params.roomCount,l=t.params.roomTypeName,n=t.params.productName,c=!!a&&new Date(a)-this.today>=0,d=a?a.substring(5):"",v=i?i.substring(5):"",p=t.url,u=slark.parseUrl(p);if(p=slark.replaceUrlParams(u,{isabort:1,roomcount:o||1}),a&&i&&s&&l&&n&&c)return new Date(i),new Date(a),r({url:p,cspot:"createorder",title:"您刚未提交的订单",disContendText:'<div class="clearfix hotel_news"><div class="ellipsis">'+s+"</div><div>"+d+"至"+v+'</div></div><div class="clearfix more_news"><div>'+l+'</div><div class="ellipsis">'+n+"的房型</div></div>"});return""}}},function(e,a,r){r.exports=function(){return t("hotelfx@1.1.0/entry/hotel/tpl/template.js")("abort",function(t,e){var a=this,r=(a.$helpers,a.$escape),i=t.url,s=t.cspot,o=t.title,l=a.$string,n=t.disContendText,c="";return c+='<div class="history-view clearfix animate-fade"> <div class="h-right"> <a href="',c+=r(i),c+='" class="h-continue tjclick" data-tj={"cspot":"to',c+=r(s),c+='"}>继续预订</a> <div class="h-close icon-cross tjclick" data-tj={"cspot":"close',c+=r(s),c+='"}></div> </div> <div class="h-left"> <div class="h-prev">',c+=r(o),c+=':</div> <a href="',c+=r(i),c+='" class="h-hotelname tjclick" data-tj={"cspot":"to',c+=r(s),c+='"}>',c+=l(n),c+="</a> </div> </div> ",new String(c)})}()}]});define("hotelfx@1.1.0/src/js/getLocation.js",document.currentScript.src,function(t,o){return[function(o,e,i){function n(){this.userStutas="",this.fullBackTimer=null,this.channelId=window.TJObject&&window.TJObject.chid}t("hotelfx@1.1.0/src/js/j.js"),n.prototype={constructor:n,getLocation:function(t,o){switch(this.successCallback=t||function(){},this.errorCallback=o||function(){},this.sendLog("tech_locate"),this.channelId){case"zdwshwh5":this._winksiLocation();break;case"wxqbh5":this._wxLocation();break;case"qqqbh5":this._mqqLocation();break;default:this._qqmapLocation()}},_h5Location:function(){var t=this,o={enableHighAccuracy:!1,timeout:3e3},e=!1;clearTimeout(t.h5Timeout),t.h5Timeout=setTimeout(function(){e=!0,t.error({errorType:"H5_NO_RESPONESE"})},1e4),navigator.geolocation.getCurrentPosition(function(o){clearTimeout(t.h5Timeout),e||t._getCityInfo({_lt:"h5",sourceType:1,lat:o.coords.latitude,lng:o.coords.longitude})},function(o){if(clearTimeout(t.h5Timeout),!e)switch(o.code){case o.TIMEOUT:t.error({errorType:"TIMEOUT"});break;case o.PERMISSION_DENIED:t.error({errorType:"PERMISSION_DENIED"});break;case o.POSITION_UNAVAILABLE:t.error({errorType:"POSITION_UNAVAILABLE"});break;default:t.error({errorType:"UNABLE_POSITION"})}},o)},_qqmapLocation:function(){if(!window.qqmap_geolocation){if(!window.qq)return void this._h5Location();window.qqmap_geolocation=new qq.maps.Geolocation("4BCBZ-OGQWX-3PE4P-ZNP3C-EU77E-QGF3Z","ewhtml5")}var t=this,o={timeout:3e3};window.qqmap_geolocation.getLocation(function(o){if("IP"===o.type.toUpperCase())return void t._h5Location();t._getCityInfo({_lt:"qqmap",sourceType:5,lat:o.lat,lng:o.lng})},function(){t._h5Location()},o)},_winksiLocation:function(){if(window.winksi){var t=window.winksi.getLocationInfo();if(t){var o=JSON.parse(t);this._getCityInfo({_lt:"winksi",sourceType:3,lat:o.lat,lng:o.lng})}else this.error({errorType:"PERMISSION_DENIED"})}else this.error({errorType:"PERMISSION_DENIED"})},_wxLocation:function(){if(window.wx){var t=this,o=t.timeoutFullback();wx.run("getLocation",{type:"gcj02",timeout:3e3,success:function(o){t.isFullback||t._getCityInfo({_lt:"wx",sourceType:5,lat:o.latitude,lng:o.longitude})},fail:function(o){t.isFullback||t._h5Location()},complete:function(){o&&o.stop()}})}else this._h5Location()},timeoutFullback:function(){var t=this;return t.isFullback=!1,clearTimeout(t.fullBackTimer),t.fullBackTimer=setTimeout(function(){t.isFullback=!0,t._h5Location()},4500),{stop:function(){t.isFullback=!1,clearTimeout(t.fullBackTimer)}}},_mqqLocation:function(){var t=this;t._qqmapLocation()},getPoi:function(t,o,e){this.successCallback=t||function(){},this.errorCallback=o||function(){},this._getCityInfo(e)},_getCityInfo:function(t){if(!t.lat||!t.lng)return void this.error({errorType:"POSITION_UNAVAILABLE"});var o=this,e=window.TJObject&&window.TJObject.subPath||"/hotelfx/",i="//"+location.hostname+e+"getpoi";o.ajaxGet&&o.ajaxGet.abort(),o.ajaxGet=$.ajax({timeout:3e3,cache:!0,type:"GET",url:i,data:{_lt:t._lt||"",lat:t.lat,lng:t.lng,coord:t.sourceType},success:function(e){if(e.errorCode){var i={};return i.errorType="FAILED_CITY_INFO","MATCH_INTERNATIONAL"===e.errorCode&&(i.errorType="INTERNATIONAL_CITY_INFO"),i.lat=t.lat,i.lng=t.lng,void o.error(i)}o.sendLog("tech_mylocation",{cityName:e.cityName,cityId:e.cityId,lat:e.geoLocation.lat,lng:e.geoLocation.lng}),o.successCallback(e)},error:function(e){var i={};i.errorType="FAILED_CITY_INFO",i.lat=t.lat,i.lng=t.lng,o.error(i)}})},error:function(t){this.errorCallback&&"function"==typeof this.errorCallback&&this.errorCallback(t);var o={},e={TIMEOUT:"1",UNABLE_POSITION:"2",POSITION_UNAVAILABLE:"3",PERMISSION_DENIED:"4",FAILED_CITY_INFO:"5",H5_NO_RESPONESE:"1.1"};o.errCode=e[t.errorType],o.lat=t.lat||"",o.lng=t.lng||""},sendLog:function(t,o){window.tjClient.send(t,o)}},i.exports=n}]});define("hotelfx@1.1.0/entry/hotel/js/cancleInsuranceInfo.js",document.currentScript.src,function(i,s){return[function(s,l,a){a.exports=function(i,s,l,a,n,p){cancleInsuranceInfo={TEMPLATE:{new:'<div class="mask_invoice mvt_268" style="display: none;"> <div class="invoice-layer invoice"> <h1 class="bdb">取消险内容<i class="closed"></i></h1> <div> <p> <span>保险名称：</span>艺龙国内酒店取消险； </p> <p> <span>份数限额：</span>每订单只能投保一份，不得重复投保； </p> <p> <span>保险金额：</span>预先支付未使用且无法退回的房费总额的90%（保险订单）；</p> <p> <span>保险费：</span>订单预付总房费的5%（四舍五入取整到分，保险金额不包含使用优惠券抵扣的金额，以实际支付的金额计算）； </p><div class="more_rule more_show">更多细则</div> </div> </div> </div>',old:'<div class="canceltan type-pop-box "  style="display: none;"><div class="toptips">取消险内容<span><i></i></span></div><div class="content"><ul><li><p><span>保险名称：</span><span class="text_c">艺龙国内酒店取消险；</span></p></li><li><p><span>份数限额：</span><span class="text_c">每订单只能投保一份，不得重复投保；</span></p></li><li><p><span>保险金额：</span><span class="text_c">预先支付 未使用且无法退回的房费总额的90%（保险订单）；</span></p></li><li><p><span>保险费：</span><span class="text_c">订单预付总房费的5%（四舍五入取整到分，保险金额不包含使用优惠券抵扣的金额，以实际支付的金额计算）；</span></p></li><li class="more more_show"><p>更多细则</p></li></ul></div></div>'},beforeShow:function(){$("html").hasClass("android")&&$("html,body").css("overflow","hidden")},init:function(){this.dom=i.getActiveLayer(),this.page="2"!=i.getMvtResult("268")?$(this.TEMPLATE.new):$(this.TEMPLATE.old),this.page.appendTo(i.getActiveLayer()),this._bindEvent()},show:function(){"2"==i.getMvtResult("268")&&($(".mask-layer",this.dom).length>0?$(".mask-layer",this.dom).show():$('<div class="mask-layer"></div>').appendTo(i.getActiveLayer())),this.page.addClass("box-active"),this.beforeShow(),this.page.show()},hide:function(){this.page.removeClass("box-active"),this.page.hide(),this.afterHide()},afterHide:function(){$(".mask-layer",this.dom).hide(),$("html").hasClass("android")&&$("html,body").css("overflow","")},_bindEvent:function(){var i=this;$(".cancelInsuranceInfo").off("click").on("click",function(){i.show()}),i.page.find(".toptips span,.invoice .closed").off("click").on("click",function(){i.hide()}),i.page.find(".more_show").off("click").on("click",function(){cancleInsuranceInfo.hide(),moreDetail.show()}),i.page.find(".invoice-layer,.toptips,.content").on("click",function(i){i.stopPropagation()}),i.page.on("click",function(){i.hide()}),$(i.dom).off("click",".mask-layer").on("click",".mask-layer",function(){return i.hide(),!1})}},pacificInsuranceHotel={TEMPLATE:l({}),option:{showType:"animation",transitionClass:"box-active",showTransition:$("html").hasClass("ios")},beforeShow:function(){var i=$("html");i.hasClass("android")&&i.css("overflow","hidden")},init:function(){this.page=$(this.TEMPLATE),this.page.appendTo(i.getActiveLayer()),this._bindEvent()},afterHide:function(){var i=$("html");i.hasClass("android")&&i.css("overflow","")},_bindEvent:function(){}},zazxbx={TEMPLATE:a({}),option:{showType:"animation",transitionClass:"box-active",showTransition:$("html").hasClass("ios")},beforeShow:function(){var i=$("html");i.hasClass("android")&&i.css("overflow","hidden")},init:function(){this.page=$(this.TEMPLATE),this.page.appendTo(i.getActiveLayer()),this._bindEvent()},afterHide:function(){var i=$("html");i.hasClass("android")&&i.css("overflow","")},_bindEvent:function(){}},moreDetail={TEMPLATE:n({}),option:{showType:"animation",transitionClass:"box-active",showTransition:$("html").hasClass("ios")},perTitle:document.title,init:function(){this.page=$(this.TEMPLATE),this.page.appendTo(i.getActiveLayer()),this._bindEvent()},_bindEvent:function(){$(".checkhere").off("click").on("click",function(){pacificInsuranceHotel.show()}),$(".clicklook").off("click").on("click",function(){zazxbx.show()}),$(".clickwatch").off("click").on("click",function(){zgrmcc.show()})}},zgrmcc={TEMPLATE:p({}),option:{showType:"animation",transitionClass:"box-active",showTransition:$("html").hasClass("ios")},beforeShow:function(){var i=$("html");i.hasClass("android")&&i.css("overflow","hidden")},init:function(){this.page=$(this.TEMPLATE),this.page.appendTo(i.getActiveLayer()),this._bindEvent()},afterHide:function(){var i=$("html");i.hasClass("android")&&i.css("overflow","")},_bindEvent:function(){}}}(i("hotelfx@1.1.0/src/js/core.js"),i("hotelfx@1.1.0/src/js/PluginManager.js"),s(1),s(2),s(3),s(4))},function(s,l,a){a.exports=function(){return i("hotelfx@1.1.0/entry/hotel/tpl/template.js")("tpybxInfo",'<div class="tpybx"> <div class="title"> <p>太平财产保险有限公司</p> <p>酒店预定取消保险B款条款</p> </div> <div class="text"> <h3>总则</h3> <div class="clause"><span>第一条</span>本保险合同由保险条款、投保单、保险单或其他保险凭证、批单等组成。凡涉及本保险合同的约定，均应采用书面形式。</div> <div class="clause"><span>第二条</span>凡在预订本合同约定的酒店客房时，实际支付预付房费或用信用卡担保的一方均可作为被保险人。</div> <div class="clause"><span>第三条</span>具有完全民事行为能力的被保险人本人、对被保险人有保险利益的其他人可作为投保人。</div> <div class="clause"><span>第四条</span>除另有约定外，本保险合同保险金的受益人为被保险人本人。</div> <div class="clause"><span>第五条</span>保险标的为被保险人在提前预订本合同约定的酒店客房时所支付的预付房费或信用卡担保金额。</div> <h3>保险责任</h3> <div class="clause"><span>第六条</span>身体健康，在持有营业执照的宾馆、饭店、招待所、旅社登记住宿的旅客均可作为被保险人参加本保险； <ul class="detail-6"> <li><i>（一）</i>指定入住的客人遭遇意外伤害事故或罹患突发性重病导致必须住院治疗或身故； </li> <li><i>（二）</i>指定入住的客人之配偶、父母或子女遭遇意外伤害事故或罹患突发性重病导致必须住院治疗或身故；</li> <li><i>（三）</i>指定入住的客人或其配偶初次被诊断出怀孕；</li> <li><i>（四）</i>酒店入住首日之前 7 天内，指定入住的客人在中国境内的日常住所因火灾、爆炸、自然灾害等原因遭受严重损毁； </li> <li><i>（五）</i>酒店入住首日之前 7 天内，酒店所在地发生 5 级以上地震；</li> <li><i>（六）</i>酒店入住首日之前 2 天内，酒店所在地气象部门发布台风、飓风预警信号； </li> <li><i>（七）</i>指定入住的客人提前预订的前往酒店所在地机场的航班（航空公司对外公布的班期时刻表上列明的该航班到达时间须至少早于已预订酒店客房的最迟入住时间 4小时以上）延误或取消，导致该客人无法按期抵达酒店所在地； </li> <li><i>（八）</i>指定入住的客人在预订酒店之前报名参加的原定于酒店入住首日及之后三天内于酒店所在地进行的国家级考试延期举行。 </li> <li><i>（九）</i>酒店入住首日前15日内因指定入住的客人计划乘坐的公共交通工具突发承运人雇员罢工、暴动致使被保险人取消酒店预订：</li> <li><i>（十）</i>酒店入住首日前15日内因酒店所在地发生不可预测的暴动、民间骚乱或流行疫病；</li> <li><i>（十一）</i>购买本保险后，指定入住的客人出发地官方已发布了针对该旅行目的地的相关警告；</li> <li><i>（十二）</i>指定入住的客人的签证拒签，导致该客人无法继续原定行程;</li> <li><i>（十三）</i>在酒店入住首日前2天内，指定入住的客人自驾前往酒店所在地途中，车辆意外抛锚须救援公司救援;</li> <li><i>（十四）</i>指定入住的客人因获得新的工作或职业培训或出差安排，导致客人无法按期抵达酒店;</li> <li><i>（十五）</i>酒店入住首日前30天内，指定入住的客人作为全职雇员因与雇主间的雇佣关系意外终止，导致客人无法按期抵达酒店。</li> <li><i>（十六）</i>酒店入住首日前7日，指定入住的客人有效证件丢失，无法办理入住手续；</li> <li><i>（十七）</i>指定入住的客人因被疑似或确诊感染传染性疾病而依法被隔离无法继续原定行程；</li> <li><i>（十八）</i>指定入住的客人被劫持、绑架；</li> <li><i>（十九）</i>被保险人购买本保险后，酒店所在地发生恐怖袭击活动且满足下列条件: <ul class="detail-19"> <li><i>1.</i>恐怖袭击活动发生地距离指定入住的客人酒店所在地在方圆150公里以内；</li> <li><i>2.</i>恐怖袭击活动发生在指定入住的客人出发之日前30天内；</li> <li><i>3.</i>当地政府已经对此类恐怖袭击活动发布过警告的。</li> </ul> </li> <div class="explain-1">在此条款生效前，指定入住的客人的身体状况必须适合出行且没有发生任何可能直接或间接的导致该客人无法按期入住酒店的状况。</div> </ul> </div> <h3>责任免除</h3> <div class="clause"><span>第七条</span>因下列情形之一，直接或间接导致被保险人无法按期使用酒店服务而取消所预订的客房所造成的被保险人预付房费金额或信用卡担保金额损失的，保险人不承担给付保险金责任： <ul class="detail-7"> <li><i>（一）</i>预订酒店之前发生的保险责任列明的情形；</li> <li><i>（二）</i>被保险人或指定入住的客人的故意行为；</li> <li><i>（三）</i>由于旅行社、酒店原因导致的酒店客房预订失败或误订；</li> <li><i>（四）</i>指定入住的客人因保险责任列明的情形之外的原因未准时办理酒店客房入住手续；</li> <li><i>（五）</i>指定入住的客人或其配偶、父母、子女因投保前存在的健康问题导致的急性发作或死亡；</li> <li><i>（六）</i>指定入住的客人未准时搭乘前往酒店所在地的既定公共交通工具；</li> <li><i>（七）</i>指定入住的客人非以缴费乘客身份搭乘民航航班；</li> <li><i>（八）</i>指定入住的客人搭乘航班所属的航空公司破产或倒闭；</li> <li><i>（九）</i>指定入住的客人主动放弃搭乘航空公司安排的在原定起飞时间之时起 4 小时内出发的同一机场内其它航班；</li> <li><i>（十）</i>由于保险责任以外的原因导致的机场关闭；</li> <li><i>（十一）</i>被保险人或指定入住的客人投保前存在的财务或合同义务问题；</li> <li><i>（十二）</i>指定入住的客人或随行人员的违法犯罪行为；</li> <li><i>（十三）</i>战争（不论宣战与否）、内战、军事行动、恐怖活动、暴乱、绑架或其他类似的武装叛乱；</li> <li><i>（十四）</i>流行疫病或大规模流行疫病爆发；</li> <li><i>（十五）</i>地震、海啸，但本合同另有规定的除外；</li> <li><i>（十六）</i>政府的禁令或管制；</li> <li><i>（十七）</i>本合同生效前，指定入住的客人身体状况不适合出行或发生任何可能直接或间接导致客人无法按期入住酒店的情况；</li> <li><i>（十八）</i>任何生物、化学、原子能武器，原子能或核能装置所造成的爆炸、灼伤、污染或辐射；</li> <li><i>（十九）</i>恐怖袭击。</li> </ul> </div> <div class="clause"><span第八条>被保险人因退改所预订的酒店房间所引起的间接费用、可从酒店获得退回的房款，以及其他不属于保险责任范围内的损失，保险人不负责赔偿。</span第八条></div> <h3>保险金额和免赔额（率）</h3> <div class="clause"><span>第九条</span>保险金额是保险人承担给付保险金责任的最高限额。保险金额由投保人、保险人双方约定，并在保险单中载明。</div> <div class="clause"><span>第十条</span>每次事故免赔额（率）由投保人与保险人在订立保险合同时协商确定，并在保 险合同中载明。</div> <h3>保险期间</h3> <div class="clause"><span>第十一条</span>除另有约定外，本合同保险责任的开始时间以下列情况中最迟发生的时间为准: <ul> <li><i>（一）</i>被保险人提前预订本合同约定的酒店客房、并交纳相关酒店预付房费（或信用卡担保完成）和足额交付保险费时；</li> <li><i>（二）</i>酒店既定入住首日前第 60 天零时。</li> </ul> <p>本合同的终止时间为本合同约定的酒店既定入住首日 24 时。</p> </div> <h3>保险人义务</h3> <div class="clause"><span>第十二条</span>订立保险合同时，采用保险人提供的格式条款的，保险人向投保人提供的投保单应当附格式条款，保险人应当向投保人说明保险合同的内容。对保险合同中免除保险 人责任的条款，保险人在订立合同时应当在投保单、保险单或者其他保险凭证上作出足以引起投保人注意的提示，并对该条款的内容以书面或者口头形式向投保人作 出明确说明；未作提示或者明确说明的，该条款不产生效力。</div> <div class="clause"><span>第十三条</span>本保险合同成立后，保险人应当及时向投保人签发保险单或其他保险凭证。</div> <div class="clause"><span>第十四条</span>保险人依据第十九所取得的保险合同解除权，自保险人知道有解除事由之日起，超过三十日不行使而消灭。自保险合同成立之日起超过二年的，保险人不得解除合同；发生保险事故的，保险人承担给付保险金责任。 <p>保险人在合同订立时已经知道投保人未如实告知的情况的，保险人不得解除合同；发生保险事故的，保险人应当承担给付保险金责任。</p></div> <div class="clause"><span>第十五条</span>保险人按照第二十四条的约定，认为投保人、被保险人或者受益人提供的有关索赔的证明和资料不完整的，应当及时一次性通知投保人、被保险人或者受益人补充提供。</div> <div class="clause"><span>第十六条</span>保险人收到被保险人或者受益人的给付保险金的请求后，应当及时作出是否属于保险责任的核定；情形复杂的，应当在三十日内作出核定。但保险责任的核定必须依 赖于特定证明、鉴定、判决、裁定或其他证据材料的，保险人应在被保险人或者受益人提供或自行取得上述证据材料起三十日内作出核定。本合同另有约定的除外。<br> 保险人应当将核定结果通知被保险人或者受益人；对属于保险责任的，在与被保险人或者受益人达成给付保险金的协议后十日内，履行赔偿保险金义务。保险合同对 给付保险金的期限有约定的，保险人应当按照约定履行给付保险金的义务。保险人依照前款约定作出核定后，对不属于保险责任的，应当自作出核定之日起三日内向 被保险人或者受益人发出拒绝给付保险金通知书，并说明理由。</div> <div class="clause"><span>第十七条</span>保险人自收到给付保险金的请求和有关证明、资料之日起六十日内，对其赔偿保险金的数额不能确定的，应当根据已有证明和资料可以确定的数额先予支付；保险人最终确定给付的数额后，应当支付相应的差额。</div> <h3>投保人、被保险人义务</h3> <div class="clause"><span>第十八条</span>除另有约定外，投保人应当在保险合同成立时交清保险费。保险费未按约定及时足额交付前发生的保险事故，保险人不承担赔偿责任。</div> <div class="clause"><span>第十九条</span>订立保险合同，保险人就被保险人的有关情况提出询问的，投保人应当如实告知。 投保人故意或者因重大过失未履行前款规定的义务，足以影响保险人决定是否同意承保或者提高保险费率的，保险人有权解除本合同。 投保人故意不履行如实告知义务的，保险人对于合同解除前发生的保险事故，不承担给付保险金责任，并不退还保险费。 投保人因重大过失未履行如实告知义务，对保险事故的发生有严重影响的，保险人对于合同解除前发生的保险事故，不承担给付保险金责任，但应当退还保险费。 </div> <div class="clause"><span>第二十条</span>投保人住所或通讯地址变更时，应及时以书面形式通知保险人。投保人未通知的，保险人按本保险合同所载的最后住所或通讯地址发送的有关通知，均视为已发送给投保人。</div> <div class="clause"><span>第二十一条</span>发送给投保人。第二十一条 投保人、被保险人或者指定入住的客人知道保险事故发生后，应当在24小时内或经保险人书面同意延长的期限内通知保险人。故意或者因重大过失未及时通知，致使保险事故的性质、原因、损失程度等难以确定的，保险人对无法确定的部分，不承担给付保险金责任，但保险人通过其他途径已经及时知道或者应当及时知道保险事故发生的除外。<br> 上述约定，不包括因不可抗力而导致的迟延。 </div> <h3>保险金申请与给付</h3> <div class="clause"><span>第二十二条</span>保险事故发生时，被保险人对保险标的不具有保险利益的，不得向保险人请求赔偿保险金。</div> <div class="clause"><span>第二十三条</span>保险标的发生保险责任范围内的损失，保险人以支付保险金的方式赔偿，并将保险金直接支付到被保险人提供的银行账户。</div> <div class="clause"><span>第二十四条</span>保险金申请人请求赔偿时，应向保险人提供以下证明和资料。保险金申请人因特殊原因不能提供以下材料的，应提供其他合法有效的材料。保险金申请人未能提供有关材料，导致保险人无法核实的，保险人对无法核实部分不承担给付保险金的责任： <ul> <li><i>（一）</i>保险金申请人填具的索赔申请书；</li> <li><i>（二）</i>保险单或其他保险凭证正本；</li> <li><i>（三）</i>被保险人及指定入住的客人的身份证明；</li> <li><i>（四）</i>被保险人所预订的酒店客房订单原件或旅行社出具的预订证明；</li> <li><i>（五）</i>被保险人向酒店所支付的预付房费或信用卡担保扣款凭证，银行卡消费明细、信用卡账单等；</li> <li><i>（六）</i>被保险人的银行账户信息，包括户名、开户行、账号（用于保险人向被保险人支付赔款）；</li> <li><i>（七）</i>保险事故发生证明资料： <ul class="detail-24"> <li><span>1.</span>如指定入住的客人或其配偶、父母、子女遭遇意外伤害事故或罹患突发性重病导致必须住院治疗或身故，被保险人需提供由法律法规授权的有关部门出具的该客 人或其配偶、父母、子女的意外伤害事故证明和医疗机构出具的医疗诊断证明书（包括但不限于诊断全称、病历和治疗过程）、医疗纪录、住院证明正本；</li> <li><span>2.</span>如指定入住的客人或其配偶初次被诊断出怀孕，被保险人需提供医疗机构出具含末次月经日期的医疗诊断证明书（包括但不限于诊断全称、病历）；</li> <li><span>3.</span>如指定入住的客人的住所因火灾、爆炸、自然灾害等原因遭受严重损毁，被保险人需提供消防部门等有关部门出具的事故证明；</li> <li><span>4.</span>如酒店所在地爆发保险责任约定的地震、台风预警，保险人以政府或有关机构公开资料为准进行理赔；</li> <li><span>5.</span>如指定入住的客人所搭乘的航班发生保险责任约定的延误或取消，被保险人需提供该客人的航班飞机票和航空公司出具的保险事故证明文件正本，包括航班延误原因、航班延误时间及航空公司在同一机场安排的最早可供被保险人搭乘的其他航班的编号及时间；</li> <li><span>6.</span>如指定入住的客人参加的考试被延期，被保险人需提供该客人的准考证和延期证明。</li> </ul> </li> <li><i>（八）</i>保险金申请人所能提供的与确认保险事故的性质、原因、损失程度等有关的其他证明和资料。</li> </ul> </div> <div class="clause"><span>第二十五条</span>保险金申请人向保险人请求给付保险金的诉讼时效期间为二年，自其知道或者应当知道保险事故发生之日起计算。</div> <h3>争议处理和法律适用</h3> <div class="clause"><span>第二十六</span>因履行本保险合同发生的争议，由当事人协商解决。协商不成的，提交保险单载明的仲裁机构仲裁；保险单未载明仲裁机构或者争议发生后未达成仲裁协议的，依法向人民法院起诉。</div> <div class="clause"><span>第二十七条</span>与本保险合同有关的以及履行本保险合同产生的一切争议处理适用中华人民共和国法律（不包括港澳台地区法律）。</div> <h3></h3> <div class="clause"><span>第二十八条</span>除本合同另有约定外，经投保人和保险人协商同意后，可变更本合同的有关内容。变更本合同时，投保人应填写变更合同申请书，经保险人审核同意，并在本合同的保险单或其它保险凭证上加以批注，或由投保人和保险人订立变更的书面协议后生效。</div> <div class="clause"><span>第二十九条</span>在本保险合同成立后，投保人在保险期间开始前可提出解除保险合同的申请，保险期间开始后不得解除本保险合同。 <p>投保人解除本保险合同时，应提供下列证明文件和资料：</p> <ul> <li><i>（一）</i>保险合同解除申请书；</li> <li><i>（二）</i>保险单原件；</li> <li><i>（三）</i>保险费交付凭证；</li> <li><i>（四）</i>投保人身份证明；</li> <li><i>（五）</i>保险人需要的其它有关文件和资料。</li> </ul> <p>在保险期间开始前保险合同解除的，自保险人接到保险合同解除申请书之时起，本保险合同的效力终止。保险人收到上述证明文件和资料之日起30日内向投保人无息退还保险费；保险期间开始后不得解除本保险合同。</p> </div> <div class="clause"><span>第三十条</span>本保险合同涉及的外币与人民币的汇率，以结算当日中国人民银行公布的外汇汇率为准。</div> </div> <div class="other"> <h3>释义</h3> <p><i>保险人：</i>指与投保人签订本保险合同的太平财产保险有限公司及分支机构。意外伤害：指以外来的、突发的、非本意的和非疾病的客观事件为直接且单独的原因致使身体受到的伤害。</p> <p><i>保险事故：</i>指本合同约定的保险责任范围内的事故。</p> <p><i>指定入住的客人：</i>指被保险人在预订酒店客房时，在酒店预订系统中针对每一独立房间登记全名，并会实际入住该酒店房间的人。</p> <p><i>突发性重病：</i>指首次罹患的突发性疾病或出现的症状，并经医院医生诊断及证实患者罹患的疾病危及本人生命，但不包括本条款生效前罹患的任何疾病或出现的任何症状及任何慢性疾病。</p> <p><i>中国境内</i>指中华人民共和国大陆地区，不含香港特别行政区、澳门特别行政区及台湾省。</p> <p><i>自然灾害：</i>是指雷击、飓风、台风、龙卷风、风暴、暴雨、洪水、冻灾、冰雹、地崩、山崩、雪崩、火山爆发、地面突然下沉下陷以及其他人力不可抗拒的破坏力强大的自然现象。</p> <p><i>台风、飓风：</i>台风指中心附近最大平均风力 12 级或以上，即风速在 32.6 米/秒以上的热带气旋；飓风是一种与台风性质相同、但出现的位置区域不同的热带气旋，台风出现在西北太平 洋海域，而飓风出现在印度洋、大西洋海域。</p> <p><i>航班：</i>是指飞机按规定的航线、日期、时刻的定期飞行。</p> <p><i>延误：</i>指航空公司未能按其对外公布的班期时刻表上列明的到达时间将旅客运达目的地。</p> <p><i>延误时间：</i>指航班延误、取消、或因超额订位致使旅客被拒绝乘坐后，由航空公司安排的最快改搭班机到达目的地时间和原定到达时间之间时间差。</p> <p><i>流行疫病：</i>是指在某国家、地区或区域突然爆发并快速传播的传染性疾病。</p> <p><i>大规模流行疫病：</i>是指在整个洲际大陆或整个人类中流行的传染性疾病。</p> <p><i>手续费：</i>25%</p> <p><i>不可抗力：</i>指不能预见、不能避免并不能克服的客观情况。</p> </div> </div>')}()},function(s,l,a){a.exports=function(){return i("hotelfx@1.1.0/entry/hotel/tpl/template.js")("zazxbx",'<div class="tpybx"> <div class="title"> <p>众安在线财产保险股份有限公司</p> <p>酒店取消保险条款</p> <p>（众安在线）（备-其他）【2016】（主）035号</p> </div> <div class="text"> <h3>总则</h3> <div class="clause"><span>第一条</span>本保险合同由保险条款、投保单、保险单或其他保险凭证、批单组成。凡涉及本保险合同的约定，均应采用书面形式。</div> <div class="clause"><span>第二条</span>在预订本保险合同约定的酒店客房时，实际支付预付房费或提供信用卡担保的自然人可作为本保险合同的被保险人。</div> <div class="clause"><span>第三条</span>除另有约定外，投保人为被保险人本人。</div> <div class="clause"><span>第四条</span>本保险合同的保险标的为被保险人在提前预订本合同约定的酒店客房时所支付的预付房费或信用卡担保金额。</div> <h3>保险责任</h3> <div class="clause"><span>第五条<br /> （一）必选责任</span><br />在保险期间内，被保险人提前预订本保险合同约定的酒店客房，在预订及支付预付房费或信用卡担保完成后，因发生下列原因致使指定入住人无法入住所预订的酒店客房，由此造成被保险人预付房费金额损失或信用卡担保金额损失的，保险人按本合同约定比例赔偿被保险人向酒店预先支付的未使用且无法退回的或用信用卡担保所扣除且无法退回的实际酒店房费金额损失，保险金最高给付金额以本保险合同所载明的保险金额为限。 <ul class="detail-6"> <li><i>1、</i>指定入住人身故、遭遇意外伤害事故导致严重受伤或罹患突发性疾病，经当地医院医生诊断须住院治疗或不宜继续原定行程； </li> <li><i>2、</i>指定入住人的配偶、父母、子女或随行旅伴身故、遭遇意外伤害事故导致严重受伤或罹患突发性疾病，经当地医院医生诊断须住院治疗或不宜继续原定行程；</li> <li><i>3、</i>指定入住人因被疑似或确诊感染传染性疾病而依法被隔离致使无法继续原定行程；</li> <li><i>4、</i>指定入住人或其配偶在酒店预订后初次被诊断出怀孕； </li> <li><i>5、</i>指定入住人或其配偶因初次诊断患有妊娠并发症，且经当地医院医生诊断不宜继续原定行程；</li> <li><i>6、</i>指定入住人被劫持、绑架；</li> <li><i>7、</i>在预订及支付预付房费或信用卡担保完成后且酒店入住首日之前7日内，指定入住人因日常居住地的家庭财产遭受火灾、爆炸、自然灾害、室内管道破裂或被盗窃抢劫导致严重损失，且无法继续原定行程； </li> <li><i>8、</i>指定入住人因公务行程变更，且无法继续原定行程； </li> <li><i>9、</i>指定入住人因学校课程或考试安排变更，且无法继续原定行程；</li> <li><i>10、</i>指定入住人因签证被拒签，且无法继续原定行程；</li> <li><i>11、</i>在酒店入住首日，指定入住人因所乘坐的前往酒店所在地的既定航班延误或取消，且虽搭乘航空公司安排的替代交通工具仍无法在入住第一日最晚退房时间前的6小时入住原预订酒店；</li> <li><i>12、</i>指定入住人因自驾前往酒店所在地途中，车辆意外抛锚须救援公司救援，且无法按原定行程入住所预订的酒店；</li> <li><i>13、</i>指定入住人因自驾前往酒店所在地途中，车辆发生意外交通事故，且无法按原定行程入住所预订的酒店；</li> <li><i>14、</i>在预订及支付预付房费或信用卡担保完成后且酒店入住首日前7日内，指定入住人因有效身份证件丢失，且无法继续原定行程或入住原预订酒店；</li> <li><i>15、</i>指定入住人在预订及支付预付房费或信用卡担保完成之前报名参加的原定于酒店入住首日及之后三天内于酒店所在地进行的国家级考试延期举行；</li> <li><i>16、</i>在预订及支付预付房费或信用卡担保完成后且酒店入住首日之前7天内，指定入住人所计划乘坐的前往酒店所在地的既定公共交通工具突发承运人雇员罢工、暴动，且无法继续原定行程；</li> <li><i>17、</i>在预订及支付预付房费或信用卡担保完成后且酒店入住首日之前7日内，指定入住人出发地或酒店所在地突发暴动、民间骚乱或流行疫病，且无法继续原定行程；</li> <li><i>18、</i>在预订及支付预付房费或信用卡担保完成后且酒店入住首日之前7日内，指定入住人出发地国家旅游局、外交部已发布了针对该酒店所在地的相关警告，且无法继续原定行程；</li> <li><i>19、</i>在预订及支付预付房费或信用卡担保完成后且酒店入住首日之前7天内，指定入住人出发地或酒店所在地发生5级以上地震，且无法继续原定行程；</li> <li><i>20、</i>在预订及支付预付房费或信用卡担保完成后且酒店入住首日之前7天内，指定入住人出发地或酒店所在地气象部门发布自然灾害预警信号，且无法继续原定行程；</li> <li><i>21、</i>酒店所在地发生恐怖袭击活动且满足下列条件： <ul class="detail-19"> <li><i>（1）</i>恐怖袭击活动发生地距离指定入住的客人酒店所在地在方圆150公里以内；</li> <li><i>（2）</i>恐怖袭击活动发生在指定入住的客人出发之日前30天内；</li> <li><i>（3）</i>当地政府已经对此类恐怖袭击活动发布过警告的。</li> </ul> </li> <span>可选责任<br />在保险期间内，被保险人提前预订本保险合同约定的酒店客房，在预定及支付预付房费或信用卡担保完成后，被保险人因本人或指定入住人自身原因取消所预订的酒店客房，由此造成被保险人预付房费的损失或信用卡担保金额损失的，保险人依照本合同约定比例赔偿被保险人向酒店预先支付的未使用且无法退回的或用信用卡担保所扣除且无法退回的实际酒店房费金额损失，保险金最高给付金额以本保险合同所载明的保险金额为限。</span> <div class="explain-1">前款所述的自身原因是指必选责任列明以外的其他家庭因素、公务需要或个人原因。</div> </ul> </div> <h3>责任免除</h3> <div class="clause"><span>第六条</span><br />（一）必选责任免除条款 <br />因下列情形之一，直接或间接导致本合同第五条第（一）款所述保险责任，保险人不承担赔偿责任： <ul class="detail-7"> <li><i>1、</i>在预订酒店及支付预付房费或信用卡担保完成之前发生的保险责任列明的情形；</li> <li><i>2、</i>被保险人或指定入住的客人的故意行为；</li> <li><i>3、</i>除另有约定外，非本保险合同列明的预订酒店的取消；</li> <li><i>4、</i>被保险人或指定入住人的自致伤害或自杀，但自杀时为无民事行为能力人的除外；</li> <li><i>5、</i>被保险人、指定入住人或其直系家庭成员、随行旅伴的违法犯罪行为；</li> <li><i>6、</i>被保险人在投保前已意识到或应当意识到任何将可能导致酒店客房预订取消的情况或条件，包括但不限于指定入住人身体状况不适合出行、当时已经宣布或已经发生的任何罢工或其他工人抗议活动、或当时已经发生的任何恶劣天气或自然灾害；</li> <li><i>7、</i>被保险人投保前，指定入住人出发地官方已发布了针对该旅行目的地的相关警告；</li> <li><i>8、</i>被保险人违背医嘱引起的损失；</li> <li><i>9、</i>指定入住人主动放弃搭乘航空公司安排的可在入住第一日最晚退房时间前的6小时到达的替代公共交通工具；</li> <li><i>10、</i>自驾前往酒店发生意外交通事故时，指定入住人或所驾驶车辆有以下情形之一的：</li> <ul class="detail-19"> <li><i>（1）</i>指定入住人或其所乘车辆驾驶人无当地有效驾驶证或驾驶无当地有效行驶证、号牌、临时号牌或临时移动证的机动车的；</li> <li><i>（2）</i>指定入住人所乘车辆未在规定检验期限内进行机动车安全技术检验或检验未通过；</li> <li><i>（3）</i>指定入住人所乘车辆载有爆炸物品、易燃易爆化学物品、剧毒或者放射性等危险物品的；</li> <li><i>（4）</i>指定入住人或其所乘车辆的驾驶人饮酒或服用国家管制的精神药品或麻醉药品的；</li> </ul> <li><i>11、</i>任何可以从政府、酒店、公共交通工具承运人、旅行社或其它旅行公司或其他第三方机构予以退款或赔偿的损失；</li> <li><i>12、</i>由于旅行社、酒店原因导致的酒店客房预订失败或误订；</li> <li><i>13、</i>指定入住人已经办理酒店入住后取消酒店预订的损失；</li> <li><i>14、</i>由于政府禁令或管制，政府或法律规定引起的损失；</li> <li><i>15、</i>当必须取消酒店预订时，被保险人未能在约定时间（以本保险合同载明时间为准）前申请取消预订的酒店而造成的损失。</li> </ul> （一）可选责任免除条款 <br />因下列情形之一，直接或间接导致本合同第五条第（二）款所述保险责任，保险人不承担赔偿责任： <ul class="detail-7"> <li><i>1、</i>预订酒店之前酒店所在地发生恐怖袭击活动、大规模战争暴动、民间骚乱或流行疫病，地震等自然灾害预警；</li> <li><i>2、</i>被保险人或指定入住人的故意行为；</li> <li><i>3、</i>被保险人或指定入住人的自致伤害或自杀，但自杀时为无民事行为能力人的除外；</li> <li><i>4、</i>被保险人、指定入住人或其直系家庭成员、随行旅伴的违法犯罪行为；</li> <li><i>5、</i>被保险人在投保前已意识到或应当意识到任何将可能导致酒店客房预订取消的情况或条件，包括但不限于指定入住人身体状况不适合出行、当时已经宣布或已经发生的任何罢工或其他工人抗议活动、或当时已经发生的任何恶劣天气或自然灾害；</li> <li><i>6、</i>被保险人投保前，指定入住人出发地官方已发布了针对酒店所在地的相关警告；</li> <li><i>7、</i>由于政府禁令或管制，政府或法律规定引起的损失； </li> <li><i>8、</i>当必须取消酒店预订时，被保险人未能在约定时间（以本保险合同载明时间为准）前申请取消预订的酒店而造成的损失。</li> </ul> </div> <h3>保险金额、免赔额和给付比例</h3> <div class="clause"><span>第七条</span><br/>保险金额是保险人承担给付该被保险人保险金责任的最高限额。保险金额由投保人、保险人双方约定，并在本保险合同中载明。</h3> <div class="clause"><span>第八条</span><br/>免赔额和给付比例由投保人和保险人协商确定，并在保险合同中载明。</div> <h3>保险期间</h3> <div class="clause"><span>第九条</span><br/>除非另有约定，本合同的保险期间起始时刻为下述两个时刻的后者： <ul> <li><i>（1）</i>被保险人提前预订本合同约定的酒店客房、并交纳相关酒店预付房费（或信用卡担保完成）和足额交付保险费时；</li> <li><i>（2）</i>酒店既定入住首日前第 60 天零时。</li> </ul> <p>本合同保险期间的终止时刻以本保险合同载明为准，最晚不超过预付酒店房费之时预定酒店订单载明的被保险人离开该酒店（即预定离店日）当日的24时，但最长不超过12个月。</p> </div> <h3>投保人、被保险人义务</h3> <div class="clause"><span>第十条</span><br/>除另有约定外，投保人应当在保险合同成立时交清保险费，保险费未交清前, 本保险合同不生效，且保险人不承担保险责任。</div> <div class="clause"><span>第十一条</span><br/>订立保险合同，保险人就保险标的或者被保险人的有关情况提出询问的，投保人应当如实告知。投保人故意或者因重大过失未履行前款规定的如实告知义务，足以影响保险人决定是否同意承保或者提高保险费率的，保险人有权解除保险合同。<br />前款规定的合同解除权，自保险人知道有解除事由之日起，超过三十日不行使而消灭。发生保险事故的，保险人应当承担赔偿保险金的责任。<br />投保人故意不履行如实告知义务的，保险人对于合同解除前发生的保险事故，不承担赔偿保险金的责任，并不退还保险费。<br />投保人因重大过失未履行如实告知义务，对保险事故的发生有严重影响的，保险人对于合同解除前发生的保险事故，不承担赔偿保险金的责任，但应当退还保险费。保险人在合同订立时已经知道投保人未如实告知的情况的，保险人不得解除合同；发生保险事故的，保险人应当承担赔偿保险金的责任。</div> <div class="clause"><span>第十二条</span>投保人住所、通讯地址或联系方式变更时，应及时以书面形式通知保险人。投保人未通知的，保险人按本保险合同所载明的最后住所、通讯地址或联系方式发送的有关通知、电子邮件、手机短信等，均视为已发送给投保人。</div> <div class="clause"><span>第十三条</span>在保险期间内，投保人需变更合同其他内容的，应以书面形式向保险人提出申请。保险人同意后出具批单，并在本保险合同中批注。</div> <h3>保险人义务</h3> <div class="clause"><span>第十四条</span>本保险合同成立后，保险人应当及时向投保人签发保险单或其他约定的保险凭证。</div> <div class="clause"><span>第十五条</span>保险人依据本保险合同的约定，认为被保险人提供的有关索赔的证明和资料不完整的，应当及时一次性通知投保人、被保险人补充提供。</div> <div class="clause"><span>第十六条</span>保险人收到被保险人的赔偿保险金的请求后，应当及时对是否属于保险责任作出核定；情形复杂的，应当在三十日内作出核定。对属于保险责任的，在与被保险人达成赔偿保险金的协议后十日内，履行赔偿保险金义务。<br />保险人依照前款约定作出核定后，对不属于保险责任的，应当自作出核定之日起三日内向被保险人发出拒绝赔偿通知书，并说明理由。</div> <div class="clause"><span>第十七条</span> 保险人自收到赔偿保险金的请求和有关证明、资料之日起六十日内，对其赔偿保险金的数额不能确定的，应当根据已有证明和资料可以确定的数额先予支付；保险人最终确定赔偿保险金的数额后，应当支付相应的差额。</div> <h3>赔偿处理</h3> <div class="clause"><span>第十八条</span>被保险人请求赔偿时，应向保险人提供如下证明和材料：</div> <ul> <li><i>（一）</i>保险合同凭据；</li> <li><i>（二）</i>索赔申请书</li> <li><i>（三）</i>被保险人及指定入住的客人的身份证明；</li> <li><i>（四）</i>被保险人向酒店支付的预付房费或信用卡担保扣款凭证，银行卡消费明细、信用卡账单或旅行社出具的预订证明；</li> <li><i>（五）</i>指定入住人取消所预订酒店客房的收据、以及取消酒店的未退款或扣款凭证，银行卡消费明细、信用卡账单等；</li> <li><i>（六）</i>旅行社、酒店出具的证实押金不可退还或罚金的证明原件；</li> <li><i>（七）</i>罚金或押金的发票或收据原件；</li> <li><i>（八）</i>若无法入住原因涉及指定入住人的配偶、父母、子女、随行旅伴，需要提供与指定入住人的关系证明；</li> <li><i>（九）</i>若指定入住人因本保险合同第五条第（一）款中约定的情形之一导致保险事故发生时，应提供能证明保险事故确实发生的证明材料；</li> <li><i>（十）</i>其他与确认保险事故的性质、原因、损失程度等有关的证明和资料；</li> <li><i>（十一）</i>若被保险人委托他人申请的，还应提供授权委托书原件、委托人和受托人的身份证明等相关证明文件。</li> <li>被保险人因特殊原因不能提供以上材料的，应提供其他合法有效的材料。被保险人未履行前款约定的索赔材料提供义务，导致保险人无法核实损失情况的，保险人对无法核实的部分不承担赔偿责任。</li> <li>若保险人可通过第三方平台或其他渠道获得上述信息、资料或数据的，则可相应免除被保险人提交上述材料的义务。</li> </ul> </div> <div class="clause"><span>第十九条</span>被保险人向保险人请求给付保险金的诉讼时效期间为二年，自其知道或者应当知道保险事故发生之日起计算。</div> <h3>合同的解除和争议处理</h3> <div class="clause"><span>第二十条</span>保险责任开始前，投保人要求解除本保险合同的，按照本保险合同约定向保险人支付手续费后，保险人退还保险费。保险责任开始后，本保险合同不可解除。 <p>投保人解除本保险合同时，应提供下列证明文件和资料：</p> <ul> <li><i>（一）</i>保险合同解除申请书；</li> <li><i>（二）</i>保险单原件；</li> <li><i>（三）</i>保险费交付凭证；</li> <li><i>（四）</i>投保人身份证明；</li> <li><i>（五）</i>保险人需要的其它有关文件和资料。</li> </ul> </div> <div class="clause"><span>第二十一条</span>因履行本保险合同发生的争议，由当事人协商解决。协商不成的，提交本保险合同载明的仲裁机构仲裁；本保险合同未载明仲裁机构且争议发生后未达成仲裁协议的，依法向保险人所在地人民法院起诉。</div> <h3></h3> <div class="clause"><span>第二十二条</span> 与本保险合同有关的以及履行本保险合同产生的一切争议处理适用中华人民共和国法律（不包括港澳台地区法律）。</div> </div> <div class="other"> <h3>释义</h3> <p><i>保险人：</i>指众安在线财产保险股份有限公司。</p> <p><i>指定入住人：</i>指被保险人在预订酒店客房时，在酒店预订系统中针对每一独立房间登记全名，并会实际入住该酒店房间的人。</p> <p><i>意外伤害：</i>指以外来的、突发的、非本意的、非疾病的客观事件为直接且单独的原因致使身体受到的伤害。自然死亡、疾病身故、猝死、自杀以及自伤均不属于意外伤害。</p> <p><i>自然灾害：</i>是指雷击、飓风、台风、龙卷风、风暴、暴雨、洪水、冻灾、冰雹、地崩、山崩、雪崩、火山爆发、地面突然下沉下陷以及其他人力不可抗拒的破坏力强大的自然现象。</p> <p><i>台风、飓风：</i>台风指中心附近最大平均风力 12 级或以上，即风速在 32.6 米/秒以上的热带气旋；飓风是一种与台风性质相同、但出现的位置区域不同的热带气旋，台风出现在西北太平 洋海域，而飓风出现在印度洋、大西洋海域。</p> <p><i>航班：</i>是指飞机按规定的航线、日期、时刻的定期飞行。</p> <p><i>延误：</i>指航空公司未能按其对外公布的班期时刻表上列明的到达时间将旅客运达目的地。</p> <p><i>流行疫病：</i>之下列情形之一：</p> <ul> <li><i>（1）</i>旅行目的地政府当局正式对外宣布当地爆发传染病；</li> <li><i>（2）</i>中华人民共和国政府相关部门发出出境公告，声称由于旅行目的地爆发传染病，不建议前往该地；</li> <li><i>（3）</i>WHO宣布发生警告级别为6级的传染病，或虽未到6级但旅行目的地政府当局已经实施关闭边境的行为。</li> </ul> <p><i>严重受伤:</i>指经医院医生诊断及证实所受的伤危及生命且不适宜继续原定行程。</p> <p><i>突发性疾病：</i>指在本条款规定的保险期间内，在旅行时首次罹患的突然发生的急性疾病或出现的症状，并经医院医生诊断及证实罹患的疾病危及生命且不适宜继续原定行程，但不包括本保险合同生效前罹患的任何疾病或出现的任何症状及任何慢性疾病。</p> <p><i>医院：</i>指保险人认可的根据所在国家法律规定合法成立、运营并符合以下标准的医疗机构：</p> <ul> <li><i>（1）</i>主要运营目的是以住院病人形式提供接待患病、受伤的人并为其提供医疗护理和治疗；</li> <li><i>（2）</i>在一名或若干医生的指导下为病人治疗，其中最少有一名合法执业资格的驻院医生驻诊；</li> <li><i>（3）</i>维持足够妥善的设备为病人提供医学诊断和治疗，并于机构内或由其管理的地方提供进行各种手术的设备；</li> <li><i>（4）</i>有合法执业的护士提供和指导二十四小时的全职护理服务。</li> </ul> <p><i>医生：</i>指领有所在地执业医师执照、在医疗机构内行医并拥有处方权的医生（被保险人或指定入住人本人、其配偶或其直系亲属除外）。</p> <p><i>家庭财产:指以下财产：</i></p> <ul> <li><i>（1）</i>房屋及其附属设备和室内装修材料；</li> <li><i>（2）</i>存放于室内的衣着用品、床上用品、家具、用具、家用电器、文化娱乐用品及其他生活资料。</li> </ul> <p><i>配偶：</i>指保险事故发生时与其存有合法婚姻关系的夫或妻。</p> <p><i>随行旅伴：</i>指同指定入住人一同参加旅行之同团伙伴，该伙伴的身份应当为指定入住人之同事、朋友或亲属。</p> <p><i>公共交通工具：</i>指领有当地政府主管部门依法颁发的公共交通营运执照，以收费方式合法载客的以下交通工具：</p> <ul> <li><i>（1）</i>公共汽车、长途汽车、出租车、渡船、气垫船、水翼船、轮船、火车、有轨电车、轨道列车（包括地铁、轻轨及磁悬浮列车）；</li> <li><i>（2）</i>经营固定航班的航空公司经营的来往商业客运机场的固定翼飞机；</li> <li><i>（3）</i>航空公司所经营的且往来商业客运机场之间或有营运执照的直升机站之间营运的直升飞机；</li> <li><i>（4）</i>按固定路线和时间表营运的固定机场客车。</li> </ul> <p>若上述所列的各种公共交通工具用于非公共交通工具的目的和用途，均不符合本保险合同中“公共交通工具”的定义。另政府、企业及私人包机、包车亦不在公共交通工具定义之内。</p> <p><i>旅行目的地的相关警告：</i>出发地为中华人民共和国大陆地区（不包括港澳台地区）的，遵从国家旅游局、外交部发布的劝告和警告；出发地为其他地区的，遵从当地相关管理部门、机构发布的警示信息。</p> <p><i>传染性疾病：</i>指《中华人民共和国传染病防治法》中所指甲类、乙类、丙类传染病及中华人民共和国国务院卫生行政部门决定并公布的需要列入乙类、丙类传染病的其他传染病。</p> <p><i>无当地有效驾驶证：</i>指被保险人存在下列情形之一者：</p> <ul> <li><i>（1）</i>无驾驶证或驾驶证有效期已届满；</li> <li><i>（2）</i>驾驶的机动车与驾驶证载明的准驾车型不符；</li> <li><i>（3）</i>实习期内驾驶公共汽车、营运客车或者载有爆炸物品、易燃易爆化学物品、剧毒或者放射性等危险物品的机动车，实习期内驾驶的机动车牵引挂车；</li> <li><i>（4）</i>持未按规定审验的驾驶证，以及在暂扣、扣留、吊销、注销驾驶证期间驾驶机动车；</li> <li><i>（5）</i>使用各种专用机械车、特种车的人员无有关部门核发的有效操作证，驾驶营业性客车的驾驶人无有关部门核发的有效资格证书；</li> <li><i>（6）</i>依照当地法律法规或交通管理部门有关规定不允许驾驶机动车的其他情况下驾车。</li> </ul> <p><i>无当地有效行驶证指下列情形之一：</i></p> <ul> <li><i>（1）</i>机动车被依法注销登记的；</li> <li><i>（2）</i>无当地交通管理部门核发的行驶证、号牌，或临时号牌或临时移动证的机动交通工具；</li> <li><i>（3）</i>未在规定检验期限内进行机动车安全技术检验或检验未通过的机动交通工具。未依法按时进行或通过机动车安全技术检验。</li> </ul> </div> </div> <div class="page-show" style="display: none;"> <div class="title"> <p>产品展示页面</p> <p>(本页系根据互联网监管规定第8条，在网络平台显著位置列出)</p> </div> <div class="text"> <p>本保险计划通过艺龙官网PC端或APP端（第三方或自营平台名称）进行销售，由众安在线财产保险股份有限公司（简称“众安保险”）承保。</p> <p>保险计划详情</p> <table cellpadding="0" cellspacing="0"> <tr><td class="fir-col">保险名称</td><td class="sec-col">费率</td><td class="thr-col">保障内容</td><td class="fou-col">保险期间</td><td class="fif-col">保额</td></tr> <tr><td>国内酒店取消险（因故取消险）</td><td>5%</td><td>详请参见附件条款</td><td>保险期间起始时刻为以提前预订酒店客房，交纳相关酒店预付房费（或信用卡担保完成）时起，保险期间的终止时刻为指定入住的人员酒店预订离店日期的当日24时。</td><td>现付担保渠道：客观原因导致的取消， 赔付预先支付未使用且无法退回或用信用卡担保所扣除的房费总额的90% ； 预付渠道：客观原因导致的取消， 预先支付未使用且无法退回房费总额的90%。 </td></tr> <tr><td>海外酒店预订取消险</td><td>5%</td><td>详请参见附件条款</td><td>保险期间起始时刻为以提前预订酒店客房，交纳相关酒店预付房费时起，保险期间的终止时刻为指定入住的人员酒店预订离店日期的当日24时。</td><td>预付渠道：客观原因导致的取消， 预先支付未使用且无法退回房费总额的100%。</td></tr> </table> <p>国内酒店取消险、海外酒店取消险保险信息</p> <p>承保公司：众安在线财产保险股份有限公司</p> <h3>一、酒店取消产品基本信息</h3> <div class="clause"> <ul> <li><i>1、</i>国内酒店取消险（因故取消险），适用条款：《众安在线财产保险股份有限公司酒店取消保险条款（众安在线）（备-其他）【2016】（主）035号》，本产品由众安在线财产保险股份有限公司（简称“众安保险”）承保，面向全国区域进行销售。 </li> <li><i>2、</i>海外酒店预订取消险，适用条款：《众安在线财产保险股份有限公司酒店取消保险条款（众安在线）（备-其他）【2016】（主）035号》，本产品由众安在线财产保险股份有限公司（简称“众安保险”）承保，面向全国区域进行销售。 <br /> 保险合同订立的方式：通过互联网订立保险合同（如不是直接购买，产品经理应根据实际情况标出：通过互联网领取保险权益等） <br />本保险产品为您提供电子保单，根据《中华人民共和国合同法》第十一条规定，数据电文是合法的合同的表现形式。投保成功后，通过众安保险官网：www.zhongan.com 查询和下载电子保单。如需纸质保单和发票，请致电众安客服电话：【400-999-9595】，您需提供寄送地址以便我司向您寄送，相应的快递费用将由您承担。快递收费标准请参照：顺丰快递，快递公司调整收费标准的，我司保留调整快递费用的权利。</li> <li><i>3、</i>被保险人及指定入住的客人的身份证明；</li> </ul> </div> <h3>二、在线投保流程（技术服务形式）</h3> <div class="clause"> <ul> <li><i>1、</i>选择保险方案</li> <li><i>2、</i>填写投保信息</li> <li><i>3、</i>确认信息和金额 </li> <li><i>4、</i>在线支付：1).信用卡；2).网上银行；3).现金支付；4).银联手机支付；5).支付宝；6).财付通；7).借记卡；8).直付通 （请产品经理根据实际情况列出）</li> <li><i>5、</i>如对投保流程或保险产品有任何疑问，您可拨打众安客服热线进行咨询。</li> </ul> </div> <h3>三、理赔服务</h3> <p>发生保险事故后，众安保险将为您提供7 x 24 小时理赔申请服务。请参照以下流程申请理赔：</p> <div class="clause"> <ul> <li><i>1、</i>拨打众安客服热线【400-999-9595】； </li> <li><i>2、</i>准备证明保险事故的相关材料；</li> <li><i>3、</i>理赔材料提供方式：邮件提供等；</li> <li><i>4、</i>确属保险责任范围，众安保险在赔付协议达成后【3】天内理赔；</li> <li><i>5、</i>赔款资金将支付至被保险人账户或受益人账户。</li> </ul> </div> <h3>四、保单变更和退保</h3> <div class="clause"> <ul> <li><i>1、</i>如需更新您的客户信息或变更保险合同，请拨打众安客服热线；</li> <li><i>2、</i>退保流程<br /> 本保险产品一经投保即生效，不可退保。 </li> </ul> </div> <h3>五、个人信息承诺</h3> <div class="clause"> <ul> <li>我们严格遵守现行的关于个人信息、数据及隐私保护的法律法规，采取充分的技术手段和制 度管理，保护您提供给我们的个人信息、数据和隐私不受到非法的泄露或披露给未获授权的第三方。您还可以登录众安保险官网：www.zhongan.com查阅众安隐私声明。 </ul> </div> </div> </div>')}()},function(s,l,a){a.exports=function(){return i("hotelfx@1.1.0/entry/hotel/tpl/template.js")("insurance",'<div class="insuranceInfoShow" > <div class="intro"> <div class="clause"> <span>保险名称：</span> 艺龙国内酒店取消险； </div> <div class="clause"> <span>保险公司：</span> 太平财产保险股份有限公司、众安在线财产保险股份有限公司、中国人民财产保险股份有限公司； </div> <div class="clause"> <span>保险经纪公司：</span> 深圳众诚泰保险经纪有限公司、网金保险销售服务有限公司、中元保险经纪有限公司； </div> <div class="clause"> <span>产品备案号：</span> （太平财产）（备-普通家财险）[2016]（主）009号，（众安在线）（备-其他）【2016】（主）035号，(人保财险)（备-家财）[2014]主24号； </div> <div class="clause"> <span>销售区域：</span> 全国 </div> <div class="clause"> <span>份数限额：</span> 每订单只能投保一份，不得重复投保； </div> <div class="clause clause1"> <span>保险金额：</span> 预先支付未使用且无法退回的房费总额的90%（保险订单）； </div> <div class="clause clause1"> <span>保险费：</span> 订单预付总房费的5%（四舍五入取整到分，保险金额不包含使用优惠券抵扣的金额，以实际支付的金额计算）； </div> <div class="clause"> <span>投保范围：</span> 身体健康，在持有营业执照的宾馆、饭店、招待所、旅社登记住宿的旅客均可作为被保险人参加本保险； </div> <div class="clause"> <span>投保人义务：</span> 恶意投保、恶意理赔将依法追究责任； </div> <div class="clause"> <span>发票：</span> 如需保险发票，请联系保险公司索取 </div> <div class="clause"> <span>电子保单：</span> 数据电文是合法的合同表现形式，电子保单与纸质保单具有同等法律效力，电子保单下载地址： <p>太平保险http://ebiz.tpi.cntaiping.com/TPEBizWeb/pages/B2C/show/dentistryShow.do</p> <p>众安保险https://www.zhongan.com/open/policy/policySearch14</p> <p>中国人保http://www.epicc.com.cn/</p> </div> <div class="clause"> <span>保险责任：</span> 在本合同的保险期间内，被保险人提前预订本合同约定的酒店客房，在预订及支付预付房费或信用卡担保完成后，因发生下列情形致使指定入住的客人无法按期使用酒店服务而取消所预订的客房所造成被保险人无法退回的预付房费金额损失或信用卡担保金额损失，保险人在保险金额内按本合同约定比例赔偿被保险人： <ul> <li> <i>1.</i>指定入住的客人遭遇意外伤害事故或罹患突发性重病导致必须住院治疗或身故； </li> <li> <i>2.</i>指定入住的客人、客人之配偶、父母或子女遭遇意外伤害事故或罹患突发性重病导致必须住院治疗或身故； </li> <li> <i>3.</i>指定入住的客人或其配偶初次被诊断出怀孕； </li> <li> <i>4.</i>酒店入住首日之前 7 天内，指定入住的客人在中国境内的日常住所因火灾、爆炸、自然灾害等原因遭受严重损毁； </li> <li> <i>5.</i>酒店入住首日之前 7 天内，酒店所在地发生 5 级以上地震； </li> <li> <i>6.</i>酒店入住首日之前 7天内，酒店所在地气象部门发布台风、飓风预警信号； </li> <li> <i>7.</i>指定入住的客人提前预订的前往酒店所在地机场的航班（航空公司对外公布的班期时刻表上列明的该航班到达时间须至少早于已预订酒店客房的最迟入住时间 4小时以上）延误或取消，导致该客人无法按期抵达酒店所在地； </li> <li> <i>8.</i>指定入住的客人在预订酒店之前报名参加的原定于酒店入住首日及之后三天内于酒店所在地进行的国家级考试延期举行。 </li> <li> <i>9.</i>酒店入住首日前7日内因指定入住的客人计划乘坐的公共交通工具突发承运人雇员罢工、暴动致使被保险人取消酒店预订； </li> <li> <i>10.</i>酒店入住首日前7日内因酒店所在地发生不可预测的暴动、民间骚乱或流行疫病； </li> <li> <i>11.</i>酒店入住首日之前7 天指定入住的客人出发地官方已发布了针对该旅行目的地的相关警告； </li> <li> <i>12.</i>指定入住的客人的签证拒签，导致该客人无法继续原定行程; </li> <li> <i>13.</i>在酒店入住首日前2天内，指定入住的客人自驾前往酒店所在地途中，车辆意外抛锚须救援公司救援; </li> <li> <i>14.</i>指定入住的客人因获得新的工作或职业培训或出差安排，导致客人无法按期抵达酒店; </li> <li> <i>15.</i>酒店入住首日前30天内，指定入住的客人作为全职雇员因与雇主间的雇佣关系意外终止，导致客人无法按期抵达酒店。 </li> <li> <i>16.</i>酒店入住首日前7日，指定入住的客人有效证件丢失，无法办理入住手续； </li> <li> <i>17.</i>指定入住的客人因被疑似或确诊感染传染性疾病而依法被隔离无法继续原定行程； </li> <li> <i>18.</i>指定入住的客人被劫持、绑架； </li> <li> <i>19.</i>被保险人购买本保险后，酒店所在地发生恐怖袭击活动且满足下列条件: <ul class="detail-19"> <li> <i>a)</i>恐怖袭击活动发生地距离指定入住的客人酒店所在地在方圆150公里以内； </li> <li> <i>b)</i>恐怖袭击活动发生在指定入住的客人出发之日前30天内； </li> <li> <i>c)</i>当地政府已经对此类恐怖袭击活动发布过警告的。 </li> </ul> </li> </ul> </div> <div class="clause"> <span>责任免除：</span> </div> <div class="clause"> <span></span> 因下列情形之一，直接或间接导致被保险人无法按期使用酒店服务而取消所预订的客房所造成的被保险人预付房费金额或信用卡担保金额损失的，保险人不承担给付保险金责任： </div> <ul class="unresponsibility"> <li> <i>1.</i>预订酒店之前发生的保险责任列明的情形； </li> <li> <i>2.</i>被保险人或指定入住的客人的故意行为； </li> <li> <i>3.</i>由于旅行社、酒店原因导致的酒店客房预订失败或误订； </li> <li> <i>4.</i>指定入住的客人因保险责任列明的情形之外的原因未准时办理酒店客房入住手续； </li> <li> <i>5.</i>指定入住的客人或其配偶、父母、子女因投保前存在的健康问题导致的急性发作或死亡； </li> <li> <i>6.</i>指定入住的客人未准时搭乘前往酒店所在地的既定公共交通工具； </li> <li> <i>7.</i>指定入住的客人非以缴费乘客身份搭乘民航航班； </li> <li> <i>8.</i>指定入住的客人搭乘航班所属的航空公司破产或倒闭； </li> <li> <i>9.</i>指定入住的客人主动放弃搭乘航空公司安排的在原定起飞时间之时起 4 小时内出发的同一机场内其它航班； </li> <li> <i>10.</i>由于保险责任以外的原因导致的机场关闭； </li> <li> <i>11.</i>被保险人或指定入住的客人投保前存在的财务或合同义务问题； </li> <li> <i>12.</i>指定入住的客人或随行人员的违法犯罪行为； </li> <li> <i>13.</i>战争（不论宣战与否）、内战、军事行动、恐怖活动、暴乱、绑架或其他类似的武装叛乱； </li> <li> <i>14.</i>流行疫病或大规模流行疫病爆发； </li> <li> <i>15.</i>地震、海啸，但本合同另有规定的除外； </li> <li> <i>16.</i>政府的禁令或管制； </li> <li> <i>17.</i>本合同生效前，指定入住的客人身体状况不适合出行或发生任何可能直接或间接导致客人无法按期入住酒店的情况； </li> <li> <i>18.</i>任何生物、化学、原子能武器，原子能或核能装置所造成的爆炸、灼伤、污染或辐射； </li> <li> <i>19.</i>恐怖袭击。 </li> <li> <i>20.</i>被保险人因退改所预订的酒店房间所引起的间接费用、可从酒店获得退回的房款，以及其他不属于保险责任范围内的损失，保险人不负责赔偿。 </li> </ul> </div> <div class="tip"> 具体内容请以保险公司条款为准，请点击页面查看各保险公司的保险条款链接： <p> 《太平财产保险有限公司酒店预订取消险B款条款》 <a href="#" class=\'checkhere\'>点击查看</a> </p> <p> 《众安在线财产保险股份有限公司酒店取消保险条款》 <a href="#" class="clicklook">点击查看</a> </p> <p> 《中国人民财产保险股份有限公司酒店取消保险条款》 <a href="#" class="clickwatch">点击查看</a> </p> </div> <ul class="other-explain"> <h3>各保险公司客服：</h3> <li>太平财产保险股份有限公司：95589</li> <li>众安在线财产保险股份有限公司： 4009999595、10109955</li> <li>中国人民财产保险股份有限公司： 95518</li> </ul> <ul class="other-explain"> <h3>其他重要说明:</h3> <li> <i>1.</i>保险单出单保即生效，生效后不可退单； </li> <li> <i>2.</i>被保险人在理赔时，需要提供证明损失原因的相关证明材料； </li> <li> <i>3.</i>投保人默认为被保险人及受益人，为保障您的权益，请勿使用他人账户付款 </li> </ul> </div>')}()},function(s,l,a){a.exports=function(){
return i("hotelfx@1.1.0/entry/hotel/tpl/template.js")("zgrmcc",'<div class="tpybx"> <div class="title"> <p>中国人民财产保险股份有限公司</p> <p>酒店取消保险条款</p> </div> <div class="text"> <h3>总则</h3> <div class="clause"><span>第一条</span>本保险合同由保险条款、投保单、保险单、保险凭证以及批单组成。凡涉及本保险合同的约定，均应采用书面形式。</div> <div class="clause"><span>第二条</span>被保险人为在预定本保险合同约定的酒店客房时，实际支付预付房费或用信用卡担保的一方。</div> <h3>保险标的</h3> <div class="clause"><span>第三条</span>本保险合同的保险标的为被保险人因取消本保险合同约定的预定酒店客房导致的实际费用损失。</div> <h3>保险责任</h3> <div class="clause"><span>第四条</span>在保险期间内，被保险人提前预订本保险合同约定的酒店客房，在支付预付房费或信用卡担保完成后，因发生下列原因，致使指定入住的客人无法按期使用酒店服务，而取消所预订的客房，且按照该酒店的规定无法退回住宿定金或押金，造成被保险人预付房费的损失或信用卡担保金额的损失，保险人按照本保险合同的约定赔偿被保险人:</div> <div class="clause"><span>（一）指定入住的客人身故、遭遇意外伤害事故致严重受伤或罹患突发性疾病，经当地医院医生诊断不宜继续原定行程;</span></div> <div class="clause"><span>（二）指定入住客人的配偶、父母、子女及旅行伙伴在本保险合同生效后身故、遭遇意外伤害事故导致严重受伤或罹患突发性疾病;</span></div> <div class="clause"><span>（三）酒店入住首日前7天内，指定入住的客人在中国境内的日常住所因火灾、雷击、台风、龙卷风、暴风、洪水、地震、自来水管道、下水管道、暖气管道（含暖气片）突然破裂，或者因盗窃或抢劫造成其日常居住地的室内家庭财产损失，且指定入住的人员无法继续原定行程;</span></div> <div class="clause"><span>（四）酒店入住首日前7天内，酒店所在地气象部门发布酒店入住日的自然灾害预警信号，且无法继续原定行程;</span></div> <div class="clause"><span>（五）酒店入住首日前十五日内因下列事故之一而致使被保险人取消酒店预订：</span> <ul class="detail-7"> <li><i>1、</i>指定入住的客人计划乘坐的公共交通工具突发承运人雇员罢工、暴动；</li> <li><i>2、</i>酒店所在地发生不可预测的暴动、民间骚乱或流行疫病；</li> <li><i>3、</i>购买本保险后，指定入住的客人出发地官方已发布了针对该旅行目的地的相关警告；</li> </ul> </div> <div class="clause"><span>（六）指定入住的客人因学校课程或考试安排变更，或者在预订酒店之前报名参加的原定于酒店入住首日及之后三天内于酒店所在地进行的国家级考试延期举行;</span></div> <div class="clause"><span>（七）指定入住的客人的签证拒签，导致该客人无法继续原定行程;</span></div> <div class="clause"><span>（八）指定入住的客人或其配偶怀孕，且须在被保险人酒店预订后才诊断出或指定入住的客人或其配偶因妊娠并发症，且经当地医院医生诊断不宜继续原定行程;</span></div> <div class="clause"><span>（九）在酒店入住首日前2天内，指定入住的客人自驾前往酒店所在地途中，车辆意外抛锚须救援公司救援;</span></div> <div class="clause"><span>（十）指定入住的客人因获得新的工作或职业培训或出差安排，导致客人无法按期抵达酒店;</span></div> <div class="clause"><span>（十一）在酒店入住首日，指定入住的客人所乘坐的前往酒店所在地既定航班（航空公司对外公布的班期时刻表上列明的该航班到达时间须至少早于已预订酒店的最迟入住时间4小时以上）的取消或延误达4小时以上;</span></div> <div class="clause"><span>（十二）酒店入住首日前7天内，酒店所在地发生5级（含）以上地震;</span></div> <div class="clause"><span>（十三）酒店入住首日前30天内，指定入住的客人作为全职雇员因与雇主间的雇佣关系意外终止，导致客人无法按期抵达酒店。</span></div> <div class="clause"><span>（十四）酒店入住首日前7日，指定入住的客人有效证件丢失，无法办理入住手续；</span></div> <div class="clause"><span>（十五）指定入住的客人因被疑似或确诊感染传染性疾病而依法被隔离无法继续原定行程；</span></div> <div class="clause"><span>（十六）指定入住的客人被劫持、绑架；</span></div> <div class="clause"><span>（十七）被保险人购买本保险后，酒店所在地发生恐怖袭击活动且满足下列条件：</span> <ul class="detail-7"> <li><i>1、</i>恐怖袭击活动发生地距离指定入住的客人酒店所在地在方圆150公里以内；</li> <li><i>2、</i>恐怖袭击活动发生在指定入住的客人出发之日前30天内；</li> <li><i>3、</i>当地政府已经对此类恐怖袭击活动发布过警告的。</li> </ul> </div> <h3>责任免除</h3> <div class="clause"><span>第五条</span>因下列原因之一，直接或间接导致指定入住的客人无法按期使用酒店服务，而取消所预定的客房所造成的被保险人预付房费金额或信用卡担保金额的损失，保险人不负责赔偿：</div> <div class="clause"><span>（一）被保险人或指定入住的客人的故意行为或犯罪行为；</span></div> <div class="clause"><span>（二）由于旅行社、酒店原因导致的酒店客房预订失败或预订错误；</span></div> <div class="clause"><span>（三）发生航班取消或航班延误，指定入住的客人主动放弃搭乘航空公司安排的，在原定到达时间4小时（不含）以内到达酒店所在城市的航班；</span></div> <div class="clause"><span>（四）核辐射、核爆炸、核污染及其他放射性污染；</span></div> <div class="clause"><span>（五）被保险人或指定入住的客人的自致伤害或自杀，但自杀时为无民事行为能力人的除外；</span></div> <div class="clause"><span>（六）被保险人、指定入住的客人或其直系家庭成员、随行人员实施了犯罪行为；</span></div> <div class="clause"><span>（七）被保险人未能提供旅行社、酒店出具的证实押金不可退还或罚金的证明原件；</span></div> <div class="clause"><span>（八）被保险人未能提供罚金或押金的发票原件；</span></div> <div class="clause"><span>（九）被保险人购买本保险前，被保险人出发地官方已发布了针对该旅行目的地的相关警告。</span></div> <div class="clause"><span>第六条</span>下列损失、费用，保险人也不负责赔偿：</div> <div class="clause"><span>（一）被保险人违背医嘱引起的损失；</span></div> <div class="clause"><span>（二）指定入住的客人已经办理酒店入住后取消酒店预订的损失；</span></div> <div class="clause"><span>（三）当必须取消酒店预订时，被保险人未能在约定时间(以保险单载明时间为准)前申请取消预订的酒店而造成的损失；</span></div> <div class="clause"><span>（四）由于政府禁令或管制，政府或法律规定引起的损失；</span></div> <div class="clause"><span>（五）被保险人在预订住宿时已意识到或应当意识到任何将可能导致酒店住宿预订取消的情况或条件，包括但不限于当时已经宣布或已经发生的任何罢工或其他工人抗议活动，以及当时已经发生的任何恶劣天气或自然灾害而引起的损失；</span></div> <div class="clause"><span>（六）任何可以从其他保险计划，政府项目，酒店、公共交通工具承运人、旅行社或其它旅行公司等予以退款或赔偿的损失；</span></div> <div class="clause"><span>（七）被保险人若以信用卡签账方式支付预定酒店费用后，已按信用卡发卡机构的相关规定，提交声明书请求发卡银行暂停付款或将其缴付款项扣回时引起的损失；</span></div> <div class="clause"><span>（八）被保险人因退改所预订的酒店房间所引起的订购接送站车辆等间接费用；</span></div> <div class="clause"><span>（九）本保险合同中载明的免赔额以及按本保险合同中载明的免赔率计算的免赔额，两者以高者为准。</span></div> <h3>保险金额与免赔额（率）</h3> <div class="clause"><span>第七条</span>保险金额由投保人参照保险标的的价值自行确定，并在保险单中载明。</div> <div class="clause"><span>第八条</span>免赔额（率）由投保人与保险人在订立保险合同时协商确定，并在保险单中载明。</div> <h3>保险期间</h3> <div class="clause"><span>第九条</span>除另有约定外，本保险合同保险期间的起止时间为下述两个时间发生较晚者：</div> <div class="clause"><span>（一）被保险人购买本保险、并交纳保险费时；</span></div> <div class="clause"><span>（二）旅行开始前第30天零时。</span></div> <div class="clause">保险期间的截止时间为指定入住的客人酒店预订入住日期的当日24时，具体以保险单载明为准。</div> <h3>保险人义务</h3> <div class="clause"><span>第十条</span>本保险合同成立后，保险人应当及时向投保人签发保险单或其他保险凭证。</div> <div class="clause"><span>第十一条</span>保险事故发生后，投保人、被保险人提供的有关索赔的证明和资料不完整的，保险人应当及时一次性通知投保人、被保险人补充提供。</div> <div class="clause"><span>第十二条</span>保险人收到被保险人的赔偿请求后，应当及时就是否属于保险责任作出核定，并将核定结果通知被保险人。</div> <h3>投保人、被保险人义务</h3> <div class="clause"><span>第十三条</span>除本保险合同另有约定外，投保人应在保险合同成立时一次交清保险费。</div> <div class="clause"><span>第十四条</span>保险事故发生时，被保险人应当尽力采取必要的措施，防止或者减少损失。投保人、被保险人知道保险事故发生后，应当及时通知保险人。</div> <div class="clause"><span>第十五条</span>发生保险责任范围内的损失，应由有关责任方负责赔偿的，被保险人应行使或者保留向该责任方请求赔偿的权利。</div> <div class="clause">在保险人向有关责任方行使代位请求赔偿权利时，被保险人应当向保险人提供必要的文件和其所知道的有关情况。</div> <div class="clause"><span>第十六条</span>被保险人向保险人请求赔偿时，应提交以下单证：</div> <div class="clause"><span>（一）保险单正本；</span></div> <div class="clause"><span>（二）指定入住的客人身份证复印件；</span></div> <div class="clause"><span>（三）被保险人向酒店支付的预付房费或信用卡担保扣款凭证，银行卡消费明细、信用卡账单或旅行社出具的预订证明；</span></div> <div class="clause"><span>（四）被保险人或指定入住的客人取消所预订酒店客房的收据、以及取消酒店的未退费或扣款凭证，银行卡消费明细、信用卡账单等；</span></div> <div class="clause"><span>（五）如指定入住的客人因本保险合同第四条中约定的情形之一导致保险事故发生时，应提供能证明保险事故确实发生的证明材料；</span></div> <div class="clause"><span>（六）投保人、被保险人所能提供的其他与确认保险事故的性质、原因、损失程度等有关的证明和资料。</span></div> <h3>赔偿处理</h3> <div class="clause"><span>第十七条</span>发生保险责任范围内的损失，保险人以支付保险金的方式赔偿。</div> <div class="clause"><span>第十八条</span>发生保险责任范围内的损失时，保险人按照其实际损失扣除保险单载明的免赔额（率）后，在保险金额范围内计算赔偿。</div> <h3>争议处理和法律适用</h3> <div class="clause"><span>第十九条</span>合同争议解决方式由当事人在合同约定从下列两种方式中选择一种：</div> <div class="clause"><span>（一）因履行本合同发生的争议，由当事人协商解决，协商不成的，提交保险单载明的仲裁委员会仲裁；</span></div> <div class="clause"><span>（二）因履行本合同发生的争议，由当事人协商解决，协商不成的，依法向人民法院起诉。</span></div> <div class="clause"><span>第二十条</span>与本保险合同有关的以及履行本保险合同产生的一切争议处理适用中华人民共和国法律（不包括港澳台地区法律）。</div> <h3>其他事项</h3> <div class="clause"><span>第二十一条</span>本保险责任范围内的费用如涉及外币，均以该费用发生当日中国人民银行公布的相应外汇基准价折算人民币赔付。</div> <div class="clause"><span>第二十二条</span>本保险合同约定与《中华人民共和国保险法》等法律规定相悖之处，以法律规定为准。本保险合同未尽事宜，以法律规定为准。</div> <h3>释义</h3> <div class="clause"><span>第二十三条</span>本保险合同涉及下列术语时，适用下列释义：</div> <div class="clause"><span>（一）指定入住的客人：指被保险人在预订酒店客房时，在酒店预订系统中针对每一独立房间登记全名，并将实际入住该房间的客人。</span></div> <div class="clause"><span>（二）意外伤害：指以外来的、突发的、非本意的和非疾病的客观事件为直接且单独的原因致使身体受到的伤害。</span></div> <div class="clause"><span>（三）严重受伤:指经医院医生诊断及证实所受的伤危及生命及不适宜继续原定行程。</span></div> <div class="clause"><span>（四）突发性疾病：被保险人在本条款规定的保险期间内，在旅行时内首次罹患的突然发生的急性疾病或出现的症状，并经医院医生诊断及证实被保险人罹患的疾病危及被保险人生命及不适宜继续原定行程，但不包括本保险合同生效前罹患的任何疾病或出现的任何症状及任何慢性疾病。</span></div> <div class="clause"><span>（五）医院分为以下两种：</span> <ul class="detail-7"> <li><i>1、</i>在中华人民共和国境内（不包括香港、澳门、台湾地区）的医院是指经中华人民共和国卫生部门评审确定的二级或以上的公立医院或投保人与保险人协商共同指定的医院或医疗机构。</li> <li><i>2、</i>在中华人民共和国境外（包括香港、澳门、台湾地区）的医院是指保险人认可的，根据所在国家法律合法成立、运营并符合以下标准的医疗机构：</li> <li><i>（1）</i>主要运营目的是以住院形式提供接待病人并为其提供医疗护理和治疗；</li> <li><i>（2）</i>在一名或若干医生的指导下为病人治疗，其中至少有一名拥有合法执业资格的驻院医生驻诊；</li> <li><i>（3）</i>维持足够妥善的设备为病人提供医学诊断和治疗，并于机构内或由其管理的地方提供进行各种手术的设备；</li> <li><i>（4）</i>有合法执业的护士提供和指导二十四小时的全职护理服务。</li> <li><i>3、</i>本保险合同及相关附加险合同中所指医院不包括以下或类似的医疗机构：</li> <li><i>（1）</i>精神病院；</li> <li><i>（2）</i>老人院、疗养院、戒毒中心和戒酒中心；</li> <li><i>（3）</i>健康中心或天然治疗所、疗养或康复院。</li> </ul> </div> <div class="clause"><span>（六）医生：指领有所在地执业医师执照、在医疗机构内行医并拥有处方权的医生（被保险人本人、其配偶或其直系亲属除外）。</span></div> <div class="clause"><span>（七）配偶：指保险事故发生时与其存有合法婚姻关系的夫或妻。</span></div> <div class="clause"><span>（八）旅行伙伴：是指投保人签订本保险合同前，已经安排的75%以上的行程中与其同行的人员。</span></div> <div class="clause"><span>（九）日常居住地：指离开住所地开始该次旅行时已连续居住了三个月以上的住所。</span></div> <div class="clause"><span>（十）室内家庭财产包括以下财产：</span> <ul class="detail-7"> <li><i>1、</i>房屋及其附属设备和室内装修材料；</li> <li><i>2、</i>存放于室内的衣着用品、床上用品、家具、用具、家用电器、文化娱乐用品及其他生活资料。</li> </ul> </div> <div class="clause"><span>（十一）公共交通工具:指领有当地政府主管部分依法颁发的公共交通营运执照，以收费方式合法载客的以下交通工具：</span> <ul class="detail-7"> <li><i>1、</i>公共汽车、长途汽车、渡船、气垫船、水翼船、轮船、火车、有轨电车、轨道列车（包括地铁、轻轨及磁悬浮列车）；</li> <li><i>2、</i>经营固定航班的航空公司经营的来往商业客运机场的固定翼飞机；</li> <li><i>3、</i>航空公司所经营的且往来商业客运机场之间或有营运执照的直升机站之间营运的直升飞机；</li> <li><i>4、</i>按固定路线和时间表营运的固定机场客车。</li> <li>公共交通工具不包括出租车。</li> <li>若上述所列的各种公共交通工具用于非公共交通工具的目的和用途，均不符合本条款中“公共交通工具”的定义。另政府、企业及私人包机亦不在公共交通工具定义之内。</li> </ul> </div> <div class="clause"><span>（十二）旅行目的地的相关警告：出发地为中华人民共和国大陆地区（不包括港澳台地区），遵从国家旅游局、外交部发布的劝告和警告级别的国家和地区；出发地为中华人民共和国香港特别行政区，遵从香港保安局发布的红色警示和黑色警示的国家和地区。</span></div> </div> </div>')}()}]});define("hotelfx@1.1.0/entry/hotel/js/plugins/storage_cache.js",document.currentScript.src,function(t,e){return[function(t,e,o){o.exports=function(){var t=function(t){var e={key:"order_loc",timeout:12e5};this.settings=$.extend(e,t)};return t.prototype={getData:function(){var t=JSON.parse(localStorage.getItem(this.settings.key));if(t&&"object"==typeof t&&t.timestamp+this.settings.timeout>(new Date).getTime())return t},setData:function(t){"object"==typeof t&&t?(t.timestamp=(new Date).getTime(),localStorage.setItem(this.settings.key,JSON.stringify(t))):console.log("StorageCache set Data should be object")}},t}()}]});define("hotelfx@1.1.0/entry/hotel/js/plugins/getMvtResult.js",document.currentScript.src,function(t,n){return[function(t,n,e){e.exports=function(){return function(t){for(var n={},e=window.TJObject&&window.TJObject.mvt&&JSON.parse(window.TJObject.mvt)||[],r=0;r<e.length;r++)e[r].eid==t&&(n=e[r]);return n}}()}]});define("hotelfx@1.1.0/entry/hotel/js/wxjssdk.js",document.currentScript.src,function(e,n){return[function(n,i,t){function o(){this.init()}var r=n(1),c=e("hotelfx@1.1.0/src/js/dialog.js"),a=n(2);o.prototype={constructor:o,runstack:[],errorNum:0,init:function(){if(navigator.userAgent.match(/micromessenger/i)){var e=this;window.wx=r,r.run=function(n,i){r.isLoad?r.ready(function(){r[n](i)}):e.runstack.push([n,i])},e.getSignature()}},getSignature:function(){var e="//xapi.elong.com/index/signature?url="+encodeURIComponent(window.location.href.split("#")[0]),n=this;$.ajax({url:e,type:"GET",cache:!0,success:function(e){n.signatureCallback.call(n,e)}})},signatureCallback:function(e){var n=this;r.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["closeWindow","openLocation","getLocation","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQZone","cache"]}),r.isLoad=!0;for(var i=0;i<this.runstack.length;i++)r.run.apply(void 0,this.runstack[i]);this.runstack=[];var t=!1;r.ready(function(){r.hideAllNonBaseMenuItem(),n.listener(),t=!0}),r.error(function(e){console.log(e.errMsg),t||(n.errorNum<3?(n.getSignature(),console.log("重试")):3===n.errorNum&&c.confirm({content:">_< 貌似网络失败了~，请重新尝试一下~~",text:["取消","重试"]}),n.errorNum++)})},listener:function(){var e=window.slark&&window.slark.getActiveId()||"";r.hideAllNonBaseMenuItem(),"orderlist"!==e&&"h5_finishorder"!==e&&"orderdetail"!==e&&(r.showMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline","menuItem:favorite"]}),r.onMenuShareTimeline({trigger:function(){var e=window.slark&&window.slark.getActiveId()||"",n=a[e]();this.title=n.title,this.link=n.link,this.imgUrl=n.imgUrl},success:function(){},fail:function(){},cancel:function(){},complete:function(){}}),r.onMenuShareAppMessage({trigger:function(){var e=window.slark&&window.slark.getActiveId()||"",n=a[e]();this.title=n.title,this.desc=n.desc,this.link=n.link,this.imgUrl=n.imgUrl},success:function(){},fail:function(){},cancel:function(){},complete:function(){}}),r.onMenuShareQZone({trigger:function(){var e=window.slark&&window.slark.getActiveId()||"",n=a[e]();this.title=n.title,this.desc=n.desc,this.link=n.link,this.imgUrl=n.imgUrl},success:function(){},fail:function(){},cancel:function(){},complete:function(){}}))}};var s=new o,l=null;History.Adapter.bind(window,"statechange",function(){clearTimeout(l),l=setTimeout(function(){window.wx&&s.getSignature()},100)})},function(e,n,i){!function(e,n){"function"==typeof define&&(define.amd||define.cmd)?i.exports=function(){return n(e)}():n(e,!0)}(window,function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(i),function(e){c(n,e,t)}):l(n,t)}function t(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)}):t?l(n,t):l(n,i)}function o(e){return e=e||{},e.appId=C.appId,e.verifyAppId=C.appId,e.verifySignType="sha1",e.verifyTimestamp=C.timestamp+"",e.verifyNonceStr=C.nonceStr,e.verifySignature=C.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,n,i){var t,o;switch("openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail,t=n.errMsg,t||(t=n.err_msg,delete n.err_msg,t=a(e,t),n.errMsg=t),i=i||{},i._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",C.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n)),o=t.indexOf(":"),t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function a(e,n){var i,t,o=e,r=g[o];return r&&(o=r),i="ok",n&&(t=n.indexOf(":"),i=n.substring(t+1),"confirm"==i&&(i="ok"),"failed"==i&&(i="fail"),-1!=i.indexOf("failed_")&&(i=i.substring(7)),-1!=i.indexOf("fail_")&&(i=i.substring(5)),i=i.replace(/_/g," "),i=i.toLowerCase(),("access denied"==i||"no permission to execute"==i)&&(i="permission denied"),"config"==o&&"function not exist"==i&&(i="ok"),""==i&&(i="fail")),n=o+":"+i}function s(e){var n,i,t,o;if(e){for(n=0,i=e.length;i>n;++n)t=e[n],(o=m[t])&&(e[n]=o);return e}}function l(e,n){if(!(!C.debug||n&&n.isInnerInvoke)){var i=g[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function d(){if(!(S||k||C.debug||"6.0.2">A||M.systemType<0)){var e=new Image;M.appId=C.appId,M.initTime=x.initEndTime-x.initStartTime,M.preVerifyTime=x.preVerifyEndTime-x.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(n){M.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;e.src=i}})}}function u(){return(new Date).getTime()}function p(n){_&&(e.WeixinJSBridge?n():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",n,!1))}function f(){WeixinJSBridge&&WeixinJSBridge.invoke("publicCache",{src:"http://res.wx.qq.com/open/libs/jweixin/1.1.0/jweixin.json"},function(){})}var m,g,h,w,I,y,S,k,_,T,v,A,x,M,C,b,U,L;if(!e.jWeixin)return m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},g=function(){var e,n={};for(e in m)n[m[e]]=e;return n}(),h=e.document,w=h.title,I=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),S=!(!y.match("mac")&&!y.match("win")),k=-1!=I.indexOf("wxdebugger"),_=-1!=I.indexOf("micromessenger"),T=-1!=I.indexOf("android"),v=-1!=I.indexOf("iphone")||-1!=I.indexOf("ipad"),A=function(){var e=I.match(/micromessenger\/(\d+\.\d+\.\d+)/)||I.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),x={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:3,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v?1:T?2:-1,clientVersion:A,url:encodeURIComponent(location.href)},C={},b={_completes:[]},U={state:0,data:{}},L={config:function(e){C=e,l("config",e);var n=!1!==C.check;p(function(){var e,t,o;if(n)i(m.config,{verifyJsApiList:s(C.jsApiList)},function(){b._complete=function(e){x.preVerifyEndTime=u(),U.state=1,U.data=e},b.success=function(){M.isPreVerifyOk=0},b.fail=function(e){b._fail?b._fail(e):U.state=-1};var e=b._completes;return e.push(function(){d()}),b.complete=function(){for(var n=0,i=e.length;i>n;++n)e[n]();b._completes=[]},b}()),x.preVerifyStartTime=u();else{for(U.state=1,e=b._completes,t=0,o=e.length;o>t;++t)e[t]();b._completes=[]}})},ready:function(e){0!=U.state?e():(b._completes.push(e),!_&&C.debug&&e())},error:function(e){"6.0.2">A||(-1==U.state?e(U.data):b._fail=e)},checkJsApi:function(e){var n=function(e){var n,i,t=e.checkResult;for(n in t)(i=g[n])&&(t[i]=t[n],delete t[n]);return e};i("checkJsApi",{jsApiList:s(e.jsApiList)},function(){return e._complete=function(e){if(T){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=n(e)},e}())},cache:function(e){i("cache",{async:!1!==e.async,src:e.src||"",base:e.base||"",resourceList:e.resourceList||[],disable:e.disable||!1},e)},invoke:function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(i),t)},on:function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)},getWXUrl:function(n){p(function(){var i={errMsg:"getWXUrl:ok"},t=e.getA8KeyUrl;t?(i.url=t,n(i)):wx.on("onGetA8KeyUrl",function(e){i.url=e.url,n(i)})})},onMenuShareTimeline:function(e){t(m.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||w,desc:e.title||w,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){t(m.onMenuShareAppMessage,{complete:function(){i("sendAppMessage",{title:e.title||w,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){t(m.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){t(m.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){t(m.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||w,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){t("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){t("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},function(){return e._complete=function(e){if(T){var n=e.localIds;n&&(e.localIds=JSON.parse(n))}},e}())},previewImage:function(e){i(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getNetworkType:function(e){var n=function(e){var n,i,t,o=e.errMsg;if(e.errMsg="getNetworkType:ok",n=e.subtype,delete e.subtype,n)e.networkType=n;else switch(i=o.indexOf(":"),t=o.substring(i+1)){case"wifi":case"edge":case"wwan":e.networkType=t;break;default:e.errMsg="getNetworkType:fail"}return e};i("getNetworkType",{},function(){return e._complete=function(e){e=n(e)},e}())},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(m.getLocation,{type:e.type||"wgs84"},function(){return e._complete=function(e){delete e.type},e}())},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){e=e||{},i("closeWindow",{},e)},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){e=e||{},i("scanQRCode",{needResult:e.needResult||0,scanType:e.scanType||["qrCode","barCode"]},function(){return e._complete=function(e){var n,i;v&&(n=e.resultStr)&&(i=JSON.parse(n),e.resultStr=i&&i.scan_code&&i.scan_code.scan_result)},e}())},openProductSpecificView:function(e){i(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){var n,t,o,r,c=e.cardList,a=[];for(n=0,t=c.length;t>n;++n)o=c[n],r={card_id:o.cardId,card_ext:o.cardExt},a.push(r);i(m.addCard,{card_list:a},function(){return e._complete=function(e){var n,i,t,o=e.card_list;if(o){for(o=JSON.parse(o),n=0,i=o.length;i>n;++n)t=o[n],t.cardId=t.card_id,t.cardExt=t.card_ext,t.isSuccess=!!t.is_succ,delete t.card_id,delete t.card_ext,delete t.is_succ;e.cardList=o,delete e.card_list}},e}())},chooseCard:function(e){i("chooseCard",{app_id:C.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},function(){return e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e}())},openCard:function(e){var n,t,o,r,c=e.cardList,a=[];for(n=0,t=c.length;t>n;++n)o=c[n],r={card_id:o.cardId,code:o.code},a.push(r);i(m.openCard,{card_list:a},e)},chooseWXPay:function(e){i(m.chooseWXPay,r(e),e)}},p(function(){x.initEndTime=u(),L.isCached=!!e.isWeixinCached,f()}),n&&(e.wx=e.jWeixin=L),L})},function(n,i,t){function o(e){if("list"===e){var n=JSON.parse(localStorage.getItem("_historyDatas")||"{}"),i=r("indate")||$DATA_LIST.indate,t=r("outdate")||$DATA_LIST.outdate,o=r("isnear"),c=r("startlat"),a=r("startlng"),s=$(".sea-box").find("input").val()||r("placename"),l=n.cityName||$DATA.city.cityName,d=n.cityCn?n.cityCn+"附近":l;return i=i.split("-"),i.shift(),i[0]=parseFloat(i[0]),i[1]=parseFloat(i[1]),i=i.join("-"),t=t.split("-"),t.shift(),t[0]=parseFloat(t[0]),t[1]=parseFloat(t[1]),t=t.join("-"),{cityName:o&&c&&a?d:l,indate:i,outdate:t,isnear:o,placename:s}}}function r(e){var n=window.location.search.substr(1)||window.location.href.split("#")[1],i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),t=n.match(i);return t?decodeURI(t[2]):""}var c=window.location.protocol+"//"+window.location.host+"/authorize/login/?ref=wxqbh5&backUrl=",a=window.location.protocol+"//m.elongstatic.com/static/webapp/bridge/logo2.jpg",s=e("hotelfx@1.1.0/entry/hotel/js/configs.js");t.exports={h5_wxqbindex:function(){var e=location.href,n=e.indexOf("?")<0?e.replace("#","?"):e.replace("#","&");return{title:"艺龙旅行-已入驻微信钱包",desc:"打开“微信”-“我的”-钱包，第三方服务中“酒店”。带个微信就可以订酒店啦~",link:c+encodeURIComponent(n+"&of=1301001"),imgUrl:a}},h5_list:function(){var e=o("list"),n=decodeURIComponent(e.placename||""),i=decodeURIComponent(e.indate||""),t=decodeURIComponent(e.outdate||""),r=decodeURIComponent(e.cityName||""),s=$DATA_LIST.hotelCountData.total,l=location.href,d=l.indexOf("?")<0?l.replace("#","?"):l.replace("#","&");return $DATA_LIST.hotelCount&&$DATA_LIST.hotelCount>100&&(s=$DATA_LIST.hotelCount),{title:"艺龙旅行-"+s+"家"+r+"酒店",desc:"为您准备"+i+(t?"至":"")+t+"，"+r+(n?"["+n+"]":"")+s+"家酒店~",link:c+encodeURIComponent(d+"&of=1301002"),imgUrl:a}},h5_friend_q:function(){var e=pageShareCallback();return{title:e.title,desc:e.desc,link:c+encodeURIComponent(e.link),imgUrl:a}},h5_friend_a:function(){var e=pageShareCallback();return{title:e.title,desc:e.desc,link:c+encodeURIComponent(e.link),imgUrl:a}},h5_detail:function(){"function"==typeof pageShareCallback&&pageShareCallback();var e=window.$DATA_DETAIL||{},n=e.hotelDetailInfo.hotelName||"",i=location.href,t=e.starLevel,o=s.maps.starLevelMap[t]||"",r=$DATA_DETAIL.newNearestAreaPosition||$DATA_DETAIL.nearestAreaPosition,l=e.bannerPicUrls&&e.bannerPicUrls.length>0?window.location.protocol+e.bannerPicUrls[0]:a,d=e.minPrice,u=e.commentScore||"",p=e.commentDes||"",f=e.firstGoodComment||"",m=i.indexOf("?")<0?i.replace("#","?"):i.replace("#","&");return{title:"艺龙旅行-"+n,desc:(o?o+"酒店":"")+(d?"|￥"+d+"起":"")+(u?"|评分"+u+" "+p:"")+(r&&!f?"|"+r:"")+(f?"|"+f:""),link:c+encodeURIComponent(m+"&of=1301003&sf=1"),imgUrl:l}},h5_createorder:function(){"function"==typeof pageShareCallback&&pageShareCallback();var e=window.$DATA_CREATEORDER||{},n=e.checkinMonthAndDateInChinese||"",i=e.checkoutMonthAndDateInChinese||"",t=e.stayDays,o=e.productName,r=e.productInfo.roomTypeName,s=e.hotelName||"艺龙旅行网",l=$.trim($("#wborderprice").text()),d=e.imgUrl?window.location.protocol+e.imgUrl:a,u=location.href,p=u.indexOf("?")<0?u.replace("#","?"):u.replace("#","&");return l=parseFloat(l),{title:"填写信息，最后一步完成预订啦",desc:n+"至"+i+" 共"+t+"晚。"+s+"，["+r+"]-["+o+"]，"+(l?"共¥"+l:""),imgUrl:d,link:c+encodeURIComponent(p+"&of=1301004")}}}}]});define("hotelfx@1.1.0/src/js/core.js",document.currentScript.src,function(r,c){return[function(c,e,n){n.exports=function(r){return r}(r("hotelfx@1.1.0/src/fw/core.js"))}]});define("hotelfx@1.1.0/lib/tpl-runtime.js",document.currentScript.src,function(n,r){return[function(n,r,e){!function(){function n(n,r){return(/string|function/.test(typeof r)?f:i)(n,r)}function r(n,e){return"string"!=typeof n&&(e=typeof n,"number"===e?n+="":n="function"===e?r(n.call(n)):""),n}function t(n){return s[n]}function o(n){return r(n).replace(/&(?![\w#]+;)|[<>"']/g,t)}function c(n,r){if(g(n))for(var e=0,t=n.length;e<t;e++)r.call(n,n[e],e,n);else for(e in n)r.call(n,n[e],e)}function u(n,r){var e=/(\/)[^\/]+\1\.\.\1/,t=("./"+n).replace(/[^\/]+$/,""),o=t+r;for(o=o.replace(/\/\.\//g,"/");o.match(e);)o=o.replace(e,"/");return o}function i(r,e){var t=n.get(r)||l({filename:r,name:"Render Error",message:"Template not found"});return e?t(e):t}function f(n,r){if("string"==typeof r){var e=r;r=function(){return new p(e)}}var t=a[n]=function(e){try{return new r(e,n)+""}catch(n){return l(n)()}};return t.prototype=r.prototype=h,t.toString=function(){return r+""},t}function l(n){var r="{Template Error}",e=n.stack||"";if(e)e=e.split("\n").slice(0,2).join("\n");else for(var t in n)e+="<"+t+">\n"+n[t]+"\n\n";return function(){return"object"==typeof console&&console.error(r+"\n\n"+e),r}}var a=n.cache={},p=this.String,s={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},g=Array.isArray||function(n){return"[object Array]"==={}.toString.call(n)},h=n.utils={$helpers:{},$include:function(n,r,e){return n=u(e,n),i(n,r)},$string:r,$escape:o,$each:c},y=n.helpers=h.$helpers;n.get=function(n){return a[n.replace(/^\.\//,"")]},n.helper=function(n,r){y[n]=r},e.exports=function(){return n}()}()}]});define("hotelfx@1.1.0/entry/hotel/js/plugins/easyDialimg.js",document.currentScript.src,function(o,i){return[function(i,t,r){function n(o,i,t,r){if(!o||!t)return void console.log("argument list error!!!");a.locationBorder="right",a.showAlert=!1,a.hightRatio=.55,a.floatWindowPicurl=o,a.floatWindowJumpLink=i,a.floatWindowdrag_=function(){$(t).append(a.floatWindowDom()),$(".promotion-ad-trag",t).drag({top:a.hightRatio,picurl:a.floatWindowPicurl,jumplink:a.floatWindowJumpLink,locationBorder:a.locationBorder,width:a.picWidth>64?64:a.picWidth,height:a.picHeight>64?64:a.picHeight})},a.floatWindowdrag_(),r&&r($(".promotion-ad-trag",t))}var a=o("hotelfx@1.1.0/src/js/promotionDialog.js");r.exports=n}]});define("hotelfx@1.1.0/entry/hotel/js/elongCompatible.js",document.currentScript.src,function(t,e){return[function(e,n,o){o.exports=function(){navigator.userAgent.match(/ ew(\w+)\/([\d.-_]*)/i)&&navigator.userAgent.match(/(iphone)|(ipad)|(ipod)/i)&&$("body").css("margin-top","20px")}(t("hotelfx@1.1.0/src/js/libs/zepto/dist/zepto.js"))}]});define("hotelfx@1.1.0/src/js/promotionDialog.js",document.currentScript.src,function(t,o){return[function(o,e,a){a.exports=function(t){window.jsonp1=function(){},$.fn.dial=function(t){var o={picurl:"",width:"100",height:"100",maskBox:1,jumplink:""},t=$.extend({},o,t),e=$(this),a=(e.find(".promotion-ad-picWrapper"),e.find("img")),r=(e.find(".promotion-ad-bannerPic"),e.find(".promotion-ad-close"),this);1!=t.maskBox&&r.remove(),r.on("click",function(){$(this).remove()}),a.on("click",function(o){t.jumplink&&""!=t.jumplink&&"0"!=t.jumplink?(location.href=t.jumplink,r.remove()):o.stopPropagation()}),e.on("touchmove",function(t){t.preventDefault()})},$.fn.drag=function(t){function e(){p=$(window).width(),d=$(window).height(),m=$(window).height()-x,c=i.width(),h=i.height(),u=i.offset().top-i.position().top,f=i.offset().left,s=p-t.width,l=null!==t.marginTopLen?t.marginTopLen+x+Number(t.height)>d?d-x-t.height+"px":t.marginTopLen-Number(t.height)/2+"px":1*t.top*d+x+Number(t.height)>d?d-x-t.height+"px":1*t.top*d-Number(t.height)/2+"px","right"==I?i.css({"-webkit-transform":"translate3d("+s+"px,0,0)","-moz-transform":"translate3d("+s+"px,0,0)","-ms-transform":"translate3d("+s+"px,0,0)","-o-transform":"translate3d("+s+"px,0,0)",transform:"translate3d("+s+"px,0,0)",top:w+"px"}):"left"==I&&i.css({"-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-ms-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)",top:w+"px"}),i.css({top:parseInt(l)<0?0:l})}var a=o.channelId,r={locationBorder:"left",picurl:"",jumplink:"",top:"30",width:"64",height:"64",position:"fixed"},t=$.extend({},r,t),i=$(this),n=i.children();t.marginTopLen=null;var s,l,p,m,d,c,h,u,f,g,w,x,I=t.locationBorder,k=$("html").hasClass("android");x="wxqbh5"==a?50:0,e(),k?$(window).resize(function(){e()}):window.onresize=function(){e()},i.css({width:t.width+"px",height:t.height+"px",position:"fixed",top:parseInt(l)<0?0:l,"z-index":"10000"}),"right"==o.locationBorder?i.css({"-webkit-transform":"translate3d("+s+"px,0,0)","-moz-transform":"translate3d("+s+"px,0,0)","-ms-transform":"translate3d("+s+"px,0,0)","-o-transform":"translate3d("+s+"px,0,0)",transform:"translate3d("+s+"px,0,0)",top:w+"px"}):"left"==o.locationBorder&&i.css({"-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-ms-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)",top:w+"px"}),n.css({width:"100%",height:"100%",display:"block"}),i.on("click",function(o){""!=t.jumplink&&(location.href=t.jumplink)}),i.on("touchstart",function(t){p=$(window).width(),m=$(window).height()-x,c=i.width(),h=i.height(),u=i.offset().top-i.position().top,f=i.offset().left;var o=t||window.event;eX=o.touches[0].clientX,eY=o.touches[0].clientY,g=eX-f-c/2,w=eY-u-h/2,g=g<-f?-f:g,w=w<-u?-u:w,w=w>m-h-u?m-h-u:w,g=g>p-c-f?p-c-f:g}),i.off("touchmove").on("touchmove",function(o){var e=o||window.event,a=e.touches[0].clientX;eY=e.touches[0].clientY,g=a-f-c/2,w=eY-u-h/2,g=g<-f?-f:g,w=w<-u?-u:w,w=w>m-h-u?m-h-u:w,g=g>p-c-f?p-c-f:g,$(this).css({"-webkit-transition":"-webkit-transform 0s ease-in-out","-moz-transition":"-moz-transform 0s ease-in-out","-ms-transition":"-ms-transform 0s ease-in-out","-o-transition":"-o-transform 0s ease-in-out",transition:"transform 0s ease-in-out"}),"right"==I?i.css({"-webkit-transform":"translate3d("+(g+s)+"px,0,0)","-moz-transform":"translate3d("+(g+s)+"px,0,0)","-ms-transform":"translate3d("+(g+s)+"px,0,0)","-o-transform":"translate3d("+(g+s)+"px,0,0)",transform:"translate3d("+(g+s)+"px,0,0)",top:w+"px"}):"left"==I&&i.css({"-webkit-transform":"translate3d("+g+"px,0,0)","-moz-transform":"translate3d("+g+"px,0,0)","-ms-transform":"translate3d("+g+"px,0,0)","-o-transform":"translate3d("+g+"px,0,0)",transform:"translate3d("+g+"px,0,0)",top:w+"px"}),t.marginTopLen=w,o.preventDefault()}),i.on("touchend",function(t){function o(t){i.css({"-webkit-transform":"translate3d("+t+"px,0,0)","-moz-transform":"translate3d("+t+"px,0,0)","-ms-transform":"translate3d("+t+"px,0,0)","-o-transform":"translate3d("+t+"px,0,0)",transform:"translate3d("+t+"px,0,0)"})}i.css({"-webkit-transition":"all 0.3s ease-in-out","-moz-transition":"all 0.3s ease-in-out","-ms-transition":"all 0.3s ease-in-out","-o-transition":"all 0.3s ease-in-out",transition:"all 0.3s ease-in-out"}),"left"==I?Math.abs(g)<=(p-c)/2?(o(0),I="left"):(o(s),I="right"):"right"==I&&(Math.abs(g)>=(p-c)/2?(o(0),I="left"):(o(s),I="right"))})};var o={popLayerId:null,PopLayerPicurl:"",floatWindowPicurl:"",floatWindowJumpLink:"",PopLayerJumpLink:"",floatWindowCount:0,PopLayerCount:0,hightRatio:"",locationBorder:"",showAlert:!0,channelId:null,pageId:"",init:function(t,e,a){this.pageId=location.pathname.replace(/[\.|\/]/g,"_"),"boolean"==typeof a&&(this.showAlert=a),this.channelId=e,o.ajax(t)},getScreen:function(){var t=screen;return t.width+"*"+t.height},ajax:function(t){$.ajax({timeout:2e3,url:t,type:"GET",dataType:"jsonp",success:function(t){null==t||t.IsError||o.isShowDial(t)},error:function(){console.log("加载失败")}})},alert:function(t,e){o.PopLayerPicurl=t,o.PopLayerJumpLink=e;var a=new Image,r=this;a.src=o.PopLayerPicurl,a.onload=function(){r.PopLayerdial()}},imageLoad:function(){var t=new Image;t.src=o.PopLayerPicurl,t.onload=function(){o.showNum(o.PopLayerCount,"promotionAlertBoxNum",o.PopLayerdial)}},isShowDial:function(t){var e,a=t.pages,r=this;a&&a.length&&[].forEach.call(a,function(t){if(e=t.infos[0],"indexPopLayer"==t.key){if(o.PopLayerPicurl=e.picUrl,o.PopLayerJumpLink=e.jumpLink,o.popLayerId=e.adId,e.skinTemplate&&e.skinTemplatetrans&&e.skinTemplatetrans.activeMaxValue||!r.showAlert){if(!(e.skinTemplate&&/^\{.*\}$/.test(e.skinTemplate)&&JSON.parse(e.skinTemplate).activeMaxValue&&r.showAlert))return;o.PopLayerCount=e.skinTemplatetrans.activeMaxValue}else o.PopLayerCount=0;o.imageLoad()}else if("indexfloatWindow"==t.key){var a=e.skinTemplatetrans;if(a&&a.locationBorder&&a.hightRatio){var i=a.locationBorder.toLowerCase();o.floatWindowPicurl=e.picUrl,"left"!=i&&"right"!=i&&(i="right"),o.floatWindowJumpLink=e.jumpLink,o.hightRatio=parseFloat(a.hightRatio),o.locationBorder=i,o.floatWindowdrag()}}})},PopLayerDom:function(){return"<div class='promotion-ad-mask'><div class='promotion-ad-picWrapper'><div class=\"promotion-ad-bannerPic\"><span class=\"promotion-ad-close\">&#215;</span><img src='//"+o.PopLayerPicurl.split("//")[1]+"' style='max-height:"+.75*$(window).height()+"px'></div></div></div>'"},floatWindowDom:function(){return'<div class="promotion-ad-trag" id="promotion-ad-trag"><img src="//'+o.floatWindowPicurl.split("//")[1]+'" alt=""></div>'},floatWindowdrag:function(){($("body .page").eq(0)||$("body")).append(o.floatWindowDom()),$("#promotion-ad-trag").drag({top:o.hightRatio,picurl:o.floatWindowPicurl,jumplink:o.floatWindowJumpLink,locationBorder:o.locationBorder,width:o.picWidth>64?64:o.picWidth,height:o.picHeight>64?64:o.picHeight})},PopLayerdial:function(){($("body .page").eq(0)||$("body")).append(o.PopLayerDom()),$(".promotion-ad-mask").dial({picurl:o.PopLayerPicurl,jumplink:o.PopLayerJumpLink})},showNum:function(t,e,a){if("promotionAlertBoxNum"==e){var r;localStorage.getItem(this.pageId+"_promotionAdId")?o.popLayerId!=localStorage.getItem(this.pageId+"_promotionAdId")&&(localStorage.setItem(this.pageId+"_promotionAdId",o.popLayerId),this.cleanLocalstorage()):localStorage.setItem(this.pageId+"_promotionAdId",o.popLayerId),localStorage.getItem(this.pageId+"_alshowAlertBoxNum")||(r=0,localStorage.setItem(this.pageId+"_alshowAlertBoxNum",0)),r=Number(localStorage.getItem(this.pageId+"_alshowAlertBoxNum"));var i=new Date((new Date).toDateString()).getTime()+864e5;if(localStorage.getItem(this.pageId+"_promotionAlertBoxNumTimeout")){if(localStorage.getItem(this.pageId+"_promotionAlertBoxNumTimeout")<i)localStorage.setItem(this.pageId+"_promotionAlertBoxNumTimeout",i);else if(Date.now()<localStorage.getItem(this.pageId+"_promotionAlertBoxNumTimeout"))return}else localStorage.setItem(this.pageId+"_promotionAlertBoxNumTimeout",i);if(t>0)if(localStorage.getItem(this.pageId+"_"+e)){if(localStorage.getItem(this.pageId+"_"+e)>0||0==localStorage.getItem(this.pageId+"_"+e)&&t>localStorage.getItem(this.pageId+"_lastAlertBoxNum")){if(t!=localStorage.getItem(this.pageId+"_lastAlertBoxNum")&&t-Number(r)<=0)return localStorage.setItem(this.pageId+"_"+e,0),localStorage.setItem(this.pageId+"_lastAlertBoxNum",t),void localStorage.setItem(this.pageId+"_alshowAlertBoxNum",r);a(),r+=1,localStorage.setItem(this.pageId+"_lastAlertBoxNum",t),localStorage.setItem(this.pageId+"_alshowAlertBoxNum",r),localStorage.setItem(this.pageId+"_"+e,t-Number(r))}}else{if(r>=t)return;a(),r+=1,localStorage.setItem(this.pageId+"_"+e,t-r),localStorage.setItem(this.pageId+"_lastAlertBoxNum",t),localStorage.setItem(this.pageId+"_alshowAlertBoxNum",r)}else 0==t&&(r+=1,localStorage.setItem(this.pageId+"_alshowAlertBoxNum",r),a())}else a()},cleanLocalstorage:function(){localStorage.removeItem(this.pageId+"_alshowAlertBoxNum"),localStorage.removeItem(this.pageId+"_lastAlertBoxNum")}};return window.dialimg=o,o}(t("hotelfx@1.1.0/src/fw/core.js"))}]});define("hotelfx@1.1.0/src/js/dialog.js",document.currentScript.src,function(t,i){return[function(i,e,n){n.exports=function(t,i){var e=($('<div class="dialog"></div>'),$("html")),n=function(){},c=function(){};c.prototype={init:function(){this.page=$('<div class="dialog"></div>')},config:{content:"请选择相应的操作",btnArr:[{}],mask:!0,clickMask:function(){}},isShow:!1,option:{showType:"transition",transitionClass:"dialog-active",showTransition:!0},beforeShow:function(t,i){e.hasClass("android")&&e.css("overflow","hidden"),i?this.showRadio(t):this.showDialog(t)},handleRepeatShow:function(){this.isShow?i.showPluginNum--:(this.isShow=!0,i.showAdvancedLoad())},showDialog:function(i){for(var e=$.extend(this.config,i),n="",c=this,a=0;a<e.btnArr.length;a++)i.btnArr.length>1?n+='<div class="'+(i.isVertical?"bdt ":"")+"item-btn item-btn"+i.btnArr.length+' ">'+e.btnArr[a].text+"</div>":n+='<div class="item-btn">'+e.btnArr[a].text+"</div>";this.handleRepeatShow(),$(t.getActiveLayer()).off("click",".advanced-mask-layer").on("click",".advanced-mask-layer",function(){e.clickMask()}),i.isVertical?this.page.addClass("newtbtn"):this.page.removeClass("newtbtn"),this.page.html('<div class="content">'+e.content+"</div>"+n),this.page.find(".item-btn").each(function(t){""===e.btnArr[t].color||i.isVertical||$(this).css("background",e.btnArr[t].color),""===e.btnArr[t].tinct||i.isVertical||$(this).css("color",e.btnArr[t].tinct),"button"==e.btnArr[t].type&&$(this).on("click",function(){c.hide(),e.btnArr[t].click()})})},showRadio:function(e){var n=$.extend({title:"请选择一项",defaultSelected:1,defaultIdSelected:"",radioArr:[{}],success:function(){},cancel:function(){},maskClosed:!1,mask:!0,clickMask:function(){}},e),c="",a="",o="",r="",s=this,l=this.page;if(n.radioArr.length>0)for(var d=0;d<n.radioArr.length;d++)c+='<li class="radio-item"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text" data-rid="'+n.radioArr[d].id+'">'+n.radioArr[d].text+"</div></label></li>";if(i.showAdvancedLoad(),$(t.getActiveLayer()).off("click",".advanced-mask-layer").on("click",".advanced-mask-layer",function(){n.clickMask()}),n.maskClosed&&$(t.getActiveLayer()).off("click",".advanced-mask-layer").on("click",".advanced-mask-layer",function(){s.hide()}),e.success&&(a='<div class="item-btn radio-success" data-selected="">确定</div>'),e.cancel&&(o='<div class="item-btn radio-cancel">取消</div>'),l.html('<div class="radio-title">'+n.title+"</div><ul>"+c+"</ul>"+a+o),l.find("ul li").each(function(t){n.radioArr[t].click&&$(this).on("click",function(){var i=$(this);n.radioArr[t].click(i),s.hide()})}),""!==n.defaultIdSelected)l.find('[data-rid="'+n.defaultIdSelected+'"]').parents("li").find(".radio").addClass("selected");else if(n.defaultSelected>0){var f=l.find("li").eq(n.defaultSelected-1);f.find(".radio").addClass("selected"),l.find(".radio-success").data("selected",f.find(".radio-text").data("rid"))}n.radioArr.length>0&&l.find(".label-radio").on("click",function(){$(this).parent().siblings().find(".radio").removeClass("selected"),$(this).find(".radio").addClass("selected"),r=$(this).find(".radio-text").data("rid"),l.find(".radio-success").data("selected",r)}),e.success&&l.find(".radio-success").on("click",function(){var t=$(this);s.hide(),n.success(t)}),e.cancel&&l.find(".radio-cancel").on("click",function(){s.hide(),n.cancel()})},afterHide:function(){$(t.getActiveLayer()).off("click",".advanced-mask-layer"),e.hasClass("android")&&e.css("overflow",""),this.isShow=!1,i.removeAdvancedLoad()}};var a={currentPageDialog:null,init:function(e){this.currentPageDialog=i.getItem("dialog"),this.currentPageDialog?this.currentPageDialog.page.parentElement||this.currentPageDialog.restore(t.getActiveId()):(this.currentPageDialog=new c,i.add("dialog",this.currentPageDialog)),e&&setTimeout(e,10)},show:function(t){var i=this;this.init(function(){i.currentPageDialog.show(t)})},radioShow:function(t){var i=this;this.init(function(){i.currentPageDialog.show(t,!0)})},alert:function(t,i){"object"==typeof t&&(opt=t,t=opt.content,i=opt.click);var e={content:t,btnArr:[{text:"确 定",color:"#E65749",type:"button",click:i||n}]};a.show(e)},newAlert:function(t){var i=$.extend({msg:"请选择相应的操作",btnText:"确 定",callback:function(){}},t),e={content:i.msg,btnArr:[{text:i.btnText,color:"#E65749",type:"button",click:i.callback}]};a.show(e)},confirm:function(t){t.success||(t.success=function(){}),t.cancel||(t.cancel=function(){});var i={isVertical:t.isVertical||!1,content:t.content,text:t.text?t.text:["确定","取消"],btnArr:[{text:t.text&&t.text[0]?t.text[0]:"确定",color:"#fff",tinct:"#e65749",type:"button",click:t.success},{text:t.text&&t.text[1]?t.text[1]:"取消",color:"#e65749",type:"button",click:t.cancel}]};a.show(i)},moreconfirm:function(t){t.first||(t.first=function(){}),t.second||(t.second=function(){}),t.third||(t.third=function(){});var i={isVertical:t.isVertical||!1,content:t.content,text:t.text,btnArr:[{text:t.text[0],color:"#fff",tinct:"#e65749",type:"button",click:t.first},{text:t.text[1],color:"#fff",tinct:"#e65749",type:"button",click:t.second},{text:t.text[2],color:"#fff",tinct:"#e65749",type:"button",click:t.third}]};a.show(i)},superconfirm:function(t){t.cancel||(t.cancel=function(){});var i={isVertical:t.isVertical||!1,content:t.content,btnArr:[{text:"取 消",color:"#757575",type:"button",click:t.cancel}]};if(t&&t.btnArr)for(var e=t.btnArr.length-1;e>=0;e--){var n=t.btnArr[e];i.btnArr.unshift({text:n.name,color:"#E65749",type:"button",click:n.event})}a.show(i)},radiocomfirm:function(t){a.radioShow(t)}};return a}(t("hotelfx@1.1.0/src/fw/core.js"),t("hotelfx@1.1.0/src/js/PluginManager.js"))}]});define("hotelfx@1.1.0/entry/hotel/tpl/template.js",document.currentScript.src,function(n,r){return[function(n,r,e){!function(){function n(n,r){return(/string|function/.test(typeof r)?f:i)(n,r)}function r(n,e){return"string"!=typeof n&&(e=typeof n,"number"===e?n+="":n="function"===e?r(n.call(n)):""),n}function t(n){return s[n]}function o(n){return r(n).replace(/&(?![\w#]+;)|[<>"']/g,t)}function c(n,r){if(g(n))for(var e=0,t=n.length;e<t;e++)r.call(n,n[e],e,n);else for(e in n)r.call(n,n[e],e)}function u(n,r){var e=/(\/)[^\/]+\1\.\.\1/,t=("./"+n).replace(/[^\/]+$/,""),o=t+r;for(o=o.replace(/\/\.\//g,"/");o.match(e);)o=o.replace(e,"/");return o}function i(r,e){var t=n.get(r)||l({filename:r,name:"Render Error",message:"Template not found"});return e?t(e):t}function f(n,r){if("string"==typeof r){var e=r;r=function(){return new p(e)}}var t=a[n]=function(e){try{return new r(e,n)+""}catch(n){return l(n)()}};return t.prototype=r.prototype=h,t.toString=function(){return r+""},t}function l(n){var r="{Template Error}",e=n.stack||"";if(e)e=e.split("\n").slice(0,2).join("\n");else for(var t in n)e+="<"+t+">\n"+n[t]+"\n\n";return function(){return"object"==typeof console&&console.error(r+"\n\n"+e),r}}var a=n.cache={},p=this.String,s={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},g=Array.isArray||function(n){return"[object Array]"==={}.toString.call(n)},h=n.utils={$helpers:{},$include:function(n,r,e){return n=u(e,n),i(n,r)},$string:r,$escape:o,$each:c},y=n.helpers=h.$helpers;n.get=function(n){return a[n.replace(/^\.\//,"")]},n.helper=function(n,r){y[n]=r},e.exports=function(){return n}()}()}]});