
let p=Math.random()*100;

alert(p);

let x = prompt("enter a number");
let op=prompt("enter operation");
let y = prompt("enter a number");

const obj={
    "+":"-",
    "*":"+",
    "/":"**",
    "-":"/"
};



if(p <= 10){
  alert(eval(`${x} ${obj[op]} ${y}`));
}
else
alert(eval(`${x} ${op} ${y}`));
