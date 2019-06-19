var myNumber = generateNewNumber();
console.log(myNumber);
var previousNumber;
var input = document.getElementById('input');
var indicator = document.getElementById('indicator');
var body = document.getElementsByTagName('BODY')[0];
var restart = document.getElementById('restart');
var first = document.getElementById('first');
var input;

input.addEventListener('keypress', e => {
  if (e.keyCode !== 13) return;
  //get the guessed number
  first.style.display = 'none';
  input = Number(document.getElementById('input').value);
  setColor();
  // if guessed number is smaller the correct answer
  if (input < myNumber) {
    indicator.innerText = 'Too Low';
    input.value = '';
  }
  // if the guessed number is larger
  else if (input > myNumber) {
    indicator.innerText = 'Too High';
    input.value = '';
  }
  // NaN
  else if (Number.isNaN(input)) {
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

  previousNumber = input;
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
  //absolute value
  if (previousNumber) {
    var pdistance = Math.abs(previousNumber - myNumber);
    var cdistance = Math.abs(input - myNumber);

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
