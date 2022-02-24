// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract ClientRating {

    uint256 public rateCounter ;

    struct ClientRate {
        address user;
        int256 location ;
        int256 price ;
        int256 activities ;
        int256 services ;
        int8[4] food;
        int8[4] stay ;
        int8[4] staff ;
    }
   
    mapping(uint256 => ClientRate ) public ratings ;

    constructor() public {
        createClientRate(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,4,5,3,5,[-1,2,3,4],[-1,2,3,4],[-1,2,3,4]);
    }

    event ClientRateCreated(
        ClientRate clientRate ,
        uint256 reward  
    );
    

    function createClientRate(address user, int256 _location ,
    int256 _price , int256 _activities , int256  _services , 
    int8[4] memory food  , int8[4] memory stay  , int8[4] memory staff ) public {
       rateCounter ++;
       ratings[rateCounter] =  ClientRate(user,_location,_price,_activities,_services,food,stay,staff);
       uint256 reward = calcule_reward();
       emit ClientRateCreated(ratings[rateCounter],reward);
    }


    function test_tab(int8[4] memory tab) public pure returns (uint256) {
        uint256 valid = 0 ;
        uint i=0;
        for(i=0;i<4;i++){
            if(tab[i]>0){
                valid++;
            }
        }
        return valid ;
    }

    function calcule_reward() internal view returns (uint256){
        ClientRate memory rate = ratings[rateCounter];
        uint256 _reward = 0;
        if(rate.location >= 0) {
            _reward =  _reward + 1; 
        }
        if(rate.price >= 0) {
            _reward =  _reward +1; 
        }
        if(rate.activities >= 0) {
           _reward =  _reward +1; 
        }
        if(rate.services >= 0) {
            _reward =  _reward +1; 
        }
        if(test_tab(rate.food) == 4) {
           _reward =  _reward +1; 
        }
        if(test_tab(rate.stay) == 4) {
           _reward =  _reward +1; 
        }
        if(test_tab(rate.staff) == 4) {
           _reward =  _reward +1;  
        }
        return _reward ;
    }

}