$(document).ready(function(){
	if(localStorage.currentlight == "black"){
		$('.app-shade').css({"width":'6.4rem',"height":'100%',"background-color":"rgba(0,0,0,0.5)"});	
	}
	window.onscroll = function(){ 
		$('.app-shade').height($(document).height());
	}
})
