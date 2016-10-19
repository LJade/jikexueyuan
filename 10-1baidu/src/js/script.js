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
		$('.tab .tabNav li ').on('click',function(){
			var cur = $(this).index();
			console.log(cur);
			$(this).find('a').addClass('a-active').parent().siblings().find('a').removeClass('a-active');
			$('.tabBody').eq(cur).css('display','block').siblings('.tabBody').css('display','none');
		})
	};

	var slideToggle =function(){
		$('.slideTitle span').click(function () {
			var Node = $(this).parent().next('.slideContent');
			var em =$(this).find('em').toggleClass('mine-title-icon');
			Node.slideToggle();
		});
	};


	var  changeSkin = function(){
		var bgSrc=["bg1","bg2","bg3"];
		var curSkin = 0;
		var cur = window.localStorage.getItem('skin');
		console.log(cur);
		$('body').css({'background':'#ffffff url("./imgs/'+bgSrc[cur]+'.jpg") no-repeat','background-size':'cover'});
		$('#skinChange').click(function(){			
			if(curSkin==3){
				$('body').css('background','#ffffff');
				curSkin = 0;
			}else{

				$('body').css({'background':'url("./imgs/'+bgSrc[curSkin]+'.jpg") no-repeat','background-size':'cover'});
				curSkin = curSkin +1;
				window.localStorage.setItem("skin",curSkin);
			}
			window.localStorage.setItem("skin",curSkin);
		})
	}

	return{
		init:function(){
			moreDisplay();
			tab();
			slideToggle();
			changeSkin();
		}
	};
}();