import { ethers } from 'hardhat'
import { TestStorage } from '../types/typechain/TestStorage'
import web3 from 'web3'
import web3Utils from 'web3-utils'

// https://medium.com/aigang-network/how-to-read-ethereum-contract-storage-44252c8af925

async function main() {
  const factory = await ethers.getContractFactory('TestStorage')
  const testStorage = (await factory.deploy()) as TestStorage

  await testStorage.deployed()
  console.log(testStorage.address)
  await testStorage.testStorage()
  console.log(await testStorage.getKey())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
