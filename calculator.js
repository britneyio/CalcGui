function operate(a,operator,b){
    a = parseInt(a);
    b = parseInt(b);
    if(operator === '+'){
        return a + b;
    }
    else if(operator === '-'){
        return a - b;
    }
    else if(operator === 'x'){
        return a * b; 
    }
    else if(operator === '/'){
        return a / b;
    }
    else{
        return "Not an operator";
    }
}
let screen = document.getElementById("screen");
let screenContent = '';
let operator = '';
let numArr = [];
let operation = 0;
function display(text){
    if(text === 'C'){
        screen.innerText = '';
        screenContent = '';
        operator = '';
    }else if(text === '='){
        screen.innerText = fromDisplaytoSolution();
        operator = '';
    }
    else if(text === '+'){
        operator = '+';
        screen.innerText += text; 
        
        screenContent += text;
    }
    else if(text === 'x'){
        operator = 'x';
        screen.innerText += text; 
        
        screenContent += text;
    }
    else if(text === '-'){
        operator = '-';
        screen.innerText += text; 
        
        screenContent += text;
    }
    else if(text ==='/'){
        operator = '/';
        screen.innerText += text; 
        
        screenContent += text;
    }else{
 
    screen.innerText += text; 
        
    screenContent += text;
    }
    return screenContent, operator;
}


function fromDisplaytoSolution(){
numArr = screenContent.split(/[+\-*/]/);
console.log(numArr);
if(numArr.length > 2){
    numArr.splice(0,1);
}
 operation= operate(numArr[0], operator, numArr[1]);
 numArr[0]= operate(numArr[0], operator, numArr[1]);
console.log(numArr, operation);
return operation;

   

}



    
 

