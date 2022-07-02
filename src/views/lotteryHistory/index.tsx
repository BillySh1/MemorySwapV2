import { Box, Flex, Heading } from '@pancakeswap/uikit'
import Page from 'views/Page'
import PageSection from 'components/PageSection'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useState } from 'react'
import YourHistoryCard from 'views/Lottery/components/YourHistoryCard'
import AllHistoryCard from 'views/Lottery/components/AllHistoryCard'
import HistoryTabMenu from 'views/Lottery/components/HistoryTabMenu'
import useShowMoreUserHistory from 'views/Lottery/hooks/useShowMoreUserRounds'
import CheckPrizesSection from 'views/Lottery/components/CheckPrizesSection'
import PageHeader from 'components/PageHeader'
import styled from 'styled-components'
import LotteryCard from './components/lotteryCard'

const Container = styled.div`
  width: 100%;
  height: calc(100% - 164px);
`

export default function LotteryHistory() {
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const theme = useTheme()
  const { t } = useTranslation()
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()
  return (
    <Container>
        <LotteryCard />
      <Page>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          background={'transparent'}
          hasCurvedDivider={false}
          index={2}
        >
          <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading mb="24px" scale="xl">
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
        </PageSection>
      </Page>
    </Container>
  )
}
