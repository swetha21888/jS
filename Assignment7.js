
//Que 1

console.log("Que 1");

let arr=[1,2,6];
const arrayAverage=(arr)=>{
    let total=0;
    for(let number of arr){
        total=total+number;
    }
    return total/arr.length;
};

console.log(arrayAverage(arr));

//Que 2

console.log("Que 2");

const isEven=(n)=>{
    if(n%2==0){
        return "even";
    }else{
        return "odd";
    }
};

console.log(isEven(4));

//Que 2 Alternative 1

console.log("Que 2 Alternative 1");
let num=4;
const isEvenn=(num)=>num%2==0;
console.log(isEvenn(num));//gives true or false

//Que 2 Alternative 2

console.log("Que 2 Alternative 2");
const isEvennn = (number) => {
  return number % 2 === 0;
};

// Example:
console.log(isEvennn(4)); // true (because 4 is even)
console.log(isEvennn(7)); // false (because 7 is odd)

//Que 3

console.log("Que 3");
const object={
    message:'Hello,World!',
    logMessage(){//Parentheses = “Run now."()"" works like button if not given will print the whole statement inside the logMessage ”
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);//No parentheses = “Give the function as a gift to someone else (like timer) to run later.”




//Ouput 
//After a delay of 1 second,undefined is logged to the console.
// Explaination:
//Think of object.logMessage as a toy that belongs to the object box.
//If the box plays with it, it says "Hello,World!".
//But if you take the toy out and give it to the timer (setTimeout), the toy forgets its owner.
//Now it looks around and says "undefined" because it doesn’t know where the message is.


//Que 4

console.log("Que 4");
let length=4;
function callback(){
    console.log(this.length);//global,therfore the value of window.length=0,this=window.
}
const objectt={
    length:5,
    method(callback){
    callback();
},
};
objectt.method(callback,1,2);//it calls the normal above callback

//output
//So the out is 0, since the above callback function output is 0.