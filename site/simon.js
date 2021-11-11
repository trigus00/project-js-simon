// This file contains the game logic.
// All the event-listening should happen in buttons.js

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
    }
    else
    {
        setTimeout(function()
        {
            tempButton.classList.remove('pressed');
        }, 500)
    }
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
            matchingLists = false;
    }

    if (matchingLists == true && pressCount == gameList.length)
        console.log("You won baybeee")
    else if (matchingLists == false) {
        console.log("wow you suck");
    }
}

let gameList = [];
//createList(gameList);
//createList(gameList);
displayList(['green', 'blue', 'red', 'yellow', 'green', 'green'])
