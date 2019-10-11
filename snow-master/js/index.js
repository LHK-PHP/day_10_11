var xueColor="pink";
	var xueMin=5;
	var xueMax=50;
	var newOn=180;
	var xue=$("<div></div>").css("position", "absolute").html("❄");


$(function(){
	var documentwidth=$(document).width();
	var documentheight=$(document).height();
	setInterval(function(){
		var startleft = Math.random()*documentwidth;
		var endleft = Math.random()*documentwidth;
		var size = xueMin+Math.random()*xueMax;
		var startobacity =0.7+0.3*Math.random(); 
		var endobacity =0.2+0.3*Math.random(); 
		var fall = 4000 + documentheight * 10 * Math.random();
		xue.clone().appendTo($('body')).css({
			"left":startleft,
			"font-size":size,
			"obacity":startobacity,
			"color":xueColor,
			"top":"-55px",
			}).animate({
				"left":endleft,
				"top":documentheight,
				"obacity":endobacity,
			},fall,function(){
				$(this).remove();
			})
	},newOn)






	$(".img").eq(0).show().siblings().hide();
	var i = 0;
	setInterval(function(){
		 i++;
        if (i == 6) {
            i = 0;
        }
        $(".img").eq(i).fadeIn(1000).siblings().fadeOut(1000);
	},4000)
})