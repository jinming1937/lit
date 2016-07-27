function filterHomework(){
    var classid= user.classid;
    var filtertype = user.filtertype+"";
    var data = user.data.studentHomeworks;
    function filter(arr,number_){
        var filterArr = [];
        function conditionC(i,hw){
                var isHw = false;
                if(hw.classID == classid){
                    isHw = true;
                }
                return isHw;
            }
        function conditionF(i,hw){
            var isHw = false;
            var filterArr = filtertype.split(",");
            if($.inArray(hw.status,filterArr) !== -1){
                isHw = true;
            }
            return isHw;
        }
        $.each(arr,function(i,v){
            if(number_ === 1? conditionC(i,v):conditionF(i,v)){
                filterArr.push(v);
            }
        });
        return filterArr;
    }
    //过滤班级
    if(classid&&classid != "-1"){
        data = filter(data,1);
    }
    //过滤作业类型
    if(filtertype && filtertype != "-1"){
        data = filter(data,2);
    }  
}