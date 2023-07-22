let scoreUser = 0;
let scoreAi = 0;
let gameStatus='New game';
let winner='';
const selectedDiv=document.querySelectorAll('.box');
// Random number selector
const randomPicker=function(){
  const selected = Math.trunc(Math.random()*3)+1;
  return selected;
}
// Get users selection
selectedDiv.forEach(div=>{
  
 div.addEventListener('click',function(eve){
  
  const userSelected = Number(div.id);
  const aiSelected = randomPicker();
  gameLogic(userSelected,aiSelected);
  console.log(`${scoreUser} : ${scoreAi}`);
})
})

// creating game logic 1=rock,2=paper , 3=scissors
const gameLogic=function(pick1,pick2){
  if(pick1 == 1 && pick2== 3 || pick1==2 && pick2==1 || pick1==3 && pick2==2){
    scoreUser++;
    gameStatus='player win';
    scoreWriter();
    if(scoreUser==5){
      winner="User";
      endGame();
    }
  }
  else if(pick1 == pick2){
    gameStatus='tie';
    scoreWriter();
  }
  else{
    scoreAi++;
   gameStatus='Pc win!';
    scoreWriter();
    if(scoreAi==5){
      winner="AI";
      endGame();
    }
  }
  
}

const resetGame=function(){
  scoreUser=0;
  scoreAi=0;
  gameStatus="Game has reseted!";
  scoreWriter();
}
const scoreWriter= function(){
  document.getElementById('score1-container').innerHTML=`User </br>score:${scoreUser}`;
  document.getElementById('score2-container').innerHTML=`PC's </br>score:${scoreAi}`;
  console.log(gameStatus);
  document.getElementById('game-status').innerHTML=`${gameStatus}`;
}

const resetBtn=document.querySelector('#reset');
resetBtn.addEventListener('click',function(){
  resetGame();
});

const endGame= function(){
  
  const modal = document.querySelector('.modal');
  modal.classList.toggle('hidden');
  document.querySelector('#winner').innerHTML=`<p>${winner} has win the game!!!</p>
<p>You:${scoreUser} vs PC:${scoreAi}</p>`;
}

const hideModal=document.querySelector('#hide-modal');

hideModal.addEventListener('click',function(){
  console.log('HIDE');
  endGame();
  resetGame();
})
