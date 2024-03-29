import React, { useState } from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import TopHeader from './TopHeader'
import Drawer from 'react-modern-drawer'
import Image from 'next/image'
import Link from 'next/link'
import { BsCrop, BsList, BsXLg } from 'react-icons/bs'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <>
    <div className="header bg--shadow">
      {/* <TopHeader /> */}
      <div className="container--responsive header--menu pb--5 flex flex--justify-content-between flex--align-items-center">
        <HeaderLeft/>
        <HeaderRight toggleDrawer={toggleDrawer} />
      </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className=''
      >
       <div className="flex flex--direction-column flex--justify-content-between flex--align-items-center pd--15">
       <Link href={"/"}>
        <Image src="/assets/image/logo.png" alt="" width="70" height="70"/>
        </Link>

        <ul className='flex flex--direction-column flex--align-items-center width--column-two-10'>
            <li className='fs--22 mt--10' onClick={toggleDrawer}><Link href={"/"}> Home</Link></li>
            <li className='fs--22 mt--20' onClick={toggleDrawer}><Link href={"/about"}>About</Link></li>
            <li className='fs--22 mt--20' onClick={toggleDrawer}><Link href={"/product"}>Product</Link></li>
            <li className='fs--22 mt--20' onClick={toggleDrawer}><Link href={"/contact"}>Contact</Link></li>
        </ul>
    </div>
      </Drawer>
    </>
  )
}

export default Header