define(["./testA","./testB","./testC"],function(testA,testB,testC){
    console.log('testA testB testC begin');
    console.log("testA"+testA.pa);
    console.log("testB"+testB.pa);
    console.log("testC"+(new testC).pa);
    console.log('testA testB testC end');
});