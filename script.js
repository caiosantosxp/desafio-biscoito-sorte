const biscoitoFechado = document.querySelector("#biscoito-fechado")
const btnReset = document.querySelector('#btnReset')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

btnReset.addEventListener('click', handleReset)

biscoitoFechado.addEventListener('click', handleClick)

function handleClick(){
  if(biscoitoFechado.classList.contains('treme')){
    handleOpenCoockie()
  }

  biscoitoFechado.classList.add('treme')
}

function handleOpenCoockie(){
  toggleScreen()
}

function handleReset(){
  biscoitoFechado.classList.remove('treme')
  toggleScreen()
}

function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}