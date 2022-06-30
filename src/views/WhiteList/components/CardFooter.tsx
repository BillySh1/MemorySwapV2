import { FC, ReactNode, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Flex, CardFooter, ExpandableLabel, HelpIcon, useTooltip, TooltipText, Text } from '@pancakeswap/uikit'
import { DeserializedPool } from 'state/types'
import { CompoundingPoolTag, ManualPoolTag } from 'components/Tags'
// import PoolStatsInfo from '../../PoolStatsInfo'

interface FooterProps {
  info: any
}
const StatWrapper: FC<{ label: ReactNode }> = ({ children, label }) => {
  return (
    <Flex mb="2px" justifyContent="space-between" alignItems="center" width="100%">
      {label}
      <Flex alignItems="center">{children}</Flex>
    </Flex>
  )
}
const ExpandableButtonWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  button {
    padding: 0;
  }
`
const ExpandedWrapper = styled(Flex)`
  svg {
    height: 14px;
    width: 14px;
  }
`

const Footer: React.FC<FooterProps> = ({ info, children }) => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  const manualTooltipText = t('Contact us to add whitelist')

  const { targetRef, tooltip, tooltipVisible } = useTooltip(manualTooltipText, {
    placement: 'bottom',
  })

  return (
    <CardFooter>
      <ExpandableButtonWrapper>
        <Flex alignItems="center">
          {/* {vaultKey ? <CompoundingPoolTag /> : <ManualPoolTag />} */}
          {tooltipVisible && tooltip}
          <Flex ref={targetRef}>
            <HelpIcon ml="4px" width="20px" height="20px" color="textSubtle" />
          </Flex>
        </Flex>
        <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? t('Hide') : t('Details')}
        </ExpandableLabel>
      </ExpandableButtonWrapper>
      {isExpanded && (
        <ExpandedWrapper flexDirection="column">
          <StatWrapper
            label={
              <TooltipText ref={targetRef} small>
                {t('Total staked')}:
              </TooltipText>
            }
          >
            <Text>123948 BTC</Text>
          </StatWrapper>
          <StatWrapper
            label={
              <TooltipText ref={targetRef} small>
                {t('Liqudity')}:
              </TooltipText>
            }
          >
            <Text>200,000,000</Text>
          </StatWrapper>
          <StatWrapper
            label={
              <TooltipText ref={targetRef} small>
                {t('Current Price')}:
              </TooltipText>
            }
          >
            <Text>11,149 $</Text>
          </StatWrapper>
        </ExpandedWrapper>
      )}
    </CardFooter>
  )
}

export default Footer
