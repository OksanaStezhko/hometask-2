import parse from 'html-react-parser'
import styles from './Table.module.css'
import Action from './Action'

import classNames from 'classnames/bind'
let cx = classNames.bind(styles)

const Line = ({ row, option, scheme }) => {
  return (
    <ul className={styles.line}>
      {scheme.map((elem) => (
        <li key={elem.name} className={cx('item', elem.width)}>
          {elem.name === 'image' ? parse(row.image) : row[elem.name]}
        </li>
      ))}
      <Action option={option} />
    </ul>
  )
}

export default Line
