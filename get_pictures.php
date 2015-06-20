<?php
	$pictures = array();

	foreach (glob("pictures/index/*") as $picture) {
		array_push($pictures, $picture);
	}
	print json_encode($pictures);
?>