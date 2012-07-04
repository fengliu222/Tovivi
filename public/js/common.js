$(function(){
	 var num = $(".one").length;
	 var width = 700;
	 $("#content").width(width*num);

	 (function(){
	 	var items = $("#list ul li");
	 	items.each(function(i){
	 		 
	 		$(this).click(function(){
	 			console.log(-i*width);
	 			$("#content").css("left",-i*width);
	 		});
	 	})
	 })();
});
 