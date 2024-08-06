'use strict';

//selecting elements

const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let currentScore,activePlayer,playing,scores;

const init=function(){
    currentScore=0;
    activePlayer=0;
   scores=[0,0];
    playing=true;
   
   diceEl.classList.add('hidden');
   score0El.textContent=0;
   score1El.textContent=0;
   current0El.textContent=0;
   current1El.textContent=0;
   player0El.classList.remove('player--winner');
   player1El.classList.remove('player--winner');
   player0El.classList.remove('player--active');
   player1El.classList.remove('player--active');
   player0El.classList.add('player--active');
}

init();

const switchPlayer=function(){

   document.getElementById(`current--${activePlayer}`).textContent=0;
   currentScore=0;
      activePlayer= activePlayer===0 ? 1 : 0;//switching the player

      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click',function() {
    if(playing){
    //1)creating a random number between 1-6
    const dice=Math.trunc(Math.random()*6)+1;
    
    //2)display Dice

    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    console.log(dice);

    //3)check if rolled 1.If yes,switch the player.If no,add to current 
 if(dice!=1){
    currentScore=currentScore+dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   //  current0El.textContent=currentScore;
 }else{
   switchPlayer();
      }
   }});

//Holding the Score
btnHold.addEventListener('click',function() {
   if(playing){
      console.log("clicked");
   scores[activePlayer]+=currentScore;
   document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
   if(scores[activePlayer]>=20){
      playing=false;
      diceEl.classList.add('hidden')
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('active--player');
   }else{
   switchPlayer();

}}});



btnNew.addEventListener('click',init);