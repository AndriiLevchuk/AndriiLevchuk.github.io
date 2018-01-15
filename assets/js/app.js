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
    $("#config-demo").click(function () {
        $("input[name=daterangepicker_start]").focus();
    });
    if($("input[name=daterangepicker_start]").focus()){
        $(".calendar.left .calendar-table").css("display","block");
        $(".calendar.right .calendar-table").css("display","none");
    }else if($("input[name=daterangepicker_end]").focus()){
        $(".calendar.left .calendar-table").css("display","none");
        $(".calendar.right .calendar-table").css("display","block");
    }





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
