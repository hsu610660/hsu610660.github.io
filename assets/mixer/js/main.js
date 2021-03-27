$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(window).scroll( function(){
	$("#about").css({"opacity":0.1,"position":"relative","right":"100px"});
	$('#about').each( function(i){
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
		if( bottom_of_window > bottom_of_object-250 ){
			$(this).animate({'opacity':'1','left':'0'},1500);
		}
	});
});