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

define(["../../cvs/lib/framework/core","./js/index","./js/projStart","./js/proSnake"],function(core){
	if(location.port === "8089"){
		core.router.addRouter({
			index:0,
			cvsName : "index",
			urlReg:/\/snake\/snindex/
		});
		core.router.addRouter({
			index:1,
			cvsName : "classical",
			urlReg:/\/snake\/classical/
		});
		core.router.addRouter({
			index:2,
			cvsName : "prosnake",
			urlReg:/\/snake\/prosnake/
		});
		// core.router.addRouter({
		// 	index:2,
		// 	cvsName : "block",
		// 	urlReg:/\/snake\/block/
		// });
		// core.router.addRouter({
		// 	index:2,
		// 	cvsName : "eatPoint",
		// 	urlReg:/\/snake\/eatpoint/
		// });
	}else{
		core.router.addRouter({
			index:0,
			cvsName : "index",
			urlReg:/snake\/(index)?/
		});
		core.router.addRouter({
			index:1,
			cvsName : "classical",
			urlReg:/classical/
		});
		core.router.addRouter({
			index:2,
			cvsName : "prosnake",
			urlReg:/\/snake\/prosnake/
		});
		// core.router.addRouter({
		// 	index:2,
		// 	cvsName : "block",
		// 	urlReg:/block/
		// });
	}
	
	core.init();
	console.log("ending");
});