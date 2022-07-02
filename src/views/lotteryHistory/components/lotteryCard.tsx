import { useState } from 'react'
import styled from 'styled-components'
import NumberCom from 'views/FivePlusTwo/components/NumberCom'
import { useMatchBreakpoints } from '../../../../packages/uikit/src/hooks'
import BadgeIcon from '../assets/badge'
import LotteryCardIcon from '../assets/lottery'

const LotteryCardWrapper = styled.div<{ type: number }>`
  position: relative;
  width: 100%;
  background: ${({ type }) => (type === 0 ? 'rgba(0, 123, 228, 1)' : type === 1 ? 'rgba(26, 115, 190, 1)' : '#E45050')};
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: column;
    padding: 12px 8px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    padding: 24px;
  }
`

const BadgeIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ${({ theme }) => theme.mediaQueries.xs} {
    zoom: 0.5;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    zoom: 1;
  }
`

const LotteryInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const LotteryInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 800;
  color: white;
  text-align: center;
  justify-content: space-between;
  gap: 1rem;
  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: column;
  }
`

const LotteryInfoRow = styled.div`
  text-align: center;
  margin: 8px 0;
  & > p {
    font-size: 20px;
    margin: 8px 0;
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    & > p {
      font-size: 14px;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & > p {
      font-size: 20px;
    }
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
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
  }
`

const RoundInfo = styled.div`
  width: auto;
  display: flex;
  align-items: flex-end;
  color: white;
  justify-content: space-between;
  box-sizing: border-box;
  ${({ theme }) => theme.mediaQueries.xs} {
    margin: 12px 4px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 0 28px 0;
  }
`

const LotteryStatusTimeInfo = styled.div`
  display: flex;
  gap: 8px;
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 12px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
  }
`

const ActionWrapper = styled.div<{ type: number }>`
  width: 100%;
  position: relative;
  border-radius: 75px;
  background: ${({ type }) =>
    type === 0 ? '#75b5eb' : type === 1 ? 'rgba(46, 242, 255, 1)' : 'rgba(205, 205, 205, 1)'};
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
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 12px;
    transform: translate(30%, -50%);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 16px;
    transform: translateY(-50%);
  }
`
const BadgeText = styled.div<{ type: number }>`
  color: ${({ type }) => (type === 0 ? 'rgba(0, 123, 228, 1)' : 'white')};
  font-size: 16px;
  font-weight: 800;
  position: absolute;
  top: 40%;
  right: 0;
  transform: translate(-20%, -50%);
`

export default function LotteryCard(props) {
  const { type } = props
  const [winNumbers, setWinNumbers] = useState([1, 2, 3, 4, 5, 6, 7])
  const { isMobile } = useMatchBreakpoints()
  return (
    <LotteryCardWrapper type={type}>
      <LotteryInfoWrapper>
        <LotteryCardIcon width={isMobile ? 48 : 200} height={isMobile ? 48 : 200} style={{ marginRight: 32 }} />
        <LotteryInfo>
          <LotteryInfoRow>
            {type === 0 ? (
              <>
                <p>Lottery Time Remain</p>
                <p>12：02：03</p>
              </>
            ) : type === 1 ? (
              <>
                <p>Lottery Win</p>
                <p>233,400 MDAO</p>
              </>
            ) : (
              <p>Failed</p>
            )}
          </LotteryInfoRow>

          <LotteryInfoRow>
            {type === 0 ? (
              <>
                <p>Lottery Amount</p>
                <p>24</p>
              </>
            ) : type === 1 ? (
              <>
                <p>Lottery Win Multiple</p>
                <p>1</p>
              </>
            ) : (
              <>
                <p>Lottery Amount</p>
                <p>1</p>
              </>
            )}
          </LotteryInfoRow>
        </LotteryInfo>
      </LotteryInfoWrapper>

      <LotteryMainWrapper>
        <RoundInfo>
          <div>
            <TitleLeft>
              <h2 style={{ fontSize: isMobile ? 14 : 18 }}>Round</h2>
              <div
                style={{
                  padding: isMobile ? '2px 12px' : '4px 24px',
                  border: '1px solid #FFFFFF',
                  borderRadius: '30px',
                  fontSize: isMobile ? 14 : 16,
                }}
              >
                {1}
              </div>
            </TitleLeft>
            <div style={{ fontSize: isMobile ? 12 : 16 }}>Drawn May 5, 2022, 8:00 PM</div>
          </div>
          <LotteryStatusTimeInfo>
            <div>开奖时间</div>
            <div>16h 36m 19s</div>
          </LotteryStatusTimeInfo>
        </RoundInfo>
        <ActionWrapper type={type}>
          <NumbersWrapper>
            {winNumbers.map((x) => {
              return (
                <NumberCom
                  value={x}
                  width={isMobile ? 30 : 42}
                  height={isMobile ? 30 : 42}
                  fontSize={isMobile ? 14 : 20}
                  outline
                  extra={x > 5}
                />
              )
            })}
          </NumbersWrapper>
          <ActionText>继续下注</ActionText>
        </ActionWrapper>
      </LotteryMainWrapper>
      <BadgeIconWrapper>
        <BadgeIcon fill={type === 0 ? 'white' : 'rgba(10, 240, 255, 1)'} />
        <BadgeText type={type}>{type === 0 ? '竞猜进行中' : '竞猜已结束'}</BadgeText>
      </BadgeIconWrapper>
    </LotteryCardWrapper>
  )
}
