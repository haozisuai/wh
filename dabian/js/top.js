$(function(){
	var aud = document.getElementById("aud")
	console.log($("#aud"))
	$(".log1").on("click",function(){
		$(this).css({display:"none"})
		$(".log2").css({display:"block"})
		aud.play()
	})
	$(".log2").on("click",function(){
		$(this).css({display:"none"})
		$(".log1").css({display:"block"})
		aud.pause()
	})
})
