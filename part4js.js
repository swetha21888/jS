console.log("1-5");

for(let i=1;i<=5;i++){
    console.log(i);
}

console.log("5-1");

for(let i=5;i>=1;i--){
    console.log(i);
}

// odd numbers 1-15

console.log("ODD Numbers");

for(let i=1;i<=15;i=i+2){
    console.log(i);
}

console.log("Backwards");
for(let i=15;i>=1;i=i-2){
    console.log(i);
}

//OR
console.log("Alternative for ODD Numbers");

for(let i=1;i<=15;i++){
    if(i%2!==0){
    console.log(i);
    }
}
//Even numbers
console.log("Even Numbers");

for(let i=2;i<=15;i=i+2){
    console.log(i);
}

console.log("backwords");

for(let i=14;i>=2;i=i-2){
    console.log(i);
}

console.log("Alternative of Even Numbers");

for(let i=2;i<=14;i++){
  if(i%2==0){
    console.log(i);
  }
}

// console.log("infinite loops");
// for(let i=1;;i++){
//     console.log(i);
// }

 console.log("multiplication of 5 table");
 for(let i=5;i<=50;i=i+5){
    console.log(i);
 }

 console.log("multiplication");

let n=prompt("Enter a number");
n=parseInt(n);//since prompt takes only string values we need to convert first.
 for(let i=n;i<=n*10;i=i+n){
    console.log(i);
 }


 //Nested for loop
 console.log("Nested for loop");
 for(let i=1;i<=3;i++){
    console.log(`Outer loop ${i}`);
    for(let j=1;j<=2;j++){
        console.log(j);
    }
 }


 //While loop
 console.log("While Loop");

 let i=1;
 while(i<=5){
    console.log(i);
    i++;
 }

  console.log("backward");

  let j=5;
 while(j>=1){
    console.log(j);
    j--;
 }

   console.log("Even");

   let k=2;
   while(k<=20){
    console.log(k);
    k=k+2;
   }

   console.log("Odd");

   let l=1;
   while(l<=20){
    console.log(l);
    l=l+2;
   }

   //Favorite Movie Game
   console.log("Guess the favorite movie name");

   const favMovie="kanchana";
 let guess=prompt("guess my favorite movie");

 while((guess!=favMovie)&&(guess!="quit")){
    guess=prompt("wrong guess, Please try again.");
}

if (guess==favMovie){
    console.log("congrats!!");
}
else{
    console.log("Quit");
}

//OR using break 

console.log("2nd way to Guess the favorite movie name");

   const favvMovie="kanchana";
 let guesss=prompt("guess my favorite movie");

 while(guesss!=favvMovie){
    if(guesss=="quit"){
        console.log("Quit");
        break;
    }
    guesss=prompt("wrong guess, Please try again.");
}
if (guesss==favvMovie){
    console.log(`congrats!!${guesss}`);
}
//Loops with Arrays
console.log("Loops with Arrays");
let fruits=["mango","apple","orange","litchi","banana"];
fruits.push("pineapple");
for(let i=0;i<fruits.length;i++){
    console.log(i , fruits[i]);
}
//backwards
console.log("Loops with Arrays to print backwards");
let fruitss=["mango","apple","orange","litchi","banana"];
fruitss.push("pineapple");
for(let i=fruitss.length-1;i>=0;i--){
    console.log(i , fruitss[i]);
}

//Loops with nested Arrays
console.log("Loops with nested Arrays");
let family=[["bala","priya","raj"],["swetha","sripriya","yuvaraj"]];
for(let i=0; i<family.length;i++){
    console.log(`Family # ${i+1}`);
    for( let j=0;j<family[i].length;j++){
    console.log(family[i][j]);
    }
}

console.log("2nd example of Loops with nested Arrays");

let students=[["Aman",95],["Suraj",100],["Rahul",97],["Swetha",100]];
for(let i=0; i<=students.length-1;i++){
    console.log(`Students # ${i+1}`);
    for(j=0; j<students[i].length;j++){
        console.log(students[i][j]);
    }
}

//for of loops (fruit of fruits)

console.log("for of loops (fruit of fruits)");
let fruitg=["apple","banana","orange","litchi","mango"];
for(fruit of fruitg){
    console.log(fruit);
}

console.log("for of loops (string)");
for(fruit of "appnacollege"){
    console.log(fruit);
}

//for of loops for nested arrays
console.log("for of loops (nested arrays)");
let names=[["swetha","rahul","mango","raj"],["bala","priya","surya","pagal","mansi"]];
for(group of names){
    for(names of group){
    console.log(names);
    }
}
