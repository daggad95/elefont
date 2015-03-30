window.onload　= function() {
	var content = document.getElementById("content");
	var files = 14;
	var imgNum = 10;
	var images = new Array();

	for (i = 1; i <= files; i++) {
		images[images.length] = "pictures/index/" + i + ".jpg";
	}
	console.log(images);

	var div = document.createElement("div");
	div.id = "index-images";
	content.appendChild(div);

	for (i = 0; i < imgNum; i++) {
		var index = Math.round((Math.random()*(images.length-1)));
		var img = document.createElement("img");

		img.className = "index-image";
		img.id = i;
		img.src = images[index];
		div.appendChild(img);
		$("#"+i).hide();
		images.splice(index, 1);
	}
	for (i = 0; i < imgNum; i++) {
		$("#"+i).fadeIn();
	}

	var lastChange = 0;
	setInterval(function(){ 
		var imgnum = Math.round((Math.random()*imgNum));
		while (imgnum == lastChange) {
			imgnum = Math.round((Math.random()*imgNum));
		}
		lastChange = imgnum;

		var index = Math.round((Math.random()*(images.length-1)));
		var img = document.getElementById(imgnum);
		var source = img.src;

		$("#"+imgnum).fadeOut(1000);

		setTimeout(function() {
			img.src = images[index];
			images.splice(index, 1);
			images[images.length] = source;
		}, 1000);


		$("#"+imgnum).fadeIn(1000);
	}, 4000);
}

