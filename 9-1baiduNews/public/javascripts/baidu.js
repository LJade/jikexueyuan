/**
 * Created by 灵MM on 2016/9/13.
 */

var baidu = function(){

	var getNews = function(){
		//当新闻tab种类被点击的时候，ajax 获取对应种类下的新闻进行显示
		$('#type').on('click','li',function(){

			//点击的时候获得这个种类
			var newsType = $(this).find('a').text();
			//发送ajax获取数据
			$.ajax({
				url:'news?type=' + newsType,
				type:'GET',
				error: function(request) {
                    console.log("查询失败");
                },
                success: function(msg) {
                	//当查询成功后，获取到查询数组
                    var results = JSON.parse(msg);
           			
                    var htmlCon = '';//创建一个空的字符串



                    //遍历获得的数组，拼接在变量中,在此进行转译
                    for(var i = 0;i<results.length;i++){
                    	 htmlCon += '<div class=" row newsBox"><a href=""><div class="col-xs-4"><img src="'+
							 htmlEncode(results[i].imgSrc)+'" alt=""></div><div class="col-xs-8"><h1>'+
							 htmlEncode(results[i].title)+'</h1><p>'+htmlEncode(results[i].author)+
                         '</p></div></a></div>';
                    }

                    //通过查询到的种类，也就是点击的新闻种类，来确定将遍历结果放在哪个tabbody中
                    var type = results[0].type;
                    var container = '';

                    //判断对象的tabBody的名字
                    switch(type){
                    	case '精选':
	                    	container = '#jingxuan';
	                    	break;
	                    case '娱乐':
	                    	container = '#yule';
	                    	break;
	                    case '军事':
	                    	container = '#junshi';
	                    	break;
	                    case '社会':
	                    	container = '#shehui';
	                    	break;
	                    case '百家':
	                    	container = '#baijia';
	                    	break;				
                    }
                    //将遍历新闻信息追加在判断出来的div中
  					$(container).html(htmlCon);
                }
			})
		})
	};

	var click = function(){
		//因为新闻获得是在点击事件下发生的，所以添加这样一个click事件就可以默认显示第一个分类下的新闻
		$('#type li').first().click();
	};

	//html转译
	function htmlEncode(str)
	{
		var s = "";
		if (str.length == 0) return "";
		s = str.replace(/&/g, "&gt;");
		s = s.replace(/</g, "&lt;");
		s = s.replace(/>/g, "&gt;");
		s = s.replace(/ /g, "&nbsp;");
		s = s.replace(/\'/g, "&#39;");
		s = s.replace(/\"/g, "&quot;");
		s = s.replace(/\n/g, "<br>");
		return s;
	}

    return{
        init:function(){
        	getNews();	
        	click();
        }
    };
}();