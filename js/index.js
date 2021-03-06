let steps = document.querySelectorAll('.home-products__item');

for(let i = 0; i < steps.length; i+=1) {
    let step = steps[i];
    let number = step.querySelector('.home-products__item-img-step');
    let logo = step.querySelector('.home-products__item-img-logo');

    let tl1 = new TimelineMax();
    const controller1 = new ScrollMagic.Controller();

    tl1.to(number, 1, { y: -275, opacity: .9 });
    tl1.to(logo, 2, { y: -50 }, "-=1");

    const scene1 = new ScrollMagic.Scene({
        triggerElement: step,
        triggerHook: .7, //between 0 an 1
        duration: '100%'
    })
        // .setPin('.image-group__container')
        .setTween(tl1)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller1);

}

// Designs

let screens = document.querySelectorAll('.image-group__image');

for(let i = 0; i < screens.length; i+=1) {
    let screen = screens[i];
    let tl2 = new TimelineMax();
    const controller2 = new ScrollMagic.Controller();

    tl2.from(screen, 1, { y: 50, opacity: 0, ease: Linear.easeNone });

    const scene1 = new ScrollMagic.Scene({
        triggerElement: screen,
        triggerHook: 1, //between 0 an 1
        duration: '35%'
    })
        // .setPin('.image-group__container')
        .setTween(tl2)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller2);
}


// Case Studies

let studies = document.querySelectorAll('.case-studies__item');

for (let i = 0; i < studies.length; i += 1) {
    let study = studies[i];
    let tl3 = new TimelineMax();
    const controller3 = new ScrollMagic.Controller();

    tl3.from(study, 1, { y: 50, opacity: 0, ease: Linear.easeNone });

    const scene3 = new ScrollMagic.Scene({
        triggerElement: study,
        triggerHook: 1, //between 0 an 1
        duration: '35%'
    })
        // .setPin('.image-group__container')
        .setTween(tl3)
        // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
        .addTo(controller3);
}

// Industries

tl4 = new TimelineMax();
const controller4 = new ScrollMagic.Controller();

tl4.from('.home-industries__item--1', 1, { y: 50, opacity: 0 });
tl4.from('.home-industries__item--2', 1, { y: 50, opacity: 0 });
tl4.from('.home-industries__item--3', 1, { y: 50, opacity: 0 });
tl4.from('.home-industries__item--4', 1, { y: 50, opacity: 0 });


const scene4 = new ScrollMagic.Scene({
    triggerElement: '.home-industries__items',
    triggerHook: .85, //between 0 an 1
    duration: '30%'
})
    // .setPin('.image-group__container')
    .setTween(tl4)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller4);


// // Growth Accelerators

// tl5 = new TimelineMax();
// const controller5 = new ScrollMagic.Controller();

// tl5.from('.home-growth__icon', 1, { rotationY: 360 });


// const scene5 = new ScrollMagic.Scene({
//     triggerElement: '.home-growth',
//     triggerHook: .8, //between 0 an 1
//     duration: '50%'
// })
//     // .setPin('.image-group__container')
//     .setTween(tl5)
//     // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
//     .addTo(controller5);


if ($(window).width() >= 568) {
tl5 = new TimelineMax({ onUpdate: onUpdate });
const controller = new ScrollMagic.Controller();

tl5.to('.home-growth-image-group__image--5', 1, { rotationY: 360, y: -110 });
tl5.to('.home-growth-image-group__image--1', 1, { x: -260, y: -170, opacity: 1 });
tl5.to('.home-growth-image-group__image--2', 1, { x: 50, y: -170, opacity: 1 }, "-=1");
tl5.to('.home-growth-image-group__image--3', 1, { x: -260, y: 90, opacity: 1 }, "-=1");
tl5.to('.home-growth-image-group__image--4', 1, { x: 50, y: 90, opacity: 1 }, "-=1");

const scene5 = new ScrollMagic.Scene({
    triggerElement: '.home-growth-image-group',
    triggerHook: .7, //between 0 an 1
    duration: '30%'
})
    // .setPin('.social-reputation__image-group--1')
    .setTween(tl5)
    // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
    .addTo(controller);

function onUpdate() {
    //tl.progress();
    //console.log('bob');
}
}
else {
        tl5 = new TimelineMax({ onUpdate: onUpdate });
        const controller = new ScrollMagic.Controller();

        tl5.to('.home-growth-image-group__image--5', 1, { rotationY: 360, y: -80 });
        tl5.to('.home-growth-image-group__image--1', 1, { x: -150, y: -130, opacity: 1 });
        tl5.to('.home-growth-image-group__image--2', 1, { x: 50, y: -130, opacity: 1 }, "-=1");
        tl5.to('.home-growth-image-group__image--3', 1, { x: -150, y: 90, opacity: 1 }, "-=1");
        tl5.to('.home-growth-image-group__image--4', 1, { x: 50, y: 90, opacity: 1 }, "-=1");

        const scene5 = new ScrollMagic.Scene({
            triggerElement: '.home-growth-image-group',
            triggerHook: .7, //between 0 an 1
            duration: '50%'
        })
            // .setPin('.social-reputation__image-group--1')
            .setTween(tl5)
            // .addIndicators({ name: "2 (duration: 300)", colorTrigger: "blue" })
            .addTo(controller);

        function onUpdate() {
    //tl.progress();
    //console.log('bob');
}
}

// Hero Confetti Settings

// var confettiSettings = {
//     target: 'hero-confetti',
//     rotate: true,
//     colors: [[11, 108, 181], [0, 184, 180], [237, 22, 121], [78, 101, 175], [102, 205, 238], [165, 80, 159]],
//     clock: 30,
//     props: [
//         "circle",
//         "square"
//     ]
// };
// var confetti = new ConfettiGenerator(confettiSettings);
// confetti.render();

// // Hero Inc Logo

// const tl6 = new TimelineMax();

// tl6.to('.hero-1__image', 2, { rotationY: 360, repeatDelay: 5, repeat: -1, yoyo: true });

// tl6.play();




    


