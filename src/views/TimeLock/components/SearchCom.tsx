import { Input } from '@pancakeswap/uikit'
import { useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled(Input)`
    max-width: 50%;
    width: auto;
`

export default function SearchCom() {
  const [value, setValue] = useState('')
  return <StyledInput placeholder="enter address" scale="sm" value={value} onChange={(e) => setValue(e.target.value)} />
}
