define(function() {
    /**
     * Frame : 框架，这里指视窗，一个html页面只有一个视窗
     * 视窗作为canvas的代言人，负责把元素对象画出来，而这个元素对象既可以是一个屏幕，也可以是 一个个按钮 
     * 一个页面可以有多个屏幕，屏幕可以相互切换；
     * 时间：2016-08-07
     * 作者：jinming1937@136.com
     */

    /**
     * Frame : 框架，这里指视窗，一个html页面只有一个视窗
     * @param {Object} option [配置]
     */
    function Frame(option) {
        this.canvas = option.canvas;
        this.width = option.width || document.body.clientWidth;
        this.height = option.height || document.body.clientHeight;
        this.resize(this.width, this.height);
        this.cxt = this.canvas.getContext("2d");
        this.context = this; //???
        this.elementIndex = 0;
        this.elementArray = [];
        this.eventCtrl();
    }
    /* 事件分发 */
    Frame.prototype.eventCtrl = function() {
        var _this = this;
        _this.catchElementTouchMove = null;
        _this.canvas.addEventListener("click", function(e) {
            _this.fire(e);
        }, false);

        _this.canvas.addEventListener("touchstart", function(e) {
            _this.fire(e);
        }, false);

        _this.canvas.addEventListener("touchmove", function(e) {
            _this.fire(e);
        }, false);

        _this.canvas.addEventListener("touchend", function(e) {
            _this.fire(e);
        }, false);

        _this.canvas.addEventListener("touchcancel", function(e) {
            _this.fire(e);
        }, false);
    };
    /**
     * 事件过滤
     * @param {Object} e [event：事件参数]
     */
    Frame.prototype.fire = function(e) {
        var _this = this;
        /* 只有touchend事件，支持touchcancel */
        var hasCancel = false;
        /* todo:多边形怎么办？touchmove 怎么办？此方法急需重新设计 */
        /* 已解决： 2016-09-29 */
        /* 事件触发 */
        var f = function(ev) {
            /* 倒叙遍历 */
            for (var i = _this.elementIndex - 1; i >= 0; i--) {
                if (_this.isInElementArea({ x: ev.clientX, y: ev.clientY }, _this.elementArray[i])) {
                    /* 此处应该是绑定了move事件的元素才赋值 */
                    _this.catchElementTouchMove = _this.elementArray[i];
                    window.setTimeout(function() {
                        _this.elementArray[i].fire(e);
                    }, 0);
                    if (!_this.elementArray[i].isUpEvent) { /* 是否允许穿透 */
                        break;
                    }
                }
            }
        };
        /* 事件过滤 */
        switch (e.type.toLowerCase()) {
            case "click":
                f({
                    clientX: e.clientX,
                    clientY: e.clientY,
                    type: e.type.toLowerCase()
                });
                break;
            case "touchstart":
                f({
                    clientX: e.touches[0].clientX,
                    clientY: e.touches[0].clientY,
                    type: e.type.toLowerCase()
                });
                break;
            case "touchmove":
                _this.catchElementTouchMove ?
                    _this.catchElementTouchMove.fire(e) :
                    f({
                        clientX: e.changedTouches[0].clientX,
                        clientY: e.changedTouches[0].clientY,
                        type: e.type.toLowerCase()
                    });
                _this.catchElementTouchMove ? this.reRender() : "";
                break;
            case "touchend":
                hasCancel ?
                    "" :
                    f({
                        clientX: e.changedTouches[0].clientX,
                        clientY: e.changedTouches[0].clientY,
                        type: e.type.toLowerCase()
                    });
                _this.catchElementTouchMove = null;
                break;
            case "touchcancel":
                console.log("touchcancel");
                hasCancel = true;
                break;
        }
    };
    /**
     * reset the canvas`s width and height 
     * @param {Number} width width
     * @param {Number} height height
     */
    Frame.prototype.resize = function(width, height) {
        var _this = this;
        _this.width = width || _this.width;
        _this.height = height || _this.height;
        _this.canvas.setAttribute("width", _this.width);
        _this.canvas.setAttribute("height", _this.height);
    };
    /**
     * 清理当前的画布
     */
    Frame.prototype.clear = function() {
            var _this = this;
            _this.canvas.setAttribute("width", _this.width);
        }
        /**
         * @param {Object} element 元素对象
         * @param {Boolean} hasAddToArray 是否已经被frame管理
         */
    Frame.prototype.manage = function(element) {
        var _this = this;
        _this.elementArray.push(element);
        _this.elementIndex++;
    };
    /**
     * @param {Object} element 被销毁的元素
     */
    Frame.prototype.destroy = function(element) {

    };
    /**
     * 有移动元素移动的时候，frame 帮助自动渲染：主动调用元素的draw方法
     */
    Frame.prototype.reRender = function() {
        var _this = this;
        this.clear();
        for (var i = this.elementArray.length - 1; i >= 0; i--) {
            /* 异步画会重叠，导致“失帧” */
            //(function(ele){
            //	setTimeout(function(){
            //		ele.draw && ele.draw();
            //		console.log("456");
            //	},0);	
            //}(_this.elementArray[i]));
            _this.elementArray[i].draw();
        }
    }

    /**
     * 
     * @param {Object} position position
     * @param {Object} element element
     */
    Frame.prototype.isInElementArea = function(position, element) {
        var bl = false;
        if(typeof element.elementType === "undefined" || element.elementType === 0){
            throw("element`s elementType property must exist!!!")
        }
        switch (element.elementType) {
            case 1:
                //O
                bl = Math.pow((position.x - element.rollX),2) + Math.pow((position.y - element.rollY),2) - Math.pow(element.radius,2) <= 0 ? true:false;
                break;
            case 2:
                bl = rayCasting(position, element.positionXYArray);
                break;
            case 99:
                bl = false;
                break;
        }
        return bl;
    }

    /**
     * author : http://blog.csdn.net/jq_develop/article/details/44981127
     * @description 射线法判断点是否在多边形内部
     * @param {Object} p [待判断的点，格式：{ x: X坐标, y: Y坐标 }]
     * @param {Array} poly [多边形顶点，数组成员的格式同 p]
     * @return {String} 点 p 和多边形 poly 的几何关系
     */
    function rayCasting(p, poly) {
        var px = p.x,
            py = p.y,
            flag = false

        for (var i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
            var sx = poly[i].x,
                sy = poly[i].y,
                tx = poly[j].x,
                ty = poly[j].y

            // 点与多边形顶点重合
            if ((sx === px && sy === py) || (tx === px && ty === py)) {
                return 'on'
            }

            // 判断线段两端点是否在射线两侧
            if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
                // 线段上与射线 Y 坐标相同的点的 X 坐标
                var x = sx + (py - sy) * (tx - sx) / (ty - sy)

                // 点在多边形的边上
                if (x === px) {
                    return 'on'
                }

                // 射线穿过多边形的边界
                if (x > px) {
                    flag = !flag
                }
            }
        }

        // 射线穿过多边形边界的次数为奇数时点在多边形内
        return flag;
    }
    //	function ctrlHorizontal(){
    //		var width = document.body.clientWidth,
    //			height = document.body.clientHeight;
    //		var x=width>height;
    //		if(x){
    //			frame.cxt.font= "40px Georgia";
    //			frame.cxt.fillStyle = "#000";
    //			frame.cxt.fillText(
    //				"抱歉，不支持横屏！！！",
    //				10,
    //				40,
    //				300);
    //			return true;
    //		}
    //	}
    //	ctrlHorizontal();
    //	/* resize */
    //	window.onresize = function(e){
    //		frame.resize(document.body.clientWidth,document.body.clientHeight);
    //		if(ctrlHorizontal()){
    //			return;
    //		};
    //		for(var i=frame.elementIndex-1;i>=0;i--){
    //			(function(ii){
    //				setTimeout(function(){
    //					frame.elementArray[ii].draw();
    //				},0);
    //			}(i));
    //		}
    //		
    //	};
    return Frame;
});