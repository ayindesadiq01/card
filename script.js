'use strict';
let cardInputSection = document.querySelector('.card-input-section');
let confirmation = document.querySelector('.confirmation')

//CARD NAME
let inputName;
let errName = document.querySelector('.name-error');let inputNam = document.querySelector('.input-nam');
let cardName = document.querySelector('.card-name');

//MONTH
let inputMonth;
let errMon = document.querySelector('.mon-error');
let inputMo = document.querySelector('.input-mo');
let cvcMonth = document.querySelector('.cvc-month');

//YEAR
let cvcYear = document.querySelector('.cvc-year');

// CVC
let CVCNumber = document.querySelector('.back-card-number');

// ADD SUBMIT BUTTON TO EVENT LISTERNER
document.querySelector('.btn').addEventListener('click', e => {
  e.preventDefault();
  
  // WORKING WITH CARD NAME
  inputName = document.querySelector('.cardname-input').value;
  let spaceName = `${inputName}`.includes(' ');
  let hasNumbers = /\d/.test(inputName);
  
  if(inputName === "") {
    errName.textContent = "Can't be blank"
    inputNam.style.border = '1px solid red';
    cardName.textContent = ""
  } else if (hasNumbers){
    inputNam.style.border = '1px solid red';
    errName.textContent = 'Number in name'
  } else if (inputName) {
    // RETURN BORDER AND ERROR MESSAGE
    inputNam.style.border = '1.8px solid hsl(270, 3%, 87%)';
    errName.textContent = ""
      
    // Make name input field has space before printing to front card
    if(spaceName) {
    cardName.textContent = `${inputName}`.toLowerCase().toUpperCase().trim();
  } else {
    errName.textContent = "Input Fullname";
  }
  } 


  // WORKING WITH CARD NUMBER

  let errNumber = document.querySelector('.number-error'); 
  let inputNo = document.querySelector('.input-no');
  let inputCardNumber = document.querySelector('.cardnumber-input').value;
  let cardNumber = document.querySelector('.front-card-number');
  let mobilize = /[a-zA-Z]/.test(inputCardNumber)

  if(!inputCardNumber) {
    errNumber.textContent = "Can't be blank"
    inputNo.style.border = '1px solid red';
  } else if(mobilize) {
    console.log('yoooooooooo')
    errNumber.textContent = "Card Number does not have Alphabet"
    inputNo.style.border = '1px solid red';
  } else if (inputCardNumber.length < 19) {
    errNumber.textContent = "Card Number Not completed"
  } else if(inputCardNumber && inputCardNumber.length ===19) {
    errNumber.textContent = ''
    inputNo.style.border = '1.8px solid hsl(270, 3%, 87%)';
    console.log(inputCardNumber.length)
    cardNumber.textContent = inputCardNumber;
  } 
  

  //WORKING WITH MONTH

  inputMonth = document.querySelector('.input-month').value;
  let month = +inputMonth && +inputMonth <= 12 ;


  if(!inputMonth || inputMonth == 0) {
    errMon.textContent = "Not valid"
    inputMo.style.border = '1px solid red'
  } else {
    errMon.textContent = ""
    inputMo.style.border = '1.8px solid hsl(270, 3%, 87%)';
  } 
  
  if (month) {
  //Display Month in Front card
  cvcMonth.textContent = `${inputMonth}`.padStart(2, 0)
  } else if(+inputMonth > 12 || `${inputMonth}`.length > 2) {
    errMon.classList.remove('hidden');
    errMon.textContent = 'Not valid';
  }


 //WORKING WITH YEAR

  let inputYear = document.querySelector('.input-year').value;
  let errYear = document.querySelector('.yr-error');
  let inputYr = document.querySelector('.input-yr');
  let year = inputYear >= new Date().getFullYear() && `${inputYear}`.length === 4;


  if(!inputYear) {
    errYear.textContent = "Not valid"
    inputYr.style.border = '1px solid red';
  } else{
    errYear.textContent = "";
    inputYr.style.border = '1.8px solid hsl(270, 3%, 87%)';
  }

  if(year) {
    cvcYear.textContent = `${inputYear}`.padStart(2,0).slice(2);
  } else {
    errYear.textContent = "Not valid"
    inputYr.style.border = '1px solid red';
  }


  //WORKING WITH CVC

  let inputCVC = document.querySelector('.input-cvc').value;
  let cvIput = document.querySelector('.input-cv');
  let errCVC =document.querySelector('.cvc-error');

  let finalCVC = `${inputCVC}`.length === 3;

  if(!inputCVC) {
    errCVC.textContent = 'Not valid'
    cvIput.style.border = '1px solid red'
  } else {
    errCVC.textContent = '';
    cvIput.style.border = '1.8px solid hsl(270, 3%, 87%)';
  }

  if(finalCVC) {
    CVCNumber.textContent = inputCVC;
  } else {
    errCVC.textContent = 'Not valid'
    cvIput.style.border = '1px solid red'
  }


  // POP UP THANK YOU 
  if (finalCVC && year && month && inputCardNumber && inputName && !mobilize) {
    cardInputSection.classList.add('hidden')
    confirmation.classList.remove('hidden')
  }
})

document.querySelector('.continue-btn').addEventListener('click', e => {
  cardInputSection.classList.remove('hidden')
  confirmation.classList.add('hidden')

  document.querySelector('.cardname-input').value = "";
  document.querySelector('.cardnumber-input').value = "";
  document.querySelector('.input-cvc').value ="";
  document.querySelector('.input-year').value = "";
  document.querySelector('.input-month').value = "";

 // DISPLAY ON CARDS
  cardName.textContent = 'JANE APPLESEED';
  cvcMonth.textContent = '00';
  cvcYear.textContent = '00';
  CVCNumber.textContent ='000'
})
