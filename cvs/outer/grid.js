/**
 * 画辅助线
 * @param  {[type]} context [description]
 * @param  {[type]} color   [description]
 * @param  {[type]} stepx   [description]
 * @param  {[type]} stepy   [description]
 * @return {[type]}         [description]
 */
function drawGrid(context, color, stepx, stepy) {
    context.save();
    context.shadowColor = undefined;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.strokeStyle = color;
    context.fillStyle = '#ffffff';
    context.lineWidth = 0.5;
    // context.fillRect(0,0, context.canvas.width,context.canvas.height);

    for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }

    for (var j = stepy + 0.5; j < context.canvas.height; j += stepy) {
        context.beginPath();
        context.moveTo(0, j);
        context.lineTo(context.canvas.width, j);
        context.stroke();
    }

    context.restore();
}
module.exports = drawGrid;