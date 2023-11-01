/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  OperatorAllowlist,
  OperatorAllowlistInterface,
} from "../../../../../../@imtbl/zkevm-contracts/contracts/allowlist/OperatorAllowlist.sol/OperatorAllowlist";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "added",
        type: "bool",
      },
    ],
    name: "AddressAllowlistChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "targetBytes",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "added",
        type: "bool",
      },
    ],
    name: "WalletAllowlistChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REGISTRAR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addressTargets",
        type: "address[]",
      },
    ],
    name: "addAddressToAllowlist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
    ],
    name: "addWalletToAllowlist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "grantRegistrarRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "isAllowlisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addressTargets",
        type: "address[]",
      },
    ],
    name: "removeAddressFromAllowlist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddr",
        type: "address",
      },
    ],
    name: "removeWalletFromAllowlist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "revokeRegistrarRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610f9d380380610f9d83398101604081905261002f916100df565b61003a600082610040565b5061010f565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166100db576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561009a3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000602082840312156100f157600080fd5b81516001600160a01b038116811461010857600080fd5b9392505050565b610e7f8061011e6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636aa7009611610097578063d547741f11610066578063d547741f146101f5578063e91f2c0d14610208578063ee3ee5b81461021b578063f68e95531461022e57600080fd5b80636aa70096146101b457806391d14854146101c7578063a0d596cc146101da578063a217fddf146101ed57600080fd5b8063248a9ca3116100d3578063248a9ca31461014a5780632f2ff15d1461017b57806336568abe1461018e57806352f31029146101a157600080fd5b806301ffc9a7146100fa5780630488d9741461012257806305a3b80914610137575b600080fd5b61010d610108366004610baa565b610246565b60405190151581526020015b60405180910390f35b610135610130366004610be9565b610271565b005b61010d610145366004610be9565b610378565b61016d610158366004610c06565b60009081526020819052604090206001015490565b604051908152602001610119565b610135610189366004610c1f565b61044a565b61013561019c366004610c1f565b610474565b6101356101af366004610c4f565b6104f7565b6101356101c2366004610be9565b6105f5565b61010d6101d5366004610c1f565b6106e7565b6101356101e8366004610be9565b610710565b61016d600081565b610135610203366004610c1f565b610736565b610135610216366004610c4f565b61075b565b610135610229366004610be9565b61084b565b61016d6d5245474953545241525f524f4c4560901b81565b60006001600160e01b031982166305a3b80960e01b148061026b575061026b82610871565b92915050565b6d5245474953545241525f524f4c4560901b61028c816108a6565b813f6000818152600360209081526040808320805460ff191660011790558051639061112760e01b815290516001600160a01b03871692639061112792600480820193918290030181865afa1580156102e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030d9190610cc4565b6001600160a01b03818116600090815260026020908152604091829020805460ff1916600190811790915591519182529293509086169184917f52a9758e33d80a562e98b34d922581e414149b9c485e5929682a72acb451c31591015b60405180910390a350505050565b6001600160a01b03811660009081526001602052604081205460ff16156103a157506001919050565b813f60008181526003602052604090205460ff1615610441576000836001600160a01b031663906111276040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041e9190610cc4565b6001600160a01b031660009081526002602052604090205460ff16949350505050565b50600092915050565b600082815260208190526040902060010154610465816108a6565b61046f83836108b3565b505050565b6001600160a01b03811633146104e95760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104f38282610937565b5050565b6d5245474953545241525f524f4c4560901b610512816108a6565b60005b828110156105ef57600180600086868581811061053457610534610ce1565b90506020020160208101906105499190610be9565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905583838281811061058357610583610ce1565b90506020020160208101906105989190610be9565b6001600160a01b03167f218a1635b2755f3fe7bdb77932fcd6ffca69760533404fe817f7404315bf6df060016040516105d5911515815260200190565b60405180910390a2806105e781610d0d565b915050610515565b50505050565b6d5245474953545241525f524f4c4560901b610610816108a6565b813f6000818152600360209081526040808320805460ff191690558051639061112760e01b815290516001600160a01b03871692639061112792600480820193918290030181865afa15801561066a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068e9190610cc4565b6001600160a01b038181166000908152600260209081526040808320805460ff19169055519182529293509086169184917f52a9758e33d80a562e98b34d922581e414149b9c485e5929682a72acb451c315910161036a565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600061071b816108a6565b6104f36d5245474953545241525f524f4c4560901b8361044a565b600082815260208190526040902060010154610751816108a6565b61046f8383610937565b6d5245474953545241525f524f4c4560901b610776816108a6565b60005b828110156105ef576001600085858481811061079757610797610ce1565b90506020020160208101906107ac9190610be9565b6001600160a01b031681526020810191909152604001600020805460ff191690558383828181106107df576107df610ce1565b90506020020160208101906107f49190610be9565b6001600160a01b03167f218a1635b2755f3fe7bdb77932fcd6ffca69760533404fe817f7404315bf6df06000604051610831911515815260200190565b60405180910390a28061084381610d0d565b915050610779565b6000610856816108a6565b6104f36d5245474953545241525f524f4c4560901b83610736565b60006001600160e01b03198216637965db0b60e01b148061026b57506301ffc9a760e01b6001600160e01b031983161461026b565b6108b0813361099c565b50565b6108bd82826106e7565b6104f3576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556108f33390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61094182826106e7565b156104f3576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6109a682826106e7565b6104f3576109b3816109f5565b6109be836020610a07565b6040516020016109cf929190610d4a565b60408051601f198184030181529082905262461bcd60e51b82526104e091600401610dbf565b606061026b6001600160a01b03831660145b60606000610a16836002610df2565b610a21906002610e09565b67ffffffffffffffff811115610a3957610a39610e1c565b6040519080825280601f01601f191660200182016040528015610a63576020820181803683370190505b509050600360fc1b81600081518110610a7e57610a7e610ce1565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610aad57610aad610ce1565b60200101906001600160f81b031916908160001a9053506000610ad1846002610df2565b610adc906001610e09565b90505b6001811115610b54576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610b1057610b10610ce1565b1a60f81b828281518110610b2657610b26610ce1565b60200101906001600160f81b031916908160001a90535060049490941c93610b4d81610e32565b9050610adf565b508315610ba35760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104e0565b9392505050565b600060208284031215610bbc57600080fd5b81356001600160e01b031981168114610ba357600080fd5b6001600160a01b03811681146108b057600080fd5b600060208284031215610bfb57600080fd5b8135610ba381610bd4565b600060208284031215610c1857600080fd5b5035919050565b60008060408385031215610c3257600080fd5b823591506020830135610c4481610bd4565b809150509250929050565b60008060208385031215610c6257600080fd5b823567ffffffffffffffff80821115610c7a57600080fd5b818501915085601f830112610c8e57600080fd5b813581811115610c9d57600080fd5b8660208260051b8501011115610cb257600080fd5b60209290920196919550909350505050565b600060208284031215610cd657600080fd5b8151610ba381610bd4565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610d1f57610d1f610cf7565b5060010190565b60005b83811015610d41578181015183820152602001610d29565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610d82816017850160208801610d26565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610db3816028840160208801610d26565b01602801949350505050565b6020815260008251806020840152610dde816040850160208701610d26565b601f01601f19169190910160400192915050565b808202811582820484141761026b5761026b610cf7565b8082018082111561026b5761026b610cf7565b634e487b7160e01b600052604160045260246000fd5b600081610e4157610e41610cf7565b50600019019056fea2646970667358221220762dc03536c9985befd79660abe7251a21413018947251a50f72bfe8e9df449364736f6c63430008110033";

type OperatorAllowlistConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OperatorAllowlistConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OperatorAllowlist__factory extends ContractFactory {
  constructor(...args: OperatorAllowlistConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OperatorAllowlist> {
    return super.deploy(admin, overrides || {}) as Promise<OperatorAllowlist>;
  }
  override getDeployTransaction(
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin, overrides || {});
  }
  override attach(address: string): OperatorAllowlist {
    return super.attach(address) as OperatorAllowlist;
  }
  override connect(signer: Signer): OperatorAllowlist__factory {
    return super.connect(signer) as OperatorAllowlist__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OperatorAllowlistInterface {
    return new utils.Interface(_abi) as OperatorAllowlistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OperatorAllowlist {
    return new Contract(address, _abi, signerOrProvider) as OperatorAllowlist;
  }
}
