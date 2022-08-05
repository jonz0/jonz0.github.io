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
    $('#gitlet').on('mouseenter', function(){
        $('.project-wrapper-1').stop().animate({width: 'toggle'}, 300);
    }), $('#gitlet').on('mouseleave', function(){
        $('.project-wrapper-1').stop().animate({width: 'toggle'}, 300);
    });

    $('#worlds').on('mouseenter', function(){
        $('.project-wrapper-2').stop().animate({width: 'toggle'}, 300);
    }), $('#worlds').on('mouseleave', function(){
        $('.project-wrapper-2').stop().animate({width: 'toggle'}, 300);
    });

    $('#inprogress').on('mouseenter', function(){
        $('.project-wrapper-3').stop().animate({width: 'toggle'}, 300);
    }), $('#inprogress').on('mouseleave', function(){
        $('.project-wrapper-3').stop().animate({width: 'toggle'}, 300);
    });

    $('#travelmap').on('mouseenter', function(){
        $('.project-wrapper-4').stop().animate({width: 'toggle'}, 300);
    }), $('#travelmap').on('mouseleave', function(){
        $('.project-wrapper-4').stop().animate({width: 'toggle'}, 300);
    });

    // ABOUT PAGE
    $('.about-link').on('mouseenter', function(){
        $('.about-wrapper').stop().animate({width: 'toggle'}, 300);
    }), $('.about-link').on('mouseleave', function(){
        $('.about-wrapper').stop().animate({width: 'toggle'}, 300);
    });

    // GITLET PAGE
    $("#show-button").click(function() {
        $("#show-hide").slideToggle();
    });

});