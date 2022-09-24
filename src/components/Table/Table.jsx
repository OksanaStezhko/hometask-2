import React from 'react'
import cx from 'classnames'

import Header from './Header'
import List from './List'


const Table = ({data, schemeRow, schemeHeaderButtons, schemeRowButtons}) => {
  return (
    <div>
      <Header scheme={schemeRow} option={schemeHeaderButtons} />
      <List scheme={schemeRow} option={schemeRowButtons} data={data} />
    </div>
  )
}

export default Table
