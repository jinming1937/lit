define(function(){
	function History(){
		
	}
	
	History.prototype.addHistory = function(){
		
	}
	
	History.prototype.pushState = function(data,title,_url){
		history.pushState(data,title,_url);
	}
	
	return new History();
});