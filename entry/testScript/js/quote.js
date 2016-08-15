define([
	"../../../lib/jquery",
	"../../../cvs/lib/server/server",
	"../../../sc/chooseCity/chooseCity"
],function(_,server,ChooseCity){
	console.log("load quote");
	var $CITYLIST;
	server({
		url:"../../../service/city/city.json",
		type:"GET",
		success:function(data){
			//$CITYLIST = data
		}
	});
	$CITYLIST = {
		datetime:new Date(),
		data:{"errorCode":"","errorMessage":"","checkUrl":null,"sessionTokenLevel":"TimeOut","data":[{"did":"334","cname":"澳门","fletter":"a","pinyin":"aomen"},{"did":"335","cname":"北京","fletter":"b","pinyin":"beijing"},{"did":"357","cname":"上海","fletter":"s","pinyin":"shanghai"},{"did":"359","cname":"台湾","fletter":"t","pinyin":"taiwan"},{"did":"360","cname":"天津","fletter":"t","pinyin":"tianjin"},{"did":"362","cname":"香港","fletter":"x","pinyin":"xianggang"},{"did":"366","cname":"重庆","fletter":"c","pinyin":"zhongqing"},{"did":"391","cname":"蚌埠","fletter":"b","pinyin":"bangbu"},{"did":"393","cname":"池州","fletter":"c","pinyin":"chizhou"},{"did":"394","cname":"滁州","fletter":"c","pinyin":"chuzhou"},{"did":"395","cname":"合肥","fletter":"h","pinyin":"hefei"},{"did":"402","cname":"铜陵","fletter":"t","pinyin":"tongling"},{"did":"417","cname":"福州","fletter":"f","pinyin":"fuzhou"},{"did":"418","cname":"龙岩","fletter":"l","pinyin":"longyan"},{"did":"422","cname":"泉州","fletter":"q","pinyin":"quanzhou"},{"did":"425","cname":"厦门","fletter":"x","pinyin":"xiamen"},{"did":"426","cname":"漳州","fletter":"z","pinyin":"zhangzhou"},{"did":"431","cname":"兰州","fletter":"l","pinyin":"lanzhou"},{"did":"440","cname":"东莞","fletter":"d","pinyin":"dong"},{"did":"441","cname":"佛山","fletter":"f","pinyin":"foshan"},{"did":"442","cname":"广州","fletter":"g","pinyin":"guangzhou"},{"did":"443","cname":"河源","fletter":"h","pinyin":"heyuan"},{"did":"444","cname":"惠州","fletter":"h","pinyin":"huizhou"},{"did":"445","cname":"江门","fletter":"j","pinyin":"jiangmen"},{"did":"446","cname":"揭阳","fletter":"j","pinyin":"jieyang"},{"did":"448","cname":"梅州","fletter":"m","pinyin":"meizhou"},{"did":"449","cname":"清远","fletter":"q","pinyin":"qingyuan"},{"did":"452","cname":"韶关","fletter":"s","pinyin":"shaoguan"},{"did":"453","cname":"深圳","fletter":"s","pinyin":"shen"},{"did":"454","cname":"阳江","fletter":"y","pinyin":"yangjiang"},{"did":"456","cname":"湛江","fletter":"z","pinyin":"zhanjiang"},{"did":"459","cname":"珠海","fletter":"z","pinyin":"zhuhai"},{"did":"461","cname":"北海","fletter":"b","pinyin":"beihai"},{"did":"464","cname":"桂林","fletter":"g","pinyin":"guilin"},{"did":"467","cname":"贺州","fletter":"h","pinyin":"hezhou"},{"did":"476","cname":"贵阳","fletter":"g","pinyin":"guiyang"},{"did":"477","cname":"六盘水","fletter":"l","pinyin":"liupanshui"},{"did":"484","cname":"保亭县","fletter":"b","pinyin":"baotingxian"},{"did":"489","cname":"海口","fletter":"h","pinyin":"haikou"},{"did":"497","cname":"文昌市","fletter":"w","pinyin":"wenchangshi"},{"did":"502","cname":"承德","fletter":"c","pinyin":"chengde"},{"did":"506","cname":"秦皇岛","fletter":"q","pinyin":"qinhuangdao"},{"did":"507","cname":"石家庄","fletter":"s","pinyin":"shijiazhuang"},{"did":"510","cname":"张家口","fletter":"z","pinyin":"zhangjiakou"},{"did":"516","cname":"洛阳","fletter":"l","pinyin":"luoyang"},{"did":"524","cname":"郑州","fletter":"z","pinyin":"zhengzhou"},{"did":"531","cname":"哈尔滨","fletter":"h","pinyin":"haerbin"},{"did":"550","cname":"武汉","fletter":"w","pinyin":"wuhan"},{"did":"557","cname":"长沙","fletter":"c","pinyin":"changsha"},{"did":"558","cname":"郴州","fletter":"c","pinyin":"chenzhou"},{"did":"562","cname":"邵阳","fletter":"s","pinyin":"shaoyang"},{"did":"568","cname":"张家界","fletter":"z","pinyin":"zhangjiajie"},{"did":"571","cname":"白山","fletter":"b","pinyin":"baishan"},{"did":"574","cname":"吉林","fletter":"j","pinyin":"jilin"},{"did":"580","cname":"常州","fletter":"c","pinyin":"changzhou"},{"did":"582","cname":"连云港","fletter":"l","pinyin":"lianyungang"},{"did":"583","cname":"南京","fletter":"n","pinyin":"nanjing"},{"did":"585","cname":"苏州","fletter":"s","pinyin":"suzhou"},{"did":"588","cname":"无锡","fletter":"w","pinyin":"wuxi"},{"did":"591","cname":"扬州","fletter":"y","pinyin":"yangzhou"},{"did":"598","cname":"九江","fletter":"j","pinyin":"jiujiang"},{"did":"600","cname":"南昌","fletter":"n","pinyin":"nanchang"},{"did":"601","cname":"上饶","fletter":"s","pinyin":"shangrao"},{"did":"604","cname":"鹰潭","fletter":"y","pinyin":"yingtan"},{"did":"609","cname":"大连","fletter":"d","pinyin":"dalian"},{"did":"618","cname":"营口","fletter":"y","pinyin":"yingkou"},{"did":"622","cname":"赤峰","fletter":"c","pinyin":"chifeng"},{"did":"623","cname":"鄂尔多斯","fletter":"e","pinyin":"eerduosi"},{"did":"624","cname":"呼和浩特","fletter":"h","pinyin":"huhehaote"},{"did":"625","cname":"呼伦贝尔","fletter":"h","pinyin":"hulunbeier"},{"did":"643","cname":"西宁","fletter":"x","pinyin":"xining"},{"did":"654","cname":"青岛","fletter":"q","pinyin":"qingdao"},{"did":"663","cname":"大同","fletter":"d","pinyin":"datong"},{"did":"666","cname":"晋中","fletter":"j","pinyin":"jinzhong"},{"did":"670","cname":"太原","fletter":"t","pinyin":"taiyuan"},{"did":"671","cname":"五台山","fletter":"w","pinyin":"wutaishan"},{"did":"677","cname":"汉中","fletter":"h","pinyin":"hanzhong"},{"did":"681","cname":"西安","fletter":"x","pinyin":"xian"},{"did":"683","cname":"延安","fletter":"y","pinyin":"yanan"},{"did":"692","cname":"成都","fletter":"c","pinyin":"chengdu"},{"did":"697","cname":"乐山","fletter":"l","pinyin":"leshan"},{"did":"705","cname":"宜宾","fletter":"y","pinyin":"yibin"},{"did":"712","cname":"台北","fletter":"t","pinyin":"taibei"},{"did":"714","cname":"台中","fletter":"t","pinyin":"taizhong"},{"did":"722","cname":"拉萨","fletter":"l","pinyin":"lasa"},{"did":"723","cname":"林芝","fletter":"l","pinyin":"linzhi"},{"did":"726","cname":"山南","fletter":"s","pinyin":"shannan"},{"did":"729","cname":"阿勒泰","fletter":"a","pinyin":"aletai"},{"did":"731","cname":"博尔塔拉","fletter":"b","pinyin":"boertala"},{"did":"732","cname":"昌吉","fletter":"c","pinyin":"changji"},{"did":"733","cname":"哈密地区","fletter":"h","pinyin":"hamidiqu"},{"did":"735","cname":"喀什","fletter":"k","pinyin":"kashi"},{"did":"736","cname":"克拉玛依","fletter":"k","pinyin":"kelamayi"},{"did":"741","cname":"吐鲁番","fletter":"t","pinyin":"tulufan"},{"did":"742","cname":"乌鲁木齐","fletter":"w","pinyin":"wulumuqi"},{"did":"744","cname":"伊犁","fletter":"y","pinyin":"yili"},{"did":"745","cname":"保山","fletter":"b","pinyin":"baoshan"},{"did":"746","cname":"楚雄","fletter":"c","pinyin":"chuxiong"},{"did":"747","cname":"大理","fletter":"d","pinyin":"dali"},{"did":"749","cname":"红河州","fletter":"h","pinyin":"honghezhou"},{"did":"750","cname":"昆明","fletter":"k","pinyin":"kunming"},{"did":"751","cname":"丽江","fletter":"l","pinyin":"lijiang"},{"did":"752","cname":"临沧市","fletter":"l","pinyin":"lincangshi"},{"did":"754","cname":"曲靖","fletter":"q","pinyin":"qujing"},{"did":"756","cname":"文山","fletter":"w","pinyin":"wenshan"},{"did":"757","cname":"西双版纳","fletter":"x","pinyin":"xishuangbanna"},{"did":"759","cname":"昭通","fletter":"z","pinyin":"zhaotong"},{"did":"760","cname":"杭州","fletter":"h","pinyin":"hangzhou"},{"did":"761","cname":"湖州","fletter":"h","pinyin":"huzhou"},{"did":"762","cname":"嘉兴","fletter":"j","pinyin":"jiaxing"},{"did":"764","cname":"丽水","fletter":"l","pinyin":"lishui"},{"did":"765","cname":"宁波","fletter":"n","pinyin":"ningbo"},{"did":"766","cname":"普陀山","fletter":"p","pinyin":"putuoshan"},{"did":"767","cname":"绍兴","fletter":"s","pinyin":"shaoxing"},{"did":"769","cname":"温州","fletter":"w","pinyin":"wenzhou"},{"did":"770","cname":"舟山","fletter":"z","pinyin":"zhoushan"},{"did":"801","cname":"周庄","fletter":"z","pinyin":"zhouzhuang"},{"did":"830","cname":"华山","fletter":"h","pinyin":"huashan"},{"did":"838","cname":"阜阳","fletter":"f","pinyin":"fuyang"},{"did":"850","cname":"黄山市","fletter":"h","pinyin":"huangshanshi"},{"did":"881","cname":"花莲","fletter":"h","pinyin":"hualian"},{"did":"1782","cname":"阆中","fletter":"l","pinyin":"zhong"},{"did":"3702","cname":"九华山","fletter":"j","pinyin":"jiuhuashan"},{"did":"5377","cname":"南戴河","fletter":"n","pinyin":"nandaihe"},{"did":"5616","cname":"奉化","fletter":"f","pinyin":"fenghua"},{"did":"10132","cname":"崇礼","fletter":"c","pinyin":"chongli"},{"did":"12072","cname":"西塘","fletter":"x","pinyin":"xitang"},{"did":"13851","cname":"乌镇","fletter":"w","pinyin":"wuzhen"},{"did":"15804","cname":"三亚","fletter":"s","pinyin":"sanya"},{"did":"16235","cname":"泰安","fletter":"t","pinyin":"taian"},{"did":"17073","cname":"启东","fletter":"q","pinyin":"qidong"},{"did":"17143","cname":"宁海","fletter":"n","pinyin":"ninghai"},{"did":"17166","cname":"德清","fletter":"d","pinyin":"deqing"},{"did":"17180","cname":"磐安","fletter":"p","pinyin":"panan"},{"did":"17208","cname":"遂昌","fletter":"s","pinyin":"suichang"},{"did":"17270","cname":"黄山","fletter":"h","pinyin":"huangshan"},{"did":"17690","cname":"汝阳","fletter":"r","pinyin":"ruyang"},{"did":"17731","cname":"卫辉","fletter":"w","pinyin":"weihui"},{"did":"18643","cname":"普洱","fletter":"p","pinyin":"puer"},{"did":"19101","cname":"伊宁市","fletter":"y","pinyin":"yiningshi"},{"did":"19122","cname":"宜兰","fletter":"y","pinyin":"yilan"},{"did":"23528","cname":"黟县","fletter":"y","pinyin":"xian"},{"did":"23947","cname":"宣城龙泉洞","fletter":"x","pinyin":"xuanchenglongquandong"},{"did":"24070","cname":"武夷山","fletter":"w","pinyin":"wuyishan"},{"did":"24486","cname":"敦煌","fletter":"d","pinyin":"dunhuang"},{"did":"25512","cname":"阳朔","fletter":"y","pinyin":"yangshuo"},{"did":"27386","cname":"江阴","fletter":"j","pinyin":"jiangyin"},{"did":"27392","cname":"昆山","fletter":"k","pinyin":"kunshan"},{"did":"28117","cname":"婺源","fletter":"w","pinyin":"yuan"},{"did":"30102","cname":"九寨沟","fletter":"j","pinyin":"jiuzhaigou"},{"did":"30103","cname":"峨眉山","fletter":"e","pinyin":"emeishan"},{"did":"30104","cname":"稻城","fletter":"d","pinyin":"daocheng"},{"did":"30176","cname":"西昌泸沽湖","fletter":"x","pinyin":"xichangguhu"},{"did":"30447","cname":"金门县","fletter":"t","pinyin":"jinmenxian"},{"did":"30789","cname":"库尔勒","fletter":"k","pinyin":"kuerle"},{"did":"30792","cname":"喀纳斯","fletter":"k","pinyin":"kanasi"},{"did":"31034","cname":"禾木村","fletter":"h","pinyin":"hemucun"},{"did":"31108","cname":"香格里拉","fletter":"x","pinyin":"xianggelila"},{"did":"31442","cname":"双廊","fletter":"s","pinyin":"shuanglang"},{"did":"31485","cname":"安吉","fletter":"a","pinyin":"anji"},{"did":"31488","cname":"桐庐","fletter":"t","pinyin":"tonglu"},{"did":"31491","cname":"临安","fletter":"l","pinyin":"linan"},{"did":"31494","cname":"义乌","fletter":"y","pinyin":"yiwu"},{"did":"31495","cname":"武义","fletter":"w","pinyin":"wuyi"},{"did":"31496","cname":"泰顺","fletter":"t","pinyin":"taishun"},{"did":"33356","cname":"吴江","fletter":"w","pinyin":"wujiang"},{"did":"33371","cname":"兰溪","fletter":"l","pinyin":"lanxi"},{"did":"33451","cname":"长葛","fletter":"c","pinyin":"changge"},{"did":"38528","cname":"锡林浩特","fletter":"x","pinyin":"xilinhaote"},{"did":"38997","cname":"凤凰","fletter":"f","pinyin":"fenghuang"},{"did":"39089","cname":"宏村","fletter":"h","pinyin":"hongcun"},{"did":"42910","cname":"北戴河","fletter":"b","pinyin":"beidaihe"},{"did":"43395","cname":"腾冲","fletter":"t","pinyin":"tengchong"},{"did":"48959","cname":"蔚县","fletter":"y","pinyin":"weixian"},{"did":"49873","cname":"怒江","fletter":"n","pinyin":"nujiang"},{"did":"50096","cname":"南靖","fletter":"n","pinyin":"nanjing"},{"did":"50364","cname":"长白山池北","fletter":"c","pinyin":"changbaishanchibei"},{"did":"50365","cname":"长白山池西","fletter":"c","pinyin":"changbaishanchixi"},{"did":"50512","cname":"罗田","fletter":"l","pinyin":"luotian"},{"did":"50600","cname":"鄯善","fletter":"s","pinyin":"shan"},{"did":"50603","cname":"布尔津","fletter":"b","pinyin":"buerjin"}],"total":181,"more":[{"did":"335","cityname":"北京","alias_en":"beijing","fletter":"b"},{"did":"760","cityname":"杭州","alias_en":"hangzhou","fletter":"h"},{"did":"550","cityname":"武汉","alias_en":"wuhan","fletter":"w"},{"did":"425","cityname":"厦门","alias_en":"xiamen","fletter":"x"},{"did":"583","cityname":"南京","alias_en":"nanjing","fletter":"n"},{"did":"692","cityname":"成都","alias_en":"chengdu","fletter":"c"},{"did":"357","cityname":"上海","alias_en":"shanghai","fletter":"s"},{"did":"442","cityname":"广州","alias_en":"guangzhou","fletter":"g"},{"did":"585","cityname":"苏州","alias_en":"suzhou","fletter":"s"},{"did":"459","cityname":"珠海","alias_en":"zhuhai","fletter":"z"},{"did":"15804","cityname":"三亚","alias_en":"sanya","fletter":"s"}],"error":false}
	};
	var choose = $(".choose-city");
	var chooseCity = new ChooseCity();
	var globalCityInfo = {};
	globalCityInfo.did =334;
            globalCityInfo.cityName = "北京";
            globalCityInfo.pinyin = "beijing";
	/* 插件初始化 */
    chooseCity.config({
        presentCityObj: globalCityInfo,
        callback: function(city) {
            var _this = this;
            var name = _this._wordFilter(city.cityName, 3);
            $(".indexnew_head .citys", dom).html(name + '<i></i>');
            if (globalCityInfo.cityName === city.cityName) {
                return;
            }
            globalCityInfo.did = city.cityId;
            globalCityInfo.cityName = city.cityName;
            globalCityInfo.pinyin = city.pinyin;
            //sessionStorage.setItem("perfectCity",JSON.stringify(globalCityInfo));
            setCookie("perfectCityDid", "" + globalCityInfo.did);
            setTimeout(function() {
                var pinyin = globalCityInfo.pinyin;
                var u = innerCtrlUrl.getUrl().replace(/pinyin\=\w+/g, "pinyin=" + pinyin);
                innerCtrlUrl.setUrl(u);
                History.replaceState("indexnew", document.title, u);
            }, 500);
            //History.replaceState(null,document.title,location.pathname+ctrlURL.setUrlPinyin(location.href.split('/').reverse()[0],city.pinyin));

            thmemMenu.loadData();
            loadPageData.clearLoadedData();
            loadPageData.Ajax();
            /* 打点 */
            tjMVT.setData(getBaseTJData({
                "et": "info",
                "tri": "city",
                "hcty": city.cityId.toString()
            }));
        },
        getPerfectAllCity: function() {
            return $CITYLIST && $CITYLIST.data ? $CITYLIST.data: null;
        }
    });
    chooseCity.init();
    chooseCity.beforeShow();
    $(".index").append(chooseCity.page);
	choose.click(function(e){
		console.log("hahah")
		//chooseCity.show();
	});
	var num = 0;
	$(".choose-city2").click(function(e){
		num += 1;
		console.log(num);
		chooseCity.page.show();
	});
});
