import { useRef, useState, useEffect, RefObject, useCallback } from 'react'
import { Button, CardBody, CardFooter, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { TimeLockIcon, Input } from '@pancakeswap/uikit'
import { AppHeader, AppBody } from '../../components/App'
import { DatePicker } from 'views/Voting/components/DatePicker'
import TimeCards from './components/TImeCards'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import bep20Abi from '../../config/abi/erc20.json'
import { getContract, isAddress } from 'utils'
import useToast from 'hooks/useToast'
import { parseUnits } from '@ethersproject/units'
import { getTimeLockerAddress } from 'utils/addressHelpers'
import useCatchTxError from 'hooks/useCatchTxError'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTimeLocker } from 'hooks/useContract'

const Body = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt2};
`

const Intro = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 12px 0;
`

export default function NewLock() {
  const [contractAddress, setContractAddress] = useState<string>('')
  const [remainTime, setRemainTime] = useState(['00', '00', '00'])
  const [lockNum, setLockNum] = useState<string>('0')
  const [lockTime, setLockTime] = useState<Date>(new Date())
  const [isApproved, setIsApproved] = useState(false)
  const lockerContract = useTimeLocker()
  const { callWithGasPrice } = useCallWithGasPrice()
  const { fetchWithCatchTxError, loading: isApproving } = useCatchTxError()
  const { toastSuccess, toastError } = useToast()
  const { library } = useActiveWeb3React()
  const inputRef = useRef<HTMLInputElement>()
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSelectDate = (v) => {
    setLockTime(v)
    const diff = (new Date(v).getTime() - new Date().getTime()) / 1000
    const days = Math.floor(diff / 3600 / 24)
    const hours = Math.floor((diff - days * 24 * 3600) / 3600)
    const mins = Math.floor((diff - days * 24 * 3600 - hours * 3600) / 60)
    setRemainTime([
      days.toString().padStart(2, '0'),
      hours.toString().padStart(2, '0'),
      mins.toString().padStart(2, '0'),
    ])
  }

  const approve = async () => {
    const isValidAddress = isAddress(contractAddress) !== false
    if (!isValidAddress) {
      toastError('not valid address')
      return
    }
    const contract = getContract(contractAddress, bep20Abi, library.getSigner())
    const receipt = await fetchWithCatchTxError(() => {
      return callWithGasPrice(contract, 'approve', [getTimeLockerAddress(), parseUnits(lockNum, 18)])
    })
    if (receipt?.status) {
      toastSuccess('Approved')
      setIsApproved(true)
    }
  }
  const handleLock = async () => {
    const time = Math.ceil(new Date(lockTime).getTime() / 1000)
    console.log(parseUnits(lockNum, 18), time, 'param')
    const receipt = await fetchWithCatchTxError(() =>
      callWithGasPrice(lockerContract, 'lock', [contractAddress, parseUnits(lockNum, 18), 1655543144]),
    )
    if (receipt?.status) {
      toastSuccess('Success')
      setIsApproved(false)
    }
  }
  return (
    <AppBody>
      <AppHeader noConfig title="TimeLock" subtitle="LockYourToken" />
      <Body>
        <Flex width="100%" alignItems="center" flexDirection="column">
          <TimeLockIcon width={48} height={48} />
          <Intro>请输入合约地址</Intro>
          <Input
            placeholder={'Please paste address'}
            scale="md"
            autoComplete="off"
            value={contractAddress}
            ref={inputRef as RefObject<HTMLInputElement>}
            onChange={(e) => setContractAddress(e.target.value)}
            // onKeyDown={handleEnter}
          />
          <Intro>请输入抵押数量</Intro>
          <Input
            placeholder={'Please enter lock amount'}
            scale="md"
            autoComplete="off"
            value={lockNum}
            ref={inputRef as RefObject<HTMLInputElement>}
            onChange={(e) => setLockNum(e.target.value)}
            // onKeyDown={handleEnter}
          />
          <Intro>请输入抵押时间</Intro>
          <DatePicker onChange={handleSelectDate} name="lockTime" selected={lockTime} placeholderText="YYYY/MM/DD" />
          <TimeCards remainTime={remainTime} />
        </Flex>
      </Body>
      <CardFooter style={{ textAlign: 'center' }}>
        <Button
          isLoading={isApproving}
          width="100%"
          onClick={async () => {
            if (isApproved) {
              await handleLock()
            } else {
              await approve()
            }
          }}
        >
          {isApproved ? 'Lock' : 'Approve'}
        </Button>
      </CardFooter>
    </AppBody>
  )
}
