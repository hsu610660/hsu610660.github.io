$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

$(window).scroll( function(){
	$("#slideanim").css({"opacity":0.1,"position":"relative","right":"100px"});
	$('#slideanim').each( function(i){
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
		if( bottom_of_window > bottom_of_object-250 ){
			$(this).animate({'opacity':'1','left':'0'},1500);
		}
	});
});