/**
 * 作者：jinming1937@163.com
 * 
 */
console.log("start");

var core = require("../../cvs/lib/framework/core");
require("./js/index");
require("./js/room");
if (location.port === "8089") {
    //开发环境
    core.router.addRouter({
        index: 0,
        cvsName: "ball",
        urlReg: /ball\/ball/
    });
    core.router.addRouter({
        index: 1,
        cvsName: "room",
        urlReg: /ball\/room/
    });
} else { //正式环境
    core.router.addRouter({
        index: 1,
        cvsName: "ball",
        urlReg: /ball\/ball/
    });
    core.router.addRouter({
        index: 0,
        cvsName: "room",
        urlReg: /ball\/room/
    });
}

core.init();
console.log("ending");