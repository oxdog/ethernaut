import { ethers } from 'hardhat'
import { DexOne } from '../types/typechain/DexOne'
import { SwappableToken } from '../types/typechain/SwappableToken'
import { ERC20 } from '../types/typechain/ERC20'
import { ExploitDexOne } from '../types/typechain/ExploitDexOne'

describe('Shop', () => {
  let target: DexOne
  let exploit: ExploitDexOne
  let token1: SwappableToken
  let token2: SwappableToken

  let deployer: any, attacker: any

  // beforeEach(async () => {
  //   ;[deployer, attacker] = await ethers.getSigners()

  //   const tokeFac = await ethers.getContractFactory('SwappableToken', deployer)
  //   token1 = (await tokeFac.deploy('token1', 'T1', 10000)) as SwappableToken
  //   token2 = (await tokeFac.deploy('token2', 'T2', 10000)) as SwappableToken

  //   const targetFac = await ethers.getContractFactory('DexOne', deployer)
  //   target = (await targetFac.deploy(token1.address, token2.address)) as DexOne

  //   const exploitFac = await ethers.getContractFactory('ExploitDexOne')
  //   exploit = (await exploitFac.deploy(target.address)) as ExploitDexOne

  //   await token1.transfer(target.address, 100)
  //   await token2.transfer(target.address, 100)
  //   await token1.transfer(exploit.address, 10)
  //   await token2.transfer(exploit.address, 10)

  //   console.log(await token1.balanceOf(target.address))
  //   console.log(await token2.balanceOf(target.address))
  //   console.log(await token1.balanceOf(exploit.address))
  //   console.log(await token2.balanceOf(exploit.address))
  // })

  // it('executes exploit', async () => {
  //   const logBalance = async (addr: string, label: string) => {
  //     console.log(`\n#${label}#`)
  //     console.log(
  //       'T1',
  //       await token1.balanceOf(addr),
  //       '\nT2',
  //       await token2.balanceOf(addr)
  //     )
  //   }

  //   await logBalance(target.address, 'Target')
  //   await logBalance(exploit.address, 'Exploit')

  //   await exploit.deployed()
  //   console.log(exploit.address)
  //   console.log('Exploit deployed, executing ...')
  //   const res = await exploit.execute({ gasLimit: 9000000 })
  //   await res.wait()
  //   console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')

  //   await logBalance(target.address, 'Target')
  //   await logBalance(exploit.address, 'Exploit')
  // })
})
