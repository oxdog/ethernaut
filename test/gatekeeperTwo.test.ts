import { ethers } from 'hardhat'
import { ExploitGateKeeperTwo } from '../types/typechain/ExploitGateKeeperTwo'
import { GatekeeperTwo } from '../types/typechain/GatekeeperTwo'

describe('GatekeeperTwo', () => {
  let target: GatekeeperTwo
  let deployer: any, attacker: any

  // beforeEach(async () => {
  //   ;[deployer, attacker] = await ethers.getSigners()

  //   const targetFactory = await ethers.getContractFactory(
  //     'GatekeeperTwo',
  //     deployer
  //   )

  //   target = (await targetFactory.deploy()) as GatekeeperTwo
  // })

  // it('executes exploit', async () => {
  //   const exploitFactory = await ethers.getContractFactory(
  //     'ExploitGateKeeperTwo',
  //     attacker
  //   )

  //   // exploit directly executed on creation
  //   await exploitFactory.deploy(target.address)
  // })
})
