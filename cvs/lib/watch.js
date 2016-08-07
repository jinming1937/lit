define(function(){
	/* 单例模式 */
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
	Watching.prototype.fire = function(){
		for(var i=0,len = this.length;i<len;i++){
			window.setTimeout(function(){
				this.array[i].fn();
			},0);
		}
	};
	
	return new Watching();
});
