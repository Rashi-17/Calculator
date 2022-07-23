let num1='';
let num2='';
let operator='';
let total='';

$(document).ready(function(){
    $('button').on('click',function(e){
        let btn=e.target.innerHTML;
        if(btn>='0' && btn<="9" || btn=='.')
        {
            hanndleNumber(btn)
        }
        else if(btn==='AC')
        {
            num1=num2=operator='';
            total=0;
            displayButton(total);
        }
        else if(btn==='C')
        {
            removeChar(btn)
        }
        else{
            handleOperator(btn);
        }
    });
});

function hanndleNumber(num){
    if(operator==="")
    {
        num1+=num;
        displayButton(num1);
    }
    else{
        num2+=num
        displayButton(num2);
    }
    
}

function removeChar(num){
    if(operator==="")
    {
        num1=num1.slice(0,-1);
        displayButton(num1);
    }
    else{
        num2=num2.slice(0,-1);
        displayButton(num2);
    }
}

function handleOperator(oper){
    if(operator===""){
        operator=oper;
    }
    else{
        handleTotal();
        operator=oper;
    }
}

function handleTotal(){
    switch(operator)
    {
        case '+': total= +num1 + +num2;//+n1 (convert string to number)
            displayButton(total);
            break;
        case '-': total= +num1 - +num2;
            displayButton(total);
            break;
        case '/': total= +num1 / +num2;
            displayButton(total);
            break;
        case 'X': total= +num1 * +num2;
            displayButton(total);
            break;
        case '%': total= +num1 % +num2;
            displayButton(total);
            break;
        
    }
    updateVariable();
}

function displayButton(btn)
{
    $('.input').text(btn);
}

function updateVariable()
{
    num1=total;
    num2='';
}