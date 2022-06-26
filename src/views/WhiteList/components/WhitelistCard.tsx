import { CardBody } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import CardFooter from './CardFooter'
import { WETH } from '@pancakeswap/sdk'
import StyledCard from 'views/Pools/components/PoolCard/StyledCard'
import PoolCardHeader, { PoolCardHeaderTitle } from 'views/Pools/components/PoolCard/PoolCardHeader'
import { TokenImage } from 'components/TokenImage'

const WhitelistCard: React.FC<{ info: any }> = ({ info }) => {
  const { t } = useTranslation()

  return (
    <StyledCard>
      <PoolCardHeader>
        <PoolCardHeaderTitle title={'BTC'} subTitle={info} />
        <TokenImage token={WETH[321]} width={64} height={64} />
      </PoolCardHeader>
      <CardBody>{'address:' + info}</CardBody>
      <CardFooter info={info} />
    </StyledCard>
  )
}

export default WhitelistCard
