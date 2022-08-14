let isUsingTouch = false;

const touchHandler = () => {
    isUsingTouch = true;
    document.addEventListener('mousemove', mousemoveHandler);
};

const mousemoveHandler = (() => {
    let time;

    return () => {
        const now = performance.now();
    if (now - time < 20) {
        isUsingTouch = false;
        document.removeEventListener('mousemove', mousemoveHandler);
    }
        time = now;
    }
});

const supportsTouch = true;
if (supportsTouch) {
    document.addEventListener('touchstart', touchHandler);
} else if (navigator.maxTouchPoints || navigator.msMaxTouchPoints) {
    document.addEventListener('pointerdown', touchHandler);
}

$(document).ready(function() {

    // HAMBURGER MENU
    const icons = document.querySelectorAll('.hamburger-icon');
    icons.forEach (icon => {  
        icon.addEventListener('click', (event) => {
            icon.classList.toggle('open');
        });
    });

    // HAMBURGER MENU - LARGE SCREEN
    const i = document.querySelectorAll('.hamburger-icon-large');
    i.forEach (icon => {  
        icon.addEventListener('click', (event) => {
            icon.classList.toggle('open');
        });
    });
    

    $('.menu-link').on('mouseenter', function() {
        if (!isUsingTouch) {
            var wrapper = $(this).children('.menu-wrapper');
            wrapper.stop().fadeTo(300, 0.9);

            $('.menu-link').on('mouseleave', function(){
                wrapper.stop().fadeTo(300, 0);
            })
        }

        $('.menu-link').on('click', function(event) {
            var link = $(this).attr('href');
            var wrapper = $(this).children('.menu-wrapper');
            event.preventDefault();
            wrapper.stop().fadeTo(300, 0.9);
            setTimeout(function() { 
                window.location = link; 
                wrapper.stop().fadeTo(300, 0);
                $('.hamburger-menu').stop().slideToggle();
            }, 300);
        });
    });

    $('.home-button').on('click', function() {
        setTimeout(function() { 
            $('.hamburger-menu').stop().slideToggle();
        }, 300);
    });
    
    // MAIN MENU
    $('.hamburger-menu').hide();
    $('.hamburger-icon').click(function() {
        $('.hamburger-menu').stop().slideToggle();
    });

    $('.hamburger-icon-large').click(function() {
        $('.hamburger-menu').stop().slideToggle();
    });

    // MAIN PAGE
    $('.project-name').on('mouseenter', function() {
        $(this).children('#project-wrapper').stop().animate({width: 'toggle'}, 300);
    }), $('.project-name').on('mouseleave', function() {
        $(this).children('#project-wrapper').stop().animate({width: 'toggle'}, 300);
    });
    
    
    // ABOUT ME

    $('.about-me').on('mouseenter', function() {
        var wrapper = $(this).children('.about-wrapper');
        if (!isUsingTouch) {
            wrapper.stop().animate({width: 'toggle'}, 300);
            $('.about-me').on('mouseleave', function(){
                wrapper.stop().animate({width: 'toggle'}, 300);
            })
        }
    
        $('.about-link').on('click', function(event) {
            var link = $(this).attr('href');
            if (wrapper.css('display') == 'none') {
                event.preventDefault();
                wrapper.stop().animate({width: 'toggle'}, 300);
                setTimeout( function() {
                    window.location = link;
                    wrapper.stop().animate({width: 'toggle'}, 300);
                }, 300);
            }
        });
    });

    // GITLET PAGE
    $('.show-hide').hide();
    $('.show-button').click(function() {
        $('.show-hide').slideToggle();
    });

    // DROPDOWN CHEVRON
    $('.show-button').click(function() {
        const chevron = document.querySelectorAll('.dropdown-chevron');
        chevron.forEach (icon => {
            icon.classList.toggle('open');
        });
    })
});
