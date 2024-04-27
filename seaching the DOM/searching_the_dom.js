// getting elements in an array by their class name
// let boxes=document.getElementsByClassName("box");

// console.log(boxes);

// change the background color of the 2 box
// boxes[2].style.backgroundColor="red"

// getting element its id
// let element=document.getElementById("id");

// getting all elements by query selector
let all=document.querySelectorAll(".box") ;

for (const tags of all) {
    console.log(tags);
}