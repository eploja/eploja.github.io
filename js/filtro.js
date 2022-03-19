$(function(){
    let proyecto = $('#proyectos').offset().top,
        skills = $('#skills').offset().top,
        aboutMe = $('#about-me').offset().top;

    
    // click en enlace inicio y me haga scroll hasta el top
    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    }
    );

    // click en enlace proyecto y me haga scroll hasta el top
    $('#enlace-proyecto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: proyecto - // 1% de la pantalla 
            $(window).height() * 0.1
        },600);
    });

    // click en enlace skills y me haga scroll hasta el top
    $('#enlace-skill').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: skills - 100
        },600);
    });

    // click en enlace about-me y me haga scroll hasta el top
    $('#enlace-aboutme').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: aboutMe - 100
        },600);
    });


});


