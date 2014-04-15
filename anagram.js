// TODO:
// if given a phrase, strip out white space between each word

$(document).ready(function(){

$('#anagramChecker').on('submit', function(e) {
	e.preventDefault();

	var displayFirstWord = $('#firstWord').val();
	var displaySecondWord = $('#secondWord').val();

	var firstWord = displayFirstWord.replace(/ /g, '').toLowerCase();
	var secondWord = displaySecondWord.replace(/ /g, '').toLowerCase();

	// console.log(firstWord);
	// console.log(secondWord);
	var wordCheck = isAnagram(firstWord, secondWord);
	if ( wordCheck ) {
		$('#result').empty().removeClass().addClass('positive').append("<p>" + displayFirstWord + " and " + displaySecondWord + " are anagrams!</p>");
	}
	else {
		$('#result').empty().removeClass().addClass('negative').append("<p>" + displayFirstWord + " and " + displaySecondWord + " are <strong>not</strong> anagrams!</p>");
	}
});

function isAnagram ( firstWord, secondWord ) {

	var result = true;

	console.log("The words are " + firstWord + " and " + secondWord);

	// convert words to array of letters
	var firstWordArr  = firstWord.split("");
	var secondWordArr = secondWord.split("");

	console.log(firstWordArr);
	console.log(secondWordArr);

	// start checking letter by letter for one word with the other
	// every match, remove the letter from the second word
	// 1) if a letter can't be matched, it's not an anagram
	// 2) if letters run out, it's not an anagram
	for( var i = 0; i < firstWordArr.length; i++ ) {
		// where is the letter of firstWord located in secondWord?
		var index = secondWordArr.indexOf( firstWordArr[i] );
		// if it's there, remove it from secondWord
		if ( index > -1 ) {
			secondWordArr.splice( index, 1 );
		} else {
			result = false;
			break;
		}
	} // end for()

	return result;

}

});

