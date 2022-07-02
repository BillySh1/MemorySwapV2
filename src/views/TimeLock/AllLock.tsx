import { Button, ButtonMenu, ButtonMenuItem, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useState } from 'react'
import styled from 'styled-components'
import { LockItem } from './components/LockItem'
import useLockList from './hooks/useLockList'
import { Input } from '@pancakeswap/uikit'

const ListWrapper = styled.div`
  position: relative;
  width: 100%;
`

const ListContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  ${({ theme }) => theme.mediaQueries.xs} {
    justify-content: center;
    gap: 8px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: flex-start;
    gap: 24px;
  }
`

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`

const StyledInput = styled(Input)`
  width: 100%;
`
const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const OwnButton = styled(Button)`
  width: 40%;
`

export default function AllLock() {
  const list = useLockList()
  const [activeIndex, setActiveIndex] = useState(0)
  const [search, setSearch] = useState('')
  const { isMobile } = useMatchBreakpoints()
  if (!list || !list.length) return null
  return (
    <ListWrapper>
      {(isMobile && (
        <>
          <StyledInput
            placeholder="enter address"
            scale="sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FilterWrapper>
            <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="primary">
              <ButtonMenuItem>进行中</ButtonMenuItem>
              <ButtonMenuItem>已结束</ButtonMenuItem>
            </ButtonMenu>
            <OwnButton scale="sm" variant="primary">
              Own
            </OwnButton>
          </FilterWrapper>
        </>
      )) || (
        <>
          <FilterWrapper>
            <FlexContainer>
              <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="primary">
                <ButtonMenuItem>进行中</ButtonMenuItem>
                <ButtonMenuItem>已结束</ButtonMenuItem>
              </ButtonMenu>
              <OwnButton scale="sm" variant="primary">
                Own
              </OwnButton>
            </FlexContainer>
            <StyledInput
              style={{ width: 'auto' }}
              placeholder="enter address"
              scale="sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </FilterWrapper>
        </>
      )}

      <ListContainer>
        {list.map((x) => {
          return <LockItem info={x} />
        })}
      </ListContainer>
    </ListWrapper>
  )
}
