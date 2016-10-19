var IndexJsCode = function(){
	/*更多产品的显示*/
	var moreDisplay = function(){
		$('.nav li.lastLi').hover(function() {
			$('.more').css('display','block');
		},function () {
            $('.more').css('display','none');
        });
	};

	var tab = function(){
		$('.tab .tabNav li ').hover(function(){
			var cur = $(this).index();

			$(this).find('a').addClass('a-active').parent().siblings().find('a').removeClass('a-active');
			$('.tab .tabBody').eq(cur).css('display','block').siblings('.tabBody').css('display','none');
		})
	};

	var slideToggle =function(){
		$('.slideTitle span').click(function () {
			var Node = $(this).parent().next('.slideContent');
			var em =$(this).find('em').toggleClass('mine-title-icon');
			Node.slideToggle();
		});
	};

	return{
		init:function(){
			moreDisplay();
			tab();
			slideToggle();
		}
	};
}();