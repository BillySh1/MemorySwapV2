import { useState } from 'react'
import Page from 'views/Page'
import NewLock from './NewLock'
import AllLock from './AllLock'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import styled from 'styled-components'

const TabWrapper = styled.div`
  margin-bottom: 32px;
`

export default function TimeLock() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Page>
      <TabWrapper>
        <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="primary">
          <ButtonMenuItem>All</ButtonMenuItem>
          <ButtonMenuItem>New</ButtonMenuItem>
        </ButtonMenu>
      </TabWrapper>
      {activeIndex === 0 ? <AllLock /> : activeIndex === 1 ? <NewLock /> : null}
    </Page>
  )
}
