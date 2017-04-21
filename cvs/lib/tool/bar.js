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
    this.positionXYArray = [];
    this.createPath = function(argument) {
        var _this = this;
        this.frame.cxt.beginPath();
        this.frame.cxt.moveTo(_this.x, _this.y);
        this.frame.cxt.lineTo(_this.x + _this.width, _this.y);
        this.frame.cxt.closePath();
    };

    this.draw = function() {
        var _this = this;
        var _frame = _this.frame;
        _frame.cxt.strokeStyle = _this.config.color || "#F34";
        _this.createPath();
        _frame.cxt.rotate(_this.rotateAngle * Math.PI / 180);
        _frame.cxt.stroke();
        _frame = null;
    };
    this.draw();
}
module.exports = Bar;