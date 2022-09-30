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

interface IOptions {
  data: TFormattedData[] | TSummary[]
  scheme: TColumnsNote[] | TColumnsSummary[]
  actionsRow?: TActionsRow[] | never
  actionsHeader?: TActionsHeader[] | never
}

export const tableContext = React.createContext<IOptions>({} as IOptions)

const Table: React.FC<IOptions> = ({
  data,
  scheme,
  actionsRow,
  actionsHeader,
}) => {
  return (
    <tableContext.Provider value={{ data, scheme, actionsRow, actionsHeader }}>
      <div>
        <Header />
        <List />
      </div>
    </tableContext.Provider>
  )
}

export default Table
