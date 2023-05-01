import React, { useContext } from 'react'
import PRHeader from './pre-header'
import Header from './header'
import GlobalContext from '@/src/context/globalContext'

const BHeader = () => {
  return (
    <header className="header clear" role="banner">
      <PRHeader/>
      <Header />
    </header>
  )
}


export default BHeader

