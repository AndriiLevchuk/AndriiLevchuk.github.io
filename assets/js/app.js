
var start = moment().subtract(29, 'days');
    var end = moment();
    $('#config-demo').daterangepicker({
        "linkedCalendars": false,
        "startDate": "01/09/2018",
        "endDate": "01/15/2018"
    }, function(start, end, label) {
        console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    });


    $(".applyBtn ").click(function () {
        var start = $("input[name=daterangepicker_start]").val();
        var end = $("input[name=daterangepicker_end]").val();

       $("#config-demo").empty();
        $("#config-demo").append(start + ' - ' + end);

    } );
    // $("#config-demo").click(function () {
    //     $("input[name=daterangepicker_start]").focus();
    // });
    if($("input[name=daterangepicker_start]").focus()){
        $(".calendar.left .calendar-table").css("display","block");
        $(".calendar.right .calendar-table").css("display","none");
    }else if($("input[name=daterangepicker_end]").focus()){
        $(".calendar.left .calendar-table").css("display","none");
        $(".calendar.right .calendar-table").css("display","block");
    }
    // $("#config-demo").hover(function () {
    //     $(".daterangepicker.dropdown-menu").css("display","block");
    // });


    // $('ul.menu-nav li.dropdown').hover(function() {
    //     $(this).find('ul li.dropdown:nth-child(2) ').stop(true, true).delay(200).fadeIn(500);
    // }, function() {
    //     $(this).find('ul li.dropdown:nth-child(2)').stop(true, true).delay(200).fadeOut(500);
    // });
    //
    // //$(".dropdown-menu.open [role=combobox]").append("<div></div>");
    //
    // $(document).ready(function(){
    //     $('.dropdown-submenu a.test').on("click", function(e){
    //         $(this).next('ul').toggle();
    //         e.stopPropagation();
    //         e.preventDefault();
    //     });
    // });
    // $(function() {
    //
    //     var start = moment().subtract(29, 'days');
    //     var end = moment();
    //
    //     function cb(start, end) {
    //         $('#config-demo ').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    //     }
    //
    //     $('#config-demo').daterangepicker({
    //         startDate: start,
    //         endDate: end,
    //
    //     }, cb);
    //
    //     cb(start, end);
    //
    // });
    $(document).ready(function() {

        $('.login.owl-carousel').owlCarousel({
            loop:false,
            margin:10,
            merge:true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        });

        if($( window ).width() < 720){
            $('.card-box.owl-carousel').owlCarousel({
                stagePadding: 30,
                loop:false,
                margin:5,
                nav:true,
                mergeFit:true,
                items:2
            });
            $('.section_5.owl-carousel').owlCarousel({
                loop:false,
                margin:10,
                merge:true,
                navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:1,
                        nav:true,
                        loop:false
                    }
                }
            });
            $('.section_3.owl-carousel').owlCarousel({
                loop:false,
                margin:10,
                merge:true,
                navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:1,
                        nav:true,
                        loop:false
                    }
                }
            });
        }
    });
