import React from 'react'
import Navbar from './navbar/Navbar'

interface ILayoutChildren{
    children : React.ReactNode
}


const Layout = ({children} : ILayoutChildren) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout
