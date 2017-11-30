var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

var Block = function(config){
    CanvasElementPackage.CanvasELement.call(this, config);
    this.box = config.box;
    this.fillStyle = config.fillStyle || "rgba(212,87,236,0.5)";
    this.blockIndex = config.blockIndex;
    this.isBase = config.isBase===undefined? true:false;
    this.hasBlockArray = [];

    this.shapeArray = [
        this.box.blockArray,
        [{x:0,y:0}],
        [{x:0,y:0},{x:1,y:0}],[{x:0,y:0},{x:0,y:1}],
        [{x:0,y:0},{x:1,y:0},{x:2,y:0}],[{x:0,y:0},{x:0,y:1},{x:0,y:2}]
    ];

    var initFlag = false;

    this.matchArray = [];

    this.createPath = function(context){
        var arr = this.getShape();
        
        arr.forEach(function(item,index) { 
            var _po_ = this.box.getPositionByPixel(item.x,item.y);
            if(!initFlag){
                this.matchArray.push({
                    index:index,
                    centerPoi:{
                        x:_po_.x + this.box.border + this.box.pixelWidth / 2,
                        y:_po_.y + this.box.pixelHeight / 2
                    },
                    indexXY:{
                        x:item.x,
                        y:item.y
                    }
                });
            }
            if(this.hasBlockArray.indexOf(index) ===-1 && this.isBase){
                return;//continue;
            }
            context.moveTo(_po_.x + this.box.border,_po_.y);
            context.lineTo(_po_.x + this.box.border + this.box.pixelWidth,_po_.y);
            context.lineTo(_po_.x + this.box.border + this.box.pixelWidth,_po_.y + this.box.pixelHeight);
            context.lineTo(_po_.x + this.box.border,_po_.y + this.box.pixelHeight);
            context.closePath();
        }, this);
        initFlag = true;
    };

    this.draw = function(context){
        context.lineWidth = 1;
        context.fillStyle = this.fillStyle;
        context.beginPath();
        this.createPath(context);
        // context.stroke();
        context.fill();
    };
};

Block.prototype.getShape = function(){
    this.currentShape = this.shapeArray[this.blockIndex];
    return this.currentShape;
};

Block.prototype.putBlock = function(blockArray){
    //this.hasBlockArray = this.hasBlockArray.concat(blockArray);
};

Block.prototype.matchPosition = function(posObj){
    var x = posObj.poi.x,
        y = posObj.poi.y,
        hasMatch = false,
        _breakFlag = false,
        _this = this;
    posObj.block.matchArray.forEach(function(blItem,blIndex){
        var centerPoi = posObj.block.box.fixCurrentPosition({x:x,y:y},blItem.indexXY.x,blItem.indexXY.y);
        _this.matchArray.forEach(function(_thisItem,_thisIndex){
            if(Math.abs(_thisItem.centerPoi.x - centerPoi.x) < _this.box.pixelWidth/3 &&
                Math.abs(_thisItem.centerPoi.y - centerPoi.y) < _this.box.pixelWidth/3){
                    hasMatch = true;
                    _this.hasBlockArray.push(_thisIndex);
                 }else{
                    if(!_breakFlag){
                        _breakFlag = true;
                    }
                    hasMatch = false;
                 }
        });
    });
    return !_breakFlag && hasMatch;
};

CanvasElementPackage.inherit(Block, CanvasElementPackage.CanvasELement);
module.exports = {
    Block: Block,
    inherit: CanvasElementPackage.inherit
};