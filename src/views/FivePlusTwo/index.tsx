import { AppHeader } from 'components/App'
import Page from 'views/Page'
import { Button, Card, CardBody, CardFooter, useModal } from '@pancakeswap/uikit'
import styled from 'styled-components'
import LastWinNumber from './components/lastWinNumber'
import NumberCom from './components/NumberCom'
import { useState } from 'react'
import { useFivePlusTwo } from 'hooks/useContract'
import { useSWRContract } from 'hooks/useSWRContract'
import BuyConfirmModal from './components/BuyConfirmModal'

const LotteryWrapper = styled(Card)`
  border-radius: 24px;
  max-width: 764px;
  width: 100%;
  z-index: 1;

  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 400px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 764px;
  }
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
  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: column;
    gap: 16px;
  }
`

const NumbersContainer = styled.div`
  max-width: 60%;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 100%;
    width: 100%;
  }
`

const NumberSelectItem = styled.div`
  margin-right: 24px;
  margin-bottom: 8px;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.xs} {
    margin-right: 12px;
    margin-bottom: 8px;
  }
`

const NumbersIntro = styled.div`
  font-size: 20px;
  white-space: nowrap;
  margin-right: 48px;
  line-height: 1.2;
`

function useNowRound() {
  const fivePlusTwoContract = useFivePlusTwo()
  const { data } = useSWRContract({ contract: fivePlusTwoContract, methodName: 'nowPeriod' })
  return data ? data.toNumber() : undefined
}

export default function FivePlusTwo() {
  const [frontSelected, setFrontSelected] = useState<Array<any>>([])
  const [backSelected, setBackSelected] = useState<Array<any>>([])
  const fivePlusTwoContract = useFivePlusTwo()
  const [onPresentBuyTicketsModal] = useModal(
    <BuyConfirmModal contract={fivePlusTwoContract} frontNumbers={frontSelected} backNumbers={backSelected} />,
  )
  const handleSelectFront = (x: number) => {
    if (frontSelected.includes(x)) {
      setFrontSelected(frontSelected.filter((i) => i !== x))
    } else {
      setFrontSelected([...frontSelected, x])
    }
  }
  const handleSelectBack = (x: number) => {
    if (backSelected.includes(x)) {
      setBackSelected(backSelected.filter((i) => i !== x))
    } else {
      setBackSelected([...backSelected, x])
    }
  }
  const round = useNowRound()
  return (
    <Page>
      <LotteryWrapper>
        <AppHeader title={`Lottery 5+2 Round ${round}`} subtitle="Get your tickets now!" />
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
                  <NumberSelectItem onClick={() => handleSelectBack(x)}>
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
            <Button
              disabled={frontSelected.length < 5 || backSelected.length < 2}
              onClick={onPresentBuyTicketsModal}
              scale="md"
            >
              BUY NOW
            </Button>
          </div>
        </FlexFooter>
      </LotteryWrapper>
    </Page>
  )
}
