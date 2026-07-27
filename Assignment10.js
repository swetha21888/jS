// window.addEventListener("load", function() {
//         console.log("img loaded");
//     });

   


//mouseout where we touch out of the box it will print the output
//keypress will not add the last one
//scroll works for textarea or div not for inputs or normal paragraph it should be a scroll bar in html
// When whole code is excuted the load is used.


//Que 2
// let btn=document.createElement("button");
// btn.innerText="I am bloody sweet";
// let body=document.querySelector("body");
// body.appendChild(btn);
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="green";
// });

//Que 3


let inp=document.querySelector("input");
inp.addEventListener("keypress",function(event){
    //  let ch=event.key;//event.key used to print exactly what we type
    let ch=event.key;
    if((ch>="a"&& ch<="z")||(ch>="A"&&ch<="Z")||(ch===" ")){
        console.log(ch);
    }
    else{
        event.preventDefault();
    }
    let h2=document.querySelector("h2");
    setTimeout(()=>{
     h2.innerText=inp.value;},0);
});