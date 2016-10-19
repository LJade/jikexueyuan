/*
单例模式,我认为其能分离不同的操作形式，
在大型开发复杂的Js，或者应用Js上有很重要的作用，将各个模块的代码
井井有条的梳理在一起，这样的实现，在系统中值存在一个对象，从jquery
中 能明显的看出来它的好处，我通过看书，还了解到惰性单例（延迟创建）的形式，
感觉代码真是神奇！以下第一种是从书上看的一种写法，第二种是课堂老师讲的一种写法

*/

/*
var IndexJsCode = {
	
	moreDisplay : function(){
		$('.nav li.lastLi').hover(function() {
			$('.more').css('display','block');
		},function () {
            $('.more').css('display','none');
        });
	},

	//tab切换
	 tab : function(){
		$('.tab .tabNav li ').on('click',function(){
			var cur = $(this).index();
			console.log(cur);
			$(this).find('a').addClass('a-active').parent().siblings().find('a').removeClass('a-active');
			$('.tabBody').eq(cur).css('display','block').siblings('.tabBody').css('display','none');
		})
	},


	//下滑显示
	 slideToggle:function(){
		$('.slideTitle span').click(function () {
			var Node = $(this).parent().next('.slideContent');
			var em =$(this).find('em').toggleClass('mine-title-icon');
			Node.slideToggle();
		});
	},

	//换肤
	changeSkin : function(){
		var bgSrc=["bg1","bg2","bg3"];
		var curSkin = 0;
		var cur = window.localStorage.getItem('skin');
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

	
};


IndexJsCode.moreDisplay();
IndexJsCode.tab();
IndexJsCode.slideToggle();
IndexJsCode.changeSkin();
*/



var index= {
	init:function(argument){
		var me = this;
		me.render();
		me.bind();
		me.specialHandle();
	},
	render:function(){
		var me = this;
		me.proMore = $('.nav li.lastLi');
		me.tabLi = $('.tab .tabNav li ');
		me.slideToggle = $('.slideTitle span');

	},
	bind:function(){
		var me  = this;
		me.proMore.hover(function() {
			$('.more').css('display','block');
		},function () {
            $('.more').css('display','none');
        });
        me.tabLi.on('click',function(){
			var cur = $(this).index();
			$(this).find('a').addClass('a-active').parent().siblings().find('a').removeClass('a-active');
			$('.tabBody').eq(cur).css('display','block').siblings('.tabBody').css('display','none');
		});
		me.slideToggle.click(function () {
			var Node = $(this).parent().next('.slideContent');
			var em =$(this).find('em').toggleClass('mine-title-icon');
			Node.slideToggle();
		});
	},
	specialHandle:function(){
		var bgSrc=["bg1","bg2","bg3"];
		var curSkin = 0;
		var cur = window.localStorage.getItem('skin');
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

};

index.init();
