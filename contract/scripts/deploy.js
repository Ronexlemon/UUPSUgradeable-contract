const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying box...");
  const box = await upgrades.deployProxy(Box, [123], {
    kind: 'uups',
    initializer: 'initialize'
  });
  await box.waitForDeployment()
  console.log(box.target, " box(proxy) address");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});