// Shuffle function from http://stackoverflow.com/a/2450976
let shuffle = function(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let count=0;
let matchedCards = 0;
let nextCardNames =["fa-anchor","fa-atom","fa-frog","fa-feather-alt","fa-cogs","fa-fan","fa-bolt","fa-hat-wizard","fa-apple-alt","fa-bell","fa-bomb","fa-brain"];
let card = document.getElementsByClassName('card');
let nextCardBox = document.getElementById('next-card').firstChild;//i tag for fas fa-anchor
let score = document.getElementById('score');

document.addEventListener('load', loadThePage());
function loadThePage () {
  for (let i=0;i<=11;i++){
    if (card[i].classList[1] === 'matched'){
      card[i].classList.remove('matched')
    };
    if(card[i].classList[1] === 'show'){
      card[i].classList.remove('show')
    };
  }
  let randomCard = shuffle(Array.prototype.slice.call(card));
  let cards = document.getElementById('cards');
  score.innerHTML=0;
  cards.innerHTML='';
  for (let i = 0; i<= 11; i++){
   cards.appendChild(randomCard[i]);
  }
}

const oneCard = document.getElementsByTagName('ul')[0];
oneCard.addEventListener('click',function(e){
  if(e.target.nodeName === 'LI'){
    if (e.target.classList[1] === 'matched') {
      e.preventDefault();
    } else {
      e.target.classList.toggle('show');
        count = count+1;
        score.innerHTML = count;
      setTimeout (function(){
        e.target.classList.toggle('show');
        },300);

      if(nextCardBox.classList[1] === e.target.children[0].classList[1]){
        e.target.classList.toggle('matched');
        matchedCards = matchedCards+1;
        if (matchedCards === 12){
          setTimeout(function(e){ alert('Winner'); 
          },300);
      }
      nextCardNames.shift();
      let currentNextCard = nextCardBox.classList[1];
      nextCardBox.classList.replace(currentNextCard,nextCardNames[0]);
        };      
    } 
  } 

});

let restart = document.getElementsByClassName('restart')[0];
restart.addEventListener('click',function(e){
  for (let i=0;i<=11;i++){
    if (card[i].classList[1] === 'matched'){
      card[i].classList.remove('matched')
    };
    if(card[i].classList[1] === 'show'){
      card[i].classList.remove('show')
    };
  }
  let randomCard = shuffle(Array.prototype.slice.call(card));
  let cards = document.getElementById('cards');
  cards.innerHTML='';
  for (let i = 0; i<= 11; i++){
   cards.appendChild(randomCard[i]);
  }
  score.innerHTML=0;
  nextCardNames =["fa-anchor","fa-atom","fa-frog","fa-feather-alt","fa-cogs","fa-fan","fa-bolt","fa-hat-wizard","fa-apple-alt","fa-bell","fa-bomb","fa-brain"];
  nextCardBox.classList.replace( nextCardBox.classList[1], nextCardNames[0]);
});
