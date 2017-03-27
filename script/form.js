var form = document.getElementById('addplayerform');
var roster = document.getElementById('roster');
var nam = document.getElementById('name');
var num = document.getElementById('num');
var err = document.getElementById('err');
var nameVal = nam.value;
var numVal = num.value;

var playerArr = [];

function formSubmit(e) {
	// Debugging
	console.log('submit event', e);
	console.log(nam.length);
	console.log(playerText);

	// Event Handling
	e.stopPropagation();
	e.preventDefault();

	// Object
	var playerName = nam.value;
	var playerNum = num.value;
	var thisPlayer = {name: playerName, num: playerNum};

	var player = document.createElement("LI");
	var playerText = document.createTextNode(nam.value + ' ' + '#' + num.value);

	player.appendChild(playerText);
	roster.appendChild(player);

	if (player.value === '') {
		err.innerHTML = "Please enter a player name!";
	}
};
form.addEventListener('submit', formSubmit);