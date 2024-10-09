//Elementlarni olish
const check = document.getElementById('check');
const body = document.body;

//check bo'lgan xolatda
check.addEventListener('change', function() {
  if (this.checked) {
    body.style.overflow = 'hidden'; // scrollni yashirish
  } 
//Aks xolda !
  else {
    body.style.overflow = ''; // scrollni qayta tiklash
  }
});
