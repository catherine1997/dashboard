import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

function Layout() {
  return (
    <div className='flex'>
     <Header />
     <div className='w-full ml-16 md:ml-56'>
        <Sidebar />
        <Outlet />
     </div>
    </div>
  )
}

export default Layout
