# Wordle Clone

![Wordle Clone Screenshot](./wordle-screenshot.png)

A simple clone of the popular Wordle game built with React and Framer Motion.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Wordle Clone is a web-based game inspired by the popular game Wordle. The objective is to guess the hidden five-letter word within six attempts. Each guess provides feedback on the correctness of letters (correct, present, or absent), helping the player deduce the correct word.

## Features

- **Responsive Design:** Playable on desktops, tablets, and mobile devices.
- **Interactive Keyboard:** Clickable and keyboard navigable keys for making guesses.
- **Visual Feedback:** Animated cells with color-coded feedback for each guess.
- **Audio Feedback:** Sound effects for gameplay events (guess, win, game over).

## Demo

[Live Demo](#) - Insert link to live demo once deployed.

## Installation

To run Wordle Clone locally, follow these steps:

1. Clone the repository:
   ```bash 
   git clone https://github.com/chirakak/wordle-clone.git
   '''
2.Navigate into the project directory:
  
   cd wordle-clone
   
3.Install dependencies:
    '''bash
    npm install
    '''
4.Start the development server:
    '''bash
    npm start
    '''
5.Open your browser and visit http://localhost:3000 to view the game.

## Usage

### Gameplay
- **Objective**: Guess the hidden five-letter word within six attempts.
- **Input**:
  - Use the on-screen keyboard or your physical keyboard to input guesses.
  - Letter keys: QWERTYUIOP, ASDFGHJKL, ZXCVBNM.
  - Enter: Submit your guess.
  - Backspace: Delete the last letter.
- **Feedback**:
  - Cells will change color to indicate the correctness of the letters:
    - **Green**: Correct letter in the correct position.
    - **Yellow**: Correct letter in the wrong position.
    - **Gray**: Incorrect letter.
- **Win/Lose**: Alerts will display the game outcomes (win or game over).

## Technologies Used
- **React**: Front-end JavaScript library for building user interfaces.
- **Framer Motion**: Animation library for React.
- **Canvas Confetti**: Library for creating confetti effects.
- **CSS**: Styled with CSS for layout and design.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/improvement
    ```
3. Make your changes.
4. Commit your changes:
    ```sh
    git commit -am 'Add new feature'
    ```
5. Push to the branch:
    ```sh
    git push origin feature/improvement
    ```
6. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.