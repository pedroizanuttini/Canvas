Ping Pong Game:
A simple browser-based ping pong game built using JavaScript and HTML5 canvas. Players control the paddles using the mouse and aim to score against their opponent. The first player to reach 3 points wins!

Table of Contents:
Features
Game Rules
How to Play
Installation
Running the Game
Code Overview

Features
Real-time Paddle Movement: Control the paddles using mouse movements.

Simple Collision Detection: The ball bounces off paddles and the edges of the canvas.
Score Keeping: Displays the current score of both players.

Winning Condition: The game stops when a player reaches 3 points.

Restart Option: Restart the game with a click of a button.

Game Rules
The ball starts from the middle.
Each player controls their paddle by moving the mouse.
The ball bounces off the paddles and the top and bottom boundaries of the canvas.
If the ball passes one of the paddles, the opposing player scores a point.
The first player to reach 3 points wins the game.
The game can be restarted at any time by clicking the "Restart" button.
How to Play
Start a local server to serve the game files (see Running the Game).
Open the game in your web browser.
Move your mouse to control the paddles:
The left paddle is controlled by moving the mouse to the left side of the canvas.
The right paddle is controlled by moving the mouse to the right side of the canvas.
Try to hit the ball with your paddle to prevent the opponent from scoring.
The game ends when a player scores 3 points. You can restart the game by clicking the "Restart" button.

Installation
Clone the repository

Open your web browser and navigate to the local server address port 5050.

Code Overview
Canvas Setup: The canvas element is used to draw the ball, paddles, and scores. The game logic runs inside the gameLoop function, which continuously updates the game state and redraws the canvas.

Game Functions:

initBall(player): Initializes the ball's position and speed based on which player is serving.
draw(): Draws the ball, paddles, and scores on the canvas.
update(): Updates the ball's position.
checkCollision(): Checks for collisions with the paddles and the canvas boundaries.
stopGame(): Stops the game when a player reaches 3 points.
restartGame(): Resets the game state to the initial values.

Event Listeners:
Mouse Movement: Controls the paddles based on the mouse's vertical position.
Click Play Again: Restarts the game when the "Restart" button is clicked.