const toggleButton = document.getElementsByClassName('toggle')[0]
const navBar = document.getElementsByClassName('nav')[0] 

toggleButton.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})