import { useWeb3React } from '@web3-react/core'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTimeLocker } from 'hooks/useContract'
import { useSWRContract } from 'hooks/useSWRContract'

const useLockList = () => {
  const { account } = useWeb3React()
  if (!account) return []
  const locker = useTimeLocker()
  const { data } = useSWRContract([locker, 'allLockInfo', ['0x7991FCCDbA857f944Af88b39d49cb7e91E4e4a41', account]])
  return data
}

export default useLockList
