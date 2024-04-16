let tl = gsap.timeline();

tl.from("nav h2",{
    y:-50,
    opacity:0,
    duration: .6,
});

tl.from(".nav-right",{
    y:-50,
    opacity:0,
    duration: .5,
});

tl.from(".main-imgs img",{
    opacity:0,
    scale:1.5,
    rotate: 45,
    duration: .8,
    stagger:1
});

tl.from(".big-text h1",{
    x:-100,
    opacity:0,
    delay:.3,
    duration:.8,
    stagger:.5
});

// gsap.to("img",{
//     // zIndex: 500,
//     stagger:1,
//     scale:1.3,
//     y:"-200%",
//     // rotate:-10,

    // scrollTrigger:{
    //     trigger:".container",
    //     scroller:"body",
    //     markers:true,
    //     start: "top 0",
    //     end: "top -100%",
    //     scrub:2,
    //     pin: true
    // }
// })
