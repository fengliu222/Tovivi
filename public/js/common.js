$(function(){
	 var num = $(".one").length;
	 var width = 940;
	 var i=0;
	
	
	 /*
		Add click event listener for homepage content items.
	 */
	 $("#content").width(width*num);
	 $("#list ul").delegate("li","click",function(){
	 		console.log($(this).index());
	 		$("#content").css("left",-($(this).index())*width);
	 });

	  
	 
	 // Flash
 	function jump(){
	 	$(".jump1").fadeIn(3000,function(){
	 		$(".jump2").fadeIn("slow",function(){
	 			dis();
	 			slide();
	 		});
	 	});

	}
	function dis(){
		$("#front").fadeOut(3000,function(){
			$("#main").fadeIn("fast");
			$("#aside").fadeIn("fast");
		})
	}

	jump();

	 
	 // slide
	 function slide(){
	 	var pic = $("#slide img");
	 	
 
	
		pic.eq(i).fadeIn(3000).delay(2000).fadeOut(5000);
		
 		window.setTimeout(function(){
 			i++;

 			if(i<pic.length){
 				slide();
 			}else{
 				i=0;
 				slide();
 			}
 			
 		},11000);


	 }

	
});
