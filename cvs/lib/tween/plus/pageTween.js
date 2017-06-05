var TweenPackage = require("../tween");

function PageTween(animation, timeFlag) {
    TweenPackage.Tween.apply(this, arguments);
    this.animation = animation; //提供控制动画开始播放的时间函数
    this.animationFlag = 0;
    this.timeFlag = timeFlag || 1000;
}

PageTween.prototype.start = function() {
    this.animationFlag = this.animation.setAnimation(function() {

    }, function() {

    }, this.timeFlag);
};
PageTween.prototype.finish = function() {
    this.animation.clearAnimation(this.animationFlag);
};

TweenPackage.inherit(PageTween, TweenPackage.Tween);
module.exports = {
    PageTween: PageTween,
    inherit: TweenPackage.inherit
};