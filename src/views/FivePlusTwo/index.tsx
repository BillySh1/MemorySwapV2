import { AppHeader } from 'components/App'
import Page from 'views/Page'
import { Button, Card, CardBody, CardFooter } from '@pancakeswap/uikit'
import styled from 'styled-components'
import LastWinNumber from './components/lastWinNumber'
import NumberCom from './components/NumberCom'
import { useState } from 'react'

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

const FlexSelectContainer = styled.div`
  width: 100%;
  padding: 36px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.125);
`

const NumbersContainer = styled.div`
  max-width: 60%;
  display: flex;
  flex-wrap: wrap;
`

const NumberSelectItem = styled.div`
  margin-right: 24px;
  margin-bottom: 8px;
  cursor: pointer;
`

const NumbersIntro = styled.div`
  font-size: 20px;
  white-space: nowrap;
  margin-right: 48px;
  line-height: 1.2;
`

export default function FivePlusTwo() {
  const [frontSelected, setFrontSelected] = useState<Number[]>([])
  const [backSelected, setBackSelected] = useState<Number[]>([])
  const handleSelectFront = (x: number) => {
    const tempData = JSON.parse(JSON.stringify(frontSelected))
    if (tempData.includes(x)) {
      setFrontSelected(
        tempData.slice(
          tempData.findIndex((i) => i === x),
          1,
        ),
      )
    } else {
      setFrontSelected(tempData.push(x))
    }
  }
  return (
    <Page>
      <LotteryWrapper>
        <AppHeader title="Lottery 5+2" subtitle="Get your tickets now!" />
        <Body>
          <LastWinNumber />
          <FlexSelectContainer>
            <NumbersIntro>
              <p>
                Please select at least 5 <br />
                <strong style={{ fontSize: 24 }}>Front area number </strong>
              </p>
              <p>5 were selected</p>
            </NumbersIntro>
            <NumbersContainer>
              {Array.from({ length: 30 }, (_, index) => index + 1).map((x) => {
                return (
                  <NumberSelectItem onClick={() => handleSelectFront(x)}>
                    <NumberCom selected={frontSelected.includes(x)} outline value={x} width={56} height={56} />
                  </NumberSelectItem>
                )
              })}
            </NumbersContainer>
          </FlexSelectContainer>
          <FlexSelectContainer>
            <NumbersIntro>
              <p>
                Please select at least 2 <br />
                <strong style={{ fontSize: 24 }}>Back area number </strong>
              </p>
              <p>2 were selected</p>
            </NumbersIntro>
            <NumbersContainer>
              {Array.from({ length: 15 }, (_, index) => index + 1).map((x) => {
                return (
                  <NumberSelectItem onClick={() => handleSelectFront(x)}>
                    <NumberCom selected={backSelected.includes(x)} extra outline value={x} width={56} height={56} />
                  </NumberSelectItem>
                )
              })}
            </NumbersContainer>
          </FlexSelectContainer>
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
