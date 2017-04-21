var manager = require("../../cvs/framework/manager"),
    handler = require("./js/handler"),
    screens = require("./js/screen"),
    block = require("./js/block");
if (location.port === "8089") {
    manager.router.addRouter({
        index: 0,
        cvsName: "block",
        urlReg: /tetris\/(tetris)?/
    });
    manager.router.addRouter({
        index: 1,
        cvsName: "handler",
        urlReg: /\/tetris\/handler/
    });
    manager.router.addRouter({
        index: 2,
        cvsName: "screens",
        urlReg: /\/tetris\/screens/
    });
} else {
    manager.router.addRouter({
        index: 0,
        cvsName: "block",
        urlReg: /tetris\/(tetris)?/
    });
    manager.router.addRouter({
        index: 1,
        cvsName: "handler",
        urlReg: /\/tetris\/handler/
    });
    manager.router.addRouter({
        index: 2,
        cvsName: "screens",
        urlReg: /\/tetris\/screens/
    });
}

console.log("ending");