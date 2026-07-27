//1
console.log("Que 1");
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(i=0;i<arr.length;i++){
    if(arr[i]==num){
      arr.splice(i,1);
    }
}
console.log(arr);

//2
console.log("Que 2");
let number=287152;
let count = number.toString().length;//changing into string.
console.log(`Count = ${count}`);

//Or
console.log("Que 2 alternative");
let numberr = 287152; // Your number                    
let countt = 0;  // Start with 0
let copy = numberr; // Make a copy of the number

while (copy > 0) { // Loop until copy becomes 0
  countt++; // Increase count
  copy = Math.floor(copy / 10); // Remove last digit
}


console.log(countt);
//3
console.log("Que 3");
let numbe = 287152;   // Your number
let sum = 0;           // Start with sum = 0
let cop = numbe;     // Make a copy of the number

while (cop > 0) {     
  digit = cop % 10;        // Get the last digit
  sum = sum + digit;            // Add it to sum
  cop = Math.floor(cop / 10); // Remove the last digit
}

console.log(sum);

//4
console.log("Que 4");
let n = 7;          // Example number
let factorial = 1;  // Start with 1

for (let i = 1; i <= n; i++) {
  factorial = factorial * i;   // Multiply step by step
}
//0! is always defined as 1 (by rule in mathematics).
console.log(`Factorial of ${n} = ${factorial}`);

//5
console.log("Que 5");

let s = [12, 45, 67, 2, 89, 34];  // Example array
let largest = s[0];                // Assume first element is largest

for (let i = 1; i <s.length; i++) {
  if (s[i] > largest){            // Compare each element
    largest = s[i];                // Update if bigger
  }
}

console.log("Largest number = " , largest);

//Alternative of Que 5
console.log("Alternative of Que 5");

let ar=[2,5,10,4,2,7,1,9];
let largestt=0;
for(let i=0;i<=ar.length;i++){
    if(largestt<ar[i]){
        largestt=ar[i];
    }
}
console.log(largestt)


