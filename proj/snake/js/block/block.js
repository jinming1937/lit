var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

var Block = function(config){
    CanvasElementPackage.CanvasELement.call(this, config);
    this.screenObj = config.screenObj;
    this.fillStyle = config.fillStyle || "rgba(212,87,236,0.5)";
    this.shapeArray = [
        [{x:0,y:0}],
        [{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0,y:1}],
        [{x:0,y:0},{x:1,y:0},{x:2,y:0}],[{x:0,y:0},{x:0,y:1},{x:0,y:2}]
    ];

    this.createPath = function(context){
        var arr = this.getShape();
        
        arr.forEach(function(item) {
            var _po_ = this.screenObj.getPositionByPixel(item.x,item.y);
            context.moveTo(_po_.x + this.screenObj.border,_po_.y);
            context.lineTo(_po_.x + this.screenObj.border + this.screenObj.pixelWidth,_po_.y);
            context.lineTo(_po_.x + this.screenObj.border + this.screenObj.pixelWidth,_po_.y + this.screenObj.pixelHeight);
            context.lineTo(_po_.x + this.screenObj.border,_po_.y + this.screenObj.pixelHeight);
            context.closePath();
            context.fill();
        }, this);
    };

    this.draw = function(context){
        context.lineWidth = 1;
        context.fillStyle = this.fillStyle;
        context.beginPath();
        this.createPath(context);
        context.stroke();
    };
};

Block.prototype.getShape = function(){
    return this.shapeArray[1];
};

CanvasElementPackage.inherit(Block, CanvasElementPackage.CanvasELement);
module.exports = {
    Block: Block,
    inherit: CanvasElementPackage.inherit
};