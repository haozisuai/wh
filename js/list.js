$(function(){
	$(".one").load("meherd.html")
	$(".list-footer").load("footer.html")
	
	//当前请求第几页的数据
	var page = 0;
	
	configPage(page)
	function configPage(p){
		$.ajax({
			type:"get",
			url:"./js/list.php",
			data: {'id':p},
			dataType: "text",
			error: function(e){
//				console.log(e)
			},
			success: function(res){
				if(p == 0){
					$(".new-main>ul").html("");
				}
//				console.log(res)
				res = JSON.parse(res.slice(1))
//				console.log(JSON.parse)
				var listArr = res.data.list;
				$.each(listArr,function(k,v){
					
					var temp = $("#muban").clone().removeAttr("style");
					temp.find(".b").attr('src',v.twoImg);
					temp.find(".a").attr('src',v.coverImg);
					temp.find(".title").html(v.title);
					temp.find(".date").html(v.creatAt);
					temp.find("p").html(v.describe);
//					temp.attr("#muban",v.sysId);
					
					$(".new-main>ul").append(temp);
					
					console.log(v.sysId)
//					console.log(temp)
				})
			}
			
		});
	}
	
	$(".more").click(function(){
		page++;
		if(page<4){
			configPage(page);
		}else{
			$(this).html("没有更多了。。")
		}
	})
	
	$(".new-main>ul").on("click","li",function(){
		window.location.href = "gong.html?type=haohaoNews&id="+$(this).attr("sysId")
	})
})
