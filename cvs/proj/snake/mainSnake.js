console.log("start");
require.config({
	//baseUrl:"./js",// 
	paths:{
	}
});

define(["./js/snake"],function(){
	console.log("ending");
});