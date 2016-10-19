

/*定义颜色数组，方便更换，存储对应界面的四个可选颜色主题*/
var color=["#0aa770","#E49DB5","#3599B9","#FD9E5D"];


/*使用事件委托（也叫事件代理，利用冒泡原理）*/

/*先得到父级*/
var skin = document.getElementById('skin');
/*添加点击事件*/
skin.addEventListener("click",function (ev) {
    /*对获得的对象进行IE的兼容*/
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    /*得到子元素，取到ID*/
    var id = target.id;

    /*对ID进行判断，并调用更换的函数*/
     var curColor = "";//定义一个变量用来存储当前颜色
        switch(id){
            case "green":
                switchTheme(color[0]);
                curColor = color[0];
                break;
            case "pink":
                switchTheme(color[1]);
                curColor = color[1];
                break;
            case "blue":
                switchTheme(color[2]);
                curColor = color[2];
                break;
            case "orange":
                switchTheme(color[3]);
                curColor = color[3];
                break;
        }


    /*使用localStorage缓存最新更新的颜色*/
    if(!window.localStorage){
        console.log('浏览器不支持本地存储');
    }else{
        var storage = window.localStorage;
        storage.setItem("latestColor",curColor);
    }

});

/*读取缓存，更换最近存储的颜色*/
var latestColor = localStorage.getItem("latestColor");
switchTheme(latestColor);




/*更换主题函数*/
function switchTheme(color){
    var li = document.getElementById('menu').children;
    var tags = document.getElementsByClassName('color-font');
    /*以上得到是一个数组，我们需要遍历数组进行颜色变换*/
    for(var i= 0;i<li.length;i++){
        li[i].style.backgroundColor=color;
    }
    for(var j = 0;j<tags.length;j++){
        tags[j].style.color=color;
    }
}


