var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

function Snail(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.x = config.x;
    this.y = config.y;
    this.poiArray = [];
    this.draw = function(context) {
        context.translate(this.x, this.y);
        context.beginPath();
        this.poiArray.forEach(function(item, index) {
            context.moveTo();
            context.lineTo();
        }, this);
        context.stroke();
    };
}
Snail.prototype.setPoi = function(num) {
    while (num) {
        num--;
    }
};


Snail.prototype.getNum = function(num) {
    if (num <= 0) {
        return;
    }
    if (num % 2 === 0) { //偶数
        return num / 2;
    } else { //奇数
        return (num + 1) / 2;
    }
};

CanvasElementPackage.inherit(Snail, CanvasElementPackage.CanvasELement);
module.exports = {
    Snail: Snail,
    inherit: CanvasElementPackage.inherit
};