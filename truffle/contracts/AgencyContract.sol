// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0 <0.9.0;
//import "./7-ClientContract.sol";

// Defines a new type with two fields.
// Declaring a struct outside of a contract allows
// it to be shared by multiple contracts.
// Here, this is not really needed.
struct Hotel {
    uint id;
    string nom;
    string ville;
}

contract AgencyContract {

    receive () external payable {}
    
    string[3] NumReservation = ["02/02/2022:28:01","01/03/2021:20:01","04/07/2021:13:45"];
    
  // Structs can also be defined inside contracts, which makes them
    // visible only there and in derived contracts.
    struct Agency {
        address addr;
        string nom;
        uint numHotels;
        uint balance;
        mapping (uint => Hotel) hotels;
    }

    uint public numAgencies;
    mapping (uint => Agency) public agencies;
    Hotel[] public hotels_final;
    address addressB;
    /*function setAddressB(address _addressB)external{
       addressB= _addressB;
    }
    function callHelloWorld () external view returns (string memory){
       B b = B(addressB);
       return b.HelloWorld();
    }*/

    function newAgency(address addr, string memory nom) public {
        numAgencies++; // campaignID is return variable
        // We cannot use "campaigns[campaignID] = Campaign(beneficiary, goal, 0, 0)"
        // because the right hand side creates a memory-struct "Campaign" that contains a mapping.
        Agency storage c = agencies[numAgencies];
        c.addr = addr;
        c.nom = nom;
        c.balance= 21 ;
        
        
    }

    function contribute(uint agencyID, uint id, string memory nom, string memory ville) public {
        Agency storage c = agencies[agencyID];
        // Creates a new temporary memory struct, initialised with the given values
        // and copies it over to storage.
        // Note that you can also use Funder(msg.sender, msg.value) to initialise.
        c.hotels[c.numHotels++] = Hotel({id :id, nom: nom, ville: ville});
        hotels_final.push(Hotel({id :id, nom: nom, ville: ville}));
        
    }
    function verif_NumRes (string memory num_res) public view returns (bool){
        for (uint i; i< NumReservation.length;i++){
          if (keccak256(bytes(NumReservation[i])) == keccak256(bytes(num_res)))
          return true;
      }
      return false;
    }
    
   function ManagBalance (address payable _to, uint _amount ) external returns(string memory a, uint b){
         for (uint i; i<numAgencies;i++){
          if(agencies[i].addr == _to){
            if(agencies[i].balance >=_amount){
                agencies[i].balance= agencies[i].balance-_amount;
                (a="succes", b=agencies[i].balance);
                 
            }
             else (a="failure",b=agencies[i].balance) ;
            }
      }
    }
   
    function sendViaCall (address payable _to, uint _amount)  external payable{
        (bool success, )=_to.call{value :_amount}("");
        require(success ,"call failed !");
    }
    constructor () payable public{
    newAgency(0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,"nozha voyage");
    contribute(numAgencies,0,"mouradi","sousse");
    contribute(numAgencies,1,"ibrostar","monastir");
    newAgency(0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB,"l'instant voyage");
    contribute(numAgencies,2,"Movempick","Gamarth");
    newAgency(0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678,"jawhra travel");
    contribute(numAgencies,2,"africa","Tunis");
    } 
  
}

//contract ClientContract{
   //event Log (uint amount, uint gas);
   //receive () external payable {
    //  emit Log(msg.value, gasleft());
 //  }
//}