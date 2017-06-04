var TweenPackage = require("../tween");

function PageTween(repeat) {
    TweenPackage.Tween.apply(this, arguments);
    this.Repeat = repeat; //重复方式
}

PageTween.prototype.start = function() {

};
PageTween.prototype.finish = function() {

};

TweenPackage.inherit(PageTween, TweenPackage.Tween);
module.exports = {
    PageTween: PageTween,
    inherit: TweenPackage.inherit
};