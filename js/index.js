window.onload = function(){
	
	$(".header").load("header.html");
	$(".footer").load("footer.html");
	
	//banner 轮播图
	
	var lis = $(".banner>ul>li");
	var circles = $(".banner-change .middle>li");
	var n = 0;
	
	//进来先动一次
	bannerChange(0)
	
	$(".banner .next").on("click",function(){
		if(n<lis.length-1){
			n++;
		}else{
			n = 0;
		}
		bannerChange(n)
	})
	$(".banner .prev").on("click",function(){
		if(n>0){
			n--;
		}else{
			n = lis.length-1;
		}
		bannerChange(n)
	})
	
	circles.on("click",function(){
		n = $(this).index();
		bannerChange(n)
	})
	//切换li
	function bannerChange(index){
		lis.eq(index).fadeIn(200).siblings().fadeOut(200);
		circles.eq(index).addClass("now").siblings().removeClass("now");
		bannerImgChange(lis.eq(index));
	}
	//切换li内的二级效果
	function bannerImgChange(obj){
		obj.find(".img1").show().addClass("animated fadeInLeft");
		console.log(obj.find(".img1"))
		setTimeout(function(){
                obj.find(".img2").show().addClass("animated  bounceInRight");
                obj.find(".img3").show().addClass("animated  fadeIn");
            },300);
	}
	

	var ls = $(".onea>ul>li");
//	var circles = $(".banner-change .middle>li");
	var n = 0;
	
	//进来先动一次
	oneaChange(0)
	
	$(".onea .let").on("click",function(){
		if(n<lis.length-1){
			n++;
		}else{
			n = 0;
		}
		oneaChange(n)
	})
	$(".onea .rid").on("click",function(){
		if(n>0){
			n--;
		}else{
			n = lis.length-1;
		}
		oneaChange(n)
	})
	
	circles.on("click",function(){
		n = $(this).index();
		oneaChange(n)
	})
	//切换li
	function oneaChange(index){
		ls.eq(index).fadeIn(200).siblings().fadeOut(200);
//		circles.eq(index).addClass("now").siblings().removeClass("now");
		oneaImgChange(ls.eq(index));
	}
	//切换li内的二级效果
	function oneaImgChange(obj){
		obj.find(".img1").show().addClass("animated fadeInLeft");
		console.log(obj.find(".img1"))
		setTimeout(function(){
                obj.find(".img2").show().addClass("animated  bounceInRight");
                obj.find(".img3").show().addClass("animated  fadeIn");
            },300);
	}
	$(".nav>li").eq(0).find(".eji").show();
		$(".nav>li").on("click",function(){
			$(this).find(".eji").slideDown().end().siblings().find(".eji").slideUp()
			$(this).find(".loh").css({display:"block"}).end().siblings().find(".loh").css({display:"none"})
			$(this).find(".xji").css({display:"block"}).end().siblings().find(".xji").css({display:"none"})
			$(this).find(".hji").css({display:"none"}).end().siblings().find(".hji").css({display:"block"})
		})
}
