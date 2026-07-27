//Largest number using Reduce
console.log("Largest number using Reduce");

let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result = nums.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});

console.log(result);

//Practice 22

console.log("Practice 22 Que 1");
let array=[20,30,40,40,50];
let res=array.every((ell)=>{
    if(ell%10===0){
        return true;
    }
    else{
        return false;
    }
});
console.log(res);


//OR

console.log("Practice 22 Alternative Que 1");
let arra=[20,30,4,40,50];
let re=arra.every((e)=>e%10===0);
console.log(re);


//Practice 22 Que 2

console.log("Practice 22 Que 2");
let numss = [2, 3, 4, 1, 2,0];

let resultt = numss.reduce((min, a) => {
    if (a > min) {
        return min;
    } else {
        return a;
    }
});

console.log(resultt);

//Practice 22 Que 2 using function
console.log("Practice 22 Que 2 using function");

function getMin(nus){
    let numsss = [2, 3, 4, -1, 2,0];
    let resulttt = numsss.reduce((minn, b) => {
    if (b > minn) {
        return minn;
    } else {
        return b;
    }
});
return resulttt;
}

console.log(getMin());

