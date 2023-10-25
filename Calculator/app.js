const input = document.querySelector('input')
const nums = document.querySelectorAll('.num')
const brackets = document.querySelectorAll('.bracket')

const sign = document.querySelectorAll('.sign')
const signInnerHtml = []
for (const el of sign) {
    signInnerHtml.push(el.innerHTML)

}
const numsInnerHtml = []
for (const el of nums) {
    numsInnerHtml.push(el.innerHTML)

}
const error = (del) => {
    input.style.animationName = 'horizontal-shaking'
    input.style.animationDuration = '0.5s'
    if (del) {
        input.value = input.value.substring(0, input.value.length - 1)
    }
    setTimeout(() => {
        input.style.animationName = ''
        input.style.animationDuration = ''
    }, 500);

}
input.oninput = () => {
    if (!['(', ')'].includes(input.value[input.value.length - 1])){
        if (signInnerHtml.includes(input.value[input.value.length - 1]) && signInnerHtml.includes(input.value[input.value.length - 2])) {
            error(true)
        }
        if (!signInnerHtml.includes(input.value[input.value.length - 1])) {
            let removingSymbols = [...signInnerHtml, ')', '(']
            let inputInner = input.value
            for (let el of removingSymbols) {
                inputInner = inputInner.replaceAll(el, '')
            }
            if (!+(inputInner)) {
                console.log(+(input.value))
                console.log(input.value)
                error(true)
            }

        }
    }
    if (input.value.length === 0) {
        error(true)
    }
}
for(let i = 0; i < nums.length; i++) {
    nums[i].onclick = (event) => {
        input.value += event.target.innerText
    }

}
for(let i = 0; i < sign.length; i++) {
    sign[i].onclick = (event) => {
        if (input.value.length === 0) {
            error(false)
        } else if (signInnerHtml.includes(input.value[input.value.length - 1])) {
            error(false)
        } else if (input.value[input.value.length - 1] === '.') {
            error(false)
        } else {
            input.value += event.target.innerText
        }
    }

}
document.querySelector('.dot').onclick = () => {
    if (numsInnerHtml.includes(input.value[input.value.length - 1])) {
        input.value += '.'
    } else {
        error(false)
    }

}
document.querySelector('.equal').onclick = () => {
    if (numsInnerHtml.includes(input.value[input.value.length - 1])) {
        try{
            input.value = eval(input.value).toString()
            input.value = input.value.replace('(', '').replace(')', '')
        } catch (exeption) {
            error(false)
        }
    } else {
        error(false)
    }

}
document.querySelector('.back').onclick = () => {
    input.value = input.value.substring(0, input.value.length - 1)

}
document.querySelector('.clear').onclick = () => {
    input.value = ''

}
for (let i = 0; i < brackets.length; i++) {
    brackets[i].onclick = () => {
        input.value += brackets[i].innerHTML
    }
}

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.querySelector('.equal').click();
  }
});
