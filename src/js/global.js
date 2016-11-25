$(document).ready(function(){
	if(localStorage.currentlight == "black"){
		$('.app-shade').css({"width":'6.4rem',"height":'99999',"background-color":"rgba(0,0,0,0.5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )"});	
	}



       
        

    function resetHeight(){
        if( $(".white_box")[0] && $("#app")[0] && $(".nav")[0] && $(".footer")[0] && $(".page")[0] ){
        	$(".white_box").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
                     $(".page").height($(".white_box").height())
        }
        
    }
	//响应窗体改变
	window.onresize = function(){
	resetHeight();
	}  

	

})


