function keyPress(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  const key = document.querySelector(`div[data-key='${e.keyCode}']`)
  if(!audio) return

  key.classList.add('playing')
  audio.currentTime = 0
  audio.play()

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
  }

  const keys = document.querySelectorAll('.key-js')
  keys.forEach(k => k.addEventListener('transitionend', removeTransition))

  keyListener.push(e.keyCode)
}

function playback(clip){
  console.log('wat')
  console.log(clip)
  setTimeout(
    clip.forEach(key => {
      console.log(key)
      const audio = document.querySelector(`audio[data-key='${key}']`)
      audio.currentTime = 0
      audio.play()
    }),
    500
  )
}

var keyListener = []
window.addEventListener('keydown', keyPress)
document.getElementById("full-playback").addEventListener("click", function () {
  playback(keyListener)
})
