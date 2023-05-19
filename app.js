let controls = []

let canvas = document.getElementById('canvas');

let squareBySquare = 25;

//iterate, squarebysquare times 
  //iterate again squarebysquare times
    //const square = create a div
    //add a class called square -->
    //canvas.appendChild(square)
    

for(let i = 0; i < squareBySquare; i++) {
  const row = document.createElement('div')
  for(let j = 0; j < squareBySquare; j++) {
     const square = document.createElement('div')
     square.classList.add('square');
     row.appendChild(square)
  }
  canvas.appendChild(row);
}

function hoverChange(e) {
  this.style.backgroundColor = 'rgb(112, 112, 112)'
}

const squares = document.querySelectorAll('.square');

squares.forEach( square => {
  square.addEventListener('mouseover', hoverChange)
})

console.log(squares)


