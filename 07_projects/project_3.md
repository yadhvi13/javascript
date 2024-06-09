# projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 3 
## HTML CODE

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color:#212121; color:#fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
    <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
      >Youtube channel</a
    >
  </nav>
    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
            
        </div>
    </div>
    <script src="chaiaurcode.js"></script>
</body>
</html>
```



## project 3 
## JAVASCRIPT CODE

```javascript

let randomNumber = (parseInt(Math.random()*100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
   e.preventDefault();
   const guess = parseInt(userInput.value);
   console.log(guess);
   validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
      alert('please enter a valid number')
  }
  else if(guess < 1){
    alert('please enter a valid number')
  }
  else if(guess > 100){
    alert('please enter number less than 100')
  } 
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
       displayGuess(guess)
       displayMessage(`Game Over.Random Number was ${randomNumber}`)
       endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
     displayMessage(`You Guessed it right`)
     endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is TOOO low`)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is TOOO high`)
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}    `;
  numGuess ++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
      randomNumber = (parseInt(Math.random()*100 + 1));
      
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML='';
      remaining.innerHTML = `${11 - numGuess}`;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);

      playGame = true;
    })
}











```