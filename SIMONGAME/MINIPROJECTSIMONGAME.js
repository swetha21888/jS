let gameSeq=[];
let userSeq=[];
let btns=["red","green","yellow","blue"];

let started=false;
let level=0;
let highScore = 0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;

        levelUp();
    }
});

function btnFlash(element){
    element.classList.add("flash");
    setTimeout(function (){
        element.classList.remove("flash");
    },250);
    
};

function levelUp(){
    userSeq=[];//if we don't write this it will store all the levels color what we type, to print from starting we need to add this.
    level=level+1;
  h2.innerText=`Level ${level}`;


  let randIdx=(Math.floor(Math.random()*4));
  let randColor=btns[randIdx];
  let randBtn=document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
};

function checkAns(idx){

if(userSeq[idx]===gameSeq[idx]){
 if(userSeq.length==gameSeq.length){
    setTimeout(levelUp,1000);
 }
}else{

    if(level > highScore){
        highScore = level;   // update high score if this round was better
    }
    h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Highest Score: <b>${highScore}</b><br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
},150);
reset();
}};


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    btnFlash(this);//this will come full button 
    userColor=this.getAttribute("id");//it will select only color
    userSeq.push(userColor);
   console.log(userSeq);
    checkAns(userSeq.length-1);
};

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}