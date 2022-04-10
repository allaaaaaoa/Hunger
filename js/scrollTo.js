const linkDown = document.querySelector('.link--down')
const secondSection = document.querySelector('.section--aboutas_us')
const secondSectionY =  secondSection.offsetTop

let intervalId;

const trackScroll = () => {
    window.scrollBy(0, 30)
    if (window.pageYOffset >= secondSectionY) {
        clearInterval(intervalId)
    }
}

linkDown.addEventListener('click', (e) => {
    e.preventDefault()
    intervalId = setInterval(trackScroll, 10)
})

