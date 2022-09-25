import parse from 'html-react-parser'
import { useSelector } from 'react-redux'
import { buttonImages } from '../../tools/variables'
import { buttonNames } from '../../tools/variables'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

const Action = ({ option, actions, id }) => {
  const showArchivedNotes = useSelector((state) => state.showArchive.show)
  return (
    option && (
      <li key={'buttons'} className={styles.actions}>
        {option.map((elem) => {
          const actionButton = actions ? actions[elem] : undefined
          const image = buttonImages[elem]
          if (elem === buttonNames.edit) {
            return (
              <Link
                key={elem}
                to={`/edit/${id}`}
                className={
                  showArchivedNotes
                    ? cx('button-link', 'disabled')
                    : styles['button-link']
                }
              >
                <button
                  className={
                    showArchivedNotes
                      ? cx('button-link', 'disabled')
                      : styles['button-link']
                  }
                >
                  {image ? parse(buttonImages[elem]) : elem}
                </button>
              </Link>
            )
          }
          return (
            <button
              key={elem}
              onClick={() => actionButton(id)}
              className={styles['button-link']}
            >
              {image ? parse(buttonImages[elem]) : elem}
            </button>
          )
        })}
      </li>
    )
  )
}

export default Action
