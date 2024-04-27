
function animateBox(box) {
    gsap.from(box, {
        scale: 0,
        duration: 1.4,
        rotate: 360,
        scrollTrigger: {
            trigger: box,
            scroller: 'body',
            markers: true,
            // the scroller start will be 60% FROM The top
            // actually the animation always triggers when the scroller start is passed but the start
            start: 'top 60%',
            end: 'top 30%',
            //responsible for directing the animation like reverse scrolling make the animation to run reverse and makes the animation smooth as per scolling basis
            scrub: 2
        }
    })
}

animateBox('.page1 .box')
animateBox('.page2 .box')
animateBox('.page3 .box')

let a= 5;
const b = 7

var a1 = 4;