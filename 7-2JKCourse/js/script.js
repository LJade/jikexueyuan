$(document).ready(function () {

    changeSheets('table');

    //header中menu划过相应的box
    $('#header .menu li>a ').hover(function () {
        $(this).next('.menuBox').slideToggle();
    });

    //header中user划过相应的box
    $('#header .userBox>a ').hover(function () {
        $(this).next().slideToggle();
    });


    //点击搜索框显示
    $('#header .userBox .search-icon').on('click', function (e) {
        e.preventDefault();
        $('#header .menu').css('display', 'none');
        $('#header .userArea').css('display', 'none');
        $('#header').css('overflow', 'hidden');
        $('#header .searchBox').css('display', 'block');
        $('#header .searchBox').animate({left: '150px'}, 500, "swing");
    });
    //点击消失
    $('#header .searchBox  .search-close').on('click', function () {
        $('#header .menu').css('display', 'block');
        $('#header .userArea').css('display', 'block');
        $('#header .searchBox').css('display', 'none');
        $('#header').css('overflow', 'visible');
        $('#header .searchBox').css('left', '1050px');
    });

    /*侧边导航*/
    $('.aside-top .nav li').hover(function () {
        $(this).find('.navList').show();
    }, function () {
        $(this).find('.navList').hide();
    });

    /*内容区导航*/
    $('.content-nav ul li').hover(function () {
        $(this).find('.moreIcon').fadeToggle('fast');
        $(this).find('.con-nav-list').slideToggle();
    });





    //下载二维码
    $('.foot-Android').hover(function () {
        $(this).find('.app-download').show();
    }, function () {
        $(this).find('.app-download').hide();
    });
    $('.foot-iPhone').hover(function () {
        $(this).next().find('.app-download').css('top', '-125px').show();
    }, function () {
        $(this).next().find('.app-download').css('top', '-85px').hide();
    });


    //切换效果
    $('.tableStyle').click(function () {
        var li = $('ul.lessonList li');
        li.each(function () {
                $(this).find('.lesson-intro').css('display','none');
                $(this).find('.poeple').css('display','none');
                $(this).find('.level').css('display','none');
            });
        changeSheets('table');
    });

    $('.listStyle').click(function () {
        changeSheets('list');
        var li = $('ul.lessonList li');
        li.each(function () {
                $(this).unbind('mouseenter').unbind('mouseleave');
            $(this).find('.lesson-intro').css('display','block');
            $(this).find('.poeple').css('display','block');
            $(this).find('.level').css('display','block');
            }
        )
    });


    function changeSheets(style) {
        var css = $('#css');
        if (style == 'table') {
            css.attr('href', 'css/table.css');
            $('ul.lessonList li').hover(function () {
                $(this).find('.lesson-intro').slideToggle();
                $(this).find('.poeple').slideToggle();
                $(this).find('.level').slideToggle();
            });
        } else if (style == 'list') {
            css.attr('href', 'css/list.css');
        }
    }
});