console.log("script start");
require.config({
	//baseUrl:"./js",// 
	paths:{
	}
});

define(["../js/handler","../js/screen","../js/block"],function(){
	console.log("ending");
});