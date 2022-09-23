import styles from './ListItem.module.css'

const ListItem = ({ id, name, created, category, content, dates }) => {

  return (
    <li>
      <ul className={styles.row}>
        <li className={styles.row__elem__wide}>{name}</li>
        <li className={styles.row__elem}>{created}</li>
        <li className={styles.row__elem}>{category}</li>
        <li className={styles.row__elem__wide}>{content}</li>
        <li className={styles.row__elem}>{dates}</li>
        <li className={styles.row__elem}>
          <button type="button" className={styles.button} data-index={{ id }}>
            <i
              className={'fa-solid fa-pencil notes__line__button-edit'}
              data-index={{ id }}
            ></i>
          </button>
          <button type="button" className={styles.button} data-index={{ id }}>
            <i className={'fa-solid fa-box-archive'}></i>
          </button>
          <button type="button" className={styles.button} data-index={{ id }}>
            <i className={'fa-solid fa-trash-can'}></i>
          </button>
        </li>
      </ul>
    </li>
  )
}

export default ListItem
