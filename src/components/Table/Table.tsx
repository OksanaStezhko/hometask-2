import React from 'react'
import Header from './Header'
import List from './List'
import {
  TFormattedData,
  TSummary,
  TActionsRow,
  TActionsHeader,
  TColumnsNote,
  TColumnsSummary,
} from '../../type'

type TProps<T> = {
  data: T
  scheme: T extends TFormattedData[] ? TColumnsNote[] : TColumnsSummary[]
  actionsRow?: T extends TFormattedData[] ? TActionsRow[] : undefined
  actionsHeader?: T extends TFormattedData[] ? TActionsHeader[] : undefined
}

interface IProps {
  options: TProps<TFormattedData[] | TSummary[]>
}

interface IOptions {
  data: TFormattedData[] | TSummary[]
  scheme: TColumnsNote[] | TColumnsSummary[]
  actionsRow?: TActionsRow[] | undefined
  actionsHeader?: TActionsHeader[] | undefined
}

export const tableContext = React.createContext<IOptions>({} as IOptions)

const Table: React.FC<IProps> = ({ options }) => {
  return (
    <tableContext.Provider value={options}>
      <div>
        <Header />
        <List />
      </div>
    </tableContext.Provider>
  )
}

export default Table
