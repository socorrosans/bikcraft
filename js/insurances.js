const buttons = document.querySelectorAll('.asks button')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = document.getElementById(button.getAttribute('aria-controls'))
    answer.classList.toggle('active')

    if(answer.classList.contains('active')){
      button.setAttribute('aria-expanded', 'true')
    } else {
      button.setAttribute('aria-expanded', 'false')
    }
  })
})