var core = require("../lib/framework/core");
/* resize */
window.onresize = function(e) {
    core.frame.resize(document.body.clientWidth, document.body.clientHeight);
    var width = document.body.clientWidth,
        height = document.body.clientHeight;
    var x = width > height;
    core.frame.cacheEleArr = core.frame.cacheEleArr.length === 0 ? core.frame.elementArray.concat([]) : core.frame.cacheEleArr;
    if (x) {

        core.frame.elementArray = [{
            "page": core.frame.cacheEleArr[0] && core.frame.cacheEleArr[0].page || "",
            "element": {
                draw: function(cxt) {
                    cxt.save();
                    cxt.font = "40px Georgia";
                    cxt.fillStyle = "#000";
                    cxt.fillText(
                        "抱歉，不支持横屏,也不能阻止横屏T.T",
                        10,
                        40,
                        300);
                    cxt.restore();
                }
            }
        }];
    } else {
        core.frame.elementArray = core.frame.cacheEleArr;

    }
};