function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier:.2  
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
// init()
// BAFFLE TEXT IN LOADER
const text=baffle(".data h1");
      text.set({
        characters : '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
        speed: 120
      });
      text.start();
      text.reveal(4000);


function loader() { 
  gsap.to("#loader", {
    top: "-100vh",
    duration:1,
  })
}
setTimeout(loader,4000  )

gsap.to("#center1",{
  opacity:1,
  delay:5
})
let clip = document.querySelector(".vid") 
  clip.addEventListener("mouseover", function (e) { 
    clip.play(); 
  }) 
  clip.addEventListener("click", function (e) { 
   clip.pause(); 
  }) 

document.querySelector("#post1").addEventListener('mouseenter', function(){
  gsap.to(".auth1 h3",{
  y:"-9vh",
  duration:0.5
})}
);
document.querySelector("#post1").addEventListener('mouseleave', function(){
  gsap.to(".auth1 h3 ",{
  y:"0vh",
  duration:0.5
})}
);
document.querySelector("#post2").addEventListener('mouseenter', function(){
  gsap.to(".auth2 h3",{
  y:"-9vh",
  duration:0.5
})}
);
document.querySelector("#post2").addEventListener('mouseleave', function(){
  gsap.to(".auth2 h3 ",{
  y:"0vh",
  duration:0.5
})}
);
document.querySelector("#circle1").addEventListener('mouseenter', function(){
//  document.querySelector("#circle1 i").style.display="none";
  gsap.to("#circle1 #inner1",{
  scale:1,
  duration:0.5
})
  gsap.to("#inner1 h4",{
  scale:1,
  duration:1,
  delay:1
})}
);
document.querySelector("#circle1").addEventListener('mouseleave', function(){
  gsap.to("#circle1 #inner1",{
  scale:0,
  duration:1
})}
);
document.querySelector("#post3").addEventListener('mouseenter', function(){
  gsap.to(".auth3 h3",{
  y:"-9vh",
  duration:0.5
})}
);
document.querySelector("#post3").addEventListener('mouseleave', function(){
  gsap.to(".auth3 h3 ",{
  y:"0vh",
  duration:0.5
})}
);
document.querySelector("#post4").addEventListener('mouseenter', function(){
  gsap.to(".auth4 h3",{
  y:"-9vh",
  duration:0.5
})}
);
document.querySelector("#post4").addEventListener('mouseleave', function(){
  gsap.to(".auth4 h3 ",{
  y:"0vh",
  duration:0.5
})}
);
document.querySelector("#circle2").addEventListener('mouseenter', function(){
    gsap.to("#circle2 #inner2",{
    scale:1,
    duration:0.5
  })
    gsap.to("#inner2 h4",{
    scale:1,
    duration:1,
    delay:1
  })}
  );
  document.querySelector("#circle2").addEventListener('mouseleave', function(){
    gsap.to("#circle2 #inner2",{
    scale:0,
    duration:1
  })}
  );
document.querySelector("#circle3").addEventListener('mouseenter', function(){
    gsap.to("#circle3 #inner3",{
    scale:1,
    duration:0.5
  })
    gsap.to("#inner3 h4",{
    scale:1,
    duration:1,
    delay:4
  })}
  );
  document.querySelector("#circle3").addEventListener('mouseleave', function(){
    gsap.to("#circle3 #inner3",{
    scale:0,
    duration:1
  })}
  );
document.querySelector("#post5").addEventListener('mouseenter', function(){
  gsap.to(".auth5 h3",{
  y:"-9vh",
  duration:0.5
})}
);
document.querySelector("#post5").addEventListener('mouseleave', function(){
  gsap.to(".auth5 h3 ",{
  y:"0vh",
  duration:0.5
})}
);
document.querySelector("#post6").addEventListener('mouseenter', function(){
  gsap.to(".auth6 h3",{
  y:"-9vh",
  duration:0.5
})}
);
document.querySelector("#post6").addEventListener('mouseleave', function(){
  gsap.to(".auth6 h3 ",{
  y:"0vh",
  duration:0.5
})}
);