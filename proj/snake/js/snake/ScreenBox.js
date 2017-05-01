var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

/**
 * 屏幕
 * 
 * @param {any} config 
 */
function Screen(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    // this.frame = main.frame;
    this.pixelWidth = config.size || 20;
    this.pixelHeight = config.size || 20;
    this.screenWidth = config.screenWidth || this.frame.width;
    this.screenHeight = config.screenHeight || this.frame.height;
    this.pixelBorder = 5;

    this.pixelX = parseInt(this.screenWidth / this.pixelWidth);
    this.pixelY = parseInt(this.screenHeight / this.pixelHeight);

    this.borderX = this.screenWidth % this.pixelWidth;
    this.borderY = this.screenHeight % this.pixelHeight;

    this.pixelY = (this.screenHeight - this.pixelY * this.pixelHeight) < this.borderX ? this.pixelY - 1 : this.pixelY;
    this.pixelArray = [];
    for (var i = 0; i < this.pixelX; i++) {
        for (var j = 0; j < this.pixelY; j++) {
            this.pixelArray.push([i, j]);
        }
    }
    // this.frame.manage(this);

    /* 渲染屏幕 */
    this.draw = function() {
        this.frame.cxt.fillStyle = "#ccc";
        this.frame.cxt.fillRect(this.borderX / 2, this.borderX / 2, this.pixelX * this.pixelWidth, this.pixelY * this.pixelHeight);
        // this.paint();
    };

    /**
     * 另一种画矩形背景的方式
     */
    this.paint = function() {
        var cx = this.frame.cxt;
        // cx.fillStyle = "#ccc";
        cx.beginPath();
        cx.moveTo(this.borderX / 2, this.borderX / 2);
        cx.lineTo(this.pixelX * this.pixelWidth + this.borderX / 2, this.borderX / 2);
        cx.lineTo(this.pixelX * this.pixelWidth + this.borderX / 2, this.pixelY * this.pixelHeight + this.borderX / 2);
        cx.lineTo(this.borderX / 2, this.pixelY * this.pixelHeight + this.borderX / 2);
        // cx.lineTo(this.borderX / 2, this.borderX / 2 + 300);
        cx.closePath();
        cx.fillStyle = "#ccc";
        cx.strokeStyle = "#ccc";
        cx.stroke();
        cx.fill();
    };
}

/* 获取屏幕‘分辨率’ */
Screen.prototype.getPixel = function() {
    var _this = this;
    return {
        x: _this.pixelX,
        y: _this.pixelY
    };
};
CanvasElementPackage.inherit(Screen, CanvasElementPackage.CanvasELement);
module.exports = Screen;