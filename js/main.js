// Vowel lists
const input_vowels = ["a", "e", "i", "o", "u", "y"];
const output_vowels = ["a", "e", "i", "o", "u"];

var names = [
	"Rami Malek",
	"Olivia Colman",
	"Gary Oldman",
	"Frances McDormand",
	"Casey Affleck",
	"Emma Stone",
	"Leonardo DiCaprio",
	"Brie Larson",
	"Eddie Redmayne",
	"Julianne Moore"
];

document.addEventListener('DOMContentLoaded', function(event){
	// Apply generator to the title
	document.getElementById("titleOutput").innerHTML = generator(document.getElementById("title").innerHTML);
	
	// Automatically fill the name textbox, and generate the fake
	var name = random(names);
	document.getElementById("name").value = name;
	document.getElementById("name").focus();
		
	generateFromTextBox();
});

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
			c = random(n);
			
			// Fix the case if required
			if (u) {
				c = c.toUpperCase();
			}
		}
		
		r += c;
	}
	
	return r;
}

function random(n) {
	return n[Math.floor(Math.random() * (n))];
}

function generateFromTextBox() {
	document.getElementById("nameOutput").innerHTML = generator(document.getElementById("name").value);
}