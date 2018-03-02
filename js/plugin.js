$( function(){

    var sidebar_btn = $('.mobile-sidebar-btn');
    var main = $('main');
    var chat_btn = $('.arrow-block');
    var chat = $('.chat');

    sidebar_btn.on('click', function (e) {
        main.toggleClass('show-sidebar');
    });

    chat_btn.on('click', function (e) {
        chat.toggleClass('show-chat');
    });


        $('[data-type="background"]').each(function(){
            var $bgobj = $(this); // создаем объект
            $(window).scroll(function() {
                var yPos = ($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент
                // Присваиваем значение background-position
                var coords = '50% ' + (+430 + yPos) + 'px';
                // Создаем эффект Parallax Scrolling
                $bgobj.css({ backgroundPosition: coords });
            });
        });


});