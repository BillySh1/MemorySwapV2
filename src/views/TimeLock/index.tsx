import { useState } from 'react'
import Page from 'views/Page'
import NewLock from './NewLock'
import AllLock from './AllLock'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import styled from 'styled-components'

const TabWrapper = styled.div`
  margin-bottom: 24px;
`

const PageWrapper = styled(Page)`
  justify-content:flex-start;

`

export default function TimeLock() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <PageWrapper>
      <TabWrapper>
        <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="primary">
          <ButtonMenuItem>New</ButtonMenuItem>
          <ButtonMenuItem>All</ButtonMenuItem>
        </ButtonMenu>
      </TabWrapper>
      {activeIndex === 0 ? <NewLock /> : activeIndex === 1 ? <AllLock /> : null}
    </PageWrapper>
  )
}
