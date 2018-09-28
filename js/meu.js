$(function(){
	$(".meherd").load("meherd.html")
	$(".list-footer").load("footer.html")
	$(document).mousemove(function (en) {
		        var xPos = parseInt(en.pageX+20) + "px";
		        var yPos = parseInt(en.pageY+20) + "px"; 
		        console.log(xPos)
		        $(".imgs1-1,.imgs2-1,.imgs3-1,.imgs4-1,.imgs5-1,.imgs6-1").css("left", xPos);  
		        $(".imgs1-1,.imgs2-1,.imgs3-1,.imgs4-1,.imgs5-1,.imgs6-1").css("top", yPos);  
		    });
    		$(".imgs1").hover(
			  function () {
			   	$(".imgs1-1").stop().fadeIn(1000);
			   	$(".imgs1-1").css("z-index",10)
			  },
			  function () {
			   	$(".imgs1-1").stop().fadeOut(1000);
			  }
			);
			$(".imgs2").hover(
			  function () {
			   	$(".imgs2-1").stop().fadeIn(1000);
			   	$(".imgs2-1").css("z-index",10)
			  },
			  function () {
			   	$(".imgs2-1").stop().fadeOut(1000);
			  }
			);
			$(".imgs3").hover(
			  function () {
			   	$(".imgs3-1").stop().fadeIn(1000);
			   	$(".imgs3-1").css("z-index",10)
			  },
			  function () {
			   	$(".imgs3-1").stop().fadeOut(1000);
			  }
			);
			$(".imgs4").hover(
			  function () {
			   	$(".imgs4-1").stop().fadeIn(1000);
			   	$(".imgs4-1").css("z-index",10)
			  },
			  function () {
			   	$(".imgs4-1").stop().fadeOut(1000);
			  }
			);
			$(".imgs5").hover(
			  function () {
			   	$(".imgs5-1").stop().fadeIn(1000);
			   	$(".imgs5-1").css("z-index",10)
			  },
			  function () {
			   	$(".imgs5-1").stop().fadeOut(1000);
			  }
			);
			$(".imgs6").hover(
			  function () {
			   	$(".imgs6-1").stop().fadeIn(1000);
			   	$(".imgs6-1").css("z-index",10)
			  },
			  function () {
			   	$(".imgs6-1").stop().fadeOut(1000);
			  }
			);
})