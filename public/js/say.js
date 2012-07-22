var formva = {};
var removelog = {};
 
$(function($){
	
	 /*
		Form validator
	*/
 	formva = function(){
	 	var text = $(".formdata");
	 	if($(".formdata textarea").val() !== ""){
	 		text.submit();
	 	}
	 	else{
	 		$("#texterror").show().append("文字部分不能为空！")
	 	}
	 };

	 removelog = function(a){
	 
	 	$.post("/removelog",{d:a},function(data){
	 		console.log(data);
	 	})
	 }

 
})