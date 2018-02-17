$(document).ready(function($){
	var offset = 300;
	var offset_opacity = 1200;
	var duration = 1000;
	var	top = $('.top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		if($(this).scrollTop() > offset){
			top.addClass('cd-is-visible')
		}else{
			top.removeClass('cd-is-visible cd-fade-out');
		}

		if( $(this).scrollTop() > offset_opacity ) { 
			top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, duration
		);
	});
});