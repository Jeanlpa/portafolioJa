const container = document.getElementById('container')
const colors = ['#63ebe4', '#fbff00', '#63ebe4'];
const SQUARES = 281;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
};

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};

function removeColor(element) {
    element.style.background = '#181a27'
    element.style.boxShadow = '0 0 2px #000'
};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
};

// button ripple eff

const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop



        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})



// menu

const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

// checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')

        } else {
            box.classList.remove('show')

        }
    })
};


//project