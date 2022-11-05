(function($) {

    var $sidebar = $('#sidebar'),
        $mainI = $('#mainI'),
        $intro = $('#intro');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px']
    });

    // Intro.
    // Move to main on <=large, back to sidebar on >large.
    breakpoints.on('<=large', function() {
        $mainI.append($intro);
        // $intro.prependTo($mainI);
    });

    breakpoints.on('>large', function() {
        $sidebar.append($intro);
        // $intro.prependTo($sidebar);
    });


})(jQuery);