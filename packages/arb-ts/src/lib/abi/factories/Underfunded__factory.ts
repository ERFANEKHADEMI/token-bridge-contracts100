/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Underfunded, UnderfundedInterface } from '../Underfunded'

const _abi = [
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'nestedCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610173806100206000396000f3fe6080604052600436106100225760003560e01c80639b7c9da31461009957610023565b5b6000610097576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f6e6f206465706f7369747300000000000000000000000000000000000000000081525060200191505060405180910390fd5b005b3480156100a557600080fd5b506100d2600480360360208110156100bc57600080fd5b81019080803590602001909291905050506100d4565b005b3073ffffffffffffffffffffffffffffffffffffffff168160405180600001905060006040518083038185875af1925050503d8060008114610132576040519150601f19603f3d011682016040523d82523d6000602084013e610137565b606091505b5050505056fea26469706673582212201d02c340fc4053d804beb47ea612cc00a92947758244aa325b8e2264a371ccd864736f6c634300060b0033'

export class Underfunded__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Underfunded> {
    return super.deploy(overrides || {}) as Promise<Underfunded>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Underfunded {
    return super.attach(address) as Underfunded
  }
  connect(signer: Signer): Underfunded__factory {
    return super.connect(signer) as Underfunded__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): UnderfundedInterface {
    return new utils.Interface(_abi) as UnderfundedInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Underfunded {
    return new Contract(address, _abi, signerOrProvider) as Underfunded
  }
}
