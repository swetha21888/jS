//1

let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(0,n);//slice(start,end)
console.log(ans);

//2

let array=[7,9,0,-2];
let m=3;
let anss=array.slice(array.length-m);//slice(4-3),slice(1)therefore(7,9,0) 
console.log(anss);

//3
let string=prompt("please enter a string");
if(string.length==0){
    console.log("string is blank");
}
else{
       console.log("string is not blank");
 
}

//4

let cha="charAcTer";
let idx=3;//or else we can also use (cha[idx]>="a"&&cha[idx]<="z")
if(cha[idx]==cha[idx].toLowerCase()){//suppose if we take idx=4 "A".toLowerCase()becomes "a" hence the condition becomes "A"=="a" false and prints not lowercase.
    console.log("character is lowercase");
}
else{
    console.log("character is not lowercase");
}

//OR

let chaa="ChaRacTer";
let idxx=2;
if(chaa[idxx]>="a"&&chaa[idxx]<="z"){
    console.log("lowercase");
}
else{
    console.log("Not lowercase");
}
//5
let strtrim="  Helloworld  ";
if(strtrim=strtrim.trim()){
    console.log("no space");
    console.log(strtrim);
}
else{
    console.log("space");
}

//OR

let stringg=prompt("enter a string");
console.log(`The original string is = ${stringg}`);
console.log(`The string with no space = ${stringg.trim()}`);


//6

let arrays=["hello",'a',23,64,99,-6];
let item= -6;      
if(arrays.indexOf(item)!=-1){
    console.log("element exists in array");
}else
    {console.log("element doesn't exist in array");
}

//OR

let arrayss = ["hello", 'a', 23, 64, 99, -6];
let items=99;//for numbers the prompt will not work cause the prompt take a string value.
if (arrayss.includes(items)) {
    console.log("element exists in array");
} else {
    console.log("element doesn't exist in array");
}
//OR

let arraysss=["hello",'a',23,64,99,-6];
let itemsss= "o";       
if(arraysss.indexOf(itemsss)==-1){
    console.log("element doesn't exists in array");
}else
    {console.log("element exist in array");
}


