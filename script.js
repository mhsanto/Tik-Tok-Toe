let turn = 'X';
// function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "O" : "X";
}
// function to check for a win
const checkWin = ()=>{
    let boxText = document.querySelectorAll('.boxtext');
    let wins = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7],
        
    ]
}
// game logic
let boxes = document.getElementsByClassName("square");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            document.querySelector('.turnIndicator').innerText = turn + "'s Turn";
        }
    })
})
