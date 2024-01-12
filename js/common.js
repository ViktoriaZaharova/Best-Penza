$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.home-bg-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
	infinite: false,
});

$('.home-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	dots: true,
	infinite: false,
	swipe: false,
	appendDots: '.home-slider__nav',
	asNavFor: '.home-bg-slider, .home-image-slider',
});

$('.home-image-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
	infinite: false,
});

$(".home-slider").on('afterChange', function (event, slick, currentSlide) {
	$(".home-slider__cp").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
});

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});