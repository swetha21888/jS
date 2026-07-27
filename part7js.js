//setTimeout Function
// setTimeout(()=>{
//     console.log("Swetha is good girl.");
// },2000);


//setInterval Function
// setInterval(()=>{
//     console.log("My favourite color is violet.");
// },2000);



//clearInterval Function
// let id=setInterval(()=>{
//     console.log("My favourite chocolate is DairyMilk.");
// },2000);

// console.log(id);
// clearInterval(id);


//Practice 21

//Que 1
console.log("Que 1");
const square=(n)=>(n*n);

console.log(square(2));

//Que 2
console.log("Que 2");
let id2=setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id2);
    console.log("clear interval run");
},10000);