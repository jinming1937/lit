/**
 * 触点提示，提示触点的坐标
 * @param  {Object} cvs cvs对象
 */
function gctrl(cvs) {
    var node = document.createElement("div");
    node.className = "position-tips";
    node.style = {
        display: 'none'
    };
    cvs.canvas.addEventListener("touchstart", function(e) {
        var x = e.touches[0].clientX,
            y = e.touches[0].clientY,
            screenX = cvs.canvas.width,
            screenY = cvs.canvas.height;
        if (document.getElementsByClassName("position-tips").length === 0) {
            document.body.appendChild(node);
        }
        // node.className += "tips-animat";
        node.style.display = "block";
        node.style.left = (screenX - x < 64 ? x - 64 : x) + "px";
        node.style.top = (screenY - y < 14 ? y - 14 : y) + 'px';
        node.innerHTML = "x:" + x + ",y:" + y;
        window.setTimeout(function() {
            node.style.display = "none";
        }, 1000);
    });
}
module.exports = gctrl;