var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

var Box = function(config){
    CanvasElementPackage.CanvasELement.call(this, config);
    this.x = parseInt(config.x||0);
    this.y = parseInt(config.y||0);
    this.border = parseInt(config.border||0);

    this.pixelx = config.pixelx || 9;
    this.pixely = config.pixely || 9;

    // var __pixelx__ = (config.width-(this.pixelx+1)*this.border)/this.pixelx;
    // var __pixely__ = (config.height-(this.pixely+1)*this.border)/this.pixely;

    // this.pixelWidth = parseInt(__pixelx__);
    // this.pixelHeight = parseInt(__pixely__);

    // this.width = this.pixelWidth * this.pixelx + (this.pixelx+2) * this.border;
    // this.height = this.pixelHeight * this.pixely + (this.pixely+2) * this.border;

    // this.x += parseInt((config.width - this.width)/2);
    this.resetSize(config);
    this.blockArray = [];
    for(var x=0;x<this.pixelx;x++){
        for(var y=0;y<this.pixely;y++){
            var cx = (this.pixelWidth + this.border) * x + (this.pixelWidth/2 + this.border),
                cy = (this.pixelHeight + this.border) * y + (this.pixelHeight/2 + this.border),
                rx = (this.pixelWidth + this.border) * x + this.border,
                ry = (this.pixelHeight + this.border) * y + this.border;
            this.blockArray.push({
                x:x,
                y:y,
                rx:rx, //
                ry:ry,  //,
                cx:cx,
                cy:cy,
                isUsed:false
            });
        }
    }

    this.fillStyle = config.fillStyle || "rgba(212,87,236,0.5)";
    this.strokeStyle = config.strokeStyle || "rgba(127,127,127,1)";
    this.createPath = function(context) {};
    this.draw = function(context){
        //console.log("test box");
        context.lineWidth = this.border;
        context.strokeStyle = this.strokeStyle;
        context.beginPath(this.x,this.y);
        for(var i=0;i<this.pixelx+1;i++){
            context.moveTo(this.x + i * (this.pixelWidth + this.border) + this.border,this.y);
            context.lineTo(this.x + i * (this.pixelWidth + this.border) + this.border,this.y + this.pixely * (this.pixelHeight+this.border));

        }
        for(var j=0;j<this.pixely+1;j++){
            context.moveTo(this.x + this.border,                                                this.y + j * (this.pixelHeight+this.border));
            context.lineTo(this.x + this.pixelx * (this.pixelWidth + this.border) + this.border,this.y + j * (this.pixelHeight+this.border));
        }
        context.closePath();
        config.isStroke?context.stroke():"";
        // this.renderBlock(context);
    };
};
Box.prototype.resetSize = function(config){
    var __pixelx__ = (config.width-(this.pixelx+1)*this.border)/this.pixelx;
    var __pixely__ = (config.height-(this.pixely+1)*this.border)/this.pixely;

    this.pixelWidth = parseInt(__pixelx__);
    this.pixelHeight = parseInt(__pixely__);

    this.width = this.pixelWidth * this.pixelx + (this.pixelx+2) * this.border;
    this.height = this.pixelHeight * this.pixely + (this.pixely+2) * this.border;

    this.x += parseInt((config.width - this.width)/2);
};

Box.prototype.getPositionByPixel = function(x,y){
    var px = this.x + x * (this.pixelWidth + this.border) + Math.ceil(this.border/2),
        py = this.y + y * (this.pixelWidth + this.border) + Math.ceil(this.border/2);
    return {
        x:px,
        y:py
    };
};

Box.prototype.fixCurrentPosition = function(poi,x,y){
    
    var px = poi.x + x * (this.pixelWidth + this.border) + Math.ceil(this.border/2),
        py = poi.y + y * (this.pixelWidth + this.border) + Math.ceil(this.border/2);
    return {
        x:px,
        y:py
    };
};

Box.prototype.matchPosition = function(posObj){
    var x = posObj.poi.x,
        y = posObj.poi.y,
        hasMatch = false;

    return hasMatch;
};

Box.prototype.renderBlock = function(context){
    var o ;
    this.blockArray.forEach(function(item){
        context.moveTo(item.rx,item.ry);
        context.lineTo();
        context.lineTo();
        context.lineTo();
    },this);
};

Box.prototype.getPixel = function(){
    return {
        x:this.pixelx,
        y:this.pixely
    };
};

CanvasElementPackage.inherit(Box, CanvasElementPackage.CanvasELement);
module.exports = {
    Box: Box,
    inherit: CanvasElementPackage.inherit
};