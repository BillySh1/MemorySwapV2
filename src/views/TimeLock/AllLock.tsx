import styled from 'styled-components'
import { LockItem } from './components/LockItem'
import useLockList from './hooks/useLockList'

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`

export default function AllLock() {
  const list = useLockList()
  if (!list || !list.length) return null
  return (
    <ListWrapper>
      {list.map((x) => {
        return <LockItem info={x} />
      })}
    </ListWrapper>
  )
}
