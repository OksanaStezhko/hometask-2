import { useContext } from 'react'
import Action from './Action'
import ImageButton from './ImageButton'
import { tableContext } from './Table'
import { TFormattedData, TSummary, TCategories } from '../../type'

interface IProps {
  row: TFormattedData | TSummary
}

const Line = ({ row }: IProps) => {
  const options = useContext(tableContext)
  const { scheme, actionsRow } = options

  type currentTypeColumn = keyof typeof row
  return (
    <ul className={'line'}>
      {scheme.map(({ name, width }) => {
        const nameColumn = name as currentTypeColumn
        const nameCategory = row.category as TCategories
        return (
          <li
            key={name}
            className={`item ${width} ${name === 'image' && ' white-button'}`}
          >
            {name === 'image' ? (
              <ImageButton name={nameCategory} />
            ) : (
              <span className={'block break-word  text-left'}>
                {row[nameColumn]}
              </span>
            )}
          </li>
        )
      })}
      {actionsRow && <Action id={row.id} />}
    </ul>
  )
}

export default Line
