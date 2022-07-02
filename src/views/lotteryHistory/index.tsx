import { Box, Flex, Heading } from '@pancakeswap/uikit'
import Page from 'views/Page'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useState } from 'react'
import YourHistoryCard from 'views/Lottery/components/YourHistoryCard'
import AllHistoryCard from 'views/Lottery/components/AllHistoryCard'
import HistoryTabMenu from 'views/Lottery/components/HistoryTabMenu'
import useShowMoreUserHistory from 'views/Lottery/hooks/useShowMoreUserRounds'
import styled from 'styled-components'
import LotteryCard from './components/lotteryCard'

const Container = styled.div`
  width: 100%;
  height: calc(100% - 164px);
`

const StyledPage = styled(Page)`
  align-items: flex-start;
  justify-content: baseline;
`

export default function LotteryHistory() {
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const theme = useTheme()
  const { t } = useTranslation()
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()
  return (
    <Container>
      <LotteryCard type={0} />
      <LotteryCard type={1} />
      <LotteryCard type={2} />
      <StyledPage>
        <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
          <Heading style={{ color: 'rgba(0, 123, 228, 1)' }} mb="24px" scale="xl">
            {t('Finished Rounds')}
          </Heading>
          <Box mb="24px">
            <HistoryTabMenu
              activeIndex={historyTabMenuIndex}
              setActiveIndex={(index) => setHistoryTabMenuIndex(index)}
            />
          </Box>
          {historyTabMenuIndex === 0 ? (
            <AllHistoryCard />
          ) : (
            <YourHistoryCard
              handleShowMoreClick={handleShowMoreUserRounds}
              numUserRoundsRequested={numUserRoundsRequested}
            />
          )}
        </Flex>
      </StyledPage>
    </Container>
  )
}
