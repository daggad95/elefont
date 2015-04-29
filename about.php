<?php include "header.php"; ?>
	<script src="about.js"></script>
	<div class="content">
		<h1>About Me</h1>
		<p class="indent">
			Elefont creations are uniquely beautiful and delicious. No more sacrificing taste for a pretty dessert — or vice versa. I offer one-of-a-kind cakes and standout cupcakes. Unlike many bakeries, I decorate cakes primarily with frosting. Unless otherwise requested, I try to avoid the use of materials like fondant, which don’t taste nearly as good as they look. Homemade modeling chocolate, on the other hand, is fair game! No matter your choice, you can rest assured that your cake will be moist, delicious, and a showstopper.
		</p>
		<p class="indent">
			My parents always made our cakes from scratch. Several of the recipes I use are their originals — some of which were passed down to them by my grandma, who was an amazing baker as well. I have many recipes of my own creation, and a borderline addiction to cake decorating that goes well beyond what my parents or grandparents had. But it’s still their well-worn, dog-eared recipe cards and cookbook pages that I turn to for inspiration when the need arises. It is this combination of time-tested favorites and modern concepts that makes Elefont cakes the unique creations  they are. 
		</p>
		<h1>Comments from Clients</h1>
		<?php
			foreach (file("comments.txt") as $line) {
				list($name, $comment, $rating) = explode("~", $line);
		?>
			<div class="comment">
				<p>"<?=$comment?>" - <b><?=$name?></b></p>
				<p>Rating: <?=$rating?></p>
			</div>
		<?php
			}
		?> 

		<a href="" id="addcomment" class="centered">Add Comment</a>
		<form action="comment_submit.php" hidden="true">
			Name:<br />
			<input type="text" name="name" required/><br />
			Comment: <br />
			<textarea name="comment" required></textarea><br />
			Rating: 
			<select name="rating">
				<option value="5">5</option>
				<option value="4">4</option>
				<option value="3">3</option>
				<option value="2">2</option>
				<option value="1">1</option>
			</select><br />
			<input type="submit" value="Leave Comment!"/>
		</form>
	</div>
<?php include "footer.php"; ?>