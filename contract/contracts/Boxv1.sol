// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
contract Box is Initializable,UUPSUpgradeable{

    uint256 public  number;

    function initialize(uint _num) public initializer{
        number = _num;

    }

    function getNumber()public view returns(uint){
        return number;
    }
     function _authorizeUpgrade(address newImplementation)
        internal
        
        override
    {}



}