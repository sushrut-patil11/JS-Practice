'use strict';

//selecting elements
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');


score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');
let currentScore=0;

btnRoll.addEventListener('click',function() {

    //1)creating a random number between 1-6
    
    const dice=Math.trunc(Math.random()*6)+1;
    
    //2)display Dice

    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    console.log(dice);

    //3)check if rolled 1.If yes,switch the player.If no,add to current 
 if(dice!=1){
    currentScore=currentScore+dice;
    current0El.textContent=currentScore;
 }




});
