/*	Javascript code for all elements
/*----------------------------------------------------*/
$(document).ready(function() {
	initMaps();
});


$(document).ready(function() {
    count(".coming-soon");           
});

/* Copyright thingy at the bottom */
$('#copyrightBox').hide();

$('#copyrightLink').click(function () {
      $('#copyrightBox').toggle('slide', {
         duration: 1000,
         easing: 'easeOutExpo',
         direction: 'up'
      });
});

/* Correctly tag the phones in Contact area */
window.onload = function () {
if (!jQuery.browser.mobile) {
    jQuery('body').on('click', 'a[href^="tel:"]', function() {
            jQuery(this).attr('href', 
                jQuery(this).attr('href').replace(/^tel:/, 'callto:'));
    });
}
};

/* -------- Owl Carousel MTCH -------- */
$(".quote-carousel").owlCarousel({
	slideSpeed : 300,
	autoPlay : true,
	paginationSpeed : 400,
	singleItem : true,		
});
// End Owl Carousel


/* -------- Counter Up -------- */
$('.counter').counterUp({
	delay: 10,
	time: 1000
});
// End Counter Up


/*	Count Down
/*---------------------------------------------------- MTCH*/
function count(elem){
    var $e = $(elem);
	if($e.length==0){
		return 0;
	};

	//CountDown
    var dateOfBeginning = new Date(),
        dateOfEnd = $e.closest('[data-end-date]').attr('data-end-date') || new Date((new Date()).getTime() + 3*30*24*3600*1000);

    countDown(dateOfBeginning, dateOfEnd); 

}


/* -------- Isotope Filtering -------- */
var $container = $('.isotope-gallery-container');
var $filter = $('.filter');
$(window).load(function () {
    // Initialize Isotope
    $container.isotope({
        itemSelector: '.gallery-item-wrapper'
    });
    $('.filter a').click(function () {
        var selector = $(this).attr('data-filter');
        var $iso_container = $(this).closest('.content-block,body').find('.isotope-gallery-container');
        $iso_container.isotope({ filter: selector });

        var $iso_filter = $(this).closest('.filter');
        $iso_filter.find('a').parent().removeClass('active');
        $(this).parent().addClass('active');
        return false;
    });
  /*  $filter.find('a').click(function () {
        var selector = $(this).attr('data-filter');
        $filter.find('a').parent().removeClass('active');
        $(this).parent().addClass('active');
    });*/
});
$(window).smartresize(function () {
    $container.isotope('reLayout');
});
// End Isotope Filtering


/* -------- Gallery Popup -------- */
$(document).ready(function(){
	$('.gallery-zoom').magnificPopup({ 
		type: 'image'
		// other options
	});
});
// End Gallery Popup


/* -------- Google Map -------- MTCH */
function initMap(elem) {

    var $e = $(elem);
	if($e.length==0){
		return 0;
	};

    var lat = parseFloat($e.attr('data-map-lat') || 44.429482);
    var long = parseFloat($e.attr('data-map-long') || 26.051369);
    var zoom = parseInt($e.attr('data-map-zoom') || 15);

    var marker_image = $e.attr('data-marker-image') || 'images/map-pin.png';

	//Map start init
    var mapOptions = {
        center: new google.maps.LatLng(lat, long),
        zoom: zoom,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{stylers:[{saturation:-100},{gamma:1}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:50},{gamma:0},{hue:"#50a5d1"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#333333"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{weight:0.5},{color:"#333333"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{gamma:1},{saturation:50}]}]
		}
                    
    var map = new google.maps.Map($e.get(0), mapOptions);
    var marker = new google.maps.Marker({
    	icon: marker_image,
        map: map,
        position: map.getCenter() 
    });
}

function initMaps() {
    $('.map').each(function(i, e) {
        initMap(e);
    })
}
//end Google Map



/* -------- Header 1 Nav -------- */
$(".headroom").headroom({
});

/* Soft scroll */
$(function() {
    $('a[href^="#"]').bind('click', function(event) {
        var $anchor = $(this);
        var href = $anchor.attr('href');
        try {
            var elem = $(href);
            if(elem.length) {
                $('html, body').stop().animate({
                    scrollTop: elem.offset().top
                }, 1000);

                event.preventDefault();
            }
        }
        catch(err) {}
    });
});

    
/* -------- Header 3 Nav -------- MTCH */

function initHeader3() {
    $('.nav-slide-btn').click(function() {
        $('.pull').slideToggle();
    });

    $('#nav-toggle').click(function(e) {
        $(this).toggleClass('active');
        e.preventDefault();
    })
}
$(function() {
    initHeader3();
});

