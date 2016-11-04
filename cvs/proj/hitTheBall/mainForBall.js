/**
 * 作者：jinming1937@163.com
 * 
 */
console.log("start");
require.config({
	//baseUrl:"./js",// 
	paths:{
	}
});

define(["../../lib/main","./js/index"],function(main){
	main.router.addRouter({
		index:0,
		cvsName : "index",
		urlReg:/index/
	});
	main.init();
	console.log("ending");
});