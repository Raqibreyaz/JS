
try {
    let age=prompt('enter your age');

    if(isNaN(age) || age<=0)
    throw new Error()

}catch(err){
    console.log('error found');
    console.log(err,"this is an invalid age")
}