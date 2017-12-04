(function(window,undefined){
    var History = window.History || {},
        history = window.history;
    History.extend = {
        setTitle :function(title){
            document.title = title;
        }
    };
    History.init = function(){
        History.pushState = function(obj, title, url){
            //
            History.extend.setTitle(title);
            if(location.href === url) {
                return;
            }
            history.pushState(obj, title, url);
        };
        History.replaceState = function(obj, title, url){
            //
            History.extend.setTitle(title);
            if(location.href === url) {
                return;
            }
            history.replaceState(obj, title, url);
        };
        History.back = function(){
            // history.back();
        }
        History.store = {
            hisObjList:{},
            hisMapUrl: {},
            hisMapId: {}
        };
        History.saveStore = function(obj){
            var strTime = new String(+new Date());
            var hisStore = JSON.parse(sessionStorage.getItem('litHistory'));
            History.store = hisStore || History.store;
            if (obj) {
                History.store.hisObjList[strTime] = obj;
                History.store.hisMapUrl[obj.url] = strTime;
                History.store.hisMapId[strTime] = obj.url;
            }
            sessionStorage.setItem('litHistory',JSON.stringify(History.store));
        };
        History.saveStore();
    }
    History.init();
    // 
    window.addEventListener('popstate',function(e){
        console.log(e);
        History.saveStore({
            url:location.href,
            state: history.state
        });
        
    },false);
}(window));

module.exports = {
    
}