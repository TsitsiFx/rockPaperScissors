let score = JSON.parse(localStorage.getItem('score')) ||  
{
 wins: 0,
 losses: 0,
 ties: 0
 };
 
 /* if (score === null) {
 score = {
 wins: 0,
 losses: 0,
 ties: 0}
 }
 CODE USED BEFORE MORE EFFICIENT CODE AT TOP*/
 let isAutoplaying = false;
 let intervalId;
function autoPlay(){
  document.querySelector('.js-autoplay')
    .innerHTML = 'Autoplaying...'
  if(!isAutoplaying){
    intervalId = setInterval (() => {
      const autoMove = pickComputerMove();
      playGame(autoMove);
    }, 1000)
    isAutoplaying = true;
  }
    else {
      clearInterval(intervalId);
      isAutoplaying = false;
      document.querySelector('.js-autoplay')
    .innerHTML = 'Autoplay'
    }
  }
  document.querySelector('.js-rock-button')
  .addEventListener('click', () => {playGame('rock')})

  document.querySelector('.js-paper-button')
  .addEventListener('click', () => {playGame('paper')});

  document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {playGame('scissors')});

  //document.querySelector('.js-autoplay-button')
  //.addEventListener('click', autoPlay())

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r'){
        playGame('rock')
    } else if (event.key === 'p'){
        playGame('paper')
    } else if (event.key === 's'){
        playGame('scissors')
    }
  })
  

function playGame(playerMove) {
 const computerMove = pickComputerMove();

 let result = '0';

 if (playerMove === 'scissors') {

   if (computerMove === 'rock') {
     result = 'You lose.';
   } else if (computerMove === 'paper') {
     result = 'You win.';
   } else if (computerMove === 'scissors') {
     result = 'Tie.';
   } 

 } else if (playerMove === 'paper') {
     if (computerMove === 'rock') {
       result = 'You win.';
     } else if (computerMove === 'paper') {
       result = 'Tie.';
     } else if (computerMove === 'scissors') {
       result = 'You lose.';
     } 
 } else if (playerMove === 'rock'){
     if (computerMove === 'rock') {
       result = 'Tie.'
     } else if (computerMove === 'paper') {
         result = 'You lose.';
     } else if (computerMove === 'scissors') {
         result = 'You win.';
     }
 }
 if (result === 'You win.') {
   score.wins += 1;
 } else if (result === 'You lose.'){
   score.losses += 1;
 } else if (result === 'Tie.'){
   score.ties += 1;
 }

 localStorage.setItem('score',JSON.stringify(score));

 //updateScoreElement();
 document.querySelector('.js-score')
   .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

 document.querySelector('.js-results')
 .innerHTML = result;

 document.querySelector('.js-moves')
   .innerHTML = `You <img src="images/${playerMove}-emoji.png"  class="move-icon">  <img src="images/${computerMove}-emoji.png"  class="move-icon"> Computer`;
 }

/*
Created this as a function and inserted it into the function above because I needed it in multiple places(at the reset button and inside the playGame() function )...
*/
function updateScoreElement() {
 document.querySelector('.js-score')
   .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}



function pickComputerMove() { 
 const randomNumber = Math.random();

   let computerMove = ''; 
     if (randomNumber >= 0 && randomNumber <= 1/3) {
       computerMove = 'rock'
       } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
       computerMove = 'paper'
       } else if (randomNumber >= 2/3 && randomNumber <= 1) {
         computerMove = 'scissors'
       }
       return computerMove;
}

//setInterval(function playGame(playerMove){
 // console.log('picking computerMove')
//}, 3000);