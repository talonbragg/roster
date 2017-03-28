var form = document.getElementById('addplayerform');
var roster = document.getElementById('roster');
var nam = document.getElementById('name');
var num = document.getElementById('num');
var err = document.getElementById('err');
var err2 = document.getElementById('err2');
var nameVal = nam.value;
var numVal = num.value;

var playerArr = [];

function formSubmit(e) {
    if (playerName.length > 0 && playerNum.length > 0) {
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
        var thisPlayer = {
            name: playerName,
            num: playerNum
        };

        var player = document.createElement("LI");
        var playerText = document.createTextNode(nam.value + ' ' + '#' + num.value);

        // Array additio
        var mainDebug = playerArr.push(thisPlayer);

        player.appendChild(playerText);
        roster.appendChild(player);

        // Debugging
        console.log(nam.length);
        console.log(playerText);
        console.log(mainDebug);
        console.log(playerArr);
    } else if (playerName.length < 1) {
        err.innerHTML = "Please enter a player name!";
    } else if (playerNum.length < 1) {
        err.innerHTML = "Please enter a player number!"
    }


};
form.addEventListener('submit', formSubmit);