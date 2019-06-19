var myNumber = generateNewNumber();
var previousNumber;
var inputField = document.getElementById('input');
var indicator = document.getElementById('indicator');
var body = document.getElementsByTagName('BODY')[0];
var restart = document.getElementById('restart');
var first = document.getElementById('first');
var input;

inputField.addEventListener('keypress', e => {
  if (e.keyCode !== 13) return;
  //get the guessed number
  first.style.display = 'none';
  input = Number(document.getElementById('input').value);
  setColor();
  // if guessed number is smaller the correct answer
  if (input < myNumber) {
    indicator.innerText = 'Too Low';
    updateGuessed('Higher than this');
  }
  // if the guessed number is larger
  else if (input > myNumber) {
    indicator.innerText = 'Too High';
    updateGuessed('Lower than this');
  }
  // NaN
  else if (Number.isNaN(input)) {
    indicator.innerText = 'Not a Number!';
    return;
  }
  // if it is correct
  else {
    // show correct!
    indicator.innerText = 'Correct!!!';
    // show restart button
    restart.style.display = 'block';
    // set editable to false
    inputField.disabled = true;

    // reset background
    body.style.background = 'white';

    // set correct
    updateGuessed('Correct!');

    first.style.display = 'block';
  }
  inputField.value = '';
  previousNumber = input;
});

//reset the game
restart.addEventListener('click', () => {
  indicator.innerText = '';
  // show restart button
  restart.style.display = 'none';
  // set editable to false
  inputField.disabled = false;
  myNumber = generateNewNumber();
  var orderedList = document.getElementById('orderedList');
  while (orderedList.firstChild) {
    orderedList.removeChild(orderedList.firstChild);
  }
  previousNumber = null;
});

function updateGuessed(temperature) {
  var orderedList = document.getElementById('orderedList');
  var node = document.createElement('LI');
  var text = temperature ? input + ' - ' + temperature : input;
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);
  orderedList.appendChild(node);
}

function setColor() {
  //absolute value
  if (previousNumber) {
    var pdistance = Math.abs(previousNumber - myNumber);
    var cdistance = Math.abs(input - myNumber);

    if (pdistance > cdistance) {
      //hotter
      body.style.background = '#ff8a8a';
      return;
    } else if (pdistance < cdistance) {
      //colder
      body.style.background = '#8ad0ff';
      return;
    }
  }
}

function generateNewNumber() {
  return Math.floor(Math.random() * 999 + 1);
}
