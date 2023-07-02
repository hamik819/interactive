var HAFH = window.HAFH || {};
HAFH = (function($) {
	'use strict';
	var common = {
		layerOpen: function(target) {
			var el = $(target);
			el.removeClass('is-hidden').addClass('is-open');
			$('html').addClass('layer-opens');
			return false;
		},
		layerClose: function(target) {
			var el = $(target);
			el.removeClass('is-open').addClass('is-hidden');
			$('html').removeClass('layer-opens');
			return false;
		},
		layerToggle: function (target) {
            var el = $(target);
            if (el.hasClass('is-active')) {
                el.removeClass('is-active');
            } else {
                el.addClass('is-active');
            }
        },
		moveTop: function(){
			$(document).on('click', '.btn_top', function(){
				$('html, body').animate({'scrollTop' : 0});
			});
		}, 
        navToggle: function(){
            $(document).on('click', '.btn_menu', function(){
                if($('body').hasClass('nav-opens')){
                    $('body').removeClass('nav-opens');
                    $('nav').stop().animate({right:'-40%'},700);
                } else {
                    $('body').addClass('nav-opens');
                    $('nav').animate({right:0},700);
                }	
			});
        },
		navOpen: function(){
			$(document).on('click', '.btn_menu', function(){
				$('body').addClass('nav-opens');
			});
		},
		navClose: function(){
			$(document).on('click', '.btn_menu', function(){
				$('body').removeClass('nav-opens');
			});
		},
        headerMotion: function(){
            let lastScroll = 0;
            $(window).scroll(function(){
                const curr = $(this).scrollTop();
                if(curr > lastScroll){
                    $('.header').addClass('hide');
                } else {
                    $('.header').removeClass('hide');
                }
                lastScroll = curr;
            });
        },
		init: function() {
            common.headerMotion();
		}
	};

	var main = {
		init: function() {
		}
	};


	$(document).ready(function() {
		common.init();

		// if( $('.main').length > 0 ){
		// 	main.init();
		// }

		// if( $('.brand').length > 0  && window.innerWidth > 768 ){
		// 	brand.init();
		// }

		// if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {
		// 	$('body').addClass('ie');
		// }

	});

	return {
		layerOpen: common.layerOpen,
		layerClose: common.layerClose,
	};
})($);

var timer;
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

$(window).resize(function() {
	
});
