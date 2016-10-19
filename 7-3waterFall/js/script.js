
$(document).ready(function () {
    /*调用瀑布流格式函数*/
    imgLocation();

    /*重新创建一组新图片*/
    var dataImg = {'data': [{'src': '1.jpg'}, {'src': '2.jpg'}, {'src': '3.jpg'}, {'src': '4.jpg'}, {'src': '5.jpg'}, {'src': '6.jpg'}, {'src': '7.jpg'}, {'src': '8.jpg'}, {'src': '9.jpg'}, {'src': '10.jpg'}]};

    /*监听鼠标滚动时间，设置临界值为最后一张图片显示为一半*/
    window.onscroll = function () {

        if (scrollSlide()) {
            /*判断是否到我们所设定的临界点，到达的话，即scrollSlide()函数返回为真*/
            $.each(dataImg.data, function (index, value) {
                //遍历我们想要添加的图片组，并按照DOM结构添加到文档流中
                var box = $('<div>').addClass('box').appendTo($('#container'));
                var content = $('<div>').addClass('content').appendTo(box);

                $('<img>').attr('src', 'img/' + $(value).attr('src')).appendTo(content);
            });
            /*调用瀑布流函数对新增的图片进行位置的整理*/
            imgLocation();
            /**
             * 我总觉得我的瀑布流效果有点问题，是屏幕原因还是什么？感觉鼠标没往下很多的时候，图片就滚动加载了
             * 我觉得是不是获得offsetTop不是这个对象距离最顶端的距离，而是网页可是区域的距离？
             * 但是我查阅过后，这个方法获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置，没错的呀
             * 还有一个问题，我如果按照视频中同样在jquery的ready事件中，再套用window的onload事件，jquery就会报错，是版本的问题还是什么原因？
             *
             * */
        }
    }

    /*窗口发生变化的时候，让瀑布流随时跟着变化*/
    window.onresize = function () {
        imgLocation();
    }

});
function imgLocation() {
    var box = $('.box');
    /*获得图片宽度，因为box中盛放图片，图片宽度即为盒子宽度，可以这样理解*/
    var boxWidth = box.eq(0).width();

    /*获得每行能显示的图片数量，用当前窗口的宽度除以图片宽度向下取整（因为有可能是小数）*/
    var num = Math.floor($(window).width() / boxWidth);

    /*定义一个数组存放图片高度的数据*/
    var boxArr = [];


    /**
     * 我不知道为什么value获得的是一个对象呢？什么时候把这个对象给value的，还是value本来就代表这个对象
     */
    /*遍历图片，index表示是哪一个元素的高度最短，value确定当前是哪一个元素，返回的是一个对象*/
    box.each(function (index, value) {
        //获得当前图片的宽度
        var boxHeight = box.eq(index).height();

        //对图片进行排列
        if (index < num) {
            //第一行图片
            boxArr[index] = boxHeight;
            /*窗口进行变化的时候，第一排的位置重新进行设定*/
            $(value).css({
                'position': 'absolute',
                'top': 0,
                'left':index*boxWidth
            });
        } else {
            //第一行后的图片

            //apply借用min方法得到第一列中最短一张图片（高度最小的图片）
            var minBoxHeight = Math.min.apply(null, boxArr);
            //得到最短图片的位置，minBoxHeight表示要在某数组中寻找的目标，boxArr表示这个目标存在的数组
            var minBoxIndex = $.inArray(minBoxHeight, boxArr);

            /**
             * 为什么$(value)获得是一个jquery对象，之前的时候这个value难道是个javascript对象？
             */
            $(value).css({
                'position': 'absolute',
                'top': minBoxHeight,
                'left': box.eq(minBoxIndex).position().left
            });
            //重新计算高度
            boxArr[minBoxIndex] += box.eq(index).height();
        }
    });
}

function scrollSlide() {
    var box = $('.box');
    /*获取最后一张图片的在页面中的高度，再获得本身图片高度的一半，相加即获得我们想要滚动加载的临界点*/
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    /*获取文档流的高度*/
    var documentHeight = $(document).height();
    /*获取鼠标滚动的高度*/
    var scrollHeight = $(window).scrollTop();
    /*当最后一张图片的高度小于文档高度加上鼠标滚动高度时，返回真，否则返回假*/
    return (lastBoxHeight < scrollHeight + documentHeight) ? true : false;
}