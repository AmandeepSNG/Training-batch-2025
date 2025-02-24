const INPUT_EMAIL_ELEMENT = document.getElementById('email')
// 
const REGEXP_FOR_EMAIL_INPUT = new RegExp('^[A-Za-z]{3,50}$')
INPUT_EMAIL_ELEMENT.addEventListener('input', (event) => {
  const inputValue = event.target.value
  const result = REGEXP_FOR_EMAIL_INPUT.test(inputValue)
  if (result){
    INPUT_EMAIL_ELEMENT.classList.remove('is-invalid')
    INPUT_EMAIL_ELEMENT.classList.add('is-valid')
    document.getElementById('span-id').classList.add('d-none')

  }else {
    INPUT_EMAIL_ELEMENT.classList.add('is-invalid')
    document.getElementById('span-id').classList.remove('d-none')
  }
  console.log("result =>", result)
})