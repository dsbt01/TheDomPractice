

var counter = 3;
let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem = document.createElement('li');
	counter += 1;

	elem.innerHTML = `${numberToWords.toWordsOrdinal(counter)} element`;

	let listToAdd = document.getElementById('myList');
	listToAdd.appendChild(elem);
});
