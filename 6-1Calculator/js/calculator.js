window.onload =function () {


    var num1 = "";
    var operation = "";
    var Clear = false;

    var clickSpan=document.getElementsByTagName('span');
    for(var i=0;i<clickSpan.length;i++)
    {
        clickSpan[i].addEventListener('mousedown',input);
    }

   function input(e){
       /*阻止事件冒泡，确保得到的是最底部我们需要的*/
       e.stopPropagation();

       /*得到屏幕（一个input）值*/
       var input = document.getElementById('input');

       /*获得当前元素的innerHTML的内容*/
       var html=this.innerHTML;
       console.log(html);

       switch (html){
           /*对当前获得的输入值进行判断*/
           case "=":
               /*为=号时，进行运算，运算后显示结果，并清空初始值*/
               input.value=cal(parseFloat(num1), parseFloat(input.value), operation);
               num1='';
               operation='';
               Clear=true;
               break;
           case '+':
           case '-':
           case '×':
           case '÷':
           case '%':
           case 'x<sup>y</sup>':
           case '√':
               Clear=true;
               if(num1.length!=0)
               {
                   input.value=cal(parseFloat(num1), parseFloat(input.value), operation);
               }
               operation=html;
               num1=input.value;
               break;
           case '.':
               for(var i=0;i<input.value.length;i++) {
                   if(input.value.lastIndexOf(".")==-1){
                       input.value=( input.value+".");
                       console.log(input.value);
                   }else{

                       break;
                   }
               }
               break;
           case 'Clr':
               input.value='0';
               num1='';
               operation='';
               break;
           case 'Del':
               Clear=true;
               if(input.value.length!=0)
               {
                   input.value= input.value.slice(0,input.value.length-1);
                   input.value=parseFloat(input.value+html);
               }
               break;
           default:
                /*其他时候均为数字*/
               if(Clear)
               {
                   input.value=parseFloat(html);
                   Clear=false;
               }
               else
               {
                   input.value=parseFloat(input.value+html);
               }
               break;
       }
   }






    function cal(num1,num2,operation){
        var result = 0;
        switch (operation){
            case "+":
                result = num1+num2;
                break;
            case "-":
                result = num1-num2;
                break;
            case "×":
                result = num1*num2;
                break;
            case "÷":
                if(num2==0){
                    result="错误，0不能为除数";
                }else{
                    result = num1/num2;
                }
                break;
            case "%":
                if(num2==0){
                    result="错误，0不能为除数";
                }else{
                    result = num1%num2;
                }
                break;
            case "x<sup>y</sup>":
                result = Math.pow(num1,num2);
                break;
            case "√":
                if(num2<0){
                    result="错误,负数不能开根号";
                }else{
                    result = num1*(Math.sqrt(num2));
                }
                break;
        }
        return result;

    }
};
