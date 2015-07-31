var a = 1, b = 2, c = 3;

(function firstFunction() { //start firstFunction
	var b = 5, c = 6;

	(function secondFunction() { //start secondFunction
		var b = 8;
		console.log('a: '+a+', b: '+b+', c: ' + c);

		(function thirdFunction() { //start thirdFunction
			var a =7, c = 9;

			(function fourthFunction() {
				var a = 1, c =8;
			}) (); //end fourthFunction

		}) (); //end thirdFunction

	}) (); //end secondFunction

}) (); //end firstFunction