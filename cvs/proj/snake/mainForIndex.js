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

define(["../../lib/framework/main","./js/index"],function(main){
	main.addRouter({
		index:0,
		cvsName : "index",
		urlReg:/index/
	});
	main.addRouter({
		index:1,
		cvsName : "classical",
		urlReg:/classical/
	});
	main.init();
	console.log("ending");
});