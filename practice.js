function getPin(){
 const pin =Math.round(Math.random()*10000);
    const pinString= pin + '';
    if(pinString.length==4){
        return pin;
    }
    else {
        return getPin();
    }

}
function generatePin(){
const pin = getPin();
document.getElementById('display-pin').value=pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
 let number = event.target.innerText;
 const calcInput =document.getElementById('types-number');
if(isNaN(number)){
    if(number='C'){
        calcInput.value='';
    }
}

else{
    const previousInput= calcInput.value;
    const newNumber = previousInput + number;
    calcInput.value= newNumber;
}

})

function verifyPin(){
    const pin =document.getElementById('display-pin').value;
    const number = document.getElementById('types-number').value;
    const successMsg = document.getElementById('notify-success');
    const failMsg = document.getElementById('notify-fail');
    if(pin==number){
        successMsg.style.display='block';
        failMsg.style.display='none';

    }
    else{
        successMsg.style.display='none';
        failMsg.style.display='block';    }
}