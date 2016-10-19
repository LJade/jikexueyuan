<?php
    require_once('php/select.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>后台首页</title>
    <link rel="stylesheet" href="lib/bootstrap-3.3.6-dist/css/bootstrap.css">
    <link rel="stylesheet" href="css/index.css">
</head>
<body>


<div class="container-fluid no-padding">
    <!--后台首页的页头导航部分-->
    <nav class="navbar navbar-default navbar-static-top myNav">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">后台首页</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="#">进入网站 <span class="sr-only">(current)</span></a></li>
                    <li><a href="#exampleModal" data-toggle="modal">新建邮件</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">入口查询 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">物资管理</a></li>
                            <li><a href="#">事业报备</a></li>
                            <li><a href="#">人才管理</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">报销工作</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">销售管理</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="搜索">
                    </div>
                    <button type="submit" class="btn btn-default">确认</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" class="admin"><i class="glyphicon glyphicon-user"></i>Admin</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">更多操作 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">个人中心</a></li>
                            <li><a href="#">任务查看</a></li>
                            <li><a href="#">权限管理</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">退出</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
    <!--后台首页的页头结束-->
</div>

<div class="container-fluid " id="main-content">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#ManageNews" role="tab" data-toggle="tab">管理新闻</a></li>
        <li role="presentation" ><a href="#addNews" role="tab" data-toggle="tab">增加新闻</a></li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane panel-body active" id="ManageNews">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">新闻列表</div>
                <div class="panel-body no-padding table-responsive">
                    <table class="table table-bordered table-hover table-condensed">
                        <thead>
                        <tr>
                            <td>类型</td>
                            <td>标题</td>
                            <td>缩略图地址</td>
                            <td>来源</td>
                            <td>时间戳</td>
                            <td>内容</td>
                            <td>修改</td>
                            <td>删除</td>
                        </tr>
                        </thead>
                        <tbody>
                        <?php
                            if ($result->num_rows > 0) {
    
                                while($row = $result->fetch_assoc()) {
                        ?>
                                   <tr>
                                        <td class="newsType"><?php echo $row["type"] ?></td>
                                        <td class="newsTitle"><?php echo $row["title"]?></td>
                                        <td >
                                            <p class="newsImgSrc"><?php echo $row["imgSrc"]?></p>
                                        </td>
                                        <td class="newsAuthor"><?php echo $row["author"]?></td>
                                        <td class="newsContent"><?php echo $row["content"]?></td>
                                        <td><a class="btn btn-info changeNewsBtn" role="button" data-toggle="modal"
                                               data-target="#updateNews" data-id="<?php echo $row['id']?>">修改</a></td>
                                        <td><a class="btn btn-danger deleteNewsBtn" role="button" data-toggle="modal"
                                               data-target="#deleteConfirm" data-id="<?php echo $row['id']?>">删除</a></td>
                                    </tr>
                        <?php
                                }
                            } else {
                                echo "0 个结果";
                            }
                        ?>
                    </tbody>
                        
                    </table>
                </div>

            </div>
        </div>
         <div role="tabpanel" class="tab-pane panel-body  " id="addNews">
            <form class="form-horizontal" role="form" id="myForm" method="post">
                <div class="form-group">
                    <label for="type" class="col-sm-2  col-xs-2 control-label">新闻类型</label>
                    <div class="col-sm-10 col-xs-10">
                        <select name="type" id="type" class="form-control">
                            <option value="精选">精选</option>
                            <option value="百家">百家</option>
                            <option value="娱乐">娱乐</option>
                            <option value="社会">社会</option>
                            <option value="军事">军事</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="title" class="col-sm-2 col-xs-2 control-label">标题</label>
                    <div class="col-sm-10 col-xs-10">
                        <input type="text" class="form-control" id="title" name="title" placeholder="请输入新闻标题">
                    </div>
                </div>
                <div class="form-group">
                    <label for="imgSrc" class="col-sm-2 col-xs-2 control-label">缩略图</label>
                    <div class="col-sm-10 col-xs-10">
                        <input type="text" class="form-control" id="imgSrc" name="imgSrc" placeholder="请输入图片地址">
                    </div>
                </div>
                <div class="form-group">
                    <label for="author" class="col-sm-2 col-xs-2 control-label">来源</label>
                    <div class="col-sm-10 col-xs-10">
                        <input type="text" class="form-control" id="author" name="author" placeholder="请输入来源">
                    </div>

                </div>
               
                <div class="form-group">
                    <label for="content" class="col-sm-2 col-xs-2 control-label">新闻内容</label>
                    <div class="col-sm-10 col-xs-10">
                        <textarea class="form-control" id="content" placeholder="请输入新闻内容" name="content"
                                  rows="20"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class=" col-sm-offset-2 col-sm-10 col-xs-offset-10 col-xs-10">
                        <button type="submit" id="saveNewData" class="btn btn-block btn-info">提交</button>
                    </div>
                </div>
            </form>
        </div>
    </div>


</div>


<!--模态窗开始-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">New 新建邮件</h4>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="control-label">收件人</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="control-label">邮件内容</label>
                        <textarea class="form-control" id="message-text" rows="20"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary">发送</button>
            </div>
        </div>
    </div>
</div>
<!--模态窗结束-->

<!--修改新闻信息的模态窗开始-->
<div class="modal fade" id="updateNews" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span
                        class="sr-only">Close</span></button>
                <h4 class="modal-title" id="myModalLabel">修改新闻内容</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="type_up" class="col-sm-2 control-label">新闻类型</label>
                        <div class="col-sm-10">
                        <select name="type_up" id="type_up" class="form-control">
                                <option value="精选">精选</option>
                                <option value="百家">百家</option>
                                <option value="娱乐">娱乐</option>
                                <option value="社会">社会</option>
                                <option value="军事">军事</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="title_up" class="col-sm-2 control-label">标题</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="title_up" name="title_up" >
                        </div>
                    </div>
                    <div class="form-group">

                        <label for="imgSrc_up" class="col-sm-2 control-label">缩略图</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="imgSrc_up" name="imgSrc_up" >
                        </div>

                    </div>
                    <div class="form-group">
                        <label for="author_up" class="col-sm-2 control-label">来源</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="author_up" name="author_up">
                        </div>

                    </div>
                   
                    <div class="form-group">

                        <label for="content_up" class="col-sm-2 control-label">新闻内容</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" id="content_up"  name="content_up"
                                      rows="20"></textarea>
                        </div>

                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" id="saveUpdate">保存更改</button>
            </div>
        </div>
    </div>
</div>
<!--修改新闻信息的模态窗结束-->

<!--确认删除模态窗开始-->
<div class="modal fade bs-example-modal-sm" id="deleteConfirm" tabindex="-1" role="dialog"
     aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body">
                确认删除当前新闻吗？
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger"  id="deleteNews">删除</button>
            </div>
        </div>
    </div>
</div>
<!--确认删除模态窗结束-->


</body>
<script src="lib/jquery-2.1.4.min.js"></script>
<script src="lib/bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>
<script src="script/script.js"></script>
<script type="text/javascript">
    $(function () {
        JSHandle.init();
    });
</script>
</html>