import { useContext } from 'react'
import ButtonAction from './ButtonAction'
import { TActionsHeader } from '../../type'
import { tableContext } from './Table'
import styles from './Table.module.css'

interface IProps {
  actions: TActionsHeader[]
}

const ActionHeader = () => {
  const options = useContext(tableContext)
  const { actionsHeader } = options
  return actionsHeader ? (
    <li key={'buttons'} className={styles.actions}>
      {actionsHeader.map(({ name, action }) => {
        return <ButtonAction name={name} action={action} key={name} />
      })}
    </li>
  ) : (
    <></>
  )
}

export default ActionHeader
