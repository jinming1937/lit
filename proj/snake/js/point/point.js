var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

function Point(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.draw = function(context) {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.arc(this.x, this.y, 2, Math.PI * 2, 0, false);
        context.fillStyle = "#000000";
        context.fill();
    };
}
CanvasElementPackage.inherit(Point, CanvasElementPackage.CanvasELement);
module.exports = {
    Point: Point,
    inherit: CanvasElementPackage.inherit
};