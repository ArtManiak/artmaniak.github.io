const toggleButton = document.getElementsByClassName('toggle-botton')[0]
const navLinki = document.getElementsByClassName('linki')[0]
toggleButton.addEventListener('click', () => {
    navLinki.classList.toggle('active')
})
