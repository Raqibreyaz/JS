let obj={
    name:"raqib",
    job:"web developer",
    company:"raqib reyaz "
};



for (const key in obj) {
 
    console.log(key);
}

// useful in arrays and strings 
// not valid in objects
for (const iterator of "raqib") {
    
    console.log(iterator)
}
