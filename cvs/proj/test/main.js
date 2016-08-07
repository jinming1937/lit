console.log("script start");
require.config({
	//baseUrl:"./js",// 
	paths:{
	}
});

define(["../../lib/server","../test/js/test"],function(server){
	console.log(typeof server);
	console.log("ending");
});