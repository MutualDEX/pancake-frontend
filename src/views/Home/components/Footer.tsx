import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from 'uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;
  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`



const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper>
      <Wrapper>
        <Heading mb="24px" scale="xl" color="white">
          {t('BigSwap Decentralized Wallet.')}
        </Heading>
        <Text textAlign="center" color="white">
          {t('Connect in seconds.')}
        </Text>
        <Text mb="24px" bold color="white">
          {t('No registration needed.')}
        </Text>

        <Link color="white" external href="https://bigswap.xyz/">
          {t('Try It')}
        </Link>
      </Wrapper>
    </>
  )
}

export default Footer
