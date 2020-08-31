/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers'
import { Provider } from 'ethers/providers'
import { UnsignedTransaction } from 'ethers/utils/transaction'

import { TransactionOverrides } from '.'
import { ArbErc20 } from './ArbErc20'

export class ArbErc20Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: TransactionOverrides): Promise<ArbErc20> {
    return super.deploy(overrides) as Promise<ArbErc20>
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides)
  }
  attach(address: string): ArbErc20 {
    return super.attach(address) as ArbErc20
  }
  connect(signer: Signer): ArbErc20Factory {
    return super.connect(signer) as ArbErc20Factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbErc20 {
    return new Contract(address, _abi, signerOrProvider) as ArbErc20
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'adminMint',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x6080604052610bac806100136000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a457c2d711610066578063a457c2d714610185578063a9059cbb146101b1578063dd62ed3e146101dd578063e58306f91461020b578063f3fef3a3146102395761009e565b8063095ea7b3146100a357806318160ddd146100e357806323b872dd146100fd578063395093511461013357806370a082311461015f575b600080fd5b6100cf600480360360408110156100b957600080fd5b506001600160a01b038135169060200135610265565b604080519115158252519081900360200190f35b6100eb610282565b60408051918252519081900360200190f35b6100cf6004803603606081101561011357600080fd5b506001600160a01b03813581169160208101359091169060400135610288565b6100cf6004803603604081101561014957600080fd5b506001600160a01b038135169060200135610315565b6100eb6004803603602081101561017557600080fd5b50356001600160a01b0316610369565b6100cf6004803603604081101561019b57600080fd5b506001600160a01b038135169060200135610384565b6100cf600480360360408110156101c757600080fd5b506001600160a01b0381351690602001356103f2565b6100eb600480360360408110156101f357600080fd5b506001600160a01b0381358116916020013516610406565b6102376004803603604081101561022157600080fd5b506001600160a01b038135169060200135610431565b005b6102376004803603604081101561024f57600080fd5b506001600160a01b03813516906020013561044c565b60006102796102726104c1565b84846104c5565b50600192915050565b60025490565b60006102958484846105b1565b61030b846102a16104c1565b61030685604051806060016040528060288152602001610ac1602891396001600160a01b038a166000908152600160205260408120906102df6104c1565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61070d16565b6104c5565b5060019392505050565b60006102796103226104c1565b8461030685600160006103336104c1565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6107a416565b6001600160a01b031660009081526020819052604090205490565b60006102796103916104c1565b8461030685604051806060016040528060258152602001610b5360259139600160006103bb6104c1565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61070d16565b60006102796103ff6104c1565b84846105b1565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3360011461043e57600080fd5b6104488282610805565b5050565b61045633826108f5565b604080516350edcbc160e11b81526001600160a01b038416600482015260248101839052905160649163a1db978291604480830192600092919082900301818387803b1580156104a557600080fd5b505af11580156104b9573d6000803e3d6000fd5b505050505050565b3390565b6001600160a01b03831661050a5760405162461bcd60e51b8152600401808060200182810382526024815260200180610b2f6024913960400191505060405180910390fd5b6001600160a01b03821661054f5760405162461bcd60e51b8152600401808060200182810382526022815260200180610a796022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166105f65760405162461bcd60e51b8152600401808060200182810382526025815260200180610b0a6025913960400191505060405180910390fd5b6001600160a01b03821661063b5760405162461bcd60e51b8152600401808060200182810382526023815260200180610a346023913960400191505060405180910390fd5b61067e81604051806060016040528060268152602001610a9b602691396001600160a01b038616600090815260208190526040902054919063ffffffff61070d16565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546106b3908263ffffffff6107a416565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561079c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610761578181015183820152602001610749565b50505050905090810190601f16801561078e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156107fe576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b038216610860576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600254610873908263ffffffff6107a416565b6002556001600160a01b03821660009081526020819052604090205461089f908263ffffffff6107a416565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b03821661093a5760405162461bcd60e51b8152600401808060200182810382526021815260200180610ae96021913960400191505060405180910390fd5b61097d81604051806060016040528060228152602001610a57602291396001600160a01b038516600090815260208190526040902054919063ffffffff61070d16565b6001600160a01b0383166000908152602081905260409020556002546109a9908263ffffffff6109f116565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60006107fe83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061070d56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a723158201b192aaf3376a8bd413e08ed2d13384f0c5e8a71b42f916a57b62f4083a2b82864736f6c63430005110032'
