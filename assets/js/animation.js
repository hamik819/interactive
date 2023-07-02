gsap.registerPlugin(ScrollTrigger);

// 초기값 세팅(숨기는)
// css가 아니라 gsap으로 세팅한다.
gsap.set('header nav .nav__menu a', {
    opacity: 0,
    yPercent: 100
});

// timeline: 순차적인 모션
const menuMotion = gsap.timeline({
    paused: true, // 정지가 되어 있는 모션, 내가 원할 때만 컨트롤
});

menuMotion
.addLabel('a') // 같은 라벨을 붙이면 동시에 실행 된다.
.to('header nav', {right: 0}, 'a')
.to('header nav .nav__menu a', {
    opacity: 1,
    yPercent: 0,
    stagger: 0.1
}, 'a')

$('.btn_menu').click(function(){
    // menuMotion.play(); // 일회성 실행
    // menuMotion.restart(); // 누를 때 마다 재실행
    if ($(this).hasClass('on')) {
        menuMotion.reverse();
    } else {
        menuMotion.play();
    }
   $(this).toggleClass('on');
});








var firstLoad = gsap.timeline({
    onComplete: function(){ // 끝났을 때,
        section1.play();
    }
});
firstLoad
.to(".load-wrapper p", {y: 0, delay: 0.2})
.to(".load-wrapper p", {y: "100%", delay: 0.5})
.to(".load-wrapper", {y: "100%"})
.to(".load-wrapper", {display: 'none'});









// section1 title desc button
const section1 = gsap.timeline({
    paused: true
});
section1 // from은 전 값을 세팅
.addLabel('a')
.from('.main__start .title', {opacity: 0, yPercent:100}, 'a') // y는 픽셀
.from('.main__start .desc', {opacity: 0, yPercent:100}, 'a+=0.3')
.from('.main__start .btn_primary', {opacity: 0, yPercent:100}, 'a+=0.6')









// 이미지 흘러가는 거 animation 대신 gsap으로 컨트롤 할 때
// gsap.to('.main__1--image .image_wrap',30,{
//     xPercent: -50,
//     repeat: -1, // 음수로 쓰면 무한반복
//     ease: 'none',
// });
const section1Motion = gsap.to('.main__1--list',{
    scrollTrigger: {
        trigger: '.main__1--image .image_wrap',
        start: '0% 80%', // 앞에 값은 트리거 기준, 뒤에 값은 윈도우 화면, 이 두개가 만났을 때 실행되는 코드
        end: '100% 0%',
        // markers: true,
        scrub: 1,
    },
    xPercent: -20
})











// The Edits
gsap.to('.main__2--image div',{
    scrollTrigger:{
        trigger: '.main__2--image',
        start: '0% 80%', // 0% 0%
        end: '100% 0%', // 100% 0%
        // markers: true
    },
    height: 0,
});

// ScrollTrigger.create({
// 	trigger: ".main__2--image ",
// 	start: "0% 80%",
//     onEnter: function(){
//         alert();
//     }
// });









// header
// ScrollTrigger.create({
// 	trigger: "header",
// 	start: "top 5%",
// 	toggleClass: {targets: '.header', className: 'active'},
// });






// section4 background
// ScrollTrigger.create({
// 	trigger: '.main__4',
// 	markers: true,
//     start: "center",
// 	toggleClass: {targets: '.main__4', className: 'active'},
//     scrub: 3,
// });
gsap.to('.main__4',{
    scrollTrigger:{
        trigger: '.main__4',
        start: '0% 100%',
        end: '100% 0%',
        // markers: true,
        scrub: 1,
    },
    backgroundSize: '120% auto'
});












const section6Motion = gsap.timeline({
    scrollTrigger:{
        trigger: '.main__6',
        start: '0% 100%',
        end: '100% 0%',
        // markers: true,
        scrub: 1,
    },
})
section6Motion
.addLabel('a')
.to('.main__6 img',{scale: 1.1}, 'a')
.to('.main__6 .item1',{yPercent: -3}, 'a')
.to('.main__6 .item2',{yPercent: 2}, 'a')
.to('.main__6 .item3',{yPercent: -3}, 'a');













ScrollTrigger.create({
	trigger: ".footer ",
	start: "0% 100%",
    end: "0% 100%",
    // markers: true,
    onLeaveBack: function(){
        $('.footer__contents').removeClass('show');
        $('.footer__info').removeClass('show');
    }
    // toggleClass: {targets: ".footer", className: "on"}
});
ScrollTrigger.create({
	trigger: ".footer__contents ",
	start: "0% 50%",
    end: "0% 100%",
    // markers: true,
    onEnter: function(){
        $('.footer__contents').addClass('show');
    }
});
ScrollTrigger.create({
	trigger: ".footer__info ",
	start: "0% 100%",
    end: "0% 100%",
    markers: true,
    onEnter: function(){
        $('.footer__info').addClass('show');
    }
});