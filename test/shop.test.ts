import { ethers } from 'hardhat'
import { Shop } from '../types/typechain/Shop'
import { ExploitShop } from '../types/typechain/ExploitShop'

describe('Shop', () => {
  let target: Shop

  let deployer: any, attacker: any

  // beforeEach(async () => {
  //   ;[deployer, attacker] = await ethers.getSigners()

  //   const presFac = await ethers.getContractFactory('Shop', deployer)
  //   target = (await presFac.deploy()) as Shop
  // })

  // it('executes exploit', async () => {
  //   const exploitFactory = await ethers.getContractFactory(
  //     'ExploitShop',
  //     attacker
  //   )

  //   const exploit = (await exploitFactory.deploy(target.address)) as ExploitShop
  //   await exploit.execute()
  // })
})
