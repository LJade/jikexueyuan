var IndexJsCode = function(){
	
	var moreDisplay = function(){
		$('.nav li.lastLi').hover(function() {
			$('.more').css('display','block');
			/* Stuff to do when the mouse enters the element */
		}, function() {
			// $('.more').hide();
			/* Stuff to do when the mouse leaves the element */
		});
		$('.more').hover(function() {
			/* Stuff to do when the mouse enters the element */
		}, function() {
			$(this).css('display','none');
			/* Stuff to do when the mouse leaves the element */
		});
	}
	return{
		init:function(){
			moreDisplay();
		}
	};
}();