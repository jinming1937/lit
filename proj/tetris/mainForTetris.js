define([
    "../../cvs/framework/manager",
    "./js/handler",
    "./js/screen",
    "./js/block"
],function(manager,handler,screens,block){
    if(location.port === "8089"){
        manager.router.addRouter({
            index:0,
            cvsName : "block",
            urlReg:/tetris\/(tetris)?/
        });
        manager.router.addRouter({
            index:1,
            cvsName : "handler",
            urlReg:/\/tetris\/handler/
        });
        manager.router.addRouter({
            index:2,
            cvsName : "screens",
            urlReg:/\/tetris\/screens/
        });
    }else{
        manager.router.addRouter({
            index:0,
            cvsName : "block",
            urlReg:/tetris\/(tetris)?/
        });
        manager.router.addRouter({
            index:1,
            cvsName : "handler",
            urlReg:/\/tetris\/handler/
        });
        manager.router.addRouter({
            index:2,
            cvsName : "screens",
            urlReg:/\/tetris\/screens/
        });
    }
    
	console.log("ending");
});