console.log('fun begins here');

// make the box to move from initial position to final position
gsap.to('.box',{
    x:300,
    duration:2,
    delay:2,
    backgroundColor:"blue",
    rotate:360,
    scale:0.65,
    // repeat:-1,
    // animate alternately
    yoyo:true
}) 

// goes to the given position , color , scale instantly and then comes to its original position within the given duration following delay and rotation
// gsap.from('.box',{
//     x:700,
//     duration:2,
//     delay:2,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.65
// }) 

// gsap.to('h1',{
//     x:200,
//     duration:1.7,
//     delay:1.5,
//     backgroundColor:"yellow",
//     // the animation will be applied to every element with time differene of 0.4s
//     stagger:0.4,
//     repeat:-1
// })

// timeline makes the animation be applied synchronously such that every box will wait for the first completion of previous
var tl = gsap.timeline();

tl.to('.box>:nth-child(1)',{
    x:200,
    duration:1.7,
    delay:1.5,
    backgroundColor:"yellow",
    // the animation will be applied to every element with time differene of 0.4s
    stagger:0.4,
    // repeat:-1
})

tl.to('.box>:nth-child(2)',{
    x:200,
    duration:1.7,
    delay:1.5,
    backgroundColor:"yellow",
    // the animation will be applied to every element with time differene of 0.4s
    stagger:0.4,
    // repeat:-1
})