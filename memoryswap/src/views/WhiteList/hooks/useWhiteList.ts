import { useFactory } from 'hooks/useContract'
import { useState } from 'react'

const useWhiteList = () => {
  const [list, setList] = useState([])
  const factory = useFactory()
  try {
    console.log(factory,'factory')
  } catch (e) {
    console.error('whitelist', e)
  }

  return list
}

export default useWhiteList
