import { useFactory, useTimeLocker } from 'hooks/useContract'
import { useState } from 'react'
import styled from 'styled-components'
import Page from 'views/Page'
import { Card } from '../../../packages/uikit/src/components/Card'
import { Table, Td, Th } from '../../../packages/uikit/src/components/Table'
import useWhiteList from './hooks/useWhiteList'

const StyledTr = styled.tr`
  background-color: ${({ theme }) => theme.nav.background};
`

interface WhiteListData {
  name: string
  market: string
  price: string
  total: string
  addresses: string
  chain: string
}

const tempList = [
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
  { name: 'ETH', market: '1,000,000', price: '2000', total: '154M', addresses: '13229192', chain: 'Ethereum' },
]

export default function WhiteList() {
  const ThMap = ['name', 'market', 'price', 'total liquidity', 'addresses', 'chain']
  const [tableData, setTableData] = useState<WhiteListData[]>(tempList)
  const list = useWhiteList()
  return (
    <Page>
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
                    <Td style={{textAlign:'center'}}>{item[x]}</Td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </Page>
  )
}
