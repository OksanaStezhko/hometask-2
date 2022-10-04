import { useContext } from 'react'
import { useAppSelector } from '../../hook'
import { Link } from 'react-router-dom'
import ButtonAction from './ButtonAction'
import ButtonLink from './ButtonLink'

import { tableContext } from './Table'
import { path } from '../../tools/variables'

interface IProps {
  id: string
}

const Action = ({ id }: IProps) => {
  const showArchivedNotes = useAppSelector((state) => state.showArchive.show)
  const options = useContext(tableContext)
  const { actionsRow } = options
  return actionsRow ? (
    <li key={'buttons'} className={'flex items-center justify-center'}>
      {actionsRow.map(({ name, action }) => {
        if (name === 'edit') {
          return (
            <Link
              key={name}
              to={`${path}/edit/${id}`}
              className={` w-full h-full mr-2 border-none bg-inherit
              ${
                showArchivedNotes
                  ? ' text-gray-300  pointer-events-none'
                  : ' text-black'
              }
              `}
            >
              <ButtonLink name={name} />
            </Link>
          )
        }
        return (
          action && (
            <ButtonAction name={name} action={action} id={id} key={name} />
          )
        )
      })}
    </li>
  ) : (
    <></>
  )
}

export default Action
