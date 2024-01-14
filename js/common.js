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

$('.reviews-slider').slick({
	slidesToShow: 2,
	arrows: true,
	dots: true,
	appendDots: '.reviews-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$(".reviews-slider").on('afterChange', function (event, slick, currentSlide) {
	$(".reviews-slider__cp").text(currentSlide < 10 ? `0${currentSlide + 1}` : currentSlide + 1);
});

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});

$('.form-control').focus(function () {
	$('.form-group').removeClass('focus');
	$(this).parents('.form-group').addClass('focus');
});

$('.btn-toggle-news').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.container').find('.card-col:hidden').slice(0, 3).slideDown();

	var onBlock = $(this).parents('.container').find('.card-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});