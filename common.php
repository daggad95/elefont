<?php 
	function renderHeader($title) {
		error_reporting(E_ALL);
		ini_set('display_errors', 1);

		echo "
		<html>
			<head>
				<meta charset='utf-8'>
			  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
			  <meta name='viewport' content='width=device-width, initial-scale=1'>

			  <link href='stylesheet.css' rel='stylesheet'>
			  <link href='http://fonts.googleapis.com/css?family=Euphoria+Script' rel='stylesheet' type='text/css'>
			  <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'></script>
			</head>
			<body>	
				<div id='navbar'>
					<a href='index.php' class='navlink'>Home</a>
					<a href='cakes.php' class='navlink'>Cakes</a>
					<a href='about.php' class='navlink'>About</a>
					<a href='contact.php' class='navlink'>Contact</a>
					<a href='blog.php' class='navlink'>Blog</a>
					<a href='portfolio.php' class='navlink'>Portfolio</a>
				</div>

				<div class='pink-overlay'>
					<div id='stylebar'>
						<div id='logo'>
							<img src='pictures/logo.png'>
						</div>
						<div id='title'>
							<p class='vertical-align'>$title</p>
						</div>
					</div>
				</div>

				<div id='content'>
		";
	}

	function renderFooter() {
		echo "
				</div>
				<div id='footer'></div>
			</body>
		</html>
		";
	}
?>