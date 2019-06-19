var myNumber = generateNewNumber();
console.log(myNumber);
var previousNumber;
var input = document.getElementById('guessedNumber');
var indicator = document.getElementById('indicator');
var body = document.getElementsByTagName('BODY')[0];
var restart = document.getElementById('restart');
var first = document.getElementById('first');
var guessedNumber;

input.addEventListener('keypress', e => {
  if (e.keyCode !== 13) return;
  //get the guessed number
  first.style.display = 'none';
  guessedNumber = Number(document.getElementById('guessedNumber').value);
  setColor();
  // if guessed number is smaller the correct answer
  if (guessedNumber < myNumber) {
    indicator.innerText = 'Too Low';
    input.value = '';
  }
  // if the guessed number is larger
  else if (guessedNumber > myNumber) {
    indicator.innerText = 'Too High';
    input.value = '';
  }
  // NaN
  else if (Number.isNaN(guessedNumber)) {
    indicator.innerText = 'Not a Number!';
    input.value = '';
    return;
  }
  // if it is correct
  else {
    // show correct!
    indicator.innerText = 'Correct!!!';
    // show restart button
    restart.style.display = 'block';
    // set editable to false
    input.disabled = true;
    body.style.background = 'white';
    first.style.display = 'block';
  }

  previousNumber = guessedNumber;
});

restart.addEventListener('click', () => {
  indicator.innerText = '';
  // show restart button
  restart.style.display = 'none';
  // set editable to false
  input.disabled = false;
  myNumber = generateNewNumber();
});

function setColor() {
  console.log(previousNumber);
  console.log(typeof guessedNumber);
  //absolute value
  if (previousNumber) {
    var pdistance = Math.abs(previousNumber - myNumber);
    var cdistance = Math.abs(guessedNumber - myNumber);

    if (pdistance > cdistance) {
      //hotter
      body.style.background = '#ff8a8a';
    } else if (pdistance < cdistance) {
      //colder
      body.style.background = '#8ad0ff';
    }
  }
}

function generateNewNumber() {
  return Math.floor(Math.random() * 999 + 1);
}
