var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

cardOne = cards[0];
cardTwo = cards[2];

cardsInPlay.push(cardOne, cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] ===  cardsInPlay[1]){
		alert("You found a match");
	} else {
		alert("Try again");
	}
}