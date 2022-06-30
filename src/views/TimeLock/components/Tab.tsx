import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Tab({ activeIndex = 0 }: { activeIndex?: number }) {
  //   const TranslateString = useI18n()
  const [active,setActive] = useState(0)
  return (
    <StyledNav>
      <ButtonMenu activeIndex={active} scale="sm" variant="subtle">
        <ButtonMenuItem id="all">All</ButtonMenuItem>
        <ButtonMenuItem id="new">New</ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}

export { Tab }
