
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 

var word_choice = ["courtney"]

// Will return a random number
function random_number() {

	var selection = Math.floor((Math.random(selection) * 1));

	return selection;

}
// Picks a random word for a preset array of words
function select_word(word_choice) {


	var number = random_number();

	var select_word = word_choice[number];

	return select_word;

}


// Makes an array of dashes for random word being guessed
// It is dynamic 
function dash(word) {

	var dash = [];

	for (var i = 0; i < word.length; i++) {

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


// Replaces the dashes with correct letters
function replace_dash(dash , right_i , guess) {

	for(var i = 0 ; i > right_i.length; i++)

	for (var i = right_i.length - 1; i >= 0; i--) {
		
		dash[right_i[i]] = guess;

	}

	return dash;

}

function lost(){

	var lost = "<p>You lose son</p>";

	document.querySelector("#loss").innerHTML = lost;

	play_again();
}


function play_again() {

	var play_again = "<p>Would you like to play again?</>" + "<p>If No type n</p>" + "<p>If Yes type y";

	document.querySelector("#play_again").innerHTML = play_again;

	var user_input = String.fromCharCode(event.keyCode).toLowerCase();

	if (user_input == "y" || user_input == "n") {

		if (user_input == "y") {

			reset();

		} else {

		}

	}
 
}

function reset(){

	var word = "";
	var dashs = "";
	var split_word = "";
	var fails = 0;


}

function main_game() {

	var word = select_word(word_choice);
	var dashs = dash(word);
	var split_word = split(word);
	var fails = 0;
	var wrongarray = [];

	var gameboard = "<p>Play Time</p>" + "<p>Game Board</p>" + dashs.join(" ");

	document.querySelector('#game').innerHTML = gameboard;




	document.onkeyup = function(event) {

		if(fails != 5){


		var user_guess = String.fromCharCode(event.keyCode).toLowerCase();

		if (alphabet.indexOf(user_guess) >= 0) {

	 		//console.log(user_guess);

	 		var correct_guess = correct_letter(split_word , user_guess);

	 		dashs = replace_dash(dashs , correct_guess , user_guess);

	 		if (word.indexOf(user_guess) == -1) {

	 			var index = alphabet.indexOf(user_guess);
	 			alphabet.splice(index,1);
	 			wrongarray.push(user_guess);
	 			

	 			fails++;

	 			if(fails == 2){

	 				lost();

	 			}

	 			var wrongs = "<p> Wrong Letters</p>" + wrongarray.join(" ");

	 			document.querySelector('#wrongs').innerHTML = wrongs;

	 		} 

	 		gameboard = "<p>Play Time</p>" + "<p>Game Board</p>" + dashs.join(" ");

	 		document.querySelector('#game').innerHTML = gameboard;

	 	}

	 }

	}

}

