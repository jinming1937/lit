define(function() {
	/**
	 * localStorage , sessionStorage , cookie  管理
	 */
    var storageCtrl = {
        //
        sessionCtrl: {
            getData: function(key) {
                return JSON.parse(sessionStorage.getItem(key));
            },
            setData: function(key, value) {
                return sessionStorage.setItem(key, JSON.stringify(value));
            }
        },
        localCtrl: {
            getData: function(key) {
                return JSON.parse(localStorage.getItem(key));
            },
            setData: function(key, value) {
                return localStorage.setItem(key, JSON.stringify(value));
            }
        },
        cookieCtrl: {
            getData: function(key) {
            	var val = JSON.parse(JSON.stringify(getcookie(key) || "")),
            		v;
            	try{
            		v = JSON.parse(val);
            	}	
            	catch(e){
            		v = val;
            	}
                return v;
            },
            /*cookie 存对象要谨慎，它有4KB大小限制*/
            setData: function(key, value, days) {
                return setCookie(key,value,days);
            }
        }
    };

    /* */
    function setCookie(key, value, days) {
        var Days = days || 1;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = key + "=" + escape(JSON.stringify(value)) + ";expires=" + exp.toGMTString() + ";path=/";
    }
    /* */
    function getcookie(objname) {
        var arrstr = document.cookie.split("; ");
        for (var i = 0; i < arrstr.length; i++) {
            var temp = arrstr[i].split("=");
            if (temp[0] == objname) return unescape(temp[1]);
        }
    }

    return storageCtrl;
});