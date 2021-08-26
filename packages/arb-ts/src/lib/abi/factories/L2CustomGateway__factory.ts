/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L2CustomGateway,
  L2CustomGatewayInterface,
} from '../L2CustomGateway'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_l2ToL1Id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalInitiated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1ToL2Token',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'l1Address',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'l2Address',
        type: 'address[]',
      },
    ],
    name: 'registerTokenFromL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506119a7806100206000396000f3fe6080604052600436106100bc5760003560e01c80638a2dc0141161006f5780638a2dc014146103db57806395fcea781461040e578063a0c76a9614610423578063a7e28d48146104fc578063d2ce7d651461052f578063d4f5532f146105c9578063f887ea4014610694576100bc565b8062aa3a9b146100c1578063015234ab1461019a5780630f09eb51146101c15780632db09c1c146101d65780632e567b3614610207578063485cc955146103125780637b3a3c8b1461034d575b600080fd5b3480156100cd57600080fd5b50610198600480360360a08110156100e457600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561012457600080fd5b82018360208201111561013657600080fd5b803590602001918460018302840111600160201b8311171561015757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106a9945050505050565b005b3480156101a657600080fd5b506101af6108a3565b60408051918252519081900360200190f35b3480156101cd57600080fd5b506101af6108a9565b3480156101e257600080fd5b506101eb6108af565b604080516001600160a01b039092168252519081900360200190f35b61029d600480360360a081101561021d57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561025f57600080fd5b82018360208201111561027157600080fd5b803590602001918460018302840111600160201b8311171561029257600080fd5b5090925090506108be565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102d75781810151838201526020016102bf565b50505050905090810190601f1680156103045780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561031e57600080fd5b506101986004803603604081101561033557600080fd5b506001600160a01b0381358116916020013516610d8d565b61029d6004803603608081101561036357600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561039d57600080fd5b8201836020820111156103af57600080fd5b803590602001918460018302840111600160201b831117156103d057600080fd5b509092509050610d9b565b3480156103e757600080fd5b506101eb600480360360208110156103fe57600080fd5b50356001600160a01b0316610dad565b34801561041a57600080fd5b50610198610dc8565b34801561042f57600080fd5b5061029d600480360360a081101561044657600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561048857600080fd5b82018360208201111561049a57600080fd5b803590602001918460018302840111600160201b831117156104bb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e25945050505050565b34801561050857600080fd5b506101eb6004803603602081101561051f57600080fd5b50356001600160a01b0316610f1d565b61029d600480360360c081101561054557600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561058b57600080fd5b82018360208201111561059d57600080fd5b803590602001918460018302840111600160201b831117156105be57600080fd5b509092509050610f3b565b3480156105d557600080fd5b50610198600480360360408110156105ec57600080fd5b810190602081018135600160201b81111561060657600080fd5b82018360208201111561061857600080fd5b803590602001918460208302840111600160201b8311171561063957600080fd5b919390929091602081019035600160201b81111561065657600080fd5b82018360208201111561066857600080fd5b803590602001918460208302840111600160201b8311171561068957600080fd5b509092509050611108565b3480156106a057600080fd5b506101eb611298565b3330146106fd576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b61070f826001600160a01b03166112a7565b610760576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b61076b8583866112ad565b60006107756108a9565b5a039050805a116107b75760405162461bcd60e51b815260040180806020018281038252602b815260200180611947602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561083457818101518382015260200161081c565b50505050905090810190601f1680156108615780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b15801561088257600080fd5b5087f1158015610896573d6000803e3d6000fd5b5050505050505050505050565b60025481565b6109c490565b6000546001600160a01b031681565b6000546060906001600160a01b03163314806108f557506000546001600160a01b03166108ea3361132a565b6001600160a01b0316145b610941576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60608061094e8585611339565b91509150600061095d8a610f1d565b9050610971816001600160a01b03166112a7565b6109aa5760006109858b838c8c8c89611463565b905080156109a85760405180602001604052806000815250945050505050610d83565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b60208310610a105780518252601f1990920191602091820191016109f1565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610a70576040519150601f19603f3d011682016040523d82523d6000602084013e610a75565b606091505b50915091506000821580610a8a575060208251105b15610a9757506001610ac6565b6000610aa483600c611499565b90508d6001600160a01b0316816001600160a01b031614610ac457600191505b505b8015610b1357610ae88d308e8d60405180602001604052806000815250610e25565b9550610af5308b886114f9565b50604051806020016040528060008152509650505050505050610d83565b50508251159050610d0d576000306001600160a01b031662aa3a9b838a8d8d886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610bcd578181015183820152602001610bb5565b50505050905090810190601f168015610bfa5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610c1d57600080fd5b505af1925050508015610c2e575060015b610c4257610c3d828b8a6112ad565b610c46565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b87604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ccb578181015183820152602001610cb3565b50505050905090810190601f168015610cf85780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610d18565b610d188189896112ad565b876001600160a01b0316896001600160a01b03168b6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb28a6040518082815260200191505060405180910390a46040518060200160405280600081525093505050505b9695505050505050565b610d978282611525565b5050565b6060610d838686866000808888610f3b565b6003602052600090815260409020546001600160a01b031681565b6000610dd2611577565b9050336001600160a01b03821614610e22576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b6060632e567b3660e01b86868686610e3f6002548861159c565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b83811015610eaa578181015183820152602001610e92565b50505050905090810190601f168015610ed75780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6001600160a01b039081166000908152600360205260409020541690565b60603415610f7b576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610f883361162f565b15610fa157610f978585611643565b9092509050610fde565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b60025460009081610fee8d610f1d565b9050611002816001600160a01b03166112a7565b611048576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b61105381868d611681565b6110608d868e8e88610e25565b955061106d858c886114f9565b925050818b6001600160a01b0316856001600160a01b03167f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d738f858f60405180846001600160a01b03166001600160a01b03168152602001838152602001828152602001935050505060405180910390a4506040805160208082019390935281518082039093018352810190529a9950505050505050505050565b6000546001600160a01b031633148061113c57506000546001600160a01b03166111313361132a565b6001600160a01b0316145b611188576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60005b838110156112915782828281811061119f57fe5b905060200201356001600160a01b0316600360008787858181106111bf57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555082828281811061121f57fe5b905060200201356001600160a01b03166001600160a01b031685858381811061124457fe5b905060200201356001600160a01b03166001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a360010161118b565b5050505050565b6001546001600160a01b031681565b3b151590565b826001600160a01b0316638c2a993e83836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561130d57600080fd5b505af1158015611321573d6000803e3d6000fd5b50505050505050565b61111061111160901b01190190565b6060808383604081101561134c57600080fd5b810190602081018135600160201b81111561136657600080fd5b82018360208201111561137857600080fd5b803590602001918460018302840111600160201b8311171561139957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156113eb57600080fd5b8201836020820111156113fd57600080fd5b803590602001918460018302840111600160201b8311171561141e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b600061148b30846114868a308a8960405180602001604052806000815250610e25565b6114f9565b506001979650505050505050565b600081601401835110156114e9576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b6002805460010190556000805461151d90829086906001600160a01b0316856116e1565b949350505050565b61152f828261187a565b6001600160a01b038116610d97576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b606082826040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156115e65781810151838201526020016115ce565b50505050905090810190601f1680156116135780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052979650505050505050565b6001546001600160a01b0390811691161490565b600060608383604081101561165757600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156113eb57600080fd5b826001600160a01b03166374f4f54783836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561130d57600080fd5b604080516349460b4d60e11b81526001600160a01b0384166004820190815260248201928352835160448301528351600093849360649363928c169a938b938a938a93929088019060208501908083838d5b8381101561174b578181015183820152602001611733565b50505050905090810190601f1680156117785780820380516001836020036101000a031916815260200191505b5093505050506020604051808303818588803b15801561179757600080fd5b505af11580156117ab573d6000803e3d6000fd5b50505050506040513d60208110156117c257600080fd5b5051604080516020808252865182820152865193945084936001600160a01b03808a1694908b16937f2b986d32a0536b7e19baa48ab949fec7b903b7fad7730820b20632d100cc3a68938a93919283929083019185019080838360005b8381101561183757818101518382015260200161181f565b50505050905090810190601f1680156118645780820380516001836020036101000a031916815260200191505b509250505060405180910390a495945050505050565b6001600160a01b0382166118cb576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611918576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905556fe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a264697066735822122071cd393315c62375cc666d6a8740281c26a07eb93fdf296e268abce7a258ca4e64736f6c634300060b0033'

export class L2CustomGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2CustomGateway> {
    return super.deploy(overrides || {}) as Promise<L2CustomGateway>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2CustomGateway {
    return super.attach(address) as L2CustomGateway
  }
  connect(signer: Signer): L2CustomGateway__factory {
    return super.connect(signer) as L2CustomGateway__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L2CustomGatewayInterface {
    return new utils.Interface(_abi) as L2CustomGatewayInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2CustomGateway {
    return new Contract(address, _abi, signerOrProvider) as L2CustomGateway
  }
}
