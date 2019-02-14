var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

//Createboard function

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('id', i);
		cardElement.setAttribute('class', 'the-card')
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

/*
RESET GAME FUNCTION
Iterates through the
cards and resets the img src back to the
original image.

Also clears the cardsInPlay array otherwise it breaks
the checkForMatch() function as the array keeps adding.
*/

var resetGame = function() {

	for (var i = 0; i < cards.length; i++) {
		var resetCards = document.getElementsByTagName('img')[i];
		resetCards.setAttribute('src', 'images/back.png');
		cardsInPlay = []; //Empties the array
		}
	};

document.getElementById('reset').addEventListener('click', resetGame);


/*
FLIPCARD FUNCTION
Made this make a random selection from the object array
*/

var flipCard = function() {
var cardId = this.getAttribute('id');
this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};

var score = 0; // Set a score variable

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] ===  cardsInPlay[1]) {
			alert("You found a match");
			score += 1;
			document.getElementById('score').innerHTML = "Score: " + score;
		} else {
			alert("Sorry, try again");
			score = score - 1;
			document.getElementById('score').innerHTML = "Score: " + score;
		};
	};
};

createBoard();
