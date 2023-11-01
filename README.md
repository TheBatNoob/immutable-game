# Number Guessing Game
The Number Guessing Game is a decentralized application (DApp) built on the Ethereum blockchain. It allows users to participate in a simple number guessing game where they can guess a random number between 1 and 100. If they guess the correct number, they win the game.

How It Works
Smart Contract
The core of the game is a smart contract deployed on the Ethereum blockchain. The smart contract, written in Solidity, provides the following functions:

constructor: This function is called when the contract is deployed and sets the owner of the contract. It also initializes the secretNumber with a random number between 1 and 100.

startNewGame: Only the owner (the creator of the game) can call this function to start a new game. It generates a new random secretNumber for the game.

guess: Players can call this function to submit their guess. If the guessed number matches the secretNumber, the player is declared the winner.

React Frontend
The game has a user interface built using React, which allows players to interact with the smart contract. The frontend provides the following features:

Connect Wallet: Players can connect their Ethereum wallets (e.g., MetaMask) to participate in the game.

Guess Number: Once connected, players can enter their guesses and submit them. If the guess is correct, they are declared the winner.

Winner Message: When a player guesses the correct number, a "Good job" message is displayed to celebrate their victory.

Getting Started
To play the Number Guessing Game, follow these steps:

Connect your Ethereum wallet (e.g., MetaMask) to the DApp.
Enter your number guess between 1 and 100.
Click the "Guess" button.
If you guess correctly, you'll see a "Good job" message.
Smart Contract Deployment
The smart contract for the Number Guessing Game is deployed on the Ethereum blockchain at contract address [insert contract address]. You can interact with it using Ethereum wallet applications.

Code Structure
The code for this DApp is organized as follows:

contracts/NumberGuessingGame.sol: Solidity smart contract for the game.
src/App.js: React frontend application for the DApp.
src/contracts/NumberGuessingGame.json: ABI and bytecode of the deployed smart contract.
Technologies Used
Solidity: For smart contract development.
Ethereum: For deploying and executing smart contracts on the Ethereum blockchain.
React: For building the user interface of the DApp.
MetaMask: A popular Ethereum wallet for user interaction.
ethers.js: A library for interacting with Ethereum smart contracts.
Conclusion
The Number Guessing Game is a simple yet engaging DApp that showcases the capabilities of smart contracts on the Ethereum blockchain. Users can test their luck and guess the correct number, and the winner receives a congratulatory message. The combination of blockchain and user interface provides a fun and transparent gaming experience.
