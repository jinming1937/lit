//    注意：call 方式继承（对象冒充），如果基类中有引用类型的属性，则子类的实例会相互覆盖此属性

/**
 * 1、在包里用 var ,function ,let , const 等声明的变量或常量为私有变量,子类无法继承(注意如果在构造函数外面声明，由于require CMD 特性，不会因为
 *  require 多次而进行多次声明，导致 子类实例之间会覆盖修改此属性 )
 * 2、用 [this].[property] 声明的变量为受保护的变量,子类可以通过 [superClass].call(this,param) 方式继承，
 *      当然，这取决于this.[property] 出现的位置（如果不在构造函数中声明，而是在[class].[prototype].[function]原型的方法
 *      中声明，只有在子类主动调用此方法时，子类才能拥有此属性）。
 * 3、用 [class].[prototype].[function/property] 声明的变量 为公共变量
 * 规范一下：
 *      <1>、为了防止[class].[prototype].[property] 声明的变量是引用类型而导致，子类实例互相覆盖，只能
 *           [class].[prototype].[function]声明方法，不声明变量；而在构造函数中声明的引用类型，由于在子类中进行call,
 *           进而可以重新声明，所以不会导致子类实例相互覆盖，所以可以在构造函数中声明变量（[this].[property]）
 *      <2>、[this].[property]声明的属性如果在构造函数里，则通过 [superClass].call(this,param) 可以被子类继承
 *      <3>、为了使声明的私有变量，可以被读写，可以在构造函数中声明私有变量的同时，可以声明this.get[Property]，this.set[Property] 属性读写器
 */

/**
 * @description 寄生组合式继承：继承原型中的属性
 * 
 * @param {Object} subClass 子类
 * @param {Object} superClass 父类
 */
function inheritPrototype(subClass, superClass) {
    function F() {}
    F.prototype = superClass.prototype;
    var p = new F(),
        cacheSub = subClass.prototype;
    p.constructor = subClass;
    subClass.prototype = p;
    for (var property in cacheSub) {
        /**
         * 注意引用类型传递
         */
        subClass.prototype[property] = cacheSub[property];
    }
    return subClass;
}

module.exports = inheritPrototype;