import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contract from "./contracts/NumberGuessingGame.json";
import { passportInstance } from "./passportconfig";

const contractAddress = "0x1dDdDfcD5A5c4b5754ABc32b365971300136e380"; // Replace with your contract address
const contractABI = contract.abi; // Replace with your contract ABI

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [secretNumber, setSecretNumber] = useState(null);
  const [guessedNumber, setGuessedNumber] = useState("");
  const [isWinner, setIsWinner] = useState(false);

  // Function to initialize Immutable Passport
  const initializeImmutablePassport = async () => {
    try {
      const userProfile = await passportInstance.getUserInfo();
      if (userProfile.sub) {
        loginCallback(); // Call loginCallback
        setIsImmutableLoggedIn(true);
        setImmutableUserInfo(userProfile);
      }
    } catch (error) {
      console.error("Failed to initialize Immutable Passport:", error);
    }
  };

  // Function to connect the wallet
  const connectWalletHandler = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });
        setCurrentAccount(account);
        getSecretNumber();
        initializeImmutablePassport(); // Initialize Immutable Passport
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      console.error("MetaMask is not installed.");
    }
  };

  // Function to get the secret number
  const getSecretNumber = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, contractABI, provider);
      const number = await contract.secretNumber();
      setSecretNumber(number.toNumber());
    } catch (error) {
      console.error("Failed to fetch secret number:", error);
    }
  };

  // Function to make a guess
  const guessNumber = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      await contract.guess(guessedNumber);
      // You can implement logic to check if the guess is correct and set `isWinner` accordingly.
    } catch (error) {
      console.error("Failed to make a guess:", error);
    }
  };

  // Function for Immutable Passport login
  const loginWithImmutable = async () => {
    try {
      const accounts = await passportInstance.requestAccounts();
      if (accounts[0]) {
        loginCallback(); // Call loginCallback
        setIsImmutableLoggedIn(true);
        const userProfile = await passportInstance.getUserInfo();
        setImmutableUserInfo(userProfile);
      }
    } catch (error) {
      console.error("Immutable Passport login failed:", error);
    }
  };

  // Function for Immutable Passport logout
  const logoutFromImmutable = async () => {
    try {
      await passportInstance.logout();
      setIsImmutableLoggedIn(false);
      setImmutableUserInfo(null);
    } catch (error) {
      console.error("Immutable Passport logout failed:", error);
    }
  };

  // Function to handle login callback
  const loginCallback = () => {
    passportInstance.loginCallback();
  };

  const [isImmutableLoggedIn, setIsImmutableLoggedIn] = useState(false);
  const [immutableUserInfo, setImmutableUserInfo] = useState(null);

  useEffect(() => {
    if (currentAccount) {
      getSecretNumber();
    }

    // Include loginCallback in the dependency array to ensure it's called when needed
    initializeImmutablePassport();
  }, [loginCallback, currentAccount]);

  return (
    <div>
      <h1>Number Guessing Game</h1>
      {currentAccount ? (
        <p>Connected Account: {currentAccount}</p>
      ) : (
        <button onClick={connectWalletHandler}>Connect Wallet</button>
      )}
      <p>Secret Number: {secretNumber}</p>
      <input
        type="number"
        value={guessedNumber}
        onChange={(e) => setGuessedNumber(e.target.value)}
      />
      <button onClick={guessNumber}>Guess</button>
      {isWinner && <p>Congratulations! You guessed the correct number.</p>}
      {isImmutableLoggedIn ? (
        <button onClick={logoutFromImmutable}>Logout from Immutable Passport</button>
      ) : (
        <button onClick={loginWithImmutable}>Login with Immutable Passport</button>
      )}
    </div>
  );
}

export default App;
