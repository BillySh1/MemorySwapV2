import { Heading, Input } from '@pancakeswap/uikit'
import PageHeader from 'components/PageHeader'
import styled from 'styled-components'
import Page from 'views/Page'
import useWhiteList from './hooks/useWhiteList'
import WhitelistCard from './components/WhitelistCard'
import FlexLayout from 'components/Layout/Flex'
import { useState } from 'react'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const StyledInput = styled(Input)`
  border-radius: 99px;
  margin-bottom: 24px;
  background: #1F8EEC;
  color: #fff;
  &::placeholder {
    color: rgba(255,255,255,0.7);
  }
`

const CardLayout = styled.div`
width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
   ${({ theme }) => theme.mediaQueries.xs} {
    justify-content: center;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: flex-start;
  }

`

export default function WhiteList() {
  const [value, setValue] = useState('')
  const list = useWhiteList()

  return (
    <Container>
      <Page style={{ justifyContent: 'flex-start' }}>
     <StyledInput placeholder='enter address to search' value={value} onChange={(e)=>setValue(e.target.value)} />

        <CardLayout>
          {list.map((item) => (
            <WhitelistCard key={item} info={item}  />
          ))}
        </CardLayout>
      </Page>
    </Container>
  )
}
