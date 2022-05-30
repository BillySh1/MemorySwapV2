import { useRef, useState, useEffect, RefObject, useMemo } from 'react'
import { Button, CardBody, CardFooter, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'views/Page'
import { TimeLockIcon, Input } from '@pancakeswap/uikit'
import { AppHeader, AppBody } from '../../components/App'
import { DatePicker, TimePicker } from 'views/Voting/components/DatePicker'

const Body = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt2};
`

const Row = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const TimeItem = styled.div`
  margin-top: 12px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  padding: 16px 12px;
  box-sizing: border-box;
  font-size: 2rem;
  color: rgba(13, 166, 234, 1);
  margin-bottom: 16px;
`
const TimeText = styled.div`
  color: rgba(0, 123, 228, 1);
  font-weight: 400;
  font-size: 16;
`

const Intro = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 12px 0;
`

export default function TimeLock() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [remainTime, setRemainTime] = useState(['00', '00', '00'])
  const [lockTime, setLockTiem] = useState<Date>(new Date())
  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <Page>
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
              value={searchQuery}
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
            <Row>
              {remainTime.map((x) => (
                <Flex flexDirection={'column'} alignItems="center">
                  <TimeItem>{x}</TimeItem>
                  <TimeText>DAYS</TimeText>
                </Flex>
              ))}
            </Row>
          </Flex>
        </Body>
        <CardFooter style={{ textAlign: 'center' }}>
          <Button width="100%">Lock</Button>
        </CardFooter>
      </AppBody>
    </Page>
  )
}
