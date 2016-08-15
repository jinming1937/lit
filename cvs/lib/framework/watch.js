define(function(){

	/*
	* 实现方式：
	* 1、对象继承Watching , 获得其属性和方法
	* 2、对象通过 addWatching 添加事件监视
	* 3、对象通过 fire , 触发事件
	* 
	* 
	*
	*/

	/* 事件监视 */
	function Watching(){
		this.array = [];
		this.length = this.array.length;
	}
	Watching.prototype.addWatching = function(name,callBack,isCall){
		this.array.push({"name":name,fn:callBack,isCall:isCall?false:true});
		this.length++;
	};
	Watching.prototype.removeWatching = function(name){
		var _arr = this.array;
		var _len = this.length;
		for(var i=0,len = this.length;i<len;i++){
			if(name === this.array[i].name){
				_arr.splice(i,1);
				this.length --;
			}
		}
		this.array = _arr;
	};
	Watching.prototype.fire = function(name){
		for(var i=0,len = this.length;i<len;i++){
			if(this.array[i].name === name){
				window.setTimeout(function(){
					this.array[i].fn();
				},0);
			}
		}
	};
	
	return Watching;
});