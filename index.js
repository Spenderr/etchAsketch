const board = document.querySelector('.board');
var rows = 16,columns = 16;
var row,column;
var eleArr=[];


//----------GENERATING THE DRAWING BOARD----------//
function generateBoard(rows,columns){
for(let r = 0;r < rows;r++){
    for(let c = 0;c < columns;c++){
        column = document.createElement('div');
        column.setAttribute('style',`border:solid 10px white;background:white; heigth:calc(100%,${rows});width:calc(100%,${columns})`);
    
        column.setAttribute('id',`sqr${r}-${c}`);
        eleArr.push(`sqr${r}${c}`);
        board.appendChild(column);
    }
    
}
board.setAttribute('style',`grid-area:1 / 1 / span${columns}/span${rows}`);
board.setAttribute('style',`grid-template-columns:repeat(${columns},1fr);grid-template-rows:repeat(${rows},1fr);`);
}
generateBoard(rows,columns);


//----------COLORING THE BOARD----------//

var penColor = 'black';
var selected = null; 
const reg = /sqr/;

let isMouseDown = false;

function color(coloring) {
  document.addEventListener('mousedown', () => {
    isMouseDown = true;
  });

  document.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  document.addEventListener('mouseover', (e) => {
    if (isMouseDown) {
      selected = e.target;
      selected = document.getElementById(selected.id);
      if (selected != null && reg.test(selected.id)) {
        selected.setAttribute('style', `background-color:${coloring}`);
      }
      //console.log("color:" + coloring);
    }
  });
}

color(penColor);





//----------SELECTING THE COLOR----------//

const palet = document.getElementsByClassName('palet')[0];
palet.style.background = 'black';
palet.addEventListener('input', (e) => {
  penColor = e.target.value;
  color(penColor);
  palet.style.background = penColor;
});

//-----------CLEAR THE BOARD-------------//

const clearbtn = document.getElementById('clearbtn');
clearbtn.addEventListener('click', function() {
  const squares = document.getElementsByClassName('board')[0].querySelectorAll('div');
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = 'white';
  }
});


//-----------ERASER MODE-----------------//

const eraser = document.getElementById('eraser');

eraser.addEventListener('click',function()
{
    penColor = 'white';
    color(penColor);
    palet.style.background = 'white';
});




