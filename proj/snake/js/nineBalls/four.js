var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

/**
 * 四叶草
 * 四叶草 & 三叶草
 * @param {any} config 
 */
function Four(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.x = parseInt(config.x || 0);
    this.y = parseInt(config.y || 0);
    this.radius = config.radius || 20;
    this.rouNum = config.rouNum || 4;
    this.xRate = config.xRate || 0.25;
    this.yRate = config.yRate || 0.25;
    this.rotateRate = config.rotateRate || 0;
    this.bar = config.bar || 0;
    this.fillStyle = config.fillStyle || "rgba(212,87,236,0.5)";
    this.strokeStyle = config.strokeStyle || "rgba(212,87,236,0.5)";
    this.drawType = config.drawType || "quadraticCurveTo";
    this.gradientArray = config.gradientArray || [];
    this.createPath = function(context) {
        context.translate(this.x, this.y);
        context.beginPath();
        context.rotate(this.rotateRate);
        for (var i = 0; i < this.rouNum; i++) {
            if (this.drawType === "bezierCurveTo") {
                this.bezierCurveTo(context);
            } else {
                this.quadraticCurveTo(context);
            }
        }
    };
    this.draw = function(context) {
        this.drawCommentLine(context);
    };
}
Four.prototype.drawCommentLine = function(context) {
    context.save();
    context.lineWidth = 1;
    context.strokeStyle = this.strokeStyle;
    this.createPath(context);
    if(this.gradientArray.length > 0){
      var grd = context.createRadialGradient(0,0,5,0,0,this.radius + 50);
      for(var i=0,len = this.gradientArray.length;i<len;i++){
        grd.addColorStop(this.gradientArray[i].rate,this.gradientArray[i].color);
      }
      context.fillStyle = grd;
    } else {
      context.fillStyle = this.fillStyle;
    }
    context.stroke()
    context.fill();
    context.restore();
};
Four.prototype.bezierCurveTo = function(context) {
    this.drawType = "bezierCurveTo";
    context.moveTo(0, 0);
    context.lineTo(0, this.radius);
    context.bezierCurveTo(
        parseInt(this.radius * (this.xRate + 1)), parseInt(this.radius * (this.yRate + 1)),
        parseInt(this.radius * (this.xxRate + 1)), parseInt(this.radius * (this.yyRate + 1)), 0, 0);
    context.bezierCurveTo(
        parseInt(this.radius * (-this.xRate - 1)), parseInt(this.radius * (this.yRate + 1)),
        parseInt(this.radius * (-this.xxRate - 1)), parseInt(this.radius * (this.yyRate + 1)), 0, this.radius);
    context.rotate(Math.PI * 2 / this.rouNum);
};
Four.prototype.quadraticCurveTo = function(context) {
    this.drawType = "quadraticCurveTo";
    context.moveTo(0, 0);
    context.lineTo(0, this.radius);
    context.quadraticCurveTo(parseInt(this.radius * (this.xRate + 1)), parseInt(this.radius * (this.yRate + 1)), 0, 0);
    context.quadraticCurveTo(parseInt(this.radius * (-this.xRate - 1)), parseInt(this.radius * (this.yRate + 1)), 0, this.radius);
    context.rotate(Math.PI * 2 / this.rouNum);
};


CanvasElementPackage.inherit(Four, CanvasElementPackage.CanvasELement);
module.exports = {
    Four: Four,
    inherit: CanvasElementPackage.inherit
};