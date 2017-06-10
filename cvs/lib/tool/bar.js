var element = require("../base/element");

/* tool bar */

function Bar(config) {
    element.call(this, config);
    this.elementType = 99;
    this.config = config;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.rotateAngle = config.rotateAngle || 0;
    this.createPath = function(context) {
        var _this = this;
        context.beginPath();
        context.moveTo(_this.x, _this.y);
        context.lineTo(_this.x + _this.width, _this.y);
        context.closePath();
    };

    this.draw = function(context) {
        context.strokeStyle = this.config.strokeStyle || "#F34";
        this.createPath(context);
        context.rotate(this.rotateAngle * Math.PI / 180);
        context.stroke();
    };
}
module.exports = Bar;