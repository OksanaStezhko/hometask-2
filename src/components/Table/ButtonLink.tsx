import { TSchemeButtonRow } from '../../type'
import { buttonImages } from '../../tools/variables'
import styles from './Table.module.css'
import ImageButton from './ImageButton'

interface IProps {
  name: TSchemeButtonRow
}

const ButtonLink: React.FC<IProps> = ({ name }) => {
  const image = buttonImages[name]
  return (
    <button key={name} className={styles['button-link']}>
      {image ? <ImageButton name={name} /> : name}
    </button>
  )
}

export default ButtonLink
