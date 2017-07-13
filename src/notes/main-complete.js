var randomNames = [
	'The Plot in You', 
	'The Devil Wears Prada', 
	'Billie Jean', 
	'The Bled', 
	'The Midway State', 
	'We Came as Romans',  
	'Oh, Sleeper', 
	'A Skylit Drive', 
	'Anywhere But Here', 
	'An Old Dog'
];

function strip(bandName) {
	return bandName.replace(/^(a |the |an )/i, '').trim();
}

let addNewEntry = () => {
	const addInputField = document.getElementById('new-entry').value;
	console.log(addInputField);
	randomNames.push(addInputField);
	clearTableField();
	generateTableField();
}

const sortedNames = randomNames.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

let clearTableField = () => {
	document.querySelector('#bands').innerHTML = "";
}

let generateTableField = () => {
	document.querySelector('#bands').innerHTML =
	sortedNames
		.map(band => `<li>${band}</li>`)
		.join('');
}

const actionAdd = document.querySelector('#add-button');
actionAdd.addEventListener('click', () => {
	addNewEntry();
});

generateTableField();

console.log(sortedNames);


