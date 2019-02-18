$(document).ready(function(){

	var native_width = 0;
	var native_height = 0;
  $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

	$(".magnify").mousemove(function(e){

		if(!native_width && !native_height)
		{

			var image_object = new Image();
			image_object.src = $(".small").attr("src");
			native_width = image_object.width;
			native_height = image_object.height;
		}
		else
		{
			var magnify_offset = $(this).offset();
		
			var mx = e.pageX - magnify_offset.left;
			var my = e.pageY - magnify_offset.top;
		
			if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
			{
				$(".large").fadeIn(100);
			}
			else
			{
				$(".large").fadeOut(100);
			}
			if($(".large").is(":visible"))
			{
			
				var rx = Math.round(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
				var ry = Math.round(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
				var bgp = rx + "px " + ry + "px";
				var px = mx - $(".large").width()/2;
				var py = my - $(".large").height()/2;
				
				$(".large").css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	})
})