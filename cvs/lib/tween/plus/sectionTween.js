var TweenPackage = require("../tween");

function SectionTween(repeat) {
    TweenPackage.Tween.apply(this, arguments);
    this.Repeat = repeat; //重复方式
}

SectionTween.prototype.start = function() {

};
SectionTween.prototype.finish = function() {

};

TweenPackage.inherit(SectionTween, TweenPackage.Tween);
module.exports = {
    SectionTween: SectionTween,
    inherit: TweenPackage.inherit
};