// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyTokens {

    //public variables here
  string public tokenName = "META";
  string public tokenAbbrv = "META";
  uint public totalSupply = 0;

    //mapping variables here
    mapping(address => uint) public balances;

    // mint function
  function mint (address _adress, uint _value) public{
    totalSupply += _value;
    balances[_adress] += _value;
  }

    // burn function
  function burn (address _adress, uint _value) public{
    if (balances[_adress] >= _value) {
      totalSupply -= _value;
      balances[_adress] -= _value;
    }
  }
}
