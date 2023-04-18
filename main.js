let color = "black";
let click = false;
let sizeValue = document.getElementById("sizeValue");
let sizeAdjust = document.querySelector("#sizeAdjust");
let size = 16;
let board = document.querySelector(".board");

createBoard(size);

board.addEventListener('mousedown', function(e) {
    if(e.target.tagName != "BUTTON" && e.target.tagName != "INPUT"){
        click = true;
        let draw = document.querySelector("#draw");
        if(click){
            draw.innerText = "Now You can Draw.";
        }else {
            draw.innerText = "You're not allowed to draw.";
        }
    }
});
board.addEventListener('mouseup', function(e) {
    if(e.target.tagName != "BUTTON" && e.target.tagName != "INPUT"){
        click = false;
        let draw = document.querySelector("#draw");
        if(click){
            draw.innerText = "Now You can Draw.";
        }else {
            draw.innerText = "You're not allowed to draw.";
        }
    }
})
sizeAdjust.addEventListener("click", function(e) {
    resetBoard();
    size = e.target.value;
    sizeValue.innerText = `${size}x${size}`;
    createBoard(size);
});

function createBoard(size) {
    //Set board into 16 * 16 grid
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;//Size of the board
    //Loop through every div to create a div
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");//Create a new div
        div.addEventListener("mousemove", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }

}


function colorDiv() {
    if(click){
        if(color =="random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else {
            this.style.backgroundColor = "black";
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = board.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

