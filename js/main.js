document.addEventListener('DOMContentLoaded', function(event){
	document.getElementById("titleOutput").innerHTML = random(document.getElementById("title").innerHTML)
});

const v = ["a", "e", "i", "o", "u"]

function random(s) {
	var r = ""
	for (var i = 0; i < s.length; i++) {
		// Character
		var c = s.charAt(i)
		
		// Lower Case Character
		var l = c.toLowerCase()
		
		// Check whether character is Upper Case
		var u = c == c.toUpperCase()
		
		if (v.indexOf(c) !== -1) {
			
			// emoving the current selected vowel from the vowel array
			n = v.filter(item => item !== l)
			
			// Randomly select the new vowel
			c = n[Math.floor(Math.random() * (4))]
			
			// Fix the case if required
			if (u) {
				c.toUpperCase()
			}
		}
		
		r += c
	}
	
	return r
}

function generate(s) {
	document.getElementById("nameOutput").innerHTML = random(document.getElementById("name").value)
}