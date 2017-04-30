var ElementActionPackage = require("./elementAction");
/**
 * 元素计数
 */
var num = 0;
/**
 * 元素基类：提供公共方法、规范方法接口
 * 或者用ES6
 */
function Ele() {
    ElementActionPackage.ELementAction.call(this);
    /**
     * 元素唯一标识
     * @type {String}
     */
    this.elementUqid = "un" + (++num);
}

/**
 * 根据元素的ID，查找元素
 * 
 * @param {String} id 
 * @returns  
 */
Ele.prototype.getElementById = function modu(id) {
    return {};
};
ElementActionPackage.inherit(Ele, ElementActionPackage.ELementAction);
module.exports = {
    Ele: Ele,
    inherit: ElementActionPackage.inherit
};