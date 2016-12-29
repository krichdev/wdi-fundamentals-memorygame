
// creates array of cards
var cards = ['queen', 'queen', 'king', 'king'];

// this will be an array of the cards that are selected
var cardsInPlay = [];

// finds the board, and sets as variable
var gameBoard = document.getElementById('game-board');

function createBoard(){
  	for(var i = 0; i < cards.length; i++){
   	 var newCard = document.createElement('div');
   	 newCard.className = 'card';
     gameBoard.appendChild(newCard).setAttribute('data-card', cards[i]);
     newCard.addEventListener('click', isTwoCards);
 	}
}

function isMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		document.getElementById('message').innerHTML = "<h3>Cards Match</h3>";
	} else {
		document.getElementById('message').innerHTML = "<h3>Cards Don't Match</h3>";
	}
}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='hearts-884196_640.png'>";
	} else {
		this.innerHTML = "<img src='hearts-884201_640.png'>";
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


createBoard();