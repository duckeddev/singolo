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

const button = document.querySelector("form button");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal__background");
const modalMessage = document.querySelector(".modal__message");

//Add Close button to modal window
function addCloseButton(node) {
    node.innerHTML += "<button class='modal__close-button' type='button'>OK</button>";
    const modalCloseButton = document.querySelector(".modal__close-button");
    modalCloseButton.addEventListener("click", hideModal);
    return node;
}

//Get value from form field
function addNodeValue(node, fieldName, defaultValue = "Не заполнено", br) {
    let value = document.querySelector(node).value;
    value = (value == "") ? defaultValue : value;
    return `<p>${fieldName}: ${value}</p>`;
}

//Show modal window
function showModal() {
    modal.classList.remove("hidden");
}

//Hide modal window
function hideModal() {
    modal.classList.add("hidden");
}

//Create content of modal window
button.addEventListener("click", (event) => {
    let requiredFields = [...document.querySelectorAll("[required]")];
    let isValid = node => node.checkValidity();

    //Check if all required fields filled with valid data
    if (requiredFields.every(isValid)) {
        event.preventDefault();
        let message = "<p>Письмо отправлено</p>";

        message += addNodeValue("input[name='subject']",
            "Тема",
            "Без темы");

        message += addNodeValue("textarea[name='message']",
            "Описание",
            "Без описания");
        modalMessage.innerHTML = message;
        addCloseButton(modalMessage);
        showModal();
    }
});

// Add close action to modal window background
modalBackground.addEventListener("click", hideModal);