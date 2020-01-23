
$(function(){

    $(window).on('scroll',function() {
        if (checkVisible($('footer'))) {
            // $("footer").click(function(){
                animate(".footer-title-logo", "slideInUp");
                // return false;
            // });
            $(window).off('scroll');
        } else {
            // do nothing
        }
    });
    
    function checkVisible( elm, eval ) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();   
        
        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }

    function animate(element, animation){
        $(element).addClass("animated slower "+animation);
        setTimeout(function(){
            $(element).removeClass("animated "+animation);
        }, 3000);
    }
});


