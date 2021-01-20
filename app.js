const startScreen = document.querySelector("#start")
const playScreen = document.querySelector("#play")
const resultScreenWin = document.querySelector("#resultWin")
const resultScreenLose = document.querySelector("#resultLose")
const startBtn = document.querySelector("#startBtn")
const letterBtns = document.querySelectorAll('.letterBtn')
const words = ['hello', 'love', 'like', 'elephant', 'lion', 'zoo', 'doctor', 'teacher', 'people', 'rich', 'parent', 'father', 'student', 'technology', 'device', 'book', 'lamp', 'house', 'desk', 'table', 'bathroom']
const wordDisplay = document.querySelector(".word")
const replayBtn = document.querySelectorAll('.replayBtn')
const characterDisplay = document.querySelector(".character")
winSound = new sound('audio/win.mp3')
loseSound = new sound('audio/lose.mp3')

function sound(src){
    this.sound = document.createElement('audio')
    this.sound.src = src
    document.body.appendChild(this.sound)
    this.play = function(){
        this.sound.play()
    }
    this.stop = function(){
        this.sound.pause()
    }
}

function randomWord(){
    let randomNumber = Math.floor(Math.random()*(words.length))
    let word = words[randomNumber]
    console.log(word)
    return word
}

let wrong = 0
let word = randomWord()
let hidenWord = hidenString()
wordDisplay.textContent = hidenWord

function hidenString(){
    let String = ''
    for (let i =0; i< word.length; i++){
        String += '_ '
    }

    return String

}

function replaceAt(str, index, letter){
    return str.substring(0, index) + letter + str.substring(index+ 1)
}

function checkLetterInString(letter){
    if (!word.includes(letter)){
        wrong += 1;
        loseSound.play()
        if(wrong == 9){
            playScreen.style.display= 'none'
            resultScreenLose.style.display = 'block'
        }

    }
    for (let i =0; i< word.length; i++){
        if (word[i] == letter){
            winSound.play()
            hidenWord = replaceAt(hidenWord, 2*i, letter)
        }
    }
}

playScreen.style.display = 'none'
resultScreenLose.style.display = 'none'
resultScreenWin.style.display = 'none'


startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none'
    playScreen.style.display = 'block'
})

replayBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.location.reload()
})})

letterBtns.forEach((btn)=> {
    btn.addEventListener('click', ()=>{
        checkLetterInString(btn.textContent)
        btn.disabled = true
        wordDisplay.textContent = hidenWord
        draw()
        if (!hidenWord.includes('_')){
            playScreen.style.display = 'none'
            resultScreenWin.style.display= 'block'
        }
    })
})

