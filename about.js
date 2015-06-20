$(function(){

	$("#addcomment").click(function(link) {
		link.preventDefault();
		$("#addcomment").hide();
		$("form").fadeIn();
	});

});