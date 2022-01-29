import { VaultKey } from 'state/types'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const vaultPoolConfig = {
  [VaultKey.CakeVault]: {
    name: 'Auto BGSP',
    description: 'Automatic restaking',
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO BGSP',
    description: 'Stake BGSP to participate in IFOs',
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.bgsp,
    earningToken: serializedTokens.bgsp,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x65FE214382fD9e0d6cF054EeD65C150C88ed6834',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2',
    sortOrder: 1,
    isFinished: false,
  },
   {
    sousId: 260,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.raca,
    contractAddress: {
      97: '',
      56: '0xAaF43935a526DF88AB57FC69b1d80a8d35e1De82',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '204.2',
    deployedBlockNumber: 14729372,
  },
  {
    sousId: 259,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ertha,
    contractAddress: {
      97: '',
      56: '0x921Ea7e12A66025F2BD287eDbff6dc5cEABd6477',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.585',
    deployedBlockNumber: 14690369,
  },
  {
    sousId: 258,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.fuse,
    contractAddress: {
      97: '',
      56: '0xeAd7b8fc5F2E5672FAe9dCf14E902287F35CB169',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.19',
    deployedBlockNumber: 14552132,
  },
]

export default pools
