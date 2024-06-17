const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


var menu = document.querySelector("#menu");
var full = document.querySelector(".full-scr");
var nav1 = document.querySelector(".nav a");
var nav2 = document.querySelector(".nav h2");
var nav3 = document.querySelector(".nav i");

var flag = 0;

menu.addEventListener("click", function(){
    if(flag==0){
        full.style.top = "0%";
        nav1.style.color = "#222";
        nav2.style.color = "#222";
        nav3.style.color = "#222";
        flag = 1;
    }
    else{
        full.style.top = "-100%";
        nav1.style.color = "#dadada";
        nav2.style.color = "#dadada";
        nav3.style.color = "#dadada";
        flag = 0;
    }

})


var tl = gsap.timeline();
tl.from(".page1 h1", {
    y: 60,
    duration: 0.6,
    opacity: 0,
})
.from(".page1 h2", {
    y: 50,
    duration: 0.5,
    opacity: 0,
    delay: -0.2,
})
.from(".page1 h3", {
    y: 50,
    duration: 0.4,
    opacity: 0,
    delay: -0.3
})


gsap.to(".page2 img", {
    scale: 1.11,
    scrollTrigger: {
        trigger: ".page2 img",
        scroller: ".main",
        // markers: true,
        start: "top 80%",
        end: "top 5%",
        scrub: 3,
    }
});

gsap.from(".page2 h1", {
    rotateX: "-90deg",
    opacity: 0,
    scale: 1.1,
    scrollTrigger: {
        trigger: ".b",
        scroller: ".main",
        // markers: true,
        start: "top 60%",
        end: "top 50%",
        scrub: 3,
    }
    
})

gsap.to(".top3 hr", {
    width: "100%",
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".main",
        start: "top 40%",
        end: "top 30%",
        // markers: true,
        scrub: 3,
    }
})


var slide1 = document.querySelectorAll(".page6 .slide1 h1");
var slide2 = document.querySelectorAll(".page6 .slide2 h1");

slide1.forEach(function(elem){
    gsap.to(elem, {
        transform: 'translateX(-100%)',
        duration: 4,
        scrollTrigger: {
            trigger: ".page6",
            scroller: ".main",
            scrub: 2,
        }
    })
})

slide2.forEach(function(elem){
    gsap.to(elem, {
        transform: 'translateX(10%)',
        duration: 4,
        scrollTrigger: {
            trigger: ".page6",
            scroller: ".main",
            scrub: 2,
        }
    })
})

var area1 = document.querySelector(".bottom7 .yes")
var img = document.querySelector(".bottom7 .yes img")

area1.addEventListener("mousemove", function(dets){
    img.style.opacity = 1
    img.style.left = ` ${dets.x - 200}px `
    img.style.top = ` ${dets.y - 300}px `
})

area1.addEventListener("mouseleave", function(dets){
    img.style.opacity = 0
})


var area2 = document.querySelector(".bottom7 .yes1")
var img2 = document.querySelector(".bottom7 .yes1 img")

area2.addEventListener("mousemove", function(dets){
    img2.style.opacity = 1
    img2.style.left = ` ${dets.x - 900}px `
    img2.style.top = ` ${dets.y - 300}px `
})

area2.addEventListener("mouseleave", function(dets){
    img2.style.opacity = 0
})


var contain = document.querySelectorAll(".bottom3 .contain")
var conh1 = document.querySelector(".contop h1")

contain.forEach(function(elem){
    elem.addEventListener("mouseover", function(){
        document.querySelector("elem .contop").style.opacity = 0
        // conh1.style.opacity = 0
        conh1.style['-webkit-text-stroke'] = `1px` ;"#fff";
    })
})