const feedback = Array.from(document.getElementsByClassName('feedback-item'))
const prev = Array.from(document.getElementsByClassName('slider__arrow'))
const dots = Array.from(document.getElementsByClassName('slider__dot'))

function whereActive(){
    return feedback.findIndex((element) => element.classList.contains('feedback-item_active'))
}

function whereDot(){
    return dots.findIndex((element) => element.classList.contains('slider__dot_active'))
}

let addClass =(i) =>{
    feedback.forEach((element) => element.classList.remove('feedback-item_active'))
    feedback[i].classList.add('feedback-item_active')
    dots.forEach((element) => element.classList.remove('slider__dot_active'))
    dots[i].classList.add('slider__dot_active')
}

prev[0].onclick = () =>{
    let i = whereActive()
    if (i === 0){
        i = feedback.length 
    }
     i--
    addClass(i)
}
prev[1].onclick = () => {
    let i = whereActive()
    if (i === feedback.length - 1){
        i = -1
    }
    i++
     addClass(i)
}
dots.forEach((element, index) => element.onclick = () => {
    addClass(index) 
})
