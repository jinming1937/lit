var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

function Tool(config) {
    CanvasElementPackage.CanvasELement.call(this, config);

    this.draw = function() {
        var ctx = this.frame.cxt;
    };
}
CanvasElementPackage.inherit(Tool, CanvasElementPackage.CanvasELement);
module.exports = {
    Tool: Tool,
    inherit: CanvasElementPackage.inherit
};