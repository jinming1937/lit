var core = require("../../../cvs/lib/framework/core"),
    ScreenPackage = require("./nineBalls/screen"),
    BallPackage = require("./nineBalls/ball"),
    ToolPackage = require("./nineBalls/tool"),
    FpsWordPackage = require("../../../cvs/lib/tool/word"),
    Fps = require("../../../cvs/outer/fps"),
    Animation = require("../../../cvs/outer/animation");
var animate = new Animation();
core.on("show", "nineballs", function(cvs) {
    var fps_text = new Fps();
    var fpsWord = new FpsWordPackage.DrawWords({
        className: 'fps',
        x: 20,
        y: 20,
        word: 0
    });
    var flagNum = false;
    var flagAnimate = animate.setAnimation(function() {
        core.frame.reRender();
        var xfps = fps_text.getFps(+new Date()).toFixed();
        fpsWord.word = flagNum ? xfps : fpsWord.word;
        flagNum = false;
    }, function() {
        // console.log(fpsWord.word);
        flagNum = true;
    }, 1000);
});