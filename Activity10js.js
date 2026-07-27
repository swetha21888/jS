// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
// let h1=document.querySelector("h1");
// h1.innerText=getRandomColor();
// let div=document.querySelector("div");
// div.style.backgroundColor=getRandomColor();
// });

// function getRandomColor(){
//    let red= Math.floor(Math.random()*256);//here 255 will be not included so here I have added 256
//    let green= Math.floor(Math.random()*256);
//    let blue= Math.floor(Math.random()*256);
//    let color= `rgb(${red},${green},${blue})`;
//    return color;
// }     


// let div=document.querySelector(".hi");
// div.addEventListener("mouseenter",function(){
//     console.log("Hi I am inside the box");
// });


// let btnn=document.querySelector("button");
// btnn.addEventListener("click",function(event){
//     console.log(event);
// });

// let inp=document.querySelector("input");
// inp.addEventListener("keyup",function(event){//keydown once presssed
//     console.log(event);
//     console.log("key was pressed");//keyup once released
// })


// inp.addEventListener("keydown",function(event){
//     console.log(`code=${event.code}`);//we can also replace it by "KeyU","KeyD","KeyL","KeyR"
//     if(event.key=="arrowLeft"){
//         console.log("character moved left");
//     }
//     else if(event.key=="arrowRight"){
//         console.log("character moved Right");
//     }
//     else if(event.key=="arrowUp"){
//         console.log("character moved Up");
//     }
//     else if(event.key=="arrowDown"){
//         console.log("character moved Down");
//     }
// });


// let form=document.querySelector("form");
// form.addEventListener("submit",function(){
//     event.preventDefault();//to stop the action
//     alert("form submitted");
// });

//Extracting data Method 1

// let form=document.querySelector("form");
//  form.addEventListener("submit",function(event){
//     event.preventDefault();
// let user=document.querySelector("#user");
// let pass=document.querySelector("#pass");
//  console.log(user.value);
//  console.log(pass.value);
//  console.dir(form);
// console.dir(inp);
// console.log(inp.value);// to select the innerText
//  });

//  //Extracting data Method 2
//  let form=document.querySelector("form");
//  form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user=this.elements[0];
//     let pass=this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//  });


//change and input
// let user=document.querySelector("#user");
//  user.addEventListener("change",function(event){
//    event.preventDefault();
//    console.log("Changed");
//    console.log(`final result=${user.value}`);
//  });

//  let pass=document.querySelector("#pass");
//  pass.addEventListener("input",function(event){
//    event.preventDefault();
//    console.log("Changed");
//    console.log(`final result=${pass.value}`);
//  });

let inp=document.querySelector("input");
let p=document.querySelector("p");
inp.addEventListener("input",function(event){
    event.preventDefault();
    console.log(this.value);
    p.innerText=this.value;
});