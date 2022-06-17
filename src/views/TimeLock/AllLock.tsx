import { LockItem } from './components/LockItem'
import useLockList from './hooks/useLockList'

export default function AllLock() {
  const list = useLockList()
  if (!list.length) return null
  return (
    <div>
      {list.map((x) => {
        return <LockItem />
      })}
    </div>
  )
}
