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

define(["../../lib/main","./js/index","./js/ProjStart","./js/block"],function(main){
	main.router.addRouter({
		index:0,
		cvsName : "index",
		urlReg:/index/
	});
	main.router.addRouter({
		index:1,
		cvsName : "classical",
		urlReg:/classical/
	});
	main.router.addRouter({
		index:2,
		cvsName : "block",
		urlReg:/block/
	})
	main.init();
	console.log("ending");
});