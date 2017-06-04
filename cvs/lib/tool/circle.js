var CanvasElementPackage = require("../base/canvasElement");

function Circle(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    /**
     * [elementType 多边形的静态属性，这里应该再抽象一层,而且这个应该定义成枚举，这是个问题：多边形，todo：shape class]
     * @type {Number}
     */
    this.elementType = 1;
    this.radius = config.radius || 80; //半径
    this.fillStyle = config.fillStyle || "#F00";
    this.strokeStyle = config.strokeStyle || "#F00";
    this.createPath = function(context) {
        context.beginPath();
        context.arc(parseInt(this.x), parseInt(this.y), this.radius, 0, 2 * Math.PI);
        context.closePath();
    };
    /**
     * 
     */
    this.draw = function(context) {
        this.createPath(context);
        context.fillStyle = this.fillStyle;
        context.strokeStyle = this.strokeStyle;
        context.fill();
        context.stroke();
    };
}

CanvasElementPackage.inherit(Circle, CanvasElementPackage.CanvasELement);
module.exports = {
    Circle: Circle,
    inherit: CanvasElementPackage.inherit
};