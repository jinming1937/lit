var storageCtrl = require("storage-ctrl");
var $ = require("../../lib/jquery");

(function(){
	//index.html
	
    var str = 'http://10.39.20.125:8080/innerapi/releaseBindMember?openId=${#openId}&orderFrom=50171&cardNo=${#cardNo}';
    var btnSubmit = $('.btnSubmit');
    var txtOpenId = $('.txtOpenId'),
        txtCardNo = $('.txtCardNo');
   	txtOpenId.val(storageCtrl.getCookieData('openId'));
    btnSubmit.on('click',function() {
        
        if (!txtCardNo.val() || !txtOpenId.val()) {
            alert('empty value!!!');
            return;
        }
        storageCtrl.setCookieData("openId",txtOpenId.val(),24*60*30);
        window.location.href = str.replace(/\$\{\#openId\}/g, txtOpenId.val())
        						  .replace(/\$\{\#cardNo\}/g, txtCardNo.val());
    });

    $('.btnFormat').on('click', function() {
        var str = $('.txtBeforeFormat').val().replace(/\>\s+\</g, '><');
        $('.txtAfterFormat').val(str);
    });


}());