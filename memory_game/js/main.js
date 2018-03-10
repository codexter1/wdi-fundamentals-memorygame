
//arrays for storing cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 1) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
} 

//function for printing player actions
var flipCard = function(cardId) {
	checkForMatch();
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}
flipCard(0);
flipCard(2);

 

