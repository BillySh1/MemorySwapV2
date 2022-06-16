import { useRef, useState, useEffect, RefObject } from 'react'
import { Button, CardBody, CardFooter, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { TimeLockIcon, Input } from '@pancakeswap/uikit'
import { AppHeader, AppBody } from '../../components/App'
import { DatePicker } from 'views/Voting/components/DatePicker'
import TimeCards from './components/TImeCards'

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
  const [lockNum, setLockNum] = useState(0)
  const [lockTime, setLockTiem] = useState<Date>(new Date())
  const inputRef = useRef<HTMLInputElement>()
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <AppBody>
      <AppHeader title="TimeLock" subtitle="LockYourToken" />
      <Body>
        <Flex width="100%" alignItems="center" flexDirection="column">
          <TimeLockIcon></TimeLockIcon>
          <Intro>请输入合约地址</Intro>
          <Input
            placeholder={'Please paste address'}
            scale="md"
            autoComplete="off"
            value={contractAddress}
            ref={inputRef as RefObject<HTMLInputElement>}
            // onChange={handleInput}
            // onKeyDown={handleEnter}
          />
          <Intro>请输入抵押数量</Intro>
          <Input
            placeholder={'Please enter lock amount'}
            scale="md"
            autoComplete="off"
            value={lockNum}
            ref={inputRef as RefObject<HTMLInputElement>}
            // onChange={handleInput}
            // onKeyDown={handleEnter}
          />
          <Intro>请输入抵押时间</Intro>
          <DatePicker
            onChange={(v) => console.log(v)}
            name="lockTime"
            selected={lockTime}
            placeholderText="YYYY/MM/DD/HH"
          />
         <TimeCards remainTime={remainTime} />
        </Flex>
      </Body>
      <CardFooter style={{ textAlign: 'center' }}>
        <Button width="100%">Lock</Button>
      </CardFooter>
    </AppBody>
  )
}
