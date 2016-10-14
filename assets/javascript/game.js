function random() {

	var selection = Math.floor((Math.random(selection) * 1));

	return selection;

}


function dash(word , selection) {

	var dash = [];

	for (var i = word[selection].length - 1; i >= 0; i--) {
			dash.push("_");	
		}


	return dash;

}


function split(word , selection) {

	var splitword = [];

	splitword = word[selection].split("");


	return splitword;

}


function correct_letter(word , guess) {

	var correct_letter = [];

	for (var i = word.length - 1; i >= 0; i--) {
			
		if (word[i] == guess) {

			correct_letter.push(i);

		}

	}	

	return correct_letter;

}


function replace_dash(dash , right_i , guess) {


	for (var i = right_i.length - 1; i >= 0; i--) {
		
		dash[right_i[i]] = guess;

	}

	return dash;

}