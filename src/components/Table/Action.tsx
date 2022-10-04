import { useContext } from 'react'
import { useAppSelector } from '../../hook'
import { Link } from 'react-router-dom'
import ButtonAction from './ButtonAction'
import ButtonLink from './ButtonLink'

import { tableContext } from './Table'
import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

interface IProps {
  id: string
}

const Action = ({ id }: IProps) => {
  const showArchivedNotes = useAppSelector((state) => state.showArchive.show)
  const options = useContext(tableContext)
  const { actionsRow } = options
  return actionsRow ? (
    <li key={'buttons'} className={styles.actions}>
      {actionsRow.map(({ name, action }) => {
        if (name === 'edit') {
          return (
            <Link
              key={name}
              to={`/edit/${id}`}
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
        return (
          action && (
            <ButtonAction name={name} action={action} id={id} key={name} />
          )
        )
      })}
    </li>
  ) : (
    <></>
  )
}

export default Action
