$(function () {
    // Run the scrNav when scroll
    $(window).on('scroll', function () {
        scrNav();
    });

    const underline = $("#underline")
    const menuNew = $("#navbar a");
    const menu = $('nav');
    const home = $('#home');

    // underline.style.left = home.offsetLeft + 'px';
    // underline.style.width = home.offsetWidth + 'px'

    $('#navbar a').on('click', e => {
        $('#underline').css("left", e.target.offsetLeft + 'px')
        $('#underline').css("width", e.target.offsetWidth + 'px')
    })



    // menu.on('click', e => {
    //     if (e.target.nodeName === 'A') {
    //         console.log(e.target.href)
    //         var target = $($(this).attr('href'));

    //         // $('html, body').animate({
    //         //   scrollTop: target.offset().top
    //         // }, 600);
    //         underline.style.left = e.target.offsetLeft + 'px';
    //         underline.style.width = e.target.offsetWidth + 'px'
    //     }
    // })

    // scrNav function 
    // Change active dot according to the active section in the window
    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function () {
            var id = $(this).attr('id'),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                // link.removeClass('active');
                $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
                let target = $('#navbar').find('[data-scroll="' + id + '"]');
                console.log(target)
                $('#underline').css("left", target.offsetLeft + 'px')
                $('#underline').css("width", target.offsetWidth + 'px')
            }
        });
    }
    scrNav();
})

