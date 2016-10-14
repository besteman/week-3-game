
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
		var word = ["hello"];

		//var guess = "e";

		var trafficlight = "g";


var word_choice = ["hey hey hey hey"]

// Will return a random number
function random_number() {

	var selection = Math.floor((Math.random(selection) * 1));

	return selection;

}
// Picks a random random word for a preset array of words
function select_word(word_choice) {


	var number = random_number();

	var select_word = word_choice[number];

	return select_word;

}

// Makes an array of dashes for random word being guessed
// It is dynamic 
function dash(word) {

	var dash = [];

	for (var i = word.length - 1; i >= 0; i--) {

		if (word[i] == " ") {
			dash.push("&nbsp;");
		} else {
			dash.push("_");	
		}

	}

	return dash;

}

// Takes the random word and turns into another array
// This array is the word split into its chars
function split(word) {

	var splitword = [];

	splitword = word.split("");


	return splitword;

}

// Finds the index of the correctly guess letters
function correct_letter(word , guess) {

	var correct_letter = [];

	for (var i = word.length - 1; i >= 0; i--) {
			
		if (word[i] == guess) {

			correct_letter.push(i);

		} 

	}	

	return correct_letter;

}


// Replaces the dashes with correct words
function replace_dash(dash , right_i , guess) {


	for (var i = right_i.length - 1; i >= 0; i--) {
		
		dash[right_i[i]] = guess;

	}

	return dash;

}