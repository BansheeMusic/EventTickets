require("@nomicfoundation/hardhat-toolbox");

// also on Fantom Network
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
  	moonbase: {
  		url: 'https://rpc.api.moonbase.moonbeam.network',
  		chainId: 1287, // 0x507 in hex,
  		accounts: ['']
  	}
  }
};
