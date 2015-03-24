<?php 
	include "common.php"; 

	function renderCakes() {
		$cakefile = fopen("cakes.txt", "r") or die("Cakes not found!");
		echo "<div class='cake'>";
		echo "<h1>Cakes</h1>";
		while (!feof($cakefile)) {
			$cake = fgets($cakefile);
			$cakeDesc = fgets($cakefile);

			echo "<p><b>" . $cake . "- </b>" . $cakeDesc . "</p>";
		}
		echo "</div>";
		fclose($cakefile);
	}

	function renderFrostings() {
		$frostingfile = fopen("frostings.txt", "r") or die("Frostings not found!");
		echo "<div class='frosting'>";
		echo "<h1>Frostings</h1>";
		while (!feof($frostingfile)) {
			$frosting = fgets($frostingfile );
			$frostingDesc = fgets($frostingfile );

			echo "<p><b>" . $frosting . "- </b>" . $frostingDesc . "</p>";
		}
		echo "</div>";
		fclose($frostingfile);
	}
?>

<?php renderHeader("Cakes"); ?>
<?php renderCakes(); ?>
<?php renderFrostings(); ?>
<?php renderFooter(); ?>