import React from 'react'
import Header from './Header'
import Footer from './Footer'
import DiscountHeader from './DiscountHeader'

const Layout = ({children}:any) => {
  return (
    <div>
    <DiscountHeader/>
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout
