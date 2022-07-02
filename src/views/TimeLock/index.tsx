import { useState } from 'react'
import Page from 'views/Page'
import NewLock from './NewLock'
import AllLock from './AllLock'
import { ButtonMenu, ButtonMenuItem, useMatchBreakpoints } from '@pancakeswap/uikit'
import styled from 'styled-components'

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  ${({ theme }) => theme.mediaQueries.xs} {
    margin-bottom: 1rem;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 2rem;
  }
`

const PageWrapper = styled(Page)`
  justify-content: flex-start;
`

export default function TimeLock() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { isMobile } = useMatchBreakpoints()

  return (
    <PageWrapper>
      <TabWrapper>
        <ButtonMenu
          fullWidth={isMobile ? true : false}
          activeIndex={activeIndex}
          onItemClick={setActiveIndex}
          scale="sm"
          variant="primary"
        >
          <ButtonMenuItem>New</ButtonMenuItem>
          <ButtonMenuItem>All</ButtonMenuItem>
        </ButtonMenu>
      </TabWrapper>
      {activeIndex === 0 ? <NewLock /> : activeIndex === 1 ? <AllLock /> : null}
    </PageWrapper>
  )
}
