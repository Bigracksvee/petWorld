const navSlide = () => {
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    hamburger.addEventListener('click',()=>{
 // Toggle(on-off command) Nav
        nav.classList.toggle('nav-active');

    // Animate Links (index means animate the delay between each link and $ means interpolate else= means add animation)
    navLinks.forEach((link, index) => {
       if  (link.style.animation) {
        link.stye.animation = ''
       } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
       }
    });
});
}

navSlide();