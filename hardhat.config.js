require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};


const GOERLT_URL = process.env.GOERLT_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports ={
  solidity:"0.8.17",
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/4juZiirwieN9Bnswl28wCKA_VdeZnRO_',
      accounts:['c8deb4b52e8784ae411ed69e9b38aa9f16ba0ce0d95feeedf7c6d67be2c83c74'],
    },
  },
}