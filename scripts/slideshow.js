$(function() {

	var width = 960;
	var animationSpeed = 1300;
	var pause = 3000;
	currentSlide = 1;

	var $slider = $('#slider');
	var $sliderContainer = $slider.find('.slides');
	var $slides = $sliderContainer.find('.slide');

	var intrval;

	function startSlider(){
		inerval = setInterval(function(){
			$sliderContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
				//currentSlide++;
				if (++currentSlide === $slides.length){
					currentSlide = 1;
					$sliderContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function pauseSlider(){
		clearInterval(inerval);
	}

	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

	startSlider();
});
