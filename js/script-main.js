$(document).ready(function() {
    // HAMBURGER MENU
    const icons = document.querySelectorAll('.hamburger-icon');
    icons.forEach (icon => {  
        icon.addEventListener('click', (event) => {
            icon.classList.toggle("open");
        });
    });
    
    // MAIN MENU
    $(".hamburger-menu").hide();
    $(".hamburger-icon").click(function() {
        $(".hamburger-menu").slideToggle();
    });

    // MAIN PAGE
    $('.project').on('mouseenter', function() {
        $(this).children('#project-wrapper').stop().animate({width: 'toggle'}, 300);
    }), $('.project').on('mouseleave', function() {
        $(this).children('#project-wrapper').stop().animate({width: 'toggle'}, 300);
    });

    // HAMBURGER MENU

    $('.menu-item').on('mouseenter', function() {
        const link = $(this).children('.menu-link').attr('href');
        const wrapper = $(this).children('#menu-wrapper');
        wrapper.css('opacity', '0.9');

        $('.menu-item').on('mouseleave', function(){
            wrapper.css('opacity', '0');
        })
    });

    $('.menu-item').on('click', function(event) {
        const link = $(this).children('.menu-link').attr('href');
        const wrapper = $(this).children('#menu-wrapper');
        if (wrapper.css('opacity') == '0') {
            event.preventDefault();
            wrapper.css('opacity', '0.9');
            setTimeout( function() {
                window.location = link;
            }, 350);
            setTimeout( function() {
                wrapper.css('opacity', '0');
            }, 350);
        }
    });
    
    // ABOUT MD
    $('.about-link').on('mouseenter', function(){
        $('.about-wrapper').stop().animate({width: 'toggle'}, 300);
    }), $('.about-link').on('mouseleave', function(){
        $('.about-wrapper').stop().animate({width: 'toggle'}, 300);
    });

    // GITLET PAGE
    $("#show-hide").hide();
    $("#show-button").click(function() {
        $("#show-hide").slideToggle();
    });

    // DROPDOWN CHEVRON
    $("#show-button").click(function() {
        const chevron = document.querySelectorAll('.dropdown-chevron');
        chevron.forEach (icon => {  
            icon.classList.toggle("open");
        });
    })
});
