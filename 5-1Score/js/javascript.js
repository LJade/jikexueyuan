
function Level() {
    /*获得DOM的分数*/
    var myScore = document.getElementById('score').value;

    /*输出判定结果*/
    document.getElementById('result').innerHTML =  getLevel(myScore);

/*得出等级*/
function getLevel(score) {
        var level = "";
        if(score==""){
            return level="不能为空";
        }
        var number = parseInt(score/10);
        switch (number) {
            case 10 :
            case 9 :
                level = "该生为1等生";
                break;
            case 8 :
                level = "该生为2等生";
                break;
            case 7:
                level = "该生为3等生";
                break;
            case 6:
                level = "该生为4等生";
                break;
            case 5:
                level = "该生为5等生";
                break;
            case 4:
                level = "该生为6等生";
                break;
            case 3:
                level = "该生为7等生";
                break;
            case 2:
                level = "该生为8等生";
                break;
            case 1:
                level = "该生为9等生";
                break;
            case 0:
                level = "该生为10等生，劝退吧";
                break;
            default:
                level = "输入有误，请输入0--100的数字";
                break;
        }
        return level;
    }

}

