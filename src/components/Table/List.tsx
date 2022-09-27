import Line from './Line'
import {
  TFormattedData,
  TSummary,
  TActionsRow,
  TColumnsNote,
  TColumnsSummary,
} from '../../type'
import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

type TProps<T> = {
  data: T
  scheme: T extends TFormattedData[] ? TColumnsNote[] : TColumnsSummary[]
  actions?: T extends TFormattedData[] ? TActionsRow[] : undefined
}

const List: React.FC<TProps<TFormattedData[] | TSummary[]>> = ({
  scheme,
  data,
  actions,
}) => {
  return (
    <ul>
      {data.map((row) => {
        return <Line scheme={scheme} row={row} key={row.id} actions={actions} />
      })}
    </ul>
  )
}

export default List
