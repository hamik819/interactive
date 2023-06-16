const section1 = gsap.timeline({
	scrollTrigger: {
		trigger: '#wrapper',
		start: 'top 20%',
		end: 'top 80%'
	}
});

ScrollTrigger.create({
	trigger: "header",
	start: "top 5%",
	toggleClass: {targets: '.header', className: 'active'}
});

section1.to('.main__start .title', {y: 0, opacity: 1,  duration: 0.8})
   .to('.main__start .desc', {y: 0, opacity: 1,  duration: 0.7})
   .to('.main__start .btn_primary', {y: 0, opacity: 1,  duration: 0.7})

gsap.to('.main__2--image div',{
	scrollTrigger:{
	trigger: '.main__1',
	start: 'bottom 30%',
	// markers: true
	},
	height: 0,
});

ScrollTrigger.create({
	trigger: 'main__4',
	markers: true,
	// start:
	toggleClass: {targets: '.main__4', className: 'active'}
});