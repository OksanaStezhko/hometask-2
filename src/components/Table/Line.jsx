import parse from 'html-react-parser'
import Action from './Action'
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

// type TProps<T> = {
//   row: T
//   scheme: T extends TFormattedData ? TColumnsNote[] : TColumnsSummary[]
//   actions?: T extends TFormattedData ? TActionsRow[] : undefined
// }

const Line = ({ row, scheme, actions }) => {
  return (
    <ul className={styles.line}>
      {scheme.map(({ name, width }) => (
        <li key={name} className={cx('item', width)}>
          {name === 'image' ? (
            parse(row.image)
          ) : (
            <span className={styles['item-text']}>{row[name]}</span>
          )}
        </li>
      ))}
      {actions && <Action actions={actions} id={row.id} />}
    </ul>
  )
}

export default Line
