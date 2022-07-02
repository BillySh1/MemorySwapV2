import { useWeb3React } from '@web3-react/core'
import { useTimeLocker } from 'hooks/useContract'
import { useSWRContract } from 'hooks/useSWRContract'

const useLockList = () => {
  const { account } = useWeb3React()
  if (!account) return []
  const locker = useTimeLocker()
  const { data } = useSWRContract([locker, 'allLockInfo', ['0x7991FCCDbA857f944Af88b39d49cb7e91E4e4a41', '0x2EC8EBB0a8eAa40e4Ce620CF9f84A96dF68D4669']])
  return data
}

export default useLockList
