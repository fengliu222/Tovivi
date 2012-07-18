$(function($){
	 /*
		Form validator
	*/
 	(function(){
	 	var text = $(".formdata");
	 	if($(".formdata textarea").val() !== ""){
	 		text.submit();
	 	}
	 	else{
	 		$("#texterror").show().append("文字部分不能为空！")
	 	}
	 })();

	 $(".listitem .removeicon").bind("click",function(e){
	 	
	 })
})