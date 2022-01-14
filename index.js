var exp="";
var res="";

function updateScreen(){
    document.getElementById("expression").innerHTML=exp;
    document.getElementById("result").innerHTML=res;
}
function clearScreen(){
    exp="";
    res="";
    updateScreen();
}
function invertSign(){
    var i;
    for(i=exp.length-1;i>=0 && (exp.charAt(i) > -1 && exp.charAt(i) < 10);i--);
    var num = exp.slice(i+1);
    var temp = exp.slice(0,i+1);
    if(temp.slice(-1)=='-')
        temp = temp.slice(0,-1);
    exp = temp + '-' + num;
    res= eval(exp);
    updateScreen();
}
function numPress(num){
    exp+=num;
    res = eval(exp);
    updateScreen();
}
function oprPress(operator){
    if(exp.charAt(exp.length-1) > -1 && exp.charAt(exp.length-1) < 10){
        exp+=operator;
    }
    else{
        exp = exp.slice(0,-1) + operator;
    }
    res="";
    updateScreen();
}
function evaluateExp(){
    exp=eval(exp);
    res="";
    updateScreen();
}

document.getElementById("AC").addEventListener('click',clearScreen);
document.getElementById("invert-sign").addEventListener('click',invertSign);
document.getElementById("one").addEventListener('click',()=>numPress(1));
document.getElementById("two").addEventListener('click',()=>numPress(2));
document.getElementById("three").addEventListener('click',()=>numPress(3));
document.getElementById("four").addEventListener('click',()=>numPress(4));
document.getElementById("five").addEventListener('click',()=>numPress(5));
document.getElementById("six").addEventListener('click',()=>numPress(6));
document.getElementById("seven").addEventListener('click',()=>numPress(7));
document.getElementById("eight").addEventListener('click',()=>numPress(8));
document.getElementById("nine").addEventListener('click',()=>numPress(9));
document.getElementById("zero").addEventListener('click',()=>numPress(0));
document.getElementById("percent").addEventListener('click',()=>oprPress('%'));
document.getElementById("divide").addEventListener('click',()=>oprPress('/'));
document.getElementById("multiply").addEventListener('click',()=>oprPress('*'));
document.getElementById("subtract").addEventListener('click',()=>oprPress('-'));
document.getElementById("add").addEventListener('click',()=>oprPress('+'));
document.getElementById("decimal").addEventListener('click',()=>oprPress('.'));
document.getElementById("equals").addEventListener('click',evaluateExp);