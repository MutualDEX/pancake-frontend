import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from 'uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'


// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('The Biggest Community Driven Platform.')


  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="blue" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="blue" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="blue" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center"color="blue" scale="xl">
        {t('Welcome to a new growing Community of DeFi Apps. Developers, traders, and liquidity providers')}
      </Heading>
      <Heading textAlign="center" color="blue" scale="xl" mb="32px">
        {t('participating together to build a financial marketplace that is 100% Decentralized and Community-driven.')}
      </Heading>
      <Text textAlign="center" color="blue">
        {t('Make Sure You Join The #BigSwapArmy ')}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="blue" mb="20px">
          {t('')}
        </Text>
      </Flex>

      <Text textAlign="center" color="blue" bold mb="32px">
        {t('')}
      </Text>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Community')}
            bodyText={t('Strong & Growing')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Governance')}
            bodyText={t('Let Your Voice Be Heard')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('Utility')}
            bodyText={t('Crypto With Utility')}
            highlightColor={theme.colors.success}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
