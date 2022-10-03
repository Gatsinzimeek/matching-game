document.addEventListener('DOMContentLoaded', () =>{

	//card options
	const cardArray = [
	{
		name: 'first',
		img: '1.jpg'
	},
	{
		name: 'first',
		img: '1.jpg'
	},
	{
		name: 'second',
		img: '2.jpg'
	},
	{
		name: 'second',
		img: '2.jpg'
	},
	{
		name: 'third',
		img: '3.jpg'
	},
	{
		name: 'third',
		img: '3.jpg'
	},
	{
		name: 'four',
		img: '4.jpg'
	},
	{
		name: 'four',
		img: '4.jpg'
	},
	{
		name: 'five',
		img: '5.jpg'
	},
	{
		name: 'five',
		img: '5.jpg'
	},
	{
		name: 'six',
		img: '6.jpg'
	},
	{
		name: 'six',
		img: '6.jpg'
	}
	];
	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	var cardschoosen = [];
	var cardschoosenid = [];
	var cardswon = [];
	function Createboard() {
		for(let i = 0; i < cardArray.length; i++){
			var card = document.createElement('img');
			card.setAttribute('src', 'board.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipcard);
			grid.appendChild(card);
		}
	}

	function checkformatch(){
		var cards = document.querySelectorAll('img');
		const optionOneId = cardschoosenid[0];
		const optionTwoId = cardschoosenid[1];
		if (cardschoosen[0] === cardschoosen[1]) {
			alert('you found a match');
			cards[optionOneId].setAttribute('src', 'white.jpg');
			cards[optionTwoId].setAttribute('src', 'white.jpg');
			cardswon.push(cardschoosen)

		}else{

			cards[optionOneId].setAttribute('src', 'board.jpg');
			cards[optionTwoId].setAttribute('src', 'board.jpg');
			alert('hey sorry try again');	
			}
			cardschoosen = [];
			cardschoosenid = [];
			resultDisplay.textContent = cardswon.length;
			if (cardswon.length === cardArray.length/2) {
				resultDisplay.textContent = 'congratulations! you found them all!';
			}
		}

	function flipcard(){
		var cardid = this.getAttribute('data-id');
		cardschoosenid.push(cardid);
		cardschoosen.push(cardArray[cardid].name);
		this.setAttribute('src', cardArray[cardid].img);
		if (cardschoosen.length === 2) {
			setTimeout(checkformatch, 500);
		}
	}

	Createboard();
})