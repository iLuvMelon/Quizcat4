var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var foodX = blockSize * 10;
var foodY = blockSize *10;

var velocityX = 0
var velocityY = 0

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows*blockSize;
    board.cols = cols*blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update,1000/10);
}

function changeDirection(e) {
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    } else if(e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }else if(e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }else if(e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
}

function update() {
    context.fillStyle = "black";
    
    context.fillRect(0,0,board.width,board.height);
    
    context.fillStyle="red";
    context.fillRect(foodX,foodY,blockSize,blockSize);
    
    if (snakeX == foodX && snakeY == foodY){
        placeFood;
    }

    context.fillStyle="lime";
    context.fillRect(snakeX,snakeY,blockSize,blockSize);
    snakeY += velocityY * blockSize
    snakeX += velocityX * blockSize

    
}


function placeFood(){
    foodX = Math.floor(Math.random()*cols)* blockSize;
    foodY = Math.floor(Math.random()*rows)* blockSize;
}