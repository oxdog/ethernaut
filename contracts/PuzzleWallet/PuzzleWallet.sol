// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

contract PuzzleWallet {
    using SafeMath for uint256;

    address public owner;
    uint256 public maxBalance;

    mapping(address => bool) public whitelisted;
    mapping(address => uint256) public balances;

    function init(uint256 _maxBalance) public {
        require(maxBalance == 0, "Already initialized");

        maxBalance = _maxBalance;
        owner = msg.sender;
    }

    modifier onlyWhitelisted() {
        require(whitelisted[msg.sender], "Not whitelisted");
        _;
    }

    function setMaxBalance(uint256 _maxBalance) external onlyWhitelisted {
        console.log("balance", address(this).balance);
        require(address(this).balance == 0, "Contract balance is not 0");

        maxBalance = _maxBalance;
    }

    function addToWhitelist(address addr) external {
        require(msg.sender == owner, "Not the owner");

        whitelisted[addr] = true;
    }

    // might be intersseting with delegatecall()
    function deposit() external payable onlyWhitelisted {
        require(address(this).balance <= maxBalance, "Max balance reached");

        balances[msg.sender] = balances[msg.sender].add(msg.value);
        console.log("new balance", balances[msg.sender]);
    }

    function execute(
        address to,
        uint256 value,
        bytes calldata data
    ) external payable onlyWhitelisted {
        require(balances[msg.sender] >= value, "Insufficient balance");

        balances[msg.sender] = balances[msg.sender].sub(value);

        (bool success, ) = to.call{value: value}(data);

        require(success, "Execution failed");
    }

    function multicall(bytes[] calldata data) external payable onlyWhitelisted {
        bool depositCalled = false;
        console.log("multicall");

        for (uint256 i = 0; i < data.length; i++) {
            bytes memory _data = data[i];
            bytes4 selector;

            // Gets selector from calldata
            assembly {
                selector := mload(add(_data, 32))
            }

            console.logBytes4(selector);

            if (selector == this.deposit.selector) {
                require(!depositCalled, "Deposit can only be called once");
                // Protect against reusing msg.value
                depositCalled = true;
            }

            (bool success, ) = address(this).delegatecall(data[i]);

            require(success, "Error while delegating call");
        }
    }
}
