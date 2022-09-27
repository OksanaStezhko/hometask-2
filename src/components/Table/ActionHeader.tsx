import ButtonAction from './ButtonAction'
import { TActionsHeader } from '../../type'
import styles from './Table.module.css'

interface IProps {
  actions: TActionsHeader[]
}

const ActionHeader: React.FC<IProps> = ({ actions }) => {
  return (
    <li key={'buttons'} className={styles.actions}>
      {actions.map(({ name, action }) => {
        return <ButtonAction name={name} action={action} />
      })}
    </li>
  )
}

export default ActionHeader
