console.log("script start");
require.config({
	//baseUrl:"./js",// 
	paths:{
	}
});

define(["./js/test"],function(){
	console.log("ending");
});