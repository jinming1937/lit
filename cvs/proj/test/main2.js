console.log("script start");
require.config({
	//baseUrl:"./js",// 
	paths:{
	}
});

define(["./js/test2"],function(){
	console.log("ending");
});