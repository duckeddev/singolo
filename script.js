// header script

const navLinks = document.querySelectorAll('.header__nav-list-item-link')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(el => {
            link != el ? el.classList.remove('active') : el.classList.add('active')
        })
    })
});

// slider script

const nextBtn = document.querySelector('.hero__btn-next');
const prevBtn = document.querySelector('.hero__btn-prev');
const sliderItems = document.querySelectorAll('.hero__slider-item');

nextBtn.addEventListener('click', () => {
    sliderItems.forEach(element => {
        element.classList.toggle('active')
    })
})

prevBtn.addEventListener('click', () => {
    sliderItems.forEach(element => {
        element.classList.toggle('active')
    })
})

const phoneXBtn = document.querySelector('.hero__phone-x-btn');
const phoneYBtn = document.querySelector('.hero__phone-y-btn');
const screenX = document.querySelector('.hero__phone-x-screen');
const screenY = document.querySelector('.hero__phone-y-screen');

phoneXBtn.addEventListener('click', () => {
    screenX.classList.toggle('inactive');
})

phoneYBtn.addEventListener('click', () => {
    screenY.classList.toggle('inactive')
})

// portfolio script

const portfolioBtns = document.querySelectorAll('.portfolio__btn-list-item-btn');
const portfolioProjects = document.querySelectorAll('.portfolio__projects-item');

portfolioBtns.forEach(item => {
    item.addEventListener('click', (event) => {
        portfolioBtns.forEach(element => {
            item != element ? element.classList.remove('active') : element.classList.add('active');

        })
        console.log(event.target.id)
        switch (event.target.id) {
            case 'web-design':
                portfolioProjects.forEach((el, index) => {
                    el.style.display = 'inline-block';
                    if (index > 3) {
                        el.style.display = 'none';
                    }
                })
                break;
            case 'graphic-design':
                portfolioProjects.forEach((el, index) => {
                    el.style.display = 'inline-block';
                    if (index < 3 || index > 6) {
                        el.style.display = 'none';
                    }
                })
                break
            case 'artwork':
                portfolioProjects.forEach((el, index) => {
                    el.style.display = 'inline-block';
                    if (index < 8) {
                        el.style.display = 'none';
                    }
                })
                break
            default:
                portfolioProjects.forEach((el, index) => {
                    el.style.display = 'inline-block';
                })
                break;
        }

    })
})

// form script


