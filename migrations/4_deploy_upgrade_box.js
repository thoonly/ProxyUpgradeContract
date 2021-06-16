
// migrations/4_prepare_upgrade_boxv2.js
const Box = artifacts.require('Box');
const BoxV2 = artifacts.require('BoxV2');

const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer) {
    const existing = await Box.deployed();
    const instance = await upgradeProxy(existing.address, BoxV2, { deployer });
    console.log("Upgraded", instance.address);
};