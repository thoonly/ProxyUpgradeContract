// test/Box.proxy.test.js
// Load dependencies
const { expect } = require('chai');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const { expectRevert } = require('@openzeppelin/test-helpers')

// Load compiled artifacts
const Box = artifacts.require('Box');

// Start test block
contract('Box (proxy)', function () {
    beforeEach(async function () {
        // Deploy a new Box contract for each test
        this.box = await deployProxy(Box, [42], {initializer: 'store'});
    });

    // Test case
    it('retrieve returns a value previously initialized', async function () {
        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect((await this.box.retrieve()).toString()).to.equal('42');
    });
    it('retrieve returns a value from initialized',async function () {
        await this.box.initialize('hello world');
        expect((await this.box.getMessage())).to.equal('hello world');
    })

    it('retrieve error when initialized again',async function () {
        await this.box.initialize('hello world');
        await expectRevert(this.box.initialize('goodbye world'),'Initializable: contract is already initialized');
    })
});