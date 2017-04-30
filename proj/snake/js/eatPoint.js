var core = require("../../../cvs/lib/framework/core"),
    RoundRectPackage = require("../../../cvs/lib/tool/roundRect"),
    Fps = require("../../../cvs/outer/fps"),
    FpsWordPackage = require("../../../cvs/lib/tool/word"),
    Animation = require("../../../cvs/outer/animation");
var animate = new Animation();

var urlPath = location.origin + (location.port === '8089' ? '/dist/' : '/mb/');
core.on("show", "eatPoint", function() {
    var frame = core.frame;
    console.log("eat point");
    var RoundRect = RoundRectPackage.RoundedRect;
    var roundRect = new RoundRect({
        className: 'button move',
        fontColor: '#101010',
        cornerX: 300,
        cornerY: 10,
        width: 70,
        height: 30,
        fillText: "rou"
    });
    roundRect.addWatching('touchmove', function(e) {
        roundRect.cornerX = e.changedTouches[0].clientX - roundRect.width / 2;
        roundRect.cornerY = e.changedTouches[0].clientY - roundRect.height / 2;
        console.log("hahahaha");
    });

    roundRect.ontouchmove = function(e) {
        roundRect.cornerX = e.changedTouches[0].clientX - roundRect.width / 2;
        roundRect.cornerY = e.changedTouches[0].clientY - roundRect.height / 2;
        console.log("roundRect addWatching touchmove tf:" + new Date().getTime());
        console.log(this.fillText);
        console.log(roundRect);
    };

    var roundRect2 = new RoundRect({
        className: 'button move',
        fontColor: '#101010',
        cornerX: 130,
        cornerY: 10,
        width: 70,
        height: 30,
        fillText: "rou2"
    });
    roundRect2.addWatching("touchmove", function(e) {
        this.cornerX = e.changedTouches[0].clientX - this.width / 2;
        this.cornerY = e.changedTouches[0].clientY - this.height / 2;
        console.log("roundRect addWatching touchmove tf:" + new Date().getTime());
        console.log(this.fillText);
        console.log(roundRect2);
    });

    var roundRect_ = new RoundRect();
    roundRect_.addWatching('touchmove', function(e) {
        console.log("roundRect_ addWatching touchmove tf:" + new Date().getTime());
        console.log(this.fillText);
        console.log(roundRect_);
    });
    roundRect_.ontouchmove = function(e) {
        roundRect_.cornerX = e.changedTouches[0].clientX - roundRect_.width / 2;
        roundRect_.cornerY = e.changedTouches[0].clientY - roundRect_.height / 2;
        console.log("roundRect_ ontouchmove tf:" + new Date().getTime());
        console.log(this.fillText);
        console.log(roundRect_);
    };
    var goHome = new RoundRect({
        className: "button goHome",
        fontColor: '#101010',
        cornerX: frame.width - 20 - 80,
        cornerY: frame.height - 20 - 30,
        width: 90,
        height: 30,
        cornerRadius: 8,
        fillText: "HomePage",
        ontouchend: function(e) {
            stopGame();
            isStop = true;
            core.open({
                href: urlPath + "snake/snindex.html"
            });
        }
    });

    var stopFlag,
        isStop = false;

    function stopGame() {
        animate.clearAnimation(stopFlag);
        isStop = true;
    }
    var fps_text = new Fps();
    var fpsWord = new FpsWordPackage.DrawWords({
        className: 'fps',
        x: 20,
        y: 20,
        word: 0
    });

    function starGame() {
        var flagNum = true;
        stopFlag = animate.setAnimation(function() {
            core.frame.reRender();
            var xfps = fps_text.getFps(+new Date()).toFixed();
            fpsWord.word = flagNum ? xfps : fpsWord.word;
            flagNum = false;
        }, function() {
            flagNum = true;
        }, 500);
    }
    starGame();

});