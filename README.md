Simon Game: 
This project is a web-based implementation of the classic Simon Game. The game challenges the player to memorize a sequence of colors that light up in a specific order and repeat the sequence back. The sequence gets longer with each level, and the game ends if the player fails to reproduce the correct order.

Features
Dynamic Level Progression: Each level adds one more color to the sequence, increasing the difficulty.
User Interaction: Players can interact with the game by clicking on colored buttons that flash when pressed.
Visual and Audio Feedback: Buttons flash when pressed to provide visual feedback.
High Score Tracking: The game keeps track of the highest score across sessions using localStorage.
How the Game Works
The game starts when the user presses a key.
A random color is chosen, and the corresponding button flashes.
The user must click the buttons in the same order as the game sequence.
If the user successfully completes the sequence, the game moves to the next level and adds one more color to the sequence.
If the user fails, the game ends, and a "Game Over" message is displayed along with the user's score.
The high score is updated if the user's score is greater than the previous high score.
Gameplay Rules
Start: Press any key to start the game.
Sequence: Watch the sequence of flashing colors and repeat the sequence by clicking the corresponding buttons.
Next Level: Each correct sequence progresses the game to the next level, where one more color is added to the sequence.
Game Over: If the player clicks the wrong button, the game ends, and the final score is displayed.
Technologies Used
HTML: Provides the basic structure of the game.
CSS: Styles the game interface, buttons, and background.
JavaScript: Controls the game logic, including the random color selection, sequence checking, button flashing, and high score tracking.
Installation
Clone the repository:

git clone https://github.com/your-username/simon-game.git
Navigate to the project directory:

cd simon-game
Open index.html in your browser to start playing:

open index.html
Game Mechanics
Game Sequence (gameSquence)
This array stores the sequence of colors generated by the game in each level.
User Sequence (userSquence)
This array stores the sequence of button presses by the user as they attempt to reproduce the game's sequence.
Flashing Buttons
When the game selects a random color, the corresponding button flashes using the btnFlash() function, which adds and removes the "flash" class.
User Button Press
When the user clicks a button, the buttonPress() function is triggered. It flashes the button, records the button's color in the userSquence array, and checks the result against the game's sequence using the resultcheck() function.
High Score
The game tracks the highest score using localStorage. If the user's score exceeds the current high score, it updates and displays the new high score.
Code Overview
Main Functions
btnFlash(btn)
This function flashes the selected button by temporarily adding the "flash" class, then removing it after 250 milliseconds.

userflash(btn)
Similar to btnFlash(), but it is used for user interactions, temporarily adding the "userflash" class to the button.

levelUp()
This function advances the game to the next level:

It increments the level variable.
It selects a random color and adds it to the game sequence.
It flashes the corresponding button.
buttonPress()
This function handles user button presses:

It flashes the pressed button.
It records the pressed button's ID in the userSquence.
It checks if the user's input matches the game sequence using resultcheck().
resultcheck(idx)
This function compares the user's sequence with the game sequence. If they match and the user completes the sequence, it moves to the next level. Otherwise, it triggers a game over sequence.

reset()
Resets the game after a game over:

Updates the high score if necessary.
Resets the level, userSquence, and gameSquence arrays.
Allows the player to start again by pressing a key.
Example of Game Play
When the player starts the game by pressing any key, the game generates a random sequence of colors.
The player clicks the buttons to match the sequence. If the player correctly follows the sequence, the game moves to the next level, and another color is added.
If the player makes a mistake, the game ends, and a "Game Over" message appears along with the final score.
Future Enhancements
Some possible future enhancements include:

Adding sound effects for each button press.
Implementing a difficulty mode where the speed of flashing increases as the player advances.
Allowing users to restart the game by clicking a button instead of pressing a key.
