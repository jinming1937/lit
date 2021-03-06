/*
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
  this.device = option.device || 1;
  this.width = (option.width || document.body.clientWidth);
  this.height = (option.height || document.body.clientHeight);
  this.getCurrentRouter = option.getCurrentRouter;
  this.resize(this.width, this.height);
  this.cxt = this.canvas.getContext("2d");
  this.setProxyCxt();
  this.context = this; //???
  this.elementIndex = 0;
  this.elementArray = [];
  this.cacheEleArr = [];
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
Frame.prototype.eventCtrl = function () {
  var _this = this;
  _this.catchElementTouchMove = null;
  _this.canvas.addEventListener("click", function (e) {
    // console.log("click");
    // console.log("x:" + e.clientX + ",y:" + e.clientY);
    _this.fire(e);
    isTencent ? e.preventDefault() : "";
  }, useCapture);

  _this.canvas.addEventListener("touchstart", function (e) {
    console.log("touch start");
    // console.log("x:" + e.touches[0].clientX + ",y:" + e.touches[0].clientY);
    _this.fire(e);
    isTencent ? e.preventDefault() : "";
  }, useCapture);

  _this.canvas.addEventListener("touchmove", function (e) {
    console.log("touch move");
    _this.fire(e);
    isTencent ? e.preventDefault() : "";
  }, useCapture);

  _this.canvas.addEventListener("touchend", function (e) {
    console.log("touch end");
    _this.fire(e);
    isTencent ? e.preventDefault() : "";
  }, useCapture);

  _this.canvas.addEventListener("touchcancel", function (e) {
    _this.fire(e);
    isTencent ? e.preventDefault() : "";
  }, useCapture);
};

//
Frame.prototype.setProxyCxt = function () {
  var __pro__ = {
    moveTo: this.cxt.moveTo,
    lineTo: this.cxt.lineTo,
    arc: this.cxt.arc,
    arcTo: this.cxt.arcTo,
    quadraticCurveTo: this.cxt.quadraticCurveTo,
    bezierCurveTo: this.cxt.bezierCurveTo,
    translate: this.cxt.translate,
    fillText: this.cxt.fillText,
    fillRect: this.cxt.fillRect,
    clearRect: this.cxt.clearRect,
    isPointInPath: this.cxt.isPointInPath
  },
    _this = this,
    device = this.device;
  this.cxt.moveTo = function (x, y) {
    __pro__.moveTo.call(_this.cxt, device * x, device * y);
  };
  this.cxt.lineTo = function (x, y) {
    __pro__.lineTo.call(_this.cxt, device * x, device * y);
  };
  this.cxt.arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
    __pro__.arc.call(_this.cxt, device * x, device * y, device * radius, startAngle, endAngle, anticlockwise || false);
  };
  this.cxt.arcTo = function (x1, y1, xdevice, ydevice, radius) {
    __pro__.arcTo.call(_this.cxt, device * x1, device * y1, device * xdevice, device * ydevice, device * radius);
  };
  this.cxt.quadraticCurveTo = function (cpx, cpy, x, y) {
    __pro__.quadraticCurveTo.call(_this.cxt, device * cpx, device * cpy, device * x, device * y);
  };
  this.cxt.bezierCurveTo = function (cp1x, cp1y, cpdevicex, cpdevicey, x, y) {
    __pro__.bezierCurveTo.call(_this.cxt, device * cp1x, device * cp1y, device * cpdevicex, device * cpdevicey, device * x, device * y);
  };
  this.cxt.translate = function (x, y) {
    __pro__.translate.call(_this.cxt, device * x, device * y);
  };
  this.cxt.fillText = function (text, x, y, maxWidth) {
    __pro__.fillText.call(_this.cxt, text, device * x, device * y, maxWidth);
  };
  this.cxt.fillRect = function (x, y, w, h) {
    __pro__.fillRect.call(_this.cxt, device * x, device * y, device * w, device * h);
  };
  this.cxt.clearRect = function (x, y, w, h) {
    __pro__.clearRect.call(_this.cxt, device * x, device * y, device * w, device * h);
  };
  this.cxt.isPointInPath = function (x, y, isFullRule) {
    return __pro__.isPointInPath.call(_this.cxt, x * device, y * device, isFullRule);
  };
};

/**
 * 事件过滤 & 事件触发
 * @param {Object} e [event：事件参数]
 */
Frame.prototype.fire = function (e) {
  var _this = this;
  /* 只有touchend事件，支持touchcancel */
  var hasCancel = false;

  /**
   * 事件触发
   * TODO:
   * <1>多边形怎么办？touchmove 怎么办？此方法急需重新设计
   * <2>弧线组合的多边形怎么办？需要牺牲性能？应该用这个 context.isPointInPath & context.isPointInStroke
   *      注意这两个方法，只能用在基于路径的绘图上，立即绘图方法（fillRect,strokeRect,fillText,strokeText ）总是返回false
   *      注意，在调用beginPath() 后，路径重置，与beginPath后的路径进行比较
   * <3>: 2017-05-01 如果touchstart时没有触发在可移动元素上，但是touchmove的时候，移动到了绑定touchmove事件的元素上，于是该元素不会被重置到其他元素之上
   * <4>: 2017-05-01 对于绑定了touchend事件的元素,如果在此元素上move,会触发到action的fire方法上，是否可以阻止这样？
   * done:
   * <1>: 2016-09-29 方案：射线法判断触点是否在多边形内部
   * <2>: 2017-03-25 方案：context.isPointInPath & context.isPointInStroke
   * <3>: 2017-05-01 方案：修改 && ev.type === "touchstart"，时期不只在touchstart阶段执行，而是第一次执行touchmove或touchstart的时候执行
   * @param {Object} ev 包含有事件对象部分属性的对象
   */
  var f = function (ev) {
    var cacheElement = null;
    var cacheIndex = -1;
    var isFireAim = false;
    var cacheElementArray = _this.elementArray.concat([]); //颠倒数组顺序
    /* 倒叙遍历 */
    cacheElementArray.reverse().forEach(function (item, i) {
      _this.cxt.save();
      item.element.createPath(_this.cxt);
      if (_this.cxt.isPointInPath(ev.clientX, ev.clientY) && !isFireAim) {
        isFireAim = true;
        cacheElement = item.element;
        /* 此处应该是绑定了move事件的元素才赋值 */
        /* 这也就解释了为什么addWatching 且 ontouchmove= 添加事件的时候不会卡顿，单独添加的时候会卡顿 */
        if (Object.prototype.hasOwnProperty.call(item.element, "ontouchmove") || item.element.allowMove) {
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
    if (cacheIndex > -1 && _this.catchElementTouchMove && (ev.type === "touchstart" || ev.type === "touchmove")) {
      /* 后new 的元素，先画出来，但是，move 的元素,要最先画出来,move 元素 移动到array最后 */
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
      /* 假设requestAnimationFrame 每miao钟执行60次，人眼无法分辨，所以这个 this.reRender可以不用重复调用，完全托管给requestAnimationFrame */
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
    default:
      // 空
      break;
  }
};

/**
 * 重置宽高
 * @param {Number} width width
 * @param {Number} height height
 */
Frame.prototype.resize = function (width, height) {
  var _this = this;
  _this.width = width || _this.width;
  _this.height = height || _this.height;
  _this.canvas.setAttribute("width", _this.width * _this.device);
  _this.canvas.setAttribute("height", _this.height * _this.device);
};

/**
 * 清理当前的画布
 * 采用canvas的上下文context的方法clearRect来清理
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 */
Frame.prototype.clear = function (x, y) {
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
Frame.prototype.manage = function (element) {
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
Frame.prototype.hasManageThisPage = function (page) {
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
Frame.prototype.destroy = function (element) {
  return this.elementArray.pop(element);
};

/**
 * 根据页面名，销毁当前页面的所有元素
 * 倒序遍历删除元素
 * @param {String} page 页面名称
 */
Frame.prototype.destroyByPage = function (page) {
  var _this = this;
  for (var len = _this.elementArray.length - 1; 0 <= len; len--) {
    if (page === _this.elementArray[len].page) {
      _this.elementArray.splice(len, 1);
    }
  }
};

/**
 * 有移动元素移动的时候，frame 帮助自动渲染：主动调用元素的draw方法
 * TODO:
 * <1> : 只画当前页面的元素
 * <2> : 这里应该是策略模式,但是由于reRender用elementArray集结了一组工具元素，所以，这里会多少有点耦合，比如某些工具元素不需要画出来，有些需要画两次（享元模式）
 *          所以，还应该抽象一个方法draw出来，用这个方法来执行针对于单独某个工具元素的draw，用reRender来管理这个当前页面的对象及其所需要draw的次数
 * <3> : 不用做双缓冲，可否用离屏canvas 优化？
 * <4> : 先new的元素先画出来这是不妥的，应该默认一个zindex，没有默认相同，是0，想要层级的时候需要业务手动加
 * DONE:
 * <1> : 2017-03-16,21:05
 * <4> : 元素的顺序不应该更改，不过渲染的顺序应该可控:zindex排序
 */
Frame.prototype.reRender = function () {
  var _this = this;
  this.clear();
  var currentRouter = _this.getCurrentRouter();
  // var str = "";
  //这是个问题： 先new的元素 ，先画出来

  this.elementArray.sort(function (first, next) {
    return (first.element.zindex || 0) > (next.element.zindex || 0);// -, 0, +
  }).forEach(function (item) {
    if (currentRouter.cvsName === item.page) {
      _this.cxt.save();
      // str += item.element.constructor.name + "|";
      /* 如果在当前页面，则会把当前页面管理的element重绘 */
      item.element.draw(_this.cxt);
      _this.cxt.restore();
    }
  });
};

Frame.prototype.outputImg = function (imgType) {
  return this.canvas.toDataURL("img/" + imgType);
}

module.exports = Frame;