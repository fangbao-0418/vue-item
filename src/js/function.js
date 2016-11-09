/**
 * Created by Administrator on 2016/11/2.
 */

//判断是否是pc
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function ismobile(test){
    if(IsPC()){

        return 0;
    }
    var u = navigator.userAgent, app = navigator.appVersion;
    if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
        if(window.location.href.indexOf("?mobile")<0){
            try{
                if(/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)){
                    //document.write("IOS");
                    return 0;
                }else{
                    //document.write("android");
                    return 1;
                }
            }catch(e){}
        }
    }else if( u.indexOf('iPad') > -1){
        //document.write("IOS");
        return 0;
    }else{
        //document.write("android");
        return 1;
    }
};





require('../css/android.common.scss');

//require('../css/ios.common.scss');
