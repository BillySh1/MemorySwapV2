import Page from 'views/Page'
import { Button, Card, CardBody, CardFooter, useMatchBreakpoints, useModal } from '@pancakeswap/uikit'
import styled from 'styled-components'
import LastWinNumber from './components/lastWinNumber'
import NumberCom from './components/NumberCom'
import { useState } from 'react'
import { useFivePlusTwo } from 'hooks/useContract'
import { useSWRContract } from 'hooks/useSWRContract'
import BuyConfirmModal from './components/BuyConfirmModal'
import HeaderCom from './components/HeaderCom'

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
  background-color: rgba(251, 251, 251, 1);
`

const FlexFooter = styled(CardFooter)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 123, 228, 1);
  color: white;
  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: column;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`
const FooterText = styled.span`
  font-weight: 800;
  color: white;
  ${({ theme }) => theme.mediaQueries.xs} {
    margin-bottom: 16px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
`
const Frimary = styled.span`
  color: rgba(10, 240, 255, 1);
  margin: 0 12px;
`

const FlexSelectContainer = styled.div`
  width: 100%;
  padding: 24px 48px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.125);
  color: black;
  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: column;
    gap: 16px;
    padding: 12px 24px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    gap: 0;
    padding: 24px 48px;
  }
`

const NumbersContainer = styled.div`
  max-width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px;
  ${({ theme }) => theme.mediaQueries.xs} {
    justify-content: center;
    max-width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: flex-end;
    max-width: 60%;
  }
`

const NumberSelectItem = styled.div`
  margin-left: 24px;
  margin-bottom: 8px;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.xs} {
    margin-left: 0px;
    margin-right: 6px;
    margin-bottom: 10px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: 24px;
    margin-right: 0px;
    margin-bottom: 8px;
  }
`

const NumbersIntro = styled.div`
  font-size: 18px;
  white-space: nowrap;
  margin-right: 48px;
  line-height: 1.2;
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 14px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
`

const FooterButtonWrapper = styled.div`
  min-width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const Divider = styled.div`
  height: 50px;
  width: 1px;
  background: #fff;
`

function useNowRound() {
  const fivePlusTwoContract = useFivePlusTwo()
  const { data } = useSWRContract({ contract: fivePlusTwoContract, methodName: 'nowPeriod' })
  return data ? data.toNumber() : undefined
}

export default function FivePlusTwo() {
  const [frontSelected, setFrontSelected] = useState<Array<any>>([])
  const [backSelected, setBackSelected] = useState<Array<any>>([])
  const { isMobile } = useMatchBreakpoints()
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
        <HeaderCom isMobile={isMobile} round={round} />
        <Body>
          <LastWinNumber isMobile={isMobile} />
          <FlexSelectContainer>
            <NumbersIntro>
              <div>
                Please select at least 5 {!isMobile && <br />}
                <strong style={{ fontSize: isMobile ? 14 : 20 }}>Front area number </strong>
              </div>
            </NumbersIntro>
            <NumbersContainer>
              {Array.from({ length: 30 }, (_, index) => index + 1).map((x) => {
                return (
                  <NumberSelectItem onClick={() => handleSelectFront(x)}>
                    <NumberCom
                      selected={frontSelected.includes(x)}
                      outline
                      value={x}
                      width={isMobile ? 36 : 48}
                      height={isMobile ? 36 : 48}
                      fontSize={isMobile ? 16 : 20}
                    />
                  </NumberSelectItem>
                )
              })}
            </NumbersContainer>
          </FlexSelectContainer>
          <FlexSelectContainer>
            <NumbersIntro>
              <div>
                Please select at least 2 {!isMobile && <br />}
                <strong style={{ fontSize: isMobile ? 14 : 20 }}>Back area number </strong>
              </div>
            </NumbersIntro>
            <NumbersContainer>
              {Array.from({ length: 15 }, (_, index) => index + 1).map((x) => {
                return (
                  <NumberSelectItem onClick={() => handleSelectBack(x)}>
                    <NumberCom
                      selected={backSelected.includes(x)}
                      extra
                      outline
                      value={x}
                      width={isMobile ? 36 : 48}
                      height={isMobile ? 36 : 48}
                      fontSize={isMobile ? 16 : 20}
                    />
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
          {!isMobile && <Divider />}

          <FooterButtonWrapper>
            <Button style={{ color: 'white' }} variant="text" onClick={onPresentBuyTicketsModal} scale="md">
              RANDOM
            </Button>
            {frontSelected.length > 4 && backSelected.length > 1 && (
              <Button style={{ color: 'white' }} variant="text" onClick={onPresentBuyTicketsModal} scale="md">
                BUY NOW
              </Button>
            )}
          </FooterButtonWrapper>
        </FlexFooter>
      </LotteryWrapper>
    </Page>
  )
}
