/**
 * 作者：jinming1937@163.com
 */
require('./main.scss');

//npm install node-sass --save-dev 
console.log("start");
var core = require("../../cvs/lit");
require("./js/snIndex");
require("./js/proStart");
require("./js/proSnake");
require("./js/block");
require("./js/windmill");
require("./js/nineBalls");
require("./js/five");
require("../../cvs/outer/onresize");
if (location.port === "8080") {
  core.router.addRouter({
    index: 0,
    title: '小指嘎',
    cvsName: "index",
    urlReg: /(\/snake\/snindex)?/
  });
  core.router.addRouter({
    index: 1,
    title: '贪吃蛇',
    cvsName: "classical",
    urlReg: /\/snake\/classical/
  });
  core.router.addRouter({
    index: 2,
    title: '贪吃蛇',
    cvsName: "prosnake",
    urlReg: /\/snake\/prosnake/
  });
  core.router.addRouter({
    index: 3,
    title: '方块',
    cvsName: "block",
    urlReg: /\/snake\/block/
  });
  core.router.addRouter({
    index: 4,
    title: '风车',
    cvsName: "windmill",
    urlReg: /\/snake\/windmill/
  });
  core.router.addRouter({
    index: 5,
    title: '9环',
    cvsName: "nineballs",
    urlReg: /\/snake\/nineballs/
  });
  core.router.addRouter({
    index: 5,
    title: '梅花',
    cvsName: "five",
    urlReg: /\/snake\/five/
  });
} else {
  core.router.addRouter({
    index: 0,
    title: '小指嘎',
    cvsName: "index",
    urlReg: /\/snake\/(sindex)?/
  });
  core.router.addRouter({
    index: 1,
    title: '贪吃蛇',
    cvsName: "classical",
    urlReg: /\/snake\/classical/
  });
  core.router.addRouter({
    index: 2,
    title: '贪吃蛇',
    cvsName: "prosnake",
    urlReg: /\/snake\/prosnake/
  });
  core.router.addRouter({
    index: 3,
    title: '风车',
    cvsName: "windmill",
    urlReg: /\/snake\/windmill/
  });
  core.router.addRouter({
    index: 4,
    title: '方块',
    cvsName: "block",
    urlReg: /\/snake\/block/
  });
  core.router.addRouter({
    index: 5,
    title: '9环',
    cvsName: "nineballs",
    urlReg: /\/snake\/nineballs/
  });
  core.router.addRouter({
    index: 5,
    title: '梅花',
    cvsName: "five",
    urlReg: /\/snake\/five/
  });
}

core.init();
console.log("ending");