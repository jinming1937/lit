//    注意：call 方式继承（对象冒充），如果基类中有引用类型的属性，则子类的实例会相互覆盖此属性
//    解决办法：采用寄生组合式继承

/**
 * @description 寄生组合式继承
 * 
 * @param {Object} subClass 子类
 * @param {Object} superClass 父类
 */
// function inheritPrototype(subClass, superClass) {
//     var p = (function(o) {
//         function F() {}
//         F.prototype = o;
//         return new F();
//     }(superClass.prototype));
//     p.constructor = subClass;
//     subClass.prototype = p;
//     return subClass;
// }

function inheritObject(o) {

}

function inheritPrototype(subClass, superClass) {
    function F() {}
    F.prototype = superClass.prototype;
    var p = new F(),
        cacheSub = subClass.prototype;
    p.constructor = subClass;
    subClass.prototype = p;
    for (var property in cacheSub) {
        subClass.prototype[property] = cacheSub[property];
    }
    return subClass;
}

module.exports = inheritPrototype;