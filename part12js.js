//Example 1 of async and await 


 h1=document.querySelector("h1");

function changeColor(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num=Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("promise rejected");
        }
        h1.style.color=color;
        console.log(`color changed to ${color}!`)
        resolve("color changed");
    }, delay);
});
}

async function demo(){
    try{
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("green",1000);
    changeColor("blue",1000);
    }catch(err){
        console.log(err);
    }
    let a=5;
    console.log(a+5);
}

demo();


//Example 2 of async and await 

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}


async function menu(){
    await getNum();
    await getNum();
    await getNum();
    getNum();

}

menu();

//JSON

let jsonRes='{"fact":"The most traveled cat is Hamlet, who escaped from his carrier while on a flight. He hid for seven weeks behind a panel on the airplane. By the time he was discovered, he had traveled nearly 373,000 miles (600,000 km).","length":217}'
let validRes=JSON.parse(jsonRes);
console.log(validRes.fact);

let student={
    name:"swetha",
    mark:95
};

console.log(JSON.stringify(student));


//First API request

let url="https://catfact.ninja/fact";
fetch(url)//give output in network
.then((res)=>{
console.log(res);//give some output but not the fact
return res.json();//give the output in json but not the fact
})

.then((data)=>{
    console.log(data.fact);//will give the fact
    return fetch(url);
})
.then((res)=>{
return res.json();
})

.then((data2)=>{
console.log(data2.fact);
})

.catch((err)=>{
    console.log(err);
});


//API request using async and await
// let urll="https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res1=await fetch(urll);
//         let data1=await res1.json();
//         console.log(data1);

//         let res2=await fetch(urll);
//         let data2=await res2.json();
//         console.log(data2);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// console.log(getFacts());