import { CardBody, CardHeader, Card } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { WETH } from '@pancakeswap/sdk'
import { TokenImage } from 'components/TokenImage'
import styled from 'styled-components'
import Flex from 'components/Layout/Flex'

export const StyledCard = styled(Card)`
  min-width: 280px;
  margin: 0 0 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  background: #fff;
  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 100%;
    margin: 0 12px 32px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 327px;
  }
`

const HeadWrapper = styled(CardHeader)`
  background: #007be4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  border-radius: 0 0 0 20px;
`
const TitleText = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 500;
`

const StyledCardBody = styled(CardBody)`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
`

const IntroItem = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: rgba(245, 245, 245, 1);
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  gap: 4px;
`

const IntroRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const WhitelistCard: React.FC<{ info: any }> = ({ info }) => {
  const { t } = useTranslation()

  return (
    <StyledCard>
      <HeadWrapper>
        <TokenImage token={WETH[321]} width={36} height={36} />
        <TitleText>BTC</TitleText>
        <TitleText>$ 41252.2</TitleText>
      </HeadWrapper>
      <StyledCardBody>
        <IntroItem>
          <IntroRow>
            <div>最大供应市值</div>
            <div>＄12131</div>
          </IntroRow>
          <IntroRow>
            <div>流通市值</div>
            <div>＄1,123,111,222,131</div>
          </IntroRow>
          <IntroRow>
            <div>流通总量</div>
            <div>123,156,461 BTC</div>
          </IntroRow>
        </IntroItem>
        <IntroItem>
          <IntroRow>
            <div>发行时间</div>
            <div>2008.02.02</div>
          </IntroRow>
        </IntroItem>
        <IntroItem>
          <IntroRow>
            <div>持币地址数</div>
            <div>111,222,131</div>
          </IntroRow>
        </IntroItem>
        <IntroItem>
          <IntroRow>
            <div>开盘价</div>
            <div>＄0.001</div>
          </IntroRow>
        </IntroItem>
        <IntroItem>
          <IntroRow>
            <div>所属公链</div>
            <div>Bitchain</div>
          </IntroRow>
        </IntroItem>
        <IntroItem>
          <IntroRow>
            <div>所属板块</div>
            <div>Scope</div>
          </IntroRow>
        </IntroItem>
      </StyledCardBody>
    </StyledCard>
  )
}

export default WhitelistCard
