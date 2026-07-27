let todo=[];
let req=prompt("Please enter your request");
while(true){
    if(req=="quit"){
    console.log("Quitting App");
    break;
    }
if(req=="add"){
    let task=prompt("Please enter the task you want to add");
    todo.push(task);
    console.log("task added");
}
else if(req=="list"){
    console.log("_________");
for(let i=0;i<todo.length;i++){
    console.log(i,todo[i]);
    } 
    console.log("_________");
    }
else if(req=="delete"){
    let idx=prompt("Please enter the task index");
    todo.splice(idx,1);
    console.log("1 task deleted");
}
else{
    console.log("Wrong request");
}
req=prompt("Please enter your request");
}
