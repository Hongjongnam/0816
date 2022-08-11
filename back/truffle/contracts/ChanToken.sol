// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./node_modules/openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";
import "./node_modules/openzeppelin-solidity/contracts/utils/Strings.sol";

contract ChanToken is ERC721Enumerable, Ownable {
    uint public mint_price = 1 ether;
    string public metadataURI;

    constructor(string memory _name, string memory _symbol, string memory _metadataURI) ERC721(_name, _symbol){
        metadataURI = _metadataURI;
    }

    function mintToken() public payable {
        require(msg.value >= mint_price);

        uint tokenId = totalSupply() + 1;
        payable(Ownable.owner()).transfer(msg.value);
        _mint(msg.sender, tokenId);
    }
}