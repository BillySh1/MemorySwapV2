import { useState } from 'react'
import styled from 'styled-components'
import NumberCom from 'views/FivePlusTwo/components/NumberCom'
import BadgeIcon from '../assets/badge'
import LotteryCardIcon from '../assets/lottery'

const LotteryCardWrapper = styled.div`
  position: relative;
  width: 100%;
  background: rgba(0, 123, 228, 1);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const BadgeIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const LotteryInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LotteryInfo = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: white;
  text-align: center;
`

const LotteryInfoRow = styled.div`
  text-align: center;
  margin: 8px 0;
  & > p {
    margin: 8px 0;
  }
`

const TitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: white;
  margin-bottom: 12px;
  ${({ theme }) => theme.mediaQueries.xs} {
    gap: 8px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    gap: 24px;
  }
`

const LotteryMainWrapper = styled.div`
  width: 50%;
`

const RoundInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  color: white;
  justify-content: space-between;
  margin-bottom: 28px;
`

const LotteryStatusTimeInfo = styled.div`
  display: flex;
  gap: 8px;
`

const ActionWrapper = styled.div`
  width: 100%;
  background: #75b5eb;
  position: relative;
  border-radius: 75px;
`

const NumbersWrapper = styled.div`
  width: 75%;
  background: #fafcfe;
  border-radius: 75px;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const ActionText = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  color: white;
  font-weight: 800;
  cursor: pointer;
`
const BadgeText = styled.div`
  color: rgba(0, 123, 228, 1);
  font-size: 16px;
  font-weight: 800;
  position: absolute;
  top: 40%;
  right: 0;
  transform: translate(-20%, -50%);
`

export default function LotteryCard() {
  const [winNumbers, setWinNumbers] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <LotteryCardWrapper>
      <LotteryInfoWrapper>
        <LotteryCardIcon style={{ marginRight: 32 }} />
        <LotteryInfo>
          <LotteryInfoRow>
            <p>Lottery Time Remain</p>
            <p>12：02：03</p>
          </LotteryInfoRow>
          open
          <LotteryInfoRow>
            <p>Lottery Amount</p>
            <p>84</p>
          </LotteryInfoRow>
        </LotteryInfo>
      </LotteryInfoWrapper>

      <LotteryMainWrapper>
        <RoundInfo>
          <div>
            <TitleLeft>
              <h2>Round</h2>
              <div
                style={{
                  padding: '4px 24px',
                  border: '1px solid #FFFFFF',
                  borderRadius: '30px',
                }}
              >
                {1}
              </div>
            </TitleLeft>
            <div>Drawn May 5, 2022, 8:00 PM</div>
          </div>
          <LotteryStatusTimeInfo>
            <div>开奖时间</div>
            <div>16h 36m 19s</div>
          </LotteryStatusTimeInfo>
        </RoundInfo>
        <ActionWrapper>
          <NumbersWrapper>
            {winNumbers.map((x) => {
              return <NumberCom value={x} width={42} height={42} outline extra={x > 5} />
            })}
          </NumbersWrapper>
          <ActionText>继续下注</ActionText>
        </ActionWrapper>
      </LotteryMainWrapper>
      <BadgeIconWrapper>
        <BadgeIcon />
        <BadgeText>竞猜进行中</BadgeText>
      </BadgeIconWrapper>
    </LotteryCardWrapper>
  )
}
