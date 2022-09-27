import parse from 'html-react-parser'
import { TSchemeButtonRow } from '../../type'
import { buttonImages } from '../../tools/variables'
import styles from './Table.module.css'

interface IProps {
  name: TSchemeButtonRow
}
const ButtonLink: React.FC<IProps> = ({ name }) => {
  const image = buttonImages[name]
  return (
    <button key={name} className={styles['button-link']}>
      {image ? parse(image) : name}
    </button>
  )
}

export default ButtonLink
