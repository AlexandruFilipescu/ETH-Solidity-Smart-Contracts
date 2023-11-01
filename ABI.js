// The Application Binary Interface (ABI) is a JSON-based description on how to convert user actions between their JSON and Binary representations.
const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "oldHashes",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "oldTimestamps",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "blueprintUpdaters",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "hashValue",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "BluePrintHistory",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isUpdated",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "oldtimestamp",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "oldHashes",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "blueprintUpdaters",
        type: "address[]",
      },
    ],
    name: "BluePrintUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "UID",
        type: "uint256",
      },
    ],
    name: "getBlueprintHistory",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "oldHashes",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "oldTimestamps",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "blueprintUpdaters",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isUnique",
        type: "bool",
      },
    ],
    name: "NewBlueprint",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "UID",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "hashValue",
        type: "bytes32",
      },
    ],
    name: "updateBlueprint",
    outputs: [
      {
        internalType: "bool",
        name: "isUpdated",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "oldtimestamp",
        type: "uint256[]",
      },
      {
        internalType: "bytes32[]",
        name: "oldHashes",
        type: "bytes32[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "UID",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "hashValue",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "authorizedAddresses",
        type: "address[]",
      },
    ],
    name: "uploadNewBlueprintHash",
    outputs: [
      {
        internalType: "bool",
        name: "isCertified",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "uniqueId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ValidateBlueprint",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "UID",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "hashValue",
        type: "bytes32",
      },
    ],
    name: "validateBlueprintHash",
    outputs: [
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "uniqueId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositAccount",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
