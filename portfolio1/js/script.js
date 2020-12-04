const toggleButton=document.getElementsByClassName('toggle-button')[0]
const navLinki=document.getElementsByClassName('linki')[0]
toggleButton.addEventListener('click',()=>{
    navLinki.classList.toggle('active')
})