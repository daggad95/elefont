$(function(){
	var imgs;
	var start = 0;

	$.ajax({url: "get_pictures.php", success: function(result){
		imgs = JSON.parse(result);
		
		loadImages();
		
		$("#galleryfocus").attr("src", imgs[0]);
		$("#galleryfocus").height($("#galleryfocus").width());
   	}});

   	$(window).resize(function() {
		$("img").each(function() {
			this.height = this.offsetWidth;
		});
   		$("#galleryfocus").height($("#galleryfocus").width());
   	});

   	$("#gallerynext").click(next);
   	$("#galleryback").click(back);


   	function changeFocus() {
		$("#galleryfocus").attr("src", this.src);
		$("#galleryfocus").height($("#galleryfocus").width());
	}

	function next() {
		start = start + 8;

		if (start >= imgs.length) {
			start = start - imgs.length;
		}
		$("#galleryicons").html("");
		loadImages();
	}

	function back() {
		start = start - 8;

		if (start < 0) {
			start = imgs.length + start;
		}
		$("#galleryicons").html("");
		loadImages();
	}

	function loadImages() {
		for (var i = 0; i < 8; i++) {
			var index = start + i;

			if (index >= imgs.length) {
				index = index - imgs.length;
			}

			var img = document.createElement("img");
			img.className = "galleryimg";
			img.src = imgs[index];
			$("#galleryicons").append(img);

			img.height = img.offsetWidth;
		}

		$(".galleryimg").each(function() {
			this.onclick = changeFocus;	
		});
	}
});
