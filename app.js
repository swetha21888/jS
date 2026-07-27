let a=5;
console.log("sum:",sum=a+a);
let b=1;
let c=2;
// console.log("The sum is:",(b+c),"Ruppess");
console.log(`The sum is ${b+c} Rupeess`);

// if-statement
let Color=prompt("Enter a color(Red,Yellow,Green):");
if(Color==="Red"){
    console.log("STOP");
}

if(Color==="Yellow"){
    console.log("Go SLOW");
}

if(Color==="Green"){
    console.log("GO");

    }
// else-if and else statement
    let size="XL";
    if(size==="XL"){
        console.log("Price is Rs 250");
    }
     else if(size==="L"){
        console.log("Price is Rs 200");
    }
     else if(size==="M"){
        console.log("Price is Rs 100");
    }
    else{
        console.log("Price is Rs 50");

    }

    // Nested if-else statement

    let marks=89;
    if(marks>=33){
          if(marks>=80){
            console.log("O");
          }
          else{
            console.log("A");
          } }
    else{
        console.log("Better luck next time!!");
    } 

    //Good string or Not.

    let string="apple";
    if((string[0]==="a")&&(string.length>3)){
        console.log("String is good.");
    }
    else{
        console.log("Not a Good String");
    }

    //switch statement

    let colorr="Yellow";
    switch(colorr){
        case "Red":
            console.log("Stop");
            break;
        case "Yellow":
            console.log("Go Slow");
            break;
        case "Green":
            console.log("Go");
            break;
        default:
            console.log("Broken light");
    }

    let day="5";
    switch(day){
        case "1":
            console.log("Monday");
            break;
        case "2":
            console.log("Tuesday");
            break;
        case "3":
            console.log("Wednesday");
            break;
        case "4":
            console.log("Thursday");
            break;
        case "5":
            console.log("Friday");
            break;
        case "6":
            console.log("Saturday");
            break;
        case "7":
            console.log("Sunday");
            break;
        default :
        conasole.log("Not a week");                            
    }
    //alerts and prompts
    let firstName=prompt("Enter your First Name.");
    let lastName=prompt("Enter your Last Name.");
    let msg=("Welcome!"+"Swetha"+" "+"B");
    print= alert(msg);