let div=document.getElementById("box");

div.addEventListener("click",()=>{
    alert("you were clicked");
    div.insertAdjacentHTML("afterend","<p>i am available</p>")

});

div.addEventListener("contextmenu",()=>{
    alert("dont right click please!")
})

let parent=document.querySelector(".container");
let child=document.querySelector(".childbox");
let _child=document.querySelector(".child");

// parent.addEventListener("click",()=>{
//     alert("parent is called");
// });
// child.addEventListener("click",()=>{
//     alert("child is called");
// });
// _child.addEventListener("click",()=>{
//     alert("g-child is called");
//     _child.insertAdjacentHTML("afterend","<p>i am available</p>")
// });

let x=setTimeout(() => {
    alert("hi,welcome!")
    document.body.style.backgroundColor="red"
}, 2000);

x();
