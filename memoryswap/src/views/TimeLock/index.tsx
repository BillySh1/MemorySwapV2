import { Button, CardBody, CardFooter, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'views/Page'
import { AppHeader, AppBody } from '../../components/App'



const Body = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt2};
`
export default function TimeLock() {
  return (
    <Page>
      <AppBody>
        <AppHeader title="TimeLock" subtitle="LockYourToken" />
        <Body>
          <Flex width="100%" alignItems="center" flexDirection="column">
            <div>timelock</div>
          </Flex>
        </Body>
        <CardFooter style={{ textAlign: 'center' }}>
          <Button width="100%">添加</Button>
        </CardFooter>
      </AppBody>
    </Page>
  )
}
