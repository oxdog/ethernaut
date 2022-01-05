// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;
import "hardhat/console.sol";

// import "../helpers/Ownable-05.sol"

// # NOTE
// # This attack only works < 0.6 as by then .length()
// # became read-only to avoid storage collision of gigantic arrays ;)

contract Ownable {
    address owner;

    constructor() public {
        owner = msg.sender;
    }
}

contract AlienCodex is Ownable {
    bool public contact;
    bytes32[] public codex;

    modifier contacted() {
        assert(contact);
        _;
    }

    function make_contact() public {
        contact = true;
    }

    function record(bytes32 _content) public contacted {
        codex.push(_content);
    }

    function retract() public contacted {
        codex.length--;
    }

    function revise(uint256 i, bytes32 _content) public contacted {
        codex[i] = _content;
    }
}
