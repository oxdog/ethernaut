import { ethers } from 'hardhat'
import { ExploitGateKeeperTwo } from '../types/typechain/ExploitGateKeeperTwo'

async function main() {
  const targetAddr = '0x8651E6719D037C051abd0Df1Bb39e5f372475a9a'

  const factory = await ethers.getContractFactory('ExploitGateKeeperTwo')
  const exploit = (await factory.deploy(targetAddr)) as ExploitGateKeeperTwo

  console.log('Deploying contract...')
  await exploit.deployed()
  console.log(exploit.address)
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
