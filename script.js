const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]")

let isCircleTurn;

const placeMark = (cell,classToAdd) => {
    cell.classList.add(classToAdd)
}

const swapTurns= () =>{
    isCircleTurn = !isCircleTurn;
    board.classList.remove('circle');
    board.classList.remove('x');
    if(isCircleTurn){
        board.classList.add('circle')
    }else{
        board.classList.add('x')
    }
}



const handleCLick = (e) => {
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle':'x';
    placeMark(cell,classToAdd)


    swapTurns()
}


for(const cell of cellElements){
    cell.addEventListener("click",handleCLick, {once:true});
}

