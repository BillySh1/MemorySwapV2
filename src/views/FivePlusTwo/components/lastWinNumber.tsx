import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import NumberCom from './NumberCom'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.125);
  padding: 16px 48px;
  box-sizing: border-box;
  width: 100%;
  color: black;
  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: column;
    align-items: flex-start;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const LeftTitle = styled.div`
  font-weight: 800;
  font-size: 18px;
`

const NumbersContainer = styled(Flex)`
  gap: 4px;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 100%;
    flex-wrap: wrap;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`

export default function LastWinNumber() {
  const lastWinNumbers = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6, extra: true },
    { value: 7, extra: true },
  ]
  return (
    <Container>
      <LeftTitle>Last Wining Number</LeftTitle>
      <NumbersContainer>
        {lastWinNumbers.map((x) => {
          return <NumberCom extra={x.extra} value={x.value} width={36} height={36} />
        })}
      </NumbersContainer>
    </Container>
  )
}
