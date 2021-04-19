/**
 * Created by Admin on 06.02.2020.
 */

// Обрезать длинный многосточный текст до 230 символов с добавлением троеточия в конце
$(".jq-text-length").text(function(i, text) {

    if (text.length >= 230) {
        text = text.substring(0, 230);
        var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
        text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
    }

    $(this).text(text);

});

// Slider owlCarousel
$(document).ready(function(){

    $('.owl-carousel.owl-type2').owlCarousel({
        autoplay:true,
        nav:false,
        dots:true,
        lazyLoad:true,
        dotsClass:'carousel-indicators',
        dotClass:'carousel-dot',
        responsive:{
            0:{
                items:1,
                loop:true,
                margin:10
            },
            768:{
                items:2,
                loop:true,
                margin:24
            },
            992: {
                items:2,
                loop:true,
                margin:32,
                autoplayHoverPause:true
            },
            1200: {
                items:2,
                loop:false,
                margin:32,
                autoplayHoverPause:true
            }
        }
    });
    



    // WOW.js

    WOW.prototype.addBox = function (element) {
        this.boxes.push(element);
    };


    var wow = new WOW();
    wow.init();


    $('.wow').on('scrollSpy:exit', function () {
        $(this).css({
            'visibility': 'hidden',
            'animation-name': 'none'
        }).removeClass('animated');
        wow.addBox(this);
    }).scrollSpy();


// Прогрессбар шаги заполнения предложения Start:

    $(function() {
        $(".js-offer-step-1").click(function() {
            $('.js-offer-progress-bar').attr({style: "width: 0", "aria-valuenow": 0});
            $('.js-offer-width').html(0);
            $('.js-offer-etap').html(1);

            $('.nav-tabs-btn-prev').addClass('prev-disabled');

            if ( $('.nav-tabs-btn-next').is('.prev-disabled') ) {
                $('.nav-tabs-btn-next').removeClass('prev-disabled');
            }

        })
    });
    $(function() {
        $(".js-offer-step-2").click(function() {
            $('.js-offer-progress-bar').attr({style: "width: 25%", "aria-valuenow": 25});
            $('.js-offer-width').html(25);
            $('.js-offer-etap').html(2);

            if ( $('.nav-tabs-btn-prev').is('.prev-disabled') ) {
                $('.nav-tabs-btn-prev').removeClass('prev-disabled');
            } else {
                if ( $('.nav-tabs-btn-next').is('.prev-disabled') ) {
                    $('.nav-tabs-btn-next').removeClass('prev-disabled');
                }
            }

        })
    });
    $(function() {
        $(".js-offer-step-3").click(function() {
            $('.js-offer-progress-bar').attr({style: "width: 50%", "aria-valuenow": 50});
            $('.js-offer-width').html(50);
            $('.js-offer-etap').html(3);

            if ( $('.nav-tabs-btn-prev').is('.prev-disabled') ) {
                $('.nav-tabs-btn-prev').removeClass('prev-disabled');
            } else {
                if ( $('.nav-tabs-btn-next').is('.prev-disabled') ) {
                    $('.nav-tabs-btn-next').removeClass('prev-disabled');
                }
            }
        })
    });
    $(function() {
        $(".js-offer-step-4").click(function() {
            $('.js-offer-progress-bar').attr({style: "width: 75%", "aria-valuenow": 75});
            $('.js-offer-width').html(75);
            $('.js-offer-etap').html(4);

            if ( $('.nav-tabs-btn-prev').is('.prev-disabled') ) {
                $('.nav-tabs-btn-prev').removeClass('prev-disabled');
            } else {
                if ( $('.nav-tabs-btn-next').is('.prev-disabled') ) {
                    $('.nav-tabs-btn-next').removeClass('prev-disabled');
                }
            }

        })
    });
    $(function() {
        $(".js-offer-step-5").click(function() {
            $('.js-offer-progress-bar').attr({style: "width: 100%", "aria-valuenow": 100});
            $('.js-offer-width').html(100);
            $('.js-offer-etap').html(5);

            if ( $('.nav-tabs-btn-prev').is('.prev-disabled') ) {
                $('.nav-tabs-btn-prev').removeClass('prev-disabled');
            }
        })
    });

    $('.next').click(function () {
        if (!$('.tab-pane').last().hasClass('show active')) move(true)
    });
    $('.prev').click(function () {
        if (!$('.tab-pane').first().hasClass('show active')) move(false)
    });
    function move(direction) {
        direction ? $('.show.active').removeClass('show active').next().addClass('show active') : $('.show.active').removeClass('show active').prev().addClass('show active');
        direction ? $('.nav-link.active').removeClass('active').next().addClass('active').trigger( "click" ) : $('.nav-link.active').removeClass('active').prev().addClass('active').trigger( "click" );
    }
    $(function() {
        $(".nav-item:not(:last-of-type)").click(function() {
            $('.offer-form-step_submit').removeClass('d-block').addClass('d-none');
            $('.nav-tabs-btn-next').removeClass('d-none').addClass('d-block');
        })
    });
    $(function() {
        $(".nav-item:last-of-type").click(function() {
            $('.offer-form-step_submit').removeClass('d-none').addClass('d-block');
            $('.nav-tabs-btn-next').removeClass('d-block').addClass('d-none');
        })
    });

// Прогрессбар шаги заполнения предложения End


    YaMapsShown = false;
    $(window).scroll(function() {
        if (!YaMapsShown){
            if($(window).scrollTop() + $(window).height() > $(document).height() - 1400) {
                showYaMaps();
                YaMapsShown = true;
            }
        }
    });

    function showYaMaps(){
        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad55b52b5905a45ee03efbc0aba518e6933db708dd98dcca855dfa58216cca020&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false&amp;";
        document.getElementById("YaMaps").appendChild(script);
    }



    // Плавное появление анимации Пирамиды
    $(".js-animation_wrap").css("opacity","0");
    var waypoint = new Waypoint({
        element: document.getElementById('js-piramid-start'),
        handler: function() {
            $(".js-animation_wrap").fadeTo(500,1);
        }
    })


// Закрытие мобильного меню по клику на ссылку меню
    $('.custom-v1 .nav-link').click(function(){
        $('.custom-v1 .navbar-collapse').collapse('hide');
    });


});


