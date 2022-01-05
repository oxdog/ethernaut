import { ethers } from 'hardhat'
import chai from '../scripts/chaisetup'
import { Denial } from '../types/typechain/Denial'
import { ExploitDenial } from '../types/typechain/ExploitDenial'

const { expect } = chai

describe('Denial', () => {
  let target: Denial
  let exploit: ExploitDenial

  let deployer: any, owner: any, attacker: any

  const TARGET_INITIAL_BALANCE = ethers.utils.parseEther('10')

  // beforeEach(async () => {
  //   ;[deployer, owner, attacker] = await ethers.getSigners()

  //   const targetFac = await ethers.getContractFactory('Denial', deployer)
  //   target = (await targetFac.deploy()) as Denial

  //   await ethers.provider.send('hardhat_setBalance', [
  //     target.address,
  //     TARGET_INITIAL_BALANCE.toHexString()
  //   ])
  //   expect(await ethers.provider.getBalance(target.address)).to.be.equal(
  //     TARGET_INITIAL_BALANCE
  //   )
  // })

  // it('executes exploit', async () => {
  //   const logAll = async () => {
  //     for (let i = 0; i < 5; i++) {
  //       console.log(
  //         i,
  //         ' ',
  //         await ethers.provider.getStorageAt(target.address, i)
  //       )
  //     }
  //     console.log('\n')
  //   }

  //   const exploitFac = await ethers.getContractFactory(
  //     'ExploitDenial',
  //     deployer
  //   )
  //   exploit = (await exploitFac.deploy()) as ExploitDenial

  //   console.log(
  //     'Target Balance: ',
  //     await ethers.provider.getBalance(target.address)
  //   )
  //   console.log(
  //     'Attacker Balance: ',
  //     await ethers.provider.getBalance(exploit.address)
  //   )

  //   await target.setWithdrawPartner(exploit.address)
  //   await target.connect(attacker).withdraw()

  //   console.log(
  //     'Target Balance: ',
  //     await ethers.provider.getBalance(target.address)
  //   )
  //   console.log(
  //     'Attacker Balance: ',
  //     await ethers.provider.getBalance(exploit.address)
  //   )
  // })
})
