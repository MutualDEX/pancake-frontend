import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BigSwap',
  description:
    'One of the most popular AMMs on BSC by user count! Earn BGSP through yield farming or win it in the Lottery, then stake it in Big Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BigSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://bigswap.exchange/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BigSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('BigSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('BigSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('BigSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('BigSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('BigSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PancakeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PancakeSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('PancakeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BigSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('BigSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BigSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('PancakeSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BigSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PancakeSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('BigSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('BigSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('BigSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('BigSwap Info & Analytics')}`,
        description: 'View statistics for BigSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('BigSwap Info & Analytics')}`,
        description: 'View statistics for BigSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('BigSwap Info & Analytics')}`,
        description: 'View statistics for BigSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('PancakeSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('PancakeSwap')}`,
      }
    default:
      return null
  }
}
