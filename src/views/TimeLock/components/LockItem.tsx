import { TokenImage } from 'components/TokenImage'
import styled from 'styled-components'
import { WETH } from '@pancakeswap/sdk'
import { TimeLockIcon } from '@pancakeswap/uikit'
import TimeCards from './TImeCards'
import { useEffect, useState } from 'react'
import useTheme from 'hooks/useTheme'
import { formatEther, formatUnits, parseUnits } from '@ethersproject/units'

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

interface LockItemProps {
  info: any
}

export function LockItem(props: LockItemProps) {
  const { info } = props
  const [remainTime, setRemainTime] = useState(['00', '00', '00'])
  const [lockInfo, setLockInfo] = useState<any>({})
  const [canClaim,setCanClaim]  = useState(false)
  const token = WETH[321]
  const color = useTheme()
  useEffect(() => {
    setLockInfo({
      amount: formatEther(info.amount),
      lockId: info.lockId.toString(),
      releaseTime: info.releaseTime.toString(),
      lockTime: info.lockTime.toString(),
      claimed: info.claimed,
      address: info.tokenAddress,
    })
    getRemainTime(lockInfo.releaseTime)
  }, [info])

  const getRemainTime = (v) => {
    const diff = Math.ceil((v * 1000 - new Date().getTime()) / 1000)
    if (diff <= 0) {
      setRemainTime(['00', '00', '00'])
      setCanClaim(true)
      return
    }
    const days = Math.floor(diff / 3600 / 24)
    const hours = Math.floor((diff - days * 24 * 3600) / 3600)
    const mins = Math.floor((diff - days * 24 * 3600 - hours * 3600) / 60)
    setRemainTime([
      days.toString().padStart(2, '0'),
      hours.toString().padStart(2, '0'),
      mins.toString().padStart(2, '0'),
    ])
  }
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
        <div> {lockInfo.amount} MDAO</div>
      </InfoItem>
      <InfoItem style={{ color: color.theme.colors.primary }}>
        <div>锁仓时间</div>
        <div> {remainTime[0] + '天' + remainTime[1] + '小时' + remainTime[2] + '分'} </div>
      </InfoItem>
    </Wrapper>
  )
}
