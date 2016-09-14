define(function(){

	/*
	* 实现方式：
	* 1、对象继承 Watching, 获得其属性和方法
	* 2、对象通过 addWatching, 添加事件监视
	* 3、对象通过 eventFire, 触发事件
	* 
	*/

	/* 事件监视 */
	function Watching(){
		this.eventArray = [];
		this.addWatching = function(name,callBack,isUpEvent){
			this.eventArray.push({
				name:name,
				fn:callBack,
				isUpEvent:isUpEvent?false:true
			});
		};
		this.removeWatching = function(name){
			var _arr = [].concat(this.eventArray);
			var _len = this.eventArray.length;
			for(var i=0;i<_len;i++){
				if(name === this.eventArray[i].name){
					_arr.splice(i,1);
				}
			}
			this.eventArray = _arr;
		};
		this.eventFire = function(e){
			var _this = this;
			for(var i=0,len = this.eventArray.length;i<len;i++){
				if(this.eventArray[i].name === e.type){
					(function(ii,e){
						window.setTimeout(function(){
							_this.eventArray[ii].fn(e);
						},0);
					}(i,e));
				}
			}
		};
	}
	return Watching;
});