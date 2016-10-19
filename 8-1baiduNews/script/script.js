/**
 * Created by 灵MM on 2016/9/13.
 */
var JSHandle = function(){

    //保存数据ajax
    var saveData = function () {
        $('#saveNewData').click(function () {
            //保存数据的按钮被点击的时候，获得当前数据
            var type = $('select[name="type"] option:selected').val();
            var title = $('input[name="title"]').val();
            var imgSrc = $('input[name="imgSrc"]').val();
            var author = $('input[name="author"]').val();
            var createdAt = $('input[name="createdAt"]').val();
            var content = $('textarea[name="content"]').val();
           
            //封装数据
            var data = {
                type:type,
                title:title,
                imgSrc:imgSrc,
                author:author,
                createdAt:createdAt,
                content:content
            };

            //ajax提交数据
            $.ajax({
                type: "POST",
                url:'php/insert.php',
                data:data,
                error: function(request) {
                    console.log("数据保存失败");
                },
                success: function(msg) {
                    console.log("数据保存成功");
                    //数据保存成功后自动刷新页面
                    window.location.reload();
                }
            });
        })
    };

  

    //修改数据
    var updateData = function () {
        //修改信息按钮的点击事件通过代理的形式绑定click事件，delegate是因为这些元素可能会是新元素
        $('table').delegate('.changeNewsBtn','click',function () {
            //获得当前被点击的修改按钮的父级，也就是当前行的tr标签
            var para = $(this).parent().parent();

            //获得要修改的新闻id，用来查询当前要修改的新闻的具体内容，以便将数据放入模态窗的表单中
            var newsID = $(this).attr('data-id');

            //获得等一会要用来存放查询的数据的表单元素，因为多次使用，于是先保存为一个变量
            var type_up = $('select[name="type_up"]');
            var title_up = $('input[name="title_up"]');
            var imgSrc_up = $('input[name="imgSrc_up"]');
            var author_up = $('input[name="author_up"]');
            var content_up = $('textarea[name="content_up"]');

            //获得要修改的数据的详细信息的ajax请求
            $.ajax({
                type:"POST",
                url:'php/selectOne.php',
                data:{newsID:newsID},
                error: function(request) {
                    console.log("操作失败");
                },
                success: function(msg) {
                    //解析从php返回的数据
                    var callback = JSON.parse(msg);


                    //将数据显示在模态窗的表单内
                    
                    //这里要显示新闻种类，但是思路有问题暂时没想出来
                    var options = type_up.find('option');
                    //console.log(options instanceof Array);
                    /*for(var i = 0;i<options.length;i++){
                         if(options[i].val() == callback.title){
                            console.log("0000");
                            options[i].attr('selected','true');
                        }
                    }*/
                    title_up.val(callback.title);
                    imgSrc_up.val(callback.imgSrc);
                    author_up.val(callback.author);
                    content_up.val(callback.content);
                }
            });



            //对数据进行修改后，点击保存修改按钮，保存修改结果
            $('#saveUpdate').on('click', function() {
                //按钮被点击的时候获得当前表单所有数据
                var type_upCon = $('select[name="type_up"]').find('option:selected').val();
                var title_upCon   = title_up.val();
                var imgSrc_upCon  = imgSrc_up.val(); 
                var author_upCon  = author_up.val();
                var content_upCon = content_up.val();
                //封装数据
                var updata = {
                    id :newsID,
                    type:type_upCon,
                    title:title_upCon,
                    imgSrc:imgSrc_upCon,
                    author:author_upCon,
                    content:content_upCon
                };
              
                //ajax提交保存修改结果
                $.ajax({
                    type: "POST",
                    url:'php/update.php',
                    data:updata,
                    error: function(request) {
                        console.log("修改失败");
                    },
                    success: function(msg) {
                        console.log("修改成功");
                        $('#updateNews').modal('hide');//修改成功后，将修改模态窗关闭
                        window.location.reload();
                    }
                });
            });
        })
    };


    //删除数据
    var deleteData = function () {

        //定义一个空变量存储要删除的id
        var newsId = '';

        //删除同样适用代理,先获得要删除的id
        $('table').delegate('.deleteNewsBtn','click',function () {
            //点击确认时候获得当前被点击的新闻的id,将id传到后台
            newsId = $(this).attr('data-id');  
        });

        //模态窗弹出confirm，确认按钮点击提交ajax进行删除
        $('#deleteNews').on('click',function(){
               $.ajax({
                    type:"POST",
                    url:'php/delete.php',
                    data:{newsId:newsId},
                    error: function(request) {
                        console.log("删除失败");
                    },
                    success: function(msg) {
                        console.log("删除成功");
                        //点击删除，为了提示，确认删除后，需要调用bootstrap的方法将模态框隐藏，否则会一直显示着，修改数据的模态窗同理
                        $('#deleteConfirm').modal('hide');//删除成功就将弹出的确认模态窗关闭
                        window.location.reload();
                    }
                }); 
        });
        

    };

    return{
        init:function(){
            saveData();
            updateData();
            deleteData();
        }
    };
}();