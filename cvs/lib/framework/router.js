define(function(){
	/* 路由分配 */
	function Router(){
		this.routerArray = [];
	}
	
	/**
	 * 添加路由信息
	 * @param {Object} obj.index 顺序
	 * @param {Object} obj.cvsName canvas name
	 * @param {Object} obj.urlReg 正则匹配
	 */
	Router.prototype.addRouter = function(obj){
		this.routerArray.push(obj);	
	};
	
	/**
	* 路由匹配
	* @param {Object} strUrl
	* @return {Object} obj {index:Number,cvsName:String,urlReg:RegExp}
	*/
	Router.prototype.match = function(url){
		var o = null;
		for(var i in this.routerArray){
			if(url.search(this.routerArray[i].urlReg)>-1){
				o = this.routerArray[i];
			}
		}
		return o;
	}
	
	return new Router();
});