var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

function Wall(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.startX = config.startX || 0;
    this.startY = config.startY || 0;
    this.endX = config.endX || 0;
    this.endY = config.endY || 0;
    this.fillStyle = config.fillStyle || "rgba(255,255,255,1)";
    this.draw = function(context) {
        context.fillStyle = this.fillStyle;
        context.fillRect(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY);
    };
}
CanvasElementPackage.inherit(Wall, CanvasElementPackage.CanvasELement);
module.exports = {
    Wall: Wall,
    inherit: CanvasElementPackage.inherit
};