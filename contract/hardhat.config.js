


require("hardhat-deploy");
require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

//require("dotenv").config({ path: ".env" });

const defaultNetwork = "alfajores";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 
  networks: {
   
    
    
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: ["PRIVATE_KEY"],
      chainId: 44787,
    },
    
},


      
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      },
      viaIR: true
    }
  },
};