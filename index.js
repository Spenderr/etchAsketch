const board = document.querySelector('.board');
var rows = 16,columns = 16;
var row,column;

//----------GENERATING THE DRAWING BOARD----------//
function generateBoard(rows,columns){
for(let r = 0;r < rows;r++){
    for(let c = 0;c < columns;c++){
        column = document.createElement('div');
        column.setAttribute("style","border:solid 10px white;");
        column.setAttribute('id',`${r} ${c}`);
        board.appendChild(column);
    }
    
}
board.setAttribute('style',`grid-template-columns:repeat(${columns},1fr);`);
}
generateBoard(rows,columns);

/*
function color()
{   
    var temp = document.onmousemove = function(e)
    {e.target.id};
    target.innerHTML = board.style.background= 'green';
}

document.getElementById(column.addEventListener('mousemove',color));

*/