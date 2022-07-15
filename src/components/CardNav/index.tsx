import React from 'react'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const { t } = useTranslation()
  return (
    <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link">{t('Swap')}</ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link">{t('Liquidity')}</ButtonMenuItem>
      <ButtonMenuItem
        id="pool-nav-link"
        as="a"
        href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
        target="_blank"
        rel="noreferrer noopener"
      >
        {t('Bridge')}
      </ButtonMenuItem>
    </ButtonMenu>
  )
}

export default Nav
