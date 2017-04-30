var CanvasElementPackage = require("../base/canvasElement");

function DrawWords(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.x = config.x || 20;
    this.y = config.y || 20;
    this.word = config.word || "";

    this.getWord = function() {
        return this.word;
    };

    this.setWord = function(word) {
        this.word = word;
    };

    this.draw = function() {
        var _this = this;
        this.frame.cxt.save();
        this.style.setStyle(this.frame.cxt);
        this.frame.cxt.fillText(_this.getWord(), _this.x, _this.y);
        this.frame.cxt.restore();
    };
    this.paint = function() {
        var _this = this;
        this.frame.cxt.save();
        this.style.setStyle(this.frame.cxt);
        this.frame.cxt.fillText(_this.getWord(), _this.x, _this.y);
        this.frame.cxt.restore();
        console.log("345");
    };
}
CanvasElementPackage.inherit(DrawWords, CanvasElementPackage.CanvasELement);
module.exports = {
    DrawWords: DrawWords,
    inherit: CanvasElementPackage.inherit
};