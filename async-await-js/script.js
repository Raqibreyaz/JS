// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data given');

//             resolve("done");
//         }, 3000);
//     })
// }

async function getData() {
  
    // simulate getting data from server
    let data =await fetch('https://jsonplaceholder.typicode.com/todos/1')

    // parsing data into js object as data is in chunks
    data = await data.json();

    return data;
}

console.log("loading modules")

// let data=getData();

// // data.then((result)=>{
// //     console.log(result);
// //     console.log('processing data');
// // })


// Example POST method implementation:
async function postData(url = "", data = {}) {
 
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }
  
  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data); 
  });

async function main() {

    console.log('getting data');

    let data = await getData();

    console.log(data);

    console.log('processing data');
}
main();