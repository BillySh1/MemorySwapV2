import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
const Row = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const TimeItem = styled.div`
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  padding: 16px 12px;
  box-sizing: border-box;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 16px;
`
const TimeText = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 400;
  font-size: 16;
`
export default function TimeCards(props: any) {
  const { remainTime } = props
  return (
    <Row>
      {remainTime.map((x, idx) => (
        <Flex flexDirection={'column'} alignItems="center">
          <TimeItem>{x}</TimeItem>
          <TimeText>{['DAYS', 'HOURS', 'MINS'][idx]}</TimeText>
        </Flex>
      ))}
    </Row>
  )
}
