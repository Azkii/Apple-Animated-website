
const macBookBoxIntro = document.getElementById("macbook-info");
const macBookVideo = document.getElementById("macbook-info__video");
const macBookText = macBookBoxIntro.querySelector("header");
//Scroll magic
const controller = new ScrollMagic.Controller();
//scenes
let scene = new ScrollMagic.Scene({
    duration: 600,
    triggerElement: macBookBoxIntro,
    triggerHook: 0,
})
.setPin(macBookBoxIntro)
.addTo(controller);

//Text anim
const textAnimation = TweenMax.fromTo(macBookText, 3, {opacity: 1,transform: `translateY(0px)`}, {opacity: 0,transform: `translateY(-800px)`});
let scene2 = new ScrollMagic.Scene({
    duration: 600,
    triggerElement: macBookBoxIntro,
    triggerHook: 0,
})
.setTween(textAnimation)
.addTo(controller)

//video animation
let scrollPosition = 0;

scene.on('update', e => {
    scrollPosition = e.scrollPos /150;
})
setInterval(() => {
    macBookVideo.currentTime = scrollPosition;
}, 24);

//text animation scene 3
var tl = new TimelineMax();
tl.staggerFrom(".macBookSpec-text", 1.5, {
  opacity: 0,
  stagger: {
    from: "center",
    amount: 0.1
  }
});

const macBookSpecTrigger = document.getElementById("macBookSpec");

const scene3 = new ScrollMagic.Scene({
  triggerElement: macBookSpecTrigger,
  duration: 1000,
  triggerHook: 1
})
.setTween(tl)
.addTo(controller);

//Chris Burkard scenes
const chrisBurkardSlide1 = document.getElementById("retinaDisplay__Slide1__background");
const chrisBurkardText1 = document.getElementById("retinaDisplay__Slide1__text");

const chrisBurkardIntro = document.getElementById("retinaDisplay__Slide1");
const chrisBurkard_Animation1 = TweenMax.fromTo(chrisBurkardSlide1, 5,{width: `50%`},{width: `100%`});
const chrisBurkard_Text1 = TweenMax.fromTo(chrisBurkardText1,5,{opacity: 0},{opacity: 1});

const chrisBurkardSlide2 = document.getElementById("retinaDisplay__Slide2");
const chrisBurkardSlide2_IMG = chrisBurkardSlide2.querySelector("img");
const chrisBurkardSlide2_text = document.getElementById("retinaDisplay__Slide2__text");

const chrisBurkard_Animation2 = TweenMax.fromTo(chrisBurkardSlide2, 10,{top: '100vh'},{top: "0vh"});
const chrisBurkard_Animation2_text = TweenMax.fromTo(chrisBurkardSlide2_text,4,{opacity: 0},{opacity: 1})
const chrisBurkard_Animation2_ZoomOut = TweenMax.fromTo(chrisBurkardSlide2_IMG,10,{transform: `scale(1.5)`},{transform: `scale(0.7)`})

const chrisBurkardTimeLine1 = new TimelineMax();
chrisBurkardTimeLine1
 .add(chrisBurkard_Animation1)
 .add(chrisBurkard_Text1)
 .add(chrisBurkard_Animation2)
 .add(chrisBurkard_Animation2_text)
 .add(chrisBurkard_Animation2_ZoomOut)

const ChrisBurkardScene1 = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: chrisBurkardIntro,
    triggerHook: 0,
})
 .setPin(chrisBurkardIntro)
 .setTween(chrisBurkardTimeLine1)
 .addTo(controller);

//Oak Felder scenes
const oakFelderIntro = document.getElementById("processorInfo__slide1");
const oakFelderSlide1 = document.getElementById("processorInfo__slide1__background");
const oakFelderText1 = document.getElementById("processorInfo__slide1__text");
const oakFelderSlide2 = document.getElementById("processorInfo__slide2");

const oakFelder_slide1_backgroundAnimation = TweenMax.fromTo(oakFelderSlide1,5,{width:`0%`},{width:`100%`})
const oakFelder_slide1_textAnimation = TweenMax.fromTo(oakFelderText1,2,{opacity: `0`},{opacity: 1})
const oakFelder_slide2_backgroundAnimation = TweenMax.fromTo(oakFelderSlide2,10,{width:`0`},{width:`100%`})
const oakFelderTimeLine = new TimelineMax();
oakFelderTimeLine
 .add(oakFelder_slide1_backgroundAnimation)
 .add(oakFelder_slide1_textAnimation)
 .add(oakFelder_slide2_backgroundAnimation)

const oakFelderScene1 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: oakFelderIntro,
    triggerHook: 0
})
 .setPin(oakFelderIntro)
 .addIndicators()
 .setTween(oakFelderTimeLine)
 .addTo(controller)