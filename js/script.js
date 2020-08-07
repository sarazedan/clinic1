$(function(){
	
	var winH=$(window).height(),
	    upperH=$('.upp').innerHeight(),
		navH=$('.navbar').innerHeight();
		  
     $('.slider,.carousel-item').height(winH-(upperH+navH));
	 
	
});