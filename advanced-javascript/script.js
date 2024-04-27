async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("wait bro!");
        }, 1000)
    })
}

function sum(a, b, c) {
    return a + b + c;
}

(async function main() {

    // we have used z before declaring as it is a var so it will not give any error
    console.log(z);

    // let x = await sleep();
    // console.log(x);

    // let y= await sleep();
    // console.log(y);


    // x and y will be assigned correspondingly
    // let [p,q]=[2,3];

    // // rest will be assinged the rest of elements after a and b
    // let [a,b,...rest]=[2,3,4,5,6,7];

    // console.log(p,q);
    // console.log(a,b,rest);

    // let obj={
    //     a:1,
    //     b:2,
    //     c:3
    // }

    // let {j,k}=obj;
    // console.log(j,k);

    let arr = [7, 2, 1];

    // will map indices with values
    const object = { ...arr };
    console.log(object);

    // console.log(sum[0],sum[1],sum[2]);
    // console.log(sum(...arr));

    // we have declared the function after the use but still it works but it cant works in case of arrow function of const and let 
    console.log(multiply(2, 3));

    var z = 23;
})()

console.log(z);

function multiply(a, b) {
    return a * b;
}
