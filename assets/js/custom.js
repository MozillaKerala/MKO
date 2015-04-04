// UI

$(document).ready(function(){
	$('#masthead span.toggle').click(function(){
		$(this).toggleClass('open');
		$('#nav-main-menu').toggle( "fade" );
	});
});