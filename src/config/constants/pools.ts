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
      97: '',
      56: '0x65FE214382fD9e0d6cF054EeD65C150C88ed6834',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2',
    sortOrder: 1,
    isFinished: false,
  },
/*  {
    sousId: 243,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.nabox,
    contractAddress: {
      97: '',
      56: '0x13A40BFab005D9284f8938FBb70Bf39982580e4D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1271',
  }, */
]

export default pools
