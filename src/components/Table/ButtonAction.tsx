import ImageButton from './ImageButton'
import { TSchemeButtonRow, TSchemeButtonHeader } from '../../type'
import { buttonImages } from '../../tools/variables'
import styles from './Table.module.css'

interface IProps {
  name: TSchemeButtonRow | TSchemeButtonHeader
  action: Function
  id?: string
}

const ButtonAction: React.FC<IProps> = ({ name, action, id }) => {
  const image = buttonImages[name]
  return (
    <button
      key={name}
      onClick={id ? () => action(id) : () => action()}
      className={styles['button-link']}
    >
      {image ? <ImageButton name={name} /> : name}
    </button>
  )
}

export default ButtonAction
