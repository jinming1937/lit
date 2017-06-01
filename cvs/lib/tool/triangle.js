var CanvasElementPackage = require("../base/canvasElement"),
    MathPlugs = require("../static/usualValue");
/**
 * 三角形
 */
function Triangle(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.positionXYArray = []; //存储坐标数组
    this.fillStyle = config.fillStyle || "rgba(23,235,46,0.8)";
    this.strokeStyle = config.strokeStyle || "rgba(23,235,46,0.8)";
    this.topToHeart = null;
    /* 判断是否是三角形：
     * 1 ： 任意两边之和大于第三边，任意两边之差小于第三边
     * 2 ： 知道两边长，和其夹角
     */
    // if (typeof config.angle === "undefined") {
    /* 任意两边和大于第三边 */
    if (config.a + config.b > config.c && config.a + config.c > config.b && config.b + config.c > config.a) {
        this.abc(config.a, config.b, config.c);
    } else {
        throw ("NOT A TRIANGLE!!!");
    }
    // } else {
    //     if (config.angle > 0 && config.angle < 180) {
    //         this.angleAb(config.a, config.b, config.angle);
    //         config.c = Math.sqrt(Math.pow(config.b * MathPlugs.sin(config.angle), 2) + Math.pow(config.a - config.b * MathPlugs.cos(config.angle), 2));
    //         this.config.c = config.c;
    //     } else {
    //         throw ("angle is not avilible");
    //     }
    // }

    this.createPath = function(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotateAngle * Math.PI * 2 / 360);
        context.beginPath();
        context.moveTo(parseInt(this.positionXYArray[0].x), parseInt(this.positionXYArray[0].y));
        context.lineTo(parseInt(this.positionXYArray[1].x), parseInt(this.positionXYArray[1].y));
        context.lineTo(parseInt(this.positionXYArray[2].x), parseInt(this.positionXYArray[2].y));
        context.closePath();
        context.restore();
    };
    this.draw = function(context) {
        context.strokeStyle = this.strokeStyle;
        context.fillStyle = this.fillStyle;
        context.translate(this.x, this.y);
        context.rotate(this.rotateAngle * Math.PI * 2 / 360);
        context.beginPath();
        context.moveTo(parseInt(this.positionXYArray[0].x), parseInt(this.positionXYArray[0].y));
        context.lineTo(parseInt(this.positionXYArray[1].x), parseInt(this.positionXYArray[1].y));
        context.lineTo(parseInt(this.positionXYArray[2].x), parseInt(this.positionXYArray[2].y));
        context.closePath();
        context.stroke();
        context.fill();
    };
    // this.draw();
}

/**
 * 根据三条边组成三角形
 * 条件 已知abc三边长，重心（三个顶角与对边中点的连线的交点）坐标(0,0)，a边（底边）与x轴平行，求三个顶角的坐标(ABC，A为顶点，顺时针标注，顶点的对边为小写的abc)
 * 推导 a边上的高的平方:h*h=(a+b+c)(a+b-c)(a+c-b)(b+c-a)/(4*a*a)
 * @param  {Number} a 数字
 * @param  {Number} b 数字
 * @param  {Number} c 数字
 * @return {Array<Number>} positionXYArray
 */
Triangle.prototype.abc = function(a, b, c) {
    var _this = this,
        //边a上高的平方
        hh,
        Ax,
        Bx,
        Cx;
    this.positionXYArray = [];
    hh = (a + b + c) * (a + b - c) * (a + c - b) * (b + c - a) / (4 * a * a);
    console.log(hh);
    if (b * b - hh > a * a) {
        //高在三角形的外部
        Ax = 1 / 3 * a + 2 / 3 * Math.sqrt(c * c - hh);
        Bx = 1 / 2 * Ax;
        Cx = -1 / 2 * Ax - a;
    } else if (c * c - hh > a * a) {
        //高在三角形的外部
        Ax = 1 / 3 * a + 2 / 3 * Math.sqrt(b * b - hh);
        Bx = -1 / 2 * Ax - a;
        Cx = 1 / 2 * Ax;
    } else if (b * b - hh === a * a) {
        //高在三角形的c边上
        Ax = 1 / 3 * a;
        Bx = 1 / 3 * a;
        Cx = -2 / 3 * a;
    } else if (c * c - hh === a * a) {
        //高在三角形的c边上
        Ax = -1 / 3 * a;
        Bx = -1 / 3 * a;
        Cx = 2 / 3 * a;
    } else if (b > c) {
        //高在三角形的内部
        Ax = 1 / 3 * a - 2 / 3 * Math.sqrt(c * c - hh);
        Bx = Ax + Math.sqrt(c * c - hh);
        Cx = Bx - a;
    } else if (b < c) {
        //高在三角形的内部
        Ax = -1 / 3 * a - 2 / 3 * Math.sqrt(b * b - hh);
        Bx = Ax - Math.sqrt(c * c - hh);;
        Cx = Bx + a;
    } else if (b === c) {
        Ax = 0;
        Bx = 1 / 2 * a;
        Cx = -1 / 2 * a;
    }
    //A点坐标
    this.positionXYArray.push({
        x: Ax,
        y: -2 / 3 * Math.sqrt(hh)
    });
    //B点坐标
    this.positionXYArray.push({
        x: Bx,
        y: 1 / 3 * Math.sqrt(hh)
    });
    //C点坐标
    this.positionXYArray.push({
        x: Cx,
        y: 1 / 3 * Math.sqrt(hh)
    })
    return _this.positionXYArray;
};

/**
 * 根据两条边及其夹角组成三角形
 * @param  {[type]} a     [description]
 * @param  {[type]} b     [description]
 * @param  {[type]} angle [description]
 * @return {[type]}       [description]
 */
Triangle.prototype.angleAb = function(a, b, angle) {
    var _this = this;
    this.positionXYArray = [];
    _this.positionXYArray.push({
        x: _this.x,
        y: _this.y
    });
    _this.positionXYArray.push({
        x: a + _this.x,
        y: _this.y
    });

    _this.positionXYArray.push({
        x: a - b * MathPlugs.cos(angle) + _this.x,
        y: b * MathPlugs.sin(angle) + _this.y
    });

    return _this.positionXYArray;
};

/**
 * 
 * @return {[type]} [description]
 */
Triangle.prototype.initPositionXYArray = function() {
    this.positionXYArray = null;
    if (this.config.angle) {
        return this.angleAb(this.config.a, this.config.b, this.config.angle);
    } else {
        return this.abc(this.config.a, this.config.b, this.config.c);
    }
};

CanvasElementPackage.inherit(Triangle, CanvasElementPackage.CanvasELement);
module.exports = {
    Triangle: Triangle,
    inherit: CanvasElementPackage.inherit
};