// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NumberGuessingGame {
    address public owner;
    uint256 public secretNumber;

    event NewGameStarted(address indexed player, uint256 secretNumber);
    event Winner(address indexed player);

    constructor() {
        owner = msg.sender;
        // Initialize the secretNumber with a random value between 1 and 100
        secretNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % 100 + 1;
    }

    function startNewGame() public {
        require(msg.sender == owner, "Only the owner can start a new game.");
        
        // Generate a new secretNumber
        secretNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % 100 + 1;

        emit NewGameStarted(msg.sender, secretNumber);
    }

    function guess(uint256 number) public {
        require(number >= 1 && number <= 100, "Number must be between 1 and 100.");

        if (number == secretNumber) {
            emit Winner(msg.sender);
        }
    }
}
