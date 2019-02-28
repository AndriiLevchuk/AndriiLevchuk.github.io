$(document).ready(function (){
    $(".hamburger").on("click", function() {
        if ($("nav").hasClass("open")) {
            $("nav").removeClass("open");
            $(".menu").removeClass("open");
            $('body').removeClass('stop-scrolling');
            $('.menu-overlay').removeClass('open');
        } else {
            $("nav").addClass("open");
            $(".menu").addClass("open");
            $('body').addClass('stop-scrolling');
            $('.menu-overlay').addClass('open');

        }
    });

    $('.video').vide('video/5762708-preview.mp4');



    //
    // Wrap every letter in a span
    if ($(window).width() < 960) {

    }

    $('.ml11 .letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: false})
        .add({
            targets: '.ml11 .line',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0,$(".ml11 .letters").width()],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: function(el, i) {
            return 34 * (i+1)
        }
    }).add({
        targets: '.ml11',
        opacity: 1,
        duration: 100,
        easing: "easeOutExpo",
        delay: 100
    }).add({
        targets: '.ml11 .line',
        translateX: -[0,$(".ml11 .letters").width()],
        width: '160px',
        left: "-160px"
    });


    //

    // Wrap every letter in a span
    $('.ml14 .letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: false})
        .add({
            targets: '.ml14 .line',
            scaleX: [0,1],
            opacity: [0.5,1],
            easing: "easeInOutExpo",
            duration: 900
        }).add({
        targets: '.ml14 .letter',
        opacity: [0,1],
        translateX: [40,0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600',
        delay: function(el, i) {
            return 150 + 25 * i;
        }
    }).add({
        targets: '.ml14',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
    var ml4 = {};
    ml4.opacityIn = [0,1];
    ml4.scaleIn = [1];
    ml4.scaleOut = 0;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    anime.timeline({loop: true})
        .add({
            targets: '.ml4 .letters-1',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
        }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
    });
// Wrap every letter in a span
    $('.ml12 .letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: false})
        .add({
            targets: '.ml12 .line2',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.ml12 .line2',
            translateX: [0,$(".ml12 .letters").width()],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
        targets: '.ml12 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: function(el, i) {
            return 34 * (i+1)
        }
    }).add({
        targets: '.ml12',
        opacity: 1,
        duration: 100,
        easing: "easeOutExpo",
        delay: 100
    }).add({
        targets: '.ml12 .line2',
        translateX: -[0,$(".ml12 .letters").width()],
        width: '100%',
        left: "-100%",
        top: "20px"
    });


    //

    var ml4 = {};
    ml4.opacityIn = [0.2,1];
    ml4.scaleInTop = [1, 1];
    ml4.scaleOut = 3;
    ml4.goTop = 2;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    anime.timeline({loop: true})
        .add({
            targets: '.ml4 .letters-1',
            opacity: ml4.opacityIn,
            duration: ml4.durationIn
        }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
        top: '0'
    }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        duration: ml4.durationIn,
        top: '0',
        fontsize: '2em'
    }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
        top: '0'
    }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
        top: '0'
    }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500
    });



    //lock




});
var letterTime = 1000;

var lineDrawing = anime({
    targets: "path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutCubic",
    duration: letterTime,
    delay: function(el, i) {
        return letterTime * i;
    },
    begin: function(anim) {
        var letters = document.querySelectorAll("path"),
            i;

        for (i = 0; i < letters.length; ++i) {
            letters[i].setAttribute("stroke", "black");
            letters[i].setAttribute("fill", "none");
        }
    },
    update: function(anim) {
        if (anim.currentTime >= letterTime) {
            document.querySelector("#Shape1").setAttribute("fill", "#6DA8D6");
        }
        if (anim.currentTime >= letterTime) {
            document.querySelector("#Path1").setAttribute("fill", "#0F0F31");
        }

        if (anim.currentTime >=  6*letterTime) {
            document.querySelector("#Path2").setAttribute("fill", "#98D9D5");
        }
        if (anim.currentTime >=  letterTime) {
            document.querySelector("#Shape2").setAttribute("fill", "#082947");
        }
        if (anim.currentTime >=  letterTime) {
            document.querySelector("#Shape3").setAttribute("fill", "#082947");
        }
        if (anim.currentTime >=  letterTime) {
            document.querySelector("#Path3").setAttribute("fill", "#082947");
        }
        if (anim.currentTime >=  letterTime) {
            document.querySelector("#Path4").setAttribute("fill", "#BE4143");
        }
    },
    autoplay: false
});


var $window = $(window);
var $elem = $(".protect-your-ip");
function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return (docViewTop >= elemTop);
}
$(document).one("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        console.log(isScrolledIntoView($elem, $window));
        lineDrawing.play();
    }


});

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 0,
    effect: 'fade',
    loop: false,
    autoplay: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});
var swiper = new Swiper('.know-your-problem-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },

})



    $('select').niceSelect();
var vsOpts = {
    $slides: $('.v-slide'),
    $list: $('.v-slides'),
    duration: 10,
    lineHeight: 120
};

var vSlide = new TimelineMax({
    paused: true,
    repeat: -1
});

vsOpts.$slides.each(function(i) {
    vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
        y: i * -1 * vsOpts.lineHeight,
        ease: Elastic.easeOut.config(1, 0.9)
    })

});
vSlide.play();