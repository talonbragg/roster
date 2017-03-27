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
	console.log(mainDebug);

	// Event Handling
	e.stopPropagation();
	e.preventDefault();

	// Object
	var playerName = nam.value;
	var playerNum = num.value;
	var thisPlayer = {name: playerName, num: playerNum};

	var player = document.createElement("LI");
	var playerText = document.createTextNode(nam.value + ' ' + '#' + num.value);

	// Array addition
	var mainDebug = playerArr.push(thisPlayer);

	player.appendChild(playerText);
	roster.appendChild(player);

	if (playerName.length < 1) {
		err.innerHTML = "Please enter a player name!";
	}

	// Debugging
	console.log(nam.length);
	console.log(playerText);
	console.log(mainDebug);
	console.log(playerArr);
};
form.addEventListener('submit', formSubmit);
