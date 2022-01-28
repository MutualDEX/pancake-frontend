import { Token, ChainId } from '@bigswap/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[1].lpAddresses[ChainId.MAINNET], 18, farms[1].lpSymbol)

const ifos: Ifo[] = [
  {
    id: 'froyo',
    address: '',
    isActive: true,
    name: 'Froyo Games (FROYO)',
    poolBasic: {
      saleAmount: '20,000,000 FROYO',
      raiseAmount: '$1,200,000',
      cakeToBurn: '$0',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '46,666,668 FROYO',
      raiseAmount: '$2,800,000',
      cakeToBurn: '$0',
      distributionRatio: 0.7,
    },
    currency: tokens.cake,
    token: tokens.froyo,
    releaseBlockNumber: 14297000,
    campaignId: '511170000',
    articleUrl: '',
    tokenOfferingPrice: 0.06,
    version: 3,
    telegramUrl: '',
    twitterUrl: '',
    description: ``,
  },
]

export default ifos
