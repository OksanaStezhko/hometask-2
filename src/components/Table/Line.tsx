import { useContext } from 'react'
import parse from 'html-react-parser'
import Action from './Action'
import { tableContext } from './Table'
import { TFormattedData, TSummary } from '../../type'
import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

interface IProps {
  row: TFormattedData | TSummary
}

const Line = ({ row }: IProps) => {
  const options = useContext(tableContext)
  const { scheme, actionsRow } = options

  type currentTypeColumn = keyof typeof row
  return (
    <ul className={styles.line}>
      {scheme.map(({ name, width }) => {
        const nameColumn = name as currentTypeColumn
        return (
          <li key={name} className={cx('item', width)}>
            {name === 'image' ? (
              parse(row.image)
            ) : (
              <span className={styles['item-text']}>{row[nameColumn]}</span>
            )}
          </li>
        )
      })}
      {actionsRow && <Action id={row.id} />}
    </ul>
  )
}

export default Line
