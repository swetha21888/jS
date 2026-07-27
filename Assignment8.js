//Que 1
console.log("Que 1");

let arr=[1,2,3,4,5];

const squares=arr.map((num)=>num*num);//map
console.log(squares);

let sum = squares.reduce((total,el)=>total+el,0);//reduce
console.log(sum);

let average = sum/arr.length;
console.log(average);

//Que 2
console.log("Que 2");

let array=[1,2,3];
let newArray=array.map(plus=>plus+ 5);
console.log(newArray);


//Que 3
console.log("Que 3");

let str=["apple","orange","banana"];
console.log(newStr=str.map((str)=>str.toUpperCase()));

//Que 4
console.log("Que 4");


function double(arr,...args){
    let doubledArgs=args.map(double=>double*2);
    return [...arr,...doubledArgs];
}

console.log((double)([1,2,3],2,3));



//Que 4 Alternative
console.log("Que 4 Alternative");

const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,...args.map((v)=>v*2),
];

console.log(doubleAndReturnArgs([1],2,3));

//Que 5
console.log("Que 5");

let firstObj={a:1,b:2};
let secondObj={c:3,d:4};
function mergeObjects(firstObj,secondObj){
return {...firstObj,...secondObj};
}
console.log(mergeObjects(firstObj,secondObj));


//Que 5 Alternative
console.log("Que 5 Alternative");

const mergeObjectss=(obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObjectss({a:1,b:2},{c:3,d:4}));
