import web3 from "./web3";

const { Web3 } = require("web3");
const contract_address = "0xbbe270DbA3787d74650Ca65D2bEaCc9CDB896484";
const abi = [
  {
    constant: true,
    inputs: [],
    name: "carInfo",
    outputs: [
      { name: "carNumber", type: "string" },
      { name: "insuranceDetails", type: "string" },
      { name: "model", type: "string" },
      { name: "color", type: "string" },
      { name: "registrationDate", type: "string" },
      { name: "ownerName", type: "string" },
      { name: "ownerBirthDate", type: "string" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_vinNumber", type: "string" },
      { name: "_engineType", type: "string" },
      { name: "_transmissionType", type: "string" },
      { name: "_mileage", type: "uint256" },
      { name: "_fuelType", type: "string" },
      { name: "_bodyType", type: "string" },
      { name: "_numberOfDoors", type: "uint8" },
      { name: "_numberOfSeats", type: "uint8" },
    ],
    name: "setAdditionalCarDetails",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "cancelOwnershipTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "additionalDetails",
    outputs: [
      { name: "vinNumber", type: "string" },
      { name: "engineType", type: "string" },
      { name: "transmissionType", type: "string" },
      { name: "mileage", type: "uint256" },
      { name: "fuelType", type: "string" },
      { name: "bodyType", type: "string" },
      { name: "numberOfDoors", type: "uint8" },
      { name: "numberOfSeats", type: "uint8" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_newOwnerName", type: "string" },
      { name: "_newOwnerBirthDate", type: "string" },
    ],
    name: "acceptOwnershipTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getCarDetails",
    outputs: [
      { name: "carNumber", type: "string" },
      { name: "insuranceDetails", type: "string" },
      { name: "model", type: "string" },
      { name: "color", type: "string" },
      { name: "registrationDate", type: "string" },
      { name: "ownerName", type: "string" },
      { name: "ownerBirthDate", type: "string" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_carNumber", type: "string" },
      { name: "_insuranceDetails", type: "string" },
      { name: "_model", type: "string" },
      { name: "_color", type: "string" },
      { name: "_registrationDate", type: "string" },
      { name: "_ownerName", type: "string" },
      { name: "_ownerBirthDate", type: "string" },
    ],
    name: "updateCarDetails",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getCurrentOwner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_newOwner", type: "address" }],
    name: "initiateOwnershipTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "newOwner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "_carNumber", type: "string" },
      { name: "_insuranceDetails", type: "string" },
      { name: "_model", type: "string" },
      { name: "_color", type: "string" },
      { name: "_registrationDate", type: "string" },
      { name: "_ownerName", type: "string" },
      { name: "_ownerBirthDate", type: "string" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "previousOwner", type: "address" },
      { indexed: true, name: "newOwner", type: "address" },
      { indexed: false, name: "carNumber", type: "string" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

export async function getContractInstance(address) {
  try {
    const contract = new web3.eth.Contract(abi, address);
    await contract.methods.getCarDetails().call();
    return contract;
  } catch (error) {
    console.error("Error fetching contract:", error);
    alert(
      "Invalid contract address or connection error. Please check and try again."
    );
    throw error;
  }
}
