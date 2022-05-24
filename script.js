const counter = document.querySelector('#counter')
let seconds = 0
let startID
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const resetButton = document.querySelector('#reset')




// start timer
startButton.addEventListener('click', function () {
    startID = setInterval(function () {
        seconds++
        counter.innerText = seconds
    }, 1000)
})

// pause timer
pauseButton.addEventListener('click', (() => {
    clearInterval(startID)
}))

resetButton.addEventListener('click', function () {
    seconds = 0
    counter.innerText = seconds
    clearInterval(startID)
})


