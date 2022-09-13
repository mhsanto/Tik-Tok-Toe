let turn = 'X';
let gameOver = false;
let boxTexts = document.getElementsByClassName('boxtext');
let button = document.querySelector('button');
// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}
// function to check for a win
const checkWin = () => {
    
    let wins = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector('.turnIndicator').innerText = boxTexts[e[0]].innerText + " Won ";
            gameOver = true;
             document.querySelector('.turnIndicator').style.color = "Green";
        }
    })
}
// game logic
let boxes = document.getElementsByClassName("square");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.querySelector('.turnIndicator').innerText = turn + "'s Turn";
               
            }
        }
    })
})

// reset game 
button.addEventListener('click',()=>{
    Array.from(boxTexts).forEach(e=>{
       e.innerText = "";
     
    })
    turn ='X';
    document.querySelector('.turnIndicator').innerText = turn + "'s Turn";
    gameOver = false;
    document.querySelector('.turnIndicator').style.color = "red";
})
