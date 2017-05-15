/*
 * 作者：jinming1937@163.com
 */
console.log("start");
var core = require("../../cvs/lib/framework/core");
require("./js/index");
require("../../cvs/outer/onresize");
if (location.port === "8089") {
    core.router.addRouter({
        index: 0,
        cvsName: "index",
        urlReg: /\/lego\/(index)?/
    });
} else {
    core.router.addRouter({
        index: 0,
        cvsName: "index",
        urlReg: /lego\/(index)?/
    });
}

core.init();
console.log("ending");