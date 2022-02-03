import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()


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
