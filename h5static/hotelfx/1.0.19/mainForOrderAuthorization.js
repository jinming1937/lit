webpackJsonp([3],{0:function(e,t,i){var a,n;a=[i(30),i(31),i(68),i(47)],n=function(e,t){"3000"!=location.port?e.router.add({h5_orderAuthorization:{lindex:1,tpl:"h5_orderAuthorization",url:window.pageInfo.subPath+"authorization/order/"}}):e.router.add({h5_orderAuthorization:{lindex:1,tpl:"h5_orderAuthorization",url:"search.html"}}),e.init()}.apply(t,a),!(void 0!==n&&(e.exports=n))},30:function(e,t,i){var a,n;a=[i(4)],n=function(e){return e}.apply(t,a),!(void 0!==n&&(e.exports=n))},31:function(e,t,i){var a;!function(){var n,o=navigator.userAgent.toLowerCase(),s="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,r=screen.width/document.body.clientWidth!==1&&screen.height/document.body.clientHeight!==1,c=r?screen.width/s:screen.width,l=r?screen.height/s:screen.height,d=c>=600&&l>=600,h=/ ew(\w+)\/([\d.-_]*)/.test(o);n=h?1:location.host.match(/^m[\w\.]*\.elong\.com/)?2:4;var u=99;o.match(/android/)?u=d?8:3:o.match(/iphone/)?u=1:o.match(/ipad/)?u=2:o.match(/macintosh/)?u=7:o.match(/windows/)&&(u=o.indexOf("Touch")!==-1?d?9:5:7);var f=500,g=(new Date).getTime(),v=function(){var e="https:"===location.protocol?"msecure.elong.com":"tj.elongstatic.com",t="//"+e+"/t.gif?",i={g:Math.floor(99999*Math.random()),rf:"",bs:screen?screen.width+"*"+screen.height:""},a=[];for(var n in i)a.push(n+"="+i[n]);return t+=a.join("&")}(),p={fetchStart:"p88",domainLookupStart:"p89",domainLookupEnd:"p90",connectStart:"p91",connectEnd:"p92",requestStart:"p93",responseStart:"p94",responseEnd:"p95",domLoading:"p96",domContentLoadedEventEnd:"p97",loadEventEnd:"p99"},m=function(e,t){var i={},a={};if(e&&e.timing){for(var n in e.timing)"number"==typeof e.timing[n]&&t<e.timing[n]&&(t=e.timing[n]);for(var n in p)i[n]=e.timing[n]||t;for(var o in i){var s=p[o];s&&(a[s]=i[o])}}return a},b=function(e,t){var i={};i.timing={};for(var a in p)i.timing[a]=e;return i.timing.domContentLoadedEventEnd=t,i.timing.loadEventEnd=t,i};document.addEventListener("onrender",function(e){if("string"==typeof e.data1&&e.data1.indexOf(",")!==-1){var t=e.data1.split(","),i=b(t[1],t[0]);k.pt=e.detail,k.p98=t[0],k.__sendObj(i)}});var w=function(){this.vt=n,this.appt=u,document.cookie.match(/SessionGuid=([\w-]*)/)&&(this.sid=document.cookie.match(/SessionGuid=([\w-]*)/)[1]),document.cookie.match(/CookieGuid=([\w-]*)/)&&(this.cid=document.cookie.match(/CookieGuid=([\w-]*)/)[1]),navigator.connection&&(this.nt=navigator.connection.type),this.ch="webapp",this.pt="tjonly",this.p1="",this.p98=g},y=function(e,t){var i=m(e,g+f);for(var a in t)t[a]&&"function"!=typeof t[a]&&(i[a]=t[a]);var n="";for(var o in i)n=n+"&"+o+"="+i[o];(new Image).src=v+n};w.prototype.__sendObj=function(e){var t=this,i=(new Date).getTime();i-g>=f||e&&e.timing&&e.timing.loadEventEnd?y(e,t):setTimeout(function(){y(e,t)},f-i+g)},w.prototype.setChannel=function(e,t,i,a){e&&(this.ch=e),t&&(this.pt=t),"https"===location.protocol&&(this.pt+="s"),i&&(this.p1=i),a&&(this.cardno=a),this.__sendObj(window.performance)};var k=new w;!function(){var e={23:"http://www.elongstatic.com/hc/status.html",88:"//m.elongstatic.com/hc/status.html",1:"//pavo.elongstatic.com/hc/status.html"},t=parseInt(100*Math.random());try{if(e[t]){var i=(new Date).getTime(),a=new w;window.req=new XMLHttpRequest,req.timeout=3e3,req.onreadystatechange=function(){if(4===req.readyState){var n=(new Date).getTime(),o=b(i,n);a.ch="monitor",a.pt=req.status>0&&req.status<500?"cdnmonitor":"cdnerror",n-i>2e3&&(a.pt="cdnerror"),a.p98=n,a.p81=req.status,a.p82=e[t].match(/([^\/]*)\.elongstatic/)[1],a.p83=g,a.p85=req.getResponseHeader("chinacacheip")||"",a.__sendObj(o)}},req.open("HEAD",e[t],!0),req.send(null)}}catch(n){}}(),window.onerror=function(e,t,i,a,n){y(null,{ch:"webapp",pt:"jserror",p75:e,p76:t,p77:g,p78:k.ch+"_"+k.pt,p79:n?n.stack:e})},a=function(){"use strict";return k}.call(t,i,t,e),!(void 0!==a&&(e.exports=a)),window.tjClient=k}()},36:function(e,t,i){var a,n;a=[i(4),i(37)],n=function(e,t){var i=($('<div class="dialog"></div>'),$("html")),a=function(){},n=function(){};n.prototype={init:function(){this.page=$('<div class="dialog"></div>')},config:{content:"请选择相应的操作",btnArr:[{}],mask:!0,clickMask:function(){}},isShow:!1,option:{showType:"transition",transitionClass:"dialog-active",showTransition:!0},beforeShow:function(e,t){i.hasClass("android")&&i.css("overflow","hidden"),t?this.showRadio(e):this.showDialog(e)},handleRepeatShow:function(){this.isShow?t.showPluginNum--:(this.isShow=!0,t.showAdvancedLoad())},showDialog:function(t){for(var i=$.extend(this.config,t),a="",n=this,o=0;o<i.btnArr.length;o++)a+=t.btnArr.length>1?'<div class="item-btn item-btn'+t.btnArr.length+'">'+i.btnArr[o].text+"</div>":'<div class="item-btn">'+i.btnArr[o].text+"</div>";this.handleRepeatShow(),$(e.getActiveLayer()).off("click",".advanced-mask-layer").on("click",".advanced-mask-layer",function(){i.clickMask()}),this.page.html('<div class="content">'+i.content+"</div>"+a),this.page.find(".item-btn").each(function(e){""!==i.btnArr[e].color&&$(this).css("background",i.btnArr[e].color),""!==i.btnArr[e].tinct&&$(this).css("color",i.btnArr[e].tinct),"button"==i.btnArr[e].type&&$(this).on("click",function(){var t=i.btnArr[e].click();t!==!1&&n.hide()})})},showRadio:function(i){var a=$.extend({title:"请选择一项",defaultSelected:1,defaultIdSelected:"",radioArr:[{}],success:function(){},cancel:function(){},maskClosed:!1,mask:!0,clickMask:function(){}},i),n="",o="",s="",r="",c=this,l=this.page;if(a.radioArr.length>0)for(var d=0;d<a.radioArr.length;d++)n+='<li class="radio-item"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text" data-rid="'+a.radioArr[d].id+'">'+a.radioArr[d].text+"</div></label></li>";if(t.showAdvancedLoad(),$(e.getActiveLayer()).off("click",".advanced-mask-layer").on("click",".advanced-mask-layer",function(){a.clickMask()}),a.maskClosed&&$(e.getActiveLayer()).off("click",".advanced-mask-layer").on("click",".advanced-mask-layer",function(){c.hide()}),i.success&&(o='<div class="item-btn radio-success" data-selected="">确定</div>'),i.cancel&&(s='<div class="item-btn radio-cancel">取消</div>'),l.html('<div class="radio-title">'+a.title+"</div><ul>"+n+"</ul>"+o+s),l.find("ul li").each(function(e){a.radioArr[e].click&&$(this).on("click",function(){var t=$(this);a.radioArr[e].click(t),c.hide()})}),""!==a.defaultIdSelected)l.find('[data-rid="'+a.defaultIdSelected+'"]').parents("li").find(".radio").addClass("selected");else if(a.defaultSelected>0){var h=l.find("li").eq(a.defaultSelected-1);h.find(".radio").addClass("selected"),l.find(".radio-success").data("selected",h.find(".radio-text").data("rid"))}a.radioArr.length>0&&l.find(".label-radio").on("click",function(){$(this).parent().siblings().find(".radio").removeClass("selected"),$(this).find(".radio").addClass("selected"),r=$(this).find(".radio-text").data("rid"),l.find(".radio-success").data("selected",r)}),i.success&&l.find(".radio-success").on("click",function(){var e=$(this);a.success(e),c.hide()}),i.cancel&&l.find(".radio-cancel").on("click",function(){a.cancel(),c.hide()})},afterHide:function(){$(e.getActiveLayer()).off("click",".advanced-mask-layer"),i.hasClass("android")&&i.css("overflow",""),this.isShow=!1,t.removeAdvancedLoad()}};var o={currentPageDialog:null,init:function(i){this.currentPageDialog=t.getItem("dialog"),this.currentPageDialog?this.currentPageDialog.page.parentElement||this.currentPageDialog.restore(e.getActiveId()):(this.currentPageDialog=new n,t.add("dialog",this.currentPageDialog)),i&&setTimeout(i,10)},show:function(e){var t=this;this.init(function(){t.currentPageDialog.show(e)})},radioShow:function(e){var t=this;this.init(function(){t.currentPageDialog.show(e,!0)})},alert:function(e,t){"object"==typeof e&&(opt=e,e=opt.content,t=opt.click);var i={content:e,btnArr:[{text:"确 定",color:"#E65749",type:"button",click:t||a}]};o.show(i)},newAlert:function(e){var t=$.extend({msg:"请选择相应的操作",btnText:"确 定",callback:function(){}},e),i={content:t.msg,btnArr:[{text:t.btnText,color:"#E65749",type:"button",click:t.callback}]};o.show(i)},confirm:function(e){e.success||(e.success=function(){}),e.cancel||(e.cancel=function(){});var t={content:e.content,text:e.text?e.text:["确定","取消"],btnArr:[{text:e.text&&e.text[0]?e.text[0]:"确定",color:"#fff",tinct:"#e65749",type:"button",click:e.success},{text:e.text&&e.text[1]?e.text[1]:"取消",color:"#e65749",type:"button",click:e.cancel}]};o.show(t)},moreconfirm:function(e){e.first||(e.first=function(){}),e.second||(e.second=function(){}),e.third||(e.third=function(){});var t={content:e.content,text:e.text,btnArr:[{text:e.text[0],color:"#fff",tinct:"#e65749",type:"button",click:e.first},{text:e.text[1],color:"#fff",tinct:"#e65749",type:"button",click:e.second},{text:e.text[2],color:"#fff",tinct:"#e65749",type:"button",click:e.third}]};o.show(t)},superconfirm:function(e){e.cancel||(e.cancel=function(){});var t={content:e.content,btnArr:[{text:"取 消",color:"#757575",type:"button",click:e.cancel}]};if(e&&e.btnArr)for(var i=e.btnArr.length-1;i>=0;i--){var a=e.btnArr[i];t.btnArr.unshift({text:a.name,color:"#E65749",type:"button",click:a.event})}o.show(t)},radiocomfirm:function(e){o.radioShow(e)}};return o}.apply(t,a),!(void 0!==n&&(e.exports=n))},37:function(e,t,i){var a,n;a=[i(38)],n=function(e){return e}.apply(t,a),!(void 0!==n&&(e.exports=n))},38:function(e,t,i){var a,n;a=[i(4)],n=function(e){function t(i,a){for(var n in a)i[n]?"object"==typeof i[n]&&"object"==typeof a[n]&&t(i[n],a[n]):"object"==typeof a[n]?i[n]=e.clone(a[n]):i[n]=a[n]}!function(){if(location.href.indexOf("&!_PLU_")>0){var t=e.getActiveId();History.replaceState(t,document.title,location.href.split("&!_PLU_")[0]+location.hash)}}(),PluginManager={plugins:{},isHashChangeByPlugin:!1,lastUrl:location.href,maskNum:0,advancedMaskNum:0,showPluginNum:0,base:{id:null,option:{showLoad:!1,showTransition:!1,showType:"animation",transitionClass:""},init:function(){},Beforeinit:function(){e.isPad&&"animation"==this.option.showType?this.option.showLoad=!0:this.page&&this.page.hasClass("page-plugin")&&(e.isPad&&(this.option.showLoad=!0),this.option.showTransition=!0)},page:null,beforeShow:function(){return!1},lastShowArguments:null,show:function(){if(!this.beforeShow.apply(this,arguments)){var t=$("html"),i=this.page;if($("html").hasClass("android")?t.css("overflow","hidden"):(e.getActiveLayer().find(".page-content").css("overflow","hidden!important"),PluginManager._removeOverflow(i.find(".page-content"))),e.getActiveLayer().addClass("fixed"),PluginManager.showPluginNum++,"animation"==this.option.showType)i.addClass("plugin-show"),e.moveWidget(i,"right","center");else{var a=this;e.transitionEnd&&this.option.showTransition?(i.addClass("page-transitioning"),i.off(e.transitionEnd).on(e.transitionEnd,function(){i.removeClass("page-transitioning"),i.addClass("plugin-show"),i.off(e.transitionEnd)})):i.addClass("plugin-show"),setTimeout(function(){i.addClass(a.option.transitionClass)},0)}if(this.option.showLoad&&PluginManager.showLoad(),this.afterShow.apply(this,arguments),this.lastShowArguments=arguments,location.href.indexOf("&!_PLU_"+this.id)<0){var n=e.getActiveId(),o=location.pathname+(""===location.search?"?_=1":location.search)+"&!_PLU_"+this.id+location.hash;PluginManager.isHashChangeByPlugin=!0,History.pushState(n,document.title,o)}}},afterShow:function(){},beforeHide:function(){},hide:function(){if(!this.beforeHide()){var t=this.page;if("animation"==this.option.showType&&t.hasClass("page-on-center"))e.moveWidget(t,"center","right",function(){t.removeClass("plugin-show")});else{e.transitionEnd&&this.option.showTransition?(t.addClass("page-transitioning"),t.removeClass("plugin-show"),t.off(e.transitionEnd).on(e.transitionEnd,function(){t.removeClass("page-transitioning"),t.off(e.transitionEnd)})):t.removeClass("plugin-show"),t.removeClass(this.option.transitionClass)}PluginManager.showPluginNum>0&&PluginManager.showPluginNum--,0===PluginManager.showPluginNum&&e.getActiveLayer().removeClass("fixed"),this.option.showLoad&&PluginManager.removeLoad();var i=$("html");i.hasClass("android")?i.css("overflow",""):PluginManager._removeOverflow(e.getActiveLayer().find(".page-content")),this.afterHide(),location.href.indexOf("&!_PLU_"+this.id)>0&&(PluginManager.isHashChangeByPlugin=!0,History.back())}},afterHide:function(){},destroy:function(){this.page&&this.page.detach(),e.getActiveLayer().removeClass("fixed")},restore:function(t){var i=e.get(t);this.page&&this.page.appendTo(i.main)}},add:function(i,a){var n=this.getCurrentPagePlugins();n||(n={},this.setCurrentPagePlugins(n));t(a,this.base),a.id=i,a.Beforeinit(),a.init(),a.destroy(),a.restore(e.getActiveId()),a.page&&a.page.addClass("plugin-inited"),"animation"==a.option.showType&&a.page.addClass("page-plugin"),n[i]=a},getCurrentPagePlugins:function(){return this.plugins[e.getActiveId()]},setCurrentPagePlugins:function(t){this.plugins[e.getActiveId()]=t},getItem:function(e){var t=this.getCurrentPagePlugins();return t?t[e]:null},remove:function(e){var t=this.getCurrentPagePlugins();t[e].destroy(),delete t[e]},removePluginBeforePageHide:function(e){var t=this.plugins[e];if(t)for(var i in t)t[i].destroy()},restorePluginBeforePageShow:function(e){var t=this.plugins[e];if(t)for(var i in t)t[i].restore(e)},showLoad:function(){e.getActiveLayer().children(".mask-layer").length?e.getActiveLayer().children(".mask-layer").show():$("<div class='mask-layer'></div>").appendTo(e.getActiveLayer()),this.maskNum++},removeLoad:function(){this.maskNum>0&&this.maskNum--,0===this.maskNum&&$(".mask-layer",e.getActiveLayer()).hide()},showAdvancedLoad:function(){e.getActiveLayer().children(".advanced-mask-layer").length?e.getActiveLayer().children(".advanced-mask-layer").show():$("<div class='advanced-mask-layer'></div>").appendTo(e.getActiveLayer())},removeAdvancedLoad:function(){$(".advanced-mask-layer",e.getActiveLayer()).hide()},_removeOverflow:function(e){e.each(function(){var e=$(this),t=e.attr("style");if("string"!=typeof t)return!0;for(var i=t.split(";"),a=0;a<i.length;a++){var n=i[a];if(n.indexOf("overflow")>=0){e.attr("style",t.replace(n+";",""));break}}})}};var i=function(e){PluginManager.restorePluginBeforePageShow(e.detail)},a=function(e){PluginManager.removePluginBeforePageHide(e.detail)};return $(document).on("beforehide",a),$(document).on("onshow",i),History.Adapter.bind(window,"statechange",function(e){var t=location.href,i=PluginManager.lastUrl;if(PluginManager.lastUrl=location.href,PluginManager.isHashChangeByPlugin)return void(PluginManager.isHashChangeByPlugin=!1);var a=null,n=null;if(t.length>i.length){a=t.split("&!_PLU_");var o=a[a.length-1];if(o=o.substring(0,o.indexOf("#")),n=PluginManager.getItem(o),!n)return;n.lastShowArguments?n.show.apply(n,n.lastShowArguments):n.show()}else a=i.split("&!_PLU_"),n=PluginManager.getItem(a[a.length-1].split("#")[0]),n?n.hide():null}),PluginManager}.apply(t,a),!(void 0!==n&&(e.exports=n))},47:function(e,t,i){var a;a=function(){$(window).on("onrender",function(){$(".page").length>1&&("undefined"!=typeof _satellite&&_satellite.track("TJObject_Ready"),TJObject.et="show",TJObject.st=(new Date).getTime(),tjMVT.cspot=null,tjMVT.setData(TJObject))})}.call(t,i,t,e),!(void 0!==a&&(e.exports=a))},64:function(e,t,i){var a,n;a=[i(4),i(37)],n=function(e,t){$.extend($.fn,{slideSelector:function(i){var a={TEMPLATE:{ITEM:'<li class="radio-item ${class}" value="${value}"><label class="label-radio clearfix"><div class="radio-icon"><span class="radio"></span></div><div class="radio-text">${text}</div><div class="check"></div></label></li>',CONTAINERHEAD:'<div class="slide-selector"><header class="bar-nav"><div class="radio-title"><span class="title">${title}</span><span class="cancel">取消</span></div></header><ul class="page-content">',CONTAINERFOOT:'</ul><div class="arrow up left"></div><div class="describe">${describe}</div></div>'},option:{showType:"transition",transitionClass:"selector-active",showTransition:!0},page:null,targetElement:null,disableIndex:null,config:i,callback:function(){},init:function(){var t=this.config,i=this;if(t.data&&0!==t.data.length){t.targetElement&&(this.targetElement=t.targetElement),t.callback&&(this.callback=t.callback),t.disableIndex&&(this.disableIndex=t.disableIndex),this.data={};for(var a=this.TEMPLATE.CONTAINERHEAD.replace("${title}",t.title),n=0;n<t.data.length;n++){var o=this.TEMPLATE.ITEM,s=t.data[n];o=o.replace("${value}",s.value),o=o.replace("${text}",s.text),o=o.replace("${class}",this.disableIndex&&this.disableIndex==n?"disabled-item":""),this.data[(""==s.value?0:s.value)+s.text.trim()]=s,a+=o}a+=this.TEMPLATE.CONTAINERFOOT.replace("${describe}",t.describe?t.describe:"");var r=$(a),c=this.setValue(this);e.getActiveLayer()?r.appendTo(e.getActiveLayer()):r.appendTo("body"),t.initValue&&(r.find('li[value="'+t.initValue.value+'"]').addClass("selected").find(".radio").addClass("selected"),this.callback&&this.callback(t.initValue)),t.describe||r.find(".describe").hide(),this.page=r,$(r).on("click","ul li",c),$("header .cancel",r).on("click",function(){i.hide()})}},beforeShow:function(i){var a=this;if($(e.getActiveLayer()).off("click",".advanced-mask-layer").on("click",".advanced-mask-layer",function(){a.hide()}),e.isPad){if(this.page.hasClass("selector-active"))return this.hide(),!0;var n=(e.getActiveLayer().find(".page-content"),e.getActiveLayer().width()),o=e.getActiveLayer().height(),a=this,s=e.getElementVisibleTop(this.targetElement[0]),r=e.getElementVisibleLeft(this.targetElement[0]);s+this.targetElement.height();(s+this.targetElement.height()/2)/o>.5?(this.page.find(".arrow").removeClass("up").addClass("down"),this.page.css("top","auto"),this.page.css("bottom",o-s+15+"px")):(this.page.find(".arrow").removeClass("down").addClass("up"),this.page.css("top",s+this.targetElement.height()+15+"px"),this.page.css("bottom","auto")),r+this.targetElement.width()/2/n>.5?(this.page.find(".arrow").removeClass("left").addClass("right"),this.page.css("left","auto"),this.page.css("right",n-(r+this.targetElement.width()/2)-38+"px")):(this.page.find(".arrow").removeClass("right").addClass("left"),this.page.css("right","auto"),this.page.css("left",r-38+"px"))}t.showAdvancedLoad()},afterShow:function(){var t=this.page.find("ul.page-content");e.isPad?t.css("margin-bottom",this.page.find(".describe").height()+"px"):t.css("margin-top",this.page.find(".describe").height()+1+"px")},afterHide:function(){$(e.getActiveLayer()).off("click",".advanced-mask-layer"),t.removeAdvancedLoad(),e.isPad&&(this.page.removeClass("page-transitioning"),this.page.off(e.transitionEnd))},setData:function(e){for(var t="",i=0;i<e.length;i++){var a=this.TEMPLATE.ITEM,n=e[i];a=a.replace("${value}",n.value),a=a.replace("${text}",n.text),a=a.replace("${class}",this.disableIndex&&this.disableIndex==i?"disabled-item":""),this.disableIndex&&this.disableIndex==i&&(a=a.replace("${class}","disabled-item")),this.data[(""==n.value?0:n.value)+n.text.trim()]=n,t+=a}this.page.find("ul").html(t)},selectValue:function(e){this.page.find("li").removeClass("selected").find(".radio").removeClass("selected"),this.page.find("li[value='"+e+"']").addClass("selected").find(".radio").addClass("selected")},setValue:function(e){return function(){var t=$(this);if(!e.disableIndex||e.config.data[e.disableIndex].value!=t.attr("value")){var i=e.data[t.attr("value")+t.text().trim()];t.siblings().removeClass("selected").find(".radio").removeClass("selected"),t.addClass("selected").find(".radio").addClass("selected"),e.hide(),e.callback&&e.callback(i)}}},changeDisable:function(e){e?this.disableIndex=e:this.disableIndex=null,this.setData(this.config.data)}};return a.elem=$(this),a.targetElement||(a.targetElement=a.elem),a.elem.on("click",function(e){a.show(e),a.elem.blur()}),a}})}.apply(t,a),!(void 0!==n&&(e.exports=n))},68:function(e,t,i){var a,n;a=[i(22),i(30),i(36),i(37),i(64)],n=function(e,t,i,a){t.onrender("h5_orderAuthorization",function(e){function t(e){var t=e.map(function(e){return{checked:0,text:e.value,value:e.key}});return t}function n(t){var a,n=!0,o=new RegExp(r.activeItem.regex);switch(t){case"mobile":n=o.test(r.activeItem.value+$("#mobile",e).val()),a="请输入正确的手机号码";break;case"smsCode":n=""!=$("#smsCode",e).val(),a="请输入短信验证码";break;case"valideSmsCode":n=""!=$("#valideSmsCode",e).val(),a="请输入图形验证码";break;case"valideApiCode":n=""!=$("#valideApiCode",e).val(),a="请输入图形验证码"}return n||i.alert(a),n}function o(e){var t={};e.mobileno?t.mobileno=e.mobileno:void 0,e.checkcode?t.checkcode=e.checkcode:void 0,$.ajax({url:window.pageInfo.subPath+"api/sendsms/",type:"post",timeout:2e4,data:t,success:e.success,error:e.error})}function s(e){var t={};e.mobileno?t.mobileno=e.mobileno:void 0,e.dynamiccode?t.dynamiccode=e.dynamiccode:void 0,e.verifycode?t.verifycode=e.verifycode:void 0,$.ajax({url:window.pageInfo.subPath+"api/order/authorize/",type:"post",timeout:2e4,data:t,success:e.success,error:e.error})}$DATA_AUTHORIZATION.orderDuration=t($DATA_AUTHORIZATION.time),delete $DATA_AUTHORIZATION.item;var r={dataSource:$DATA_AUTHORIZATION.areaCode,activeItem:null,component:null,init:function(){this.dataSource&&this.dataSource.length>0&&(this.dataSource[0].checked=1,this.activeItem=this.dataSource[0],this.component=$(".area-code",e).slideSelector({title:"选择手机号地区",data:this.dataSource,initValue:this.activeItem,callback:function(t){this.activeItem=t,$(".area-code .hotel_text p",e).html(this.activeItem.text)}.bind(this)}),a.add("areacode",this.component))}};r.init();var c={dataSource:$DATA_AUTHORIZATION.orderDuration,activeItem:null,component:null,init:function(){this.dataSource&&this.dataSource.length>0&&(this.dataSource[0].checked=1,this.activeItem=this.dataSource[0],this.component=$(".order-duration",e).slideSelector({title:"选择日期范围",data:this.dataSource,initValue:this.activeItem,callback:function(t){this.activeItem=t,$(".order-duration .hotel_text p",e).html(this.activeItem.text)}.bind(this)}),a.add("orderduration",this.component))}};c.init();var l={init:function(){$("#valideSmsCodeImg").on("click",function(){$("#valideSmsCodeImg").attr("src",$("#valideSmsCodeImg").attr("src")+"&t="+Date.now())},!1)}};l.init();var d={lock:!0,timer:null,$btnSmsCode:$("#btnSmsCode"),delay:function(){var e=60;return function(){this.timer=setInterval(function(){this.$btnSmsCode.html(e+"s后重试"),0==e&&(this.$btnSmsCode.html("获取验证码"),this.lock=!0,clearInterval(this.timer)),e--}.bind(this),1e3)}},handleSmsCodeSuccess:function(e){if(e.errorCode)switch(this.lock=!0,e.errorCode){case"NO_MOBILE_NUM":i.alert("手机号输入错误，请检查后重试");break;case"CHECKCODE_INPUT_ERROR":i.alert("图形验证码输入错误，请检查后重试");break;case"SEND_SMS_FAILED":i.alert("短信发送失败，请稍后重试")}else{var t=this.delay();t.call(this)}},handleSmsCodeError:function(e){this.lock=!0,i.alert("获取短信验证码失败，请稍后重试")},init:function(){this.$btnSmsCode.on("click",function(){if(this.lock){var e=n("mobile")&&n("valideSmsCode");if(e){this.lock=!1;var t=r.activeItem.value+$("#mobile").val(),i=$("#valideSmsCode").val(),a={mobileno:t,checkcode:i,success:this.handleSmsCodeSuccess.bind(this),error:this.handleSmsCodeError.bind(this)};o(a)}}}.bind(this))}};d.init();var h={hasError:!1,lock:!0,$btnQueryOrder:$("#btnQueryOrder"),handleQueryOrderSuccess:function(e){if(slark.get("h5_orderAuthorization").stopLoading(),e.errorCode){switch(e.errorCode){case"NO_SMS_NUM":i.alert("短信验证码为空");break;case"CHECKCODE_INPUT_ERROR":i.alert("图形验证码输入错误，请检查后重试");break;case"SMS_INPUT_ERROR":i.alert("短信验证码输入错误");break;case"API_ERROR":i.alert("查询订单失败，请重试")}e.verifycodeUrl?(this.hasError=!0,$("#valideApiCodeImg").attr("src",e.verifycodeUrl+"&t="+Date.now()),$("#valideApiCodeField").show()):(this.hasError=!1,$("#valideApiCodeField").hide())}else location.href=window.pageInfo.subPath+"orderlist?model=1&mobile="+r.activeItem.value+$("#mobile").val()+"&orderduration="+c.activeItem.value},handleQueryOrderError:function(){slark.get("h5_orderAuthorization").stopLoading(),i.alert("查询订单失败，请重试")},init:function(){this.$btnQueryOrder,$("#btnQueryOrder").on("click",function(){var e=this.hasError?n("mobile")&&n("smsCode")&&n("valideApiCode"):n("mobile")&&n("smsCode");if(e){this.lock=!1,slark.get("h5_orderAuthorization").startLoading();var t=r.activeItem.value+$("#mobile").val(),i=$("#smsCode").val(),a=$("#valideApiCode").val(),o={mobileno:t,dynamiccode:i,success:this.handleQueryOrderSuccess.bind(this),error:this.handleQueryOrderError.bind(this)};this.hasError&&(o.verifycode=a),s(o)}}.bind(this)),$("#valideApiCodeImg").on("click",function(){$this=$(this);var e=$this.attr("src");e+="&t="+new Date,$this.attr("src",e)})}};h.init()})}.apply(t,a),!(void 0!==n&&(e.exports=n))}});