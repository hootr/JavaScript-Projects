// this variable keep track of who's turn it is.//
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.//
let selectedSquares = [];

//This function is for placing an x or o in a square.//
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //the .some() method is udes to check each element of selectedSquares arra to
    // see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        // this condition checks whos turn it is.
        if (activePlayer === 'X') {
            // if activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("./images/x2.jpg")';
            // Active player may only be 'X' or 'O' so, if not 'X' it be 'O'
        } else {
            //if activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("./images/o2.jpg")';

        }
        // squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        // this calls a function to check for any win conditions.
        checkWinConditions();
        // this condition is for changing the active player.
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'
            activePlayer = 'O';
            // if active player is anything other than 'X' 
        } else {
            // change the active player to 'X'
            activePlayer = 'X';
        }

        // this function plays placement sound.
        audio('./media/smack2.mp3');
        //this condition checks to see if it is computers turn.
        if (activePlayer === 'O') {
            //this function disables clicking for computer choice.
            disableClick();
            // this function waits 1 second before placing the image 
            // and enabling click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //this function results in a random square being selected..
    function computersTurn() {
        //this boolean is needed for our while loop.
        let success = false;
        //this variable stores a randome number 0-8
        let pickASquare;
        //this condition allow our while loop to keep
        //trying if a square is selected already.
        while (!success) {
            pickASquare = String(Math.floor(Math.random()*9))
            // A randome number evaluates returns true, the square hasnt been selected yet
            if (placeXOrO(pickASquare)) {
                //this line calls the function
                placeXOrO(pickASquare);
                // this changes our boolean and ends the loops.
                success = true;
            }
        }
    }
}
// this function parses the selectedsquares array to search for wind conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    // X 0, 1, 2 condtion.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }

    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }

    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }

    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }

    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }

    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }

    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }

    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }

    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }

    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 304, 558, 508); }

    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }

    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }

    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }

    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }

    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 250, 520); }

    else if (selectedSquares.length >= 9) {
        audio('./media/tie2.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {
            return true
        }
    }
}

function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//this function utilizes html canvas to draw a line.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // this line accessses our html canvas element.
    const canvas = document.getElementById('win-lines');
    // this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;


// this function interacts with the canvas
function animateLineDrawing() {
    // this variable creates the loop for when the game ends it restarts.
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    // this method clears content from last loop iteration.
    c.clearRect(0, 0, 608, 608);
    // This starts a new path
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    c.stroke();

    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}

    }
}

// this function clears our canvas after our win line is drawn.
function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    //this line stops our animation loop.
    cancelAnimationFrame(animationLoop);
}

disableClick();
audio('./media/win2.mp3');
animateLineDrawing();
setTimeout(function() { clear(); resetGame(); }, 1000);
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
}