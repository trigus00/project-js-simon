let listOfButtons = []
let pressCounter = 0;

function displayListOfButtons() {
  console.log(`You have pressed ${pressCounter} buttons:`)
  console.log(listOfButtons)
}

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('mousedown', function () {
  //console.log('You clicked the green button');
  if (canPush) {
    greenButton.classList.add('pressed');
    // Audio clip 
    var audio = new Audio("simonSound1.mp3");
    audio.play();

    listOfButtons.push("green")
    pressCounter++;
    let compare = compareList(listOfButtons, pressCounter)
    if(compare == false)
      loseGame();
    else if(pressCounter == gameList.length && compare == true)
    {
      listOfButtons = [];
      pressCounter = 0;
      continueGame();
    }
  }
});
greenButton.addEventListener('mouseup', function () {
  //console.log("you released the green button");
  if (canPush) {
    greenButton.classList.remove('pressed');
  }

  //displayListOfButtons()
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('mousedown', function () {
  if (canPush) {
    //console.log('You clicked the red button');
    redButton.classList.add('pressed');

    //Audio clip
    var audio = new Audio("simonSound1.mp3");
    audio.play();

    listOfButtons.push("red")
    pressCounter++;
    let compare = compareList(listOfButtons, pressCounter)
    if(compare == false)
      loseGame();
    else if(pressCounter == gameList.length && compare == true)
    {
      listOfButtons = [];
      pressCounter = 0;
      continueGame();
    }
  }
});
redButton.addEventListener('mouseup', function () {
  //console.log("you released the red button");
  if (canPush) {
    redButton.classList.remove('pressed');
  }
  //displayListOfButtons()
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('mousedown', function () {
  if (canPush) {
    //console.log('You clicked the yellow button');
    yellowButton.classList.add('pressed');
    // Audio clip 
    var audio = new Audio("simonSound1.mp3");
    audio.play();

    listOfButtons.push("yellow")
    pressCounter++
    let compare = compareList(listOfButtons, pressCounter)
    if(compare == false)
      loseGame();
    else if(pressCounter == gameList.length && compare == true)
    {
      listOfButtons = [];
      pressCounter = 0;
      continueGame();
    }
  }
});
yellowButton.addEventListener('mouseup', function () {
  //console.log("you released the yellow button");
  if (canPush) {
    yellowButton.classList.remove('pressed');
  }
  //displayListOfButtons()
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('mousedown', function () {
  if (canPush) {
    //console.log('You clicked the blue button');
    // audio file 
    var audio = new Audio("simonSound1.mp3");
    audio.play();
    blueButton.classList.add('pressed');
    listOfButtons.push("blue")
    pressCounter++;
    let compare = compareList(listOfButtons, pressCounter)
    if(compare == false)
      loseGame();
    else if(pressCounter == gameList.length && compare == true)
    {
      listOfButtons = [];
      pressCounter = 0;
      continueGame();
    }
  }
});
blueButton.addEventListener('mouseup', function () {
  //console.log("you released the blue button");
  if (canPush) {
    blueButton.classList.remove('pressed');
  }
  //displayListOfButtons()
});
