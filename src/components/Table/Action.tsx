import { useAppSelector } from '../../hook'
import { Link } from 'react-router-dom'
import ButtonAction from './ButtonAction'
import ButtonLink from './ButtonLink'
import { TActionsRow } from '../../type'

import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

interface IProps {
  id: string
  actions: TActionsRow[]
}

const Action: React.FC<IProps> = ({ actions, id }) => {
  const showArchivedNotes = useAppSelector((state) => state.showArchive.show)

  return (
    <li key={'buttons'} className={styles.actions}>
      {actions.map(({ name, action }) => {
        if (name === 'edit') {
          return (
            <Link
              key={name}
              to={`/hometask-2/edit/${id}`}
              className={
                showArchivedNotes
                  ? cx('button-link', 'disabled')
                  : styles['button-link']
              }
            >
              <ButtonLink name={name} />
            </Link>
          )
        }
        return action && <ButtonAction name={name} action={action} id={id} />
      })}
    </li>
  )
}

export default Action
