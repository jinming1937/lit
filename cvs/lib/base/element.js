/**
 * 元素基类：提供公共方法、规范方法接口
 * 注意：call 方式继承（对象冒充），如果基类中有引用类型的属性，则子类的实例会相互覆盖此属性
 * 解决办法：采用寄生组合式继承
 * function inheritObject(o){
 *     function F(){}
 *     f.prototype = o;
 *     return new F();
 * }
 * function inheritPrototype(subClass,superClass){
 *     var p = inheritObject(superClass.prototype);
 *     p.constructor = subClass;
 *     subClass.prototype = p ;
 * }
 * 或者用ES6
 */
function Element() {


}

// Element.prototype = new ElementAction();
// Element.prototype.constructor = Element;

module.exports = Element;