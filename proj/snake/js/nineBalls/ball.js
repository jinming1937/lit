var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

function Ball(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.col = config.col || 9;

    this.draw = function() {
        var ctx = this.frame.cxt;
    };
}
CanvasElementPackage.inherit(Ball, CanvasElementPackage.CanvasELement);
module.exports = {
    Ball: Ball,
    inherit: CanvasElementPackage.inherit
};