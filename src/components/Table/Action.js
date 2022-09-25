import parse from 'html-react-parser'
import { buttonImages } from '../../tools/variables'

import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

const Action = ({ option, actions, id }) => {
  return (
    option && (
      <li key={'buttons'}>
        {option.map((elem) => {
          const actionButton = actions ? actions[elem] : undefined
          const image = buttonImages[elem]
          return (
            <button key={elem} onClick={() => actionButton(id)}>
              {image ? parse(buttonImages[elem]) : elem}
            </button>
          )
        })}
      </li>
    )
  )
}

export default Action
