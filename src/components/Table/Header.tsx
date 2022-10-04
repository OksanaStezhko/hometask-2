import { useContext } from 'react'
import ActionHeader from './ActionHeader'
import { tableContext } from './Table'

const Header = () => {
  const options = useContext(tableContext)
  const { scheme, actionsHeader } = options
  return (
    <ul className={'flex justify-between p-2 bg-dark-gray text-white'}>
      {scheme.map(({ name, width, view }) => (
        <li key={name} className={`item ${width}`}>
          {view}
        </li>
      ))}
      {actionsHeader && <ActionHeader />}
    </ul>
  )
}
export default Header
