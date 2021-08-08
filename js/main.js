
   // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    // Typed Initiate
    if ($('.hero-banner .heading h2').length == 1) {
        var typed_strings = $('.hero-banner .heading .typed-text').text();
        var typed = new Typed('.hero-banner .heading h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true,
        });
    }

    // Testimonials carousel
    $('.testimonials-carousel').owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
        },
    });
