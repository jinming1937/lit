/* 每一个插件工具都已一个顶级的类名，保证其样式不被覆盖，这个类名应该和其文件名一致 */
/**
 * 城市选择
 */
define(function(){
	console.log('load chooseCity');
	function ChooseCity() {
	    //
	    this.page = null;
	    this.presentCityBox = null; /*当前城市区域*/
	    this.hotCitysBox = null; /*热门城市区域*/
	    this.allCitysBox = null; /*全部城市区域*/
	    this.searchInput = null; /*搜索框*/
	    this.pageSearch = null; /*搜索结果填充区域*/
	    this.pageSelect = null; /*当前＋热门＋全部城市 区域*/
	    this.innerMask = null; /*遮罩层*/
	    this.isWaitingToSearch = false; /*是否等待搜索*/
	    this.isRenderAllCity = false; /*是否渲染了 全部城市*/
	    this.isRenderHotCity = false; /*是否渲染了 热门城市*/
	    this.perfectHotCity = []; /*热门城市数据*/
	    this.presentCityObj = null; /*当前城市*/
	    this.perfectAllCity = []; /*全部城市数据*/
	}
	ChooseCity.prototype = {
	    constructor: ChooseCity,
	    TEMPLATE: {
	        PRESENTCITYS: '<li city-id="#{cityId}" area-type="" area-id=""><span>#{cityName}</span></li>',
	        HOTCITYS: '<li city-id="#{cityId}" pinyin="#{pinyin}" area-type="" area-id="" class=""><span>#{cityName}</span></li>',
	        ALLCITYS: '<dl class="#{on}"><dt>#{ABC}</dt>#{cityList}</dl>',
	        ALLCITYSLIST: '<dd city-id="#{cityId}" pinyin="#{pinyin}"><span>#{cityName}</span></dd>',
	        SUGGESTIONITEM: '<li city-id="${id}" type="${type}" city-name="${city-name}" keyword="${keyword}" area-type="${area-type}" area-id="${area-id}" pinyin="${pinyin}">${city}<span>${region}</span></li>',
	        NOSUGGESTION: '<li class="no">小主，没有您想要的结果呢～</li>',
	        BODY: '<div class="chooseCity"><div class="citys search_show"><header class="bar bar-nav flight-order-head"><div class="search-input "><input type="input" value="" placeholder="搜索城市"><i></i></div><div class="pull-right serch_closed"><span><i></i></span></div></header><div class="page-content page-select" style=""><div class="search-history"><div class="page-title">当前城市</div><div class="city-list"><ul></ul></div></div><div class="hot-city"><div class="page-title">热门城市</div><div class="city-list"><ul></ul></div></div><div class="all-city"><div class="page-title">全部城市</div><div class="numcitiyslist"></div></div></div><div class="page-content page-search" style="display:none;"><ul></ul></div><div class="inner-mask"></div></div></div>',
	    },
	    config: function(config) {
	        this.callback = config.callback;
	        this.presentCityObj = config.presentCityObj;
	        var preferCity = config.getPerfectAllCity && config.getPerfectAllCity() || {};
	        this.perfectHotCity = preferCity.more || [];
	        this.perfectAllCity = preferCity.data || [];
	    },
	    init: function() {
	        this.page = $(this.TEMPLATE.BODY);
	        this.presentCityBox = this.page.find(".search-history .city-list ul");
	        this.hotCitysBox = this.page.find(".hot-city .city-list ul");
	        this.allCitysBox = this.page.find(".all-city .numcitiyslist");
	        this.searchInput = this.page.find(".search-input input");
	        this.clearInput = this.page.find(".search-input i");
	        this.clearInput.hide();
	        this.pageSearch = this.page.find(".page-search");
	        this.pageSelect = this.page.find('.page-select');
	        this.innerMask = this.page.find(".inner-mask");
	        this.goBack = this.page.find(".serch_closed");
	        this.cancelBtn = this.goBack.find("span");
	        this._ctrlHotCitys();
	        this.perfectAllCity.length > 0 ? this._ctrlAllCitys() : "";
	        this._bindEvent();
	    },
	    /* */
	    beforeShow: function() {
	        var _this = this;
	        this.isRenderAllCity ? "" : this._ctrlAllCitys();
	        this.isRenderHotCity ? "" : this._ctrlHotCitys();
	        _this.presentCityBox.html(this.TEMPLATE.PRESENTCITYS.replace(/\#\{cityId\}/g, this.presentCityObj.did)
	            .replace(/\#\{cityName\}/g, this.presentCityObj.cityName));
	    },
	    /** */
	    _bindEvent: function() {
	        var _this = this;
	        var clearFlag = false;
	        this.goBack.on("click", function() {
	            if (_this.searchInput.val().length > 0 || _this.cancelBtn.html()=="取消" ||_this.innerMask.css("display") == "block") {
	                clearFlag = true;
	                _this.searchInput.val("");
	                _this.cancelBtn.html("<i></i>");
	                _this.pageSearch.hide();
	                _this.innerMask.hide();
	                _this.clearInput.hide();
	                _this.pageSelect.show();
	                return;
	            }
	            _this.page.hide();
	            return false;
	        });
	        /* 收起展开城市 */
	        _this.allCitysBox.on("click", "dt", function() {
	            if ($(this).parent("dl").hasClass("on")) {
	                $(this).parent("dl").removeClass("on")
	            } else {
	                $(this).parent("dl").addClass("on");
	            }
	        });
	        /* (X) */
	        _this.clearInput.on("click", function() {
	            if (_this.searchInput.val().length > 0) {
	                _this.searchInput.val("");
	                _this.pageSelect.show();
	                _this.innerMask.show();
	                _this.pageSearch.hide();
	                $(this).hide();
	                return;
	            }
	        });
	        /* 文本框事件 */
	        _this.searchInput.on("focus",function(e){
	            if (!(_this.pageSearch.css('display') == 'block') && this.value.trim() == '') {
	                _this.innerMask.show();
	                _this.cancelBtn.html("取消");
	            }
	        });
	        /* 文本框事件 */
	        _this.searchInput.on("touchend", function(e) {
	            if (!(_this.pageSearch.css('display') == 'block') && this.value.trim() == '') {
	                _this.innerMask.show();
	                _this.cancelBtn.html("取消");
	            }
	        });
	        _this.searchInput.on("blur", function() {
	            /* 点击，手机键盘上点击完成 */
	            //_this.innerMask.hide();
	        });
	        _this.searchInput.bind("input propertychange touchend", function(e) {
	            var input = this;
	            if (input.value.length > 0) {
	                _this.clearInput.show();
	            }else{
	                _this.clearInput.hide();
	            }
	            if (!_this.isWaitingToSearch) {
	                _this.isWaitingToSearch = true;
	                setTimeout(function() {
	                    _this.isWaitingToSearch = false;
	                    var value = input.value;
	                    if (value.trim() != '') {
	                        _this.innerMask.hide();
	                        var data = _this.perfectAllCity;
	                        if (!!data && data.length > 0) {
	                            var content = '';
	                            for (var i = 0, ll = data.length; i < ll; i++) {
	                                var suggestion = data[i];
	                                if (suggestion.cname.match(new RegExp(value.toLowerCase(), 'g')) || suggestion.pinyin.match(new RegExp(value.toLowerCase(), 'g'))) {
	                                    content += _this.TEMPLATE.SUGGESTIONITEM
	                                        .replace('${id}', suggestion.did)
	                                        .replace('${type}', "")
	                                        .replace('${region}', "")
	                                        .replace('${city-name}', suggestion.cname)
	                                        .replace('${keyword}', "")
	                                        .replace('${area-id}', "")
	                                        .replace('${area-type}', "")
	                                        .replace('${city}', suggestion.cname)
	                                        .replace('${pinyin}', suggestion.pinyin);
	                                }
	                            }
	                            if (content !== "") {
	                                _this.pageSearch.find('ul').html(content);
	                            } else {
	                                /*  */
	                                _this.pageSearch.find('ul').html(_this.TEMPLATE.NOSUGGESTION);
	                            }
	                        } else {
	                            _this.pageSearch.find('ul').html(_this.TEMPLATE.NOSUGGESTION);
	                        }
	                        console.log("success");
	                        _this.pageSelect.hide();
	                        _this.pageSearch.show();
	                        _this.innerMask.hide();
	                    } else {
	                        if(clearFlag){
	                            // 如果是取消按钮，清空，不弹出蒙层
	                        }else{
	                            _this.innerMask.show();
	                            _this.pageSelect.show();
	                            _this.pageSearch.hide();
	                        }
	                    }
	                }, 500);
	            }
	            clearFlag = false;
	        });
	
	        function _cityClickEvent_() {
	            var item = $(this);
	            var city = {
	                cityId: item.attr('city-id'),
	                cityName: item.find('span').text(),
	                areaId: item.attr('area-id'),
	                areaType: item.attr('area-type'),
	                pinyin: item.attr('pinyin')
	            };
	
	            _this._doReturn(city);
	        }
	        //城市点击事件
	        _this.pageSelect.on('click', 'li[city-id]', _cityClickEvent_);
	        _this.pageSelect.on('click', 'dd[city-id]', _cityClickEvent_);
	
	        //关键字点击事件
	        _this.pageSearch.on('click', 'ul li', function() {
	            var item = $(this);
	            var city = {
	                cityId: item.attr('city-id'),
	                cityName: item.attr('city-name'),
	                keyword: item.attr('keyword'),
	                regionType: item.attr('type'),
	                areaId: item.attr('area-id'),
	                areaType: item.attr('area-type'),
	                pinyin: item.attr('pinyin')
	            };
	            _this._doReturn(city);
	        });
	        /* 遮罩 */
	        _this.innerMask.on("click", function() {
	            $(this).hide();
	            _this.cancelBtn.html("<i></i>");
	        });
	    },
	    /**
	     * 选择城市后执行的回调
	     * @param {Object} city 所选城市
	     */
	    _doReturn: function(city) {
	        var _this = this;
	        if (!!this.callback) {
	            this.callback(city);
	        }
	        _this.searchInput.val("");
	        _this.pageSelect.show();
	        _this.pageSearch.hide();
	        _this.innerMask.hide();
	        this.hide();
	    },
	    /**
	     * 当字数大于num+1个字时，显示为num个字加…,没有num ，默认是10
	     * @param {String} word 字符串
	     * @param {Number} num 字数
	     */
	    _wordFilter: function(word, num) {
	        num = num || 10;
	        if (word.length > num) {
	            return word.substring(0, num - 1) + '…';
	        }
	        return word;
	    },
	    /**
	     * 热门城市
	     */
	    _ctrlHotCitys: function() {
	        var _this = this,
	            hotCityList = _this.perfectHotCity,
	            strHTML = "暂时无数据";
	        if (hotCityList.length > 0) {
	            _this.isRenderHotCity = true;
	            strHTML = '';
	            for (var i = 0, len = hotCityList.length; i < len; i++) {
	                strHTML += _this.TEMPLATE.HOTCITYS.replace(/\#\{pinyin\}/g, hotCityList[i].alias_en)
	                    .replace(/\#\{cityId\}/g, hotCityList[i].did)
	                    .replace(/\#\{cityName\}/g, hotCityList[i].cityname);
	            }
	        }
	        _this.hotCitysBox.html(strHTML);
	    },
	    /**
	     * 全部城市
	     */
	    _ctrlAllCitys: function() {
	        var _this = this,
	            allCityList = _this.perfectAllCity.concat([]),
	            strABC = 'abcdefghijklmnopqrstuvwxyz',
	            strHTML = "暂时无数据",
	            strInnerHTML = "",
	            item = "",
	            i = 0,
	            len = strABC.length,
	            j = 0,
	            leng = 0;
	        var isFirst = true;
	        if (allCityList.length > 0) {
	            this.isRenderAllCity = true;
	            strHTML = "";
	            strInnerHTML = '';
	            for (; i < len; i++) {
	                item = strABC.charAt(i);
	                strInnerHTML = "";
	                for (j = 0, leng = allCityList.length; j < leng; j++) {
	                    if (allCityList[j].fletter === item) {
	                        strInnerHTML += _this.TEMPLATE.ALLCITYSLIST.replace(/\#\{pinyin\}/g, allCityList[j].pinyin)
	                            .replace(/\#\{cityId\}/g, allCityList[j].did)
	                            .replace(/\#\{cityName\}/g, allCityList[j].cname);
	                        allCityList.splice(j, 1);
	                        leng--;
	                    }
	                }
	                if (strInnerHTML !== "") {
	                    strHTML += _this.TEMPLATE.ALLCITYS
	                        .replace(/\#\{on\}/g, isFirst ? "on" : "")
	                        .replace(/\#\{ABC\}/g, item.toUpperCase())
	                        .replace(/\#\{cityList\}/g, strInnerHTML);
	                    isFirst = false;
	                }
	            }
	        }
	        _this.allCitysBox.html(strHTML);
	    }
	};	
	return ChooseCity;
});
