import { AppHeader } from 'components/App'
import Page from 'views/Page'
import { Button, Card, CardBody, CardFooter } from '@pancakeswap/uikit'
import styled from 'styled-components'
import LastWinNumber from './components/lastWinNumber'

const LotteryWrapper = styled(Card)`
  border-radius: 24px;
  max-width: 764px;
  width: 100%;
  z-index: 1;

  /* ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 400px;
  } */
`

const Body = styled(CardBody)`
  padding: 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt2};
`

const FlexFooter = styled(CardFooter)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
`
const FooterText = styled.span`
  color: ${({ theme }) => theme.colors.text};
`
const Frimary = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

export default function FivePlusTwo() {
  return (
    <Page>
      <LotteryWrapper>
        <AppHeader title="Lottery 5+2" subtitle="Get your tickets now!" />
        <Body>
          <LastWinNumber />
        </Body>
        <FlexFooter>
          <div>
            <FooterText>
              Selected: <Frimary>1</Frimary> Bets <Frimary>158</Frimary> MDAO
            </FooterText>
          </div>
          <div>
            <Button scale="md">BUY</Button>
          </div>
        </FlexFooter>
      </LotteryWrapper>
    </Page>
  )
}
