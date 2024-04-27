
setTimeout(() => {
    console.log('inside set time out 0');

}, 0);
setTimeout(() => {
    console.log('inside set time out 80');

}, 80);
setTimeout(() => {
    console.log('inside set time out 400');

}, 400);
setTimeout(() => {
    console.log('inside set time out 1000');

}, 1000);

// fetch makes its own queue=>promise queue
// it has more priority  than the task queue of the callbacks when its work is finished then its code runs whatever is in the task queue no matter what but promise queue has the highest priority
let data = fetch('../basics')

console.log(data);

data.then((data) => data.json())
    .then((data) => console.log(data))

console.log('hi');
console.log('hi');
console.log('hi');
