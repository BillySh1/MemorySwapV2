import { TokenImage } from 'components/TokenImage'
import styled from 'styled-components'
import { WETH } from '@pancakeswap/sdk'

const Wrapper = styled.div`
  width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.card.background};
  border-radius: 35px;
  box-sizing: border-box;
`
const InfoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`
const TokenTitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`
const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 2px;
  font-size: 14;
  color: ${({ theme }) => theme.colors.silver};
`

export function LockItem() {
  const token = WETH[321]
  return (
    <Wrapper>
      <InfoHeader>
        <InfoLeft>
          <TokenTitle>{token.name ?? token.symbol}</TokenTitle>
          <div>{new Date().toDateString()}</div>
          <div>{new Date().toDateString()}</div>
        </InfoLeft>
        <TokenImage width={48} height={48} token={token} />
      </InfoHeader>
    </Wrapper>
  )
}
