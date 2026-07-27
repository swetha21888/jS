let password=prompt("enter the password");
password=password.trim();//trim method
console.log(password);

//method chaining

// let msg="      hello     ";
// let msgName=msg.trim();
// console.log(msgName);
// msgName=msgName.toUpperCase();
// console.log(msgName);

let msg="      hello     ";
let msgName=msg.trim().toUpperCase();
console.log(msgName);

//slice
let Name="Ilovecoding";
name=Name.slice(1,4);
console.log(name);
nameA=Name.slice(1,5);
console.log(nameA);
nameB=Name.slice(5);
console.log(nameB);
nameC=Name.slice(5,Name.length);
console.log(nameC);
nameD=Name.slice(-3);
console.log(nameD);
nameE=Name.slice(-3,-1);
console.log(nameE);

//repeat
let fruit="Mango";
fruit=fruit.repeat(3);
console.log(fruit);

//replace
let Mango="Mangolover";
Mangoo=Mango.replace("lover","hater");
console.log(Mangoo);
Mango=Mango.replace("o","i");
console.log(Mango);

//practice 9th

// 1

let swe="help!";
swe=swe.trim().toUpperCase();
console.log(swe);

//2
let tha="ApnaCollege";
thaa=tha.indexOf("na");
console.log(thaa);

//3
let B="ApnaCollege";
B=B.slice(4).replace("l","t");
console.log(B);
//

//4
let c="ApnaCollege";
c=c.slice(4).replace("l","t").replace("l","t");
console.log(c);

//Array

let students=["Subhi","Raj","priya"];
console.log(students);
console.log(students[1]);

let info=["aman",23,45.9];
console.log(info[0][0]);
console.log(info[0].length);

//array mutable

let fruits=["apple","banana","orange"];
fruits[0]="Mango";
console.log(fruits);
fruits[10]="cherry";
console.log(fruits);
console.log(fruits.length);

//array Methods

cars=["bmw","maruthi","audi"];
console.log(cars);
cars.push("toyota");//push
console.log(cars);
console.log(cars.pop());//pop
console.log(cars);
cars.unshift("apple");//unshift
console.log(cars);
console.log(cars.shift());//shift
console.log(cars);

//shift
let followers=["a","b","c"];
let blocked=followers.shift();
console.log(followers);
console.log(blocked);

//practice 10

let start=["january","july","march","august"];
console.log(start);
console.log(start.shift());
console.log(start);
console.log(start.shift());
console.log(start);
start.unshift("june");
console.log(start);
start.unshift("july");
console.log(start);

//slice in array

let colors=["red","yellow","blue","orange","pink","white"];
colorss=colors.slice(-3,colors.length);
 console.log(colorss);

 //splice in array
  
 let parts=["nose","head","hand","ears","fingers","legs"];
 console.log(parts);
 parts.splice(3);
 console.log(parts);
 parts.splice(1,1);
 console.log(parts);
 parts.splice(1,0,"heart","fingers","nails");
 console.log(parts);
 parts.splice(1,1,"mango","grapes","pineapple");
 console.log(parts);

 //practice 11

 //1
let months=["january","july","march","august"];
// months.splice(0,1);
months.splice(0,2,"july","june");
console.log(months);
// months.splice(1,0,"june");
// console.log(months);

//2
let amma=["c","c++","html","javascript","python","java","c#","sql"];
// amma.reverse();
// console.log(amma);
// index=amma.indexOf("javascript");
// console.log(index);
ammma=amma.reverse().indexOf("javascript");
console.log(ammma);

//practice 12
//1

let tic=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(tic);
console.log(tic[0]);
console.log(tic[1]);
console.log(tic[2]);
console.log(tic[0][1]);
tic[0][1]="O";
console.log(tic);