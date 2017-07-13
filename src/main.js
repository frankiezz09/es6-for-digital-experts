/**
 * 
 * Welcome to the ES6 App Workshop! Our goal is to learn ES6 the practical, hands-on way!
 * The goal of the app is to:
 * 
 * 1.) Sort artistNames alphabetically or reverse-alphabetically, the ES6 way
 * 2.) Revisit Javascript core object 'document' to manipulate components without the use
 * 		of any libraries.
 * 3.) Try out arrow notation function
 * 4.) Try out const/let and their difference
 * 5.) Try out map and other array manipulation techniques with ES6
 * 6.) Try out ES6 literal strings
 * 
 * NOTE: This is a very basic ES6 app made for beginners. Old-timers are also welcome to
 * 		 sit-in for a refresher. 
 * 
 * Enjoy the workshop!
 * 
 * P.S. - We'll do an exercise later.
 * 
 * - Frank
 * 
 */

var artistNames = [
	'Paramore', 
	'The Beatles', 
	'Jackson Five', 
	'Earth, Wind, and Fire', 
	'Fall Out Boy', 
	'Willie Revillame',  
	'Scorpion', 
	'Tokio Hotel',
	'Marilyn Manson'
];

const sortedNames = artistNames.sort((a, b) => a > b);

function generateTable() {
	console.log('generate table!');
	document.querySelector('#names').innerHTML = 
		sortedNames.map(function(name, index) {
			return '<li data-id="'+ index + '">' + name + '</li>';	
		}).join('');
}

/**
 * We code right below :) 
 */

generateTable();