<?php 
	$name = htmlentities($_GET["name"]) . "~";
	$comment = htmlentities($_GET["comment"]) . "~";
	$rating = htmlentities($_GET["rating"]) . "~\n"; 

	$file = fopen("comments.txt", "a");
	fwrite($file, $name);
	fwrite($file, $comment);
	fwrite($file, $rating);

	header("Location: about.php");
?>