import { useContext } from 'react'
import parse from 'html-react-parser'
import Action from './Action'
import { tableContext } from './Table'

import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

const Line = ({ row }) => {
  const options = useContext(tableContext)
  const { scheme, actionsRow } = options
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
      {actionsRow && <Action id={row.id} />}
    </ul>
  )
}

export default Line
