export const ClientRate_ADDRESS = "0xa1F5f40eD3be98Af0ac39493775A9Eddc4b38112"
export const ClientRate_ABI =  [
    {
      "constant": true,
      "inputs": [],
      "name": "rateCounter",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1160ab9f"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ratings",
      "outputs": [
        {
          "name": "user",
          "type": "address"
        },
        {
          "name": "location",
          "type": "int256"
        },
        {
          "name": "price",
          "type": "int256"
        },
        {
          "name": "activities",
          "type": "int256"
        },
        {
          "name": "services",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5d30e84d"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "name": "user",
              "type": "address"
            },
            {
              "name": "location",
              "type": "int256"
            },
            {
              "name": "price",
              "type": "int256"
            },
            {
              "name": "activities",
              "type": "int256"
            },
            {
              "name": "services",
              "type": "int256"
            },
            {
              "name": "food",
              "type": "int8[4]"
            },
            {
              "name": "stay",
              "type": "int8[4]"
            },
            {
              "name": "staff",
              "type": "int8[4]"
            }
          ],
          "indexed": false,
          "name": "clientRate",
          "type": "tuple"
        },
        {
          "indexed": false,
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "ClientRateCreated",
      "type": "event",
      "signature": "0xc5f294391e6f9b2dfc35589e3ec97a4d9494b2859b5e9d77cdce0f6667b813f8"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        },
        {
          "name": "_location",
          "type": "int256"
        },
        {
          "name": "_price",
          "type": "int256"
        },
        {
          "name": "_activities",
          "type": "int256"
        },
        {
          "name": "_services",
          "type": "int256"
        },
        {
          "name": "food",
          "type": "int8[4]"
        },
        {
          "name": "stay",
          "type": "int8[4]"
        },
        {
          "name": "staff",
          "type": "int8[4]"
        }
      ],
      "name": "createClientRate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe9be0d9f"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tab",
          "type": "int8[4]"
        }
      ],
      "name": "test_tab",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0x877f3b6e"
    }
  ]