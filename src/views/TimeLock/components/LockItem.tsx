import { TokenImage } from 'components/TokenImage'
import styled from 'styled-components'
import { WETH } from '@pancakeswap/sdk'
import { TimeLockIcon } from '@pancakeswap/uikit'
import TimeCards from './TImeCards'
import { useState } from 'react'
import useTheme from 'hooks/useTheme'

const Wrapper = styled.div`
  width: 360px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.card.background};
  border-radius: 35px;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 123, 228, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const InfoStatus = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  gap: 16px;
  margin: 8px 0;
`
const InfoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
`

export function LockItem() {
  const [remainTime, setRemainTime] = useState(['00', '00', '00'])
  const token = WETH[321]
  const color = useTheme()
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
      <InfoStatus>
        <TimeLockIcon width={24} height={24} />
        <span>进行中</span>
      </InfoStatus>
      <div style={{ width: '100%', marginBottom: '48px' }}>
        <TimeCards remainTime={remainTime} />
      </div>
      <InfoItem>
        <div>锁仓</div>
        <div> 1644222 MDAO</div>
      </InfoItem>
      <InfoItem style={{ color: color.theme.colors.primary }}>
        <div>锁仓时间</div>
        <div> 16天06小时32分 </div>
      </InfoItem>
    </Wrapper>
  )
}
