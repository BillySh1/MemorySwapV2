import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.125);
  padding: 24px;
  box-sizing: border-box;
  width: 100%;
`

const LeftTitle = styled.div`
  font-weight: bold;
  font-size: large;
`

export default function LastWinNumber() {
  return (
    <Container>
      <LeftTitle>Last Wining Number</LeftTitle>
      <div>22</div>
    </Container>
  )
}
