/**
 * Frame : 框架，这里指视窗，一个html页面只有一个视窗
 * 视窗作为canvas的代言人，负责把元素对象画出来，而这个元素对象既可以是一个屏幕，也可以是 一个个按钮 
 * 一个页面可以有多个屏幕，屏幕可以相互切换；
 * 时间：2016-08-07
 * 作者：jinming1937@163.com
 */

/**
 * Frame : 框架，这里指视窗，一个html页面只有一个视窗
 * @param {Object} option [配置]
 */
function Frame(option) {
    this.canvas = option.canvas;
    this.width = option.width || document.body.clientWidth;
    this.height = option.height || document.body.clientHeight;
    this.getCurrentRouter = option.getCurrentRouter;
    this.resize(this.width, this.height);
    this.cxt = this.canvas.getContext("2d");
    this.context = this; //???
    this.elementIndex = 0;
    this.elementArray = [];
    this.eventCtrl();
}

var isTencent = true,
    useCapture = true;
/**
 * 事件分发
 * 有关于e.preventDefault() 和 useCapture 设为 false :
 *      针对于的是Dom 和 Bom 对象，使其捕获的事件不会冒泡到DOM父级，以及document, windows上
 * 对于内存的canvas element对象 要区分
 */
Frame.prototype.eventCtrl = function() {
    var _this = this;
    _this.catchElementTouchMove = null;
    _this.canvas.addEventListener("click", function(e) {
        _this.fire(e);
        isTencent ? e.preventDefault() : "";
    }, useCapture);

    _this.canvas.addEventListener("touchstart", function(e) {
        _this.fire(e);
        isTencent ? e.preventDefault() : "";
    }, useCapture);

    _this.canvas.addEventListener("touchmove", function(e) {
        _this.fire(e);
        isTencent ? e.preventDefault() : "";
    }, useCapture);

    _this.canvas.addEventListener("touchend", function(e) {
        _this.fire(e);
        isTencent ? e.preventDefault() : "";
    }, useCapture);

    _this.canvas.addEventListener("touchcancel", function(e) {
        _this.fire(e);
        isTencent ? e.preventDefault() : "";
    }, useCapture);
};

/**
 * 事件过滤 & 事件触发
 * @param {Object} e [event：事件参数]
 */
Frame.prototype.fire = function(e) {
    var _this = this;
    /* 只有touchend事件，支持touchcancel */
    var hasCancel = false;

    /**
     * 事件触发
     * todo:
     * <1>多边形怎么办？touchmove 怎么办？此方法急需重新设计
     * <2>弧线组合的多边形怎么办？需要牺牲性能？应该用这个 
     * context.isPointInPath & context.isPointInStroke
     * 注意这两个方法，只能用在基于路径的绘图上，立即绘图方法（fillRect,strokeRect,fillText,strokeText ）总是返回false
     * 注意，在调用beginPath() 后，路径重置，与beginPath后的路径进行比较
     * done
     * <1>: 2016-09-29 方案：射线法判断触点是否在多边形内部
     * <2>: 2017-03-25 方案：context.isPointInPath & context.isPointInStroke
     * @param {Object} ev 包含有事件对象部分属性的对象
     */
    var f = function(ev) {
        var cacheElement = null;
        var cacheIndex = -1;
        var isFireAim = false;
        var cacheElementArray = _this.elementArray.concat([]); //颠倒数组顺序
        /* 倒叙遍历 */
        cacheElementArray.reverse().forEach(function(item, i) {
            _this.cxt.save();
            item.element.createPath();
            if (_this.cxt.isPointInPath(ev.clientX, ev.clientY) && !isFireAim) {
                isFireAim = true;
                cacheElement = item.element;
                /* 此处应该是绑定了move事件的元素才赋值 */
                /* 这也就解释了为什么addWatching 且 ontouchmove= 添加事件的时候不会卡顿，单独添加的时候会卡顿 */
                if (item.element.hasOwnProperty("ontouchmove") || item.element.allowMove) {
                    cacheIndex = i; //移动这个元素，缓存这个索引
                    /* 优化move事件，解决手指move移动很快的时候，"丢失"元素 */
                    _this.catchElementTouchMove = item;
                }
                /*是否允许穿透*/
                // if (!_this.elementArray[i].element.isUpEvent) {  
                //break;
                // }
            }
            _this.cxt.restore();
        });
        if (cacheIndex > -1 && _this.catchElementTouchMove && ev.type === "touchstart") {
            /* 后new 的元素，先画出来，但是，move 的元素,要最先画出来,move 元素 移动到array最后 */
            /* 只发生在touchstart处理阶段 */
            _this.elementArray.splice(_this.elementArray.length - 1 - cacheIndex, 1);
            _this.elementArray.push(_this.catchElementTouchMove);
        }
        if (cacheElement) {
            //触点有元素 ，执行这个元素的事件
            cacheElement.fire(e);
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
            /**
             * 因为touchstart总是最先执行，如果这个f函数轮询到该元素，发现该元素存在touchmove事件，就缓存下来，如果没有，就算了
             * 如果这个元素已经被缓存下来，touchmove 轮询到，触发的时候，直接去执行这个元素的touchmove
             */
            _this.catchElementTouchMove && _this.catchElementTouchMove.element ?
                _this.catchElementTouchMove.element.fire(e) :
                f({
                    clientX: e.changedTouches[0].clientX,
                    clientY: e.changedTouches[0].clientY,
                    type: e.type.toLowerCase()
                });
            /* 假设requestAnimationFrame 每分钟执行60次，人眼无法分辨，所以这个 this.reRender可以不用重复调用，完全托管给requestAnimationFrame */
            // _this.catchElementTouchMove ? this.reRender() : "";
            break;
        case "touchend":
            hasCancel ?
                "" :
                f({
                    clientX: e.changedTouches[0].clientX,
                    clientY: e.changedTouches[0].clientY,
                    type: e.type.toLowerCase()
                });
            /**
             * 执行完touchend 后，手指相当于离开了这个屏幕，把目标元素置空
             * @type {Object}
             */
            _this.catchElementTouchMove = null;
            break;
        case "touchcancel":
            /**
             * 执行了touchcancel 就不再执行后面的事件了： touchend
             * @type {Boolean}
             */
            hasCancel = true;
            break;
    }
};

/**
 * 重置宽高
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
 * 采用canvas的上下文context的方法clearRect来清理
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 */
Frame.prototype.clear = function(x, y) {
    var _this = this;
    x = typeof x !== 'number' ? 0 : x;
    y = typeof y !== 'number' ? 0 : y;
    // _this.canvas.setAttribute("width", _this.width);
    _this.cxt.clearRect(x, y, _this.width, _this.height);
};

/**
 * 收集管理元素
 * todo :
 * <1>对于多页面，frame 管理没有做页面区分，导致页面跳转，再跳回，重复渲染的时候，frame重复管理
 * 而且，在画的时候，把重复管理的，全画出来，bug
 * done : 
 * <1> 2017-03-16,21:05
 * @param {Object} element 元素对象
 */
Frame.prototype.manage = function(element) {
    var _this = this;
    var currentRouter = _this.getCurrentRouter();
    _this.elementArray.push({ 'element': element, 'page': currentRouter.cvsName });
    _this.elementIndex++;
};

/**
 * 是否已经管理此页面
 * 遍历elementArray查找page
 * @param {String} page 页面｜视窗｜页面元素
 * @returns {Boolean} 是否存在
 */
Frame.prototype.hasManageThisPage = function(page) {
    var flag = false,
        _this = this;
    for (var i = 0, len = _this.elementArray.length; i < len; i++) {
        if (page === _this.elementArray[i].page) {
            flag = true;
            break;
        }
    }
    return flag;
};

/**
 * 销毁元素
 * @param {Object} element 被销毁的元素
 */
Frame.prototype.destroy = function(element) {

};

/**
 * 根据页面名，销毁当前页面的所有元素
 * 倒序遍历删除元素
 * @param {String} page 页面名称
 */
Frame.prototype.destroyByPage = function(page) {
    var _this = this;
    for (var len = _this.elementArray.length - 1; 0 <= len; len--) {
        if (page === _this.elementArray[len].page) {
            _this.elementArray.splice(len, 1);
        }
    }
};

/**
 * 有移动元素移动的时候，frame 帮助自动渲染：主动调用元素的draw方法
 * todo:
 * <1> : 只画当前页面的元素
 * done:
 * <1> : 2017-03-16,21:05
 */
Frame.prototype.reRender = function() {
    var _this = this;
    this.clear();
    var currentRouter = _this.getCurrentRouter();
    // var str = "";
    //这是个问题： 先new的元素 ，先画出来
    this.elementArray.forEach(function(item, index) {
        if (currentRouter.cvsName === item.page) {
            _this.cxt.save();
            // str += item.element.constructor.name + "|";
            /* 如果在当前页面，则会把当前页面管理的element重绘 */
            item.element.draw(_this.cxt);
            _this.cxt.restore();
        }
    });
    // console.log(str);
};

/**
 * 触点是否在元素内部，通过给元素添加elementType ， 来区分元素类型，
 * todo:
 * <1>: 这里的判断不严谨，只考虑到了常见常规图形，没有考虑到组合复杂图形
 *      而且，对于多边形需要知道其坐标，对于旋转，则需要进行大量旋转坐标运算
 *           对于弧形线条组成的图形，不能用多边形来处理
 * done:
 * <1>: context.isPointInPath & context.isPointInStroke 2017-03-25 
 * 2017-03-25 此方法暂时弃用
 * @param {Object} position 触点坐标
 * @param {Object} element 元素
 */
Frame.prototype.isInElementArea = function(position, element) {
    var bl = false;
    // if(typeof element.elementType === "undefined"){
    //     throw("element`s elementType property must exist!!!");
    // }
    switch (element.elementType) {
        case 0:
            //不绑定事件的元素
            bl = false;
            break;
        case 1:
            //圆形(判断触点与圆心的距离和半径相比)
            bl = Math.pow((position.x - element.x), 2) + Math.pow((position.y - element.y), 2) - Math.pow(element.radius, 2) <= 0 ? true : false;
            break;
        case 2:
            //多边形
            bl = rayCasting(position, element.positionXYArray);
            break;
        default:
            //不继承element 的元素
            bl = false;
            break;
    }
    return bl;
};

/**
 * 2017-03-25 此策略暂时弃用
 * author : http://blog.csdn.net/jq_develop/article/details/44981127
 * @description 射线法判断点是否在多边形内部
 * @param {Object} p [待判断的点，格式：{ x: X坐标, y: Y坐标 }]
 * @param {Array} poly [多边形顶点，数组成员的格式同 p]
 * @return {String} 点 p 和多边形 poly 的几何关系
 */
function rayCasting(p, poly) {
    var px = p.x,
        py = p.y,
        flag = false;

    for (var i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
        var sx = poly[i].x,
            sy = poly[i].y,
            tx = poly[j].x,
            ty = poly[j].y;

        // 点与多边形顶点重合
        if ((sx === px && sy === py) || (tx === px && ty === py)) {
            return true;
        }

        // 判断线段两端点是否在射线两侧
        if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
            // 线段上与射线 y 坐标相同的点的 x 坐标
            // 利用画三角形，影子长度比 等于 杆子长度比
            var x = sx + (py - sy) * (tx - sx) / (ty - sy);

            // 点在多边形的边上
            if (x === px) {
                return true;
            }

            // 射线穿过多边形的边界
            if (x > px) {
                flag = !flag;
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

module.exports = Frame;