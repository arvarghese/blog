$('a.scroll').bind('click', function(event) {
    var $ele = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($ele.attr('href')).offset().top)
    }, 600, 'easeInOutExpo');
    event.preventDefault();
});