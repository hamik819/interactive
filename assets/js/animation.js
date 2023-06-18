gsap.registerPlugin(ScrollTrigger);

var firstLoad = gsap.timeline();
firstLoad.to(".load-wrapper p", {
    y: 0,
    delay: 0.2
});
firstLoad.to(".load-wrapper p", {
    y: "100%",
    delay: 0.5
});
firstLoad.to(".load-wrapper", {
    y: "100%",
});
firstLoad.to(".load-wrapper", {
    display: 'none'
});

// section1 title desc button
const section1 = gsap.timeline({
	scrollTrigger: {
		trigger: '#wrapper',
		start: 'top 20%',
		end: 'top 80%'
	}
});
section1.to('.main__start .title', {y: 0, opacity: 1,  duration: 0.8, delay: 1.5})
   .to('.main__start .desc', {y: 0, opacity: 1,  duration: 0.7})
   .to('.main__start .btn_primary', {y: 0, opacity: 1,  duration: 0.7})

// The Edits
gsap.to('.main__2--image div',{
	scrollTrigger:{
	trigger: '.main__1',
	start: 'bottom 30%',
	// markers: true
	},
	height: 0,
});

// header
ScrollTrigger.create({
	trigger: "header",
	start: "top 5%",
	toggleClass: {targets: '.header', className: 'active'},
});

// section4 background
ScrollTrigger.create({
	trigger: '.main__4',
	markers: true,
    start: "center",
	toggleClass: {targets: '.main__4', className: 'active'},
    // scrub: 3,
});