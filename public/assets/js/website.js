WebsiteUtil = {}



WebsiteUtil.nightMode = function() {
    const hours = new Date().getHours()
    const isDayTime = hours > 6 && hours < 20;
    if(isDayTime){
        WebsiteUtil.setTheme('theme-light');
    } else {
        WebsiteUtil.setTheme('theme-dark');
    }
}

WebsiteUtil.setTheme = function(themeName) {
    localStorage.setItem('evolta_it_startups_theme', themeName);
    document.documentElement.className = themeName;
}

WebsiteUtil.initCharts = function () {
    $('.circlechart').circlechart();

    // FAQ Accordion
    $(function() {
        $('.accordion').find('.accordion-title').on('click', function(){
            // Adds Active Class
            $(this).toggleClass('active');
            // Expand or Collapse This Panel
            $(this).next().slideToggle('fast');
            // Hide The Other Panels
            $('.accordion-content').not($(this).next()).slideUp('fast');
            // Removes Active Class From Other Titles
            $('.accordion-title').not($(this)).removeClass('active');
        });
    });
}

WebsiteUtil.initProjectsOwlCarousel = function () {
    $('.projects-slides').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: false,
        navText: [
            "<i class='flaticon-arrow-pointing-to-left'></i>",
            "<i class='flaticon-arrow-pointing-to-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            }
        }
    });
}


WebsiteUtil.initTestimonialOwlCarousel = function() {
    $('.testimonials-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: true,
        items: 1,
        navText: [
            "<i class='flaticon-arrow-pointing-to-left'></i>",
            "<i class='flaticon-arrow-pointing-to-right'></i>"
        ],
    });
}


WebsiteUtil.youtubePopup = function () {
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}


WebsiteUtil.mobileMenu = function () {
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });
}