// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, ERC20Burnable, Ownable {
  constructor(string memory _name, string memory _symbol)
    ERC20(_name, _symbol)
  {}

  function mint(address to, uint256 amount) public {
    _mint(to, amount);
  }
}