const cols = document.querySelectorAll('.col')

document.onkeydown = (e) =>
{
    e.preventDefault()
    if (e.code.toLowerCase() === 'space') {
        setRandomColors()
    }
}

document.onclick = (e) =>
{
    // console.log(e.target.dataset);
    const type = e.target.dataset.type
    if (type === 'lock') {
        const node = e.target.tagName.toLowerCase() === 'i'
            ? e.target
            : e.target.children[0]

        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    }
    else if (type === 'copy') {
        copyCLick(e.target.textContent)
        alert('Код цвета скопирован')
    }
}

const generateRandomColor = () =>
{
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return '#'+color
}

function copyCLick(text)
{
    return navigator.clipboard.writeText(text)
}

function setRandomColors(isInitial)
{
    const colors = isInitial ? getColorsFromHash() : []
    cols.forEach((col, index) =>
    {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        if (isLocked) {
            colors.push(text.textContent)
            return
        }

        const color = isInitial
            ? colors[index]
                ? colors[index]
                : generateRandomColor()
            : generateRandomColor()
        if (!isInitial) colors.push(color)

        col.style.background = color
        text.textContent = color
        setTextColor(button, color)
        setTextColor(text, color)
    })

    updateColorsHash(colors)
}

function setTextColor(text, color)
{
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5? 'black' : 'white'
}

function updateColorsHash(colors = [])
{
    document.location.hash = colors.map(col => col.toString().substring(1)).join('-')
}

function getColorsFromHash() {
    if (document.location.hash.length > 1) {
        return document.location.hash.substring(1).split('-').map(color => '#' + color)
    }
    return []
}
setRandomColors(true)