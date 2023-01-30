// SPDX-License-Identifier: MIT


pragma solidity >=0.8.7;

contract chai{
struct Memo{
 
     string name;
     string massage;
     uint timestamp;
     address from;
}
Memo[] Memos;

address payable owner;
constructor(){
    owner=payable(msg.sender);
}

function buyChai(string memory name, string memory massage) public payable{
    require(msg.value>0,"please pay greater than 0 ether");
    owner.transfer(msg.value);
    Memos.push(Memo(name,massage,block.timestamp,msg.sender));
}

  function getMemos() public view returns(Memo[] memory){
      return Memos;
  }

}
