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
    timePickUpDropOff: document.querySelector('#timePuckUpDropOff').value,
    specialRequest: document.querySelector('#specialRequest').value,
    promoCode: document.querySelector('#promoCode').value,
    BookingID: Math.floor((Math.random() * 1000000) + 1),
  }

  emailjs.send('service_x31tmfv','template_9zs0dfl',params).then(alert('Письмо отправлено!'))
}

document.querySelector('.bookARideBtn').addEventListener('click',() => sendMail())



//удалить

  document.querySelector('.closeMainModal').click()



function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = easing(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easing(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 *t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var home = document.querySelector('#home');
var about = document.querySelector('#about');
var services = document.querySelector('#services');
var contact = document.querySelector('#contact');

var homeLink = document.querySelector('a[href="#home"]');
var aboutLink = document.querySelector('a[href="#about"]');
var servicesLink = document.querySelector('a[href="#services"]');
var contactLink = document.querySelector('a[href="#contact"]');

homeLink.addEventListener('click', function() {
  smoothScroll('#home', 1000);
});

aboutLink.addEventListener('click', function() {
  smoothScroll('#about', 1000);
});

servicesLink.addEventListener('click', function() {
  smoothScroll('#services', 1000);
});

contactLink.addEventListener('click', function() {
  smoothScroll('#contact', 1000);
});
