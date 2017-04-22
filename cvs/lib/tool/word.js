var element = require("../base/element");

function drawFps(config) {
    element.call(this, config);
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
        ""; //实现element接口，但是留空
        var _this = this;
        this.frame.cxt.save();
        this.style.setStyle(this.frame.cxt);
        this.frame.cxt.fillText(_this.getWord(), _this.x, _this.y);
        this.frame.cxt.restore();
        // console.log("345");
    };
    this.paint = function() {
        var _this = this;
        this.frame.cxt.save();
        this.style.setStyle(this.frame.cxt);
        this.frame.cxt.fillText(_this.getWord(), _this.x, _this.y);
        this.frame.cxt.restore();
        console.log("345");
    };

    // this.draw();
}
module.exports = drawFps;