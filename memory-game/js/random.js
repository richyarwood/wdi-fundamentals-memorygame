// Added this as a separate file to keep the original separate

var cards = [{
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


// Randomise the cards

function randomise(a, b) {
    return Math.random() - 0.5;
}
cards.sort(randomise);

var flipCard = function() {
    var cardId = this.getAttribute('id');
    cardsInPlay.push(cards[cardId].rank);
    var cardRotate = document.getElementById('inner-' + cardId).style.transform = "rotateY(180deg)";
    console.log(cardsInPlay);
    checkForMatch();
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
    cards.sort(randomise);
    for (var i = 0; i < cards.length; i++) {
        var resetCardBack = document.getElementById(i);
        resetCardBack.setAttribute('src', 'images/back.png');
        var resetCardFront = document.getElementById('front-' + i);
        resetCardFront.setAttribute('src', cards[i].cardImage);
        var cardResetIds = document.getElementById('inner-' + i);
        cardResetIds.style = "transformY(180deg)";
        console.log(cardResetIds);
    }
    console.log(cards);
    cardsInPlay = []; //Empties the array
};

document.getElementById('reset').addEventListener('click', resetGame);


var score = 0; // Set a score variable

var checkForMatch = function() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
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

//Creating a random board which can flip


var createRandomBoard = function() {
    for (var i = 0; i < cards.length; i++) {

        var cardOuter = document.createElement('div');
        cardOuter.setAttribute('class', 'card-outer');
        cardOuter.setAttribute('id', 'outer-' + i);
        document.getElementById('game-board').appendChild(cardOuter);

        var cardInner = document.createElement('div');
        cardInner.setAttribute('class', 'card-inner');
        cardInner.setAttribute('id', 'inner-' + i);
        document.getElementById('outer-' + i).appendChild(cardInner);

        var cardBackWrapper = document.createElement('div');
        cardBackWrapper.setAttribute('class', 'card-back-wrapper');
        cardBackWrapper.setAttribute('id', 'card-back-wrapper-' + i);
        document.getElementById('inner-' + i).appendChild(cardBackWrapper);

        var cardBack = document.createElement('img');
        cardBack.setAttribute('src', 'images/back.png');
        cardBack.setAttribute('id', i);
        document.getElementById('card-back-wrapper-' + i).appendChild(cardBack);

        var cardFrontWrapper = document.createElement('div');
        cardFrontWrapper.setAttribute('class', 'card-front-wrapper');
        cardFrontWrapper.setAttribute('id', 'card-front-wrapper-' + i);
        document.getElementById('inner-' + i).appendChild(cardFrontWrapper);

        var cardFront = document.createElement('img');
        cardFront.setAttribute('id', 'front-' + i);
        cardFront.setAttribute('src', cards[i].cardImage);
        document.getElementById('card-front-wrapper-' + i).appendChild(cardFront);

        cardBack.addEventListener('click', flipCard);
    }
};

createRandomBoard();