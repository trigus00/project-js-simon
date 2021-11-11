// This file contains the game logic.
// All the event-listening should happen in buttons.js
let canPush = true;
let gameList = []

// Start game 
/*const start = document.querySelector("button .start-button");

start.addEventListener('click', function (){
    console.log("im here")
}
)*/


function createList(list) {
    let randomButton = Math.floor(Math.random() * 4);
    switch (randomButton) {
        case 0:
            list.push("green");
            break;
        case 1:
            list.push("red");
            break;
        case 2:
            list.push("blue");
            break;
        case 3:
            list.push("yellow");
            break;
    }
    displayList(list)
}

async function displayList(list) {
    canPush = false;
    console.log(list)
    let tempButton = document.querySelector(`.simon-button.${list[0]}`);
    tempButton.classList.add('pressed');
    var audio = new Audio("simonSound1.mp3");
    audio.play();
    if (list.length > 1) {
        for (let i = 1; i < list.length; i++) {
            await new Promise((resolve) => setTimeout(function() {
                tempButton.classList.remove('pressed');
                resolve();
            }, 700 - (list.length * 25)))
            await new Promise((resolve) => setTimeout(function () {
                tempButton = document.querySelector(`.simon-button.${list[i]}`)
                tempButton.classList.add('pressed');
                var audio = new Audio("simonSound1.mp3");
                audio.play();
                resolve();
            }, 300 - (list.length * 12.5)))
        }
        await new Promise((resolve) => setTimeout(function () {
            tempButton.classList.remove('pressed');
            resolve();
        }, 700 - (list.length * 25)));
    }
    else
    {
        await new Promise((resolve) => setTimeout(function()
        {
            tempButton.classList.remove('pressed');
            resolve()
        }, 500));
    }
    canPush = true;
}
function fakeUnpress(color) {
    let tempButton = document.querySelector(`.simon-button.${color}`);
    tempButton.classList.remove('pressed');
}

function compareList(listOfInputs, pressCount) {
    console.log(listOfInputs)
    let matchingLists = true;
    for (let i = 0; i < pressCount; i++) {
        if (listOfInputs[i] != gameList[i])
            return false;
    }

    if (matchingLists == true)
        return true;
}

/*let gameList = [];
//createList(gameList);
//createList(gameList);
displayList(['green', 'blue', 'red', 'yellow', 'green', 'green'])*/

function startGame()
{
    //let gameList = [];
    
    createList(gameList);
}

function continueGame()
{
    console.log("Hey nice, good round");
    setTimeout(function () {
        createList(gameList);
    }, 2000)
}
function loseGame()
{
    console.log("Wow you suck. Play again?");
}

//startGame()
