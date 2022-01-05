import { ethers } from 'hardhat'
import { ExploitElevator } from '../types/typechain/ExploitElevator'

async function main() {
  const factory = await ethers.getContractFactory('ExploitElevator')
  const exploit = (await factory.deploy()) as ExploitElevator

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
