/**
 * 
 * 
 * 
 */
console.log('load main.js')
require.config({
	//baseUrl:"./js",// $_2 
	paths:{
// --ok begin $_1
//		"screen":'js/screen',
//		"handler":'js/handler',
//		"block":'js/block'
// --ok end
	}
})


define(["./js/screen","./js/handler","./js/block"],function (TetrisScreen,Handler,Block) { //--ok 
//define(["screen","handler","block"],function (TetrisScreen,Handler,Block) { //设置了path ok $_1
//define(["screen","handler","block"],function (TetrisScreen,Handler,Block) { //设置了path ok $_2 需要这些文件defined中引用文件的目录以baseUrl为准	
    //================================[Main start]==============================//
    var preScreen = new TetrisScreen(document.getElementById("Next"));/*创建预告窗口*/
    var preBlock = new Block(document.getElementById("Next"), preScreen.getPrePixel());/*创建预告块*/
    var myScreen = new TetrisScreen(document.getElementById("Tetris"));//创建主窗口对象
    var myBlock = new Block(document.getElementById("Tetris"), myScreen.getPrePixel());//创建方块对象
    var myHandler = new Handler(document.getElementById("Operator"), window, myBlock, preBlock);//创建手柄对象

    function waiting() {
        myHandler.startGame(500);/*开始游戏*/
    };
    //触发 手柄按钮
    window.onkeydown = function (e) {
        myHandler.keyDown(e);
    };
    window.onkeyup = function (e) {
        myHandler.keyUp(e);
    };
    window.onkeypress = function (e) {
        myHandler.keyPress(e);
    };

    window.onclick = function(e){
	    	switch (e.target.innerHTML){
	    		case 'stop':
	    			myHandler.key({keyCode:83},0);
	    		break;
	    		case 'start':
	    			myHandler.key({keyCode:83},0);
	    		break;
	    		case 'reset':
	    			myHandler.key({keyCode:82},0);
	    		break;
	    		case 'up':
	    			myHandler.key({keyCode:38},0);
	    		break;
	    		case 'left':
	    			myHandler.key({keyCode:37},0);
	    		break;
	    		case 'down':
	    			myHandler.key({keyCode:40},0);
	    		break;
	    		case 'right':
	    			myHandler.key({keyCode:39},0);
	    		break;
	    		default:
	    			console.log('no Element');
	    		break;
	    	}
    };

    //页面初始化 触发块
    (function () {
        preBlock.createBlock();/*预告创建块*/
        myBlock.createBlock();/*屏幕区域创建块*/
        //window.setTimeout(waiting, 300);//设置延迟300毫秒
        waiting();
    })();
    //================================[Main end]================================//
	
});