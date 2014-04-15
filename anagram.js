// TODO:
// if given a phrase, strip out white space between each word
// # of characters in each word/phrase must be equivalent
// example: apple and applepie are not anagrams

$(document).ready(function(){

$('#anagramChecker').on('submit', function(e) {
	e.preventDefault();

	// set vars
	var $result		= $('#result'),
		$firstWord  = $('#firstWord'),
		$secondWord = $('#secondWord'),
		flag        = false;

	var displayFirstWord = $firstWord.val();
	var displaySecondWord = $secondWord.val();

	// check if value provided
	if ( !displayFirstWord || !displaySecondWord ) {
		flag = true;
	}

	var firstWord = displayFirstWord.replace(/ /g, '').toLowerCase();
	var secondWord = displaySecondWord.replace(/ /g, '').toLowerCase();

	// if form completed, continue
	if ( !flag ) {
		
		var wordCheck = isAnagram(firstWord, secondWord);
		
		if ( wordCheck ) {
			$result.empty().removeClass().addClass('positive').append("<p>" + displayFirstWord + " and " + displaySecondWord + " are anagrams!</p>");
		} else {
			$result.empty().removeClass().addClass('negative').append("<p>" + displayFirstWord + " and " + displaySecondWord + " are <strong>not</strong> anagrams!</p>");
		}
	} else {
		$result.empty().removeClass();
		$result.append("<p>Please enter some words/phrases.</p>");
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
		} else { // if it's not there, this is not an anagram
			result = false;
			break;
		}
	} // end for()
	
	// if the second word still contains letters, this is not an anagram
	// example: apple and applepie are not anagrams
	if ( result === true && secondWordArr.length > 0) {
		result = false;
	}

	return result;

}

});

