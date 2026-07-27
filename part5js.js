 let student = {
    name:"swetha",
    marks:94
};
console.log(student);
console.log(student["marks"]);
console.log(student.marks);

let score="marks";
console.log(student[score]);//can be used after storing into variable.
//console.log(student.score);//how ever not possible in student.score.

const obj={
    1:"a",
    2:"b",
    null:"c",
    undefined:"d"
};

console.log(obj["1"]);
//console.log(obj.1); This won't work for numbers
console.log(obj["undefined"]);
console.log(obj.undefined);

//Add and update value
console.log("Add and update and delete value");
const stud={
    name:"swetha",
    age:23,
    marks:94.4,
    city:"Delhi"
};
console.log(stud);
stud.gender="female";//Add
console.log(stud);
stud.city="Mumbai";//update
console.log(stud);
stud.marks="A"//num-string
console.log(stud);
stud.marks=[[90,"A"],[99,"A+"]];//Adding multiple arrays
console.log(stud);
delete stud.marks[0][0];//delete
console.log(stud);

//Nested objects
console.log("Nested object");

const infoStud={
    karan:{
    grade:"A",
    city:"pune"
},

    swetha:{
        grade:"A+",
        city:"Hyderabad"
    }
};
console.log(infoStud);
console.log(infoStud.karan.grade);

//Array of objects
console.log("Array of objects");


const infoStu=[
    {
    name:"Swetha",
    grade:"A",
    city:"pune"
    },

    {
    name: "Raj",
    grade:"A+",
    city:"Hyderabad"
    }
];
console.log(infoStu);
console.log(infoStu[0].name);

//Random Integers 1 to 10
console.log("Random Integers 1 to 10");
let num=Math.random();
console.log(num);
num=num*10;
console.log(num);
num=Math.floor(num);
console.log(num);
num=num+1;
console.log(num);

//Alternative method
console.log("Random Integers 1 to 10 Alternative method");
numm=Math.floor(Math.random()*10)+1;
console.log(numm);

//Practice 13
//1
console.log("Practice 13");

console.log("Question 1");
console.log("Random Integers 1 to 100");

a=Math.floor(Math.random()*100)+1;
console.log(a);

//2
console.log("Question 2");
console.log("Random Integers 1 to 5");

b=Math.floor(Math.random()*5)+1;
console.log(b);

//for 21-25 range
console.log("Random Integers 21 to 25");

c=Math.floor(Math.random()*5)+21;
console.log(c);

