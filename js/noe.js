$(function(){
	$(".logo1>.log1,.logo3>.log2").on("click",function(){
		$(".logo1").nextAll().find(".log1").css({display:"block"})
		$(".logo1").nextAll().find(".log2").css({display:"none"})
		$(".logo1").prevAll().find(".log1").css({display:"none"})
		$(".logo1").prevAll().find(".log2").css({display:"block"})
		$(".logo1").nextAll().find(".loog").css({background:"#3c3c3c"})
		$(".logo1").nextAll().find(".tis").css({color:"white"})
		$(".logo1").prevAll().find(".loog").css({background:"#fe6b12"})
		$(".logo1").prevAll().find(".tis").css({color:"#fe6b12"})
		console.log("aa")
	})
	$(".logo1>.log1").on("click",function(){
		$("this").css({display:"none"})
		$(".logo1>.log2").css({display:"block"})
		$(".logo1>.tis").css({color:"#fe6b12"})
	})
	$(".logo1>.log2").on("click",function(){
		$("this").css({display:"none"})
		$(".logo1>.log1").css({display:"block"})
		$(".logo1>.loog").css({background:"#3c3c3c"})
	})
	$(".logo2>.log1,.logo2>.log2").on("click",function(){
		$(".logo2").nextAll().find(".log1").css({display:"block"})
		$(".logo2").nextAll().find(".log2").css({display:"none"})
		$(".logo2").prevAll().find(".log1").css({display:"none"})
		$(".logo2").prevAll().find(".log2").css({display:"block"})
		$(".logo2").nextAll().find(".loog").css({background:"#3c3c3c"})
		$(".logo2").nextAll().find(".tis").css({color:"white"})
		$(".logo2").prevAll().find(".loog").css({background:"#fe6b12"})
		$(".logo2").prevAll().find(".tis").css({color:"#fe6b12"})
		console.log("aa")
	})
	$(".log1").on("click",function(){
		$(this).css({display:"none"})
		$(".logo2>.tis").css({color:"#fe6b12"})
	})
	$(".log2").on("click",function(){
		$(this).css({display:"none"})
	})
	$(".logo2>.log1").on("click",function(){
		$("this").css({display:"none"})
		$(".logo2>.log2").css({display:"block"})
		console.log("00")
	})
	$(".logo2>.log2").on("click",function(){
		$("this").css({display:"none"})
		$(".logo2>.log1").css({display:"block"})
		$(".logo2>.loog").css({background:"#3c3c3c"})
		$(".logo2>.tis").css({color:"white"})
	})
	$(".logo3>.log1,.logo3>.log2").on("click",function(){
		$(".logo3").nextAll().find(".log1").css({display:"block"})
		$(".logo3").nextAll().find(".log2").css({display:"none"})
		$(".logo3").prevAll().find(".log1").css({display:"none"})
		$(".logo3").prevAll().find(".log2").css({display:"block"})
		$(".logo3").nextAll().find(".loog").css({background:"#3c3c3c"})
		$(".logo3").nextAll().find(".tis").css({color:"white"})
		$(".logo3").prevAll().find(".loog").css({background:"#fe6b12"})
		$(".logo3").prevAll().find(".tis").css({color:"#fe6b12"})
		console.log("aa")
	})
	$(".logo3>.log1").on("click",function(){
		$("this").css({display:"none"})
		$(".logo3>.log2").css({display:"block"})
		$(".logo3>.tis").css({color:"#fe6b12"})
	})
	$(".logo3>.log2").on("click",function(){
		$("this").css({display:"none"})
		$(".logo3>.log1").css({display:"block"})
		$(".logo3>.loog").css({background:"#3c3c3c"})
	})
	$(".logo4>.log1,.logo4>.log2").on("click",function(){
		$(".logo4").nextAll().find(".log1").css({display:"block"})
		$(".logo4").nextAll().find(".log2").css({display:"none"})
		$(".logo4").prevAll().find(".log1").css({display:"none"})
		$(".logo4").prevAll().find(".log2").css({display:"block"})
		$(".logo4").nextAll().find(".loog").css({background:"#3c3c3c"})
		$(".logo4").nextAll().find(".tis").css({color:"white"})
		$(".logo4").prevAll().find(".loog").css({background:"#fe6b12"})
		$(".logo4").prevAll().find(".tis").css({color:"#fe6b12"})
		console.log("aa")
	})
	$(".logo4>.log1").on("click",function(){
		$("this").css({display:"none"})
		$(".logo4>.log2").css({display:"block"})
		$(".logo4>.tis").css({color:"#fe6b12"})
	})
	$(".logo4>.log2").on("click",function(){
		$("this").css({display:"none"})
		$(".logo4>.log1").css({display:"block"})
		$(".logo4>.loog").css({background:"#3c3c3c"})
	})
	$(".logo5>.log1,.logo5>.log2").on("click",function(){
		$(".logo5").nextAll().find(".log1").css({display:"block"})
		$(".logo5").nextAll().find(".log2").css({display:"none"})
		$(".logo5").prevAll().find(".log1").css({display:"none"})
		$(".logo5").prevAll().find(".log2").css({display:"block"})
		$(".logo5").nextAll().find(".loog").css({background:"#3c3c3c"})
		$(".logo5").nextAll().find(".tis").css({color:"white"})
		$(".logo5").prevAll().find(".loog").css({background:"#fe6b12"})
		$(".logo5").prevAll().find(".tis").css({color:"#fe6b12"})
		console.log("aa")
	})
	$(".logo5>.log1").on("click",function(){
		$("this").css({display:"none"})
		$(".logo5>.log2").css({display:"block"})
		$(".logo5>.tis").css({color:"#fe6b12"})
	})
	$(".logo5>.log2").on("click",function(){
		$("this").css({display:"none"})
		$(".logo5>.log1").css({display:"block"})
		$(".logo5>.loog").css({background:"#3c3c3c"})
	})
	$(".logo6>.log1,.logo6>.log2").on("click",function(){
		$(".logo6").nextAll().find(".log1").css({display:"block"})
		$(".logo6").nextAll().find(".log2").css({display:"none"})
		$(".logo6").prevAll().find(".log1").css({display:"none"})
		$(".logo6").prevAll().find(".log2").css({display:"block"})
		$(".logo6").nextAll().find(".loog").css({background:"#3c3c3c"})
		$(".logo6").nextAll().find(".tis").css({color:"white"})
		$(".logo6").prevAll().find(".loog").css({background:"#fe6b12"})
		$(".logo6").prevAll().find(".tis").css({color:"#fe6b12"})
		console.log("aa")
	})
	$(".logo6>.log1").on("click",function(){
		$("this").css({display:"none"})
		$(".logo6>.log2").css({display:"block"})
		$(".logo6>.tis").css({color:"#fe6b12"})
	})
	$(".logo6>.log2").on("click",function(){
		$("this").css({display:"none"})
		$(".logo6>.log1").css({display:"block"})
		$(".logo6>.loog").css({background:"#3c3c3c"})
	})
				var a =0

  			$(".two>.bright").on("click",function(){
  				if(a>2){
  					$(".lub").css({left:'0px'});
  					a =0
  				}
  				a++
  				var n = a*-1920
			console.log(n)
    		$(".lub").animate({left:n});
  });
  			$(".two>.bleft").on("click",function(){
    		if(a<=0){
  					$(".lub").css({left:'-5760px'});
  					a =3
  				}
  				a--
  				var n = a*-1920
			console.log(n)
    		$(".lub").animate({left:n});
  });
  			$(".on1").on("click",function(){
  				$(".on1>.lo1").css({display:'none'})
  				$(".on1>.lo2").css({display:"inline-block"})
  				$(".on1>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".on2>.lo2,.on3>.lo2,.on4>.lo2,.on5>.lo2").css({display:"none"})
  				$(".on2>i,.on3>i,.on4>i,.on5>i").css({fontSize:"30px",color:"white"})
  				$(".on2>.lo1,.on3>.lo1,.on4>.lo1,.on5>.lo1").css({display:'inline-block'})
  				$(".s3-2").stop().fadeIn(1000);
  				$(".s3-1,.s3-3,.s3-4,.s3-5").stop().fadeOut(1000);
  			})
  			$(".on2").on("click",function(){
  				$(".on2>.lo1").css({display:'none'})
  				$(".on2>.lo2").css({display:"inline-block"})
  				$(".on2>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".on1>.lo2,.on3>.lo2,.on4>.lo2,.on5>.lo2").css({display:"none"})
  				$(".on1>i,.on3>i,.on4>i,.on5>i").css({fontSize:"30px",color:"white"})
  				$(".on1>.lo1,.on3>.lo1,.on4>.lo1,.on5>.lo1").css({display:'inline-block'})
  				$(".s3-1").stop().fadeIn(1000);
  				$(".s3-2,.s3-3,.s3-4,.s3-5").stop().fadeOut(1000);
  			})
  			$(".on3").on("click",function(){
  				$(".on3>.lo1").css({display:'none'})
  				$(".on3>.lo2").css({display:"inline-block"})
  				$(".on3>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".on1>.lo2,.on2>.lo2,.on4>.lo2,.on5>.lo2").css({display:"none"})
  				$(".on1>i,.on2>i,.on4>i,.on5>i").css({fontSize:"30px",color:"white"})
  				$(".on1>.lo1,.on2>.lo1,.on4>.lo1,.on5>.lo1").css({display:'inline-block'})
  				$(".s3-3").stop().fadeIn(1000);
  				$(".s3-2,.s3-1,.s3-4,.s3-5").stop().fadeOut(1000);
  			})
  			$(".on4").on("click",function(){
  				$(".on4>.lo1").css({display:'none'})
  				$(".on4>.lo2").css({display:"inline-block"})
  				$(".on4>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".on2>.lo2,.on3>.lo2,.on1>.lo2,.on5>.lo2").css({display:"none"})
  				$(".on2>i,.on3>i,.on1>i,.on5>i").css({fontSize:"30px",color:"white"})
  				$(".on2>.lo1,.on3>.lo1,.on1>.lo1,.on5>.lo1").css({display:'inline-block'})
  				$(".s3-4").stop().fadeIn(1000);
  				$(".s3-2,.s3-3,.s3-1,.s3-5").stop().fadeOut(1000);
  			})
  			$(".on5").on("click",function(){
  				$(".on5>.lo1").css({display:'none'})
  				$(".on5>.lo2").css({display:"inline-block"})
  				$(".on5>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".on2>.lo2,.on3>.lo2,.on4>.lo2,.on1>.lo2").css({display:"none"})
  				$(".on2>i,.on3>i,.on4>i,.on1>i").css({fontSize:"30px",color:"white"})
  				$(".on2>.lo1,.on3>.lo1,.on4>.lo1,.on1>.lo1").css({display:'inline-block'})
  				$(".s3-5").stop().fadeIn(1000);
  				$(".s3-2,.s3-3,.s3-4,.s3-1").stop().fadeOut(1000);
  			})
  			//游戏模式
  			$(".wn1").on("click",function(){
  				$(".wn1>.wo1").css({display:'none'})
  				$(".wn1>.wo2").css({display:"inline-block"})
  				$(".wn1>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".wn2>.wo2,.wn3>.wo2,.wn4>.wo2,.wn5>.wo2").css({display:"none"})
  				$(".wn2>i,.wn3>i,.wn4>i,.wn5>i").css({fontSize:"30px",color:"white"})
  				$(".wn2>.wo1,.wn3>.wo1,.wn4>.wo1,.wn5>.wo1").css({display:'inline-block'})
  				$(".ba1").stop().fadeIn(1000);
  				$(".ba2,.ba3,.ba4,.ba5").stop().fadeOut(1000);
  			})
  			$(".wn2").on("click",function(){
  				$(".wn2>.wo1").css({display:'none'})
  				$(".wn2>.wo2").css({display:"inline-block"})
  				$(".wn2>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".wn1>.wo2,.wn3>.wo2,.wn4>.wo2,.wn5>.wo2").css({display:"none"})
  				$(".wn1>i,.wn3>i,.wn4>i,.wn5>i").css({fontSize:"30px",color:"white"})
  				$(".wn1>.wo1,.wn3>.wo1,.wn4>.wo1,.wn5>.wo1").css({display:'inline-block'})
  				$(".ba2").stop().fadeIn(1000);
  				$(".ba1,.ba3,.ba4,.ba5").stop().fadeOut(1000);
  			})
  			$(".wn3").on("click",function(){
  				$(".wn3>.wo1").css({display:'none'})
  				$(".wn3>.wo2").css({display:"inline-block"})
  				$(".wn3>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".wn2>.wo2,.wn3>.wo2,.wn4>.wo2,.wn5>.wo2").css({display:"none"})
  				$(".wn2>i,.wn1>i,.wn4>i,.wn5>i").css({fontSize:"30px",color:"white"})
  				$(".wn2>.wo1,.wn1>.wo1,.wn4>.wo1,.wn5>.wo1").css({display:'inline-block'})
  				$(".ba3").stop().fadeIn(1000);
  				$(".ba2,.ba1,.ba4,.ba5").stop().fadeOut(1000);
  			})
  			$(".wn4").on("click",function(){
  				$(".wn4>.wo1").css({display:'none'})
  				$(".wn4>.wo2").css({display:"inline-block"})
  				$(".wn4>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".wn2>.wo2,.wn3>.wo2,.wn1>.wo2,.wn5>.wo2").css({display:"none"})
  				$(".wn2>i,.wn3>i,.wn1>i,.wn5>i").css({fontSize:"30px",color:"white"})
  				$(".wn2>.wo1,.wn3>.wo1,.wn1>.wo1,.wn5>.wo1").css({display:'inline-block'})
  				$(".ba4").stop().fadeIn(1000);
  				$(".ba2,.ba3,.ba1,.ba5").stop().fadeOut(1000);
  			})
  			$(".wn5").on("click",function(){
  				$(".wn5>.wo1").css({display:'none'})
  				$(".wn5>.wo2").css({display:"inline-block"})
  				$(".wn5>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".wn2>.wo2,.wn3>.wo2,.wn4>.wo2,.wn1>.wo2").css({display:"none"})
  				$(".wn2>i,.wn3>i,.wn4>i,.wn1>i").css({fontSize:"30px",color:"white"})
  				$(".wn2>.wo1,.wn3>.wo1,.wn4>.wo1,.wn1>.wo1").css({display:'inline-block'})
  				$(".ba5").stop().fadeIn(1000);
  				$(".ba2,.ba3,.ba4,.ba1").stop().fadeOut(1000);
  			})
  			//赛车展示
  			$(".an1").on("click",function(){
  				$(".an1>.ao1").css({display:'none'})
  				$(".an1>.ao2").css({display:"inline-block"})
  				$(".an1>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".an2>.ao2,.an3>.ao2,.an4>.ao2,.an5>.ao2").css({display:"none"})
  				$(".an2>i,.an3>i,.an4>i,.an5>i").css({fontSize:"30px",color:"white"})
  				$(".an2>.ao1,.an3>.ao1,.an4>.ao1,.an5>.ao1").css({display:'inline-block'})
  				$(".s4-1").stop().fadeIn(1000);
  				$(".s4-2,.s4-3,.s4-4,.s4-5").stop().fadeOut(1000);
  			})
  			$(".an2").on("click",function(){
  				$(".an2>.ao1").css({display:'none'})
  				$(".an2>.ao2").css({display:"inline-block"})
  				$(".an2>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".an1>.ao2,.an3>.ao2,.an4>.ao2,.an5>.ao2").css({display:"none"})
  				$(".an1>i,.an3>i,.an4>i,.an5>i").css({fontSize:"30px",color:"white"})
  				$(".an1>.ao1,.an3>.ao1,.an4>.ao1,.an5>.ao1").css({display:'inline-block'})
  				$(".s4-2").stop().fadeIn(1000);
  				$(".s4-1,.s4-3,.s4-4,.s4-5").stop().fadeOut(1000);
  			})
  			$(".an3").on("click",function(){
  				$(".an3>.ao1").css({display:'none'})
  				$(".an3>.ao2").css({display:"inline-block"})
  				$(".an3>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".an1>.ao2,.an2>.ao2,.an4>.ao2,.an5>.ao2").css({display:"none"})
  				$(".an1>i,.an2>i,.an4>i,.an5>i").css({fontSize:"30px",color:"white"})
  				$(".an1>.ao1,.an2>.ao1,.an4>.ao1,.an5>.ao1").css({display:'inline-block'})
  				$(".s4-3").stop().fadeIn(1000);
  				$(".s4-1,.s4-2,.s4-4,.s4-5").stop().fadeOut(1000);
  			})
  			$(".an4").on("click",function(){
  				$(".an4>.ao1").css({display:'none'})
  				$(".an4>.ao2").css({display:"inline-block"})
  				$(".an4>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".an1>.ao2,.an3>.ao2,.an2>.ao2,.an5>.ao2").css({display:"none"})
  				$(".an1>i,.an3>i,.an2>i,.an5>i").css({fontSize:"30px",color:"white"})
  				$(".an1>.ao1,.an3>.ao1,.an2>.ao1,.an5>.ao1").css({display:'inline-block'})
  				$(".s4-4").stop().fadeIn(1000);
  				$(".s4-1,.s4-3,.s4-2,.s4-5").stop().fadeOut(1000);
  			})
  			$(".an5").on("click",function(){
  				$(".an5>.ao1").css({display:'none'})
  				$(".an5>.ao2").css({display:"inline-block"})
  				$(".an5>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".an1>.ao2,.an3>.ao2,.an4>.ao2,.an2>.ao2").css({display:"none"})
  				$(".an1>i,.an3>i,.an4>i,.an2>i").css({fontSize:"30px",color:"white"})
  				$(".an1>.ao1,.an3>.ao1,.an4>.ao1,.an2>.ao1").css({display:'inline-block'})
  				$(".s4-5").stop().fadeIn(1000);
  				$(".s4-1,.s4-3,.s4-4,.s4-2").stop().fadeOut(1000);
  			})
  			//地图展示
  			$(".bn5").on("click",function(){
  				$(".bn5>.bo1").css({display:'none'})
  				$(".bn5>.bo2").css({display:"inline-block"})
  				$(".bn5>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".bn1>.bo2,.bn3>.bo2,.bn4>.bo2,.bn2>.bo2").css({display:"none"})
  				$(".bn1>i,.bn3>i,.bn4>i,.bn2>i").css({fontSize:"30px",color:"white"})
  				$(".bn1>.bo1,.bn3>.bo1,.bn4>.bo1,.bn2>.bo1").css({display:'inline-block'})
  				$(".s5-5").stop().fadeIn(1000);
  				$(".s5-1,.s5-3,.s5-4,.s5-2").stop().fadeOut(1000);
  			})
  			$(".bn4").on("click",function(){
  				$(".bn4>.bo1").css({display:'none'})
  				$(".bn4>.bo2").css({display:"inline-block"})
  				$(".bn4>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".bn1>.bo2,.bn3>.bo2,.bn5>.bo2,.bn2>.bo2").css({display:"none"})
  				$(".bn1>i,.bn3>i,.bn5>i,.bn2>i").css({fontSize:"30px",color:"white"})
  				$(".bn1>.bo1,.bn3>.bo1,.bn5>.bo1,.bn2>.bo1").css({display:'inline-block'})
  				$(".s5-4").stop().fadeIn(1000);
  				$(".s5-1,.s5-3,.s5-5,.s5-2").stop().fadeOut(1000);
  			})
  			$(".bn3").on("click",function(){
  				$(".bn3>.bo1").css({display:'none'})
  				$(".bn3>.bo2").css({display:"inline-block"})
  				$(".bn3>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".bn1>.bo2,.bn4>.bo2,.bn5>.bo2,.bn2>.bo2").css({display:"none"})
  				$(".bn1>i,.bn4>i,.bn5>i,.bn2>i").css({fontSize:"30px",color:"white"})
  				$(".bn1>.bo1,.bn4>.bo1,.bn5>.bo1,.bn2>.bo1").css({display:'inline-block'})
  				$(".s5-3").stop().fadeIn(1000);
  				$(".s5-1,.s5-4,.s5-5,.s5-2").stop().fadeOut(1000);
  			})
  			$(".bn2").on("click",function(){
  				$(".bn2>.bo1").css({display:'none'})
  				$(".bn2>.bo2").css({display:"inline-block"})
  				$(".bn2>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".bn1>.bo2,.bn3>.bo2,.bn5>.bo2,.bn4>.bo2").css({display:"none"})
  				$(".bn1>i,.bn3>i,.bn5>i,.bn4>i").css({fontSize:"30px",color:"white"})
  				$(".bn1>.bo1,.bn3>.bo1,.bn5>.bo1,.bn4>.bo1").css({display:'inline-block'})
  				$(".s5-2").stop().fadeIn(1000);
  				$(".s5-1,.s5-3,.s5-5,.s5-4").stop().fadeOut(1000);
  			})
  			$(".bn1").on("click",function(){
  				$(".bn1>.bo1").css({display:'none'})
  				$(".bn1>.bo2").css({display:"inline-block"})
  				$(".bn1>i").css({fontSize:"40px",color:"#fe6b12"})
  				$(".bn4>.bo2,.bn3>.bo2,.bn5>.bo2,.bn2>.bo2").css({display:"none"})
  				$(".bn4>i,.bn3>i,.bn5>i,.bn2>i").css({fontSize:"30px",color:"white"})
  				$(".bn4>.bo1,.bn3>.bo1,.bn5>.bo1,.bn2>.bo1").css({display:'inline-block'})
  				$(".s5-1").stop().fadeIn(1000);
  				$(".s5-4,.s5-3,.s5-5,.s5-2").stop().fadeOut(1000);
  			})
  			
  			
  		var h = $(window).innerHeight()-$(".top").height();
	$(".box").height(h+200).children().find(".zhp").height(h+200);
//	$('.two').height(h+400)
	console.log($(window).innerHeight())
//	$(".screen li").each(function(k,v){
//		$(v).css("background-color",colorArr[k])
//	});
	
	//获取当前页面的地址栏
	var pageHash = window.location.hash.slice(1);
	console.log(pageHash)
	//如果存在哈希值，滑动到指定屏幕
	if(pageHash){
		$(".box>.one").animate({"top":($(".box").height()+200)*-pageHash},2000,"elasticOut",function(){
			flag = true;
		})
	}
	
	//多次滚动鼠标，算触发事件
	var count = 0;
	//记录当前的屏幕
	var screenIndex = 0;
	//节流阀
	var flag = true;
	var n =0
	MouseWheel($(document)[0],function(e,down){
		if(count > 5){
			//滚轮向上，页面向下
			if(down){
				console.log(count,screenIndex,flag)
				//如果当前屏数没到第一屏，允许滑动
				if(screenIndex > 0){
					//开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex--;
						var target = $(".box").height()+200;
//						console.log(target)
						$(".box>.one").animate({"top":-target*screenIndex},2000,"elasticOut",function(){
							flag = true;
							n++
						})
					}
					console.log(count,screenIndex,flag)
				}
				if(screenIndex==0){
						$("logo1").find(".log1").css({display:"block"})
						$("logo1").find(".log2").css({display:"none"})
						$(".logo1").nextAll().find(".log1").css({display:"block"})
						$(".logo1").nextAll().find(".log2").css({display:"none"})
						$(".logo1").prevAll().find(".log1").css({display:"none"})
						$(".logo1").prevAll().find(".log2").css({display:"block"})
						$(".logo1").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo1").nextAll().find(".tis").css({color:"white"})
						$(".logo1").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo1").prevAll().find(".tis").css({color:"#fe6b12"})
					} else if(screenIndex==1){
						$("logo2").find(".log1").css({display:"block"})
						$("logo2").find(".log2").css({display:"none"})
						$(".logo2").nextAll().find(".log1").css({display:"block"})
						$(".logo2").nextAll().find(".log2").css({display:"none"})
						$(".logo2").prevAll().find(".log1").css({display:"none"})
						$(".logo2").prevAll().find(".log2").css({display:"block"})
						$(".logo2").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo2").nextAll().find(".tis").css({color:"white"})
						$(".logo2").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo2").prevAll().find(".tis").css({color:"#fe6b12"})
					}else if(screenIndex==2){
						$("logo3").find(".log1").css({display:"block"})
						$("logo3").find(".log2").css({display:"none"})
						$(".logo3").nextAll().find(".log1").css({display:"block"})
						$(".logo3").nextAll().find(".log2").css({display:"none"})
						$(".logo3").prevAll().find(".log1").css({display:"none"})
						$(".logo3").prevAll().find(".log2").css({display:"block"})
						$(".logo3").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo3").nextAll().find(".tis").css({color:"white"})
						$(".logo3").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo3").prevAll().find(".tis").css({color:"#fe6b12"})
					}else if(screenIndex==3){
						$("logo4").find(".log1").css({display:"block"})
						$("logo4").find(".log2").css({display:"none"})
						$(".logo4").nextAll().find(".log1").css({display:"block"})
						$(".logo4").nextAll().find(".log2").css({display:"none"})
						$(".logo4").prevAll().find(".log1").css({display:"none"})
						$(".logo4").prevAll().find(".log2").css({display:"block"})
						$(".logo4").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo4").nextAll().find(".tis").css({color:"white"})
						$(".logo4").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo4").prevAll().find(".tis").css({color:"#fe6b12"})
					}else if(screenIndex==4){
						$("logo5").find(".log1").css({display:"block"})
						$("logo5").find(".log2").css({display:"none"})
						$(".logo5").nextAll().find(".log1").css({display:"block"})
						$(".logo5").nextAll().find(".log2").css({display:"none"})
						$(".logo5").prevAll().find(".log1").css({display:"none"})
						$(".logo5").prevAll().find(".log2").css({display:"block"})
						$(".logo5").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo5").nextAll().find(".tis").css({color:"white"})
						$(".logo5").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo5").prevAll().find(".tis").css({color:"#fe6b12"})
					}else if(screenIndex==5){
						$("logo6").find(".log1").css({display:"block"})
						$("logo6").find(".log2").css({display:"none"})
						$(".logo6").nextAll().find(".log1").css({display:"block"})
						$(".logo6").nextAll().find(".log2").css({display:"none"})
						$(".logo6").prevAll().find(".log1").css({display:"none"})
						$(".logo6").prevAll().find(".log2").css({display:"block"})
						$(".logo6").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo6").nextAll().find(".tis").css({color:"white"})
						$(".logo6").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo6").prevAll().find(".tis").css({color:"#fe6b12"})
					}
				count = 0;
			}else{
				console.log(count,screenIndex,flag)
				
				//如果当前屏数没到最后一屏，允许滑动
				if(screenIndex < $(".box .zhp").length-1){
					//开关允许，执行滑动
					if(flag == true){
						flag = false;
						screenIndex++;
						var target = $(".box").height()+200;
						$(".box>.one").animate({"top":-target*screenIndex},2000,"elasticOut",function(){
							flag = true;
						})
					}
					console.log(count,screenIndex,flag)
//					console.log(target)
				}
				console.log($("logo1").find(".log1"))
				if(screenIndex==0){
						$("logo1").find(".log1").css({display:"none"})
						$("logo1").find(".log2").css({display:"block"})
						$(".logo1").nextAll().find(".log1").css({display:"block"})
						$(".logo1").nextAll().find(".log2").css({display:"none"})
						$(".logo1").prevAll().find(".log1").css({display:"none"})
						$(".logo1").prevAll().find(".log2").css({display:"block"})
						$(".logo1").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo1").nextAll().find(".tis").css({color:"white"})
						$(".logo1").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo1").prevAll().find(".tis").css({color:"#fe6b12"})
					}else if(screenIndex==1){
						$("logo2").find(".log1").css({display:"none"})
						$("logo2").find(".log2").css({display:"block"})
						$(".logo2").nextAll().find(".log1").css({display:"block"})
						$(".logo2").nextAll().find(".log2").css({display:"none"})
						$(".logo2").prevAll().find(".log1").css({display:"none"})
						$(".logo2").prevAll().find(".log2").css({display:"block"})
						$(".logo2").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo2").nextAll().find(".tis").css({color:"white"})
						$(".logo2").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo2").prevAll().find(".tis").css({color:"#fe6b12"})
					}else if(screenIndex==2){
						$("logo3").find(".log1").css({display:"none"})
						$("logo3").find(".log2").css({display:"block"})
						$(".logo3").nextAll().find(".log1").css({display:"block"})
						$(".logo3").nextAll().find(".log2").css({display:"none"})
						$(".logo3").prevAll().find(".log1").css({display:"none"})
						$(".logo3").prevAll().find(".log2").css({display:"block"})
						$(".logo3").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo3").nextAll().find(".tis").css({color:"white"})
						$(".logo3").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo3").prevAll().find(".tis").css({color:"#fe6b12"})
					}else if(screenIndex==3){
						$("logo4").find(".log1").css({display:"none"})
						$("logo4").find(".log2").css({display:"block"})
						$(".logo4").nextAll().find(".log1").css({display:"block"})
						$(".logo4").nextAll().find(".log2").css({display:"none"})
						$(".logo4").prevAll().find(".log1").css({display:"none"})
						$(".logo4").prevAll().find(".log2").css({display:"block"})
						$(".logo4").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo4").nextAll().find(".tis").css({color:"white"})
						$(".logo4").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo4").prevAll().find(".tis").css({color:"#fe6b12"})
					}else if(screenIndex==4){
						$("logo5").find(".log1").css({display:"none"})
						$("logo5").find(".log2").css({display:"block"})
						$(".logo5").nextAll().find(".log1").css({display:"block"})
						$(".logo5").nextAll().find(".log2").css({display:"none"})
						$(".logo5").prevAll().find(".log1").css({display:"none"})
						$(".logo5").prevAll().find(".log2").css({display:"block"})
						$(".logo5").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo5").nextAll().find(".tis").css({color:"white"})
						$(".logo5").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo5").prevAll().find(".tis").css({color:"#fe6b12"})
					}else if(screenIndex==5){
						$("logo6").find(".log1").css({display:"none"})
						$("logo6").find(".log2").css({display:"block"})
						$(".logo6").nextAll().find(".log1").css({display:"block"})
						$(".logo6").nextAll().find(".log2").css({display:"none"})
						$(".logo6").prevAll().find(".log1").css({display:"none"})
						$(".logo6").prevAll().find(".log2").css({display:"block"})
						$(".logo6").nextAll().find(".loog").css({background:"#3c3c3c"})
						$(".logo6").nextAll().find(".tis").css({color:"white"})
						$(".logo6").prevAll().find(".loog").css({background:"#fe6b12"})
						$(".logo6").prevAll().find(".tis").css({color:"#fe6b12"})
					}
				
				count = 0;
			}
		}
		count++;
	})
	var target = $(".box").height()+200;
//	console.log(target)
	$(".logo1>.log1,.logo1>.log2").on("click",function(){
		$(".box>.one").animate({"top":-0*target},2000,"elasticOut")
	})
	$(".logo2>.log1,.logo2>.log2").on("click",function(){
		$(".box>.one").animate({"top":-1*target},2000,"elasticOut")
	})
	$(".logo3>.log1,.logo3>.log2").on("click",function(){
		$(".box>.one").animate({"top":-2*target},2000,"elasticOut")
	})
	$(".logo4>.log1,.logo4>.log2").on("click",function(){
		$(".box>.one").animate({"top":-3*target},2000,"elasticOut")
	})
	$(".logo5>.log1,.logo5>.log2").on("click",function(){
		$(".box>.one").animate({"top":-4*target},2000,"elasticOut")
	})
	$(".logo6>.log1,.logo6>.log2").on("click",function(){
		$(".box>.one").animate({"top":-5*target},2000,"elasticOut")
	})
	
//	if()
})
