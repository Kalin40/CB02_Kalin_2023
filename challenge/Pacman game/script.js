/*Our matrix for the game*/
pacmanMatrix = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'], //rowIndex=0 (y=0)
    ['#', ' ', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'], //rowIndex=1 (y=1)
    ['#', '.', '#', '#', '#', '#', '.', '#', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '#', '.', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '.', '#', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '#', '.', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '.', '#', '#', '#', '#', '#', ' ', '#', '#', ' ', '#', '#', '#', '#', '#', '.', '#', '#', '#', '#', '#', '#'],
    [' ', ' ', ' ', ' ', ' ', '#', '.', '#', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', '.', '#', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '#', '.', '#', '#', ' ', '#', '#', '#', ' ', ' ', '#', '#', '#', ' ', '#', '#', '.', '#', ' ', ' ', ' ', ' ', ' '],
    ['#', '#', '#', '#', '#', '#', '.', '#', '#', ' ', '#', '-', '-', '-', '-', '-', '-', '#', ' ', '#', '#', '.', '#', '#', '#', '#', '#', '#'],
    [' ', ' ', ' ', ' ', ' ', ' ', '.', ' ', ' ', ' ', '#', '-', '-', '-', '-', '-', '-', '#', ' ', ' ', ' ', '.', ' ', ' ', ' ', ' ', ' ', ' '],
    ['#', '#', '#', '#', '#', '#', '.', '#', '#', ' ', '#', '-', '-', '-', '-', '-', '-', '#', ' ', '#', '#', '.', '#', '#', '#', '#', '#', '#'],
    [' ', ' ', ' ', ' ', ' ', '#', '.', '#', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#', '#', '.', '#', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '#', '.', '#', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', '.', '#', ' ', ' ', ' ', ' ', ' '],
    ['#', '#', '#', '#', '#', '#', '.', '#', '#', ' ', '#', '#', '#', '#', '#', '#', '#', '#', ' ', '#', '#', '.', '#', '#', '#', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '.', '#', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '#', '.', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '#'],
    ['#', '#', '#', '.', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '.', '#', '#', '#'],
    ['#', '#', '#', '.', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '.', '#', '#', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
];

const cRowCount = pacmanMatrix.length;
const cColCount = pacmanMatrix[0].length;

/*
    renders the pacman Matrix on the display 
*/
function renderState() {
    const wallChar = ''; // The character used to represent the walls
    const dotChar = '·'; // The character used to represent dots

    let output = '';
    for (let rowIndex = 0; rowIndex < pacmanMatrix.length; rowIndex++) {
        const rowValues = pacmanMatrix[rowIndex];
        output += '<div>';
        for (let colIndex = 0; colIndex < rowValues.length; colIndex++) {
            let glyph, value = rowValues[colIndex];
            switch (value) {
                case 'PacMan':
                    glyph = `<span class="mrPacMan"><img src="pacman.png"></span>`;
                    break;
                case 'Blinky':
                    glyph = '<span class="msBlinky"><img src="blinky.png" /></span>';
                    break;
                case 'Pinky':
                    glyph = `<span class="msPinky"><img src="pinky.png"></span>`;
                    break;
                case 'Inky':
                    glyph = `<span class="msInky"><img src="inky.png"></span>`;
                    break;
                /*case '#':
                  glyph = `<span class="wall">${wallChar}</span>`;
                  break;*/
                case '.':
                    glyph = `<span class="dot">${dotChar}</span>`;
                    break;
                default:
                    glyph = value;
            }
            output += glyph;
        }
        output += '</div>';
    }
    document.querySelector('#display').innerHTML = output;
}


window.addEventListener('load', function () {
    var audio = new Audio('Intro.mp3');
    audio.play();
});

//mr Pacman
var pacmanX = 1, pacmanY = 1, pacmanDx = 0, pacmanDy = 0;
var dotCount = 0;
function movePacman() {
    let nx = pacmanX + pacmanDx; //nx is the desired column index
    let ny = pacmanY + pacmanDy; //ny is the desired row index
    if (nx >= cColCount) {
        nx = 0;//teleport from right to left
    } else
        if (nx < 0) {
            nx = cColCount - 1;//teleport from left to right
        };
    if (ny >= cRowCount) {
        ny = 0;//teleport from bottom to top
    } else
        if (ny < 0) {
            ny = cRowCount - 1;//teleport from top to bottom
        }
    const destValue = pacmanMatrix[ny][nx];
    if (destValue != '#' && destValue !== '-') {//good to go(no wall here)
        if (destValue == '.') {
            // Increment the dot count
            dotCount++;
            // Update the dot count in monitor 
            var dotCountElement = document.getElementById('dot-count');
            dotCountElement.innerHTML = 'Points: ' + dotCount;

            // Play the sound effect
            var audio = new Audio('Fruit.mp3');
            audio.play();
        }
        pacmanMatrix[pacmanY][pacmanX] = ' ';//leave behind us an empty block
        pacmanX = nx; pacmanY = ny;
        pacmanMatrix[pacmanY][pacmanX] = '<img src="pacman.png">';//now let's place Pacman to the new position
    }
}


//function makeGhostMoveAI(symbol) {
//Ghost
var ghostX = (cColCount / 2) | 0, ghostY = (cRowCount / 2) | 0, ghostDx = 0, ghostDy = -1, ghostLeaveBehind = '-', ghostStepCount = 0;
function moveGhost(symbol) {
    let nx = ghostX + ghostDx; //nx is the desired column index
    let ny = ghostY + ghostDy; //ny is the desired row index

    if (nx >= cColCount) {
        nx = 0;//teleport from right to left
    } else
        if (nx < 0) {
            nx = cColCount - 1;//teleport from left to right
        };
    if (ny >= cRowCount) {
        ny = 0;//teleport from bottom to top
    } else
        if (ny < 0) {
            ny = cRowCount - 1;//teleport from top to bottom
        }
    const destValue = pacmanMatrix[ny][nx];

    if (destValue != '#') {//good to go
        ghostStepCount++;
        if (ghostStepCount % 10 <= 1) { //skip 2 out of 10 steps
            return;
        };
        pacmanMatrix[ghostY][ghostX] = ghostLeaveBehind;//now let's place blinky in her the new position
        ghostY = ny;
        ghostX = nx;
        ghostLeaveBehind = pacmanMatrix[ghostY][ghostX] == '.' ? '.' : (pacmanMatrix[ghostY][ghostX] == '-' ? '-' : ' ');

        pacmanMatrix[ghostY][ghostX] = symbol;//now let's place blinky in her the new position

        if (ghostX == pacmanX && ghostY == pacmanY) {
            let message = document.getElementById("game-over"); // Get the game over message element
            message.classList.remove("hidden"); // Remove the "hidden" class to display the message
            //new Audio('Death.mp3').play(); // Play the Death.mp3 sound
        }


    } else {//blinky can not move to the desired position			
        ghostChangeDirection();//better change direction, what we are doing lead us on a wall!
    };

    if (Math.random() < 0.95) {//95% of the time follow mrPacMan if possible;-). This will allow the hero to escape after a few turns...
        ghostFollowPacmanIfPossible();
    }

}



function ghostChangeDirection() {
    //change the orientation of direction 
    if (ghostDx) {//blinky was moving horizontally
        ghostDx = 0;
        ghostDy = Math.random() < 0.5 ? -1 : 1;
    } else
        if (ghostDy) {//blinky was moving vertically
            ghostDy = 0;
            ghostDx = Math.random() < 0.5 ? -1 : 1;
        }
}

//a helper function that checks if the specified coordinates are within the boundaries of the game state matrix
function isPointInPacmanMatrix(x, y) {
    return (x >= 0) && (x < cColCount) && (y >= 0) && (y < cRowCount);
}
function ghostCanSeePacman(lookDirX, lookDirY) {
    //starting from blinky's position, and while we are looking at a valid position check for pacman and then look further in the requested direction
    for (let lookX = ghostX, lookY = ghostY; isPointInPacmanMatrix(lookX, lookY); lookX += lookDirX, lookY += lookDirY) {
        const value = pacmanMatrix[lookY][lookX];
        if (value == '#') {//end of sight (blinky is seeing a wall)
            return false;
        };
        if (value == '<img src="pacman.png">') {//pacman is visible in this direction
            return true;
        }
    };
}

function ghostFollowPacmanIfPossible() {
    //look for mrPacMan and adjust Blinky's direction if he is seen...
    if (ghostCanSeePacman(1, 0)) {//can she see mrPacMan if she looks right?
        ghostDx = 1; ghostDy = 0;
    } else
        if (ghostCanSeePacman(-1, 0)) {//can she see mrPacMan if she looks left?
            ghostDx = -1; ghostDy = 0;
        } else
            if (ghostCanSeePacman(0, -1)) {//can she see mrPacMan if she looks up?
                ghostDx = 0; ghostDy = -1;
            } else
                if (ghostCanSeePacman(0, 1)) {//can she see mrPacMan if she looks down?
                    ghostDx = 0; ghostDy = 1;
                };
}
//moveGhost();
//}

var gamePaused = false;
function updateGameState() {
    if (gamePaused) {
        return;
    };
    movePacman();
    moveGhost('Blinky');
    //moveGhost('Inky');
    //moveGhost('Pinky');
    renderState();

}

setInterval(updateGameState, 100);


let gamepad = null;
const joystickThreshold = 0.5;

// Game loop to handle gamepad and arrow key input
function gameLoop() {
    // Check for gamepad input
    if (gamepad) {
        const dx = gamepad.axes[0];
        const dy = gamepad.axes[1];
        if (Math.abs(dx) > joystickThreshold) {
            pacmanDx = dx > 0 ? 1 : -1;
            pacmanDy = 0;
        } else if (Math.abs(dy) > joystickThreshold) {
            pacmanDx = 0;
            pacmanDy = dy > 0 ? 1 : -1;
        } else {
            pacmanDx = 0;
            pacmanDy = 0;
        }

        if (gamepad.buttons[0].pressed) { // button A
            pacmanDx = 0;
            pacmanDy = 1;
        } else if (gamepad.buttons[1].pressed) { // button B
            pacmanDx = 1;
            pacmanDy = 0;
        } else if (gamepad.buttons[2].pressed) { // button X
            pacmanDx = -1;
            pacmanDy = 0;
        } else if (gamepad.buttons[3].pressed) { // button Y
            pacmanDx = 0;
            pacmanDy = -1;
        }
    }

    // Check for arrow key input
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowLeft":
                pacmanDx = -1;
                pacmanDy = 0;
                break;
            case "ArrowRight":
                pacmanDx = 1;
                pacmanDy = 0;
                break;
            case "ArrowUp":
                pacmanDx = 0;
                pacmanDy = -1;
                break;
            case "ArrowDown":
                pacmanDx = 0;
                pacmanDy = 1;
                break;
        }
    });

    // Request the next frame of animation
    requestAnimationFrame(gameLoop);
}

// Joystick input event listener
window.addEventListener("gamepadconnected", function onGamepadConnected(e) {
    gamepad = e.gamepad;
    window.removeEventListener("gamepadconnected", onGamepadConnected);
});

// Check for connected gamepads on page load
if (navigator.getGamepads()[0]) {
    gamepad = navigator.getGamepads()[0];
}

// Start the game loop
requestAnimationFrame(gameLoop);

















