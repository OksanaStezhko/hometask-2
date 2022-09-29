import { useContext } from 'react'
import ActionHeader from './ActionHeader'
import { TActionsHeader, TColumns } from '../../type'
import { tableContext } from './Table'
import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

interface IProps {
  scheme: TColumns[]
  actions?: TActionsHeader[] | undefined
}

const Header = () => {
  const options = useContext(tableContext)
  const { scheme, actionsHeader } = options
  return (
    <ul className={styles.header}>
      {scheme.map((elem) => (
        <li key={elem.name} className={cx('item', elem.width)}>
          {elem.view}
        </li>
      ))}
      {actionsHeader && <ActionHeader actions={actionsHeader} />}
    </ul>
  )
}
export default Header
