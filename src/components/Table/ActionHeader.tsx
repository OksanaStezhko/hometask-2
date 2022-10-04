import { useContext } from 'react'
import ButtonAction from './ButtonAction'
import { tableContext } from './Table'

const ActionHeader = () => {
  const options = useContext(tableContext)
  const { actionsHeader } = options
  return actionsHeader ? (
    <li key={'buttons'} className={'flex items-center justify-center'}>
      {actionsHeader.map(({ name, action }) => {
        return <ButtonAction name={name} action={action} key={name} />
      })}
    </li>
  ) : (
    <></>
  )
}

export default ActionHeader
