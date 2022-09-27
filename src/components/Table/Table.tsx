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

const Table: React.FC<IProps> = ({ options }) => {
  return (
    <div>
      <Header scheme={options.scheme} actions={options.actionsHeader} />
      <List
        scheme={options.scheme}
        data={options.data}
        actions={options.actionsRow}
      />
    </div>
  )
}

export default Table
