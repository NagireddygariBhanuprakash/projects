   
var name=prompt("enter your name")
var name=document.write(`welcome you started to play game all the best ${name}`)

var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {//step 1 calling setGAme by anonymous fun
    setGame();
}

function setGame() {

    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let boxInsideGame = document.createElement("div");
            boxInsideGame.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            // console.log(num) //num has the value of board
            updateboxInsideGame(boxInsideGame, num);//fun call send args as the id,val
            document.getElementById("board").append(boxInsideGame);
        }
    }
    
    setTwo();
    setTwo();

}

function updateboxInsideGame(boxInsideGame, num) {//Parameters as the id,val
    boxInsideGame.innerText = "";
    boxInsideGame.classList.value = "";
    boxInsideGame.classList.add("boxInsideGame");
    if (num > 0) {
        boxInsideGame.innerText = num.toString();              
    }
}

document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
        setTwo();
    }
    else if (e.code == "ArrowRight") {
        slideRight();
        setTwo();
    }
    else if (e.code == "ArrowUp") {
        slideUp();
        setTwo();

    }
    else if (e.code == "ArrowDown") {
        slideDown();
        setTwo();
    }
    document.getElementById("score").innerText = "Score: " + score;
})

window.addEventListener("keyUp", (e)=>{
    if(e.code=="ArrowLeft"){
        slideLeft();
        setTwo();
    }
    else if(e.code=="ArrowRight"){
        slideRight();
        setTwo();
    }
    else if(e.code=="ArrowUp"){
        slideUp();
        setTwo();
    }
    else if(e.code=="ArrowDown"){
        slideDown();
        setTwo();
    }
})

function filterZero(row){
    return row.filter(num => num != 0); 
}

function slide(row) {
    //[0, 2, 2, 2] 
    row = filterZero(row); //[2, 2, 2]
    for (let i = 0; i < row.length-1; i++){
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    } 
    row = filterZero(row); 
    while (row.length < columns) {
        row.push(0);
    } 
    return row;
}



function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;
        for (let c = 0; c < columns; c++){
            let boxInsideGame = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateboxInsideGame(boxInsideGame, num);
        }
    }
}

function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];       
        row.reverse();              
        row = slide(row)            
        board[r] = row.reverse();   
        for (let c = 0; c < columns; c++){
            let boxInsideGame = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateboxInsideGame(boxInsideGame, num);
        }
    }
}

function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let boxInsideGame = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateboxInsideGame(boxInsideGame, num);
        }
    }
}

function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let boxInsideGame = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateboxInsideGame(boxInsideGame, num);
        }
    }
}

function setTwo() {
    if (!hasEmptyboxInsideGame()) {
        return "GAme over";
    }
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            board[r][c] = 2;
            let boxInsideGame = document.getElementById(r.toString() + "-" + c.toString());
            boxInsideGame.innerText = "2";
            boxInsideGame.classList.add("b2");
            found = true;
        }
    }
}

function hasEmptyboxInsideGame() {
    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) { 
                return true;
            }
            
        }
    }
    return false;
}
