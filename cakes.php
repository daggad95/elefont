<?php include "header.php"; ?>
	<div class="content wide">
		<div class="column">
			<h1 class="cakepage">Cakes</h1>
			<?php 
				foreach (file("cakes.txt") as $cake) {
					list($name, $description) = explode(":", $cake);
			?>
					<p class="cakepage"><strong><?="$name - "?></strong><?=$description?></p>
			<?php
				}
			?>
		</div>
		<div class="column">
			<h1 class="cakepage">Frostings</h1>
					<?php 
				foreach (file("frostings.txt") as $frosting) {
					list($name, $description) = explode(":", $frosting);
			?>
					<p class="cakepage"><strong><?="$name - "?></strong><?=$description?></p>
			<?php
				}
			?>
		</div>
	</div>
<?php include "footer.php"; ?>