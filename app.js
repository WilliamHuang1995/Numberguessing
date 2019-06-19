var myNumber = generateNewNumber();
console.log(myNumber);
var previousNumber;
var input = document.getElementById('guessedNumber');
var indicator = document.getElementById('indicator');
var check = document.getElementById('button');
var body = document.getElementsByTagName('BODY')[0];
var restart = document.getElementById('restart');
var first = document.getElementById('first');
var guessedNumber;

check.addEventListener('click', () => {
  //get the guessed number
  first.style.display = 'none';
  guessedNumber = Number(document.getElementById('guessedNumber').value);
  setColor();
  // if guessed number is smaller the correct answer
  if (guessedNumber < myNumber) {
    indicator.innerText = 'Too Low';
  }
  // if the guessed number is larger
  else if (guessedNumber > myNumber) {
    indicator.innerText = 'Too High';
  }
  // if it is correct
  else {
    // show correct!
    indicator.innerText = 'Correct!!!';
    // show restart button
    restart.style.display = 'block';
    // set editable to false
    input.disabled = true;
    // check disable
    check.style.display = 'none';
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
  // check disable
  check.style.display = 'inline';
  myNumber = generateNewNumber();
});

function setColor() {
  console.log(previousNumber);
  console.log(guessedNumber);
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
