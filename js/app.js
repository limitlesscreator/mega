

// накидываем на кнопку book a trip модалку для клиенту
document.querySelector('#bookTrip').addEventListener('click',() => {
  const modal = document.querySelector('.bookARideModal')
  modal.style.zIndex = 1000
  modal.style.opacity = 1
  document.querySelector('body').style.overflow = 'hidden'
})

document.querySelector('#bookTrip2').addEventListener('click',() => {
  const modal = document.querySelector('.bookARideModal')
  modal.style.zIndex = 10001
  modal.style.opacity = 1
  document.querySelector('body').style.overflow = 'hidden'
})

document.querySelector('#bookTrip3').addEventListener('click',() => {
  const modal = document.querySelector('.bookARideModal')
  modal.style.zIndex = 10001
  modal.style.opacity = 1
  document.querySelector('body').style.overflow = 'hidden'
})


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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
// отправка письма


document.querySelector('.closeMainModal').addEventListener('click', () => {
  document.querySelector('.bookARideModal').style.opacity = 0
  document.querySelector('.bookARideModal').style.zIndex = -1000
  document.querySelector('body').style.overflow = 'auto'
})



//client form
const sendMail = () => {
  // let params = {
  //   passengerName: document.querySelector('#name').value,
  //   number: document.querySelector('#number').value,
  //   car: document.querySelector('#cars').value,
  //   driverNameCarTypePlateNumber: document.querySelector('#driverNameCarTypePlateNumber').value,
  //   timePickUpDropOff: document.querySelector('#timePuckUpDropOff').value,
  //   specialRequest: document.querySelector('#specialRequest').value,
  //   promoCode: document.querySelector('#promoCode').value,
  //   BookingID: `${Math.floor((Math.random() * 1000000) + 1)}`,
  // }
  //
  // emailjs.send('service_x31tmfv','template_9zs0dfl',params).then(() => alert('Письмо отправлено!'))

  sendToWhatsapp()
}

document.querySelector('.bookARideBtn').addEventListener('click',() => sendMail())

// -----------------------------------------------------------------------------------------------------



// отправка what's up формы


function sendToWhatsapp(){
  let sendToThisNumber = "+971505381389"

  // clientForm
  const passengerName = document.querySelector('#name').value
   const clientNumber = document.querySelector('#number').value
   const car = document.querySelector('#cars').value
   const driverNameCarTypePlateNumber = document.querySelector('#driverNameCarTypePlateNumber').value
   const timePickUpDropOff = document.querySelector('#timePuckUpDropOff').value
   const specialRequest = document.querySelector('#specialRequest').value
   const promoCode = document.querySelector('#promoCode').value

  let url = "https://wa.me/" + sendToThisNumber + "?text="
  + `passenger name: ${passengerName}%0a`
  + `client number: ${clientNumber}%0a`
  + `car: ${car}%0a`
  + `driver Name, Car Type, Plate Number : ${driverNameCarTypePlateNumber}%0a`
  + `time PickUp - DropOff : ${timePickUpDropOff}%0a`
  + `special request: ${specialRequest}%0a`
  + `promo code: ${promoCode}%0a`

  window.open(url, '_blank')
}




////////////////////////////////////////////////////////////////////////
