/*Our matrix for the game*/
const pacmanMatrix = [
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

const GAME_FPS = 8;

const cRowCount = pacmanMatrix.length;
const cColCount = pacmanMatrix[0].length;

function getPacmanDirectionClass() {
    // left right up down
    if (pacmanDx === 1) {
        return 'right';
    } else if (pacmanDx === -1) {
        return 'left';
    } else if (pacmanDy === -1) {
        return 'up';
    } else if (pacmanDy === 1) {
        return 'down';
    }

    return '';
}

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
                case 'PacMan': // Not triggering...
                    glyph = `<span class="mrPacMan ${getPacmanDirectionClass()}"><img src="pacman.png"></span>`;
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

function isNextMoveValid(targetX, targetY) {
    const targetValue = pacmanMatrix[targetY][targetX];
    return targetValue !== '#' && targetValue !== '-';
}

function movePacmanOnMatrix(targetX, targetY, onMoveComplete) {
    const targetValue = pacmanMatrix[targetY][targetX];
    if (targetValue === '.') {
        // Increment the dot count
        dotCount++;
        // Update the dot count in monitor 
        var dotCountElement = document.getElementById('dot-count');
        dotCountElement.innerHTML = 'Points: ' + dotCount;

        // Play the sound effect
        var audio = new Audio('Fruit.mp3');
        audio.play();
    }

    // execute a callback if move is complete
    if (onMoveComplete) {
        onMoveComplete({ pacmanX, pacmanY, targetX, targetY });
    }

    pacmanMatrix[pacmanY][pacmanX] = ' ';//leave behind us an empty block
    pacmanX = targetX; pacmanY = targetY;
    pacmanMatrix[targetY][targetX] = `<img class="${getPacmanDirectionClass()}" src="pacman.png" />`;//now let's place Pacman to the new position
}

//mr Pacman 
var pacmanX = 1, pacmanY = 1, pacmanDx = 0, pacmanDy = 0, pendingMove = null;
pacmanMatrix[pacmanY][pacmanX] = `<img class="${getPacmanDirectionClass()}" src="pacman.png" />`;
var dotCount = 0;
function movePacman() {
    let nx;
    let ny;

    if (pendingMove) {
        nx = pacmanX + pendingMove.destX;
        ny = pacmanY + pendingMove.destY;
    } else {
        nx = pacmanX + pacmanDx; //nx is the desired column index
        ny = pacmanY + pacmanDy; //ny is the desired row index
    }

    if (nx >= cColCount) {
        nx = 0;//teleport from right to left
    } else if (nx < 0) {
        nx = cColCount - 1;//teleport from left to right
    }

    if (ny >= cRowCount) {
        ny = 0;//teleport from bottom to top
    } else if (ny < 0) {
        ny = cRowCount - 1;//teleport from top to bottom
    }

    if (isNextMoveValid(nx, ny)) {
        movePacmanOnMatrix(nx, ny, () => {
            if (pendingMove) { // likely this is an always true if check, debug and find out...
                pacmanDx = pendingMove.destX;
                pacmanDy = pendingMove.destY;
                pendingMove = null;
            }
        })
    } else {
        nx = pacmanX + pacmanDx; //nx is the desired column index
        ny = pacmanY + pacmanDy; //ny is the desired row index

        if (isNextMoveValid(nx, ny)) {
            movePacmanOnMatrix(nx, ny);
        }
    }

    // const destValue = pacmanMatrix[ny][nx];
    // if (destValue !== '#' && destValue !== '-') {//good to go(no wall here)
    //     if (destValue === '.') {
    //         // Increment the dot count
    //         dotCount++;
    //         // Update the dot count in monitor 
    //         var dotCountElement = document.getElementById('dot-count');
    //         dotCountElement.innerHTML = 'Points: ' + dotCount;

    //         // Play the sound effect
    //         var audio = new Audio('Fruit.mp3');
    //         audio.play();
    //     }

    //     // execute the pending move
    //     if (pendingMove) {
    //         pacmanDx = pendingMove.destX;
    //         pacmanDy = pendingMove.destY;
    //         pendingMove = null;
    //     }

    //     pacmanMatrix[pacmanY][pacmanX] = ' ';//leave behind us an empty block
    //     pacmanX = nx; pacmanY = ny;
    //     pacmanMatrix[pacmanY][pacmanX] = '<img src="pacman.png">';//now let's place Pacman to the new position
    // } else {
    //     nx = pacmanX + pacmanDx; //nx is the desired column index
    //     ny = pacmanY + pacmanDy; //ny is the desired row index
    //     const backupDestValue = pacmanMatrix[ny][nx];
    //     if (backupDestValue !== '#' && backupDestValue !== '-') {//good to go(no wall here)
    //         if (backupDestValue === '.') {
    //             // Increment the dot count
    //             dotCount++;
    //             // Update the dot count in monitor 
    //             var dotCountElement = document.getElementById('dot-count');
    //             dotCountElement.innerHTML = 'Points: ' + dotCount;

    //             // Play the sound effect
    //             var audio = new Audio('Fruit.mp3');
    //             audio.play();
    //         }

    //         pacmanMatrix[pacmanY][pacmanX] = ' ';//leave behind us an empty block
    //         pacmanX = nx; pacmanY = ny;
    //         pacmanMatrix[pacmanY][pacmanX] = '<img src="pacman.png">';//now let's place Pacman to the new position
    //     } 
    // }
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
            gameOver = true;
            let message = document.getElementById("game-over"); // Get the game over message element
            message.classList.remove("hidden"); // Remove the "hidden" class to display the message
            message.addEventListener("click", restartGame);
            new Audio('Death.mp3').play(); // Play the Death.mp3 sound
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
        if (value.includes('pacman.png')) {//pacman is visible in this direction
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

var gamePaused = true;
var gameOver = false;
function updateGameState() {
    if (gamePaused) {
        renderState(); // Render the game state even when paused
        return;
    }

    if (gameOver) {
        // Handle game over logic
        renderState(); // Render the game state
        return;
    }

    movePacman();
    moveGhost('Blinky');
    // moveGhost('Inky');
    // moveGhost('Pinky');
    renderState();
}

function restartGame() {
    location.reload(); // Reload the page to restart the game
}


function moveTo(destX, destY) {
    if (gameOver) {
        return; // Do not move Pac-Man if game is over
    }

    // Rest of the code to move Pac-Man
    console.log({ pacmanDx, pacmanDy, destX, destY });
    pendingMove = { destX, destY };
    gamePaused = false; // Unpause the game on first move
}

function keyboardMovementListener() {
    // Check for arrow key input
    document.addEventListener("keydown", (event) => {
        if (gamePaused) {
            gamePaused = false; // Unpause the game on arrow key press
            playIntroSound();
        } else if (!gameOver) {
            switch (event.key) {
                case "ArrowLeft":
                    moveTo(-1, 0);
                    break;
                case "ArrowRight":
                    moveTo(1, 0);
                    break;
                case "ArrowUp":
                    moveTo(0, -1);
                    break;
                case "ArrowDown":
                    moveTo(0, 1);
                    break;
            }
        }
    });
}

function gamepadMovementListener() {
    let gamepad = null;
    let prevGamepadAxes = [0, 0, 0, 0];

    const gamepadLoop = () => requestAnimationFrame(() => {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [])
        if (gamepads.length > 0) {
            gamepad = gamepads[0];
        } else if (gamepad) {
            gamepad.connected = false;
        }

        if (gamepad?.connected) {
            if (Math.round(gamepad.axes[0]) !== Math.round(prevGamepadAxes[0])
                || Math.round(gamepad.axes[1]) !== Math.round(prevGamepadAxes[1])
                || Math.round(gamepad.axes[2]) !== Math.round(prevGamepadAxes[2])
                || Math.round(gamepad.axes[3]) !== Math.round(prevGamepadAxes[3])) {

                console.log('gamepad', gamepad);

                prevGamepadAxes = gamepad.axes;

                const gamepadDestX = Math.round(gamepad.axes[0]);
                const gamepadDestY = Math.round(gamepad.axes[1]);

                if (!!gamepadDestX || !!gamepadDestY) {
                    moveTo(gamepadDestX, gamepadDestY);
                }
            }

            gamepadLoop();
        }
    });

    const onGamepadConnected = (e) => {
        if (gamePaused) {
            gamePaused = false; // Unpause the game on gamepad connection
            playIntroSound();
        }

        gamepadLoop();
    }

    const onGamepadDisconnected = (e) => {
        // console.log('onGamepadDisconnectedEvent', e);
        gamepad = e.gamepad;
    }

    window.addEventListener("gamepadconnected", onGamepadConnected);
    window.addEventListener("gamepaddisconnected", onGamepadDisconnected);
}

function initiateListeners() {
    gamepadMovementListener();
    keyboardMovementListener();
}


function playIntroSound() {
    var audio = new Audio('Intro.mp3');
    audio.play();
}

function init() {
    // Start the game loops
    setInterval(updateGameState, (1000 / GAME_FPS));

    // Start the movement listeners
    initiateListeners();
}

init();














