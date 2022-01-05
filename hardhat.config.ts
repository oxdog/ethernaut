import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'dotenv/config'
import { HardhatUserConfig } from 'hardhat/types'

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [
      { version: '0.8.10', settings: {} },
      { version: '0.6.12', settings: {} },
      { version: '0.5.2', settings: {} },
      { version: '0.4.26', settings: {} }
    ]
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: process.env.ALCHEMY_DEV_URL,
      accounts: [process.env.DEV_WALLET as string]
    },
    ropsten: {
      url: process.env.ALCHEMY_DEV_URL_ROPSTEN,
      accounts: [process.env.DEV_WALLET as string]
    }
  },
  typechain: {
    outDir: 'types/typechain'
  }
}

export default config
