import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  width: 100%;
  background: rgba(0, 123, 228, 1);
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: #fff;
`
const TitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const TitleRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  text-align: right;
  line-height: 1.2;
`

const RoundLogo = styled.div`
  height: 48px;
  width: 48px;
  background: #fff;
  color: rgba(0, 123, 228, 1);
  line-height: 48px;
  text-align: center;
  border-radius: 99px;
`

export default function HeaderCom(props) {
  const { round } = props
  return (
    <HeaderContainer>
      <TitleLeft>
        <h2>Round</h2>
        <div
          style={{
            padding: '4px 24px',
            border: '1px solid #FFFFFF',
            borderRadius: '30px',
          }}
        >
          {round}
        </div>
      </TitleLeft>
      <TitleRight>
        <div>
          <div>Stop betting 30 minutes before the lottery</div>
          <div>Drawn July 5, 2022, 8:00 PM</div>
        </div>

        <RoundLogo>5+2</RoundLogo>
      </TitleRight>
    </HeaderContainer>
  )
}
