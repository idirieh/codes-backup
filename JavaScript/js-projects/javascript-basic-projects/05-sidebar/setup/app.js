const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navbar');
const hideBtn = document.querySelector('.x-btn')

burger.addEventListener('click', () => {
    if(navBar.classList.contains('hidden')) {
        navBar.classList.remove('hidden');
        navBar.classList.add('show');
    }else {
        navBar.classList.add('hidden');
        navBar.classList.remove('show');
    }    
})

hideBtn.addEventListener('click', () => {
    if(!navBar.classList.contains('hidden')) {
        navBar.classList.add('hidden');
        navBar.classList.remove('show');
    }
})