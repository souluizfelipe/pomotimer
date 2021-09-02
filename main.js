const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const timerWrapper = document.querySelector('.timer-wrapper')
const startBtn = document.querySelector('.start-btn')
const pauseBtn = document.querySelector('.pause-btn')
const stopBtn = document.querySelector('.stop-btn')


const MINUTES_INITIAL_VALUE = '25'
const SECONDS_INITIAL_VALUE = '04'

minutes.textContent = MINUTES_INITIAL_VALUE
seconds.textContent = SECONDS_INITIAL_VALUE

startBtn.addEventListener('click', () => count() )

function count() {
  let countDown = setInterval(() => {

    let counterMinutes = Number(minutes.textContent)
    let counterSeconds = Number(seconds.textContent)

    
    
    if(counterSeconds == '00') {
      counterMinutes -= 1

      return( seconds.textContent = "03", minutes.textContent = counterMinutes)
    }
    
    counterSeconds --
    seconds.textContent = String(counterSeconds)
    


  } , 1000)


  pauseBtn.addEventListener('click', () => {
    clearTimeout(countDown)
  })

  stopBtn.addEventListener('click', () => {
    minutes.textContent = "25"
    seconds.textContent = "00"

    clearTimeout(countDown)
  })
}


