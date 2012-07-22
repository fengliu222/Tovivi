var formva = {};
var removelog = {};
 
$(function($){
	KindEditor.ready(function(k){
		editor = k.create("#ed",{
			width:'940px'
		});
	})

	 /*
		Form validator
	*/
 	formva = function(){
 		editor.sync();
 		console.log(editor.html())
 		console.log($(".formdata textarea").val());
	 	var text = $(".formdata");
	 	if(editor.html() !== ""){
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