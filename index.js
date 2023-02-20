const board = document.querySelector('.board');
var rows = 16,columns = 16;
var row,column;


//----------GENERATING THE DRAWING BOARD----------//
function generateBoard(rows,columns){
for(let r = 0;r < rows;r++){
    for(let c = 0;c < columns;c++){
        column = document.createElement('div');
        column.setAttribute("style","border:solid 10px white;");
        column.setAttribute('id',`sqr${r}${c}`);
        board.appendChild(column);
    }
    
}
board.setAttribute('style',`grid-template-columns:repeat(${columns},1fr);`);
}
generateBoard(rows,columns);


//----------COLORING THE BOARD----------//

var select;
board.forEach(select => board.addEventListener('mouseover', color));
//ddColorButtons.forEach(addColorButton => addColorButton.addEventListener('mouseover', buttonHover));
//var select = document.querySelector('#sqr00');

select.addEventListener('mouseover', color);
    
function color(select){
    this.setAttribute('style','background:orange');
}





