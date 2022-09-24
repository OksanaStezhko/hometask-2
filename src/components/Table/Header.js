import styles from './Table.module.css'
import Action from './Action'

import classNames from 'classnames/bind'
let cx = classNames.bind(styles)

const Header = ({ scheme, option }) => {
  return (
    <ul className={styles.line}>
      {scheme.map((elem) => (
        <li key={elem.name} className={cx('item', elem.width)}>
          {elem.view}
        </li>
      ))}
      <Action option={option} />
    </ul>
  )
}
export default Header
