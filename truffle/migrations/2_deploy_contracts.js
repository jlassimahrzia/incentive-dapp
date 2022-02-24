const ClientRating = artifacts.require("ClientRating");

module.exports = function(deployer) {
  deployer.deploy(ClientRating);
};