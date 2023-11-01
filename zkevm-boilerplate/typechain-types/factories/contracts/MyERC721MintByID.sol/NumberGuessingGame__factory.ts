/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NumberGuessingGame,
  NumberGuessingGameInterface,
} from "../../../contracts/MyERC721MintByID.sol/NumberGuessingGame";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "secretNumber",
        type: "uint256",
      },
    ],
    name: "NewGameStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "Winner",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "guess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "secretNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startNewGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556040516064906100429042904490602001918252602082015260400190565b6040516020818303038152906040528051906020012060001c6100659190610078565b61007090600161009a565b6001556100c1565b60008261009557634e487b7160e01b600052601260045260246000fd5b500690565b808201808211156100bb57634e487b7160e01b600052601160045260246000fd5b92915050565b6102e0806100d06000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063482d51e0146100515780638da5cb5b1461005b5780639189fec11461008b578063c36604ed1461009e575b600080fd5b6100596100b5565b005b60005461006e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610059610099366004610248565b6101a8565b6100a760015481565b604051908152602001610082565b6000546001600160a01b031633146101205760405162461bcd60e51b8152602060048201526024808201527f4f6e6c7920746865206f776e65722063616e2073746172742061206e6577206760448201526330b6b29760e11b60648201526084015b60405180910390fd5b6064424460405160200161013e929190918252602082015260400190565b6040516020818303038152906040528051906020012060001c6101619190610261565b61016c906001610283565b600181905560405190815233907f631e75793be1472f707731dcfd097ddce52e764c4fe77f06bb7b2223c3fc1f479060200160405180910390a2565b600181101580156101ba575060648111155b6102105760405162461bcd60e51b815260206004820152602160248201527f4e756d626572206d757374206265206265747765656e203120616e64203130306044820152601760f91b6064820152608401610117565b60015481036102455760405133907f745c90b656b4aafe296c8ca35aeacfe56cb96c90e1d320e5da643fff1051b6c090600090a25b50565b60006020828403121561025a57600080fd5b5035919050565b60008261027e57634e487b7160e01b600052601260045260246000fd5b500690565b808201808211156102a457634e487b7160e01b600052601160045260246000fd5b9291505056fea264697066735822122019df8c36b77d242a41213ccf0d644082399b83c68977dd5c015d940f30b6260964736f6c63430008110033";

type NumberGuessingGameConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NumberGuessingGameConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NumberGuessingGame__factory extends ContractFactory {
  constructor(...args: NumberGuessingGameConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NumberGuessingGame> {
    return super.deploy(overrides || {}) as Promise<NumberGuessingGame>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NumberGuessingGame {
    return super.attach(address) as NumberGuessingGame;
  }
  override connect(signer: Signer): NumberGuessingGame__factory {
    return super.connect(signer) as NumberGuessingGame__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NumberGuessingGameInterface {
    return new utils.Interface(_abi) as NumberGuessingGameInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NumberGuessingGame {
    return new Contract(address, _abi, signerOrProvider) as NumberGuessingGame;
  }
}