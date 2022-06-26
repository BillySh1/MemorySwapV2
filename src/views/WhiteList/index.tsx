import { Heading } from '@pancakeswap/uikit'
import PageHeader from 'components/PageHeader'
import styled from 'styled-components'
import Page from 'views/Page'
import useWhiteList from './hooks/useWhiteList'
import WhitelistCard from './components/WhitelistCard'
import FlexLayout from 'components/Layout/Flex'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

interface WhiteListData {
  name: string
  market: string
  price: string
  total: string
  addresses: string
  chain: string
}

const CardLayout = styled(FlexLayout)`
  justify-content: center;
`

export default function WhiteList() {
  const list = useWhiteList()

  return (
    <Container>
      <PageHeader width={'100%'}>
        <Heading as="h1" scale="xxl" color="primary" mb="24px">
          White List
        </Heading>
        <Heading scale="lg" color="text">
          See above to check the whitelist
        </Heading>
      </PageHeader>
      <Page style={{ justifyContent: 'flex-start' }}>
        <CardLayout>
          {list.map((item) => (
            <WhitelistCard key={item} info={item}  />
          ))}
        </CardLayout>
      </Page>
    </Container>
  )
}
