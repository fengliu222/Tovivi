$(function(){
	 var num = $(".one").length;
	 var width = 620;
	

	 /*
		Add click event listener for homepage content items.
	 */
	 $("#content").width(width*num);
	 $("#list ul").delegate("li","click",function(){
	 		$("#content").css("left",-($(this).index())*width);
	 });

	 
});
