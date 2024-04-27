async function getdata() {

    let r = 1000 * (Math.floor(Math.random() * 7) + 1);
    let elem = document.body.lastElementChild.lastElementChild;

    let interval = setInterval(() => {

        if (elem.innerHTML.endsWith("..."))
            elem.innerHTML = elem.innerHTML.slice(0, elem.innerHTML.length-2);

            else
            elem.innerHTML = elem.innerHTML + ".";

    }, 400);

  
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
           
            resolve()
            clearInterval(interval);
        }, r);
    })
   
    return prom;
}

async function reciever() {

    let arr = ['Initializing Hacking', 'Reading your Files', 'Password files Detected', 'Sending all Passwords and Personal Files to Server', 'Cleaning Up'];

    let body = document.body;

    for (const str of arr) {
        body.insertAdjacentHTML('beforeend', `<div><span>${str}</span></div>`);
  
        const prom = await getdata();
    }

}

reciever();