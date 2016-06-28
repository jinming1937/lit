
if(ran>5){
    var node = document.createElement("link");
    node.setAttribute("href","http://promotion.elong.com/active/perfecthotel/wxqbh5.css");
    document.getElementsByTagName("head")[0].appendChild(node);
}
console.log(ran);

History.replaceState(null, document.title, location.pathname + ctrlURL.setUrlPinyin(location.href.split('/').reverse()[0], city.pinyin));

var onlyonecity = {
	pinyin: ctrlURL.getUrlPinyin()
};


var listenCityChange = function(){
     //1. is pinyin change?
 //return;
     //2. ajax ? function()
     if(ctrlURL.getUrlPinyin()  === onlyonecity.pinyin){
         return;
     }
     thmemMenu.loadData();
     loadPageData.clearLoadedData();
     loadPageData.Ajax();
     console.log(location.href);
};
History.Adapter.bind(window, 'statechange', listenCityChange);