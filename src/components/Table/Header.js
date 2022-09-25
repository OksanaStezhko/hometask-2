import Action from './Action'

import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

const Header = ({ scheme, option, actions }) => {
  return (
    <ul className={styles.header}>
      {scheme.map((elem) => (
        <li key={elem.name} className={cx('item', elem.width)}>
          {elem.view}
        </li>
      ))}
      <Action option={option} actions={actions} />
    </ul>
  )
}
export default Header
