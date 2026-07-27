// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans=two() + one();
//     console.log(ans);
// }

// three();


//Callback Hell
//Example 1 for asynchronous code

// h1=document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// };

// changeColor("red",1000,() => {
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//         changeColor("yellow",1000,()=>{
//             changeColor("blue",1000);
//         });
//         });
//     });
// });



//Example 2 for asynchronous code
// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10+1);
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// };

// savetoDb(
//     "apna college",()=>{
//         console.log("success");
//     savetoDb("hello world",()=>{
//         console.log("success 2");
//     savetoDb("hi",()=>{
//         console.log("success 3");
//     },()=>{
//         console.log("failure 3");
//     });   
//     },()=>{
//         console.log("failure 2");
//     });  
//     },()=>{
//         console.log("failure");
//     }
// );

//promise

function savetoDb(data){
    return new Promise((resolve,reject)=>{
    let internetSpeed=Math.floor(Math.random()*10+1);
    if(internetSpeed>4){
        resolve("sucess: data was saved");
    }else{
        reject("failure: weak connection");
    }
});
};

// savetoDb("Apna college");

//.then() and .catch() method

// let request=savetoDb("Apna college");
// request.then(()=>{
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//         console.log("promise was rejected");
//         console.log(request);

// })

//Or


// savetoDb("Apna college")
//  .then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//       console.log("promise was rejected");
// })        


//or main final one


savetoDb("Apna college")
 .then((result)=>{
     console.log("data1 saved");
     console.log(result);
     return savetoDb("hello world");
 })
 .then((result)=>{
     console.log("data2 saved");
     console.log(result);
     return savetoDb("hello");
 })   
 .then((result)=>{
     console.log("data3 saved");
     console.log(result);
 })    
.catch((error)=>{
       console.log("promise was rejected");
       console.log(error);
 })        



 ///example 2 for promises main one

 h1=document.querySelector("h1");

function changeColor(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color=color;
        resolve("color changed");
    }, delay);
});
}

changeColor("red",1000)
.then((result)=>{
    console.log("red color");
    return changeColor("orange",1000);
})
.then((result)=>{
    console.log("orange color");
    return changeColor("green",1000);
})
.then((result)=>{
    console.log("green color");
    return changeColor("blue",1000);
})
.then((result)=>{
    console.log("blue color");
});