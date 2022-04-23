const sizeUp = document.querySelector('.sizeUp')
const sizeDn = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const text = document.querySelector('p')

let fontSize = 36

const bigger = () => {
    if (fontSize >= 72) return
    fontSize += 4
    text.style.fontSize = fontSize + 'px'
}
const smaller = () => {
    if (fontSize <= 16) return
    fontSize -= 4
    text.style.fontSize = fontSize + 'px'
}

const changeColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    text.style.color = `rgb(${r},${g},${b})`

}

sizeUp.addEventListener('click', bigger)
sizeDn.addEventListener('click', smaller)
color.addEventListener('click', changeColor)