const canvas = document.getElementById('canvas');
const sizeInput = document.getElementById('myNumber')
const changeSizeBtn = document.getElementById('changeSizeBtn')
const eraseBtn = document.getElementById('erase')

const colorBtn = document.getElementById('color')
const classicBtn = document.getElementById('classic')
let colorMode = 'classic';



function populateSquare(size = 16) {
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for(let i = 0; i < size*size; i++) {
    let grid = document.createElement('div');
    grid.classList.add('square');
    canvas.appendChild(grid)
  }
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
  const g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
  const b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255

  const color = `rgb(${r}, ${g}, ${b})`; // Construct the RGB color string

  return color;
}


//add event listener on on the button
//when clicked hover change pass in the value
function hoverChange() {
  if (colorMode === 'classic') this.style.backgroundColor = 'rgb(112, 112, 112)';
  if (colorMode === 'color') this.style.backgroundColor = getRandomColor();
}
function eraseCanvas() {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    square.style.backgroundColor = '#D8D8D8'
  })
}

function changeSize(size) {
  if(size === '') {size = 16}
  
  //reset the grid
  canvas.innerHTML = ''

  //then populate
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for(let i = 0; i < size*size; i++) {
    let grid = document.createElement('div');
    grid.classList.add('square');
    canvas.appendChild(grid)
  }

  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', hoverChange)
  })  
}


function turnOnEtch() {
  populateSquare()
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', hoverChange)
  })  
}

turnOnEtch()


changeSizeBtn.addEventListener('click', () => changeSize(sizeInput.value))
colorBtn.addEventListener('click', () => colorMode = 'color')
classicBtn.addEventListener('click', () => color = 'classic')
eraseBtn.addEventListener('click', eraseCanvas)


//rainbow mode - changes color 

// alpha mode