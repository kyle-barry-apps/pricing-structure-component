// Access the elements we need
const checkbox = document.querySelector('input')
const annualPrice = document.querySelectorAll('.annual-price')
const monthlyPrice = document.querySelectorAll('.monthly-price')
const slider = document.querySelector('.slider')


// Listen for the checkbox being changed and switch price displays
checkbox.addEventListener('change', (e) => {
  if(e.target.checked) {
    annualPrice.forEach((annual) => {
      annual.style.display = 'none'
    })
    monthlyPrice.forEach((monthly) => {
      monthly.style.display = 'block'
    })
    slider.classList.add('active')
  } else {
    annualPrice.forEach((annual) => {
      annual.style.display = 'block'
    })
    monthlyPrice.forEach((monthly) => {
      monthly.style.display = 'none'
    })
    slider.classList.remove('active')
  }
})


