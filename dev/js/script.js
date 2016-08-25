$(document).ready(function() {

    $("#carousel-teacher").owlCarousel({
        items: 1,
        pagination: false,
        navigation: true,
        navigationText: ["",""]
    });

    $('#fullpage').fullpage({
        scrollBar: true
    });
    $('.hero-video').on('canplaythrough', function() {
        this.play();
    });
    $('.common-move-btn').click( function(){
        $.fn.fullpage.moveSectionDown();
    })
    $(window).scroll( function(){
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){

                $(this).addClass('showing');

            }

        });

        $('.lessons-item').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){

                $(this).addClass('showing');

            }

        });
    });
    function initialize() {
        var mapProp = {
            center:new google.maps.LatLng(50.11092, 8.68213),
            zoom:13,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var loc = new google.maps.LatLng(50.11092, 8.68213);
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var infowindow = new google.maps.InfoWindow();
        infowindow.setContent("<img src='i/logo.png' alt='' class='addr-i'><div class='addr-wr'><p class='addr'>Address</p> <p class='addr'>Greenplatz Ben 29, Germany</p> <p class='addr'>60435 Frankfurt am Main</p></div>");
        infowindow.setPosition(loc);
        infowindow.open(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});
