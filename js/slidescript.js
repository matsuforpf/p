$(function(){
	// スクロールの方向　-1の時には左、1の時には右
	var dir = -1;
	
	// スクロールのインターバル(何秒ごとにスクロールさせるか。3000ミリ秒に設定)
	var interval = 5000;
	
	// スクロールのスピード(700ミリ秒に設定)
	var duration = 1000;
	
	// タイマー用の変数
	var timer;

	// リストの順番を変更（3番目を1番最初にする）
	$("#slide ul").prepend($("#slide li:last-child"));
	
	// リストの位置を変更（画像1枚分ずらす）
	$("#slide ul").css("left", -1920);

	// SlideTimer();
	timer = setInterval(slideTimer, interval);
	
	function slideTimer(){
		if(dir == -1){
			$("#slide ul").animate({"left" : "-=1920px" }, duration, function(){
				$(this).append($("#slide li:first-child"));
				$(this).css("left", -1920);
			});
		}else{
			$("#slide ul").animate({"left" : "+=1920px" }, duration, function(){
				$(this).prepend($("#slide li:last-child"));
				$(this).css("left", -1920);
				dir = -1;
			});
		}
	}

	// 前へボタン
	$("#prevBtn1").click(function(){
		// スクロール方向の切り替え（右）
		dir = 1;
		
		// タイマーを停止して再スタート
		clearInterval(timer);
		timer = setInterval(slideTimer, interval);
		
		// 初回の関数実行
		slideTimer();
	});
	
	// 次へボタン
	$("#nextBtn1").click(function(){
		// スクロール方向の切り替え（左）
		dir = -1;
		clearInterval(timer);
		timer = setInterval(slideTimer, interval);
		
		slideTimer();
	});
});
