document.addEventListener('DOMContentLoaded', function(event){
	// Load the profanity list
	/*var request = new XMLHttpRequest();
	request.open("GET", "data/profanity_list.json", false);
	request.send(null)
	request.onreadystatechange = function() {
		if ( request.readyState === 4 && request.status === 200 ) {
			var profanity = JSON.parse(request.responseText);
			console.log(profanity[0]);
		}
	}*/
	var request = new XMLHttpRequest();
    request.addEventListener("load", function() {
        profanity = JSON.parse(request.response);
		console.log(profanity[0]);
    }, false);
    request.open("GET", "data/profanity_list.json", false);
    request.send();
   
	// Apply generator to the title
	document.getElementById("titleOutput").innerHTML = generator(document.getElementById("title").innerHTML);
	
	// Automatically fill the name textbox, and generate the fake
	var name = "Joshua Whiting"
	document.getElementById("name").value = name;
	generateFromTextBox();
});

// Vowel lists
const input_vowels = ["a", "e", "i", "o", "u", "y"];
const output_vowels = ["a", "e", "i", "o", "u"];

function generator(s) {
	var r = ""
	for (var i = 0; i < s.length; i++) {
		// Character
		var c = s.charAt(i);
		
		// Check whether character is Upper Case
		var u = c == c.toUpperCase();
		
		// Lower Case Character
		var l = c.toLowerCase();
		
		if (input_vowels.indexOf(l) !== -1) {
			
			// Removing the current selected vowel from the vowel array
			n = output_vowels.filter(item => item !== l);
			
			// Randomly select the new vowel
			c = n[random()];
			
			// Fix the case if required
			if (u) {
				c = c.toUpperCase();
			}
		}
		
		r += c;
	}
	
	console.log(r)
	
	// Check for profanity
	if (check_profanity(r)) {
		r = generator(s);
	}
	
	return r;
}

function random() {
	return Math.floor(Math.random() * (output_vowels.length - 1));
}

function generateFromTextBox() {
	document.getElementById("nameOutput").innerHTML = generator(document.getElementById("name").value);
}

function check_profanity(s) {
	c = 0;
	for(var i = 0; i < profanity.length; i++) {
		for(var j = 0; j < s.length; j++) {
			if(profanity[i] == s.substring(j, j + profanity[i].length).toLowerCase()) {
				c++;
			}
		}
	}
	
	return c > 0;
}