import React from 'react'
import Header from './Header'
import BackgroundEffect from './BackgroundEffect'

const Layout = ({ children }) => {
  return (
    <>
        <BackgroundEffect />
        <Header />
        {children}
    </>
  )
}

export default Layout