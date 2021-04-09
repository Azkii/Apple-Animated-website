const threshold = 0.7; // trigger
const options = {
  root: null,
  rootMargin: '0px',
  threshold: threshold
};
const observer = new IntersectionObserver(animHandler, options);
const targets = document.querySelectorAll(".animateOnce");
const ar = [].slice.call(targets); 
let animations = [];
let count = 0;

for (let target of ar) {
  animations[count] = new TimelineMax({paused:true});  
  observer.observe(target);
  count++;
}
// timeline for each section
animations[0].from("#macBookSpec-video",1,{onCompleteScope:this.target, onComplete:function(){
    this.target[0].play();
}});
animations[1].from("#retinaDisplay__carousel",1,{ onComplete:function(){
  animateCarouselArr();
}});
animations[2].from("#retinaDisplay__matrixInfo",1,{opacity:0},{opacity:1});
animations[3].from("#thermalInfo__video",1,{onCompleteScope:this.target, onComplete:function(){
  this.target[0].play();
  setTimeout(() => {
    document.getElementById("thermalInfo__replayVideo").style.display = `block`;
  },4000)
}});
animations[4].from("#thermalInfo__efficiencyInc",1,{opacity:0},{opacity:1});
animations[5].from("#memoryInfo__video",1,{onCompleteScope:this.target, onComplete:function(){
  this.target[0].play();
}});
animations[6].from("#memoryInfo__options",1,{opacity:0},{opacity:1});
// observer handler
function animHandler(targets) {
  for (var entry of targets) {
    if (entry.isIntersecting) {
      let i = ar.indexOf(entry.target);
      animations[i].play();
    } else {
        return;
    }
  }
}

window.addEventListener("load", () => {
  settingStyle = ['-10px','60px','100px']
  animateCarouselArr(settingStyle)
});
document.getElementById("thermalInfo__replayVideo")
 .addEventListener("click", () => {
    document.getElementById("thermalInfo__video").play();
})
//functions
const animateCarouselArr = (setting=["","",""]) => {
  const carouselArr = document.getElementById("retinaDisplay__carousel__images");
  carouselArr.children[1].style.marginLeft = setting[0];
  carouselArr.children[2].style.marginLeft = setting[1];
  carouselArr.children[3].style.marginLeft = setting[2];
}