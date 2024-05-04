
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle menu visibility with hamburger click and switch icons
hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden'); // Show the menu
    hamburger.classList.add('hidden'); // Hide the hamburger icon
    closeIcon.classList.remove('hidden'); // Show the close icon
});

// Hide the menu with close icon click and switch icons
closeIcon.addEventListener('click', () => {
    navMenu.classList.add('hidden'); // Hide the menu
    closeIcon.classList.add('hidden'); // Hide the close icon
    hamburger.classList.remove('hidden'); // Show the hamburger icon
});

// Hide the menu when a nav link is clicked and switch icons
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden'); // Hide the menu
        closeIcon.classList.add('hidden'); // Hide the close icon
        hamburger.classList.remove('hidden'); // Show the hamburger icon
    });
});




//tabs__wrap
const tabs = document.querySelectorAll('.tabs__wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active');

        const tabVal = tab.getAttribute('data-tabs')


        all.forEach(item => {
            item.style.display = 'none'
        })

        if(tabVal == 'food'){
            foods.forEach(item => {
                item.style.display = 'block'
            })
        } else if(tabVal == 'snack'){
            snacks.forEach(item => {
                item.style.display = 'block'
            })
        } else if 
            (tabVal == 'beverage'){
                beverages.forEach(item => {
                    item.style.display = 'block'
                })
        } else {
            all.forEach(item => {
                item.style.display = 'block'
            });
        }
    });
});

//dark Mode
const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');

if(localStorage.getItem('mode') == 'dark') {
darkMode();   
} else {
lightMode();
}

themeBtn.addEventListener('click', (e) => {
    if(localStorage.getItem('mode') == 'light'){
        darkMode();
    } else {
        lightMode();
    }
 

})

function darkMode () {
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-clear-line', 'ri-sun-line');
    localStorage.setItem('mode', 'dark');  
}
function lightMode () {
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-clear-line');
    localStorage.setItem('mode', 'light');  
}


// scroll up
const scrollUp = () => {
   const scrollUpBtn = document.getElementById('scroll-up');

   if(this.scrollY >= 250){

   scrollUpBtn.classList.remove('-bottom-1/2');
   scrollUpBtn.classList.add('-bottom-4');
} else {
    scrollUpBtn.classList.add('-bottom-1/2');
   scrollUpBtn.classList.remove('-bottom-4');
}
}
window.addEventListener('scroll',scrollUp )

//scroll header

const scrollHeader = () => {
   const header = document.getElementById('header');

   if(window.scrollY >= 50){

   header.classList.add('border-b', 'border-secondaryColor');
} else {
    
   header.classList.remove('border-b', 'border-secondaryColor');
}
}
window.addEventListener('scroll', scrollHeader);

//scroll sections active link
const activeLink = () => {

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav__link');

    let current = 'home';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id')
        }
    })
    navLinks.forEach((item) => {

        item.classList.remove('text-secondaryColor');
        if(item.href.includes(current)) {
            item.classList.add('text-secondaryColor')
        }
    });
};

window.addEventListener('scroll', activeLink)

//scroll reveal image
const sr = scrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})
sr.reveal('.home__img');
sr.reveal('.home__content', {origin: 'bottom'});
sr.reveal('.category__card', {interval: 300});

sr.reveal('.promo__card-1', {origin: 'left'});
sr.reveal('.promo__card-2', {origin: 'right'});

sr.reveal('.about__img', {origin: 'bottom'});
sr.reveal('.about__content', {origin: 'top'});


sr.reveal('.menu__items', {origin: 'left'});


sr.reveal('.customer__review', {origin: 'right'});

sr.reveal('.footer');