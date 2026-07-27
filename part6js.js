//Practice 14
console.log("Practice 14");
function printpoem(){
    console.log("Twinkle Twinkle, little star.");
    console.log("How I wonder what you are.");
}

printpoem();

//Practice 15
console.log("Practice 15");
function dice(){
    let n=Math.floor(Math.random()*6)+1;
    console.log(n);
}
dice();

//Practice 16
console.log("Practice 16");
function calcAverage(a,b,c){
   let Average=(a+b+c)/3;
   console.log(Average);
}

calcAverage(3,3,3);

//Practice 17
console.log("Practice 17");
function printTable(n){
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
}

printTable(10);

//Use of return
console.log("Use of return");
function sum(a,b){
    return a+b;
}
console.log(sum(2,3));
console.log(sum(sum(1,3),1));
value=sum(5,5);
console.log(value);

//using console
console.log("Using console");

function summ(a,b){
    console.log(a+b);
}

summ(2,3);
// console.log((summ(summ(1,3),1)));//not possible using console
// valuee=summ(5,5);
// console.log(valuee);

//Practice 18
console.log("Practice 18");

function getSum(n){
    let sum=0;
    for(i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(getSum(3));

//Practice 19
console.log("Practice 19");

let str=["hi","hello","bye","!"];

function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result=result+str[i];
    }
    return result;
}
console.log(concat(str));

//Practice 20
console.log("Practice 20");

let greet="hello";//global scope
function changeGreet(){
    let greet="namaste";//function scope
    console.log(greet);
    function innerGreet(){//lexical scope
    console.log(greet);
    }
    innerGreet();
}
console.log(greet);
changeGreet();

//Higher order functions

console.log("Higher order function");
function multipleGreet(func,n){//Higher order function
    for(let i=1;i<=n;i++){
        func();
    }
}
let greett=function(){
    console.log("hello");
}

multipleGreet(greett,5);

//or
console.log("Higher order function Alternative");
multipleGreet(function(){console.log("hello")},6);

//Higher order function (returns)
console.log("Higher order function (returns)");

function oddEvenTestFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request");
    }
}
let request="even";
fun=oddEvenTestFactory(request);
fun(6);
fun(3);

