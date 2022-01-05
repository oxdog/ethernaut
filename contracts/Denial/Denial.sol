// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

// Securing #1
// limit gas to avoid usage of all gas by called contract
// partner.call{value: amountToSend, gas: 80000}("");

contract Denial {
    using SafeMath for uint256;

    address public partner; // withdrawal partner - pay the gas, split the withdraw
    address payable public constant owner = payable(address(0xA9E));

    uint256 timeLastWithdrawn;

    mapping(address => uint256) withdrawPartnerBalances; // keep track of partners balances

    function setWithdrawPartner(address _partner) public {
        partner = _partner;
    }

    // withdraw 1% to recipient and 1% to owner
    function withdraw() public {
        uint256 amountToSend = address(this).balance.div(100);

        // perform a call without checking return
        // The recipient can revert, the owner will still get their share
        partner.call{value: amountToSend}("");

        owner.transfer(amountToSend);

        // keep track of last withdrawal time
        timeLastWithdrawn = block.timestamp;

        withdrawPartnerBalances[partner] = withdrawPartnerBalances[partner].add(
            amountToSend
        );
    }

    // allow deposit of funds
    receive() external payable {}

    // convenience function
    function contractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
