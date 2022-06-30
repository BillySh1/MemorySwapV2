import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useState } from 'react'
import styled from 'styled-components'
import { LockItem } from './components/LockItem'
import SearchCom from './components/SearchCom'
import useLockList from './hooks/useLockList'

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
  }
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: flex-start;
  }
`

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export default function AllLock() {
  const list = useLockList()
  const [activeIndex, setActiveIndex] = useState(0)
  if (!list || !list.length) return null
  return (
    <ListWrapper>
      <FilterWrapper>
        <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="primary">
          <ButtonMenuItem>进行中</ButtonMenuItem>
          <ButtonMenuItem>已结束</ButtonMenuItem>
        </ButtonMenu>
        <SearchCom />
      </FilterWrapper>
      <ListContainer>
        {list.map((x) => {
          return <LockItem info={x} />
        })}
      </ListContainer>
    </ListWrapper>
  )
}
