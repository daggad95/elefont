$(function(){
	$("#imgbox").hide();

	//getting images and setting timed changes
	$.ajax({url: "get_pictures.php", success: function(result){
		var imgs = JSON.parse(result);
		var current_imgs = new Array();

		//setting original images
		for (var i = 1; i <= 9; i++) {
			img = unique_random(current_imgs, imgs);
			current_imgs.push(img);
			$("#imgbox :nth-child(" + i +")").attr("src", imgs[img]);
		}

		$("#imgbox").fadeIn();

		//the index of the img to be replaced
		var oldImg = Math.floor((Math.random() * 9) + 1);

		//the index of the new img in the img array
		var newImg;

		//used to prevent repetition of img change
		var lastOld = -1; 

		//changing images
		setInterval(function() {

			//preventing repetition
			while (lastOld == oldImg) {
				oldImg = Math.floor((Math.random() * 9) + 1);
			}

			newImg = unique_random(current_imgs, imgs);
			current_imgs.push(newImg);

			//removing old img from current_imgs
			current_imgs.splice($.inArray($.inArray($("#imgbox :nth-child(" + oldImg
				 +")").attr("src"), imgs), current_imgs), 1);

			lastOld = oldImg;

			//fading out old image and fading in new image
			$("#imgbox :nth-child(" + oldImg +")").fadeOut(1000, function() {
				$("#imgbox :nth-child(" + oldImg +")").attr("src", imgs[newImg]);
			});
			$("#imgbox :nth-child(" + oldImg +")").fadeIn(1000);

		}, 3000);

   }});

});

//returns a random index from the second array that is not
//contained withing the first array.
function unique_random(current_imgs, imgs) {
	var img = Math.floor((Math.random() * imgs.length));
	while ($.inArray(img, current_imgs) >= 0) {
		img = Math.floor((Math.random() * imgs.length));
	}
	return img;
}