// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ByteHasher } from "./helpers/ByteHasher.sol";
import { IWorldID } from "./interfaces/IWorldID.sol";

contract Gumroad is ERC1155 {

    using ByteHasher for bytes;

    error InvalidNullifier();

    IWorldID internal immutable worldId;

    string _actionId = "wid_601f03da24682ed7a2dcf72a4de2c956";

    uint256 internal immutable groupId = 1;
    uint256 internal immutable actionId = abi.encodePacked(_actionId).hashToField();

    mapping(uint256 => bool) internal nullifierHashes;
    

    uint256 public tokenId;
    uint256 id;

    struct Creator {
        address creatorAddress;
        address tokenAddress;
        uint256 supply;
        uint256 price;
        uint256 rentPrice;
        bool matic;
        bool rentable;
    }

    mapping(uint256 => string) public tokenURIs;
    mapping(uint256 => Creator) public tokenInfo;
    mapping(uint256 => string) private contentURI;
    mapping(uint256 => mapping(address => uint256)) rentedNfts;
    mapping(uint256 => address) public resellors;


    modifier  onlyBuyer(uint256 _tokenId,address _address) {
        require(rentedNfts[_tokenId][_address] < block.timestamp && balanceOf(msg.sender, _tokenId) > 0, "No access");
        _;
    }

    event Created(uint id,uint256 indexed tokenId, address indexed creator,address tokenAddress,uint256 price, uint256 supply, string tokenURI,bool rentable,uint256 rentPrice);
    event Bought(uint id,uint256 indexed tokenId, address indexed buyer, string tokenURI,address creator);
    event Rent(uint id,uint256 indexed tokenId, address indexed renter, uint256 amount, string tokenURI,uint256 rentPrice,uint256 rentTime);
    event Resell(uint id,uint256 indexed tokenId, address indexed seller, uint256 amount, string tokenURI,address creator,bool resell);

    constructor(IWorldID _worldId) ERC1155("Ragtag"){
        worldId = _worldId;
    }

    function createItem(uint256 _amount,uint256 price,address tokenAddress, string memory _tokenURI, string memory _contentURI,bool matic,bool rentable,uint256 rent_price) public {
        _mint(msg.sender, tokenId,1, "");
        tokenURIs[tokenId] = _tokenURI;
        contentURI[tokenId] = _contentURI;
        tokenInfo[tokenId] = Creator(msg.sender,tokenAddress, _amount,price,rent_price,matic,rentable);
        emit Created(id,tokenId, msg.sender,tokenAddress,price, _amount, _tokenURI,rentable,rent_price);
        id++;
        tokenId++;
    }

    function buyItem(
        uint256 _tokenId,
        address _address,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) external payable{
        if (nullifierHashes[nullifierHash]) revert InvalidNullifier();

        worldId.verifyProof(
            root,
            groupId,
            abi.encodePacked(msg.sender).hashToField(),
            nullifierHash,
            actionId,
            proof
        );

        require(tokenInfo[_tokenId].supply > 0, "No more tokens left");

        nullifierHashes[nullifierHash] = true;
        if(!tokenInfo[_tokenId].matic){
            IERC20(tokenInfo[_tokenId].tokenAddress).transferFrom(msg.sender, tokenInfo[_tokenId].creatorAddress, tokenInfo[_tokenId].price);
        }else{
            require(msg.value == tokenInfo[_tokenId].price, "You need to send the exact amount");
            payable(tokenInfo[_tokenId].creatorAddress).transfer(msg.value);
        }
        _mint(_address, _tokenId, 1, "");
        tokenInfo[_tokenId].supply--;
        emit Bought(id,_tokenId, msg.sender, tokenURIs[_tokenId],tokenInfo[_tokenId].creatorAddress);
        id++;
    }

    function resellItem(uint256 _tokenId) external {
        require(balanceOf(msg.sender, _tokenId) > 0, "You don't own this token");
        safeTransferFrom(msg.sender, address(this), _tokenId, 1, "");
        resellors[_tokenId] = msg.sender;
        emit Resell(id,_tokenId, msg.sender, tokenInfo[_tokenId].price, tokenURIs[_tokenId],tokenInfo[_tokenId].creatorAddress,true);
    }

    function rentItem(uint256 _tokenId,uint256 rentTime) external payable{
        require(tokenInfo[_tokenId].rentable,"Not rentable");
        if(!tokenInfo[_tokenId].matic){
            IERC20(tokenInfo[_tokenId].tokenAddress).transferFrom(msg.sender, tokenInfo[_tokenId].creatorAddress, tokenInfo[_tokenId].rentPrice);
        }else{
            require(msg.value == tokenInfo[_tokenId].rentPrice, "You need to send the exact amount");
            payable(tokenInfo[_tokenId].creatorAddress).transfer(msg.value);
        }
        rentedNfts[_tokenId][msg.sender] = rentTime;
        emit Rent(id,_tokenId, msg.sender, tokenInfo[_tokenId].rentPrice, tokenURIs[_tokenId],tokenInfo[_tokenId].rentPrice,rentTime);
        id++;
    }

    function buyResellItem(uint256 _tokenId) external payable{
        require(balanceOf(address(this), _tokenId) > 0, "No tokens left");        
        if(!tokenInfo[_tokenId].matic){
            IERC20(tokenInfo[_tokenId].tokenAddress).transferFrom(msg.sender, tokenInfo[_tokenId].creatorAddress, tokenInfo[_tokenId].price/10);
            IERC20(tokenInfo[_tokenId].tokenAddress).transferFrom(msg.sender, resellors[_tokenId], tokenInfo[_tokenId].price - tokenInfo[_tokenId].price/10);
        }else{
            require(msg.value == tokenInfo[_tokenId].price, "You need to send the exact amount");
            payable(tokenInfo[_tokenId].creatorAddress).transfer(msg.value/10);
            payable(resellors[_tokenId]).transfer(msg.value-msg.value/10);
        }
        safeTransferFrom(address(this), msg.sender, _tokenId, 1, "");
        emit Resell(id,_tokenId, msg.sender, tokenInfo[_tokenId].price, tokenURIs[_tokenId],tokenInfo[_tokenId].creatorAddress,false);
        id++;
    }

    function updateSupply(uint256 _tokenId, uint256 _amount) external {
        require(msg.sender == tokenInfo[_tokenId].creatorAddress, "Only creator can update supply");
        tokenInfo[_tokenId].supply = _amount;
    }

    function updateTokenURI(uint256 _tokenId, string memory _tokenURI) external {
        require(msg.sender == tokenInfo[_tokenId].creatorAddress, "Only creator can update tokenURI");
        tokenURIs[_tokenId] = _tokenURI;
    }

    function updateContentURI(uint256 _tokenId, string memory _contentURI) external {
        require(msg.sender == tokenInfo[_tokenId].creatorAddress, "Only creator can update contentURI");
        contentURI[_tokenId] = _contentURI;
    }


    function uri(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        return tokenURIs[_tokenId];
    }

    function getContentURI(uint256 _tokenId) external view  onlyBuyer(_tokenId,msg.sender) returns (string memory){
        return contentURI[_tokenId];
    }

}