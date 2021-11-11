// This file contains the game logic.
// All the event-listening should happen in buttons.js

function createList(listToFollow) {
    let randomButton = Math.floor(Math.random() * 4);
    switch (randomButton) {
        case 0:
            listToFollow.push("green");
            break;
        case 1:
            listToFollow.push("red");
            break;
        case 2:
            listToFollow.push("blue");
            break;
        case 3:
            listToFollow.push("yellow");
            break;
    }
    console.log(listToFollow);
}

function compareList(listOfInputs, pressCount) {
    console.log(listOfInputs)
    let matchingLists = true;
    for (let i = 0; i < pressCount; i++) {
        if (listOfInputs[i] != gameList[i])
            matchingLists = false;
    }

    if(matchingLists == true && pressCount == gameList.length)
        console.log("You won baybeee")
    else if(matchingLists == false)
    {
        console.log("wow you suck");
    }
}

let gameList = [];
createList(gameList);
createList(gameList);
