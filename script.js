

var typed = new Typed('.element', {
    strings: ['<i>Web Developer.', ' Front end Developer.'],
    typeSpeed: 100,
    backspeed:100,
    backDelay:1000,
    loop:true
    
  });

  
  const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-Links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('show-header');
  navLinks.classList.toggle('show-header');
});