const board = document.querySelector('.board');
var rows = 16,columns = 16;
var row,column;
var eleArr=[];


//----------GENERATING THE DRAWING BOARD----------//
function generateBoard(rows,columns){
for(let r = 0;r < rows;r++){
    for(let c = 0;c < columns;c++){
        column = document.createElement('div');
        column.setAttribute('style',`border:solid 10px white; height :calc(100% / ${rows}); width :calc(100% / ${columns}`);
        
        
        
        column.setAttribute('id',`sqr${r}-${c}`);
        eleArr.push(`sqr${r}${c}`);
        board.appendChild(column);
    }
    
}
board.setAttribute('style',`grid-template-columns:repeat(${columns},1fr);`);
}
generateBoard(rows,columns);


//----------COLORING THE BOARD----------//

var selected = null; 
const reg = /sqr/;
function select(){
document.addEventListener('mouseover',e=> {
    selected = e.target;
    console.log(selected);
    selected = document.getElementById(selected.id);
    if(selected != null && reg.test(selected.id))
        selected.setAttribute('style','background-color:orange');
});
}

select();
