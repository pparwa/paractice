const menu = document.getElementById('nav');
const menu_btn = document.getElementById('menu-btn')

menu_btn.addEventListener('click', () => {
    menu.classList.toggle('show');
    menu_btn.classList.toggle('fa-close')
})

// slider 

const slide = document.querySelector('.slider').children;
let slider_counter = 0;

slide[2].classList.add('active');

setInterval(() => {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active')
    }
    slide[slider_counter].classList.add('active')
    slider_counter++;
    if (slider_counter == slide.length) {
        slider_counter = 0;
    }
}, 3000);

// auto type

const texts = [
    "برنامه نویس ",
    "طراح سایت  ", 
    "متخصص UI UX "
]

let end = 1
let counter = 0
let show = ""
let word = ""

function type() {
    word = texts[counter]
    show = word.substring(0, end)
    end++
    if (show == word) {
        counter++
        if (counter == texts.length ) {
            counter = 0
        }
        end = 1
    }
    document.querySelector('.auto').innerHTML = show
}

setInterval(type, 120)

// dark mode
const theme_container = document.querySelector('.theme-btn-container')
const theme_icon = document.querySelector('.theme-btn')

theme_container.addEventListener('click', ()=> {
    theme_icon.classList.toggle('fa-sun')
    theme_icon.classList.toggle('fa-cloud-moon')
    document.body.classList.toggle('mode')
})
