'use client'

import Link from 'next/link'
import {useState} from 'react'


export const Navbar = () => {

  const [mobileNav, setMobileNav] = useState(false)

  const handleCTA = () => {
    window.location = '/'
  }
  
  return (
    <nav className='bg-secondary-300 shadow-md flex justify-between items-center px-4 md:px-[50pt] py-5 font-semibold sticky'>
      <div className='w-auto font-black text-2xl text-accent-100'>  
        Softtech
      </div>

      <div className='block md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
      <div className={`w-auto md:flex ${mobileNav ? 'flex' : 'hidden'} flex-col md:flex-row md:space-x-10 md:mr-3 text-sm items-center` }>
        <Link href="/" className='active'>Home</Link>
        <Link href="/">Company</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Careers</Link>
        <Link href="/">Hire Developers</Link>
        <Link href="/">Services</Link>
        <button onClick={handleCTA} className='cta-gradient rounded-full py-2.5 px-7'>Contact Us</button>
      </div>
    </nav>
  )
}
