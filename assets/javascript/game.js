
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var word_choice = ["hi" , "hey" , "hello" , "bye" , "goodbye","surfer","stress","happy","shake", "i am not happy", "only you can prevent forest fire", "what is love", "dancing in the dark","i am just a small time girl", "dance monkey","i am nothing but a dream"];
var won_counter = 0;
 //Will return a random number
var leng = word_choice.length;
console.log(leng);
function random_number() {

	var selection = Math.floor((Math.random(selection) * 16));

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


	for (var i = right_i.length - 1; i >= 0; i--) {
		
		dash[right_i[i]] = guess;

	}

	return dash;

}

function lost(split_word){
	

	var lost = "<p>You lose son</p>"+ "<p>The Word was: </p> "+ split_word + "<br>"+ "<br>" +"<img src='assets/images/skull.png'>";

	document.querySelector("#loss").innerHTML = lost;

	$("#play_again").html("<p>Woud you like to play again</p>" + "<p>y or n</p>");

	document.onkeyup = function(e) {

	var user_input = String.fromCharCode(e.keyCode).toLowerCase();

	if (user_input == "y" || user_input == "n") {

		if (user_input == "y") { 

			main_game();

		}

	}

}	

}

function win(won_counter){


	

	$("#play_again").html("<p>Woud you like to play again</p>" + "<p>y or n</p>");
	var won = "<p>You Won!!!!</p><br>" + won_counter;
	document.querySelector("#wins").innerHTML = won;
	$("#play_again").html("<p>Woud you like to play again</p>" + "<p>y or n</p>");

	document.onkeyup = function(e) {

		var user_input = String.fromCharCode(e.keyCode).toLowerCase();

		if (user_input == "y" || user_input == "n") {

			if (user_input == "y") { 

				main_game();
	
			}

		}

	}	
}



function main_game() {

	$("#play_again").html("");
	$("#wrongs").html("");
	$("#loss").html("");

	var word = select_word(word_choice);
	var dashs = dash(word);
	var split_word = split(word);
	var fails = 0;
	var wrongarray = [];
	var guess_Left = 5;
	alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


	var gameboard = "<p>Play Time</p>" + "<p>Game Board</p>" + dashs.join(" ");

	document.querySelector('#game').innerHTML = gameboard;




	document.onkeyup = function(event) {

		var user_guess = String.fromCharCode(event.keyCode).toLowerCase();

		if (alphabet.indexOf(user_guess) >= 0) {

	 		//console.log(user_guess);

	 		var correct_guess = correct_letter(split_word , user_guess);

	 		dashs = replace_dash(dashs , correct_guess , user_guess);

	 		if (word.indexOf(user_guess) == -1) {

	 			var index = alphabet.indexOf(user_guess);
	 			alphabet.splice(index,1);
	 			wrongarray.push(user_guess);

	 			guess_Left--;
	 			
	 			$("#wrongs").append("Guesses left: " + guess_Left);

	 			fails++;

	 			if(fails == 5){

	 				

	 				lost(word);
							/*word = select_word(word_choice);
							dashs = dash(word);
							split_word = split(word);
							fails = 0;
							wrongarray = [];
							alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
*/
	 			}

	 			var wrongs = "<p> Wrong Letters</p>" + wrongarray.join(" ") + "<p>Guesses left: </p>" + guess_Left;

	 			document.querySelector('#wrongs').innerHTML = wrongs;

	 		} 

	 		gameboard = "<p>Play Time</p>" + "<p>Game Board</p>" + dashs.join(" ");

	 		document.querySelector('#game').innerHTML = gameboard;

	 		if(dashs.indexOf("_") == -1 ){



							/*word = select_word(word_choice);
							dashs = dash(word);
							split_word = split(word);
							fails = 0;
							wrongarray = [];
							alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];*/
							won_counter++;
							win(won_counter);
						
	
	 			}

			}
		
		}

	}	
