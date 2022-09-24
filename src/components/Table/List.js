import styles from './Table.module.css'
import Line from './Line'

const List = ({ scheme, option, data }) => {
  return (
    <ul>
      {data.map((row) => {
        return <Line scheme={scheme} option={option} row={row} key={row.id} />
      })}
    </ul>
  )
}

export default List
