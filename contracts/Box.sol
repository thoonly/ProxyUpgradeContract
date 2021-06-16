pragma solidity ^0.7.0;

// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";

contract Box is Initializable {
    uint256 private value;
    string private message;
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    function initialize(string memory _message)  public initializer {
        message = _message;
    }
    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }

    function getMessage() public view returns(string memory){
        return message;
    }
}