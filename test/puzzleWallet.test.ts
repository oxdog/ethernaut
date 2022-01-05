import { ethers } from 'hardhat'
import chai from '../scripts/chaisetup'
import { ExploitPuzzleWallet } from '../types/typechain/ExploitPuzzleWallet'
import { PuzzleProxy } from '../types/typechain/PuzzleProxy'
import { PuzzleWallet } from '../types/typechain/PuzzleWallet'

const { expect } = chai

describe('PuzzleWallet', () => {
  let proxy: PuzzleProxy
  let proxyW: PuzzleWallet
  let implementation: PuzzleWallet
  let exploit: ExploitPuzzleWallet

  let deployer: any, admin: any, attacker: any

  // beforeEach(async () => {
  //   ;[deployer, admin, attacker] = await ethers.getSigners()

  //   const imFac = await ethers.getContractFactory('PuzzleWallet', deployer)
  //   implementation = (await imFac.deploy()) as PuzzleWallet

  //   await implementation.deployed()

  //   const abi = ['function init(uint256 _maxBalance)']
  //   const iface = new ethers.utils.Interface(abi)
  //   const data = iface.encodeFunctionData('init', [1000])

  //   console.log('data', data, '\n')

  //   const pFac = await ethers.getContractFactory('PuzzleProxy', deployer)
  //   proxy = (await pFac.deploy(
  //     admin.address,
  //     implementation.address,
  //     data
  //   )) as PuzzleProxy
  //   proxyW = imFac.attach(proxy.address) as PuzzleWallet

  //   const exploitFactory = await ethers.getContractFactory(
  //     'ExploitPuzzleWallet',
  //     attacker
  //   )
  //   exploit = (await exploitFactory.deploy(
  //     proxy.address
  //   )) as ExploitPuzzleWallet

  //   await ethers.provider.send('hardhat_setBalance', [
  //     proxy.address,
  //     ethers.utils.parseEther('2').toHexString()
  //   ])

  //   await ethers.provider.send('hardhat_setBalance', [
  //     exploit.address,
  //     ethers.utils.parseEther('2').toHexString()
  //   ])

  //   console.log('# # # Pre attack')
  //   console.log(deployer.address, 'deployer')
  //   console.log(admin.address, 'admin')
  //   console.log(attacker.address, 'attacker', '\n')

  //   console.log(await proxy.admin(), 'admin')
  //   console.log(await proxy.pendingAdmin(), 'pendingadmin')
  //   console.log(await proxyW.owner(), 'owner')
  //   console.log((await proxyW.maxBalance()).toHexString(), 'maxBalance', '\n')

  //   console.log(
  //     await ethers.provider.getBalance(proxy.address),
  //     'contract balance',
  //     '\n'
  //   )

  //   console.log(await proxyW.maxBalance(), 'max balance')
  //   console.log(
  //     ethers.BigNumber.from(await proxy.admin()),
  //     'max balance w/ admin address',
  //     '\n'
  //   )
  // })

  // it('executes exploit', async () => {
  //   await exploit.execute()

  //   console.log('# # # Post attack')
  //   console.log(exploit.address, 'exploit', '\n')

  //   console.log(await proxy.admin(), 'admin')
  //   console.log(await proxy.pendingAdmin(), 'pendingadmin')
  //   console.log(await proxyW.owner(), 'owner')
  //   console.log((await proxyW.maxBalance()).toHexString(), 'maxBalance', '\n')
  // })
})
