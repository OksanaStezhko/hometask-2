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
        return action && <ButtonAction name={name} action={action} id={id} />
      })}
    </li>
    // <li key={'buttons'} className={styles.actions}>
    //   {actions.map((elem) => {
    //     const image = buttonImages[elem.name]
    //     if (elem.name === 'edit') {
    //       return (
    //         <Link
    //           key={elem.name}
    //           to={`/edit/${id}`}
    //           className={
    //             showArchivedNotes
    //               ? cx('button-link', 'disabled')
    //               : styles['button-link']
    //           }
    //         >
    //           <button
    //             className={
    //               showArchivedNotes
    //                 ? cx('button-link', 'disabled')
    //                 : styles['button-link']
    //             }
    //           >
    //             {image ? parse(image) : elem.name}
    //           </button>
    //         </Link>
    //       )
    //     }
    //     return (
    //       <button
    //         key={elem.name}
    //         onClick={elem.action ? () => elem.action(id) : undefined}
    //         className={styles['button-link']}
    //       >
    //         {image ? parse(image) : elem.name}
    //       </button>
    //     )
    //   })}
    // </li>
  )
}

export default Action
