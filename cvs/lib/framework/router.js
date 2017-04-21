/**
 * 路由分配
 */
function Router() {
    /**
     * 保存路由的数组
     * @type {Array}
     */
    this.routerArray = [];
}

/**
 * 添加路由信息
 * @param {Object} obj.index 顺序
 * @param {Object} obj.cvsName canvas name
 * @param {Object} obj.urlReg 正则匹配
 */
Router.prototype.addRouter = function(obj) {
    this.routerArray.push(obj);
};

/**
 * 路由匹配
 * @param {Object} strUrl
 * @return {Object} obj {index:Number,cvsName:String,urlReg:RegExp}
 */
Router.prototype.match = function(url) {
    var o = null;
    var _this = this;
    _this.routerArray.forEach(function(item, i) {
        if (url.search(item.urlReg) > -1) {
            o = item;
        }
    });
    return o;
};

module.exports = new Router();