import { useContext } from 'react'
import Line from './Line'
import {
  TFormattedData,
  TSummary,
  TActionsRow,
  TColumnsNote,
  TColumnsSummary,
} from '../../type'
import { tableContext } from './Table'
import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

type TProps<T> = {
  data: T
  scheme: T extends TFormattedData[] ? TColumnsNote[] : TColumnsSummary[]
  actions?: T extends TFormattedData[] ? TActionsRow[] : undefined
}

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
