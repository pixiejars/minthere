const SmartContract = artifacts.require("VitalikSimpson"); //pixiejars.sol

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://"); //
};
