console.log('these are promises');

let prom1 = new Promise((resolve, reject) => {
    let r = Math.random()

    // when number < 5 then it will reject
    if (r < 0.5) {
        reject();
    }
    else {
        setTimeout(() => {
            console.log("we are doing promises1")
            resolve("success");
        }, 2000);
    }
});
let prom2 = new Promise((resolve, reject) => {
    let r = Math.random()

    // when number < 5 then it will reject
    if (r < 0.5) {
        reject();
    }
    else {
        setTimeout(() => {
            console.log("we are doing promises2")
            resolve("success");
        }, 2000);
    }
});

// prom.then((a)=>{
// console.log('request successful')
// }).catch((err)=>{
//     console.log('site is under maintenance')
// })

// const p3 = Promise.any([prom1, prom2]);

// p3.then((result) => {
//     console.log(result);
// })


// const p3 = Promise.allSettled([prom1, prom2]);

// p3.then((result) => {
//     console.log(result);
// })


// const p3 = Promise.all([prom1, prom2]);

// p3.then((result) => {
//     console.log(result);
// })