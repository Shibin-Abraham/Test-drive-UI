console.log(' dashboard js');
let bookBtn = document.getElementById("book-btn")
console.log(bookBtn)
let popUp = document.querySelector(".popup")
console.log(popUp)
bookBtn.addEventListener('click',()=>{
 console.log('click')
 popUp.classList.add('active')
 let popupCloseBtn = document.querySelector(".popup.active .close-btn img")
 popupCloseBtn.addEventListener('click', () => {
  popUp.classList.remove('active')
  
 })
 let submitBtn = document.getElementById("submit-btn")
 console.log(submitBtn)
 submitBtn.addEventListener('click',()=>{
  submitBtn.innerHTML='<div class="loader"></div>'
  setTimeout(()=>{
   submitBtn.innerHTML = 'submited'
   submitBtn.style = `background:#123882D7;
   pointer-events:none;`
  },4000)
 })
})
let test = document.getElementById("test")
let successPopUp = document.querySelector(".success-popup")
let errorPopUp = document.querySelector(".error-popup")
test.addEventListener('click',()=>{
 successPopUp.classList.add('active')
 errorPopUp.classList.add('active')
 setTimeout(()=>{
  successPopUp.classList.remove('active')
 },5000)
})
let trashBtn = document.getElementById('trash')
let popupConfirmation = document.querySelector('.popup-confirmation')
console.log(popupConfirmation)
trashBtn.addEventListener('click', () => {
 popupConfirmation.classList.add('active')
 let closeBtn = document.getElementById('cancel')
 closeBtn.addEventListener('click',()=>{
  popupConfirmation.classList.remove('active')
 })
})
