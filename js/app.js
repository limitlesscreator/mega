// для анимации появлении блоков.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})



// Отображение номера по кнопке из Header
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))


document.querySelector('.triggerPhoneModal').addEventListener('click', () => {
  document.querySelector('.numberSecret').style.opacity = 1
  document.querySelector('.numberSecret').style.zIndex = 1000
  window.scrollTo(0, 0)
  document.querySelector('body').style.overflow = 'hidden'
})

document.querySelector('.cross').addEventListener('click', () => {
  document.querySelector('.numberSecret').style.opacity = 0
  document.querySelector('.numberSecret').style.zIndex = -1000
  document.querySelector('body').style.overflow = 'auto'
})
// ----------------------------------------------------------------------



document.querySelector('.closeMainModal').addEventListener('click', () => {
  document.querySelector('.bookARideModal').style.opacity = 0
  document.querySelector('.bookARideModal').style.zIndex = -1000
  document.querySelector('body').style.overflow = 'auto'
})

const sendMail = () => {
  let params = {
    passengerName: document.querySelector('#name').value,
    number: document.querySelector('#number').value,
    car: document.querySelector('#cars').value,
    driverNameCarTypePlateNumber: document.querySelector('#driverNameCarTypePlateNumber').value,
    timePuckUpDropOff: document.querySelector('#timePuckUpDropOff').value,
    specialRequest: document.querySelector('#specialRequest').value,
    promoCode: document.querySelector('#promoCode').value,
  }

  emailjs.send()
}
