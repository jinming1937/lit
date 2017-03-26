define([
    '../css/cssjs'
],function(cssjs) {
    var style = function(className) {
        //,'webkitImageSmoothingEnabled'
        var classList = (className || '').replace(/\s\s/g,' ').replace(/^\s/g,'').replace(/\s$/g,'').split(/\s/g);
        var baseStyle = [
            'globalAlpha', 'globalCompositeOperation', 'filter', 'imageSmoothingEnabled', 'strokeStyle', 'fillStyle', 'shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'lineDashOffset', 'font', 'textAlign', 'textBaseline'
        ];

        var _this = this;
        // (function() {
            baseStyle.forEach(function (item, index) {
                classList.forEach(function (ite,ind) {
                    if(typeof cssjs[ite] !=='undefined'){
                        _this[item] = cssjs[ite][item] || '';
                    }
                });
            });
        // }());

        this.setStyle = function (cxt) {
            for(var item in this){
                if(typeof item !== 'function' && this[item] !== ''){
                    cxt[item] = this[item];
                }
            }
        }
    }
    return style;
});