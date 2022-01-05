import { ethers } from 'hardhat'
import { TestStorage } from '../types/typechain/TestStorage'
import web3 from 'web3'
import web3Utils from 'web3-utils'

// https://medium.com/aigang-network/how-to-read-ethereum-contract-storage-44252c8af925

async function main() {
  const target = '0xBD167C3830ff7e29aa352b7E3F9621930293b80f'

  const factory = await ethers.getContractFactory('TestStorage')
  const testStorage = factory.attach(target) as TestStorage

  // NOTE: got stuck at reading mapping, somehow the hashes of key + index are wrong
  // tried all possible combination I could think of right now

  // const storage: string[] = []

  // for (let i = 0; i < 10; i++) {
  //   const storageAtIndex = await ethers.provider.getStorageAt(
  //     testStorage.address,
  //     i
  //   )

  //   console.log(`[${i}]: ${storageAtIndex}`)
  //   storage.push(storageAtIndex)
  // }

  // console.log('storeduint1', Number(storage[0]))
  // console.log('investmentsLimit', Number('0x' + storage[1].substring(34)))
  // console.log(
  //   'investmentsDeadlineTimeStamp',
  //   Number(storage[1].substring(0, 34))
  // )
  // console.log('string1', ethers.utils.toUtf8String(storage[2]))
  // console.log('string2', ethers.utils.toUtf8String(storage[3]))
  // console.log('string3', ethers.utils.toUtf8String(storage[4]))
  // console.log('string3 length', Number('0x' + storage[4].substring(64)))

  // This is from website, you have to know the key to be able to get the storage area
  // let index = '0000000000000000000000000000000000000000000000000000000000000007'
  // let newKey = web3Utils.sha3(index) as string
  // console.log(web3Utils.sha3('0xbccc714d56bc0da0fd33d96d2a87b680dd6d0df6' + 5))
  // console.log(
  //   await ethers.provider.getStorageAt(
  //     testStorage.address,
  //     '0xe4bb1b110ecdf2a1f3009d7bebdbe9c9d4a9099fc7cdf90da14fd2e431feb328'
  //   )
  // )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
