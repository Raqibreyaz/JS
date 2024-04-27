
let arr = [1, 2, 3];

// copying array
let z = [...arr]
z.pop()
console.log(z, arr);

let obj = {
    name: "raqib",
    age: 40,
    year: 2024
}

// destructuring object as well custimizing props
let obj1 = { ...obj, name: "amaan", age: 20 }

// console.log(obj1);

let { name, age } = { ...obj1 };

console.log(name, age);

z[-2] = 5;

z['name'] = 4;

for (const key in z) {
    console.log(key);

}

console.log(z);

// var is added to the window object
var a = 32;

// creating secons time overwrites the existing varibale
var a = 52;


// prototypal inheritance
const human = {
    canWalk: true,
    canHear: true,
    canSense: true
}

const raqib = {
    name: 'raqib',
    age: 25
}

raqib.__proto__ = human;

console.log(raqib);


// call apply and bind

function abcd(x,y,z){
    console.log(this,x,y,z);
    
}

var object ={
    name:'raqib'
}

let array = [3,2,1]

abcd.apply(object,array)

