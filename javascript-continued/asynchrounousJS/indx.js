console.log('game begins now');

// console.log('raqib');

// setTimeout(() => {
//     console.log('hi everyone');    
// }, 3000);

// console.log('reyaz');

// in the above example the settime out function wroks asyncronously and executes in the last
// but if you want it to go one by one then we can use the next code in the set time out callback


// in this example we wanted to run the setime out one by one but the next one is running first
// console.log('raqib');

// setTimeout(() => {
//     console.log('hi everyone');
//     console.log('reyaz');

// }, 3000);

// setTimeout(() => {
//     console.log('hey7');

// }, 1000);

// so use the setime out in the first set time out

// so we implemented what we want but this is not  a good practice imagine if we have a thousand lines of code and
// using this approach makes the code difficult to be managed
// setTimeout(() => {
//         console.log('hi everyone');
//         console.log('reyaz');

//         setTimeout(() => {
//             console.log('hey7');

//         }, 1000);
//     }, 3000);

// so instead of this we use promises

const fn = (data, time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('hey', data);
            return res();
        }, time)
    }
    )
}


fn("1", 1000).then(() => {

    fn("2", 800).then(() => {

        fn("3", 2000).then(() => {

        }
        )
    }
    )
}
)

const obj = {
    name: 'raqib',
    "full name": "raqib reyaz"
}

console.log(obj);

obj.greeting = function () {
    console.log(`hello js user , ${this.name}`);

}

// bracket technique is only used to access not to add
// obj[greetingTwo] = function (params) {

    
    // console.log(obj);
    
    // obj.greeting();
    
    // const newObj = new Object();
    
    // newObj.name = 'amaan';
    
    // const obj3 = Object.assign({}, obj, newObj);
    
    // console.log('\n', obj3, '\n', obj, '\n', newObj);
    
    console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// }

// descriptor.writable = false;
// descriptor.enumerable = false;

// making the name property of the obj as immutable and non-iterable
Object.defineProperty(obj,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

obj.name ='ayush'

console.log(obj.name);

console.log(Math);


console.log(Object.getOwnPropertyDescriptor(Math,'PI'))

Object.defineProperty(Math,'PI',{
    // writable:true,
    // value:3.44
})

console.log(Object.getOwnPropertyDescriptor(Math,'PI'))


