/*
a("list", function(a) {
	"use strict";
	var b = this,
		c = (b.$helpers, b.$each),
		d = a.listInfo,
		e = (a.list, a.index, b.$string),
		f = (a.facilityList, a.facilityList_index, a.preferential, a.$index, "");
	return c(d, function(a) {
		f += ' <li class="hotel-item" data-url="', 
		f += e(a.HotelUrl), 
		f += '"> <div class="pic">' ,
		c(a.activityTag, function(a){
			f+=" ",
			a[0]
		}),
		f+=  '<img srcset="',
		f +='';
		f += e(a.HotelImg),
		f += '"></div> <div class="info"> <p class="name">', 
		f += e(a.HotelName), 
		f += '</p> <p class="comt"> ',
		0 != a.HotelRate ? (f += " ", f += e(a.HotelRate), f += "%<span>\u597d\u8bc4</span> ") : 0 == a.HotelRate && 0 != a.totalCommentCount && (f += " ", f += e(a.HotelRate), f += "%<span>\u597d\u8bc4</span> "),
		f += ' </p> <p class="fac"> <span>',
		f += e(a.HotelType), 
		f += "</span> ", 
		c(a.facilityList, function(a) {
			f += " ", 
			"1" == a.type && 1 == a.hasSupport ? 
				f += ' <i class="icon-parking"></i> ' : 
				"2" == a.type && 1 == a.hasSupport ? 
					f += ' <i class="icon-wifi"></i> ' : 
					"3" == a.type && 1 == a.hasSupport ?
						f += ' <i class="icon-wifi"></i> ' : 
						"4" == a.type && 1 == a.hasSupport ? 
							f += ' <i class="icon-bra"></i> ' : 
							"5" == a.type && 1 == a.hasSupport ? 
								f += ' <i class="icon-bui"></i> ' : 
								"6" == a.type && 1 == a.hasSupport ? 
									f += ' <i class="icon-swim"></i> ' : 
									"7" == a.type && 1 == a.hasSupport ? 
										f += ' <i class="icon-apus"></i> ' :
										"8" == a.type && 1 == a.hasSupport ? 
											f += ' <i class="icon-meeting"></i> ' :
											"9" == a.type && 1 == a.hasSupport && (f += ' <i class="icon-buz"></i> '), 
			f += " "
		}), 
		f += ' </p> <p class="district"> ',
		"" != a.HotelAddress && (f += ' <span class="d1">', f += e(a.HotelAddress), f += "</span> "), 
		f += " ", 
		"" != a.businessAreaName && "" != a.HotelAddress && a.HotelAddress != a.businessAreaName ? 
			(f += ' <span class="d3">', f += e(a.businessAreaName), f += "</span> ") :
			"" == a.HotelAddress && "" != a.businessAreaName && a.HotelAddress != a.businessAreaName && (f += ' <span class="d3 d4">', f += e(a.businessAreaName), f += "</span> "), 
		f += " ",
		"0.0" != a.HotelDistance && (f += " ",
									f += "" == a.HotelAddress && "" == a.businessAreaName ? ' <span class="d2 d4"> ' : ' <span class="d2"> ', 
									f += " ", 
									"" != a.HotelAround && (f += "<span>\u8ddd</span>"), 
									f += "<b>",
									f += e(a.HotelAround),
									f += "</b><i>", 
									f += e(a.HotelDistance),
									"1" == a.calDistanceType && (f += "\u7c73"),
									"2" == a.calDistanceType && (f += "\u516c\u91cc"),
									f += "</i> </span> "), 
		f += ' </p> </div> <div class="right-wrap"> <div class="r-tab"> ', 
		"0" == a.TruePrice && (f += ' <p class="full">\u5df2\u6ee1\u623f</p> '), 
		f += " ", 
		"0" != a.TruePrice && (f += ' <p class="pri"> <b> ', 
							"0" != a.OriginalPrice && (f += " ", f += e(a.OriginalPrice), f += " "),
							f += " </b> <span><i>\uffe5</i>",
							f += e(a.TruePrice),
							f += "</span> </p> "),
		f += ' <p class="tags"> ', 
		c(a.preferential, function(a) {
			f += " ", 
			"1" == a && (f += ' <span class="app">APP\u65b0\u5ba2\u6298\u6263</span> '), 
			f += " ", 
			"2" == a && (f += ' <span class="m-sale">\u6ee1\u51cf</span>  '), 
			f += " ", 
			"3" == a && (f += ' <span class="qiang">APP\u65b0\u5ba2\u6298\u6263</span> '), 
			f += " ", 
			"4" == a && (f += ' <span class="r-sale">\u5468\u8fb9</span> '), 
			f += " ", 
			"5" == a && (f += ' <span class="sale">\u7279\u4ef7</span> '), 
			f += " ", 
			"6" == a && (f += ' <span class="lc">\u9f99\u8403</span> '), 
			f += " ", 
			"7" == a && (f += ' <span class="qiang">\u9650\u65f6</span> '), 
			f += " ", 
			"8" == a && (f += ' <span class="zx">\u4e13\u4eab</span> '), 
			f += " ", 
			"9" == a && (f += ' <span class="sale">\u8fd4</span> '),
			f += " ", 
			"10" == a && (f += ' <span class="sale">\u7ea2\u5305</span> '),
			f += " "
		}), 
		f += " ", 
		"" != d.listTags && (f += ' <span class="sale">', f += e(d.listTags), f += "</span> "), 
		f += " </p> </div> </div> </li> "
	}), 
	f += " ",
	1 != d.length && 2 != d.length || 0 != d.pageindex || (f += " ", c(d, function(a) {
		f += " ", 
		0 != a.baiduLatitude && 0 != a.baiduLongitude && (
			f += ' <li class="recommendNearHotel" data-method="searchNearHotelByHotelCoordinate" data-baiduLatitude="',
			f += e(a.baiduLatitude),
			f += '" data-baiduLongitude="',
			f += e(a.baiduLongitude), 
			f += '" data-hotelurl="',
			f += e(a.HotelUrl), 
			f += '"> <p class="recommendNearHotel-name">\u67e5\u770b&quot;', 
			f += e(a.HotelName), 
			f += "&quot;\u5468\u8fb9\u9152\u5e97</p> </li> "), 
			f += " "
		}), 
		f += " "), 
	f += " ", 
	new k(f)
}), 


3
{{each list.activityTags as activityTags activityTags_index }}
		 	{{if activityTags_index == 0 }}
		 		<span class="pic_tags">{{activityTags.tagName}}</span>
		 	{{/if}}
		{{/each}}

6
<span class="room_tit">普通间普通间</span>
{{each room.activityTags as activityTags activityTags_index}}
				{{if activityTags_index == 0}}
					<span class="pic_tags">{{activityTags.tagName}}</span>
				{{/if}}
			{{/each}}
		
54			
<span class="bra_tit">不含早（限时抢购）</span>
			{{each room.activityTags as activityTags activityTags_index}}
								{{if activityTags_index == 0}}
									<span class="pic_tags">{{activityTags.tagName}}</span>
								{{/if}}
							{{/each}}

list  941
,
												activityTags: [{tagName:"端午测试"}] ||data.hotelList[i].activityTags
<span class="pic_tags">端午节大促</span>

<span class="room_tit">普通间普通间</span><span class="pic_tags">端午节大促</span>


<span class="bra_tit">不含早（限时抢购）</span><span class="pic_tags">端午节大促</span>

a("list", function(a) {
	"use strict";
	var b = this,
		c = (b.$helpers, b.$each),
		d = a.listInfo,
		e = (a.list, a.index, b.$string),
		f = (a.activityTags, a.activityTags_index, b.$escape),
		g = (a.facilityList, a.facilityList_index, a.preferential, a.$index, "");
	return c(d, function(a) {
		g += ' <li class="hotel-item" data-url="', g += e(a.HotelUrl), g += '"> <div class="pic"> ', 
		c(a.activityTags, function(a, b) {
			g += " ", 0 == b && (g += " <span>", g += f(a.tagName), g += "</span> "), g += " "
		}),
		g += ' <img srcset="', g += e(a.HotelImg), g += '"></div> <div class="info"> <p class="name">', g += e(a.HotelName), g += '</p> <p class="comt"> ', 0 != a.HotelRate ? (g += " ", g += e(a.HotelRate), g += "%<span>\u597d\u8bc4</span> ") : 0 == a.HotelRate && 0 != a.totalCommentCount && (g += " ", g += e(a.HotelRate), g += "%<span>\u597d\u8bc4</span> "), g += ' </p> <p class="fac"> <span>', g += e(a.HotelType), g += "</span> ", c(a.facilityList, function(a) {
			g += " ", "1" == a.type && 1 == a.hasSupport ? g += ' <i class="icon-parking"></i> ' : "2" == a.type && 1 == a.hasSupport ? g += ' <i class="icon-wifi"></i> ' : "3" == a.type && 1 == a.hasSupport ? g += ' <i class="icon-wifi"></i> ' : "4" == a.type && 1 == a.hasSupport ? g += ' <i class="icon-bra"></i> ' : "5" == a.type && 1 == a.hasSupport ? g += ' <i class="icon-bui"></i> ' : "6" == a.type && 1 == a.hasSupport ? g += ' <i class="icon-swim"></i> ' : "7" == a.type && 1 == a.hasSupport ? g += ' <i class="icon-apus"></i> ' : "8" == a.type && 1 == a.hasSupport ? g += ' <i class="icon-meeting"></i> ' : "9" == a.type && 1 == a.hasSupport && (g += ' <i class="icon-buz"></i> '), g += " "
		}), g += ' </p> <p class="district"> ', "" != a.HotelAddress && (g += ' <span class="d1">', g += e(a.HotelAddress), g += "</span> "), g += " ", "" != a.businessAreaName && "" != a.HotelAddress && a.HotelAddress != a.businessAreaName ? (g += ' <span class="d3">', g += e(a.businessAreaName), g += "</span> ") : "" == a.HotelAddress && "" != a.businessAreaName && a.HotelAddress != a.businessAreaName && (g += ' <span class="d3 d4">', g += e(a.businessAreaName), g += "</span> "), g += " ", "0.0" != a.HotelDistance && (g += " ", g += "" == a.HotelAddress && "" == a.businessAreaName ? ' <span class="d2 d4"> ' : ' <span class="d2"> ', g += " ", "" != a.HotelAround && (g += "<span>\u8ddd</span>"), g += "<b>", g += e(a.HotelAround), g += "</b><i>", g += e(a.HotelDistance), "1" == a.calDistanceType && (g += "\u7c73"), "2" == a.calDistanceType && (g += "\u516c\u91cc"), g += "</i> </span> "), g += ' </p> </div> <div class="right-wrap"> <div class="r-tab"> ', "0" == a.TruePrice && (g += ' <p class="full">\u5df2\u6ee1\u623f</p> '), g += " ", "0" != a.TruePrice && (g += ' <p class="pri"> <b> ', "0" != a.OriginalPrice && (g += " ", g += e(a.OriginalPrice), g += " "), g += " </b> <span><i>\uffe5</i>", g += e(a.TruePrice), g += "</span> </p> "), g += ' <p class="tags"> ', c(a.preferential, function(a) {
			g += " ", "1" == a && (g += ' <span class="app">APP\u65b0\u5ba2\u6298\u6263</span> '), g += " ", "2" == a && (g += ' <span class="m-sale">\u6ee1\u51cf</span>  '), g += " ", "3" == a && (g += ' <span class="qiang">APP\u65b0\u5ba2\u6298\u6263</span> '), g += " ", "4" == a && (g += ' <span class="r-sale">\u5468\u8fb9</span> '), g += " ", "5" == a && (g += ' <span class="sale">\u7279\u4ef7</span> '), g += " ", "6" == a && (g += ' <span class="lc">\u9f99\u8403</span> '), g += " ", "7" == a && (g += ' <span class="qiang">\u9650\u65f6</span> '), g += " ", "8" == a && (g += ' <span class="zx">\u4e13\u4eab</span> '), g += " ", "9" == a && (g += ' <span class="sale">\u8fd4</span> '), g += " ", "10" == a && (g += ' <span class="sale">\u7ea2\u5305</span> '), g += " "
		}), g += " ", "" != d.listTags && (g += ' <span class="sale">', g += e(d.listTags), g += "</span> "), g += " </p> </div> </div> </li> "
	}), g += " ", 1 != d.length && 2 != d.length || 0 != d.pageindex || (g += " ", c(d, function(a) {
		g += " ", 0 != a.baiduLatitude && 0 != a.baiduLongitude && (g += ' <li class="recommendNearHotel" data-method="searchNearHotelByHotelCoordinate" data-baiduLatitude="', g += e(a.baiduLatitude), g += '" data-baiduLongitude="', g += e(a.baiduLongitude), g += '" data-hotelurl="', g += e(a.HotelUrl), g += '"> <p class="recommendNearHotel-name">\u67e5\u770b&quot;', g += e(a.HotelName), g += "&quot;\u5468\u8fb9\u9152\u5e97</p> </li> "), g += " "
	}), g += " "), g += " ", new k(g)
}), 

var controlSearchBoxVisible = {
			visible: true,
			data: {
				startY_IOS: 0,
				startY_Android: 0,
				endY_IOS: 0,
				endY_Android: 0
			},
			scroll: function(e) {
					controlSearchBoxVisible.data.endY_IOS = $('.page-content').scrollTop();
					controlSearchBoxVisible.data.endY_Android = $("body").scrollTop();
					var distanceIOS = controlSearchBoxVisible.data.endY_IOS - controlSearchBoxVisible.data.startY_IOS;
					var distanceAndroid = controlSearchBoxVisible.data.endY_Android - controlSearchBoxVisible.data.startY_Android;
					if((controlSearchBoxVisible.data.endY_IOS >= 93 || controlSearchBoxVisible.data.endY_Android >= 93)) {
						if(((distanceIOS > 5) || (distanceAndroid > 5)) && controlSearchBoxVisible.visible) {
							controlSearchBoxVisible.hide();
						}
						if(((distanceIOS < -5) || (distanceAndroid < -5)) && !controlSearchBoxVisible.visible) {
							controlSearchBoxVisible.show();
						}
					} else {
						if(!controlSearchBoxVisible.visible) {
							controlSearchBoxVisible.show();
						}
					}
					controlSearchBoxVisible.data.startY_IOS = controlSearchBoxVisible.data.endY_IOS;
					controlSearchBoxVisible.data.startY_Android = controlSearchBoxVisible.data.endY_Android;
			},
			show: function() {
				controlSearchBoxVisible.visible = true;
				$('.search-field').removeClass('hidein').addClass('showout');
				if (isWEIXIN) {
					$('.list-sider', dom).removeClass("is-top-position").addClass("not-top-position");
					$('.page').removeClass("scroll-top").addClass("scroll-down");
				}
			},
			hide: function() {
				controlSearchBoxVisible.visible = false;
				$('.search-field').removeClass('showout').addClass('hidein');
				if (isWEIXIN) {
					$('.list-sider', dom).addClass("is-top-position").removeClass("not-top-position");
					$('.page').removeClass("scroll-down").addClass("scroll-top");
				}
			}
		};
		
		
		if(isWEIXIN){
						if($('html').hasClass('android')) {
							$(document).unbind('scroll').bind('scroll', ajaxmore).bind('scroll', throttle(controlSearchBoxVisible.scroll, 100, 150));
						} else {
							main.children('.page-list').off('scroll', ajaxmore).on('scroll', ajaxmore).on('scroll', throttle(controlSearchBoxVisible.scroll, 100, 150));
						}
					}
					else{
						if($('html').hasClass('android')) {
							$(document).unbind('scroll').bind('scroll', ajaxmore).bind('scroll',listscroll).bind('scroll', throttle(controlSearchBoxVisible.scroll, 100, 150));
						} else {
							main.children('.page-list').off('scroll', ajaxmore).on('scroll', ajaxmore).on('scroll',listscroll).on('scroll', throttle(controlSearchBoxVisible.scroll, 100, 150));
						}
					}
					
5.27

finishedOrder.js 16
//事件绑定：异步请求订单完成状态
        var finishOrderProgress = {
          //beforeDis : "订单状态加载中...",
          $progress:$(".progress ul"),
          htmlModel:'<li class="#0#"><i>#1#</i>#2#</li>',
          init:function(){
          	 var _this = this;
          	 var precentUrl = window.location.href;
          	 if(!precentUrl.match("hotel/finishorder")){return;}
          	 var objData = _this.parseUrlParamToData(precentUrl);
          	 _this.ajaxPro("/hotel/api/getorderprogresslist/", objData);
          },
          //把URL参数转换为对象
          parseUrlParamToData:function (url) {
          	 var url = url|| "";
			if(url != ""){
				var abledUrlArray = url.split("?")[1];
				var paramArr = abledUrlArray.split("&");
				var param = {};
				for(var i=0,len = paramArr.length;i<len;i++){
					param[paramArr[i].split("=")[0]] = paramArr[i].split("=")[1];
				}
				return param;
			}else{
				return null;
			}
          },
          //格式化字符串
          formatString:function(model,value){
          	var str = model;
          	for(var i=0,len = arguments.length-1;i<len;i++){
          		str = str.replace(new RegExp("#["+i+"]#","g"),arguments[i+1]);
          	}
          	return str; 
          },
          ajaxPro:function(strUrl, objData){
          	var _this = this;
          	$.ajax({
          		url:strUrl,
          		data:objData,
          		type:"GET",
          		timeout:6000,
          		dataType:"JSON",
          		success:function(jsonData){
          			var result;
          			
          			if(jsonData){
          				console.log("success load orderStatus");
          				result = JSON.parse(jsonData);
          				if( result.orderProgressListViewModel.progressDescList && 
          					result.orderProgressListViewModel.progressDescList.length &&
          					result.orderProgressListViewModel.progressDescList.length>0){
          					var progressDescList = result.orderProgressListViewModel.progressDescList; 
	          				var len = progressDescList.length;
	          				var strHtml = "";
	          				for(var i=0;i<len;i++){
	          					strHtml+=_this.formatString(_this.htmlModel,progressDescList[i].status==1?"on":"","",progressDescList[i].info); 
	          				}
	          				strHtml && _this.$progress.html(strHtml);
	          				return;
          				}else{
          					_this.$progress.html('<li class="on"><i></i>获取订单状态失败</li>');	
          				}
          			}else{
          				_this.$progress.html('<li class="on"><i></i>获取订单状态失败</li>');	
          			}
          		},
          		error:function (ex) {
          			_this.$progress.html('<li class="on"><i></i>获取订单状态失败</li>');
          			console.log("error");
          		}
          	});
          }
       };
       
       finishOrderProgress.init();




*/