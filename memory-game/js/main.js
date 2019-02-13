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
Reset game function. Iterates through the
cards and resets the img src back to the
original image.

Also clears the cardsInPlay array otherwise it breaks
the checkForMatch() function as the array keeps adding.
*/

var resetGame = function() {
	
	for (var i = 0; i < cards.length; i++) {
		var resetCards = document.getElementsByTagName('img')[i];
		resetCards.setAttribute('src', 'images/back.png');
		cardsInPlay = [];
		}
	};

document.getElementById('reset').addEventListener('click', resetGame);


//Flipcard function


var flipCard = function() {
	var cardId = this.getAttribute('id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	console.log(cardId);
	checkForMatch();
};
//Bonus tasks
//Add in a reset button
//Keep track of the users score

var score = 0;

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