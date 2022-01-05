import { ethers } from 'hardhat'
import { LibraryContract } from '../types/typechain/LibraryContract'
import { Preservation } from '../types/typechain/Preservation'
import { ExploitPreservation } from '../types/typechain/ExploitPreservation'

describe('Preservation', () => {
  let target: Preservation
  let lib1: LibraryContract
  let lib2: LibraryContract

  let deployer: any, owner: any, attacker: any

  // beforeEach(async () => {
  //   ;[deployer, owner, attacker] = await ethers.getSigners()

  //   const libFac = await ethers.getContractFactory('LibraryContract', deployer)
  //   const presFac = await ethers.getContractFactory('Preservation', deployer)

  //   lib1 = (await libFac.deploy()) as LibraryContract
  //   lib2 = (await libFac.deploy()) as LibraryContract

  //   target = (await presFac
  //     .connect(owner)
  //     .deploy(lib1.address, lib2.address)) as Preservation
  // })

  // it('executes exploit', async () => {
  //   const labels = [
  //     'timeZone1 address',
  //     'timeZone2 address',
  //     'owner',
  //     'storedTime'
  //   ]

  //   console.log(attacker.address)

  //   for (let i = 0; i < 3; i++) {
  //     console.log(
  //       i,
  //       ' ',
  //       await ethers.provider.getStorageAt(target.address, i),
  //       labels[i]
  //     )
  //   }
  //   console.log('\n')

  //   const exploitFactory = await ethers.getContractFactory(
  //     'ExploitPreservation',
  //     attacker
  //   )

  //   const exploit = (await exploitFactory.deploy(
  //     target.address
  //   )) as ExploitPreservation

  //   // no need to manually pad address to fit uint256
  //   // conversion to uint auto adds 0 leading 0 padding
  //   await exploit.execute()

  //   for (let i = 0; i < 3; i++) {
  //     console.log(
  //       i,
  //       ' ',
  //       await ethers.provider.getStorageAt(target.address, i),
  //       labels[i]
  //     )
  //   }
  // })
})
