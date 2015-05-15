$(function(){
	$.ajax({url: "get_pictures.php", success: function(result){
		var imgs = JSON.parse(result);
		$("#overlay").hide();
		
		for (var i = 0; i < imgs.length; i++) {
			var img = document.createElement("img");
			img.className = "galleryimg";
			img.src = imgs[i];
			$(".content").append(img);

			img.height = img.offsetWidth;
		}


		if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$("img").click(function() {
	 	  		$("#focus img").attr("src", this.src);
	 	  		$("#focus img").css("top", $(window).scrollTop() 
	   			+ ($(window).height() - $("#focus img").height()) / 2);
	 	  		$("#focus img").hide().fadeIn(500);

	 	 		$("#overlay").css("top", $(window).scrollTop());
	 	 		$("#overlay").show();
	   	});

	   	$(window).scroll(function() {
	   		$("#focus img").css("top", $(window).scrollTop() 
	   			+ ($(window).height() - $("#focus img").height()) / 2);
	   		$("#overlay").css("top", $(window).scrollTop());
	   	});

	   	$("#focus img, #overlay").click(function() {
	   		$("#focus img").attr("src", "");
	   		$("#overlay").hide();
	   	});
		}
   }});

   $(window).resize(function() {
   	$("img").each(function() {
   		this.height = this.offsetWidth;
   	});
   });


});