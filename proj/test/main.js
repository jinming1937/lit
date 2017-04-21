// console.log("script start");
// require.config({
// 	//baseUrl:"./js",// 
// 	paths:{
// 	}
// });

define(["./js/testA", "./js/testB", "./js/testC", "./js/testMdA", "./js/testMdB", "./js/testMdC", "./js/testMdAll"], function(testA, testB, TestC, testMdA, testMdB, testMdC) {
    console.log('testA testB testC ');
    console.log("testA" + testA.pa);
    console.log("testB" + testB.pa);
    console.log("testC" + (new TestC()).pa);
    console.log('testA testB testC ');

    console.log(testMdA.pa);
    console.log(testMdB.pa);
    console.log(testMdC.pa);
    console.log("ending");
});