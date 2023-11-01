// scripts/deploy.js
import { ethers } from "hardhat";
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const NumberGuessingGame = await ethers.getContractFactory("NumberGuessingGame");
  const numberGuessingGame = await NumberGuessingGame.deploy();

  console.log("NumberGuessingGame contract address:", numberGuessingGame.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
