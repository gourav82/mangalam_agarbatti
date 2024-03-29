import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderLeft = () => {
  return (
    <div className="header--menu-items flex flex--justify-content-between flex--align-items-center">
       <Link href={"/"}> <Image src="/assets/image/logo.png" alt="" width="100" height="100"/></Link>
        <ul className='flex flex--justify-content-between flex--align-items-center width--column-two-10'>
            <Link href={"/"}> <li className='fs--17 ml--20'>Home</li></Link>
            <Link href={"/about"}> <li className='fs--17 ml--20'>About</li></Link>
            <Link href={"/product"}> <li className='fs--17 ml--20'>Product</li></Link>
            <Link href={"/contact"}> <li className='fs--17 ml--20'>Contact</li></Link>
        </ul>
    </div>
    )
}

export default HeaderLeft


