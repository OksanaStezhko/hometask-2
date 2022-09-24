import classNames from 'classnames/bind'
import parse from 'html-react-parser'
import { buttonImages } from '../../tools/variables'

import styles from './Table.module.css'
let cx = classNames.bind(styles)

const Action = ({ option }) => {
  return (
    <li key={'buttons'}>
      {option.map((elem) => {
        const image = buttonImages[elem]
        return (
          <button key={elem}>{image ? parse(buttonImages[elem]) : elem}</button>
        )
      })}
    </li>
  )
}

export default Action
