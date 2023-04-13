import React from 'react'
import PRHeader from './pre-header'
import Header from './header'
import Navbar from './navbar'

const BHeader = () => {
  return (
    <header className="header clear" role="banner">
      <PRHeader/>
      <Header>
        <Navbar/>
      </Header>
    </header>
  )
}


export default BHeader

