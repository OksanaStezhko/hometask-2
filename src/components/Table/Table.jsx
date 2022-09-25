import React from 'react'
import Header from './Header'
import List from './List'


import classNames from 'classnames/bind'
import styles from './Table.module.css'
let cx = classNames.bind(styles)


const Table = ({data, schemes, actions}) => {
  const {schemeData, schemeButtons, schemeHeaderButtons}  = schemes;

  return (
    <div>
      <Header scheme={schemeData} option={schemeHeaderButtons} actions = {actions} />
      <List scheme={schemeData} option={schemeButtons} data={data} actions = {actions}/>
    </div>
  )
}

export default Table
