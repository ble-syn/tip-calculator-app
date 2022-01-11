const bill = document.getElementById('input-bill');
const numOfPeople = document.getElementById('input-num');
const custom = document.getElementById('custom')
const tipsOptions = document.querySelectorAll('button');
const tipPerPerson = document.getElementById('tip-per-person');
const totalPerPerson = document.getElementById('total-per-person');
const reset = document.getElementById('reset-btn');
const errorMsg = document.querySelector('span')
let billAmount;
let people;
let getCustomTip;
let tip;


//EVENT LISTENERS
tipsOptions.forEach((tipOption) => {
    tipOption.addEventListener("click", () => {
      tip = parseFloat(tipOption.value);
      tipPerPerson.innerHTML = '$' + calcTipAmount().toFixed(2);
      totalPerPerson.innerHTML = '$' + calcTotal().toFixed(2);
    });
})

custom.addEventListener('input', function(){
    tipPerPerson.innerHTML = '$' + calcCustomTip().toFixed(2);
    totalPerPerson.innerHTML = '$' + calcCustomTotal().toFixed(2);

})

reset.addEventListener('click', function(){
  resetCalc()
})

//FUNCTION FOR CALCULATING TIPS AMOUNT AND TOTAL
function calcTipAmount() {
    billAmount = bill.value;
    people = numOfPeople.value;

    if (people != 0) {
        errorMsg.classList.remove('error')
        numOfPeople.classList.remove('error');
        return ((billAmount * tip) / people); 
    }
    else{       
        errorMsg.classList.add('error')
        numOfPeople.classList.add('error');
        return 0   
    }
}

function calcTotal(){
    billAmount = bill.value;
    people = numOfPeople.value;

    if (people != 0) {
        return billAmount / people + calcTipAmount();

    }
    else{
        return 0
    }
}







//FUNCTION FOR CALCULATING CUSTOM TIPS AMOUNT AND TOTAL
function calcCustomTip(){
    billAmount = bill.value;
    people = numOfPeople.value;
    getCustomTip = custom.value;
    if (people !=0) {
        let tipPercent = getCustomTip / 100;
        return (billAmount * tipPercent)/ people;
    }
    else {
        return 0
    }    
}

function calcCustomTotal(){
    billAmount = bill.value;
    people = numOfPeople.value;
    getCustomTip = custom.value
    if (people !=0) {
       return billAmount / people + calcCustomTip(); 
    }
    else {
        return 0
    }
    
}

function resetCalc(){
    billAmount = null;
    people = null;
    getCustomTip = null;
    bill.value = billAmount;
    numOfPeople.value = people
    custom.value = getCustomTip
    totalPerPerson.innerHTML = '$0.00'
    tipPerPerson.innerHTML = '$0.00'
    errorMsg.classList.remove('error')
    numOfPeople.classList.remove('error');
}