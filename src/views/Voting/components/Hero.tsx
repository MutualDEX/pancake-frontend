import React from 'react'
import { Box, Button, Flex, Heading, ProposalIcon } from 'uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import Link from 'next/link'
import DesktopImage from './DesktopImage'

const StyledHero = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`

const Hero = () => {
  const { t } = useTranslation()

  return (
    <StyledHero>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Box pr="32px">
            <Heading as="h1" scale="xxl" color="secondary" mb="16px">
              {t('Voting')}
            </Heading>
            <Heading as="h3" scale="lg" mb="16px">
              {t('Have your say in the future of the BigSwap Ecosystem')}
            </Heading>
            <Heading as="h3" scale="lg" mb="16px">
              {t('Coming Soon')}
            </Heading> 
            <Link href="/voting/proposal/create" passHref>
              <Button startIcon={<ProposalIcon color="currentColor" width="24px" />}>{t('Make a Proposal')}</Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </StyledHero>
  )
}

export default Hero
