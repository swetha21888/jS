let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});

ul.addEventListener("click",function(event){//due to bubbling event
    //console.log(event.target.nodeName);//which as triggered to print for that we use event.target
if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();

}
});


//this will be applied only for the exsisting button
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//        let par=delBtn.parentElement;//to select the parent. 
//        par.remove();
//     })
// }