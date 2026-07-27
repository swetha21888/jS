
// let smallImg=document.getElementsByClassName("oldImg");
// for(i=0;i<smallImg.length;i++){
//     smallImg[i].src="spiderman_img.png";
//     console.log(`value of img no. ${i} is changed.`);
// }


let links=document.querySelectorAll(".box a");
for(link of links){
    link.style.color="red";
}

let linkss=document.querySelectorAll(".box a");
for(i=0;i<linkss.length;i++){
    linkss[i].style.backgroundColor="yellow";
}


//Practice 23

// Que 1

let p=document.createElement("p");
p.innerText="Hey I'm red!";
let body=document.querySelector("body");
body.appendChild(p);
//document.all[38].style.color="red";
//or
p.classList.add("red");



//Que 2


let h3=document.createElement("h3");
h3.innerText="I'm a blue h3!";
// let body=document.querySelector("body");
p.prepend(h3);
h3.classList.add("h9");


//Que 3

let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");
h1.innerText="I'm in a div";
para2.innerText="ME TOO!";

div.append(h1);
div.append(para2);

div.classList.add("div");
body.append(div);


