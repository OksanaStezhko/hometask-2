import ActionHeader from './ActionHeader'
import { TActionsHeader, TColumns } from '../../type'
import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

interface IProps {
  scheme: TColumns[]
  actions?: TActionsHeader[] | undefined
}

const Header: React.FC<IProps> = ({ scheme, actions }) => {
  return (
    <ul className={styles.header}>
      {scheme.map((elem) => (
        <li key={elem.name} className={cx('item', elem.width)}>
          {elem.view}
        </li>
      ))}
      {actions && <ActionHeader actions={actions} />}
    </ul>
  )
}
export default Header
