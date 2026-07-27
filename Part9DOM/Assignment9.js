

//Que 1

let input=document.createElement("input");
// let input=document.createElement(prompt("Enter your name"));//This can be also return
let button=document.createElement("button");
button.innerText="Click me";
let body=document.querySelector("body");
body.append(input);
body.append(button);


//Que 2

input.setAttribute("placeholder","username");
button.setAttribute("id","btn");
// input.placeholder="username";//or
// button.id="btn";//or


//Que 3

document.querySelector("#btn");//we can also search using id
// button.classList.add("el");//or
button.style.backgroundColor="red";
button.style.color="green";

//Que 4

// let h1=document.createElement("h1");
// h1.innerText="DOM Practice";
// h1.classList.add("line");
// body.append(h1);

//or
let h1=document.createElement("h1");
h1.innerHTML="<u> DOM Practice </u>";
h1.style.color = "purple";
document.querySelector("body").append(h1);


//Que 5

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
body.append(p);

