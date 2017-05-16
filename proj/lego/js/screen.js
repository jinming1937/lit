var CanvasElementPackage = require("../../../cvs/lib/base/canvasElement");

function Screen(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.width = config.width || this.frame.width;
    this.height = config.height || this.frame.height;
    this.fillStyle = config.fillStyle || "rgba(255,255,255,1)";

    this.draw = function(context) {
        context.fillStyle = this.fillStyle;
        context.fillRect(0, 0, this.width, this.height);
    };
}
CanvasElementPackage.inherit(Screen, CanvasElementPackage.CanvasELement);
module.exports = {
    Screen: Screen,
    inherit: CanvasElementPackage.inherit
};