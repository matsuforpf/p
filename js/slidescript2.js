//スライドショー
$(function(){
	$('#slideshow li:gt(0)').hide();
	setInterval(function(){
		$('#slideshow li:first').fadeOut(1500).next('li').fadeIn(1500).end().appendTo('#slideshow');
	},4000);
});
