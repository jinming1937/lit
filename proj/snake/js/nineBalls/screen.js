var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

function Screen(config) {
    CanvasElementPackage.CanvasELement.call(this, config);
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.col = config.col || 9;
    this.draw = function() {
        var ctx = this.frame.cxt;
    };
}
CanvasElementPackage.inherit(Screen, CanvasElementPackage.CanvasELement);
module.exports = {
    Screen: Screen,
    inherit: CanvasElementPackage.inherit
};