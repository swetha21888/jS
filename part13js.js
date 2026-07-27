// //Axios with Html

// // let btn= document.querySelector("button");
// // btn.addEventListener("click",async ()=>{
// //  let fact= await getFacts();
// // //  console.log(fact);
// //  let p=document.querySelector("p");
// //  p.innerText=fact;

// // })


// // let url="https://catfact.ninja/fact";
// //  async function getFacts(){
// //  try{
// //         let res1=await axios.get(url);
// //         return res1.data.fact;
// //     }
// //     catch(e){
// //         console.log(e);
// //         return "data not found";
// //     }
// // }

// // For image
// // let btn=document.querySelector("button");
// // btn.addEventListener("click",async()=>{
// //     let link= await getImg();
// //  let img=document.querySelector("img");
// //  img.setAttribute("src",link);
// // })

// // let url2="https://dog.ceo/api/breeds/image/random";
// // async function getImg(){
// //     try{
// //         let res =await axios.get(url2);
// //         return res.data.message;
// //     }
// //     catch(err){
// //         console.log(err);
// //         return "Image not found";
// //     }
// // }

// //Axios sending headers

// // let url="https://catfact.ninja/fact";


// // async function getHeaders(){
// //     try{
// //     const config={ headers: { Accept:"application/json"}};    
// //     let res= await axios.get(url,config);
// //     console.log(res.data);
// //     }catch(err){
// //         console.log(err);
// //     }
// // }

// // console.log(getHeaders());



// //Activity using Query string


let url2="http://universities.hipolabs.com/search?country=India";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let inp=document.querySelector("input")
    let state=inp.value.trim();
    let colleges= await getColleges();
    show (colleges,state);
})

  function show(colleges,state){
    let list=document.querySelector("#list");
    list.innerText="";
    for (col of colleges){
    if(col["state-province"] && col["state-province"].toLowerCase() === state.toLowerCase()) {// It gose inside the getcolleges() and finds all the colleges and the state of it then changes it into the lowercase and then converts my state to lowercase and compare both the states.
    let li=document.createElement("li");
    li.innerText = col.name + " - " + (col["state-province"]);
    list.appendChild(li);  
    }
 }
  }
async function getColleges(){
    try{
    let res= await axios.get(url2);
    return res.data;
}catch(error){
    console.log(error);
    return "Error";
}}

