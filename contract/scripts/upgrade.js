const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box2 = await ethers.getContractFactory("Boxv");
  console.log("Deploying box...");
  const box = await upgrades.upgradeProxy('0xb404D8eFFf2A59AEF50B333a4eE6e8824f69eB3d',Box2)
  console.log("one upgrading");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});