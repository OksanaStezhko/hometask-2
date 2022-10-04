import { TSchemeButtonRow } from '../../type'
import { buttonImages } from '../../tools/variables'
import ImageButton from './ImageButton'

interface IProps {
  name: TSchemeButtonRow
}

const ButtonLink: React.FC<IProps> = ({ name }) => {
  const image = buttonImages[name]
  return (
    <button key={name} className={'button-link'}>
      {image ? <ImageButton name={name} /> : name}
    </button>
  )
}

export default ButtonLink
