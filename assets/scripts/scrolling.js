function handleAnchorScrolling() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 20
            }, 500);
        }
    });
}