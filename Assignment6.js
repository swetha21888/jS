//1
console.log("Question 1");

// let array=[25,10,30,5];
// let n=20;
function arr(array,n){
    for(let i=0;i<array.length;i++){
    if(array[i]>n){
    console.log(array[i]);
    } 
    }
}

arr([2,3,4,5],4);

//2
console.log("Question 2");

let str = "abcdabcdefgggh";

function getUnique(str) {
  let ans = ""; // empty string to collect unique characters

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i]; // take one character at a time

    if (ans.indexOf(currChar) == -1) {
      // check if this character is NOT already in ans
      ans += currChar; // if not, add it
    }
    // if already there, do nothing (skip)
  }

  return ans; // final string with unique characters
}

console.log(getUnique(str));

//3
console.log("Question 3");

let country=["Australia","Germany","indiaaaaaa","United States of America"];
function largestcountry(country){
    let largest=country[0];
    for(i=1;i<country.length;i++){
    if(country[i].length>largest.length){
      largest=country[i];
    }
}
return largest;
}

console.log(largestcountry(country));

//Question 3 Alternative
console.log("Question 3 Alternative");

let countryy = ["Australia","Germany","Indiaaaaaa","United"];

function longestName(countryy) {
  let ansIdx = 0; // start by saying "first country is the winner"
  
  for (let i = 0; i < countryy.length; i++) {
    let ansLen = countryy[ansIdx].length; // length of current winner
    let currLen = countryy[i].length;     // length of new country
    
    if (currLen > ansLen) {
      ansIdx = i; // new country becomes the winner
    }
  }
  
  return countryy[ansIdx]; // final winner
}

console.log(longestName(countryy));

//4
console.log("Question 4");

let vowels=["a","i","e","o","u"];

function name(str){
  let count=0;
  for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i].toLowerCase())){
    count=count+1;
    }
  }
  return count;
}

console.log(name("Orange"));


//Question 4 Alternative
console.log("Question 4 Alternative");

let strr = "apnacollege";

function countVowels(strr){
  let count = 0;
  for(let i=0; i < strr.length; i++){
    if(strr.charAt(i)=="a" ||//|| is a OR operator and charAt(i) is a older way to access the index.
       strr.charAt(i)=="e" || 
       strr.charAt(i)=="i" || 
       strr.charAt(i)=="o" || 
       strr.charAt(i)=="u"){
      count++;
    }
  }
  return count;
}

console.log(countVowels(strr));

//Question 5
console.log("Question 5");

function randomNumber(start,end){ 
random=Math.floor(Math.random() * (end - start + 1)) + start;
return random;
}
console.log(randomNumber(50,100));

//Question 5 Alternative
console.log("Question 5 Alternative not includes the last end number");

let start=100;
let end=200;
function generateRandom(start,end){
let diff=end-start;
return Math.floor(Math.random()*diff)+start;
}

console.log(generateRandom(start,end));