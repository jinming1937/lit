define(function() {
    /*
     * time: 2016.09.19
     * ming.jin
     * 获取GUID 唯一标识
     */

    /* 获取随机16进制个位数 */
    function fn0x() {
        var randomNum = parseInt(Math.random() * 16);
        return "0123456789ABCDEF".substr(randomNum, 1);
    }
    /*＊
     * 10进制转换16进制 
     * @param {Number} num 数字
     * @return {String} 16进制数字的字符串
     */
    function parseTo0x(num) {
        var baseNum = 0;
        var staticStr = "0123456789ABCDEF";
        var strResult = "";
        if (num > 15) {
            baseNum = parseInt(num / 16);
            strResult = staticStr.substr(num % 16, 1);
            if (baseNum > 15) {
                return parseTo0x(baseNum) + strResult;
            } else {
                return staticStr.substr(baseNum, 1) + strResult;
            }
        } else {
            strResult += staticStr.substr(num, 1);
        }
        return strResult;
    }

    /**
     * 获取guid 
     * xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     *    8    -  4 -  4 -（随机＋年） － 月日时分秒＋毫秒
     * @return {String} guid 字符串
     */
    function guid() {
        var time = new Date();
        var guidNum = "";
        for (var i = 0; i < 18; i++) {
            if (i === 8 || i === 13) {
                guidNum += "-";
            } else {
                guidNum += fn0x();
            }
        }
        guidNum += "-" + fn0x() + parseTo0x(time.getFullYear()) + "-" + parseTo0x(time.getMonth() + 1) + (time.getDate() > 15 ? parseTo0x(time.getDate()) : "0" + parseTo0x(time.getDate())) + (time.getHours() > 15 ? parseTo0x(time.getHours()) : "0" + parseTo0x(time.getHours())) + (time.getMinutes() > 15 ? parseTo0x(time.getMinutes()) : "0" + parseTo0x(time.getMinutes())) + (time.getSeconds() > 15 ? parseTo0x(time.getSeconds()) : "0" + parseTo0x(time.getSeconds())) + (time.getMilliseconds() > 256 ? parseTo0x(time.getMilliseconds()) : time.getMilliseconds() > 16 ? "0" + parseTo0x(time.getMilliseconds()) : "00" + parseTo0x(time.getMilliseconds()));
        return guidNum.replace(/\0/g, '') !== "" ? guidNum : guid();
    }
    return guid;
});