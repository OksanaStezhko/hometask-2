import Line from './Line'

import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)

const List = ({ scheme, option, data, actions }) => {
  return (
    <ul>
      {data.map((row) => {
        return (
          <Line
            scheme={scheme}
            option={option}
            row={row}
            key={row.id}
            actions={actions}
          />
        )
      })}
    </ul>
  )
}

export default List
