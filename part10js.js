// let btn=document.querySelector("button");
// btn.onclick= function (){
//     console.log("button was hidden");
// }//Direct onclick with function action





// function sayHello(){
//     console.log("button was hidden");
// }

// let btns=document.querySelectorAll("button");
//  for(btn of btns){
//      btn.onclick=sayHello;
//      btn.onmouseenter=function(){
//                 console.log("Don't touch me");
// };
// console.dir(btn);
// } //onlick and onmouseenter property


function heLlo(){
         console.log("Don't touch me");
}

function hiMan(){
    alert("Hi");
}

let btns=document.querySelectorAll("button");
 for(btn of btns){
//  btn.addEventListener("click",heLlo);
//  btn.addEventListener("click",hiMan);// addEventListener
 btn.addEventListener("dblclick",function(){
    console.log("I am swetha");
 })
 };


 //for single button

//  let btnsss =document.querySelector(".hello");
//  btnsss.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.color="blue";
//     this.style.backgroundColor="yellow";
//  });

//Method 1

//  let btnsss =document.querySelectorAll("button");
//  btnsss.forEach(function(button){
//  button.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.color="blue";
//     this.style.backgroundColor="yellow";
//  });
//  });


//method 2

let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let p=document.querySelector("p");
let bt=document.querySelector("button");

function colorChange(){
    this.style.backgroundColor="Green";
    this.style.color="purple";
}

h1.addEventListener("click",colorChange);
h2.addEventListener("click",colorChange);
p.addEventListener("click",colorChange);
bt.addEventListener("click",colorChange);