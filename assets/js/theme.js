(function($) {
    'use strict';

    //===== Main Menu

    function mainMenu() {
        
        var var_window = $(window),
        navContainer = $('.header-navigation'),
        navbarToggler = $('.navbar-toggler'),
        navMenu = $('.theme-nav-menu'),
        navMenuLi = $('.theme-nav-menu ul li ul li'),
        closeIcon = $('.navbar-close');

        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });

        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });

        navMenu.find("li a").each(function() {
            if ($(this).children('.dd-trigger').length < 1) {
                if ($(this).next().length > 0) {
                    $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>')
                }
            }
        });

        navMenu.on('click', '.dd-trigger', function(e) {
            e.preventDefault();
            $(this).parent().parent().siblings().children('ul.sub-menu').slideUp();
            $(this).parent().next('ul.sub-menu').stop(true, true).slideToggle(350);
            $(this).toggleClass('sub-menu-open');
        });

    };

    //===== Offcanvas Overlay

    function offCanvas() {
        const $overlay = $(".offcanvas__overlay");
        const $toggler = $(".navbar-toggler");
        const $menu = $(".theme-nav-menu");
        $toggler.add($overlay).add(".navbar-close").on("click", function () {
            $overlay.toggleClass("overlay-open");
            if ($(this).is($overlay)) {
                $toggler.removeClass("active");
                $menu.removeClass("menu-on");
            }
        });
        $(window).on("resize", function () {
            if ($(window).width() > 991) $overlay.removeClass("overlay-open");
        });
    }

    //===== Windows load

    $(window).on('load', function(event) {
        //===== Preloader
        $('.preloader').delay(500).fadeOut(500);
    })

    
    //====== Sticky Header 
    
    $(document).ready(function () {
        function initStickyHeader(headerSelector) {
            const header = $(headerSelector);
            let lastScroll = 0;
            $(window).on('scroll', function () {
                const currentScroll = $(this).scrollTop();
                if (currentScroll > 200) {
                    if (currentScroll < lastScroll) {
                        if (!header.hasClass('sticky')) {
                            header.addClass('sticky');
                        }
                    } else {
                        header.removeClass('sticky');
                    }
                } else if (currentScroll === 0) {
                    header.removeClass('sticky');
                }
                lastScroll = currentScroll;
            });
        }
        initStickyHeader('.header-navigation');
    });

    //===== Magnific-popup js
    
    if ($('.video-popup').length){
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }

    //===== Slick Slider

    // Wait until all images and assets are fully loaded
    $(window).on('load', function() {
        if ($('.hero-image-slider-top').length) {
            $('.hero-image-slider-top').slick({
                speed: 8000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: false,
                cssEase: 'linear',
                draggable: false,
                focusOnSelect: false,
                pauseOnFocus: false,
                pauseOnHover: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                vertical: true,
                arrows: false,
                buttons: false,
            });
            // Refresh position after init (fix for first load blank issue)
            $('.hero-image-slider-top').slick('setPosition');
        }
        if ($('.hero-image-slider-bottom').length) {
            $('.hero-image-slider-bottom').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: false,
                cssEase: 'linear',
                draggable: false,
                focusOnSelect: false,
                pauseOnFocus: false,
                pauseOnHover: false,
                vertical: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
            });
            // Refresh position after init
            $('.hero-image-slider-bottom').slick('setPosition');
        }

    });
    if ($('.service-slider').length) {
        var sliderArrows = $('.service-arrows');
        $('.service-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            autoplay: true,
            appendArrows: sliderArrows,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
				{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.project-slider').length) {
        $('.project-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
				{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if ($('.testimonial-slider').length) {
        var sliderArrows = $('.testimonial-arrows');
        $('.testimonial-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: sliderArrows,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    if ($('.testimonial-slider-two').length) {
        var sliderArrows = $('.testimonial-arrows');
        $('.testimonial-slider-two').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: sliderArrows,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>'
        });
    }
    if ($('.testimonial-slider-three').length) {
        var sliderArrows = $('.testimonial-arrows');
        $('.testimonial-slider-three').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 800,
            appendArrows: sliderArrows,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev">Previews</div>',
            nextArrow: '<div class="next">Next</div>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    $('.testimonial-slider-three').on('init afterChange', function(event, slick, currentSlide){
        currentSlide = currentSlide || 0;
        const totalSlides = slick.slideCount;
        const progressLine = $('.progress-line');
        let progress = ((currentSlide + 1) / totalSlides) * 100;
        progressLine.css('width', progress + '%');
    });
    if ($('.clients-slider').length) {
        $('.clients-slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    // ===== Counter

	if ($('.counter').length) {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					$(entry.target).counterUp({
						delay: 100,
						time: 4000
					});
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 1.0
		});
		$('.counter').each(function() {
			observer.observe(this);
		});
	}
    
    //===== Gasp 
    
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Gsap ScrollSmoother

    ScrollSmoother.create({
    smooth: 1,
    effects: true,
        smoothTouch: 0.1,
    });

    // Gsap SplitText

    if ($('.text-anm').length) {
		let staggerAmount = 0.01,
			translateXValue = 40,
			delayValue = .5,
			easeType = "power2.out",
			animatedTextElements = document.querySelectorAll('.text-anm');
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, {
				type: "chars, words"
			});
			gsap.from(animationSplitText.chars, {
				duration: 1,
				delay: delayValue,
				x: translateXValue,
				autoAlpha: 0,
				stagger: staggerAmount,
				ease: easeType,
				scrollTrigger: {
					trigger: element,
					start: "top 85%"
				},
			});
		});
	}


    //====== Item Active
    
    $(".orbia-service-card").hover(function() {
        $(".orbia-service-card").removeClass("item-active");
        $(this).addClass("item-active");
    });


    //===== Dynamic Background

    function dynamicBackground() {
        $('[data-src]').each(function () {
          var src = $(this).attr('data-src');
          $(this).css({
            'background-image': 'url(' + src + ')',
          });
        });
    }

    //===== Aos Animation

    AOS.init({
        offset: 0
    });

    // Document Ready

    $(function() {
        mainMenu();
        offCanvas();
        dynamicBackground();
    });

})(window.jQuery);





// connect button js 

document.addEventListener("DOMContentLoaded", function () {

    const connectButton = document.querySelector(".tooltip-container");

    if (!connectButton) return;

    const button = connectButton.querySelector(".button-content");

    button.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        connectButton.classList.toggle("active");
    });


    /* Close when clicking outside */
    document.addEventListener("click", function (e) {

        if (!connectButton.contains(e.target)) {
            connectButton.classList.remove("active");
        }

    });


    /* Prevent popup clicks from closing it */
    const popup = connectButton.querySelector(".tooltip-content");

    if (popup) {
        popup.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    }

});






document.addEventListener('DOMContentLoaded', function () {

    const mobileToggle =
        document.getElementById('mobileToggle');

    const mobileMenu =
        document.getElementById('mobileMenu');

    const overlay =
        document.getElementById('mobileMenuOverlay');

    const close =
        document.getElementById('mobileMenuClose');

    const mobileLinks =
        document.querySelectorAll(
            '.mobile-menu-link'
        );

    const navLinks =
        document.querySelectorAll(
            '.nav-link'
        );

    const navbar =
        document.querySelector(
            '.navbar-container'
        );


    /* =========================
       ACTIVE PAGE
    ========================= */

    const currentPage =
        location.pathname.split('/').pop()
        || 'index.html';


    [...navLinks, ...mobileLinks].forEach(
        function (link) {

            link.classList.toggle(
                'active',
                link.getAttribute('href') === currentPage
            );

        }
    );


    /* =========================
       OPEN MENU
    ========================= */

    function openMobileMenu() {

        mobileToggle.classList.add('active');

        mobileMenu.classList.add('active');

        overlay.classList.add('active');

        mobileToggle.setAttribute(
            'aria-expanded',
            'true'
        );

        document.body.style.overflow =
            'hidden';

    }


    /* =========================
       CLOSE MENU
    ========================= */

    function closeMobileMenu() {

        mobileToggle.classList.remove('active');

        mobileMenu.classList.remove('active');

        overlay.classList.remove('active');

        mobileToggle.setAttribute(
            'aria-expanded',
            'false'
        );

        document.body.style.overflow =
            '';

    }


    /* =========================
       TOGGLE
    ========================= */

    mobileToggle.addEventListener(
        'click',
        function (e) {

            e.preventDefault();

            e.stopPropagation();

            if (
                mobileMenu.classList.contains(
                    'active'
                )
            ) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );


    /* =========================
       CLOSE BUTTON
    ========================= */

    close.addEventListener(
        'click',
        function (e) {

            e.preventDefault();

            closeMobileMenu();

        }
    );


    /* =========================
       OVERLAY
    ========================= */

    overlay.addEventListener(
        'click',
        closeMobileMenu
    );


    /* =========================
       MOBILE LINKS
    ========================= */

    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                'click',
                function () {

                    closeMobileMenu();

                }
            );

        }
    );


    /* =========================
       DESKTOP LINKS
    ========================= */

    navLinks.forEach(
        function (link) {

            link.addEventListener(
                'click',
                function () {

                    closeMobileMenu();

                }
            );

        }
    );


    /* =========================
       ESCAPE KEY
    ========================= */

    document.addEventListener(
        'keydown',
        function (e) {

            if (
                e.key === 'Escape' &&
                mobileMenu.classList.contains(
                    'active'
                )
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =========================
       NAVBAR SCROLL
    ========================= */

    window.addEventListener(
        'scroll',
        function () {

            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop;

            navbar.classList.toggle(
                'scrolled',
                scrollTop > 50
            );

        },
        {
            passive:true
        }
    );


    /* =========================
       FLOATING CIRCLES
    ========================= */

    document
        .querySelectorAll(
            '.floating-circle'
        )
        .forEach(
            function (circle) {

                circle.addEventListener(
                    'mouseenter',
                    function () {

                        this.style.transform =
                            'scale(1.2)';

                    }
                );

                circle.addEventListener(
                    'mouseleave',
                    function () {

                        this.style.transform =
                            'scale(1)';

                    }
                );

            }
        );


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            function (anchor) {

                anchor.addEventListener(
                    'click',
                    function (e) {

                        const href =
                            this.getAttribute(
                                'href'
                            );

                        if (href === '#') {

                            e.preventDefault();

                            return;

                        }

                        const target =
                            document.querySelector(
                                href
                            );

                        if (target) {

                            e.preventDefault();

                            target.scrollIntoView({
                                behavior:'smooth',
                                block:'start'
                            });

                        }

                    }
                );

            }
        );


    /* =========================
       WINDOW RESIZE
    ========================= */

    window.addEventListener(
        'resize',
        function () {

            if (
                window.innerWidth > 992 &&
                mobileMenu.classList.contains(
                    'active'
                )
            ) {

                closeMobileMenu();

            }

        }
    );

});
