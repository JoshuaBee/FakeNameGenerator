// Enter the words to be filtered in the line below:
var swear_words_arr = new Array("bloody","war","terror");

function check_profanity(s) {
	c = 0;
	for(var i = 0; i < swear_words_arr.length; i++) {
		for(var j = 0; j < s.length; j++) {
			if(swear_words_arr[i] == s.substring(j, j + swear_words_arr[i].length).toLowerCase()) {
				c++;
			}
		}
	}
	
	return c > 0;
}