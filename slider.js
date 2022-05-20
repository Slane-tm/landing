let left = document.querySelector('.blog-card-arrow-left')
let right = document.querySelector('.blog-card-arrow-right')
let cards = document.querySelectorAll('.blog-card')
let activeCard = document.querySelector('.blog-card-active')
let dots = document.querySelectorAll('.card-dots-item')

let activeClass = 'blog-card-active';

right.addEventListener('click', function (target) {
    right.classList.add('dark')
    setTimeout(() => {
    right.classList.remove('dark')  
    }, 200);
    for(let i = 0; i < cards.length; i++){
        let elem = cards[i]
        let nextElem = cards[i + 1]
        let currentDot = dots[i]
        let nextDot = dots[i + 1]
            if(elem.classList.contains(activeClass)){
                if(i == cards.length - 2){
                    right.classList.add('hidden')
                }                   
                left.classList.remove('hidden')
                elem.classList.remove(activeClass)
                elem.style.display = 'none'
                elem.style.opacity = '0'
                nextElem.style.display = 'flex'
                setTimeout(() => {
                    nextElem.style.opacity = '1' 
                }, 100);
                setTimeout(() => {
                    nextElem.classList.add(activeClass)
                }, 200);
                currentDot.classList.remove('dot-active')
                nextDot.classList.add('dot-active')
                break
            }
    }
})

left.addEventListener('click', function (target) {
    left.classList.add('dark')
    setTimeout(() => {
    left.classList.remove('dark')  
    }, 200);
    for(let i = 0; i < cards.length; i++){
        let elem = cards[i]
        let prevElem = cards[i - 1]
        let currentDot = dots[i]
        let prevDot = dots[i - 1]
            if(elem.classList.contains(activeClass)){
                if(i == 1){
                    left.classList.add('hidden')                  
                }   
                right.classList.remove('hidden')
                elem.classList.remove(activeClass)
                elem.style.display = 'none'
                elem.style.opacity = '0'
                prevElem.style.display = 'flex'
                setTimeout(() => {
                    prevElem.style.opacity = '1'
                }, 100);
                setTimeout(() => {
                    prevElem.classList.add(activeClass)
                }, 200);
                currentDot.classList.remove('dot-active')
                prevDot.classList.add('dot-active')
                break
            }
    } 
})