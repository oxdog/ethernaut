import { ethers } from 'hardhat'
import chai from '../scripts/chaisetup'
import { ReentranceSecure } from '../types/typechain/ReentranceSecure'
import { ExploitReEntrancy } from '../types/typechain/ExploitReEntrancy'

const { expect } = chai

describe('Reentrancy', () => {
  let target: ReentranceSecure

  const TARGET_INITIAL_BALANCE = ethers.utils.parseEther('10')
  const ATTACKER_INITIAL_BALANCE = ethers.utils.parseEther('2')

  let deployer: any, attacker: any

  // beforeEach(async () => {
  //   ;[deployer, attacker] = await ethers.getSigners()

  //   const targetFactory = await ethers.getContractFactory(
  //     'ReentranceSecure',
  //     deployer
  //   )

  //   target = (await targetFactory.deploy()) as ReentranceSecure

  //   await ethers.provider.send('hardhat_setBalance', [
  //     target.address,
  //     TARGET_INITIAL_BALANCE.toHexString()
  //   ])
  //   await ethers.provider.send('hardhat_setBalance', [
  //     attacker.address,
  //     ATTACKER_INITIAL_BALANCE.toHexString()
  //   ])

  //   expect(await ethers.provider.getBalance(target.address)).to.be.equal(
  //     TARGET_INITIAL_BALANCE
  //   )
  //   expect(await ethers.provider.getBalance(attacker.address)).to.be.equal(
  //     ATTACKER_INITIAL_BALANCE
  //   )
  // })

  // it('executes exploit', async () => {
  //   const exploitFactory = await ethers.getContractFactory(
  //     'ExploitReEntrancy',
  //     attacker
  //   )

  //   const exploit = (await exploitFactory.deploy(target.address, {
  //     value: ethers.utils.parseEther('1')
  //   })) as ExploitReEntrancy

  //   expect(await ethers.provider.getBalance(attacker.address)).to.be.lt(
  //     ethers.utils.parseEther('1')
  //   )

  //   await exploit.execute()
  // })

  // after('stole all funds from target', async () => {
  //   expect(await ethers.provider.getBalance(attacker.address)).to.be.gt(
  //     TARGET_INITIAL_BALANCE
  //   )
  // })
})
