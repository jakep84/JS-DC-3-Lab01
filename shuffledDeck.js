
// Create a deck
var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']


function createDeck( suits , ranks) {
	var finalDeck =[]
	var finalDeck = [];

	for (var i = 0; i < suits.length; i++){
		for (var j = 0; j < ranks.length; j++){
			finalDeck.push(ranks[j] + " of " +suits[i]);
		}
	}
	return finalDeck
}

var dealerDeck = createDeck(suits, ranks);

//shuffle the deck
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

shuffleArray(dealerDeck)
console.log(dealerDeck)


var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();
  var playerOne = '';
  var playerTwo = '';
  //
  // Get two properties from the user: username and email
  //
  prompt.get(['Player 1', 'Player 2'], function (err, result) {

    var playerOne = result['Player 1'];
    var playerTwo = result['Player 2'];

    console.log(playerOne + ' is now Player One')
    console.log(playerTwo + ' is now Player Two')
  });


