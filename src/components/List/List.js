import ListItem from '../ListItem'
import styles from './List.module.css'
import { headerNotes } from '../../tools/variables'

const List = ({ dataArray }) => {
  return (
    <ul className={styles.list}>
      <ListItem key={'nameColumn'} {...headerNotes} />
      {dataArray.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ul>
  )
}

export default List
