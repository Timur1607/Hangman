let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
let words = {
    'еда':['яблоко','апельсин', 'груша','ананас', 'торт', 'пицца',],
    'школа':['парта','доска', 'тетрадь', 'ручка',],
}
// console.log(Object.keys(words).length);

let wordItself = ''

let loseWindow = document.querySelector('.lose')
let answer = document.querySelector('.lose__word')
let backToMenu = document.querySelector('.lose__return')
let menu = document.querySelector('.menu')
let newGame = document.querySelector('.lose__menu')

let helpButton = document.querySelector('.game__help')
let help = document.querySelector('.help')
let helpCont = document.querySelector('.help__return')
let helpText = document.querySelector('.help__text')
let helpLetter = ''

let win = document.querySelector('.win')
let winNewGame = document.querySelector('.win__menu')
let winBackToMenu = document.querySelector('.win__return')
winBackToMenu.addEventListener('click', () => {
    game.style.display = 'none'
    win.style.setProperty('opacity', '0')
    win.style.setProperty('z-index', '-1')
    menu.style.display = 'flex'
    win.id = '1'
    counter1()
    win.id = '0'
})
winNewGame.addEventListener('click', () => {
    win.style.setProperty('opacity', '0')
    win.style.setProperty('z-index', '-1')
    win.id = '1'
    counter1()
    win.id = '0'


    for(let i = 1; i <= 6; i++){
        allPicture.children[i].style.display = 'none'
    }

    buttonPlay.parentElement.style.display = 'none'
    game.style.display = 'flex'
    attempt.textContent = `Попыток: 6`
    wordSubject.innerHTML = ``
    letters.innerHTML = ``
    keyboard.innerHTML = ``
    subject = Math.round(Math.random() * (Object.keys(words).length-1))
    word = Math.round(Math.random() * (words[Object.keys(words)[subject]].length-1))

    chooseRandomWord()
})

helpButton.addEventListener('click', () => {//<-----------------ПОМОЩЬ
    help.style.setProperty('opacity', '1')
    help.style.setProperty('z-index', '10')
    helpText.textContent = `Одна из букв: ${helpLetter}`
})
helpCont.addEventListener('click', () => {
    help.style.setProperty('opacity', '0')
    help.style.setProperty('z-index', '-1')
})

let pauseButton = document.querySelector('.game__menu')
let pause = document.querySelector('.pause')
let cont = document.querySelector('.pause__return')
let pauseNewGame = document.querySelector('.pause__menu')
let pauseBackToMenu = document.querySelector('.pause__toMenu')
pauseButton.addEventListener('click', () => {//<----------------------ПАУЗА
    // console.log('пауза');
    pause.style.setProperty('opacity', '1')
    pause.style.setProperty('z-index', '10')
})
cont.addEventListener('click', () => {
    pause.style.setProperty('opacity', '0')
    pause.style.setProperty('z-index', '-1')
})
pauseBackToMenu.addEventListener('click', () => {
    game.style.display = 'none'
    pause.style.setProperty('opacity', '0')
    pause.style.setProperty('z-index', '-1')
    menu.style.display = 'flex'
    pause.id = '1'
    counter1()
    pause.id = '0'
})
pauseNewGame.addEventListener('click', () => {
    
    pause.id = '1'
    pause.style.setProperty('opacity', '0')
    pause.style.setProperty('z-index', '-1')
    console.log(pause.getAttribute('id'));
    counter1()
    pause.id = '0'
    

    for(let i = 1; i <= 6; i++){
        allPicture.children[i].style.display = 'none'
    }

    buttonPlay.parentElement.style.display = 'none'
    game.style.display = 'flex'
    attempt.textContent = `Попыток: 6`
    wordSubject.innerHTML = ``
    letters.innerHTML = ``
    keyboard.innerHTML = ``
    subject = Math.round(Math.random() * (Object.keys(words).length-1))
    word = Math.round(Math.random() * (words[Object.keys(words)[subject]].length-1))

    chooseRandomWord()
})

newGame.addEventListener('click', () => {//<--------------------------НОВАЯ ИГРА
    loseWindow.style.setProperty('opacity', '0')
    loseWindow.style.setProperty('z-index', '-1')

    for(let i = 1; i <= 6; i++){
        allPicture.children[i].style.display = 'none'
    }

    buttonPlay.parentElement.style.display = 'none'
    game.style.display = 'flex'
    attempt.textContent = `Попыток: 6`
    wordSubject.innerHTML = ``
    letters.innerHTML = ``
    keyboard.innerHTML = ``
    subject = Math.round(Math.random() * (Object.keys(words).length-1))
    word = Math.round(Math.random() * (words[Object.keys(words)[subject]].length-1))

    chooseRandomWord()
})
backToMenu.addEventListener('click', () => {//<--------------------------В МЕНЮ
    game.style.display = 'none'
    loseWindow.style.setProperty('opacity', '0')
    loseWindow.style.setProperty('z-index', '-1')
    menu.style.display = 'flex'
})

let lose = () => {
    loseWindow.style.setProperty('opacity', '1')
    loseWindow.style.setProperty('z-index', '10')
    answer.textContent = `Слово: ${wordItself}`
}

let attempt = document.querySelector('.game__attempts')
function createCounter(){
    let count = 6
    return function (){
        count--
        // console.log(count);
        attempt.textContent = `Попыток: ${count}`
        if(count === 0 || pause.id === '1' || win.id === '1'){
            if(count === 0){
                setTimeout(() => {
                    lose()
                }, 500);
            }
            count = 6
            check = 0
        }
        
    }
}
let counter1 = createCounter()

let subject = Math.round(Math.random() * (Object.keys(words).length-1))
// console.log(subject);
// console.log(Object.keys(words)[subject]);
// console.log((words[Object.keys(words)[subject]]).length);
let word = Math.round(Math.random() * (words[Object.keys(words)[subject]].length-1))
// console.log(word);

// console.log((words[Object.keys(words)[subject]][word]).length);



let game = document.querySelector('.game')
let buttonPlay = document.querySelector('.button-play')
let menuName = document.querySelector('.menu__name')
let wordSubject = document.querySelector('.game__element_name')
// console.log(menuName);

let check = 0
let allPicture = document.querySelector('.game__element_div')
let drawLimb = () => {
    check++
    allPicture.children[check].style.display = 'block'
}

let checkLetter = (letter) => {//<-------------------------------------------------------ПРОВЕРКА БУКВЫ---------------------------ю>
    // console.log(letter);
    let letterWords = document.querySelectorAll('.game__element_word-letter_p')
    // console.log(letterWords);
    
    let check = false
    for(let el of letterWords){
        
        // console.log(el.textContent);
        if((letter.textContent).toLowerCase() === (el.textContent).toLowerCase()){
            el.style.display = 'block'
            // letter.parentElement.children[1].style.display = 'block'
            check = true
        } else if(letter.textContent.toLowerCase() !== el.textContent.toLowerCase()){
            // console.log(letter.parentElement);
            letter.parentElement.children[2].style.display = 'block'
        }
    }

    if(check === true){
        letter.parentElement.children[1].style.display = 'block'
        letter.parentElement.children[2].style.display = 'none'
        check = false
    } else if(check === false){
        drawLimb()
        counter1()
    }

    let checkAnswer = true
    for(let el of letterWords){
        // console.log(el.getAttribute('style'));
        if(el.getAttribute('style') !== null){
            
        } else if (el.getAttribute('style') === null){
            checkAnswer = false
        }
    }
    if(checkAnswer === true){
        win.style.setProperty('opacity', '1')
        win.style.setProperty('z-index', '10')
    } else{
        check = true
    }
    
    // letter.parentElement.removeEventListener('click', checkLetter)
}

let letters = document.querySelector('.game__element_word')
let keyboard = document.querySelector('.game__element_letters')
let chooseRandomWord = () => {  //<------------------------------------------ЗАГРУЗКА БУКВ И СЛОВА-------------ю>
    wordSubject.textContent = `Тема: ${Object.keys(words)[subject]}`
    for(let i = 0; i < alphabet.length; i++){
        let key = document.createElement('div')
        key.classList.add('game__element_letter')
        key.innerHTML = `
            <p class="game__element_letter-p">${alphabet[i].toUpperCase()}</p>
            <img class="game__element_letter-true" src="./img/true.png" alt="">
            <img class="game__element_letter-false" src="./img/false.png" alt="">
        `
        keyboard.appendChild(key)
        key.addEventListener('click', () => {
            checkLetter(key.children[0])
        },{ once: true })
    }

    // console.log((words[Object.keys(words)[subject]][word]));
    wordItself = (words[Object.keys(words)[subject]][word])
    for(let i = 0; i < (words[Object.keys(words)[subject]][word]).length; i++){
        let letter = document.createElement('div')
        letter.classList.add('game__element_word-letter')
        letter.innerHTML = `
            <p class="game__element_word-letter_p">${(words[Object.keys(words)[subject]][word])[i]}</p>
            <span class="game__element_word-letter_span"></span>
        `
        letters.appendChild(letter)
    }
    let rand = (Math.round(Math.random() * (Object.keys(words).length-1)))
    helpLetter = (words[Object.keys(words)[subject]][word])[rand]
}

buttonPlay.addEventListener('click', () => {
    // console.log('ИГРАТЬ');
    buttonPlay.parentElement.style.display = 'none'
    game.style.display = 'flex'
    attempt.textContent = `Попыток: 6`
    wordSubject.innerHTML = ``
    letters.innerHTML = ``
    keyboard.innerHTML = ``

    for(let i = 1; i <= 6; i++){
        allPicture.children[i].style.display = 'none'
    }

    subject = Math.round(Math.random() * (Object.keys(words).length-1))
    word = Math.round(Math.random() * (words[Object.keys(words)[subject]].length-1))
    chooseRandomWord()
})


