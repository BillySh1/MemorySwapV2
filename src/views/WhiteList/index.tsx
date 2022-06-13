import { Heading } from '@pancakeswap/uikit'
import PageHeader from 'components/PageHeader'
import { useFactory, useTimeLocker } from 'hooks/useContract'
import { useAsync } from 'react-use'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { factory } from 'typescript'
import Page from 'views/Page'
import { Card } from '../../../packages/uikit/src/components/Card'
import { Table, Td, Th } from '../../../packages/uikit/src/components/Table'
import useWhiteList from './hooks/useWhiteList'
import { useSWRContract } from 'hooks/useSWRContract'

const StyledTr = styled.tr`
  background-color: ${({ theme }) => theme.nav.background};
`
const Container = styled.div`
  width: 100%;
  height: 100%;
`

interface WhiteListData {
  name: string
  market: string
  price: string
  total: string
  addresses: string
  chain: string
}


export default function WhiteList() {
  const ThMap = ['name', 'market', 'price', 'total liquidity', 'addresses', 'chain']
  const [tableData, setTableData] = useState<WhiteListData[]>([])
  const list = useWhiteList()
  useEffect(() => {
    if (list.length > 0) {
      setTableData(
        list.map((x) => ({
          name: x,
          market: '100,000',
          price: '2000',
          total: '154m',
          addresses: '132973',
          chain: 'Ethereum',
        })),
      )
    }
  }, [list])

  return (
    <Container>
      <PageHeader width={'100%'}>
        <Heading as="h1" scale="xxl" color="primary" mb="24px">
          White List
        </Heading>
        <Heading scale="lg" color="text">
          See above to check the whitelist
        </Heading>
      </PageHeader>
      <Page style={{ justifyContent: 'flex-start' }}>
        <div style={{ width: '80vw' }}>
          <Card>
            <Table>
              <thead>
                <StyledTr>
                  {ThMap.map((x) => (
                    <Th>{x}</Th>
                  ))}
                </StyledTr>
              </thead>
              <tbody>
                {tableData.map((item) => (
                  <tr>
                    {Object.keys(item).map((x) => (
                      <Td style={{ textAlign: 'center' }}>{item[x]}</Td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </div>
      </Page>
    </Container>
  )
}
