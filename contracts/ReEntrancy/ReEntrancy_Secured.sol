pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "hardhat/console.sol";

contract ReentranceSecure is ReentrancyGuard {
    using SafeMath for uint256;
    mapping(address => uint256) public balances;

    function donate(address _to) public payable {
        balances[_to] = balances[_to].add(msg.value);
    }

    function balanceOf(address _who) public view returns (uint256 balance) {
        return balances[_who];
    }

    // Securing #1 ReentrancyGuard
    // function withdraw(uint256 _amount) public nonReentrant {
    //     if (balances[msg.sender] >= _amount) {
    //         (bool result, ) = msg.sender.call{value: _amount}("");

    //         // OG contract is 0.6.0; underflow is detected in 0.8; this hinders reentrancy as exception bubbles back up
    //         unchecked {
    //             balances[msg.sender] -= _amount;
    //         }
    //     }
    // }

    // Securing #2 Check Effects Interaction Pattern
    function withdraw(uint256 _amount) public nonReentrant {
        if (balances[msg.sender] >= _amount) {
            balances[msg.sender] -= _amount;

            (bool result, ) = msg.sender.call{value: _amount}("");
        }
    }

    // Securing #3 Pull Payments; security wise best as it hinders both Execution Blocking & Reentrancy

    receive() external payable {}
}
