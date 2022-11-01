import React from 'react'
import Header from './Header'
import BackgroundEffect from './BackgroundEffect'

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        <BackgroundEffect />
        {children}
    </>
  )
}

export default Layout