console.log("raqib is a hacker")
console.log("amaan is a hacker")

setTimeout(() => {
  console.log("hi this is raqib")
}, 2000)

console.log("welcome to my web page")

function fn() {
  console.log("hi this is another callback function");
}

function callback(arg, fn) {
  console.log(arg);
  fn();
}


const loadscript = (scr, callback) => {

  let sc = document.createElement("script")

  sc.src = scr;

  sc.onload = callback("12345", fn);

  document.head.append(sc)

}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

