if(localStorage.currentlight == "black"){
	$('.app-shade').css({"background-color":"rgba(0,0,0,0.5)"});	
}
function resetHeight(){
	if( $(".white_box")[0] && $("#app")[0] && $(".nav")[0] && $(".footer")[0] && $(".page")[0] ){
	    $(".white_box").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
	    $(".page").height($(".white_box").height())
	}    
}

var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

var recalc = function () {
	resetHeight();
};

window.addEventListener(resizeEvt, recalc, false);
//DOMContentLoaded是firefox下特有的Event, 当所有DOM解析完以后会触发这个事件。
document.addEventListener('DOMContentLoaded', recalc, false);