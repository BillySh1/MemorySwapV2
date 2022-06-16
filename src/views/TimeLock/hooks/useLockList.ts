import { useFactory, useTimeLocker } from 'hooks/useContract'
import { useSWRContract } from 'hooks/useSWRContract'

const useLockList = () => {
  const locker = useTimeLocker()
  console.log(locker,'locker')
//   const { data } = useSWRContract([locker, 'getAllMarket'])
  return  []
}

export default useLockList
