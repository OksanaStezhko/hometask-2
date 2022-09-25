import parse from 'html-react-parser'
import Action from './Action'

import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

const Line = ({ row, option, scheme, actions }) => {
  return (
    <ul className={styles.line}>
      {scheme.map((elem) => (
        <li key={elem.name} className={cx('item', elem.width)}>
          {elem.name === 'image' ? (
            parse(row.image)
          ) : (
            <span className={styles['item-text']}>{row[elem.name]}</span>
          )}
        </li>
      ))}
      <Action option={option} actions={actions} id={row.id} />
    </ul>
  )
}

export default Line
