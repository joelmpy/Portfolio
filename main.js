const menuHaumburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');

menuHaumburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

const txtAnime = document.querySelector('h2');
console.log(txtAnime)
new Typewriter (txtAnime, {
    lopp : true,
     deleteSpeed : 50,
})
.typeString("<span>Développeur web </span>")
.pauseFor(250)
.deleteChars(4)
.typeString("<span style = 'color:darkred'>Full-Stack</span>")
.pauseFor(250)
.start()