// UI

$(document).ready(function(){
	$('#masthead span.toggle').click(function(){
		$(this).addClass('open');
		$('#nav-main-menu').toggle( "fade" );
	});
	$('main').click(function(){
		if($('#masthead span.toggle').hasClass('open')){
			$('#masthead span.toggle').removeClass('open');
			$('#nav-main-menu').toggle( "fade" );
		}	
	});
});