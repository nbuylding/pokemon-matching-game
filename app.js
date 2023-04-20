'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const gameBoard = document.querySelector('.game-container');
	const results = document.querySelector('#results');

	const cardArray = [
		{
			name: 'eevee',
			img: 'images/eevee.png',
		},
		{
			name: 'eevee',
			img: 'images/eevee.png',
		},
		{
			name: 'pikachu',
			img: 'images/pikachu.png',
		},
		{
			name: 'pikachu',
			img: 'images/pikachu.png',
		},
		{
			name: 'dratini',
			img: 'images/dratini.png',
		},
		{
			name: 'dratini',
			img: 'images/dratini.png',
		},
		{
			name: 'squirtle',
			img: 'images/squirtle.png',
		},
		{
			name: 'squirtle',
			img: 'images/squirtle.png',
		},
		{
			name: 'charmander',
			img: 'images/charmander.png',
		},
		{
			name: 'charmander',
			img: 'images/charmander.png',
		},
		{
			name: 'bullbasaur',
			img: 'images/bullbasaur.png',
		},
		{
			name: 'bullbasaur',
			img: 'images/bullbasaur.png',
		},
	];

	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];

	// shuffle
	const shuffle = function () {
		cardArray.sort(() => 0.5 - Math.random());
	};
	shuffle();

	// create game board
	const createBoard = function () {
		for (let i = 0; i < cardArray.length; i++) {
			const card = document.createElement('img');
			card.setAttribute('src', 'images/glass-of-water.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			gameBoard.appendChild(card);
		}
	};
	// check for matches
	const checkForMatch = function () {
		const cards = document.querySelectorAll('img');
		const cardOptionOne = cardsChosenId[0];
		const cardOptionTwo = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]) {
			cards[cardOptionOne].setAttribute('src', 'images/pokeball.png');
			cards[cardOptionTwo].setAttribute('src', 'images/pokeball.png');
			alert(`You found a match!`);
			cardsWon.push(cardsChosen);
		} else {
			cards[cardOptionOne].setAttribute(
				'src',
				'images/glass-of-water.png'
			);
			cards[cardOptionTwo].setAttribute(
				'src',
				'images/glass-of-water.png'
			);
			alert(`Not a match, try again!`);
		}
		cardsChosen = [];
		cardsChosenId = [];
		results.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2)
			results.textContent = `Congratulations, You Won!`;
	};

	// flip cards
	const flipCard = function () {
		const cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	};
	createBoard();

	// new game event handler
	document.querySelector('.new-game').addEventListener('click', function () {
		gameBoard.innerHTML = '';
		results.innerHTML = '';
		cardsWon = [];
		shuffle();
		createBoard();
	});
});
