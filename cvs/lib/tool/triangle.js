var element = require("../base/element"),
    MathPlugs = require("../static/usualValue");
/**
 * 三角形
 * @param {Number} a a
 * @param {Number} b b
 * @param {Number} c c
 * @param {Number} angle
 * @param {Number} x 顶角x 坐标
 * @param {Number} y 顶角y 坐标
 */
function Triangle(config) {
    element.call(this, config);
    this.elementType = 2;
    config.x = config.x || 0;
    config.y = config.y || 0;
    this.config = config;
    this.x = config.x;
    this.y = config.y;
    this.positionXYArray = [];
    this.topToHeart = null;
    this.rotateAngle = config.rotateAngle || 0;
    this.hasRotate = false;
    /* 判断是否是三角形：
     * 1 ： 任意两边之和大于第三边
     * 2 ： 知道两边长，和其夹角
     */
    //if(config.a + config.b > config.c && config.b + config.c > config.a && config.a +config.c > config.b){
    if (typeof config.angle === "undefined") {
        /* 任意两边和大于第三边 */
        if (config.a + config.b > config.c && config.a + config.c > config.b && config.b + config.c > config.a) {
            this.abc(config.a, config.b, config.c);
        } else {
            throw ("NOT A TRIANGLE!!!");
        }
    } else {
        if (config.angle > 0 && config.angle < 180) {
            this.angleAb(config.a, config.b, config.angle);
            config.c = Math.sqrt(Math.pow(config.b * MathPlugs.sin(config.angle), 2) + Math.pow(config.a - config.b * MathPlugs.cos(config.angle), 2));
            this.config.c = config.c;
        } else {
            throw ("angle is not avilible");
        }
    }

    this.getTopToHeartPoint(config.a, config.b, config.c);

    /**
     * [ontouchmove ontouchmove]
     * @param  {[type]} e [event]
     * @return {[type]}   [description]
     */
    this.ontouchmove = function(e) {
        config.ontouchmove && config.ontouchmove(e);
        this.eventFire(e);
        if (!this.config.limit) {
            this.x = e.changedTouches[0].clientX - this.topToHeart.x;
            this.y = e.changedTouches[0].clientY - this.topToHeart.y;
        } else {
            if (e.changedTouches[0].clientX - this.topToHeart.x >= 20 && e.changedTouches[0].clientX - this.topToHeart.x <= this.frame.width - 20 * 2) {
                this.x = e.changedTouches[0].clientX - this.topToHeart.x;
            } else if (e.changedTouches[0].clientX - this.topToHeart.x < 20) {
                this.x = 20;
            } else if (e.changedTouches[0].clientX - this.topToHeart.x > this.frame.width - 20 * 2) {
                this.x = this.frame.width - 20 * 2;
            }
        }

        this.initPositionXYArray();
        this.draw(this.frame);
        //this.rotate();
    };
    this.createPath = function(argument) {
        var _this = this;
        this.frame.cxt.beginPath();
        this.frame.cxt.moveTo(_this.positionXYArray[0].x, _this.positionXYArray[0].y);
        this.frame.cxt.lineTo(_this.positionXYArray[1].x, _this.positionXYArray[1].y);
        this.frame.cxt.lineTo(_this.positionXYArray[2].x, _this.positionXYArray[2].y);
    };
    this.draw = function(frm) {
        if (typeof frm !== "undefined" || !this.hasRotate) {
            var _this = this;
            var _frame = _this.frame;
            _frame.cxt.strokeStyle = _this.config.color || "#FFF";
            _this.createPath();
            //_frame.cxt.closePath();
            //_frame.cxt.stroke();
            _frame.cxt.fillStyle = _this.config.color || "#FFF";
            _frame.cxt.fill();
        }
    };
    this.draw();
}

/**
 * 根据三条边组成三角形
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @param  {[type]} c [description]
 * @return {[type]}   [description]
 */
Triangle.prototype.abc = function(a, b, c) {
    var _this = this;
    this.positionXYArray = [];
    /* 顶角坐标 */
    _this.positionXYArray.push({
        x: _this.x,
        y: _this.y
    });

    _this.positionXYArray.push({
        x: a + _this.x,
        y: _this.y
    });
    /**
     * x*x + y*y = c*c
     * (a-x)*(a-x) + y*y = b*b
     * x > 0
     * y > 0
     */
    _this.positionXYArray.push({
        x: (a * a - b * b + c * c) / (2 * a) + _this.x,
        y: Math.sqrt((b * b - (a - c) * (a - c)) * ((a + c) * (a + c) - b * b)) / (2 * a) + _this.y
    });

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
 * 初始化重心
 * @return {[type]} [description]
 */
Triangle.prototype.getTopToHeartPoint = function(a, b, c) {
    ///建系
    var _this = this;
    var A = { x: 0, y: 0 },
        B = { x: a, y: 0 },
        C = {
            x: (a * a - b * b + c * c) / (2 * a),
            y: Math.sqrt((b * b - (a - c) * (a - c)) * ((a + c) * (a + c) - b * b)) / (2 * a)
        };
    /*
     * BC 中点 (B + C)/2 
     * 重心 (A+BC) * 2/3
     * 也就是 (A + (B+C)/2 )*2/3 -> (B+C)/3
     */
    this.topToHeart = {
        x: (3 * a * a - b * b + c * c) / (6 * a),
        y: Math.sqrt((b * b - (a - c) * (a - c)) * ((a + c) * (a + c) - b * b)) / (6 * a)
    };
};

/**
 * 
 * @return {[type]} [description]
 */
Triangle.prototype.checkTriangle = function() {

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

/**
 * 
 * @return {[type]} [description]
 */
Triangle.prototype.rotate = function() {
    if (this.rotateAngle > 360) {
        this.rotateAngle = 0;
    } else if (this.rotateAngle < 0) {
        this.rotateAngle = 360;
    } else {
        "";
    }

    var o = {
        x: this.topToHeart.x + this.x,
        y: this.topToHeart.y + this.y
    };
    if (!this.hasRotate) {
        var _arr = this.positionXYArray;
        for (var i = 0, len = this.positionXYArray.length; i < len; i++) {
            this.positionXYArray[i].x = this.positionXYArray[i].x - o.x;
            this.positionXYArray[i].y = this.positionXYArray[i].y - o.y;
        }
        this.hasRotate = true;
    }

    var _this = this;
    var _frame = _this.frame;
    _frame.reRender();
    //_frame.cxt.save();
    _frame.cxt.translate(o.x, o.y);
    _frame.cxt.strokeStyle = _this.config.color || "#FFF";
    _frame.cxt.rotate(_this.rotateAngle * Math.PI / 180);
    _this.draw(_frame);
    //_frame.cxt.restore();
};

module.exports = Triangle;