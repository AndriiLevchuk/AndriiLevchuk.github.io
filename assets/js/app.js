
var VHChromeFix = function(selectors) {
    var self = this;
    var userAgent = navigator.userAgent.toLowerCase();
    var isAndroidChrome = /chrome/.test(userAgent) && /android/.test(userAgent);
    var isIOSChrome = /crios/.test(userAgent);

    if (isAndroidChrome || isIOSChrome) {
        // If we detected Chrome on Android or iOS
        // Cache elements and trigger fix on init
        this.getElements(selectors);
        this.fixAll();

        // Cache window dimensions
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;

        window.addEventListener('resize', function() {
            // Both width and height changed (orientation change)
            // This is a hack, as Android when eyboard pops up
            // Triggers orientation change
            if (self.windowWidth !== window.innerWidth && self.windowHeight !== window.innerHeight) {
                self.windowWidth = window.innerWidth;
                self.windowHeight = window.innerHeight;
                self.fixAll();
            }
        });
    }
};

VHChromeFix.prototype.getElements = function(selectors) {
    this.elements = [];
    // Convert selectors to array if they are not
    selectors = this.isArray(selectors) ? selectors : [selectors];

    for (var i = 0; i < selectors.length; i++) {
        // Get all elements for selector
        var selector = selectors[i].selector;
        var elements = document.querySelectorAll(selector);

        // Go through all elements for one selector to filter them
        for (var j = 0; j < elements.length; j++) {
            this.elements.push({
                domElement: elements[j],
                vh: selectors[i].vh
            });
        }
    }
};

VHChromeFix.prototype.isArray = function(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
};

VHChromeFix.prototype.fixAll = function() {
    for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        element.domElement.style.height = (window.innerHeight * element.vh / 100) + 'px';
    }
};
$("a.next").click (function() {
    $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
    return false;
});
$(document).ready(function() {

    var options = [
        {
            selector: '.hero',
            vh: 100,
        }
    ];

    var vhFix = new VHChromeFix(options);
if($( window ).width()>1024) {
    $.scrollify({
        section: ".panel",
       //easing: "easeOutExpo",
        scrollbars: true,
        scrollSpeed: 1200,
        updateHash: true,
        overflowScroll: true,
        interstitialSection : ".hero, .footer",
        before: function (i, panels) {
            var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        after: function (i, panels) {

        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") +"\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });
            pagination += "</ul>";
            $(".menu").append(pagination);
            $(".pagination a").on("click", $.scrollify.move);
        }
    });
}else{
    $.scrollify.disable();
};
    // $(".hero-title").lettering();
    $('.carousel').owlCarousel({
        loop:false,
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

        $('.arrow span.next').on('touchstart click',function() {
            var cls = $(this).closest("section").next().offset().top;
            $('html, body').animate({scrollTop: cls}, 'slow');
            return false;
        });


});




