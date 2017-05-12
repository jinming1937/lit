var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

function Windmill(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.radius = config.radius || 20;
    this.rouNum = config.rouNum || 4;
    this.col = config.col || 9;
    this.xRate = config.xRate || 0.25;
    this.yRate = config.yRate || 0.25;
    this.rotateRate = config.rotateRate || 0;
    this.bar = config.bar || 0;
    this.fillStyle = config.fillStyle || "rgba(212,87,236,0.5)";
    this.createPath = function(context) {

        context.translate(this.x, this.y);
        context.beginPath();
        context.moveTo(0, 0);
        context.rotate(this.rotateRate);
        for (var i = 0; i < this.rouNum; i++) {
            context.lineTo(this.radius, 0);
            context.quadraticCurveTo(parseInt(this.radius * this.xRate), parseInt(this.radius * this.yRate), 0, 0);
            context.rotate(Math.PI * 2 / this.rouNum);
        }
    };
    this.draw = function(context) {
        if (this.bar) {
            context.save();
            context.lineWidth = 2;
            context.strokeStyle = "#34543f";
            context.translate(this.x, this.y);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-10, this.bar);
            context.stroke();
            context.restore();
        }

        context.save();
        context.lineWidth = 0.5;
        context.strokeStyle = "#34543f";
        context.fillStyle = this.fillStyle;
        context.translate(this.x, this.y);
        context.beginPath();
        context.moveTo(0, 0);
        context.rotate(this.rotateRate);
        for (var i = 0; i < this.rouNum; i++) {
            context.lineTo(this.radius, 0);
            context.quadraticCurveTo(parseInt(this.radius * this.xRate), parseInt(this.radius * this.yRate), 0, 0);
            context.rotate(Math.PI * 2 / this.rouNum);
        }
        // context.transform(1, 0, 0, 1, 0, 0);
        context.stroke();
        context.fill();
        context.restore();
    };
}
CanvasElementPackage.inherit(Windmill, CanvasElementPackage.CanvasELement);
module.exports = {
    Windmill: Windmill,
    inherit: CanvasElementPackage.inherit
};