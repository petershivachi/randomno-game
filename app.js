/*GAME FUNCTION
=> Allow users to try guessing a correct number in 3 different inputs
=> Give a range of numbers within which users should guess.
=> Notify users the right answer if they exhaust all the three tries without winning.
=> Notify users if they win and disable the input
=> Allow users to play again
=> Notify the user the number of guesses remaining.
*/

//Define game varriables
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI element varriables
const game = document.querySelector('#game'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      message = document.querySelector('.message');

//Assign UI values
minNum.textContent = min;
maxNum.textContent = max;
    
//listen to an input event
guessBtn.addEventListener('click', function(){
  //console.log(guessInput.value);
  let guess = parseInt(guessInput.value);
  console.log(guess);

  //validate input
  if (isNaN(guess) || guess < 1 || guess > 10){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  };

  //check if guess is correct
  if (guess === winningNum){
    //disable the input
    guessInput.disabled = 'true';

    //change the color border
    guessInput.style.borderColor = 'green';

    //set message
    setMessage('The correct number is 2, YOU WON!!!', 'green')
  }

  //setMessage
   function setMessage(mssg, color){
    message.textContent = mssg;
    message.style.color = color;
  }
});