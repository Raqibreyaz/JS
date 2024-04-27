console.log('javascript begins here');

function locomotiveAnimation() {

    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotiveAnimation();

function navAnimation() {


    // gsap.to('header',{
    //     height:'8vh',
    //     duration:2,
    //     scrollTrigger:{
    //         trigger:'header',
    //         scroller:'main',
    //         scrub:true
    //     }
    // })

    let navheads = document.querySelector('.nav-heads');

    navheads.addEventListener('mouseenter', (e) => {
        let tl = gsap.timeline();

        tl.to('.nav-bottom', {
            height: '13vw',
        })
        tl.to('.nav-elem h4', {
            display: 'block',

        })
        tl.to('.nav-elem h4 span', {
            y: 0,
            // stagger: {
            //     amount: 0.1
            // },
            duration: 0.2,
        })
    }
    )

    navheads.addEventListener('mouseleave', (e) => {
        let tl = gsap.timeline();

        tl.to('.nav-elem h4 span', {
            y: 20,
            // stagger: {
            //     amount: 0.1
            // }
        })

        tl.to('.nav-elem h4', {
            display: 'none',
            duration: 0.1
        })
        tl.to('.nav-bottom', {
            height: '0',
            duration: 0.2
        })
    }
    )
}
navAnimation();

function loadingAnimation() {

    let tl = gsap.timeline();
    tl.from('.page1', {
        opacity: 0,
        duration: 0.3,
        delay: 0.2
    })
    tl.from('.page1', {
        transform: 'scaleX(60%) scaleY(20%) translateY(90%)',
        borderRadius: '10vmin',
        duration: 1,
        ease: 'expo.out'
    })

    tl.from('header', {
        opacity: 0,
        duration: 1,
        // transform:"translateY(90%)"
    })

    tl.from('.page1 h1,.page1 div', {
        transform: 'translateY(40%)',
        opacity: 0,
        duration: 0.4,
        stagger: 0.2
    })
}

// loadingAnimation();

function page2Animation(params) {

    let ques = document.querySelectorAll('.ques-side>*');

    ques.forEach(que => {
        que.addEventListener('mouseenter', (e) => {
            console.log(que.children[0].clientWidth);

            gsap.to(que.children[0], {
                scale: 1,
            })
        }
        )
        que.addEventListener('mouseleave', (e) => {

            gsap.to(que.children[0], {
                scale: 0
            })
        }
        )
        que.addEventListener('mousemove', (e) => {
            gsap.to(que.children[0], {
                x: (e.x - que.getBoundingClientRect().x - 2 * que.children[0].clientWidth / 3),
                y: (e.y - que.getBoundingClientRect().y - 2 * que.children[0].clientWidth / 3)
            })
        }
        )
    });

}

page2Animation();

function page3Animation() {

    let page3Video = document.querySelector('.page3 video');

    document.querySelector('.page3-center').addEventListener('click', (e) => {

        let tl = gsap.timeline();

        tl.to(page3Video, {
            opacity: 1,
            transform: 'scaleX(0.5) scaleY(0.3)',
            duration: 0.4,
            borderRadius: '2vmax'
        })

        tl.to(page3Video, {
            transform: 'scaleX(1) scaleY(1)',
            borderRadius: 0
        })

        page3Video.play();
    }
    )

    page3Video.addEventListener('click', (e) => {
        e.target.pause();
        gsap.to(page3Video, {
            opacity: 0,
            duration: 1,
            transform: 'scaleX(0.5) scaleY(0)',
            borderRadius: ' 2vmax'
        })
    }
    )
}
page3Animation();

function page5Animation() {

    let divs = document.querySelectorAll('.division>div');

    console.log(divs);

    divs.forEach((div) => {

        div.addEventListener('mouseenter', (e) => {

            let video = div.children[0];

            gsap.to(video, {
                opacity: 1,
            })
            video.play();
        }
        )



        div.addEventListener('mousemove', (e) => {

            gsap.to(div.children[2], {
                scale: 1,
                x: (e.x - div.getBoundingClientRect().x - (div.children[2].clientWidth / 2)),
                y: (e.y - div.getBoundingClientRect().y - (div.children[2].clientHeight / 2)),
            })

        }
        )

        div.addEventListener('mouseleave', (e) => {

            gsap.to(div.children[2], {
                scale: 0,
            })

            let video = div.children[0];

            gsap.to(video, {
                opacity: 0,
            })
            video.load();
        }
        )
    }
    )

    let sections = document.querySelectorAll('.last-main-section>section');

    sections.forEach((section) => {

        let imageSection = section.children[2];

        imageSection.addEventListener('mouseenter', (e) => {
            gsap.to(imageSection.children[0], {
                opacity: 0
            })
            gsap.to(imageSection.children[1], {
                opacity: 1,
            })

            imageSection.children[1].play();

            gsap.to(section.children[1], {
                opacity: 0,
                duration: 0.9
            })

            gsap.to(imageSection.children[1], {
                height:'150%',
                duration: 1
            })
        }
        )

        imageSection.addEventListener('mouseleave', (e) => {
            gsap.to(imageSection.children[0], {
                opacity: 1
            })
            gsap.to(imageSection.children[1], {
                opacity: 0,
            })

            imageSection.children[1].load();

            gsap.to(imageSection.children[1], {
            height:'100%',
                duration: 2
            })

            gsap.to(section.children[1], {
                opacity: 1,
                duration: 3
            })


        }
        )
    }
    )


}
page5Animation();

function page6Animation() {


    // let event = false;

    // let designPages = document.querySelectorAll('.design-page');

    // designPages.forEach(designPage => {
    //     let i = designPage.querySelector('i');
    //     let designBoxes = designPage.querySelectorAll('.design-box');

    //     console.log(i);
    //     console.log(designBoxes);

    //     i.addEventListener('click',(e) => {
    //         gsap.to(designPage.children[2],{
    //             display:'none',
    //             duration:0.3,
    //         })
    //     }
    //     )

    // });

    let designBoxes = document.querySelectorAll('.design-box');

    designBoxes.forEach(box => {

        box.addEventListener('mouseenter', (e) => {

            gsap.to(box, {
                borderTop: '1px solid white'
            })

            gsap.to(box.children[0], {
                height: '100%',
                backgroundColor: 'rgb(78, 75, 75,0.35)',
                duration: 0.4
            })

        })

        box.addEventListener('mouseleave', (e) => {

            gsap.to(box, {
                borderTop: '1px solid rgb(78, 75, 75)'
            })

            gsap.to(box.children[0], {
                backgroundColor: '',
                height: '0%',
                duration: 0.4
            })


        })
    })


}
page6Animation();

function page7Animation() {

    gsap.from('.one-footer-box>div', {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.one-footer-box>div',
            scroller: 'main',
            start: 'top 90%',
            end: 'top -90%',
            scrub: true
        }
    })
}
page7Animation();

// navheads.addEventListener('mouseleave', function (e) {

//     let tl = gsap.timeline();

//     tl.to(".nav-elem h4 span", {
//         y: 25,
//         stagger:{
//             amount:0.2
//         }
//     })
//     tl.to('.nav-elem h4', {
//         display: 'none',
//         // duration: 0.1,
//         // stagger:0.1,
//     })
//     tl.to("header .nav-bottom", {
//         height: '0vh',
//         // duration: 0.2,
//     })

// })

// nav.addEventListener("mouseenter", function () {
//     let tl = gsap.timeline()

//     tl.to("#nav-bottom", {
//         height: "21vh",
//         duration: 0.5
//     })
//     tl.to(".nav-part2 h5", {
//         display: "block",
//         duration: 0.1

//     })
//     tl.to(".nav-part2 h5 span", {
//         y: 0,
//         // duration:0.3,
//         stagger: {
//             amount: 0.5
//         }
//     })
// })
// nav.addEventListener("mouseleave", function () {
//     let tl = gsap.timeline()
//     tl.to(".nav-part2 h5 span", {
//         y: 25,
//         stagger: {
//             amount: 0.2
//         }
//     })
//     tl.to(".nav-part2 h5", {
//         display: "none",
//         duration: 0.1
//     })
//     tl.to("#nav-bottom", {
//         height: 0,
//         duration: 0.2
//     })
// })