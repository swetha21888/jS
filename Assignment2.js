//1
let num=1;
if(num%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}

//2
let Name=prompt("Enter your Name.");
let Age=prompt("Enter your Age.");
alert(`${Name} is ${Age} years old.`);

//3

let months=("Quarter 3");
switch(months){
    case "Quarter 1":
          console.log("January,February,March");
          break;
    case "Quarter 2":
          console.log("April,May,June");
          break;
    case "Quarter 3":
          console.log("July,August,September");
          break;
    case "Quarter 4":
          console.log("October,November,December");
          break;
    defualt:
          console.log("Not a month!!");

}

//4
let string="Applee";
if((string[0]=="A")||(string[0]=="a")&&(string.length>5)){
    console.log("Golden");
}
else{
console.log("not golden");
}

//5
let a=2;
let b=6;
let c=4;

if(a>b){
    if(a>c){
        console.log(a, "is largest");
    }
    else{
        console.log(c, "is largest");

    }}
 else{
    if(b>c){
        console.log(b, "is largest");
    }
    else{
        console.log(c, "is largest");
    }
 }   

// if(a>=b&&a>=c){
//     console.log(a,"is largest");
//     }
// else if(b>=a&&b>=c){
//     console.log(b,"is largest");
//     }
// else{
//     console.log(c,"is largest");
// }


//6 Remainder same or not for two numbers hum usse 10 se divide karenge.
let f=23452;
let g=45452;
if((f%10)==(g%10)){
 console.log("The last digits are same which is",g%10);
}
else{
    console.log("last digit is not same.")
}

