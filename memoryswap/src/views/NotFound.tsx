import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Link from 'next/link'
import Page from './Page'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading scale="xl">Comming Soon</Heading>
        <Text mb="16px">Please Stay tuned</Text>
        <Link href="/swap" passHref>
          <Button as="a" scale="sm">
            {t('Back')}
          </Button>
        </Link>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
