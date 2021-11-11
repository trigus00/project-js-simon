// This file contains the game logic.
// All the event-listening should happen in buttons.js
function createList(listToFollow)
{
    let randomButton = Math.floor(Math.random() * 4);
    switch(randomButton)
    {
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

function compareList(listOfInputs, pressCount)
{
    let matchingLists = true;
    if(pressCount == gameList.length)
    {
        
    }
}

let gameList = [];
createList(gameList);
createList(gameList);