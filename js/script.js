// 初期設定
// デバイス判定
function setDivece() {
	var
	ua = navigator.userAgent,
	device = "";
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
		// スマートフォン用コード
		device = "sp";
	} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
		// タブレット用コード
		device = "sp";
	} else {
		// PC用コード
		device = "pc";
	}
	return device;
}
var
winW = 0,
mapPosX = 0,
scrlTargetPos = 0;



// ロード及びリサイズ時に画面幅取得
$(window).on('load resize', function() {
	winW = $(window).width();
});



// ロード時
$(function(){
	
	// ブラウザ判定
	var device = setDivece();
//	console.log(device);
	
	// arrow_leftボタン　クリック
	$('.prevBtn').click(function(){
		if(device == 'sp') {
			mapScroll('L', 1);
		} else {
			mapScroll('L', 2);
		}
	});
	// arrow_rightボタン　クリック
	$('.nextBtn').click(function(){
		if(device == 'sp') {
			mapScroll('R', 1);
		} else {
			mapScroll('R', 2);
		}
	});
	
	// ホバー [PC時]
	//if(device == 'pc') {
	//	$('.house').hover(function(){
	//		$(this).addClass('mover');
	//	}, function(){
	//		$(this).removeClass('mover');
	//	});
	//}
	
	// 横移動
	function mapScroll(dir, scale){
		mapPosX = $('.scrollx').scrollLeft();
		if(dir == 'L') {
			scrlTargetPos = mapPosX - 210;
		} else if(dir == 'R') {
			scrlTargetPos = mapPosX + 210;
		}
		$('.scrollx').animate({scrollLeft: scrlTargetPos}, 400);
	}
	
});
//190のところは(winW / scale)だった


// 位置設定
function setMapPos(pos) {
	if(pos.length !== 0) {
		if(pos == 'center') {
			var
			centerScrl = ($('.scrollx ul').innerWidth() / 2) - ($(window).width() / 2) - 210;
			console.log(centerScrl);
			$('.scrollx').animate({scrollLeft: centerScrl}, 400);
		} else {
			var
			houseTgt = '.' + pos,
			housePos = $(houseTgt).offset(),
			housePosX = housePos.left,
			houseW = $(houseTgt).innerWidth(),
			houseScrl = housePosX - ($(window).width() / 2) + (houseW / 2);
			$('.scrollx').animate({scrollLeft: houseScrl}, 400);
			$(houseTgt).addClass('active');
		}
	}
}
