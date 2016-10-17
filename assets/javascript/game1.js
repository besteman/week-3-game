var hangman {

	random: 0,
	word_bank: ["hello"],
	dash: [],
	split: [],
	correct_letter: [],
	replace_dash: [],

	random_num: function(){

		this.random = Math.floor((Math.random(selection) * 1));
		return this.random;
	}


}

