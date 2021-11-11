let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('mousedown', function() {
  //console.log('You clicked the green button');
  greenButton.classList.add('pressed');
});
greenButton.addEventListener('mouseup', function() {
  //console.log("you released the green button");
  greenButton.classList.remove('pressed');
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('mousedown', function() {
  //console.log('You clicked the red button');
  redButton.classList.add('pressed');
});
redButton.addEventListener('mouseup', function() {
  //console.log("you released the red button");
  redButton.classList.remove('pressed');
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('mousedown', function() {
  //console.log('You clicked the yellow button');
  yellowButton.classList.add('pressed');
});
yellowButton.addEventListener('mouseup', function() {
  //console.log("you released the yellow button");
  yellowButton.classList.remove('pressed');
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('mousedown', function() {
  console.log('You clicked the blue button');
  blueButton.classList.add('pressed');
});
blueButton.addEventListener('mouseup', function() {
  console.log("you released the blue button");
  blueButton.classList.remove('pressed');
});
