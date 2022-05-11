import { TxMiningIcon, IconButton } from '@pancakeswap/uikit'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const RoundBox = styled.div`
  font-size: 14px;
  width: fit-content;
  border-radius: 35px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  border-radius: 35px;
  font-weight: 800;
  border: 1.5px solid #637cbb;
  padding: 6px 16px;
  box-sizing: border-box;
`

const Intro = styled.div`
  margin: 16px 0;
`

export const TxMining = () => {
  return (
    <Wrapper>
      <RoundBox>
        <div>Trade Mining Reward 0.0024 MDAO</div>
        <IconButton style={{ width: 'unset', borderRadius: 35, padding: '12px 16px', fontSize: 14, height: 'unset' }}>
          <span style={{ marginRight: '8px' }}>Withdraw</span>
          <TxMiningIcon  color="invertedContrast" />
        </IconButton>
      </RoundBox>
      <Intro>{'Try Smart Router for a better Slippage ->'}</Intro>
    </Wrapper>
  )
}
