/**
 * 作者：jinming1937@163.com
 * 
 */
console.log("start");
var core = require("../../cvs/lib/framework/core");
require("./js/snIndex");
require("./js/proStart");
require("./js/proSnake");
require("./js/eatPoint");
if (location.port === "8089") {
    core.router.addRouter({
        index: 0,
        cvsName: "index",
        urlReg: /\/snake\/snindex/
    });
    core.router.addRouter({
        index: 1,
        cvsName: "classical",
        urlReg: /\/snake\/classical/
    });
    core.router.addRouter({
        index: 2,
        cvsName: "prosnake",
        urlReg: /\/snake\/prosnake/
    });
    // core.router.addRouter({
    // 	index:2,
    // 	cvsName : "block",
    // 	urlReg:/\/snake\/block/
    // });
    core.router.addRouter({
        index: 3,
        cvsName: "eatPoint",
        urlReg: /\/snake\/eatpoint/
    });
    core.router.addRouter({
        index: 2,
        cvsName: "nineballs",
        urlReg: /\/snake\/nineballs/
    });
} else {
    core.router.addRouter({
        index: 0,
        cvsName: "index",
        urlReg: /snake\/(index)?/
    });
    core.router.addRouter({
        index: 1,
        cvsName: "classical",
        urlReg: /classical/
    });
    core.router.addRouter({
        index: 2,
        cvsName: "prosnake",
        urlReg: /\/snake\/prosnake/
    });
    core.router.addRouter({
        index: 3,
        cvsName: "eatPoint",
        urlReg: /\/snake\/eatpoint/
    });
    // core.router.addRouter({
    // 	index:2,
    // 	cvsName : "block",
    // 	urlReg:/block/
    // });
    core.router.addRouter({
        index: 2,
        cvsName: "nineballs",
        urlReg: /\/snake\/nineballs/
    });
}

core.init();
console.log("ending");