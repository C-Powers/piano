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
  const keys = document.querySelectorAll('.key')
  keys.forEach(k => k.addEventListener('transitionend', removeTransition))
}
window.addEventListener('keydown', keyPress)
