let cursor = document.querySelector('.cursor');
let blur = document.querySelector('.cursor-blur');

document.addEventListener('mousemove', (event) => {
    cursor.style.left = (event.x - (cursor.offsetWidth / 2)) + 'px'
    cursor.style.top = (event.y - (cursor.offsetHeight / 2)) + 'px'
    blur.style.left = (event.x - (blur.offsetWidth / 2)) + 'px'
    blur.style.top = (event.y - (blur.offsetHeight / 2)) + 'px'

}
)

let h4s = document.querySelectorAll('#nav h4');
console.log(h4s);


h4s.forEach(element => {
    element.addEventListener("mouseenter", () => {
        cursor.style.scale = 3
        cursor.style.backgroundColor = 'transparent';
        cursor.style.border = '1px solid white'
    }
    )
})
for (const h4 of h4s) {
    h4.addEventListener('mouseleave', () => {
        cursor.style.scale = 1
        cursor.style.backgroundColor = '#96C11E';
        cursor.style.border = ''
    }
    )
}

gsap.to("#nav", {
    backgroundColor: '#000',
    duration: 0.5,
    // height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from(".about-us > img,.about-us-in", {
    y: 500,
    opacity: 0,
    duration: 2,
    stagger: 1,
    stagger:0.7,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 3
    }
})

gsap.from(".image-container>div", {
    // scale up from  75%
    scale: 0.75,
    // will happen in 1s
    duration: 1,
    // initially opacity will be 0
    opacity:0,
    scrollTrigger: {
        // animation will be triggered when we hit the elemnt
        trigger: ".image-container>div",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 2
    }
})

gsap.from("#left-quote",{
    x:-70,
    y:-10,
    scrollTrigger:{
        trigger:"#left-quote",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:4
    }
})

gsap.from("#right-quote",{
    x:60,
    y:60,
    scrollTrigger:{
        trigger:"#right-quote",
        scroller:"body",
        start:"top 100%",
        end:"top 75%",
        scrub:4
    }
})

gsap.from(".page4 h1",{
    y:80,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 100%",
        end:"top 95%",
        scrub:3
    }
})
