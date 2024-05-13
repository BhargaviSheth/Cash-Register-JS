const billAmount = document.querySelector('#bill-amount');
console.log(billAmount)
const checkbutton = document.querySelector('#check-button');
const cashGiven = document.querySelector('#Cash-given');
const message = document.querySelector("#error0message") ;

checkbutton.addEventListener('click' , function validateBillandCashAmount(){
  message.computedStyleMap.display = "none"
  if(billAmount.value > 0){

  }
  else{
    message.computedStyleMap.display="block"
    message.innerHTML = "The Bill amount should be positive"
  }
});
