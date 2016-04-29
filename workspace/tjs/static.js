define(function (require) {
	/*静态对象*/
    var StaticFn = {
        /**
         * @param {Element} eleObj 元素
         * @param {String} removeClass className
         * @param {String} addClass className
         */
        replaceClass:function(eleObj,removeClass,addClass){
        	var className = eleObj.className || eleObj.getAttribute("class"),
        		classArr = className.split(' '),
        		newArr = [];
        	for(var i=0,len = classArr.length;i<len;i++){
        		if(classArr[i] == removeClass){
        			continue;
        		}else if(classArr[i] == addClass){
        			continue;
        		}
        		newArr.push(classArr[i]);        		
        	}
        	addClass ?newArr.push(addClass):"";
        	var str = newArr.join(' ');
            (eleObj.className = str) || eleObj.setAttribute && eleObj.setAttribute("class", str);
        }
    }
	return StaticFn;
});