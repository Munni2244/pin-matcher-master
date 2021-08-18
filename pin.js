function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';                  //problem//
    if(pinString.length==4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin= getPin();
 document.getElementById('display-pin').value=pin;   //problem//
}

document.getElementById('key-pad').addEventListener('click', function(event){
const number= event.target.innerText;
const  calcInput = document.getElementById('types-number');

if(isNaN(number)){
    if(number=='C'){
      calcInput.value= '';
    }
}
else{
    const previousInput = calcInput.value;
const newNumber= previousInput + number;
 calcInput.value = newNumber;
}
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typsNumber = document.getElementById('types-number').value;
    const success = document.getElementById('notify-success');
    const fail = document.getElementById('notify-fail');
    if(pin==typsNumber){
     success.style.display = 'block';
     fail.style.display= 'none'
    }
    else{
        fail.style.display= 'block'
        success.style.display = 'none';

    }
}