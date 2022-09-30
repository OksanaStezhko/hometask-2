import { useContext } from 'react'
import Line from './Line'
import { tableContext } from './Table'

const List = () => {
  const options = useContext(tableContext)
  const { data } = options
  return (
    <ul>
      {data.map((row) => {
        return <Line key={row.id} row={row} />
      })}
    </ul>
  )
}

export default List
