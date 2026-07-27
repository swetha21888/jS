//Guess the random number
console.log("Guess the random number");

let max=prompt("Enter the max number");
if(max=="quit"){
    console.log("User quit");
    }
else{    
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the Number");
while(true){
        if(guess=="quit"){
        console.log("User quit");
        break;
        }
    if(guess==random){
        console.log("You are right! Congrats!! The random number was",random);
        break;
        }
    else if(guess<random){
        guess=prompt("Hint: Your guess was too small.Please try again");
        }   
    else{
        guess=prompt("Hint: Your guess was too large.Please try again");
        } 
}
}
