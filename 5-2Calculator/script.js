/*计算*/
function Cal(){
    console.log("000");
    /*获得数据*/
    var firstNum =parseFloat( document.getElementById('first').value);
    var secondNum = parseFloat(document.getElementById('second').value);
    var handle = document.getElementById('handle').value;

    /*调用计算函数传入得到的数据，返回计算结果并显示*/
    var result = document.getElementById('result');
    result.value =calculator(firstNum,secondNum,handle);


    /*进行操作*/
    function calculator(a,b,operation){
        switch(operation){
            case "+":
                return a+b;
                break;
            case "-":
                return a-b;
                break;
            case "*":
                return a*b;
                break;
            case "/":
                if (b==0){
                    return "除数不能为0，请重新输入";
                }else{
                    return a/b;
                }
                break;
        }
    }

}